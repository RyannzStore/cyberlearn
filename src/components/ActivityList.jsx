'use client';

import Link from 'next/link';
import { CheckCircle2, HelpCircle, PlayCircle, Target, Terminal, Trophy } from 'lucide-react';
import { useApp } from '@/components/AppProvider';
import { getModuleById } from '@/data/modules';
import { scenarios } from '@/data/scenarios';
import { TERMINAL_TASKS } from '@/lib/terminal';

function formatTime(ts, lang) {
  try {
    return new Date(ts).toLocaleString(lang === 'id' ? 'id-ID' : 'en-US', {
      day: 'numeric',
      month: 'short',
      hour: '2-digit',
      minute: '2-digit',
    });
  } catch {
    return '';
  }
}

export default function ActivityList({ items, emptyText }) {
  const { t, tr, lang } = useApp();

  if (!items || items.length === 0) {
    return <div className="empty">{emptyText}</div>;
  }

  return (
    <div>
      {items.map((a, i) => {
        const key = `act-${a.ts}-${a.type}-${a.ref ?? ''}-${i}`;
        const when = formatTime(a.ts, lang);
        const mod = typeof a.ref === 'number' ? getModuleById(a.ref) : null;

        if (a.type === 'start' || a.type === 'complete') {
          if (!mod) return null;
          const done = a.type === 'complete';
          return (
            <Link key={key} href={`/learn/${mod.slug}`} className="row-item">
              <span className="row-ico">{done ? <CheckCircle2 size={17} /> : <PlayCircle size={17} />}</span>
              <span className="row-main">
                <strong>{tr(mod.title)}</strong>
                <span>
                  {done ? t('Modul diselesaikan', 'Module completed') : t('Mulai dipelajari', 'Started learning')} · {when}
                </span>
              </span>
            </Link>
          );
        }

        if (a.type === 'quiz') {
          return (
            <div key={key} className="row-item">
              <span className="row-ico">
                <HelpCircle size={17} />
              </span>
              <span className="row-main">
                <strong>
                  {t('Mini quiz', 'Mini quiz')}: {mod ? tr(mod.title) : `#${a.ref}`}
                </strong>
                <span>
                  {t('Skor', 'Score')} {a.score}/{a.total} · {when}
                </span>
              </span>
            </div>
          );
        }

        if (a.type === 'cyberquiz') {
          return (
            <Link key={key} href="/quiz" className="row-item">
              <span className="row-ico">
                <Trophy size={17} />
              </span>
              <span className="row-main">
                <strong>Cyber Quiz</strong>
                <span>
                  {t('Skor', 'Score')} {a.score}/{a.total} · {when}
                </span>
              </span>
            </Link>
          );
        }

        if (a.type === 'scenario') {
          const sc = scenarios.find((s) => s.id === a.ref);
          return (
            <Link key={key} href="/scenarios" className="row-item">
              <span className="row-ico">
                <Target size={17} />
              </span>
              <span className="row-main">
                <strong>{sc ? tr(sc.title) : t('Skenario', 'Scenario')}</strong>
                <span>
                  {t('Poin', 'Points')} {a.score}/{a.total} · {when}
                </span>
              </span>
            </Link>
          );
        }

        if (a.type === 'terminal') {
          const task = TERMINAL_TASKS.find((x) => x.id === a.ref);
          return (
            <Link key={key} href="/terminal" className="row-item">
              <span className="row-ico">
                <Terminal size={17} />
              </span>
              <span className="row-main">
                <strong>{task ? tr(task.title) : t('Tantangan terminal', 'Terminal challenge')}</strong>
                <span>
                  {t('Tantangan terminal selesai', 'Terminal challenge completed')} · {when}
                </span>
              </span>
            </Link>
          );
        }

        return null;
      })}
    </div>
  );
}
