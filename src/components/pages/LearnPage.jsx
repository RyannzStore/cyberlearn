'use client';

import { useMemo, useState } from 'react';
import { Search, SearchX } from 'lucide-react';
import { useApp } from '@/components/AppProvider';
import PageHeader from '@/components/PageHeader';
import ModuleCard from '@/components/ModuleCard';
import { LEVELS, TOTAL_MODULES, modules } from '@/data/modules';

export default function LearnPage() {
  const { t, tr, isCompleted, isStarted, completedIds } = useApp();
  const [query, setQuery] = useState('');
  const [level, setLevel] = useState(0); // 0 = semua
  const [status, setStatus] = useState('all');

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return modules.filter((m) => {
      if (level !== 0 && m.level !== level) return false;
      if (status === 'done' && !isCompleted(m.id)) return false;
      if (status === 'progress' && !isStarted(m.id)) return false;
      if (status === 'new' && (isCompleted(m.id) || isStarted(m.id))) return false;
      if (!q) return true;
      const hay = [m.title.id, m.title.en, m.description.id, m.description.en, m.slug, String(m.id)].join(' ').toLowerCase();
      return hay.includes(q);
    });
  }, [query, level, status, isCompleted, isStarted]);

  const reset = () => {
    setQuery('');
    setLevel(0);
    setStatus('all');
  };

  const statusChips = [
    { key: 'all', id: 'Semua status', en: 'All statuses' },
    { key: 'new', id: 'Belum mulai', en: 'Not started' },
    { key: 'progress', id: 'Dipelajari', en: 'In progress' },
    { key: 'done', id: 'Selesai', en: 'Completed' },
  ];

  return (
    <div>
      <PageHeader
        kicker={t('Pusat Belajar', 'Learning Center')}
        title={t('36 Modul Cybersecurity', '36 Cybersecurity Modules')}
        description={t(
          'Dari dasar komputer dan jaringan sampai operasi keamanan tingkat lanjut. Setiap modul punya materi, contoh aman, rangkuman, dan mini quiz.',
          'From computer and networking basics to advanced security operations. Every module includes material, a safe example, a summary, and a mini quiz.'
        )}
      >
        <span className="chip on" style={{ marginTop: 12 }}>
          {completedIds.length}/{TOTAL_MODULES} {t('selesai', 'completed')}
        </span>
      </PageHeader>

      <div className="panel pad" style={{ marginBottom: 18 }}>
        <div className="searchbox">
          <Search size={17} />
          <input
            className="input"
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={t('Cari modul, mis. "firewall", "DNS", "enkripsi"…', 'Search modules, e.g. "firewall", "DNS", "encryption"…')}
            aria-label={t('Cari modul', 'Search modules')}
          />
        </div>
        <div className="chip-row" style={{ marginTop: 12 }} role="group" aria-label={t('Filter level', 'Level filter')}>
          <button className={`chip ${level === 0 ? 'on' : ''}`} onClick={() => setLevel(0)} aria-pressed={level === 0}>
            {t('Semua level', 'All levels')}
          </button>
          {LEVELS.map((lv) => (
            <button key={lv.id} className={`chip ${level === lv.id ? 'on' : ''}`} onClick={() => setLevel(lv.id)} aria-pressed={level === lv.id}>
              L{lv.id} · {tr(lv.name)}
            </button>
          ))}
        </div>
        <div className="chip-row" style={{ marginTop: 10 }} role="group" aria-label={t('Filter status', 'Status filter')}>
          {statusChips.map((s) => (
            <button key={s.key} className={`chip ${status === s.key ? 'on' : ''}`} onClick={() => setStatus(s.key)} aria-pressed={status === s.key}>
              {t(s.id, s.en)}
            </button>
          ))}
        </div>
      </div>

      <p className="muted small" style={{ marginBottom: 12 }} aria-live="polite">
        {t(`Menampilkan ${filtered.length} dari ${TOTAL_MODULES} modul`, `Showing ${filtered.length} of ${TOTAL_MODULES} modules`)}
      </p>

      {filtered.length === 0 ? (
        <div className="panel empty">
          <SearchX size={32} style={{ margin: '0 auto 10px', color: 'var(--muted-2)' }} />
          <p>{t('Tidak ada modul yang cocok dengan filter.', 'No modules match your filters.')}</p>
          <button className="btn btn-sm" style={{ marginTop: 14 }} onClick={reset}>
            {t('Reset filter', 'Reset filters')}
          </button>
        </div>
      ) : (
        <div className="cards">
          {filtered.map((m) => (
            <ModuleCard key={m.id} module={m} />
          ))}
        </div>
      )}
    </div>
  );
}
