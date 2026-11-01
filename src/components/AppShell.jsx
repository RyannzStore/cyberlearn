'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Activity,
  BarChart3,
  BookOpen,
  Flame,
  HelpCircle,
  Info,
  LayoutDashboard,
  Map,
  Menu,
  Network,
  Target,
  Terminal,
  Book,
  X,
} from 'lucide-react';
import { useApp } from '@/components/AppProvider';
import { LogoMark } from '@/components/Illustrations';

const NAV = [
  { href: '/', icon: LayoutDashboard, id: 'Dashboard', en: 'Dashboard', group: 'main' },
  { href: '/learn', icon: BookOpen, id: 'Pusat Belajar', en: 'Learning Center', group: 'main' },
  { href: '/roadmap', icon: Map, id: 'Roadmap Belajar', en: 'Learning Roadmap', group: 'main' },
  { href: '/network-lab', icon: Network, id: 'Network Lab', en: 'Network Lab', group: 'practice' },
  { href: '/terminal', icon: Terminal, id: 'Terminal Playground', en: 'Terminal Playground', group: 'practice' },
  { href: '/scenarios', icon: Target, id: 'Skenario Keamanan', en: 'Security Scenarios', group: 'practice' },
  { href: '/quiz', icon: HelpCircle, id: 'Cyber Quiz', en: 'Cyber Quiz', group: 'practice' },
  { href: '/dictionary', icon: Book, id: 'Kamus Cyber', en: 'Cyber Dictionary', group: 'more' },
  { href: '/progress', icon: BarChart3, id: 'Progres Saya', en: 'My Progress', group: 'more' },
  { href: '/about', icon: Info, id: 'Tentang CyberLearn', en: 'About CyberLearn', group: 'more' },
];

const GROUPS = [
  { key: 'main', id: 'Belajar', en: 'Learn' },
  { key: 'practice', id: 'Praktik', en: 'Practice' },
  { key: 'more', id: 'Lainnya', en: 'More' },
];

const BOTTOM = [
  { href: '/', icon: LayoutDashboard, id: 'Home', en: 'Home' },
  { href: '/learn', icon: BookOpen, id: 'Belajar', en: 'Learn' },
  { href: '/terminal', icon: Terminal, id: 'Terminal', en: 'Terminal' },
  { href: '/quiz', icon: HelpCircle, id: 'Quiz', en: 'Quiz' },
];

function isActive(pathname, href) {
  if (href === '/') return pathname === '/';
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function AppShell({ children }) {
  const pathname = usePathname() || '/';
  const { lang, setLang, t, streak, ready } = useApp();
  const [open, setOpen] = useState(false);

  // Tutup drawer saat pindah halaman.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Kunci scroll body saat drawer terbuka & tutup dengan Escape.
  useEffect(() => {
    if (!open) return undefined;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener('keydown', onKey);
    };
  }, [open]);

  return (
    <>
      {open ? <div className="sidebar-overlay" onClick={() => setOpen(false)} aria-hidden="true" /> : null}

      <aside className={`sidebar ${open ? 'open' : ''}`} aria-label={t('Navigasi utama', 'Main navigation')}>
        <div className="brand">
          <LogoMark size={36} />
          <div>
            <div className="brand-name">
              Cyber<b>Learn</b>
            </div>
            <div className="brand-tag">Learn. Explore. Secure.</div>
          </div>
          <span className="spacer" />
          <button className="icon-btn menu-btn" onClick={() => setOpen(false)} aria-label={t('Tutup menu', 'Close menu')}>
            <X size={18} />
          </button>
        </div>

        <nav className="nav">
          {GROUPS.map((g) => (
            <div key={g.key} style={{ display: 'contents' }}>
              <div className="nav-label">{t(g.id, g.en)}</div>
              {NAV.filter((n) => n.group === g.key).map((n) => {
                const Icon = n.icon;
                const active = isActive(pathname, n.href);
                return (
                  <Link key={n.href} href={n.href} className={active ? 'active' : ''} aria-current={active ? 'page' : undefined}>
                    <Icon size={18} />
                    {t(n.id, n.en)}
                  </Link>
                );
              })}
            </div>
          ))}
        </nav>

        <div className="sidebar-foot">
          <small>{t('Simulasi lokal. Tidak ada serangan ke sistem nyata.', 'Local simulations only. No real systems are ever attacked.')}</small>
          <span className="chip on">
            <Flame size={14} />
            {ready ? streak : 0} {t('hari beruntun', 'day streak')}
          </span>
        </div>
      </aside>

      <div className="main">
        <header className="topbar">
          <button className="icon-btn menu-btn" onClick={() => setOpen(true)} aria-label={t('Buka menu', 'Open menu')} aria-expanded={open}>
            <Menu size={20} />
          </button>
          <span className="topbar-tag">CyberLearn // Learn. Explore. Secure.</span>
          <span className="spacer" />
          <span className="chip" title={t('Streak belajar harian', 'Daily learning streak')}>
            <Flame size={14} color="#fbbf24" />
            {ready ? streak : 0}
          </span>
          <div className="lang-toggle" role="group" aria-label={t('Pilih bahasa', 'Choose language')}>
            <button className={lang === 'id' ? 'on' : ''} onClick={() => setLang('id')} aria-pressed={lang === 'id'}>
              ID
            </button>
            <button className={lang === 'en' ? 'on' : ''} onClick={() => setLang('en')} aria-pressed={lang === 'en'}>
              EN
            </button>
          </div>
        </header>

        <main className="content">{children}</main>
      </div>

      <nav className="bottom-nav" aria-label={t('Navigasi bawah', 'Bottom navigation')}>
        {BOTTOM.map((n) => {
          const Icon = n.icon;
          const active = isActive(pathname, n.href);
          return (
            <Link key={n.href} href={n.href} className={active ? 'active' : ''} aria-current={active ? 'page' : undefined}>
              <Icon size={20} />
              {t(n.id, n.en)}
            </Link>
          );
        })}
        <button onClick={() => setOpen(true)} aria-label={t('Menu lainnya', 'More menu')}>
          <Activity size={20} />
          {t('Menu', 'Menu')}
        </button>
      </nav>
    </>
  );
}
