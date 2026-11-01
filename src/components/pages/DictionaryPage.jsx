'use client';

import { useMemo, useState } from 'react';
import { Search, SearchX } from 'lucide-react';
import { useApp } from '@/components/AppProvider';
import PageHeader from '@/components/PageHeader';
import { DICT_CATEGORIES, dictionary } from '@/data/dictionary';

export default function DictionaryPage() {
  const { t, tr, lang } = useApp();
  const [query, setQuery] = useState('');
  const [cat, setCat] = useState('all');

  const sorted = useMemo(() => dictionary.slice().sort((a, b) => a.term.localeCompare(b.term, 'en', { sensitivity: 'base' })), []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return sorted.filter((d) => {
      if (cat !== 'all' && d.cat !== cat) return false;
      if (!q) return true;
      return d.term.toLowerCase().includes(q) || d.id.toLowerCase().includes(q) || d.en.toLowerCase().includes(q);
    });
  }, [sorted, query, cat]);

  const catName = (id) => {
    const c = DICT_CATEGORIES.find((x) => x.id === id);
    return c ? tr(c.name) : id;
  };

  return (
    <div>
      <PageHeader
        kicker="Cyber Dictionary"
        title={t('Kamus Cyber', 'Cyber Dictionary')}
        description={t(`${dictionary.length} istilah penting cybersecurity dengan penjelasan singkat.`, `${dictionary.length} essential cybersecurity terms with short explanations.`)}
      />

      <div className="panel pad" style={{ marginBottom: 16 }}>
        <div className="searchbox">
          <Search size={17} />
          <input className="input" type="search" value={query} onChange={(e) => setQuery(e.target.value)} placeholder={t('Cari istilah…', 'Search terms…')} aria-label={t('Cari istilah', 'Search terms')} />
        </div>
        <div className="chip-row" style={{ marginTop: 12 }} role="group" aria-label={t('Filter kategori', 'Category filter')}>
          <button type="button" className={`chip ${cat === 'all' ? 'on' : ''}`} aria-pressed={cat === 'all'} onClick={() => setCat('all')}>
            {t('Semua', 'All')}
          </button>
          {DICT_CATEGORIES.map((c) => (
            <button key={c.id} type="button" className={`chip ${cat === c.id ? 'on' : ''}`} aria-pressed={cat === c.id} onClick={() => setCat(c.id)}>
              {tr(c.name)}
            </button>
          ))}
        </div>
      </div>

      <p className="muted small" style={{ marginBottom: 12 }} aria-live="polite">
        {t(`${filtered.length} istilah ditemukan`, `${filtered.length} terms found`)}
      </p>

      {filtered.length === 0 ? (
        <div className="panel empty">
          <SearchX size={30} style={{ margin: '0 auto 10px', color: 'var(--muted-2)' }} />
          <p>{t('Istilah tidak ditemukan.', 'No terms found.')}</p>
        </div>
      ) : (
        <div className="grid grid-2">
          {filtered.map((d) => (
            <article key={d.term} className="panel dict-item">
              <div className="dict-term-row">
                <h3>{d.term}</h3>
                <span className="chip">{catName(d.cat)}</span>
              </div>
              <p>{d[lang] || d.id}</p>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
