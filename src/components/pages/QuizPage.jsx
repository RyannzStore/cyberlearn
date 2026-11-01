'use client';

import { useMemo, useState } from 'react';
import { ArrowRight, RotateCcw, Trophy } from 'lucide-react';
import { useApp } from '@/components/AppProvider';
import PageHeader from '@/components/PageHeader';
import { LEVELS, getAllQuestions } from '@/data/modules';

const LETTERS = ['A', 'B', 'C', 'D'];
const COUNTS = [10, 20, 30];

function shuffle(list) {
  const a = list.slice();
  for (let i = a.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function QuizPage() {
  const { t, tr, lang, progress, recordCyberQuiz } = useApp();
  const [level, setLevel] = useState(0);
  const [count, setCount] = useState(10);
  const [run, setRun] = useState(null); // { items, index, picked, score, done }

  const pool = useMemo(() => getAllQuestions(), []);
  const available = useMemo(() => pool.filter((q) => level === 0 || q.level === level), [pool, level]);
  const effectiveCount = Math.min(count, available.length);

  const start = () => {
    const items = shuffle(available).slice(0, effectiveCount);
    setRun({ items, index: 0, picked: null, score: 0, done: false });
  };

  const pick = (oi) => {
    setRun((r) => {
      if (!r || r.picked !== null) return r;
      const q = r.items[r.index].q[lang] || r.items[r.index].q.id;
      return { ...r, picked: oi, score: r.score + (oi === q.answer ? 1 : 0) };
    });
  };

  const next = () => {
    if (!run) return;
    if (run.index + 1 >= run.items.length) {
      recordCyberQuiz(run.score, run.items.length);
      setRun({ ...run, done: true });
    } else {
      setRun({ ...run, index: run.index + 1, picked: null });
    }
  };

  const cyber = progress.cyber;

  if (!run) {
    return (
      <div>
        <PageHeader
          kicker="Cyber Quiz"
          title={t('Uji Pengetahuan Cybersecurity', 'Test Your Cybersecurity Knowledge')}
          description={t(
            `Soal diambil acak dari seluruh ${pool.length} soal mini quiz modul. Pilih level dan jumlah soal.`,
            `Questions are drawn at random from all ${pool.length} module mini-quiz questions. Choose a level and length.`
          )}
        />
        <div className="grid grid-2">
          <div className="panel pad-lg">
            <div className="field" style={{ marginBottom: 16 }}>
              <label>{t('Level', 'Level')}</label>
              <div className="chip-row" role="group">
                <button type="button" className={`chip ${level === 0 ? 'on' : ''}`} aria-pressed={level === 0} onClick={() => setLevel(0)}>
                  {t('Semua level', 'All levels')}
                </button>
                {LEVELS.map((lv) => (
                  <button key={lv.id} type="button" className={`chip ${level === lv.id ? 'on' : ''}`} aria-pressed={level === lv.id} onClick={() => setLevel(lv.id)}>
                    L{lv.id} · {tr(lv.name)}
                  </button>
                ))}
              </div>
            </div>
            <div className="field" style={{ marginBottom: 18 }}>
              <label>{t('Jumlah soal', 'Number of questions')}</label>
              <div className="chip-row" role="group">
                {COUNTS.map((c) => (
                  <button key={c} type="button" className={`chip ${count === c ? 'on' : ''}`} aria-pressed={count === c} onClick={() => setCount(c)}>
                    {c}
                  </button>
                ))}
              </div>
            </div>
            <button className="btn btn-primary" type="button" onClick={start} disabled={available.length === 0}>
              {t('Mulai Quiz', 'Start Quiz')} ({effectiveCount}) <ArrowRight size={16} />
            </button>
          </div>

          <div className="panel pad-lg">
            <div className="section-title" style={{ margin: '0 0 10px' }}>
              <h2>{t('Rekormu', 'Your Record')}</h2>
            </div>
            {cyber.attempts > 0 ? (
              <>
                <div className="kv">
                  <div>
                    <small>{t('Skor terbaik', 'Best score')}</small>
                    <b>
                      {cyber.best}/{cyber.bestTotal}
                    </b>
                  </div>
                  <div>
                    <small>{t('Percobaan', 'Attempts')}</small>
                    <b>{cyber.attempts}</b>
                  </div>
                </div>
                <p className="muted small" style={{ marginTop: 12 }}>
                  {t('Hasil terakhir', 'Recent results')}:{' '}
                  {cyber.history
                    .slice(-5)
                    .map((h) => `${h.score}/${h.total}`)
                    .join(' · ')}
                </p>
              </>
            ) : (
              <p className="muted">{t('Belum ada percobaan. Mulai quiz pertamamu!', 'No attempts yet. Take your first quiz!')}</p>
            )}
          </div>
        </div>
      </div>
    );
  }

  if (run.done) {
    const total = run.items.length;
    const pct = Math.round((run.score / total) * 100);
    return (
      <div className="fade-in">
        <PageHeader kicker="Cyber Quiz" title={t('Hasil Quiz', 'Quiz Result')} />
        <div className="panel pad-lg">
          <div className="score-box">
            <Trophy size={36} color="#39ff88" />
            <span className="score-big">
              {run.score}/{total}
            </span>
            <div>
              <strong>{pct}%</strong>
              <p className="muted small">
                {pct >= 80
                  ? t('Luar biasa! Pemahamanmu kuat.', 'Outstanding! Your understanding is strong.')
                  : pct >= 50
                    ? t('Bagus. Ulangi modul yang masih lemah.', 'Good. Revisit the modules you are weaker in.')
                    : t('Terus belajar. Baca ulang modul lalu coba lagi.', 'Keep learning. Re-read the modules and try again.')}
              </p>
            </div>
          </div>
          <div className="btn-row" style={{ marginTop: 16 }}>
            <button className="btn btn-primary" type="button" onClick={start}>
              <RotateCcw size={16} /> {t('Quiz Baru', 'New Quiz')}
            </button>
            <button className="btn" type="button" onClick={() => setRun(null)}>
              {t('Ubah Pengaturan', 'Change Settings')}
            </button>
          </div>
        </div>
      </div>
    );
  }

  const item = run.items[run.index];
  const q = item.q[lang] || item.q.id;

  return (
    <div className="fade-in">
      <PageHeader kicker="Cyber Quiz" title={`${t('Soal', 'Question')} ${run.index + 1}/${run.items.length}`} />
      <div className="pbar" style={{ marginBottom: 16 }}>
        <span style={{ width: `${(run.index / run.items.length) * 100}%` }} />
      </div>
      <div className="panel q-card">
        <div className="chip-row">
          <span className={`badge lvl-${item.level}`}>L{item.level}</span>
          <span className="chip on">
            {t('Skor', 'Score')}: {run.score}
          </span>
        </div>
        <p className="q-text">{q.q}</p>
        <div className="opts" role="radiogroup" aria-label={q.q}>
          {q.options.map((opt, oi) => {
            let cls = 'opt';
            if (run.picked !== null) {
              if (oi === q.answer) cls += ' correct';
              else if (oi === run.picked) cls += ' wrong';
            }
            return (
              <button key={`${item.key}-${oi}`} type="button" role="radio" aria-checked={run.picked === oi} className={cls} disabled={run.picked !== null} onClick={() => pick(oi)}>
                <span className="letter">{LETTERS[oi]}</span>
                <span>{opt}</span>
              </button>
            );
          })}
        </div>
        {run.picked !== null ? (
          <>
            <div className="explain" role="status">
              {q.explain}
            </div>
            <div className="btn-row" style={{ marginTop: 14 }}>
              <button className="btn btn-primary" type="button" onClick={next}>
                {run.index + 1 >= run.items.length ? t('Lihat Hasil', 'See Result') : t('Soal Berikutnya', 'Next Question')} <ArrowRight size={16} />
              </button>
            </div>
          </>
        ) : null}
      </div>
    </div>
  );
}
