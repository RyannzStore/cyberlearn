// Mesin shell simulasi untuk Terminal Playground.
// Semuanya berjalan lokal di memori browser: tidak ada akses jaringan atau sistem nyata.

export const TERMINAL_TASKS = [
  {
    id: 'pwd',
    title: { id: 'Cek lokasimu sekarang', en: 'Check where you are' },
    hint: { id: 'Jalankan', en: 'Run' },
    cmd: 'pwd',
  },
  {
    id: 'ls-long',
    title: { id: 'Lihat file beserta izin aksesnya', en: 'List files with their permissions' },
    hint: { id: 'Jalankan', en: 'Run' },
    cmd: 'ls -l',
  },
  {
    id: 'read-notes',
    title: { id: 'Baca isi file catatan', en: 'Read the notes file' },
    hint: { id: 'Jalankan', en: 'Run' },
    cmd: 'cat notes.txt',
  },
  {
    id: 'mkdir',
    title: { id: 'Buat direktori baru bernama lab', en: 'Create a new directory named lab' },
    hint: { id: 'Jalankan', en: 'Run' },
    cmd: 'mkdir lab',
  },
  {
    id: 'chmod600',
    title: { id: 'Batasi secret.txt agar hanya pemilik yang bisa baca/tulis', en: 'Restrict secret.txt so only the owner can read/write' },
    hint: { id: 'Jalankan', en: 'Run' },
    cmd: 'chmod 600 secret.txt',
  },
  {
    id: 'grep-log',
    title: { id: 'Cari login gagal di log autentikasi', en: 'Find failed logins in the auth log' },
    hint: { id: 'Jalankan', en: 'Run' },
    cmd: 'grep Failed logs/auth.log',
  },
  {
    id: 'hash',
    title: { id: 'Hitung hash SHA-256 sebuah file', en: 'Compute the SHA-256 hash of a file' },
    hint: { id: 'Jalankan', en: 'Run' },
    cmd: 'sha256sum notes.txt',
  },
];

const HOME = ['home', 'student'];
const SAFE_NAME = /^[A-Za-z0-9._-]{1,64}$/;
const RESERVED = new Set(['.', '..', '__proto__', 'constructor', 'prototype']);

const file = (content = '', mode = 0o644) => ({ type: 'file', content, mode });
const dir = (children = {}, mode = 0o755) => ({
  type: 'dir',
  mode,
  children: Object.assign(Object.create(null), children),
});

const AUTH_LOG = [
  'Nov  1 03:12:41 cyberlearn-lab sshd[2211]: Failed password for invalid user admin from 203.0.113.77 port 40122 ssh2',
  'Nov  1 03:12:44 cyberlearn-lab sshd[2211]: Failed password for invalid user test from 203.0.113.77 port 40123 ssh2',
  'Nov  1 03:12:47 cyberlearn-lab sshd[2211]: Failed password for student from 203.0.113.77 port 40125 ssh2',
  'Nov  1 03:12:50 cyberlearn-lab sshd[2211]: Failed password for student from 203.0.113.77 port 40126 ssh2',
  'Nov  1 07:58:03 cyberlearn-lab sshd[2390]: Accepted publickey for student from 192.168.56.1 port 51020 ssh2',
  'Nov  1 08:01:12 cyberlearn-lab sudo: student : TTY=pts/0 ; COMMAND=/usr/bin/apt update',
  'Nov  1 09:20:31 cyberlearn-lab sshd[2477]: Failed password for student from 198.51.100.24 port 51833 ssh2',
  'Nov  1 09:20:40 cyberlearn-lab sshd[2477]: Accepted password for student from 198.51.100.24 port 51834 ssh2',
].join('\n') + '\n';

export function createShell() {
  const fs = dir({
    home: dir({
      student: dir({
        'notes.txt': file(
          'Welcome to the CyberLearn terminal playground.\nSelamat datang di terminal simulasi CyberLearn.\nEverything here is simulated and runs only in your browser.\n'
        ),
        'todo.md': file('# TODO\n- learn Linux basics\n- read the auth log\n- protect secret.txt\n'),
        'secret.txt': file('lab-flag: CL{local-simulation-only}\n'),
        projects: dir({
          'readme.md': file('# Projects\nPut practice files here.\n'),
        }),
        logs: dir({
          'auth.log': file(AUTH_LOG),
        }),
      }),
    }),
    etc: dir({
      hostname: file('cyberlearn-lab\n'),
      'os-release': file('NAME="CyberLearn Lab OS"\nVERSION="2.0 (simulated)"\n'),
    }),
    tmp: dir({}),
    var: dir({ log: dir({}) }),
  });
  return { fs, cwd: HOME.slice(), prevCwd: null, history: [], flags: new Set() };
}

export function promptPath(state) {
  const cwd = state.cwd;
  const isHome = cwd.length >= 2 && cwd[0] === 'home' && cwd[1] === 'student';
  if (isHome) {
    const rest = cwd.slice(2);
    return rest.length ? `~/${rest.join('/')}` : '~';
  }
  return `/${cwd.join('/')}`;
}

/* ---------- Helpers ---------- */

function resolvePath(state, input) {
  if (input == null || input === '') return state.cwd.slice();
  let p = input;
  let segs;
  if (p === '~' || p.startsWith('~/')) {
    segs = HOME.slice();
    p = p.slice(1);
  } else if (p.startsWith('/')) {
    segs = [];
  } else {
    segs = state.cwd.slice();
  }
  p.split('/').forEach((part) => {
    if (!part || part === '.') return;
    if (part === '..') segs.pop();
    else segs.push(part);
  });
  return segs;
}

function getNode(state, segs) {
  let node = state.fs;
  for (const s of segs) {
    if (!node || node.type !== 'dir' || !Object.prototype.hasOwnProperty.call(node.children, s)) return null;
    node = node.children[s];
  }
  return node;
}

function modeString(node) {
  const m = node.mode;
  const bits = ['r', 'w', 'x'];
  let out = node.type === 'dir' ? 'd' : '-';
  for (let i = 8; i >= 0; i -= 1) {
    out += m & (1 << i) ? bits[(8 - i) % 3] : '-';
  }
  return out;
}

function canRead(node) {
  return (node.mode & 0o400) !== 0;
}
function canWrite(node) {
  return (node.mode & 0o200) !== 0;
}

function toLines(type, text) {
  if (!text) return [];
  const parts = text.split('\n');
  if (parts[parts.length - 1] === '') parts.pop();
  return parts.map((t) => ({ type, text: t }));
}

function tokenize(line) {
  const tokens = [];
  let cur = '';
  let quote = null;
  let has = false;
  for (const ch of line) {
    if (quote) {
      if (ch === quote) quote = null;
      else cur += ch;
    } else if (ch === '"' || ch === "'") {
      quote = ch;
      has = true;
    } else if (/\s/.test(ch)) {
      if (cur || has) {
        tokens.push(cur);
        cur = '';
        has = false;
      }
    } else {
      cur += ch;
    }
  }
  if (quote) return { error: true };
  if (cur || has) tokens.push(cur);
  return { tokens };
}

// Pisahkan pipeline berdasarkan "|" di luar tanda kutip.
function splitPipes(line) {
  const parts = [];
  let cur = '';
  let quote = null;
  for (const ch of line) {
    if (quote) {
      cur += ch;
      if (ch === quote) quote = null;
    } else if (ch === '"' || ch === "'") {
      quote = ch;
      cur += ch;
    } else if (ch === '|') {
      parts.push(cur);
      cur = '';
    } else {
      cur += ch;
    }
  }
  parts.push(cur);
  return parts;
}

function parseFlags(args) {
  const flags = new Set();
  const rest = [];
  let done = false;
  args.forEach((a) => {
    if (!done && a === '--') {
      done = true;
    } else if (!done && /^-[A-Za-z]+$/.test(a)) {
      a.slice(1).split('').forEach((c) => flags.add(c));
    } else {
      rest.push(a);
    }
  });
  return { flags, rest };
}

function validName(name) {
  return SAFE_NAME.test(name) && !RESERVED.has(name);
}

function readInput(state, rest, stdin, cmd, L) {
  // Mengembalikan { text } atau { err }.
  if (rest.length === 0) {
    if (stdin != null) return { text: stdin };
    return { err: L(`${cmd}: tidak ada file yang diberikan`, `${cmd}: missing file operand`) };
  }
  let text = '';
  for (const f of rest) {
    const node = getNode(state, resolvePath(state, f));
    if (!node) return { err: `${cmd}: ${f}: ${L('tidak ada file atau direktori', 'No such file or directory')}` };
    if (node.type === 'dir') return { err: `${cmd}: ${f}: ${L('adalah sebuah direktori', 'Is a directory')}` };
    if (!canRead(node)) return { err: `${cmd}: ${f}: ${L('Izin ditolak', 'Permission denied')}` };
    text += node.content;
  }
  return { text };
}

const KNOWN_HOSTS = {
  localhost: '127.0.0.1',
  '127.0.0.1': '127.0.0.1',
  'router.lab': '192.168.56.1',
  'dns.lab': '192.168.56.53',
  'example.test': '203.0.113.10',
  'www.example.test': '203.0.113.10',
  'mail.example.test': '203.0.113.25',
};

const BLOCKED_TOOLS = new Set([
  'nmap',
  'nc',
  'netcat',
  'hydra',
  'sqlmap',
  'msfconsole',
  'metasploit',
  'john',
  'hashcat',
  'aircrack-ng',
  'nikto',
  'wget',
  'curl',
  'ssh',
  'telnet',
  'ftp',
  'masscan',
  'tcpdump',
  'wireshark',
]);

export const COMMANDS = {
  help: { usage: 'help [command]', id: 'Tampilkan daftar perintah', en: 'Show the list of commands' },
  pwd: { usage: 'pwd', id: 'Tampilkan direktori saat ini', en: 'Print the current directory' },
  ls: { usage: 'ls [-l] [-a] [path]', id: 'Lihat isi direktori', en: 'List directory contents' },
  cd: { usage: 'cd [path]', id: 'Pindah direktori', en: 'Change directory' },
  cat: { usage: 'cat <file>', id: 'Tampilkan isi file', en: 'Print file contents' },
  echo: { usage: 'echo <text> [> file]', id: 'Cetak teks (bisa diarahkan ke file dengan > atau >>)', en: 'Print text (redirect to a file with > or >>)' },
  mkdir: { usage: 'mkdir [-p] <dir>', id: 'Buat direktori', en: 'Create a directory' },
  touch: { usage: 'touch <file>', id: 'Buat file kosong', en: 'Create an empty file' },
  rm: { usage: 'rm [-r] <path>', id: 'Hapus file/direktori (virtual)', en: 'Remove a file/directory (virtual)' },
  cp: { usage: 'cp <src> <dst>', id: 'Salin file', en: 'Copy a file' },
  mv: { usage: 'mv <src> <dst>', id: 'Pindah atau ganti nama', en: 'Move or rename' },
  head: { usage: 'head [-n N] <file>', id: 'Tampilkan N baris pertama', en: 'Show the first N lines' },
  tail: { usage: 'tail [-n N] <file>', id: 'Tampilkan N baris terakhir', en: 'Show the last N lines' },
  grep: { usage: 'grep [-i] [-n] [-c] [-v] <text> <file>', id: 'Cari teks (teks biasa, bukan regex)', en: 'Search text (plain text, not regex)' },
  wc: { usage: 'wc [-l|-w|-c] <file>', id: 'Hitung baris/kata/karakter', en: 'Count lines/words/bytes' },
  sort: { usage: 'sort <file>', id: 'Urutkan baris', en: 'Sort lines' },
  chmod: { usage: 'chmod <mode> <file>', id: 'Ubah izin akses, mis. chmod 600 secret.txt', en: 'Change permissions, e.g. chmod 600 secret.txt' },
  whoami: { usage: 'whoami', id: 'Tampilkan nama pengguna', en: 'Print the current user' },
  id: { usage: 'id', id: 'Tampilkan identitas pengguna', en: 'Print user identity' },
  hostname: { usage: 'hostname', id: 'Tampilkan nama host', en: 'Print the hostname' },
  uname: { usage: 'uname [-a]', id: 'Info sistem (simulasi)', en: 'System info (simulated)' },
  date: { usage: 'date', id: 'Tampilkan tanggal dan waktu', en: 'Print date and time' },
  ping: { usage: 'ping <host>', id: 'Simulasi ping ke host lab (localhost, router.lab, dns.lab, example.test)', en: 'Simulated ping to lab hosts (localhost, router.lab, dns.lab, example.test)' },
  nslookup: { usage: 'nslookup <name>', id: 'Simulasi pencarian DNS pada tabel lab lokal', en: 'Simulated DNS lookup against a local lab table' },
  ip: { usage: 'ip a', id: 'Tampilkan antarmuka jaringan (simulasi)', en: 'Show network interfaces (simulated)' },
  ifconfig: { usage: 'ifconfig', id: 'Sama seperti ip a (simulasi)', en: 'Same as ip a (simulated)' },
  ss: { usage: 'ss -tln', id: 'Port yang mendengarkan (simulasi)', en: 'Listening ports (simulated)' },
  sha256sum: { usage: 'sha256sum <file>', id: 'Hitung hash SHA-256 (asli, lokal di browser)', en: 'Compute a SHA-256 hash (real, local in the browser)' },
  base64: { usage: 'base64 [-d] <file>', id: 'Encode/decode Base64 (bukan enkripsi!)', en: 'Base64 encode/decode (not encryption!)' },
  history: { usage: 'history', id: 'Riwayat perintah', en: 'Command history' },
  clear: { usage: 'clear', id: 'Bersihkan layar', en: 'Clear the screen' },
};

async function sha256Hex(text) {
  const subtle = typeof crypto !== 'undefined' ? crypto.subtle : null;
  if (!subtle) return null;
  const buf = await subtle.digest('SHA-256', new TextEncoder().encode(text));
  return Array.from(new Uint8Array(buf))
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('');
}

function b64encode(text) {
  const bytes = new TextEncoder().encode(text);
  let bin = '';
  bytes.forEach((b) => {
    bin += String.fromCharCode(b);
  });
  return btoa(bin);
}

function b64decode(text) {
  const bin = atob(text.replace(/\s+/g, ''));
  const bytes = Uint8Array.from(bin, (c) => c.charCodeAt(0));
  return new TextDecoder().decode(bytes);
}

/* ---------- Eksekusi satu perintah ---------- */

async function execCommand(state, cmd, args, stdin, lang) {
  const L = (idText, enText) => (lang === 'id' ? idText : enText);
  const ok = (out = '') => ({ out });
  const fail = (err) => ({ out: '', err });

  if (BLOCKED_TOOLS.has(cmd)) {
    if (cmd === 'nmap' || cmd === 'masscan') {
      return fail(
        L(
          `${cmd} (simulasi): playground ini tidak pernah memindai apa pun. Memindai jaringan tanpa izin itu ilegal. Pelajari konsepnya di modul 9 (Ports and Protocols) dan 34 (Penetration Testing Methodology).`,
          `${cmd} (simulated): this playground never scans anything. Scanning networks without permission is illegal. Learn the concepts in module 9 (Ports and Protocols) and 34 (Penetration Testing Methodology).`
        )
      );
    }
    return fail(
      L(
        `${cmd}: alat ini berinteraksi dengan sistem nyata dan tidak tersedia di sini. Lab ini hanya mengajarkan konsep defensif secara lokal. Ketik "help" untuk perintah yang tersedia.`,
        `${cmd}: this tool talks to real systems and is not available here. This lab only teaches defensive concepts locally. Type "help" for available commands.`
      )
    );
  }

  switch (cmd) {
    case 'help': {
      if (args[0] && COMMANDS[args[0]]) {
        const c = COMMANDS[args[0]];
        return ok(`${c.usage}\n  ${L(c.id, c.en)}`);
      }
      const width = Math.max(...Object.keys(COMMANDS).map((k) => k.length));
      const lines = Object.entries(COMMANDS).map(([k, v]) => `  ${k.padEnd(width + 2)}${L(v.id, v.en)}`);
      return ok(
        `${L('Perintah yang tersedia', 'Available commands')}:\n${lines.join('\n')}\n\n${L(
          'Tips: gunakan | untuk pipe (mis. cat logs/auth.log | grep Failed) dan panah atas/bawah untuk riwayat.',
          'Tips: use | for pipes (e.g. cat logs/auth.log | grep Failed) and the up/down arrows for history.'
        )}`
      );
    }

    case 'man': {
      return execCommand(state, 'help', args, stdin, lang);
    }

    case 'pwd': {
      state.flags.add('pwd');
      return ok(`/${state.cwd.join('/')}`);
    }

    case 'whoami':
      return ok('student');
    case 'id':
      return ok('uid=1000(student) gid=1000(student) groups=1000(student)');
    case 'hostname':
      return ok('cyberlearn-lab');
    case 'uname': {
      const { flags } = parseFlags(args);
      return ok(flags.has('a') ? 'Linux cyberlearn-lab 6.x-sim #1 SMP x86_64 GNU/Linux (simulated)' : 'Linux');
    }
    case 'date':
      return ok(new Date().toString());
    case 'clear':
      return { out: '', clear: true };
    case 'exit':
    case 'logout':
      return fail(L('Sesi simulasi tidak bisa ditutup. Gunakan "clear" untuk membersihkan layar.', 'The simulated session cannot be closed. Use "clear" to wipe the screen.'));
    case 'sudo':
    case 'su':
      return fail(L(`${cmd}: eskalasi hak akses dinonaktifkan di lab simulasi ini.`, `${cmd}: privilege escalation is disabled in this simulated lab.`));

    case 'history': {
      return ok(state.history.map((h, i) => `${String(i + 1).padStart(4)}  ${h}`).join('\n'));
    }

    case 'ls': {
      const { flags, rest } = parseFlags(args);
      const targets = rest.length ? rest : ['.'];
      const long = flags.has('l');
      const all = flags.has('a');
      if (long) state.flags.add('ls-long');
      const chunks = [];
      for (const target of targets) {
        const node = getNode(state, resolvePath(state, target));
        if (!node) return fail(`ls: ${target}: ${L('tidak ada file atau direktori', 'No such file or directory')}`);
        const entries =
          node.type === 'dir'
            ? Object.keys(node.children)
                .filter((n) => all || !n.startsWith('.'))
                .sort()
                .map((n) => [n, node.children[n]])
            : [[target, node]];
        const formatted = entries.map(([name, n]) => {
          if (!long) return n.type === 'dir' ? `${name}/` : name;
          const size = n.type === 'dir' ? 4096 : n.content.length;
          return `${modeString(n)} student student ${String(size).padStart(5)} Nov  1 12:00 ${name}`;
        });
        const body = long ? formatted.join('\n') : formatted.join('  ');
        chunks.push(targets.length > 1 ? `${target}:\n${body}` : body);
      }
      return ok(chunks.join('\n\n'));
    }

    case 'cd': {
      let target;
      if (args.length === 0) target = HOME.slice();
      else if (args[0] === '-') {
        if (!state.prevCwd) return fail(L('cd: OLDPWD belum diatur', 'cd: OLDPWD not set'));
        target = state.prevCwd.slice();
      } else target = resolvePath(state, args[0]);
      const node = getNode(state, target);
      if (!node) return fail(`cd: ${args[0] || ''}: ${L('tidak ada file atau direktori', 'No such file or directory')}`);
      if (node.type !== 'dir') return fail(`cd: ${args[0]}: ${L('bukan direktori', 'Not a directory')}`);
      state.prevCwd = state.cwd.slice();
      state.cwd = target;
      return ok();
    }

    case 'cat': {
      const { rest } = parseFlags(args);
      const res = readInput(state, rest, stdin, 'cat', L);
      if (res.err) return fail(res.err);
      if (rest.some((f) => f.split('/').pop() === 'notes.txt')) state.flags.add('read-notes');
      return ok(res.text);
    }

    case 'echo': {
      return ok(`${args.join(' ')}\n`);
    }

    case 'mkdir': {
      const { flags, rest } = parseFlags(args);
      if (rest.length === 0) return fail(L('mkdir: nama direktori belum diberikan', 'mkdir: missing operand'));
      for (const target of rest) {
        const segs = resolvePath(state, target);
        const name = segs[segs.length - 1];
        if (!name || !validName(name)) return fail(`mkdir: ${target}: ${L('nama tidak valid (huruf, angka, . _ - saja)', 'invalid name (letters, digits, . _ - only)')}`);
        const parentSegs = segs.slice(0, -1);
        let parent = getNode(state, parentSegs);
        if (!parent && flags.has('p')) {
          let cur = state.fs;
          for (const s of parentSegs) {
            if (!Object.prototype.hasOwnProperty.call(cur.children, s)) {
              if (!validName(s)) return fail(`mkdir: ${target}: ${L('nama tidak valid', 'invalid name')}`);
              cur.children[s] = dir({});
            }
            cur = cur.children[s];
            if (cur.type !== 'dir') return fail(`mkdir: ${target}: ${L('bukan direktori', 'Not a directory')}`);
          }
          parent = cur;
        }
        if (!parent || parent.type !== 'dir') return fail(`mkdir: ${target}: ${L('tidak ada file atau direktori', 'No such file or directory')}`);
        if (Object.prototype.hasOwnProperty.call(parent.children, name)) {
          if (flags.has('p')) continue;
          return fail(`mkdir: ${target}: ${L('sudah ada', 'File exists')}`);
        }
        if (!canWrite(parent)) return fail(`mkdir: ${target}: ${L('Izin ditolak', 'Permission denied')}`);
        parent.children[name] = dir({});
      }
      state.flags.add('mkdir');
      return ok();
    }

    case 'touch': {
      if (args.length === 0) return fail(L('touch: nama file belum diberikan', 'touch: missing file operand'));
      for (const target of args) {
        const segs = resolvePath(state, target);
        const name = segs[segs.length - 1];
        if (!name || !validName(name)) return fail(`touch: ${target}: ${L('nama tidak valid', 'invalid name')}`);
        const parent = getNode(state, segs.slice(0, -1));
        if (!parent || parent.type !== 'dir') return fail(`touch: ${target}: ${L('tidak ada file atau direktori', 'No such file or directory')}`);
        if (!Object.prototype.hasOwnProperty.call(parent.children, name)) {
          if (!canWrite(parent)) return fail(`touch: ${target}: ${L('Izin ditolak', 'Permission denied')}`);
          parent.children[name] = file('');
        }
      }
      return ok();
    }

    case 'rm': {
      const { flags, rest } = parseFlags(args);
      if (rest.length === 0) return fail(L('rm: operand belum diberikan', 'rm: missing operand'));
      for (const target of rest) {
        const segs = resolvePath(state, target);
        if (segs.length === 0) return fail(L('rm: tidak boleh menghapus "/"', 'rm: it is not allowed to remove "/"'));
        const node = getNode(state, segs);
        if (!node) return fail(`rm: ${target}: ${L('tidak ada file atau direktori', 'No such file or directory')}`);
        if (node.type === 'dir' && !flags.has('r') && !flags.has('R')) return fail(`rm: ${target}: ${L('adalah direktori (gunakan -r)', 'is a directory (use -r)')}`);
        // Jangan hapus direktori yang sedang menjadi bagian dari cwd.
        const isAncestorOfCwd = segs.every((s, i) => state.cwd[i] === s);
        if (isAncestorOfCwd) return fail(`rm: ${target}: ${L('tidak bisa menghapus direktori yang sedang dipakai', 'cannot remove the directory you are in')}`);
        const parent = getNode(state, segs.slice(0, -1));
        if (!canWrite(parent)) return fail(`rm: ${target}: ${L('Izin ditolak', 'Permission denied')}`);
        delete parent.children[segs[segs.length - 1]];
      }
      return ok();
    }

    case 'cp':
    case 'mv': {
      const { rest } = parseFlags(args);
      if (rest.length !== 2) return fail(L(`${cmd}: gunakan: ${cmd} <asal> <tujuan>`, `${cmd}: usage: ${cmd} <src> <dst>`));
      const [src, dst] = rest;
      const srcSegs = resolvePath(state, src);
      const srcNode = getNode(state, srcSegs);
      if (!srcNode || srcSegs.length === 0) return fail(`${cmd}: ${src}: ${L('tidak ada file atau direktori', 'No such file or directory')}`);
      if (cmd === 'cp' && srcNode.type === 'dir') return fail(`cp: ${src}: ${L('adalah direktori (tidak didukung)', 'is a directory (not supported)')}`);
      if (cmd === 'cp' && !canRead(srcNode)) return fail(`cp: ${src}: ${L('Izin ditolak', 'Permission denied')}`);
      let dstSegs = resolvePath(state, dst);
      const dstNode = getNode(state, dstSegs);
      if (dstNode && dstNode.type === 'dir') dstSegs = [...dstSegs, srcSegs[srcSegs.length - 1]];
      const name = dstSegs[dstSegs.length - 1];
      if (!name || !validName(name)) return fail(`${cmd}: ${dst}: ${L('nama tidak valid', 'invalid name')}`);
      const parent = getNode(state, dstSegs.slice(0, -1));
      if (!parent || parent.type !== 'dir') return fail(`${cmd}: ${dst}: ${L('tidak ada file atau direktori', 'No such file or directory')}`);
      if (srcNode.type === 'dir' && dstSegs.length >= srcSegs.length && srcSegs.every((s, i) => dstSegs[i] === s)) {
        return fail(`mv: ${L('tidak bisa memindahkan direktori ke dalam dirinya sendiri', 'cannot move a directory into itself')}`);
      }
      if (cmd === 'cp') {
        parent.children[name] = file(srcNode.content, srcNode.mode);
      } else {
        const srcParent = getNode(state, srcSegs.slice(0, -1));
        if (!canWrite(srcParent)) return fail(`mv: ${src}: ${L('Izin ditolak', 'Permission denied')}`);
        delete srcParent.children[srcSegs[srcSegs.length - 1]];
        parent.children[name] = srcNode;
      }
      return ok();
    }

    case 'head':
    case 'tail': {
      const idx = args.indexOf('-n');
      let n = 10;
      let rest = args;
      if (idx !== -1) {
        n = parseInt(args[idx + 1], 10);
        if (!Number.isFinite(n) || n < 0) return fail(`${cmd}: ${L('jumlah baris tidak valid', 'invalid number of lines')}`);
        rest = args.filter((_, i) => i !== idx && i !== idx + 1);
      }
      const res = readInput(state, rest, stdin, cmd, L);
      if (res.err) return fail(res.err);
      const lines = res.text.split('\n');
      if (lines[lines.length - 1] === '') lines.pop();
      return ok(`${(cmd === 'head' ? lines.slice(0, n) : lines.slice(Math.max(0, lines.length - n))).join('\n')}\n`);
    }

    case 'wc': {
      const { flags, rest } = parseFlags(args);
      const res = readInput(state, rest, stdin, 'wc', L);
      if (res.err) return fail(res.err);
      const text = res.text;
      const lineCount = text === '' ? 0 : text.split('\n').length - (text.endsWith('\n') ? 1 : 0);
      const words = text.trim() === '' ? 0 : text.trim().split(/\s+/).length;
      const bytes = new TextEncoder().encode(text).length;
      const parts = [];
      if (flags.has('l')) parts.push(lineCount);
      if (flags.has('w')) parts.push(words);
      if (flags.has('c')) parts.push(bytes);
      if (parts.length === 0) parts.push(lineCount, words, bytes);
      return ok(`${parts.join(' ')}\n`);
    }

    case 'sort': {
      const { rest } = parseFlags(args);
      const res = readInput(state, rest, stdin, 'sort', L);
      if (res.err) return fail(res.err);
      const lines = res.text.split('\n');
      if (lines[lines.length - 1] === '') lines.pop();
      return ok(`${lines.sort().join('\n')}\n`);
    }

    case 'grep': {
      const { flags, rest } = parseFlags(args);
      if (rest.length === 0) return fail(L('grep: pola belum diberikan', 'grep: missing pattern'));
      const [pattern, ...files] = rest;
      const res = readInput(state, files, stdin, 'grep', L);
      if (res.err) return fail(res.err);
      const needle = flags.has('i') ? pattern.toLowerCase() : pattern;
      const lines = res.text.split('\n');
      if (lines[lines.length - 1] === '') lines.pop();
      const matched = [];
      lines.forEach((line, i) => {
        const hay = flags.has('i') ? line.toLowerCase() : line;
        const hit = hay.includes(needle);
        if (flags.has('v') ? !hit : hit) matched.push(flags.has('n') ? `${i + 1}:${line}` : line);
      });
      if (files.some((f) => f.split('/').pop() === 'auth.log')) state.flags.add('grep-log');
      if (flags.has('c')) return ok(`${matched.length}\n`);
      return ok(matched.length ? `${matched.join('\n')}\n` : '');
    }

    case 'chmod': {
      if (args.length < 2) return fail(L('chmod: gunakan: chmod <mode> <file>', 'chmod: usage: chmod <mode> <file>'));
      const [mode, ...targets] = args;
      if (!/^[0-7]{3}$/.test(mode)) return fail(L('chmod: hanya mode oktal 3 digit yang didukung (mis. 644, 600)', 'chmod: only 3-digit octal modes are supported (e.g. 644, 600)'));
      const value = parseInt(mode, 8);
      for (const target of targets) {
        const node = getNode(state, resolvePath(state, target));
        if (!node) return fail(`chmod: ${target}: ${L('tidak ada file atau direktori', 'No such file or directory')}`);
        node.mode = value;
        if (target.split('/').pop() === 'secret.txt' && value === 0o600) state.flags.add('chmod600');
      }
      return ok();
    }

    case 'ping': {
      if (!args[0]) return fail(L('ping: tujuan belum diberikan', 'ping: missing destination'));
      const host = args[0];
      const ip = KNOWN_HOSTS[host];
      if (!ip) {
        return fail(
          L(
            `ping: ${host}: host tidak dikenal. Ini simulasi lokal: hanya host lab (localhost, router.lab, dns.lab, example.test) yang ada. Tidak ada paket nyata yang dikirim.`,
            `ping: ${host}: unknown host. This is a local simulation: only lab hosts (localhost, router.lab, dns.lab, example.test) exist. No real packets are sent.`
          )
        );
      }
      const times = ['0.41', '0.38', '0.45', '0.40'];
      const body = times.map((tm, i) => `64 bytes from ${ip}: icmp_seq=${i + 1} ttl=64 time=${tm} ms`).join('\n');
      return ok(
        `PING ${host} (${ip}) 56(84) bytes of data. [${L('simulasi', 'simulated')}]\n${body}\n--- ${host} ping statistics ---\n4 packets transmitted, 4 received, 0% packet loss`
      );
    }

    case 'nslookup': {
      if (!args[0]) return fail(L('nslookup: nama belum diberikan', 'nslookup: missing name'));
      const name = args[0];
      const ip = KNOWN_HOSTS[name];
      if (!ip) return fail(`** server can't find ${name}: NXDOMAIN ${L('(tabel lab lokal)', '(local lab table)')}`);
      return ok(`Server:  dns.lab\nAddress: 192.168.56.53#53\n\nName:    ${name}\nAddress: ${ip}\n${L('(jawaban simulasi dari tabel lab lokal)', '(simulated answer from the local lab table)')}`);
    }

    case 'ip':
    case 'ifconfig': {
      if (cmd === 'ip' && args[0] !== 'a' && args[0] !== 'addr') return fail(L('ip: gunakan "ip a"', 'ip: use "ip a"'));
      return ok(
        '1: lo: <LOOPBACK,UP> mtu 65536\n    inet 127.0.0.1/8\n2: eth0: <BROADCAST,MULTICAST,UP> mtu 1500\n    link/ether 02:00:5e:10:00:0a\n    inet 192.168.56.10/24 brd 192.168.56.255\n' +
          L('(antarmuka simulasi)', '(simulated interfaces)')
      );
    }

    case 'ss':
    case 'netstat': {
      return ok(
        'State   Recv-Q Send-Q Local Address:Port  Peer Address:Port\nLISTEN  0      128    0.0.0.0:80          0.0.0.0:*\nLISTEN  0      128    0.0.0.0:443         0.0.0.0:*\nLISTEN  0      128    127.0.0.1:5432      0.0.0.0:*\n' +
          L('(daftar port simulasi: 5432 hanya lokal, itulah praktik yang baik)', '(simulated list: 5432 is local-only, which is good practice)')
      );
    }

    case 'sha256sum': {
      const { rest } = parseFlags(args);
      const res = readInput(state, rest, stdin, 'sha256sum', L);
      if (res.err) return fail(res.err);
      const hex = await sha256Hex(res.text);
      if (!hex) return fail(L('sha256sum: Web Crypto tidak tersedia di browser ini', 'sha256sum: Web Crypto is not available in this browser'));
      state.flags.add('hash');
      return ok(`${hex}  ${rest[0] || '-'}\n`);
    }

    case 'base64': {
      const { flags, rest } = parseFlags(args);
      const res = readInput(state, rest, stdin, 'base64', L);
      if (res.err) return fail(res.err);
      try {
        return ok(`${flags.has('d') ? b64decode(res.text) : b64encode(res.text)}\n`);
      } catch {
        return fail(L('base64: input tidak valid', 'base64: invalid input'));
      }
    }

    default:
      return fail(L(`${cmd}: perintah tidak ditemukan. Ketik "help" untuk daftar perintah.`, `${cmd}: command not found. Type "help" to see available commands.`));
  }
}

/* ---------- Titik masuk: jalankan satu baris ---------- */

export async function runLine(state, line, lang = 'id') {
  const L = (idText, enText) => (lang === 'id' ? idText : enText);
  const raw = line.trim();
  const lines = [];
  if (!raw) return { lines, clear: false };
  state.history.push(raw);
  if (state.history.length > 200) state.history.shift();

  const segments = splitPipes(raw);
  let stdin = null;
  let clear = false;

  for (let i = 0; i < segments.length; i += 1) {
    const isLast = i === segments.length - 1;
    const parsed = tokenize(segments[i]);
    if (parsed.error) {
      lines.push({ type: 'err', text: L('kesalahan sintaks: tanda kutip tidak tertutup', 'syntax error: unterminated quote') });
      return { lines, clear };
    }
    let tokens = parsed.tokens;
    if (tokens.length === 0) {
      lines.push({ type: 'err', text: L('kesalahan sintaks di dekat "|"', 'syntax error near "|"') });
      return { lines, clear };
    }

    let redirect = null;
    if (isLast) {
      const idx = tokens.findIndex((tk) => tk === '>' || tk === '>>');
      if (idx !== -1) {
        redirect = { append: tokens[idx] === '>>', target: tokens[idx + 1] };
        tokens = tokens.slice(0, idx);
        if (!redirect.target || tokens.length === 0) {
          lines.push({ type: 'err', text: L('kesalahan sintaks: tujuan pengalihan belum ada', 'syntax error: missing redirect target') });
          return { lines, clear };
        }
      }
    }

    const [cmd, ...args] = tokens;
    // eslint-disable-next-line no-await-in-loop
    const res = await execCommand(state, cmd, args, stdin, lang);
    if (res.clear) clear = true;
    if (res.err) lines.push(...toLines('err', res.err));
    stdin = res.out || '';

    if (isLast) {
      if (redirect) {
        const segs = resolvePath(state, redirect.target);
        const name = segs[segs.length - 1];
        const parent = getNode(state, segs.slice(0, -1));
        if (!name || !validName(name) || !parent || parent.type !== 'dir') {
          lines.push({ type: 'err', text: `${redirect.target}: ${L('tujuan tidak valid', 'invalid target')}` });
        } else {
          const existing = Object.prototype.hasOwnProperty.call(parent.children, name) ? parent.children[name] : null;
          if (existing && existing.type === 'dir') {
            lines.push({ type: 'err', text: `${redirect.target}: ${L('adalah direktori', 'Is a directory')}` });
          } else if (existing && !canWrite(existing)) {
            lines.push({ type: 'err', text: `${redirect.target}: ${L('Izin ditolak', 'Permission denied')}` });
          } else if (!existing && !canWrite(parent)) {
            lines.push({ type: 'err', text: `${redirect.target}: ${L('Izin ditolak', 'Permission denied')}` });
          } else if (existing) {
            existing.content = redirect.append ? existing.content + stdin : stdin;
          } else {
            parent.children[name] = file(stdin);
          }
        }
      } else {
        lines.push(...toLines('out', stdin));
      }
    }
  }

  return { lines, clear };
}
