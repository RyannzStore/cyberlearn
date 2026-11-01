'use client';

import Link from 'next/link';
import { CheckCircle2, Circle } from 'lucide-react';
import { useApp } from '@/components/AppProvider';
import PageHeader from '@/components/PageHeader';
import { ProgressBar } from '@/components/charts';
import { LEVELS, getModulesByLevel } from '@/data/modules';

const STAGE_TEXT = {
  1: {
    id: 'Bangun fondasi: cara kerja komputer, sistem operasi, Linux, jaringan, web, dan dasar kriptografi serta autentikasi.',
    en: 'Build the foundation: how computers, operating systems, Linux, networks, the web, and basic cryptography and authentication work.',
  },
  2: {
    id: 'Pelajari pertahanan dan risiko umum: keamanan jaringan, firewall, kata sandi, MFA, kerentanan web, kode aman, dan forensik dasar.',
    en: 'Learn defenses and common risks: network security, firewalls, passwords, MFA, web vulnerabilities, secure code, and basic forensics.',
  },
  3: {
    id: 'Masuk ke operasi keamanan: SOC, respons insiden, analisis log, cloud, API, manajemen kerentanan, privasi, dan karier.',
    en: 'Step into security operations: SOC, incident response, log analysis, cloud, APIs, vulnerability management, privacy, and careers.',
  },
};

export default function RoadmapPage() {
  const { t, tr, isCompleted, isStarted } = useApp();

  return (
    <div>
      <PageHeader
        kicker="Learning Roadmap"
        title={t('Peta Jalan Belajar', 'Learning Roadmap')}
        description={t('Tiga tahap dari pemula sampai lanjutan. Ikuti urutannya, atau lompat ke topik yang kamu butuhkan.', 'Three stages from beginner to advanced. Follow the order, or jump to the topic you need.')}
      />

      <div className="road">
        {LEVELS.map((lv) => {
          const mods = getModulesByLevel(lv.id);
          const done = mods.filter((m) => isCompleted(m.id)).length;
          return (
            <section key={lv.id} className="road-stage panel pad-lg" style={{ '--stage': lv.color }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 8 }}>
                <div>
                  <span className={`badge lvl-${lv.id}`}>
                    {t('Tahap', 'Stage')} {lv.id}
                  </span>
                  <h2 style={{ fontSize: 22, margin: '8px 0 6px' }}>{tr(lv.name)}</h2>
                </div>
                <span className="chip on">
                  {done}/{mods.length}
                </span>
              </div>
              <p className="muted" style={{ marginBottom: 12 }}>
                {tr(STAGE_TEXT[lv.id])}
              </p>
              <ProgressBar value={(done / mods.length) * 100} color={lv.color} />
              <div className="road-mods">
                {mods.map((m) => {
                  const isDone = isCompleted(m.id);
                  return (
                    <Link key={m.id} href={`/learn/${m.slug}`} className={`road-mod ${isDone ? 'done' : ''}`}>
                      {isDone ? <CheckCircle2 size={17} color="#39ff88" /> : <Circle size={17} color={isStarted(m.id) ? '#fbbf24' : '#5f7d6e'} />}
                      <span className="mnum">{String(m.id).padStart(2, '0')}</span>
                      <span style={{ flex: 1, minWidth: 0 }}>{tr(m.title)}</span>
                    </Link>
                  );
                })}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
