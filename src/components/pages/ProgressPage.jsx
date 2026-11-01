'use client';

import { useRef, useState } from 'react';
import Link from 'next/link';
import { Download, Flame, Trash2, Upload } from 'lucide-react';
import { useApp } from '@/components/AppProvider';
import PageHeader from '@/components/PageHeader';
import ActivityList from '@/components/ActivityList';
import { ActivityChart, ProgressBar, ProgressRing } from '@/components/charts';
import { LEVELS, TOTAL_MODULES, getModulesByLevel, modules } from '@/data/modules';
import { TERMINAL_TASKS } from '@/lib/terminal';
import { scenarios } from '@/data/scenarios';
import { completedPerDay } from '@/lib/progress';

export default function ProgressPage() {
  const { t, tr, ready, progress, completedIds, streak, bestStreak, isCompleted, resetProgress, importProgress } = useApp();
  const fileRef = useRef(null);
  const [msg, setMsg] = useState('');
  const [confirmReset, setConfirmReset] = useState(false);

  const pct = Math.round((completedIds.length / TOTAL_MODULES) * 100);
  const chart = ready
    ? completedPerDay(progress.completed, 30).map((d) => ({ key: d.key, count: d.count, label: String(d.date.getDate()) }))
    : [];

  const quizEntries = Object.entries(progress.quiz);
  const quizTotal = quizEntries.reduce((s, [, v]) => s + v.best, 0);
  const quizMax = quizEntries.reduce((s, [, v]) => s + v.total, 0);

  const exportData = () => {
    const blob = new Blob([JSON.stringify(progress, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'cyberlearn-progress.json';
    a.click();
    URL.revokeObjectURL(url);
    setMsg(t('Progres diekspor.', 'Progress exported.'));
  };

  const onImport = async (e) => {
    const f = e.target.files && e.target.files[0];
    e.target.value = '';
    if (!f) return;
    try {
      if (f.size > 1024 * 1024) throw new Error('too big');
      const data = JSON.parse(await f.text());
      importProgress(data);
      setMsg(t('Progres berhasil diimpor.', 'Progress imported successfully.'));
    } catch {
      setMsg(t('File tidak valid. Gunakan file hasil ekspor CyberLearn.', 'Invalid file. Use a file exported from CyberLearn.'));
    }
  };

  const doReset = () => {
    resetProgress();
    setConfirmReset(false);
    setMsg(t('Semua progres dihapus.', 'All progress cleared.'));
  };

  return (
    <div>
      <PageHeader
        kicker="My Progress"
        title={t('Progres Saya', 'My Progress')}
        description={t('Semua data tersimpan di browser perangkat ini (LocalStorage). Ekspor untuk cadangan atau pindah perangkat.', 'All data is stored in this device\'s browser (LocalStorage). Export it to back up or move devices.')}
      />

      <section className="grid grid-4">
        <div className="panel pad-lg" style={{ display: 'grid', placeItems: 'center' }}>
          <ProgressRing value={pct} size={124} sub={t('selesai', 'done')} />
        </div>
        <div className="panel stat">
          <div className="stat-top">
            <span>{t('Modul Selesai', 'Modules Done')}</span>
          </div>
          <div className="stat-val">
            {completedIds.length}
            <small> / {TOTAL_MODULES}</small>
          </div>
        </div>
        <div className="panel stat">
          <div className="stat-top">
            <span>{t('Streak Saat Ini', 'Current Streak')}</span>
            <Flame size={17} />
          </div>
          <div className="stat-val">
            {streak}
            <small> {t('hari', 'days')}</small>
          </div>
          <span className="muted small">
            {t('Terbaik', 'Best')}: {bestStreak}
          </span>
        </div>
        <div className="panel stat">
          <div className="stat-top">
            <span>{t('Skor Mini Quiz', 'Mini-Quiz Score')}</span>
          </div>
          <div className="stat-val">
            {quizTotal}
            <small> / {quizMax}</small>
          </div>
          <span className="muted small">{t(`${quizEntries.length} modul dikerjakan`, `${quizEntries.length} modules attempted`)}</span>
        </div>
      </section>

      <div className="section-title">
        <h2>{t('Aktivitas 30 Hari', '30-Day Activity')}</h2>
      </div>
      <div className="panel pad-lg">
        {ready ? (
          <ActivityChart data={chart} emptyText={t('Belum ada modul yang diselesaikan.', 'No modules completed yet.')} />
        ) : (
          <div style={{ height: 170 }} />
        )}
      </div>

      <div className="section-title">
        <h2>{t('Per Level', 'By Level')}</h2>
      </div>
      <div className="grid grid-3">
        {LEVELS.map((lv) => {
          const mods = getModulesByLevel(lv.id);
          const done = mods.filter((m) => isCompleted(m.id)).length;
          return (
            <div key={lv.id} className="panel pad-lg">
              <span className={`badge lvl-${lv.id}`}>L{lv.id}</span>
              <h3 style={{ margin: '8px 0 10px' }}>{tr(lv.name)}</h3>
              <ProgressBar value={(done / mods.length) * 100} color={lv.color} />
              <p className="muted small" style={{ marginTop: 8 }}>
                {done}/{mods.length} {t('modul', 'modules')}
              </p>
            </div>
          );
        })}
      </div>

      <div className="section-title">
        <h2>{t('Daftar Modul', 'Module Checklist')}</h2>
      </div>
      <div className="panel pad">
        {modules.map((m) => {
          const q = progress.quiz[m.id];
          const done = isCompleted(m.id);
          return (
            <Link key={m.id} href={`/learn/${m.slug}`} className="mod-row">
              <span className="mnum">{String(m.id).padStart(2, '0')}</span>
              <span className="row-main">
                <strong>{tr(m.title)}</strong>
                <span>{q ? `Quiz ${q.best}/${q.total}` : t('Quiz belum dikerjakan', 'Quiz not taken')}</span>
              </span>
              <span className={`badge ${done ? 'st-done' : progress.started[m.id] ? 'st-progress' : 'st-new'}`}>
                {done ? t('Selesai', 'Done') : progress.started[m.id] ? t('Dipelajari', 'In progress') : t('Baru', 'New')}
              </span>
            </Link>
          );
        })}
      </div>

      <div className="section-title">
        <h2>{t('Praktik & Skenario', 'Practice & Scenarios')}</h2>
      </div>
      <div className="grid grid-3">
        <div className="panel stat">
          <div className="stat-top">
            <span>{t('Tantangan Terminal', 'Terminal Challenges')}</span>
          </div>
          <div className="stat-val">
            {Object.keys(progress.terminal).length}
            <small> / {TERMINAL_TASKS.length}</small>
          </div>
        </div>
        <div className="panel stat">
          <div className="stat-top">
            <span>{t('Skenario Dimainkan', 'Scenarios Played')}</span>
          </div>
          <div className="stat-val">
            {Object.keys(progress.scenarios).length}
            <small> / {scenarios.length}</small>
          </div>
        </div>
        <div className="panel stat">
          <div className="stat-top">
            <span>Cyber Quiz</span>
          </div>
          <div className="stat-val">
            {progress.cyber.attempts > 0 ? `${progress.cyber.best}/${progress.cyber.bestTotal}` : '—'}
          </div>
          <span className="muted small">
            {progress.cyber.attempts} {t('percobaan', 'attempts')}
          </span>
        </div>
      </div>

      <div className="section-title">
        <h2>{t('Aktivitas Terbaru', 'Recent Activity')}</h2>
      </div>
      <div className="panel pad">
        <ActivityList items={progress.activity.slice(0, 15)} emptyText={t('Belum ada aktivitas.', 'No activity yet.')} />
      </div>

      <div className="section-title">
        <h2>{t('Data', 'Data')}</h2>
      </div>
      <div className="panel pad-lg">
        <div className="btn-row">
          <button className="btn" type="button" onClick={exportData}>
            <Download size={16} /> {t('Ekspor', 'Export')}
          </button>
          <button className="btn" type="button" onClick={() => fileRef.current && fileRef.current.click()}>
            <Upload size={16} /> {t('Impor', 'Import')}
          </button>
          <input ref={fileRef} type="file" accept="application/json,.json" onChange={onImport} hidden />
          {confirmReset ? (
            <>
              <button className="btn btn-danger" type="button" onClick={doReset}>
                <Trash2 size={16} /> {t('Ya, hapus semua', 'Yes, delete everything')}
              </button>
              <button className="btn" type="button" onClick={() => setConfirmReset(false)}>
                {t('Batal', 'Cancel')}
              </button>
            </>
          ) : (
            <button className="btn btn-danger" type="button" onClick={() => setConfirmReset(true)}>
              <Trash2 size={16} /> {t('Reset Progres', 'Reset Progress')}
            </button>
          )}
        </div>
        {msg ? (
          <p className="small" role="status" style={{ marginTop: 12, color: 'var(--neon)' }}>
            {msg}
          </p>
        ) : null}
      </div>
    </div>
  );
}
