import { level1 } from './level1';
import { level2 } from './level2';
import { level3 } from './level3';

export const modules = [...level1, ...level2, ...level3];
export const TOTAL_MODULES = modules.length;

export const LEVELS = [
  { id: 1, name: { id: 'Pemula', en: 'Beginner' }, color: '#39ff88' },
  { id: 2, name: { id: 'Menengah', en: 'Intermediate' }, color: '#22d3ee' },
  { id: 3, name: { id: 'Lanjutan', en: 'Advanced' }, color: '#f472b6' },
];

export const getLevel = (id) => LEVELS.find((l) => l.id === id) || LEVELS[0];
export const getModuleBySlug = (slug) => modules.find((m) => m.slug === slug) || null;
export const getModuleById = (id) => modules.find((m) => m.id === id) || null;
export const getModulesByLevel = (level) => modules.filter((m) => m.level === level);

export function getNeighbors(id) {
  const idx = modules.findIndex((m) => m.id === id);
  return {
    prev: idx > 0 ? modules[idx - 1] : null,
    next: idx >= 0 && idx < modules.length - 1 ? modules[idx + 1] : null,
  };
}

// Semua soal quiz dari seluruh modul (dipakai oleh Cyber Quiz).
export function getAllQuestions() {
  const out = [];
  modules.forEach((m) => {
    ['id', 'en'].forEach((lang) => {
      // dikelompokkan per indeks agar soal ID dan EN bisa dipasangkan
      m.quiz[lang].forEach((q, i) => {
        const key = `${m.id}-${i}`;
        let entry = out.find((e) => e.key === key);
        if (!entry) {
          entry = { key, moduleId: m.id, level: m.level, q: {} };
          out.push(entry);
        }
        entry.q[lang] = q;
      });
    });
  });
  return out;
}
