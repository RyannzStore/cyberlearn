'use client';

import { useState } from 'react';
import { ArrowLeft, CheckCircle2, RotateCcw, Trophy } from 'lucide-react';
import { useApp } from '@/components/AppProvider';
import PageHeader from '@/components/PageHeader';
import { Illustration } from '@/components/Illustrations';
import { scenarios } from '@/data/scenarios';

function Difficulty({ level }) {
  const { t } = useApp();
  const names = [t('Mudah', 'Easy'), t('Sedang', 'Medium'), t('Sulit', 'Hard')];
  return <span className={`badge lvl-${level}`}>{names[level - 1]}</span>;
}

function Player({ scenario, onExit }) {
  const { t, tr, recordScenario, progress } = useApp();
  const [step, setStep] = useState(0);
  const [picked, setPicked] = useState(null);
  const [total, setTotal] = useState(0);
  const [finished, setFinished] = useState(false);

  const max = scenario.steps.length * 2;
  const cur = scenario.steps[step];
  const best = progress.scenarios[scenario.id]?.best;

  const choose = (idx) => {
    if (picked !== null) return;
    setPicked(idx);
    setTotal((s) => s + cur.choices[idx].score);
  };

  const advance = () => {
    if (step + 1 >= scenario.steps.length) {
      setFinished(true);
      recordScenario(scenario.id, total, max);
    } else {
      setStep((s) => s + 1);
      setPicked(null);
    }
  };

  const restart = () => {
    setStep(0);
    setPicked(null);
    setTotal(0);
    setFinished(false);
  };

  if (finished) {
    const ratio = total / max;
    return (
      <div className="panel pad-lg fade-in">
        <div className="score-box">
          <Trophy size={34} color="#39ff88" />
          <span className="score-big">
            {total}/{max}
          </span>
          <div>
            <strong>{ratio >= 0.85 ? t('Respons yang sangat baik!', 'Excellent response!') : ratio >= 0.5 ? t('Cukup baik, masih bisa lebih tajam.', 'Decent, but you can sharpen it.') : t('Perlu latihan lagi.', 'Needs more practice.')}</strong>
            <p className="muted small">
              {t('Skor terbaikmu', 'Your best score')}: {Math.max(best || 0, total)}/{max}
            </p>
          </div>
        </div>
        <div className="btn-row" style={{ marginTop: 16 }}>
          <button className="btn btn-primary" type="button" onClick={restart}>
            <RotateCcw size={16} /> {t('Main Lagi', 'Play Again')}
          </button>
          <button className="btn" type="button" onClick={onExit}>
            {t('Pilih Skenario Lain', 'Choose Another Scenario')}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="fade-in">
      <button className="crumb" type="button" onClick={onExit} style={{ background: 'none', border: 0, padding: 0 }}>
        <ArrowLeft size={14} /> {t('Semua skenario', 'All scenarios')}
      </button>
      <div className="panel pad-lg">
        <div className="chip-row" style={{ marginBottom: 10 }}>
          <Difficulty level={scenario.difficulty} />
          <span className="chip">
            {t('Langkah', 'Step')} {step + 1}/{scenario.steps.length}
          </span>
          <span className="chip on">
            {t('Poin', 'Points')}: {total}
          </span>
        </div>
        <h2 style={{ fontSize: 22, marginBottom: 8 }}>{tr(scenario.title)}</h2>
        {step === 0 ? <p className="muted" style={{ marginBottom: 14 }}>{tr(scenario.intro)}</p> : null}
        <p className="q-text">{tr(cur.prompt)}</p>

        <div role="group" aria-label={t('Pilihan tindakan', 'Action choices')}>
          {cur.choices.map((c, i) => {
            let cls = 'choice';
            if (picked !== null) {
              if (c.score === 2) cls += ' best';
              else if (i === picked) cls += c.score === 1 ? ' ok' : ' bad';
            }
            return (
              <button key={`${scenario.id}-${step}-${i}`} type="button" className={cls} disabled={picked !== null} onClick={() => choose(i)}>
                {tr(c.text)}
              </button>
            );
          })}
        </div>

        {picked !== null ? (
          <div className="explain" role="status">
            <strong style={{ display: 'block', marginBottom: 4 }}>
              {cur.choices[picked].score === 2 ? t('Pilihan terbaik (+2)', 'Best choice (+2)') : cur.choices[picked].score === 1 ? t('Cukup (+1)', 'Acceptable (+1)') : t('Kurang tepat (+0)', 'Poor choice (+0)')}
            </strong>
            {tr(cur.choices[picked].feedback)}
          </div>
        ) : null}

        {picked !== null ? (
          <div className="btn-row" style={{ marginTop: 14 }}>
            <button className="btn btn-primary" type="button" onClick={advance}>
              {step + 1 >= scenario.steps.length ? t('Lihat Hasil', 'See Result') : t('Lanjut', 'Continue')}
            </button>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default function ScenariosPage() {
  const { t, tr, progress } = useApp();
  const [activeId, setActiveId] = useState(null);
  const active = scenarios.find((s) => s.id === activeId) || null;

  return (
    <div>
      <PageHeader
        kicker="Security Scenarios"
        title={t('Skenario Keamanan', 'Security Scenarios')}
        description={t(
          'Latih pengambilan keputusan dalam situasi nyata sehari-hari. Tiap pilihan mendapat umpan balik tentang alasannya. Semua fiktif dan defensif.',
          'Practice decision-making in realistic everyday situations. Every choice gets feedback explaining why. Everything is fictional and defensive.'
        )}
      />
      {active ? (
        <Player key={active.id} scenario={active} onExit={() => setActiveId(null)} />
      ) : (
        <div className="cards">
          {scenarios.map((s) => {
            const rec = progress.scenarios[s.id];
            return (
              <button key={s.id} type="button" className="panel mcard" style={{ textAlign: 'left', padding: 0, color: 'inherit' }} onClick={() => setActiveId(s.id)}>
                <div className="mcard-illu">
                  <Illustration name={s.illustration} />
                </div>
                <div className="mcard-body">
                  <div className="mcard-meta">
                    <Difficulty level={s.difficulty} />
                    {rec ? (
                      <span className="badge st-done">
                        <CheckCircle2 size={12} /> {rec.best}/{rec.max}
                      </span>
                    ) : null}
                  </div>
                  <h3>{tr(s.title)}</h3>
                  <p>{tr(s.intro)}</p>
                  <span className="kicker" style={{ marginTop: 'auto' }}>
                    {rec ? t('Main lagi', 'Play again') : t('Mulai skenario', 'Start scenario')}
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
