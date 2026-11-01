'use client';

import Link from 'next/link';
import { ArrowRight, CheckCircle2, Clock, PlayCircle } from 'lucide-react';
import { useApp } from '@/components/AppProvider';
import { Illustration } from '@/components/Illustrations';
import { getLevel } from '@/data/modules';

export function useModuleStatus() {
  const { isCompleted, isStarted } = useApp();
  return (id) => (isCompleted(id) ? 'done' : isStarted(id) ? 'progress' : 'new');
}

export function StatusBadge({ status }) {
  const { t } = useApp();
  if (status === 'done') {
    return (
      <span className="badge st-done">
        <CheckCircle2 size={12} /> {t('Selesai', 'Completed')}
      </span>
    );
  }
  if (status === 'progress') {
    return (
      <span className="badge st-progress">
        <PlayCircle size={12} /> {t('Dipelajari', 'In progress')}
      </span>
    );
  }
  return <span className="badge st-new">{t('Belum mulai', 'Not started')}</span>;
}

export function LevelBadge({ level }) {
  const { tr } = useApp();
  const lv = getLevel(level);
  return (
    <span className={`badge lvl-${lv.id}`}>
      L{lv.id} · {tr(lv.name)}
    </span>
  );
}

export default function ModuleCard({ module: m }) {
  const { tr, t } = useApp();
  const statusOf = useModuleStatus();
  const status = statusOf(m.id);

  return (
    <Link href={`/learn/${m.slug}`} className="panel mcard fade-in" aria-label={tr(m.title)}>
      <div className="mcard-illu">
        <Illustration name={m.illustration} />
      </div>
      <div className="mcard-body">
        <div className="mcard-meta">
          <span className="mnum">#{String(m.id).padStart(2, '0')}</span>
          <LevelBadge level={m.level} />
        </div>
        <h3>{tr(m.title)}</h3>
        <p>{tr(m.description)}</p>
        <div className="mcard-foot">
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
            <Clock size={13} /> {m.minutes} {t('menit', 'min')}
          </span>
          <StatusBadge status={status} />
        </div>
        <span className="kicker" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, marginTop: 4 }}>
          {status === 'done' ? t('Buka lagi', 'Review') : status === 'progress' ? t('Lanjutkan', 'Continue') : t('Mulai belajar', 'Start learning')}
          <ArrowRight size={13} />
        </span>
      </div>
    </Link>
  );
}
