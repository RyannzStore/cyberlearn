'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, CheckCircle2, ChevronLeft, ChevronRight, Clock, Target, Undo2 } from 'lucide-react';
import { useApp } from '@/components/AppProvider';
import { Illustration } from '@/components/Illustrations';
import { LevelBadge, StatusBadge } from '@/components/ModuleCard';
import MiniQuiz from '@/components/MiniQuiz';
import { getNeighbors, TOTAL_MODULES } from '@/data/modules';

export default function ModuleView({ module: m }) {
  const { t, tr, lang, startModule, completeModule, uncompleteModule, isCompleted, isStarted } = useApp();
  const [toast, setToast] = useState('');
  const { prev, next } = getNeighbors(m.id);

  // Menandai modul "sedang dipelajari" saat dibuka (idempoten).
  useEffect(() => {
    startModule(m.id);
    window.scrollTo({ top: 0 });
  }, [m.id, startModule]);

  useEffect(() => {
    if (!toast) return undefined;
    const id = setTimeout(() => setToast(''), 2600);
    return () => clearTimeout(id);
  }, [toast]);

  const done = isCompleted(m.id);
  const status = done ? 'done' : isStarted(m.id) ? 'progress' : 'new';
  const sections = m.sections[lang] || m.sections.id;
  const objectives = m.objectives[lang] || m.objectives.id;
  const example = m.example[lang] || m.example.id;
  const summary = m.summary[lang] || m.summary.id;
  const questions = m.quiz[lang] || m.quiz.id;

  const onComplete = () => {
    completeModule(m.id);
    setToast(t('Modul ditandai selesai. Progres tersimpan.', 'Module marked as completed. Progress saved.'));
  };

  return (
    <article className="fade-in">
      <Link href="/learn" className="crumb">
        <ArrowLeft size={14} /> {t('Kembali ke Pusat Belajar', 'Back to Learning Center')}
      </Link>

      <header className="panel mv-head">
        <div>
          <div className="chip-row" style={{ alignItems: 'center' }}>
            <span className="mnum">
              {t('Modul', 'Module')} {m.id}/{TOTAL_MODULES}
            </span>
            <LevelBadge level={m.level} />
            <StatusBadge status={status} />
            <span className="muted small" style={{ display: 'inline-flex', alignItems: 'center', gap: 5 }}>
              <Clock size={13} /> {m.minutes} {t('menit', 'min')}
            </span>
          </div>
          <h1>{tr(m.title)}</h1>
          <p>{tr(m.description)}</p>
        </div>
        <div className="mv-illu">
          <Illustration name={m.illustration} />
        </div>
      </header>

      <div className="mv-layout">
        <div>
          <section className="panel mv-section" aria-labelledby="objectives">
            <h2 id="objectives">
              <Target size={20} color="#39ff88" /> {t('Tujuan Pembelajaran', 'Learning Objectives')}
            </h2>
            <ul className="list-check" style={{ marginTop: 0 }}>
              {objectives.map((o, i) => (
                <li key={`obj-${m.id}-${i}`}>
                  <CheckCircle2 size={17} />
                  <span>{o}</span>
                </li>
              ))}
            </ul>
          </section>

          {sections.map((s, i) => (
            <section key={`sec-${m.id}-${i}`} id={`sec-${i + 1}`} className="panel mv-section" style={{ scrollMarginTop: 90 }}>
              <h2>
                <span className="num">{String(i + 1).padStart(2, '0')}</span>
                {s.heading}
              </h2>
              {s.body.map((para, pi) => (
                <p key={`sec-${m.id}-${i}-p-${pi}`}>{para}</p>
              ))}
              {s.points && s.points.length > 0 ? (
                <ul className="bullets">
                  {s.points.map((pt, pi) => (
                    <li key={`sec-${m.id}-${i}-pt-${pi}`}>{pt}</li>
                  ))}
                </ul>
              ) : null}
            </section>
          ))}

          <section className="panel mv-section" id="example" style={{ scrollMarginTop: 90 }}>
            <div className="callout">
              <h3>{t('Contoh Praktis (Aman)', 'Practical Example (Safe)')}</h3>
              <strong style={{ display: 'block', marginBottom: 6 }}>{example.title}</strong>
              <p>{example.text}</p>
              {example.code ? <pre className="codeblock">{example.code}</pre> : null}
            </div>
          </section>

          <section className="panel mv-section" id="summary" style={{ scrollMarginTop: 90 }}>
            <h2>{t('Rangkuman', 'Summary')}</h2>
            <ul className="bullets" style={{ marginTop: 0 }}>
              {summary.map((s, i) => (
                <li key={`sum-${m.id}-${i}`}>{s}</li>
              ))}
            </ul>
          </section>

          <section className="mv-section panel" id="quiz" style={{ scrollMarginTop: 90 }}>
            <h2>{t('Mini Quiz', 'Mini Quiz')}</h2>
            <MiniQuiz moduleId={m.id} questions={questions} />
          </section>

          <div className="panel mv-actions">
            {done ? (
              <div className="done-banner">
                <CheckCircle2 size={22} />
                <span>{t('Kamu sudah menyelesaikan modul ini.', 'You have completed this module.')}</span>
                <span className="spacer" />
                <button className="btn btn-sm" onClick={() => uncompleteModule(m.id)}>
                  <Undo2 size={14} /> {t('Batalkan', 'Undo')}
                </button>
              </div>
            ) : (
              <button className="btn btn-primary" onClick={onComplete}>
                <CheckCircle2 size={18} /> {t('Tandai Selesai', 'Mark as Completed')}
              </button>
            )}

            <div className="mv-nav">
              {prev ? (
                <Link href={`/learn/${prev.slug}`} className="btn">
                  <ChevronLeft size={18} />
                  <span>
                    <small>{t('Sebelumnya', 'Previous')}</small>
                    <strong>{tr(prev.title)}</strong>
                  </span>
                </Link>
              ) : (
                <span />
              )}
              {next ? (
                <Link href={`/learn/${next.slug}`} className="btn next">
                  <span>
                    <small>{t('Berikutnya', 'Next')}</small>
                    <strong>{tr(next.title)}</strong>
                  </span>
                  <ChevronRight size={18} />
                </Link>
              ) : (
                <Link href="/progress" className="btn next">
                  <span>
                    <small>{t('Selesai semua?', 'All done?')}</small>
                    <strong>{t('Lihat Progres Saya', 'View My Progress')}</strong>
                  </span>
                  <ArrowRight size={18} />
                </Link>
              )}
            </div>
          </div>
        </div>

        <aside className="panel pad mv-toc" aria-label={t('Daftar isi', 'Table of contents')}>
          <span className="kicker">{t('Daftar Isi', 'Contents')}</span>
          <ol>
            <li>
              <a href="#objectives">{t('Tujuan Pembelajaran', 'Learning Objectives')}</a>
            </li>
            {sections.map((s, i) => (
              <li key={`toc-${m.id}-${i}`}>
                <a href={`#sec-${i + 1}`}>{s.heading}</a>
              </li>
            ))}
            <li>
              <a href="#example">{t('Contoh Praktis', 'Practical Example')}</a>
            </li>
            <li>
              <a href="#summary">{t('Rangkuman', 'Summary')}</a>
            </li>
            <li>
              <a href="#quiz">Mini Quiz</a>
            </li>
          </ol>
        </aside>
      </div>

      {toast ? (
        <div className="toast" role="status">
          {toast}
        </div>
      ) : null}
    </article>
  );
}
