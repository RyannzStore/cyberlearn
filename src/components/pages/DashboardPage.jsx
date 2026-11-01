'use client';

import { useMemo } from 'react';
import Link from 'next/link';
import { ArrowRight, BookOpenCheck, CheckCircle2, Flame, Layers, PlayCircle, Trophy } from 'lucide-react';
import { useApp } from '@/components/AppProvider';
import { HeroIllustration, Illustration } from '@/components/Illustrations';
import { ActivityChart, ProgressBar, ProgressRing } from '@/components/charts';
import ActivityList from '@/components/ActivityList';
import ModuleCard, { LevelBadge } from '@/components/ModuleCard';
import { LEVELS, TOTAL_MODULES, getModulesByLevel, modules } from '@/data/modules';
import { completedPerDay } from '@/lib/progress';

function pickContinue(progress, completedIds) {
  const inProgress = modules
    .filter((m) => progress.started[m.id] && !progress.completed[m.id])
    .sort((a, b) => progress.started[b.id] - progress.started[a.id]);
  if (inProgress.length > 0) return inProgress[0];

  const remaining = modules.filter((m) => !progress.completed[m.id]);
  if (remaining.length === 0) return null;
  if (completedIds.length === 0) return remaining[0];

  // Modul belum selesai pertama setelah modul terakhir yang diselesaikan.
  const lastDone = Math.max(...completedIds);
  return remaining.find((m) => m.id > lastDone) || remaining[0];
}

export default function DashboardPage() {
  const { t, tr, lang, ready, progress, completedIds, inProgressIds, streak, isCompleted } = useApp();

  const completedCount = completedIds.length;
  const pct = Math.round((completedCount / TOTAL_MODULES) * 100);

  const continueModule = useMemo(() => pickContinue(progress, completedIds), [progress, completedIds]);

  const recommended = useMemo(() => {
    const pool = modules.filter((m) => !progress.completed[m.id] && (!continueModule || m.id !== continueModule.id));
    if (pool.length === 0) return [];
    const startId = continueModule ? continueModule.id : 0;
    const after = pool.filter((m) => m.id > startId);
    const before = pool.filter((m) => m.id < startId);
    return [...after, ...before].slice(0, 3);
  }, [progress.completed, continueModule]);

  const chartData = useMemo(() => {
    if (!ready) return [];
    return completedPerDay(progress.completed, 14).map((d) => ({
      key: d.key,
      count: d.count,
      label: String(d.date.getDate()),
    }));
  }, [ready, progress.completed]);

  const hasStarted = completedCount > 0 || inProgressIds.length > 0;

  return (
    <div>
      <section className="panel hero fade-in">
        <div>
          <span className="kicker">CyberLearn // Learn. Explore. Secure.</span>
          <h1>
            {hasStarted ? t('Selamat datang kembali,', 'Welcome back,') : t('Selamat datang,', 'Welcome,')} <em>{t('Cyber Learner', 'Cyber Learner')}</em>
          </h1>
          <p>
            {hasStarted
              ? t(
                  `Kamu sudah menyelesaikan ${completedCount} dari ${TOTAL_MODULES} modul. Lanjutkan perjalananmu dan jaga streak belajarmu.`,
                  `You have completed ${completedCount} of ${TOTAL_MODULES} modules. Keep going and protect your learning streak.`
                )
              : t(
                  'Pelajari cybersecurity dari dasar lewat 36 modul interaktif, lab simulasi, dan quiz. Semua progres tersimpan di perangkatmu.',
                  'Learn cybersecurity from the ground up with 36 interactive modules, simulated labs, and quizzes. All progress is saved on your device.'
                )}
          </p>
          <div className="btn-row">
            {continueModule ? (
              <Link href={`/learn/${continueModule.slug}`} className="btn btn-primary">
                <PlayCircle size={18} /> {hasStarted ? t('Lanjut Belajar', 'Continue Learning') : t('Mulai Belajar', 'Start Learning')}
              </Link>
            ) : (
              <Link href="/quiz" className="btn btn-primary">
                <Trophy size={18} /> {t('Uji Pengetahuanmu', 'Test Your Knowledge')}
              </Link>
            )}
            <Link href="/learn" className="btn">
              <Layers size={18} /> {t('Jelajahi 36 Modul', 'Explore 36 Modules')}
            </Link>
          </div>
        </div>
        <HeroIllustration />
      </section>

      <section className="grid grid-4" style={{ marginTop: 14 }} aria-label={t('Statistik belajar', 'Learning stats')}>
        <div className="panel stat">
          <div className="stat-top">
            <span>{t('Total Modul', 'Total Modules')}</span>
            <Layers size={17} />
          </div>
          <div className="stat-val">{TOTAL_MODULES}</div>
        </div>
        <div className="panel stat">
          <div className="stat-top">
            <span>{t('Selesai', 'Completed')}</span>
            <CheckCircle2 size={17} />
          </div>
          <div className="stat-val">
            {completedCount}
            <small> / {TOTAL_MODULES}</small>
          </div>
        </div>
        <div className="panel stat">
          <div className="stat-top">
            <span>{t('Sedang Dipelajari', 'In Progress')}</span>
            <BookOpenCheck size={17} />
          </div>
          <div className="stat-val">{inProgressIds.length}</div>
        </div>
        <div className="panel stat">
          <div className="stat-top">
            <span>{t('Streak Harian', 'Daily Streak')}</span>
            <Flame size={17} />
          </div>
          <div className="stat-val">
            {streak}
            <small> {t('hari', streak === 1 ? 'day' : 'days')}</small>
          </div>
        </div>
      </section>

      <section className="two-col" style={{ marginTop: 14 }}>
        <div className="panel pad-lg">
          <div className="section-title" style={{ margin: '0 0 12px' }}>
            <h2>{t('Grafik Progres Belajar', 'Learning Progress Chart')}</h2>
            <span className="muted small">{t('Modul selesai, 14 hari terakhir', 'Modules completed, last 14 days')}</span>
          </div>
          {ready ? (
            <ActivityChart
              data={chartData}
              emptyText={t('Selesaikan modul pertamamu untuk mengisi grafik ini.', 'Complete your first module to fill this chart.')}
            />
          ) : (
            <div style={{ height: 170 }} />
          )}
        </div>

        <div className="panel pad-lg">
          <div className="section-title" style={{ margin: '0 0 12px' }}>
            <h2>{t('Progres Keseluruhan', 'Overall Progress')}</h2>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 16 }}>
            <ProgressRing value={pct} size={132} sub={t('selesai', 'done')} />
          </div>
          <div className="grid" style={{ gap: 12 }}>
            {LEVELS.map((lv) => {
              const mods = getModulesByLevel(lv.id);
              const done = mods.filter((m) => isCompleted(m.id)).length;
              return (
                <div key={lv.id}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13, marginBottom: 6 }}>
                    <span>
                      L{lv.id} · {tr(lv.name)}
                    </span>
                    <span className="muted mono">
                      {done}/{mods.length}
                    </span>
                  </div>
                  <ProgressBar value={(done / mods.length) * 100} color={lv.color} />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <div className="section-title">
        <h2>{t('Lanjutkan Belajar', 'Continue Learning')}</h2>
      </div>
      {continueModule ? (
        <Link href={`/learn/${continueModule.slug}`} className="panel hero" style={{ gridTemplateColumns: undefined }}>
          <div className="mcard-continue" style={{ display: 'grid', gap: 16, alignItems: 'center' }}>
            <div>
              <div className="chip-row" style={{ marginBottom: 10 }}>
                <span className="mnum">#{String(continueModule.id).padStart(2, '0')}</span>
                <LevelBadge level={continueModule.level} />
              </div>
              <h2 style={{ fontSize: 24, marginBottom: 8 }}>{tr(continueModule.title)}</h2>
              <p style={{ marginBottom: 14 }}>{tr(continueModule.description)}</p>
              <span className="btn btn-primary">
                {t('Buka Modul', 'Open Module')} <ArrowRight size={16} />
              </span>
            </div>
          </div>
          <div style={{ maxWidth: 360, width: '100%', margin: '0 auto' }}>
            <Illustration name={continueModule.illustration} />
          </div>
        </Link>
      ) : (
        <div className="panel pad-lg" style={{ display: 'flex', gap: 14, alignItems: 'center', flexWrap: 'wrap' }}>
          <Trophy size={30} color="#39ff88" />
          <div style={{ flex: 1, minWidth: 200 }}>
            <strong>{t('Semua modul selesai. Kerja bagus!', 'All modules completed. Great work!')}</strong>
            <p className="muted small">{t('Uji pengetahuanmu di Cyber Quiz atau coba skenario keamanan.', 'Test yourself in Cyber Quiz or try a security scenario.')}</p>
          </div>
          <Link href="/quiz" className="btn btn-primary">
            Cyber Quiz
          </Link>
        </div>
      )}

      {recommended.length > 0 ? (
        <>
          <div className="section-title">
            <h2>{t('Modul yang Direkomendasikan', 'Recommended Modules')}</h2>
            <Link href="/learn" className="kicker" style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
              {t('Lihat semua', 'View all')} <ArrowRight size={13} />
            </Link>
          </div>
          <div className="cards">
            {recommended.map((m) => (
              <ModuleCard key={`rec-${m.id}`} module={m} />
            ))}
          </div>
        </>
      ) : null}

      <div className="section-title">
        <h2>{t('Aktivitas Terbaru', 'Recent Activity')}</h2>
        <Link href="/progress" className="kicker" style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
          {t('Progres saya', 'My progress')} <ArrowRight size={13} />
        </Link>
      </div>
      <div className="panel pad">
        <ActivityList
          items={progress.activity.slice(0, 6)}
          emptyText={t('Belum ada aktivitas. Buka sebuah modul untuk memulai.', 'No activity yet. Open a module to get started.')}
        />
      </div>
    </div>
  );
}
