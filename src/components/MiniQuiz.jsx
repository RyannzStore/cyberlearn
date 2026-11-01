'use client';

import { useEffect, useMemo, useState } from 'react';
import { CheckCircle2, RotateCcw, XCircle } from 'lucide-react';
import { useApp } from '@/components/AppProvider';

const LETTERS = ['A', 'B', 'C', 'D', 'E', 'F'];

// Mini quiz di akhir modul. Skor tersimpan ke progres lewat recordQuiz.
export default function MiniQuiz({ moduleId, questions }) {
  const { t, recordQuiz, progress } = useApp();
  const [picked, setPicked] = useState({}); // { [indexSoal]: indexOpsi }
  const [submitted, setSubmitted] = useState(false);

  // Reset saat pindah modul.
  useEffect(() => {
    setPicked({});
    setSubmitted(false);
  }, [moduleId]);

  const total = questions.length;
  const answeredCount = Object.keys(picked).length;
  const score = useMemo(
    () => questions.reduce((s, q, i) => (picked[i] === q.answer ? s + 1 : s), 0),
    [questions, picked]
  );
  const best = progress.quiz[moduleId]?.best;

  const submit = () => {
    if (answeredCount < total || submitted) return;
    setSubmitted(true);
    recordQuiz(moduleId, score, total);
  };

  const retry = () => {
    setPicked({});
    setSubmitted(false);
  };

  return (
    <div>
      <p className="muted small" style={{ marginBottom: 12 }}>
        {t(
          'Pilih satu jawaban untuk setiap soal, lalu tekan "Periksa Jawaban".',
          'Pick one answer for each question, then press "Check Answers".'
        )}
        {typeof best === 'number' ? (
          <>
            {' '}
            <strong style={{ color: 'var(--neon)' }}>
              {t('Skor terbaik', 'Best score')}: {best}/{total}
            </strong>
          </>
        ) : null}
      </p>

      <div className="grid">
        {questions.map((q, qi) => (
          <div key={`${moduleId}-q-${qi}`} className="panel q-card">
            <span className="kicker">
              {t('Soal', 'Question')} {qi + 1}/{total}
            </span>
            <p className="q-text">{q.q}</p>
            <div className="opts" role="radiogroup" aria-label={q.q}>
              {q.options.map((opt, oi) => {
                const isPicked = picked[qi] === oi;
                let cls = 'opt';
                if (submitted) {
                  if (oi === q.answer) cls += ' correct';
                  else if (isPicked) cls += ' wrong';
                } else if (isPicked) {
                  cls += ' sel';
                }
                return (
                  <button
                    key={`${moduleId}-q-${qi}-o-${oi}`}
                    type="button"
                    role="radio"
                    aria-checked={isPicked}
                    className={cls}
                    disabled={submitted}
                    onClick={() => setPicked((p) => ({ ...p, [qi]: oi }))}
                  >
                    <span className="letter">{LETTERS[oi]}</span>
                    <span>{opt}</span>
                  </button>
                );
              })}
            </div>
            {submitted ? (
              <div className="explain" style={{ display: 'flex', gap: 10 }}>
                {picked[qi] === q.answer ? (
                  <CheckCircle2 size={18} color="#39ff88" style={{ flex: 'none', marginTop: 2 }} />
                ) : (
                  <XCircle size={18} color="#ff5d73" style={{ flex: 'none', marginTop: 2 }} />
                )}
                <span>{q.explain}</span>
              </div>
            ) : null}
          </div>
        ))}
      </div>

      <div className="btn-row" style={{ marginTop: 14, alignItems: 'center' }}>
        {!submitted ? (
          <>
            <button className="btn btn-primary" onClick={submit} disabled={answeredCount < total}>
              {t('Periksa Jawaban', 'Check Answers')}
            </button>
            <span className="muted small">
              {answeredCount}/{total} {t('terjawab', 'answered')}
            </span>
          </>
        ) : (
          <div className="score-box">
            <span className="score-big">
              {score}/{total}
            </span>
            <span className="muted">
              {score === total
                ? t('Sempurna! Kamu menguasai materi ini.', 'Perfect! You have mastered this material.')
                : score >= Math.ceil(total / 2)
                  ? t('Bagus. Baca ulang bagian yang masih meleset.', 'Nice. Re-read the parts you missed.')
                  : t('Belum pas. Baca ulang materi lalu coba lagi.', 'Not there yet. Review the material and try again.')}
            </span>
            <button className="btn" onClick={retry}>
              <RotateCcw size={16} /> {t('Coba Lagi', 'Try Again')}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
