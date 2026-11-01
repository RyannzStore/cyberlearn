'use client';

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { loadJSON, saveJSON, removeKey } from '@/lib/storage';
import {
  LANG_KEY,
  PROGRESS_KEY,
  computeBestStreak,
  computeStreak,
  dayKey,
  emptyProgress,
  sanitizeProgress,
} from '@/lib/progress';

const AppContext = createContext(null);

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error('useApp harus dipakai di dalam <AppProvider>');
  return ctx;
}

const MAX_ACTIVITY = 60;

// Menambah hari aktif + entri aktivitas ke salinan progres.
function withActivity(next, entry) {
  const today = dayKey();
  if (!next.days.includes(today)) next.days = [...next.days, today].slice(-400);
  if (entry) {
    next.activity = [{ ...entry, ts: Date.now() }, ...next.activity].slice(0, MAX_ACTIVITY);
  }
  return next;
}

export default function AppProvider({ children }) {
  // State awal identik di server & client -> tidak ada hydration mismatch.
  const [lang, setLangState] = useState('id');
  const [progress, setProgress] = useState(emptyProgress);
  const [ready, setReady] = useState(false);

  // Muat dari LocalStorage setelah mount.
  useEffect(() => {
    const storedLang = loadJSON(LANG_KEY, null);
    if (storedLang === 'id' || storedLang === 'en') setLangState(storedLang);
    const stored = loadJSON(PROGRESS_KEY, null);
    if (stored) setProgress(sanitizeProgress(stored));
    setReady(true);
  }, []);

  // Simpan setiap perubahan (hanya setelah data awal dimuat).
  useEffect(() => {
    if (ready) saveJSON(PROGRESS_KEY, progress);
  }, [progress, ready]);

  useEffect(() => {
    if (!ready) return;
    saveJSON(LANG_KEY, lang);
  }, [lang, ready]);

  useEffect(() => {
    if (typeof document !== 'undefined') document.documentElement.lang = lang;
  }, [lang]);

  const setLang = useCallback((l) => setLangState(l === 'en' ? 'en' : 'id'), []);
  const toggleLang = useCallback(() => setLangState((l) => (l === 'id' ? 'en' : 'id')), []);

  const t = useCallback((idText, enText) => (lang === 'id' ? idText : enText), [lang]);
  const tr = useCallback(
    (obj) => {
      if (!obj) return '';
      if (typeof obj === 'string') return obj;
      return obj[lang] ?? obj.id ?? obj.en ?? '';
    },
    [lang]
  );

  const startModule = useCallback((id) => {
    setProgress((prev) => {
      if (prev.started[id] || prev.completed[id]) return prev;
      const next = { ...prev, started: { ...prev.started, [id]: Date.now() } };
      return withActivity(next, { type: 'start', ref: id });
    });
  }, []);

  const completeModule = useCallback((id) => {
    setProgress((prev) => {
      if (prev.completed[id]) return prev;
      const next = {
        ...prev,
        started: { ...prev.started, [id]: prev.started[id] || Date.now() },
        completed: { ...prev.completed, [id]: Date.now() },
      };
      return withActivity(next, { type: 'complete', ref: id });
    });
  }, []);

  const uncompleteModule = useCallback((id) => {
    setProgress((prev) => {
      if (!prev.completed[id]) return prev;
      const completed = { ...prev.completed };
      delete completed[id];
      return { ...prev, completed };
    });
  }, []);

  const recordQuiz = useCallback((id, score, total) => {
    setProgress((prev) => {
      const old = prev.quiz[id] || { best: 0, attempts: 0 };
      const next = {
        ...prev,
        quiz: {
          ...prev.quiz,
          [id]: {
            best: Math.max(old.best, score),
            last: score,
            total,
            attempts: old.attempts + 1,
          },
        },
      };
      return withActivity(next, { type: 'quiz', ref: id, score, total });
    });
  }, []);

  const recordCyberQuiz = useCallback((score, total) => {
    setProgress((prev) => {
      const old = prev.cyber;
      const ratio = total ? score / total : 0;
      const oldRatio = old.bestTotal ? old.best / old.bestTotal : 0;
      const better = ratio >= oldRatio;
      const next = {
        ...prev,
        cyber: {
          best: better ? score : old.best,
          bestTotal: better ? total : old.bestTotal,
          attempts: old.attempts + 1,
          history: [...old.history, { score, total, ts: Date.now() }].slice(-10),
        },
      };
      return withActivity(next, { type: 'cyberquiz', score, total });
    });
  }, []);

  const recordScenario = useCallback((id, score, max) => {
    setProgress((prev) => {
      const old = prev.scenarios[id] || { best: 0, attempts: 0 };
      const next = {
        ...prev,
        scenarios: {
          ...prev.scenarios,
          [id]: { best: Math.max(old.best, score), max, attempts: old.attempts + 1 },
        },
      };
      return withActivity(next, { type: 'scenario', ref: id, score, total: max });
    });
  }, []);

  const recordTerminalTask = useCallback((taskId) => {
    setProgress((prev) => {
      if (prev.terminal[taskId]) return prev;
      const next = { ...prev, terminal: { ...prev.terminal, [taskId]: Date.now() } };
      return withActivity(next, { type: 'terminal', ref: taskId });
    });
  }, []);

  const resetProgress = useCallback(() => {
    removeKey(PROGRESS_KEY);
    setProgress(emptyProgress());
  }, []);

  const importProgress = useCallback((raw) => {
    setProgress(sanitizeProgress(raw));
  }, []);

  const derived = useMemo(() => {
    const completedIds = Object.keys(progress.completed).map(Number);
    const startedIds = Object.keys(progress.started)
      .map(Number)
      .filter((id) => !progress.completed[id]);
    return {
      completedIds,
      inProgressIds: startedIds,
      streak: computeStreak(progress.days),
      bestStreak: computeBestStreak(progress.days),
    };
  }, [progress]);

  const value = useMemo(
    () => ({
      lang,
      setLang,
      toggleLang,
      t,
      tr,
      ready,
      progress,
      ...derived,
      isCompleted: (id) => Boolean(progress.completed[id]),
      isStarted: (id) => Boolean(progress.started[id]) && !progress.completed[id],
      startModule,
      completeModule,
      uncompleteModule,
      recordQuiz,
      recordCyberQuiz,
      recordScenario,
      recordTerminalTask,
      resetProgress,
      importProgress,
    }),
    [
      lang,
      setLang,
      toggleLang,
      t,
      tr,
      ready,
      progress,
      derived,
      startModule,
      completeModule,
      uncompleteModule,
      recordQuiz,
      recordCyberQuiz,
      recordScenario,
      recordTerminalTask,
      resetProgress,
      importProgress,
    ]
  );

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}
