'use client';

import { useMemo, useState } from 'react';
import { Lock, Play, RotateCcw, ShieldAlert, ShieldCheck, Unlock } from 'lucide-react';
import { useApp } from '@/components/AppProvider';
import PageHeader from '@/components/PageHeader';

/* ---------- Topologi lab (semua node fiktif, hanya di browser) ---------- */

const NODES = {
  pc: { x: 70, y: 150, label: 'Laptop', sub: '192.168.56.10' },
  router: { x: 230, y: 150, label: 'Router', sub: '192.168.56.1' },
  dns: { x: 390, y: 60, label: 'DNS', sub: '192.168.56.53' },
  fw: { x: 390, y: 150, label: 'Firewall', sub: 'gateway' },
  web: { x: 550, y: 100, label: 'Web Server', sub: '203.0.113.10' },
  db: { x: 550, y: 220, label: 'Database', sub: '10.0.0.5 (private)' },
};

const EDGES = [
  ['pc', 'router'],
  ['router', 'dns'],
  ['router', 'fw'],
  ['fw', 'web'],
  ['fw', 'db'],
];

const FLOWS = {
  dns: {
    path: ['pc', 'router', 'dns'],
    steps: [
      { id: 'Laptop bertanya: "Berapa IP dari www.example.test?" (query DNS, UDP port 53).', en: 'The laptop asks: "What is the IP of www.example.test?" (DNS query, UDP port 53).', at: 0 },
      { id: 'Router meneruskan query ke server DNS lab.', en: 'The router forwards the query to the lab DNS server.', at: 1 },
      { id: 'Server DNS menjawab: www.example.test = 203.0.113.10. Jawaban kembali ke laptop dan disimpan di cache.', en: 'The DNS server answers: www.example.test = 203.0.113.10. The answer returns to the laptop and is cached.', at: 2 },
    ],
  },
  http: {
    path: ['pc', 'router', 'fw', 'web'],
    steps: [
      { id: 'Laptop membuka koneksi TCP ke 203.0.113.10:80 (SYN, SYN-ACK, ACK).', en: 'The laptop opens a TCP connection to 203.0.113.10:80 (SYN, SYN-ACK, ACK).', at: 0 },
      { id: 'Router meneruskan paket ke firewall.', en: 'The router forwards the packet to the firewall.', at: 1 },
      { id: 'Firewall memeriksa aturan: port 80 diizinkan ke web server, lalu meneruskan.', en: 'The firewall checks its rules: port 80 to the web server is allowed, so it forwards.', at: 2 },
      { id: 'Web server menerima "GET /" dan membalas halaman. Karena HTTP polos, isi permintaan terbaca di jalur.', en: 'The web server receives "GET /" and replies with a page. Because this is plain HTTP, the request is readable on the path.', at: 3 },
    ],
  },
  https: {
    path: ['pc', 'router', 'fw', 'web'],
    steps: [
      { id: 'Laptop membuka TCP ke 203.0.113.10:443, lalu memulai TLS handshake.', en: 'The laptop opens TCP to 203.0.113.10:443, then starts the TLS handshake.', at: 0 },
      { id: 'Router meneruskan paket ke firewall.', en: 'The router forwards the packet to the firewall.', at: 1 },
      { id: 'Firewall mengizinkan port 443 ke web server.', en: 'The firewall allows port 443 to the web server.', at: 2 },
      { id: 'Web server mengirim sertifikat. Laptop memverifikasi lalu keduanya menyepakati kunci sesi. Setelah itu data terenkripsi.', en: 'The web server sends its certificate. The laptop verifies it and both agree on a session key. After that, data is encrypted.', at: 3 },
    ],
  },
};

const FLOW_OPTIONS = [
  { key: 'dns', id: 'Pencarian DNS', en: 'DNS lookup' },
  { key: 'http', id: 'Permintaan HTTP', en: 'HTTP request' },
  { key: 'https', id: 'Permintaan HTTPS', en: 'HTTPS request' },
];

/* ---------- Firewall: aturan dievaluasi dari atas ke bawah ---------- */

const PACKETS = [
  { id: 'p1', src: '198.51.100.24', dst: '203.0.113.10', port: 443, proto: 'TCP', note: { id: 'Pengunjung membuka situs (HTTPS)', en: 'Visitor opens the site (HTTPS)' } },
  { id: 'p2', src: '198.51.100.24', dst: '203.0.113.10', port: 80, proto: 'TCP', note: { id: 'Pengunjung membuka situs (HTTP)', en: 'Visitor opens the site (HTTP)' } },
  { id: 'p3', src: '203.0.113.77', dst: '203.0.113.10', port: 22, proto: 'TCP', note: { id: 'Percobaan SSH dari luar', en: 'SSH attempt from outside' } },
  { id: 'p4', src: '203.0.113.77', dst: '10.0.0.5', port: 5432, proto: 'TCP', note: { id: 'Akses langsung ke database dari luar', en: 'Direct database access from outside' } },
  { id: 'p5', src: '203.0.113.10', dst: '10.0.0.5', port: 5432, proto: 'TCP', note: { id: 'Web server menanyakan database (internal)', en: 'Web server queries the database (internal)' } },
  { id: 'p6', src: '192.168.56.10', dst: '192.168.56.53', port: 53, proto: 'UDP', note: { id: 'Laptop meminta DNS', en: 'Laptop asks for DNS' } },
  { id: 'p7', src: '198.51.100.99', dst: '203.0.113.10', port: 3389, proto: 'TCP', note: { id: 'Percobaan remote desktop dari luar', en: 'Remote desktop attempt from outside' } },
];

const DEFAULT_RULES = [
  { id: 'r1', action: 'allow', proto: 'TCP', port: 443, from: 'any', to: '203.0.113.10', enabled: true, label: { id: 'Izinkan HTTPS ke web server', en: 'Allow HTTPS to the web server' } },
  { id: 'r2', action: 'allow', proto: 'TCP', port: 80, from: 'any', to: '203.0.113.10', enabled: false, label: { id: 'Izinkan HTTP ke web server', en: 'Allow HTTP to the web server' } },
  { id: 'r3', action: 'allow', proto: 'TCP', port: 5432, from: '203.0.113.10', to: '10.0.0.5', enabled: true, label: { id: 'Izinkan web server ke database (hanya internal)', en: 'Allow web server to database (internal only)' } },
  { id: 'r4', action: 'allow', proto: 'UDP', port: 53, from: '192.168.56.10', to: '192.168.56.53', enabled: true, label: { id: 'Izinkan laptop ke DNS lab', en: 'Allow laptop to the lab DNS' } },
  { id: 'r5', action: 'allow', proto: 'TCP', port: 22, from: 'any', to: '203.0.113.10', enabled: false, label: { id: 'Izinkan SSH dari mana saja (berisiko)', en: 'Allow SSH from anywhere (risky)' } },
];

function evalPacket(pkt, rules) {
  for (const r of rules) {
    if (!r.enabled) continue;
    const match = r.proto === pkt.proto && r.port === pkt.port && (r.from === 'any' || r.from === pkt.src) && r.to === pkt.dst;
    if (match) return { result: r.action, rule: r };
  }
  return { result: 'deny', rule: null };
}

/* ---------- Komponen ---------- */

function Topology({ activePath, activeAt, packetAt }) {
  const activeNodes = new Set(activePath.slice(0, activeAt + 1));
  const edgeActive = (a, b) => {
    const ia = activePath.indexOf(a);
    const ib = activePath.indexOf(b);
    return ia !== -1 && ib !== -1 && Math.abs(ia - ib) === 1 && Math.max(ia, ib) <= activeAt;
  };
  const pk = packetAt ? NODES[packetAt] : null;

  return (
    <svg className="topo" viewBox="0 0 640 290" role="img" aria-label="Topologi jaringan lab / Lab network topology">
      <defs>
        <filter id="topo-glow">
          <feGaussianBlur stdDeviation="2.5" />
        </filter>
      </defs>
      {EDGES.map(([a, b]) => (
        <line
          key={`${a}-${b}`}
          className={`edge ${edgeActive(a, b) ? 'active' : ''}`}
          x1={NODES[a].x}
          y1={NODES[a].y}
          x2={NODES[b].x}
          y2={NODES[b].y}
        />
      ))}
      {Object.entries(NODES).map(([key, n]) => (
        <g key={key} className={`node ${activeNodes.has(key) ? 'active' : ''}`}>
          <rect x={n.x - 44} y={n.y - 24} width="88" height="48" rx="9" />
          <text x={n.x} y={n.y - 3}>
            {n.label}
          </text>
          <text x={n.x} y={n.y + 13} className="sub">
            {n.sub}
          </text>
        </g>
      ))}
      {pk ? (
        <g style={{ transform: `translate(${pk.x}px, ${pk.y - 38}px)`, transition: 'transform .9s ease' }} className="packet">
          <circle r="7" fill="#39ff88" filter="url(#topo-glow)" />
          <circle r="4" fill="#39ff88" />
        </g>
      ) : null}
    </svg>
  );
}

function FlowLab() {
  const { t } = useApp();
  const [flowKey, setFlowKey] = useState('dns');
  const [step, setStep] = useState(-1);
  const flow = FLOWS[flowKey];

  const current = step >= 0 ? flow.steps[step] : null;
  const activePath = flow.path;
  const activeAt = current ? current.at : -1;
  const packetAt = current ? activePath[current.at] : null;

  const select = (k) => {
    setFlowKey(k);
    setStep(-1);
  };

  const wireText = useMemo(() => {
    if (flowKey === 'http') return { cls: 'plain', text: 'GET /login HTTP/1.1\nHost: www.example.test\nCookie: session=demo123', locked: false };
    if (flowKey === 'https') return { cls: 'enc', text: '17 03 03 00 5a 9f 2c e1 77 0b d4 a3 18 ... (terenkripsi / encrypted)', locked: true };
    return { cls: 'plain', text: 'QUERY A www.example.test? -> ANSWER 203.0.113.10 (TTL 300)', locked: false };
  }, [flowKey]);

  return (
    <div className="lab-grid">
      <div className="panel pad-lg">
        <Topology activePath={activePath} activeAt={activeAt} packetAt={packetAt} />
        <p className="muted small" style={{ marginTop: 6 }}>
          {t('Semua alamat adalah contoh dokumentasi (RFC 5737 / RFC 1918). Ini hanya animasi, tidak ada paket nyata.', 'All addresses are documentation examples (RFC 5737 / RFC 1918). This is only an animation, no real packets are sent.')}
        </p>
      </div>

      <div className="grid">
        <div className="panel pad-lg">
          <div className="chip-row" role="group" aria-label={t('Pilih skenario', 'Choose scenario')} style={{ marginBottom: 14 }}>
            {FLOW_OPTIONS.map((o) => (
              <button key={o.key} type="button" className={`chip ${flowKey === o.key ? 'on' : ''}`} aria-pressed={flowKey === o.key} onClick={() => select(o.key)}>
                {t(o.id, o.en)}
              </button>
            ))}
          </div>

          <div className="step-box" aria-live="polite" style={{ minHeight: 92 }}>
            {current ? (
              <>
                <span className="kicker">
                  {t('Langkah', 'Step')} {step + 1}/{flow.steps.length}
                </span>
                <p style={{ marginTop: 6 }}>{t(current.id, current.en)}</p>
              </>
            ) : (
              <p className="muted">{t('Tekan "Mulai" lalu "Langkah berikutnya" untuk melihat perjalanan data.', 'Press "Start" then "Next step" to follow the data journey.')}</p>
            )}
          </div>

          <div className="btn-row" style={{ marginTop: 12 }}>
            {step === -1 ? (
              <button className="btn btn-primary" type="button" onClick={() => setStep(0)}>
                <Play size={16} /> {t('Mulai', 'Start')}
              </button>
            ) : (
              <button className="btn btn-primary" type="button" onClick={() => setStep((s) => Math.min(flow.steps.length - 1, s + 1))} disabled={step >= flow.steps.length - 1}>
                {t('Langkah berikutnya', 'Next step')}
              </button>
            )}
            <button className="btn" type="button" onClick={() => setStep(-1)}>
              <RotateCcw size={16} /> {t('Ulangi', 'Restart')}
            </button>
          </div>
        </div>

        <div className="panel pad-lg">
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 10 }}>
            {wireText.locked ? <Lock size={17} color="#f472b6" /> : <Unlock size={17} color="#fbbf24" />}
            <strong>{t('Apa yang terlihat di jaringan', 'What is visible on the wire')}</strong>
          </div>
          <pre className={`wire ${wireText.cls}`} style={{ margin: 0, whiteSpace: 'pre-wrap' }}>
            {wireText.text}
          </pre>
          <p className="muted small" style={{ marginTop: 10 }}>
            {wireText.locked
              ? t('Dengan HTTPS, pihak di tengah hanya melihat data acak. Itu sebabnya HTTPS wajib untuk login.', 'With HTTPS, anyone in the middle only sees random-looking data. That is why HTTPS is essential for logins.')
              : t('Tanpa enkripsi, isi komunikasi bisa dibaca siapa pun di jalur. Gunakan HTTPS.', 'Without encryption, anyone on the path can read the contents. Use HTTPS.')}
          </p>
        </div>
      </div>
    </div>
  );
}

function FirewallLab() {
  const { t, tr } = useApp();
  const [rules, setRules] = useState(DEFAULT_RULES);

  const results = useMemo(() => PACKETS.map((p) => ({ pkt: p, ...evalPacket(p, rules) })), [rules]);
  const toggle = (id) => setRules((rs) => rs.map((r) => (r.id === id ? { ...r, enabled: !r.enabled } : r)));

  // Penilaian sederhana: lalu lintas sah harus lolos, lalu lintas berbahaya harus ditolak.
  const expected = { p1: 'allow', p2: 'deny', p3: 'deny', p4: 'deny', p5: 'allow', p6: 'allow', p7: 'deny' };
  const correct = results.filter((r) => r.result === expected[r.pkt.id]).length;
  const perfect = correct === PACKETS.length;

  return (
    <div className="lab-grid">
      <div className="panel pad-lg">
        <div className="section-title" style={{ margin: '0 0 6px' }}>
          <h2>{t('Aturan Firewall', 'Firewall Rules')}</h2>
        </div>
        <p className="muted small" style={{ marginBottom: 12 }}>
          {t('Aturan dievaluasi dari atas ke bawah. Jika tidak ada yang cocok, paket ditolak (default deny). Nyalakan atau matikan aturan.', 'Rules are evaluated top to bottom. If none match, the packet is denied (default deny). Toggle rules on or off.')}
        </p>
        {rules.map((r) => (
          <label key={r.id} className="task" style={{ cursor: 'pointer', alignItems: 'center' }}>
            <input type="checkbox" checked={r.enabled} onChange={() => toggle(r.id)} style={{ width: 18, height: 18, accentColor: '#39ff88' }} />
            <div>
              <div className="task-text" style={{ textDecoration: 'none', color: 'var(--text)' }}>
                {tr(r.label)}
              </div>
              <code>
                {r.action} {r.proto}/{r.port} {r.from} → {r.to}
              </code>
            </div>
          </label>
        ))}
        <button className="btn btn-sm" type="button" style={{ marginTop: 12 }} onClick={() => setRules(DEFAULT_RULES)}>
          <RotateCcw size={14} /> {t('Reset aturan', 'Reset rules')}
        </button>
      </div>

      <div className="grid">
        <div className="panel pad-lg">
          <div className="section-title" style={{ margin: '0 0 10px' }}>
            <h2>{t('Hasil Evaluasi Paket', 'Packet Evaluation')}</h2>
          </div>
          <div className="table-wrap">
            <table className="tbl">
              <thead>
                <tr>
                  <th>{t('Lalu lintas', 'Traffic')}</th>
                  <th>{t('Tujuan', 'Target')}</th>
                  <th>{t('Hasil', 'Result')}</th>
                </tr>
              </thead>
              <tbody>
                {results.map(({ pkt, result }) => (
                  <tr key={pkt.id}>
                    <td style={{ whiteSpace: 'normal', minWidth: 170 }}>{tr(pkt.note)}</td>
                    <td className="mono">
                      {pkt.proto}/{pkt.port}
                    </td>
                    <td className={result === 'allow' ? 'res-allow' : 'res-deny'}>{result === 'allow' ? t('DIIZINKAN', 'ALLOWED') : t('DITOLAK', 'DENIED')}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="panel pad" style={{ display: 'flex', gap: 12, alignItems: 'flex-start' }}>
          {perfect ? <ShieldCheck size={24} color="#39ff88" style={{ flex: 'none' }} /> : <ShieldAlert size={24} color="#fbbf24" style={{ flex: 'none' }} />}
          <div>
            <strong>
              {t('Skor konfigurasi', 'Configuration score')}: {correct}/{PACKETS.length}
            </strong>
            <p className="muted small" style={{ marginTop: 4 }}>
              {perfect
                ? t('Konfigurasi tepat: hanya lalu lintas yang dibutuhkan yang lolos (prinsip least privilege).', 'Well configured: only the needed traffic passes (least privilege).')
                : t('Target: izinkan HTTPS publik, DNS, dan akses web ke database internal. Tolak yang lain, terutama SSH dan database dari luar.', 'Goal: allow public HTTPS, DNS, and the web-to-database internal path. Deny everything else, especially SSH and the database from outside.')}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------- Subnet calculator ---------- */

function parseIPv4(s) {
  const m = /^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/.exec(s.trim());
  if (!m) return null;
  const parts = m.slice(1).map(Number);
  if (parts.some((n) => n > 255)) return null;
  return (((parts[0] << 24) >>> 0) + (parts[1] << 16) + (parts[2] << 8) + parts[3]) >>> 0;
}
const toIP = (n) => [n >>> 24, (n >>> 16) & 255, (n >>> 8) & 255, n & 255].join('.');

function SubnetLab() {
  const { t } = useApp();
  const [ip, setIp] = useState('192.168.56.10');
  const [prefix, setPrefix] = useState(24);

  const result = useMemo(() => {
    const addr = parseIPv4(ip);
    if (addr === null) return null;
    const p = Number(prefix);
    if (!Number.isInteger(p) || p < 0 || p > 32) return null;
    const mask = p === 0 ? 0 : (0xffffffff << (32 - p)) >>> 0;
    const net = (addr & mask) >>> 0;
    const bcast = (net | (~mask >>> 0)) >>> 0;
    const total = 2 ** (32 - p);
    const hosts = p >= 31 ? (p === 31 ? 2 : 1) : total - 2;
    const first = p >= 31 ? net : net + 1;
    const last = p >= 31 ? bcast : bcast - 1;
    return { mask: toIP(mask), net: toIP(net), bcast: toIP(bcast), first: toIP(first), last: toIP(last), hosts };
  }, [ip, prefix]);

  return (
    <div className="lab-grid">
      <div className="panel pad-lg">
        <div className="grid">
          <div className="field">
            <label htmlFor="sub-ip">{t('Alamat IPv4', 'IPv4 address')}</label>
            <input id="sub-ip" className="input mono" value={ip} onChange={(e) => setIp(e.target.value)} inputMode="decimal" spellCheck={false} />
          </div>
          <div className="field">
            <label htmlFor="sub-prefix">
              {t('Panjang prefix', 'Prefix length')} /{prefix}
            </label>
            <input id="sub-prefix" type="range" min="0" max="32" value={prefix} onChange={(e) => setPrefix(Number(e.target.value))} style={{ accentColor: '#39ff88', width: '100%' }} />
          </div>
          <div className="chip-row">
            {[8, 16, 24, 26, 28, 30].map((p) => (
              <button key={p} type="button" className={`chip ${Number(prefix) === p ? 'on' : ''}`} onClick={() => setPrefix(p)}>
                /{p}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="panel pad-lg">
        {result ? (
          <div className="kv">
            <div>
              <small>Network</small>
              <b>
                {result.net}/{prefix}
              </b>
            </div>
            <div>
              <small>Netmask</small>
              <b>{result.mask}</b>
            </div>
            <div>
              <small>{t('Host pertama', 'First host')}</small>
              <b>{result.first}</b>
            </div>
            <div>
              <small>{t('Host terakhir', 'Last host')}</small>
              <b>{result.last}</b>
            </div>
            <div>
              <small>Broadcast</small>
              <b>{result.bcast}</b>
            </div>
            <div>
              <small>{t('Jumlah host', 'Usable hosts')}</small>
              <b>{result.hosts.toLocaleString()}</b>
            </div>
          </div>
        ) : (
          <p className="muted">{t('Masukkan IPv4 yang valid, mis. 192.168.56.10', 'Enter a valid IPv4 address, e.g. 192.168.56.10')}</p>
        )}
        <p className="muted small" style={{ marginTop: 12 }}>
          {t('Perhitungan murni matematika di browser. Tidak ada koneksi ke alamat tersebut.', 'Pure math in your browser. No connection is made to that address.')}
        </p>
      </div>
    </div>
  );
}

const TABS = [
  { key: 'flow', id: 'Perjalanan Data', en: 'Data Journey' },
  { key: 'firewall', id: 'Lab Firewall', en: 'Firewall Lab' },
  { key: 'subnet', id: 'Kalkulator Subnet', en: 'Subnet Calculator' },
];

export default function NetworkLabPage() {
  const { t } = useApp();
  const [tab, setTab] = useState('flow');

  return (
    <div>
      <PageHeader
        kicker="Network Lab"
        title={t('Lab Jaringan Simulasi', 'Simulated Network Lab')}
        description={t(
          'Pelajari bagaimana data bergerak, bagaimana firewall memutuskan, dan bagaimana subnet dihitung. Semuanya simulasi lokal tanpa koneksi ke jaringan nyata.',
          'Learn how data moves, how a firewall decides, and how subnets are calculated. Everything is a local simulation with no real network connection.'
        )}
      />
      <div className="tabs" role="tablist">
        {TABS.map((x) => (
          <button key={x.key} role="tab" aria-selected={tab === x.key} className={`tab ${tab === x.key ? 'on' : ''}`} onClick={() => setTab(x.key)} type="button">
            {t(x.id, x.en)}
          </button>
        ))}
      </div>
      {tab === 'flow' ? <FlowLab /> : null}
      {tab === 'firewall' ? <FirewallLab /> : null}
      {tab === 'subnet' ? <SubnetLab /> : null}
    </div>
  );
}
