// Ilustrasi SVG custom CyberLearn. Semua digambar manual (tanpa emoji / gambar eksternal).

const N = '#39ff88'; // neon green
const C = '#22d3ee'; // cyan
const M = '#5f7d6e'; // muted
const D = '#0b1311'; // panel gelap
const P = '#f472b6'; // aksen langka

function Frame({ label, children, className = '' }) {
  return (
    <svg
      viewBox="0 0 400 260"
      className={`illu ${className}`}
      role="img"
      aria-label={label}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <filter id="cl-glow" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="2.5" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <linearGradient id="cl-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor={N} stopOpacity=".34" />
          <stop offset="1" stopColor={C} stopOpacity=".06" />
        </linearGradient>
        <pattern id="cl-grid" width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M20 0H0V20" fill="none" stroke={N} strokeOpacity=".07" />
        </pattern>
      </defs>
      <rect width="400" height="260" fill="url(#cl-grid)" />
      <g filter="url(#cl-glow)">{children}</g>
    </svg>
  );
}

function Node({ x, y, r = 6, color = C }) {
  return (
    <g>
      <circle cx={x} cy={y} r={r + 4} fill={color} fillOpacity=".12" />
      <circle cx={x} cy={y} r={r} fill={D} stroke={color} strokeWidth="2" />
    </g>
  );
}

function Shield() {
  return (
    <Frame label="Digital shield">
      <ellipse cx="200" cy="134" rx="160" ry="54" fill="none" stroke={C} strokeOpacity=".35" strokeDasharray="2 6" />
      <ellipse cx="200" cy="134" rx="120" ry="38" fill="none" stroke={N} strokeOpacity=".25" strokeDasharray="4 8" />
      <path
        d="M200 36 L284 66 V128 C284 178 248 212 200 230 C152 212 116 178 116 128 V66 Z"
        fill="url(#cl-grad)"
        stroke={N}
        strokeWidth="2.5"
      />
      <path
        d="M200 56 L266 79 V128 C266 166 238 194 200 210 C162 194 134 166 134 128 V79 Z"
        fill="none"
        stroke={N}
        strokeOpacity=".4"
        strokeDasharray="4 5"
      />
      <path d="M170 130 L192 152 L232 106" fill="none" stroke={N} strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
      <Node x={42} y={134} />
      <Node x={358} y={134} />
      <Node x={100} y={100} r={4} color={N} />
      <Node x={300} y={170} r={4} color={N} />
    </Frame>
  );
}

function NetworkIllu() {
  const leaves = [
    [70, 56],
    [330, 56],
    [60, 200],
    [340, 200],
    [200, 28],
  ];
  return (
    <Frame label="Network topology">
      {leaves.map(([x, y]) => (
        <line key={`${x}-${y}`} x1="200" y1="130" x2={x} y2={y} stroke={C} strokeOpacity=".6" strokeWidth="1.8" />
      ))}
      <line x1="70" y1="56" x2="60" y2="200" stroke={M} strokeOpacity=".5" strokeDasharray="3 5" />
      <line x1="330" y1="56" x2="340" y2="200" stroke={M} strokeOpacity=".5" strokeDasharray="3 5" />
      <rect x="164" y="106" width="72" height="48" rx="8" fill={D} stroke={N} strokeWidth="2.2" />
      <circle cx="184" cy="130" r="4" fill={N} />
      <circle cx="200" cy="130" r="4" fill={N} fillOpacity=".6" />
      <circle cx="216" cy="130" r="4" fill={N} fillOpacity=".3" />
      {leaves.map(([x, y]) => (
        <g key={`n-${x}-${y}`}>
          <rect x={x - 22} y={y - 14} width="44" height="28" rx="5" fill={D} stroke={C} strokeWidth="1.8" />
          <line x1={x - 12} y1={y} x2={x + 12} y2={y} stroke={C} strokeOpacity=".7" />
        </g>
      ))}
      <circle cx="132" cy="92" r="4" fill={N} />
      <circle cx="268" cy="168" r="4" fill={N} />
    </Frame>
  );
}

function ServerIllu() {
  return (
    <Frame label="Server dan database">
      {[52, 108, 164].map((y, i) => (
        <g key={y}>
          <rect x="70" y={y} width="160" height="44" rx="6" fill={D} stroke={i === 1 ? N : C} strokeWidth="2" />
          <circle cx="92" cy={y + 22} r="4" fill={N} />
          <circle cx="108" cy={y + 22} r="4" fill={i === 2 ? P : N} fillOpacity=".6" />
          <line x1="132" y1={y + 22} x2="212" y2={y + 22} stroke={M} strokeDasharray="6 4" />
        </g>
      ))}
      <line x1="230" y1="130" x2="288" y2="130" stroke={N} strokeWidth="2" strokeDasharray="4 4" />
      <ellipse cx="320" cy="84" rx="42" ry="14" fill={D} stroke={N} strokeWidth="2" />
      <path d="M278 84 V176 C278 192 362 192 362 176 V84" fill="url(#cl-grad)" stroke={N} strokeWidth="2" />
      <path d="M278 114 C278 130 362 130 362 114" fill="none" stroke={N} strokeOpacity=".5" />
      <path d="M278 144 C278 160 362 160 362 144" fill="none" stroke={N} strokeOpacity=".5" />
    </Frame>
  );
}

function EncryptionIllu() {
  return (
    <Frame label="Visualisasi enkripsi">
      {['H', 'I', '!'].map((ch, i) => (
        <g key={ch}>
          <rect x={36} y={62 + i * 46} width="44" height="34" rx="5" fill={D} stroke={C} strokeWidth="1.8" />
          <text x={58} y={85 + i * 46} textAnchor="middle" fontFamily="monospace" fontSize="18" fill={C}>{ch}</text>
        </g>
      ))}
      {['x9', '#f', 'Q%'].map((ch, i) => (
        <g key={ch}>
          <rect x={320} y={62 + i * 46} width="44" height="34" rx="5" fill={D} stroke={N} strokeWidth="1.8" />
          <text x={342} y={85 + i * 46} textAnchor="middle" fontFamily="monospace" fontSize="16" fill={N}>{ch}</text>
        </g>
      ))}
      <path d="M84 80 H150 M84 126 H150 M84 172 H150" stroke={C} strokeOpacity=".6" strokeDasharray="4 4" />
      <path d="M250 80 H316 M250 126 H316 M250 172 H316" stroke={N} strokeOpacity=".6" strokeDasharray="4 4" />
      <rect x="152" y="84" width="96" height="92" rx="12" fill="url(#cl-grad)" stroke={N} strokeWidth="2.4" />
      <path d="M182 118 V106 C182 88 218 88 218 106 V118" fill="none" stroke={N} strokeWidth="4" />
      <rect x="176" y="118" width="48" height="36" rx="6" fill={D} stroke={N} strokeWidth="2.4" />
      <circle cx="200" cy="133" r="5" fill={N} />
      <line x1="200" y1="137" x2="200" y2="146" stroke={N} strokeWidth="3" />
    </Frame>
  );
}

function TerminalIllu() {
  return (
    <Frame label="Ilustrasi terminal">
      <rect x="48" y="32" width="304" height="196" rx="10" fill={D} stroke={N} strokeWidth="2" />
      <line x1="48" y1="62" x2="352" y2="62" stroke={N} strokeOpacity=".4" />
      <circle cx="70" cy="47" r="5" fill={P} />
      <circle cx="88" cy="47" r="5" fill="#fbbf24" />
      <circle cx="106" cy="47" r="5" fill={N} />
      <text x="68" y="90" fontFamily="monospace" fontSize="13" fill={N}>$ whoami</text>
      <text x="68" y="112" fontFamily="monospace" fontSize="13" fill={M}>student</text>
      <text x="68" y="138" fontFamily="monospace" fontSize="13" fill={N}>$ ls -l notes.txt</text>
      <text x="68" y="160" fontFamily="monospace" fontSize="13" fill={C}>-rw-r--r-- notes.txt</text>
      <text x="68" y="188" fontFamily="monospace" fontSize="13" fill={N}>$ _</text>
      <rect x="86" y="177" width="9" height="14" fill={N} fillOpacity=".8" />
    </Frame>
  );
}

function PathIllu() {
  return (
    <Frame label="Jalur belajar">
      <path d="M40 210 C110 210 90 150 160 150 C230 150 210 90 280 90 C330 90 340 60 360 44" fill="none" stroke={N} strokeOpacity=".35" strokeWidth="3" strokeDasharray="2 8" strokeLinecap="round" />
      <path d="M40 210 C110 210 90 150 160 150 C230 150 210 90 280 90" fill="none" stroke={N} strokeWidth="3.5" strokeLinecap="round" />
      <Node x={40} y={210} r={7} color={N} />
      <Node x={160} y={150} r={9} color={C} />
      <Node x={280} y={90} r={11} color={P} />
      <path d="M360 44 V20 L384 30 L360 40" fill={N} stroke={N} strokeWidth="2" />
      <text x="40" y="238" textAnchor="middle" fontFamily="monospace" fontSize="12" fill={N}>L1</text>
      <text x="160" y="182" textAnchor="middle" fontFamily="monospace" fontSize="12" fill={C}>L2</text>
      <text x="280" y="122" textAnchor="middle" fontFamily="monospace" fontSize="12" fill={P}>L3</text>
    </Frame>
  );
}

function LockIllu() {
  return (
    <Frame label="Gembok digital">
      <path d="M40 60 H110 V100 H150" fill="none" stroke={C} strokeOpacity=".5" />
      <path d="M360 190 H290 V160 H250" fill="none" stroke={C} strokeOpacity=".5" />
      <Node x={40} y={60} r={4} />
      <Node x={360} y={190} r={4} />
      <path d="M150 120 V92 C150 40 250 40 250 92 V120" fill="none" stroke={N} strokeWidth="9" strokeLinecap="round" />
      <rect x="126" y="116" width="148" height="112" rx="14" fill="url(#cl-grad)" stroke={N} strokeWidth="2.8" />
      <circle cx="200" cy="162" r="14" fill={D} stroke={N} strokeWidth="3" />
      <path d="M200 172 V196" stroke={N} strokeWidth="6" strokeLinecap="round" />
    </Frame>
  );
}

function WebIllu() {
  return (
    <Frame label="Peramban web aman">
      <rect x="40" y="36" width="320" height="190" rx="10" fill={D} stroke={C} strokeWidth="2" />
      <line x1="40" y1="68" x2="360" y2="68" stroke={C} strokeOpacity=".4" />
      <rect x="92" y="44" width="236" height="16" rx="8" fill="none" stroke={N} strokeWidth="1.6" />
      <rect x="100" y="48" width="9" height="8" rx="1.5" fill={N} />
      <text x="116" y="57" fontFamily="monospace" fontSize="10" fill={N}>https://example.test</text>
      <rect x="62" y="88" width="120" height="54" rx="6" fill="url(#cl-grad)" stroke={N} strokeOpacity=".6" />
      <rect x="196" y="88" width="144" height="12" rx="3" fill={C} fillOpacity=".35" />
      <rect x="196" y="110" width="110" height="10" rx="3" fill={M} fillOpacity=".5" />
      <rect x="196" y="130" width="126" height="10" rx="3" fill={M} fillOpacity=".5" />
      <rect x="62" y="158" width="278" height="12" rx="3" fill={M} fillOpacity=".4" />
      <rect x="62" y="180" width="200" height="12" rx="3" fill={M} fillOpacity=".4" />
      <rect x="62" y="202" width="90" height="14" rx="4" fill={N} fillOpacity=".5" />
    </Frame>
  );
}

function CloudIllu() {
  return (
    <Frame label="Keamanan cloud">
      <path
        d="M110 150 C80 150 70 118 96 106 C96 70 148 58 168 86 C190 56 252 70 254 108 C292 100 312 150 276 150 Z"
        fill="url(#cl-grad)"
        stroke={C}
        strokeWidth="2.4"
        strokeLinejoin="round"
      />
      <path d="M190 78 L218 90 V114 C218 128 206 138 190 144 C174 138 162 128 162 114 V90 Z" fill={D} stroke={N} strokeWidth="2.2" />
      <path d="M176 112 L187 123 L205 102" fill="none" stroke={N} strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
      {[96, 190, 284].map((x) => (
        <g key={x}>
          <line x1={x} y1="152" x2={x} y2="184" stroke={C} strokeOpacity=".6" strokeDasharray="3 4" />
          <rect x={x - 28} y="184" width="56" height="34" rx="5" fill={D} stroke={N} strokeWidth="1.8" />
          <circle cx={x - 14} cy="201" r="3" fill={N} />
          <line x1={x - 4} y1="201" x2={x + 18} y2="201" stroke={M} />
        </g>
      ))}
    </Frame>
  );
}

function MagnifierIllu() {
  return (
    <Frame label="Analisis log">
      {[50, 74, 98, 122, 146, 170, 194].map((y, i) => (
        <g key={y}>
          <rect x="44" y={y} width={i % 3 === 0 ? 150 : 200} height="8" rx="3" fill={i === 3 ? P : M} fillOpacity={i === 3 ? 0.8 : 0.4} />
          <circle cx="34" cy={y + 4} r="2.5" fill={i === 3 ? P : N} />
        </g>
      ))}
      <circle cx="262" cy="118" r="64" fill="url(#cl-grad)" stroke={N} strokeWidth="4" />
      <circle cx="262" cy="118" r="50" fill="none" stroke={N} strokeOpacity=".4" strokeDasharray="3 5" />
      <line x1="308" y1="164" x2="352" y2="212" stroke={N} strokeWidth="12" strokeLinecap="round" />
      <path d="M236 120 H252 L260 100 L270 138 L278 120 H292" fill="none" stroke={C} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </Frame>
  );
}

function BugIllu() {
  return (
    <Frame label="Kerentanan perangkat lunak">
      <ellipse cx="200" cy="136" rx="46" ry="62" fill="url(#cl-grad)" stroke={P} strokeWidth="2.6" />
      <circle cx="200" cy="64" r="22" fill={D} stroke={P} strokeWidth="2.6" />
      <line x1="200" y1="82" x2="200" y2="198" stroke={P} strokeOpacity=".5" />
      {[104, 136, 168].map((y) => (
        <g key={y}>
          <path d={`M156 ${y} L112 ${y - 18}`} stroke={P} strokeWidth="2.4" strokeLinecap="round" />
          <path d={`M244 ${y} L288 ${y - 18}`} stroke={P} strokeWidth="2.4" strokeLinecap="round" />
        </g>
      ))}
      <path d="M190 44 L176 24 M210 44 L224 24" stroke={P} strokeWidth="2.4" strokeLinecap="round" />
      <circle cx="192" cy="62" r="3" fill={N} />
      <circle cx="208" cy="62" r="3" fill={N} />
      <rect x="40" y="196" width="320" height="36" rx="6" fill={D} stroke={N} strokeOpacity=".5" />
      <text x="54" y="219" fontFamily="monospace" fontSize="12" fill={N}>CVE-????-???? : patch available</text>
    </Frame>
  );
}

function KeyIllu() {
  return (
    <Frame label="Kunci dan kredensial">
      <circle cx="120" cy="130" r="48" fill="url(#cl-grad)" stroke={N} strokeWidth="3" />
      <circle cx="120" cy="130" r="16" fill={D} stroke={N} strokeWidth="3" />
      <path d="M168 130 H340 V164 M300 130 V156 M268 130 V150" fill="none" stroke={N} strokeWidth="9" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M60 206 H340" stroke={M} strokeOpacity=".5" strokeDasharray="4 6" />
      <text x="60" y="230" fontFamily="monospace" fontSize="12" fill={C}>{'••••••••••••'}</text>
    </Frame>
  );
}

function WifiIllu() {
  return (
    <Frame label="Keamanan Wi-Fi">
      {[
        [40, 0.9],
        [74, 0.65],
        [108, 0.4],
      ].map(([r, o]) => (
        <path key={r} d={`M${200 - r} ${190 - r * 0.7} A${r * 1.2} ${r * 1.2} 0 0 1 ${200 + r} ${190 - r * 0.7}`} fill="none" stroke={N} strokeOpacity={o} strokeWidth="6" strokeLinecap="round" />
      ))}
      <circle cx="200" cy="184" r="10" fill={N} />
      <rect x="150" y="204" width="100" height="26" rx="6" fill={D} stroke={C} strokeWidth="2" />
      <circle cx="170" cy="217" r="4" fill={N} />
      <circle cx="186" cy="217" r="4" fill={N} fillOpacity=".5" />
      <rect x="56" y="150" width="54" height="40" rx="6" fill={D} stroke={C} strokeWidth="1.8" />
      <rect x="296" y="150" width="54" height="40" rx="6" fill={D} stroke={C} strokeWidth="1.8" />
      <rect x="318" y="166" width="12" height="10" rx="2" fill={N} />
    </Frame>
  );
}

function DatabaseIllu() {
  return (
    <Frame label="Basis data">
      <ellipse cx="200" cy="62" rx="82" ry="22" fill={D} stroke={N} strokeWidth="2.4" />
      <path d="M118 62 V196 C118 220 282 220 282 196 V62" fill="url(#cl-grad)" stroke={N} strokeWidth="2.4" />
      <path d="M118 108 C118 132 282 132 282 108" fill="none" stroke={N} strokeOpacity=".55" strokeWidth="1.8" />
      <path d="M118 152 C118 176 282 176 282 152" fill="none" stroke={N} strokeOpacity=".55" strokeWidth="1.8" />
      <circle cx="146" cy="104" r="3.5" fill={C} />
      <circle cx="146" cy="148" r="3.5" fill={C} />
      <circle cx="146" cy="192" r="3.5" fill={P} />
      <path d="M40 130 H110 M290 130 H360" stroke={C} strokeOpacity=".6" strokeDasharray="4 5" />
      <Node x={40} y={130} r={4} />
      <Node x={360} y={130} r={4} />
    </Frame>
  );
}

function UserIllu() {
  return (
    <Frame label="Identitas dan akses pengguna">
      <rect x="70" y="52" width="260" height="156" rx="12" fill="url(#cl-grad)" stroke={N} strokeWidth="2.4" />
      <circle cx="140" cy="112" r="26" fill={D} stroke={C} strokeWidth="2.4" />
      <path d="M96 186 C100 154 180 154 184 186" fill={D} stroke={C} strokeWidth="2.4" />
      <rect x="206" y="90" width="98" height="10" rx="3" fill={C} fillOpacity=".5" />
      <rect x="206" y="114" width="76" height="9" rx="3" fill={M} fillOpacity=".55" />
      <rect x="206" y="136" width="88" height="9" rx="3" fill={M} fillOpacity=".55" />
      <circle cx="300" cy="190" r="22" fill={D} stroke={N} strokeWidth="2.6" />
      <path d="M289 190 L297 198 L312 181" fill="none" stroke={N} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
    </Frame>
  );
}

function AlertIllu() {
  return (
    <Frame label="Peringatan keamanan">
      <circle cx="200" cy="140" r="104" fill="none" stroke={N} strokeOpacity=".18" strokeDasharray="3 7" />
      <circle cx="200" cy="140" r="76" fill="none" stroke={N} strokeOpacity=".3" strokeDasharray="3 7" />
      <path d="M200 52 L292 208 H108 Z" fill="url(#cl-grad)" stroke={P} strokeWidth="3" strokeLinejoin="round" />
      <line x1="200" y1="104" x2="200" y2="158" stroke={P} strokeWidth="9" strokeLinecap="round" />
      <circle cx="200" cy="180" r="6" fill={P} />
      <Node x={60} y={90} r={4} color={N} />
      <Node x={340} y={200} r={4} color={N} />
    </Frame>
  );
}

const MAP = {
  shield: Shield,
  network: NetworkIllu,
  server: ServerIllu,
  encryption: EncryptionIllu,
  terminal: TerminalIllu,
  path: PathIllu,
  lock: LockIllu,
  web: WebIllu,
  cloud: CloudIllu,
  magnifier: MagnifierIllu,
  bug: BugIllu,
  key: KeyIllu,
  wifi: WifiIllu,
  database: DatabaseIllu,
  user: UserIllu,
  alert: AlertIllu,
};

export const ILLUSTRATION_KEYS = Object.keys(MAP);

export function Illustration({ name }) {
  const Comp = MAP[name] || Shield;
  return <Comp />;
}

// Ilustrasi hero besar untuk dashboard.
export function HeroIllustration() {
  return (
    <svg viewBox="0 0 520 340" className="illu hero-illu" role="img" aria-label="CyberLearn: perisai digital dengan jaringan" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="hero-glow" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="3.5" result="b" />
          <feMerge>
            <feMergeNode in="b" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <linearGradient id="hero-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor={N} stopOpacity=".4" />
          <stop offset="1" stopColor={C} stopOpacity=".08" />
        </linearGradient>
      </defs>
      <g filter="url(#hero-glow)">
        <ellipse cx="260" cy="176" rx="220" ry="76" fill="none" stroke={C} strokeOpacity=".3" strokeDasharray="2 7" />
        <ellipse cx="260" cy="176" rx="160" ry="52" fill="none" stroke={N} strokeOpacity=".28" strokeDasharray="5 9" />
        <path d="M70 70 L170 112 M450 80 L350 120 M80 270 L180 220 M450 276 L346 224" stroke={C} strokeOpacity=".5" strokeWidth="1.6" />
        <rect x="30" y="46" width="84" height="54" rx="7" fill={D} stroke={C} strokeWidth="1.8" />
        <text x="42" y="68" fontFamily="monospace" fontSize="11" fill={N}>$ scan --lab</text>
        <text x="42" y="86" fontFamily="monospace" fontSize="11" fill={M}>0 threats</text>
        <rect x="416" y="56" width="76" height="48" rx="7" fill={D} stroke={C} strokeWidth="1.8" />
        <circle cx="434" cy="80" r="4" fill={N} />
        <circle cx="448" cy="80" r="4" fill={N} fillOpacity=".5" />
        <line x1="460" y1="80" x2="480" y2="80" stroke={M} />
        <rect x="36" y="246" width="76" height="48" rx="7" fill={D} stroke={N} strokeWidth="1.8" />
        <path d="M50 270 H98 M50 280 H80" stroke={M} strokeWidth="2" />
        <ellipse cx="478" cy="268" rx="26" ry="9" fill={D} stroke={N} strokeWidth="1.8" />
        <path d="M452 268 V296 C452 308 504 308 504 296 V268" fill={D} stroke={N} strokeWidth="1.8" />
        <path
          d="M260 24 L352 58 V150 C352 214 312 262 260 286 C208 262 168 214 168 150 V58 Z"
          fill="url(#hero-grad)"
          stroke={N}
          strokeWidth="3"
        />
        <path
          d="M260 48 L332 74 V150 C332 200 302 238 260 258 C218 238 188 200 188 150 V74 Z"
          fill="none"
          stroke={N}
          strokeOpacity=".4"
          strokeDasharray="5 6"
        />
        <rect x="236" y="132" width="48" height="42" rx="7" fill={D} stroke={N} strokeWidth="2.6" />
        <path d="M246 132 V122 C246 102 274 102 274 122 V132" fill="none" stroke={N} strokeWidth="4" />
        <circle cx="260" cy="152" r="5" fill={N} />
        <circle cx="70" cy="70" r="5" fill={D} stroke={N} strokeWidth="2" />
        <circle cx="450" cy="80" r="5" fill={D} stroke={N} strokeWidth="2" />
        <circle cx="80" cy="270" r="5" fill={D} stroke={C} strokeWidth="2" />
        <circle cx="450" cy="276" r="5" fill={D} stroke={C} strokeWidth="2" />
      </g>
    </svg>
  );
}

// Logo mark kecil untuk sidebar.
export function LogoMark({ size = 34 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" role="img" aria-label="CyberLearn" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="logo-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor={N} />
          <stop offset="1" stopColor={C} />
        </linearGradient>
      </defs>
      <path d="M20 3 L35 9 V21 C35 30 28 36 20 38 C12 36 5 30 5 21 V9 Z" fill="#0b1311" stroke="url(#logo-grad)" strokeWidth="2.2" />
      <path d="M13 21 L18 26 L28 15" fill="none" stroke="url(#logo-grad)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// Latar dekoratif tetap (grid + garis sirkuit samar).
export function BackgroundDecor() {
  return (
    <svg className="bg-decor" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" viewBox="0 0 1200 800">
      <defs>
        <pattern id="bg-grid" width="48" height="48" patternUnits="userSpaceOnUse">
          <path d="M48 0H0V48" fill="none" stroke="#39ff88" strokeOpacity=".05" />
        </pattern>
      </defs>
      <rect width="1200" height="800" fill="url(#bg-grid)" />
      <g fill="none" stroke="#22d3ee" strokeOpacity=".09" strokeWidth="1.5">
        <path d="M0 640 H220 L260 600 H520" />
        <path d="M1200 160 H980 L940 200 H700" />
        <path d="M120 0 V120 L160 160 V320" />
        <path d="M1080 800 V680 L1040 640 V520" />
      </g>
      <g fill="#39ff88" fillOpacity=".18">
        <circle cx="520" cy="600" r="3" />
        <circle cx="700" cy="200" r="3" />
        <circle cx="160" cy="320" r="3" />
        <circle cx="1040" cy="520" r="3" />
      </g>
    </svg>
  );
}
