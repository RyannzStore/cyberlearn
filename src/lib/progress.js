// Fungsi murni untuk data progres belajar (tanpa React) agar mudah diuji.

export const PROGRESS_KEY = 'cyberlearn:v2:progress';
export const LANG_KEY = 'cyberlearn:v2:lang';

export const emptyProgress = () => ({
  version: 2,
  started: {}, // { [moduleId]: timestamp }
  completed: {}, // { [moduleId]: timestamp }
  quiz: {}, // { [moduleId]: { best, last, total, attempts } }
  scenarios: {}, // { [scenarioId]: { best, max, attempts } }
  terminal: {}, // { [taskId]: timestamp }
  cyber: { best: 0, bestTotal: 0, attempts: 0, history: [] },
  activity: [], // [{ type, ref, ts, score?, total? }]
  days: [], // ['YYYY-MM-DD', ...] hari dengan aktivitas belajar
});

export function dayKey(date = new Date()) {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

export function computeStreak(days) {
  const set = new Set(days || []);
  const cur = new Date();
  if (!set.has(dayKey(cur))) {
    cur.setDate(cur.getDate() - 1);
    if (!set.has(dayKey(cur))) return 0;
  }
  let streak = 0;
  while (set.has(dayKey(cur))) {
    streak += 1;
    cur.setDate(cur.getDate() - 1);
  }
  return streak;
}

export function computeBestStreak(days) {
  const sorted = Array.from(new Set(days || [])).sort();
  if (sorted.length === 0) return 0;
  let best = 1;
  let run = 1;
  for (let i = 1; i < sorted.length; i += 1) {
    const a = new Date(`${sorted[i - 1]}T00:00:00`);
    const b = new Date(`${sorted[i]}T00:00:00`);
    const diff = Math.round((b - a) / 86400000);
    run = diff === 1 ? run + 1 : 1;
    if (run > best) best = run;
  }
  return best;
}

// Daftar n hari terakhir (terlama -> hari ini) sebagai objek { key, date }.
export function lastDays(n) {
  const out = [];
  for (let i = n - 1; i >= 0; i -= 1) {
    const d = new Date();
    d.setDate(d.getDate() - i);
    out.push({ key: dayKey(d), date: d });
  }
  return out;
}

// Jumlah modul selesai per hari untuk n hari terakhir.
export function completedPerDay(completed, n) {
  const days = lastDays(n);
  const counts = {};
  Object.values(completed || {}).forEach((ts) => {
    const k = dayKey(new Date(ts));
    counts[k] = (counts[k] || 0) + 1;
  });
  return days.map(({ key, date }) => ({ key, date, count: counts[key] || 0 }));
}

// Validasi ringan saat impor agar data rusak tidak merusak aplikasi.
export function sanitizeProgress(raw) {
  const base = emptyProgress();
  if (!raw || typeof raw !== 'object') return base;
  const obj = (v) => (v && typeof v === 'object' && !Array.isArray(v) ? v : {});
  const arr = (v) => (Array.isArray(v) ? v : []);
  const cyber = obj(raw.cyber);
  return {
    ...base,
    started: obj(raw.started),
    completed: obj(raw.completed),
    quiz: obj(raw.quiz),
    scenarios: obj(raw.scenarios),
    terminal: obj(raw.terminal),
    cyber: {
      best: Number(cyber.best) || 0,
      bestTotal: Number(cyber.bestTotal) || 0,
      attempts: Number(cyber.attempts) || 0,
      history: arr(cyber.history).slice(-10),
    },
    activity: arr(raw.activity).slice(0, 60),
    days: arr(raw.days).filter((d) => typeof d === 'string'),
  };
}
