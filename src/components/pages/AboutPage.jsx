'use client';

import Link from 'next/link';
import { Database, Languages, Lock, ShieldCheck } from 'lucide-react';
import { useApp } from '@/components/AppProvider';
import PageHeader from '@/components/PageHeader';
import { Illustration } from '@/components/Illustrations';
import { TOTAL_MODULES } from '@/data/modules';

export default function AboutPage() {
  const { t } = useApp();

  const cards = [
    {
      icon: ShieldCheck,
      title: t('Defensif dan Etis', 'Defensive and Ethical'),
      text: t(
        'Semua materi dan lab berfokus pada pemahaman dan pertahanan. Tidak ada pemindaian, eksploitasi, atau serangan ke sistem nyata.',
        'All material and labs focus on understanding and defense. There is no scanning, exploitation, or attacking of real systems.'
      ),
    },
    {
      icon: Database,
      title: t('Data Tetap di Perangkatmu', 'Your Data Stays on Your Device'),
      text: t('Progres disimpan di LocalStorage browser. Tidak ada akun, server, atau pelacakan pada versi ini.', 'Progress is saved in browser LocalStorage. There are no accounts, servers, or tracking in this version.'),
    },
    {
      icon: Languages,
      title: t('Dua Bahasa', 'Two Languages'),
      text: t('Seluruh modul, quiz, kamus, dan skenario tersedia dalam Bahasa Indonesia dan English.', 'All modules, quizzes, dictionary entries, and scenarios are available in Bahasa Indonesia and English.'),
    },
    {
      icon: Lock,
      title: t('Cara Berlatih yang Benar', 'Practicing the Right Way'),
      text: t('Uji hanya sistem milikmu sendiri atau yang kamu punya izin tertulis untuk mengujinya. Tanpa izin, itu melanggar hukum.', 'Only test systems you own or have written permission to test. Without permission, it is illegal.'),
    },
  ];

  const features = [
    [t('Pusat Belajar', 'Learning Center'), t(`${TOTAL_MODULES} modul dalam 3 level`, `${TOTAL_MODULES} modules across 3 levels`)],
    ['Network Lab', t('Animasi aliran data, lab firewall, kalkulator subnet', 'Data-flow animation, firewall lab, subnet calculator')],
    ['Terminal Playground', t('Shell simulasi dengan filesystem virtual', 'Simulated shell with a virtual filesystem')],
    [t('Skenario Keamanan', 'Security Scenarios'), t('6 skenario keputusan dengan umpan balik', '6 decision scenarios with feedback')],
    ['Cyber Quiz', t('Soal acak dari seluruh modul', 'Random questions from every module')],
    [t('Kamus Cyber', 'Cyber Dictionary'), t('85 istilah dengan pencarian dan kategori', '85 terms with search and categories')],
  ];

  return (
    <div>
      <PageHeader
        kicker="About CyberLearn"
        title="CyberLearn — Learn. Explore. Secure."
        description={t(
          'Platform edukasi cybersecurity berbahasa Indonesia dan English untuk pemula sampai lanjutan, dibuat agar bisa dipelajari kapan saja tanpa instalasi.',
          'A cybersecurity learning platform in Bahasa Indonesia and English, for beginners to advanced learners, built to study anytime with no installation.'
        )}
      />

      <div className="panel hero" style={{ marginBottom: 14 }}>
        <div>
          <span className="kicker">{t('Misi', 'Mission')}</span>
          <h2 style={{ fontSize: 24, margin: '8px 0 10px' }}>{t('Keamanan yang bisa dipahami semua orang', 'Security everyone can understand')}</h2>
          <p style={{ marginBottom: 0 }}>
            {t(
              'Kami percaya dasar cybersecurity harus mudah diakses. Setiap konsep dijelaskan bertahap, dengan contoh aman dan latihan yang bisa langsung dicoba.',
              'We believe cybersecurity fundamentals should be accessible. Every concept is explained step by step, with safe examples and hands-on practice you can try right away.'
            )}
          </p>
        </div>
        <div style={{ maxWidth: 380, margin: '0 auto', width: '100%' }}>
          <Illustration name="shield" />
        </div>
      </div>

      <div className="grid grid-2">
        {cards.map((c) => {
          const Icon = c.icon;
          return (
            <div key={c.title} className="panel pad-lg" style={{ display: 'flex', gap: 14 }}>
              <span className="row-ico" style={{ flex: 'none' }}>
                <Icon size={18} />
              </span>
              <div>
                <h3 style={{ marginBottom: 6 }}>{c.title}</h3>
                <p className="muted">{c.text}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="section-title">
        <h2>{t('Fitur', 'Features')}</h2>
      </div>
      <div className="panel pad">
        {features.map(([name, desc]) => (
          <div key={name} className="row-item">
            <span className="row-main">
              <strong>{name}</strong>
              <span>{desc}</span>
            </span>
          </div>
        ))}
      </div>

      <div className="btn-row" style={{ marginTop: 18 }}>
        <Link href="/learn" className="btn btn-primary">
          {t('Mulai Belajar', 'Start Learning')}
        </Link>
        <Link href="/roadmap" className="btn">
          {t('Lihat Roadmap', 'View Roadmap')}
        </Link>
      </div>
    </div>
  );
}
