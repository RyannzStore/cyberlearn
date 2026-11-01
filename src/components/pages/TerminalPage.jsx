'use client';

import { useEffect, useRef, useState } from 'react';
import { CheckCircle2, Circle, RotateCcw, ShieldCheck } from 'lucide-react';
import { useApp } from '@/components/AppProvider';
import PageHeader from '@/components/PageHeader';
import { TERMINAL_TASKS, createShell, promptPath, runLine } from '@/lib/terminal';

const MAX_LINES = 400;

export default function TerminalPage() {
  const { t, tr, lang, progress, recordTerminalTask } = useApp();
  const shellRef = useRef(null);
  const outRef = useRef(null);
  const inputRef = useRef(null);
  const histIdx = useRef(-1);
  const [lines, setLines] = useState([]);
  const [value, setValue] = useState('');
  const [prompt, setPrompt] = useState('~');
  const [busy, setBusy] = useState(false);

  const welcome = () => [
    { type: 'sys', text: t('CyberLearn Terminal Playground — simulasi lokal di browser.', 'CyberLearn Terminal Playground — local simulation in your browser.') },
    { type: 'sys', text: t('Tidak ada perintah yang menyentuh sistem atau jaringan nyata. Ketik "help" untuk memulai.', 'No command touches a real system or network. Type "help" to begin.') },
  ];

  // Shell dibuat sekali di sisi client (tidak ikut render server).
  useEffect(() => {
    shellRef.current = createShell();
    setLines(welcome());
    setPrompt(promptPath(shellRef.current));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const el = outRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [lines]);

  const execute = async (raw) => {
    const shell = shellRef.current;
    if (!shell || busy) return;
    const cmdLine = { type: 'cmd', text: `student@cyberlearn:${prompt}$ ${raw}` };
    setBusy(true);
    try {
      const res = await runLine(shell, raw, lang);
      setLines((prev) => {
        const base = res.clear ? [] : [...prev, cmdLine];
        return [...base, ...res.lines].slice(-MAX_LINES);
      });
      setPrompt(promptPath(shell));
      TERMINAL_TASKS.forEach((task) => {
        if (shell.flags.has(task.id) && !progress.terminal[task.id]) recordTerminalTask(task.id);
      });
    } finally {
      setBusy(false);
      histIdx.current = -1;
      if (inputRef.current) inputRef.current.focus();
    }
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const raw = value;
    setValue('');
    if (!raw.trim()) {
      setLines((prev) => [...prev, { type: 'cmd', text: `student@cyberlearn:${prompt}$` }].slice(-MAX_LINES));
      return;
    }
    execute(raw);
  };

  const onKeyDown = (e) => {
    const shell = shellRef.current;
    if (!shell) return;
    const hist = shell.history;
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (hist.length === 0) return;
      const next = histIdx.current === -1 ? hist.length - 1 : Math.max(0, histIdx.current - 1);
      histIdx.current = next;
      setValue(hist[next]);
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (histIdx.current === -1) return;
      const next = histIdx.current + 1;
      if (next >= hist.length) {
        histIdx.current = -1;
        setValue('');
      } else {
        histIdx.current = next;
        setValue(hist[next]);
      }
    } else if (e.key === 'l' && e.ctrlKey) {
      e.preventDefault();
      setLines([]);
    }
  };

  const resetSession = () => {
    shellRef.current = createShell();
    setLines(welcome());
    setPrompt(promptPath(shellRef.current));
    setValue('');
    histIdx.current = -1;
    if (inputRef.current) inputRef.current.focus();
  };

  const doneCount = TERMINAL_TASKS.filter((x) => progress.terminal[x.id]).length;

  return (
    <div>
      <PageHeader
        kicker="Terminal Playground"
        title={t('Latihan Command Line yang Aman', 'Safe Command-Line Practice')}
        description={t(
          'Filesystem virtual di memori browser. Coba perintah dasar Linux, baca log, atur izin file, dan hitung hash. Tidak ada akses ke sistem atau jaringan nyata.',
          'A virtual filesystem in browser memory. Try basic Linux commands, read logs, set file permissions, and compute hashes. There is no access to real systems or networks.'
        )}
      />

      <div className="term-layout">
        <div className="term" onClick={() => inputRef.current && inputRef.current.focus()}>
          <div className="term-bar">
            <i style={{ background: '#f472b6' }} />
            <i style={{ background: '#fbbf24' }} />
            <i style={{ background: '#39ff88' }} />
            <span style={{ marginLeft: 8 }}>student@cyberlearn — simulated</span>
            <span className="spacer" />
            <button className="btn btn-sm" onClick={resetSession} type="button" aria-label={t('Reset sesi terminal', 'Reset terminal session')}>
              <RotateCcw size={13} /> Reset
            </button>
          </div>
          <div className="term-out" ref={outRef} aria-live="polite">
            {lines.map((l, i) => (
              <div key={`tl-${i}`} className={`term-line ${l.type}`}>
                {l.text}
              </div>
            ))}
          </div>
          <form className="term-input-row" onSubmit={onSubmit}>
            <span className="term-prompt">student@cyberlearn:{prompt}$</span>
            <input
              ref={inputRef}
              className="term-input"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              onKeyDown={onKeyDown}
              spellCheck={false}
              autoCapitalize="off"
              autoCorrect="off"
              autoComplete="off"
              aria-label={t('Masukkan perintah', 'Enter a command')}
              placeholder={t('ketik perintah…', 'type a command…')}
            />
          </form>
        </div>

        <div className="grid">
          <div className="panel pad-lg">
            <div className="section-title" style={{ margin: '0 0 10px' }}>
              <h2>{t('Tantangan', 'Challenges')}</h2>
              <span className="chip on">
                {doneCount}/{TERMINAL_TASKS.length}
              </span>
            </div>
            <div>
              {TERMINAL_TASKS.map((task) => {
                const done = Boolean(progress.terminal[task.id]);
                return (
                  <div key={task.id} className={`task ${done ? 'done' : ''}`}>
                    {done ? <CheckCircle2 size={18} /> : <Circle size={18} color="#5f7d6e" />}
                    <div>
                      <div className="task-text">{tr(task.title)}</div>
                      <code>{task.cmd}</code>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="btn-row" style={{ marginTop: 12 }}>
              {['help', 'ls -l', 'cat notes.txt'].map((c) => (
                <button key={c} className="chip" type="button" onClick={() => execute(c)}>
                  {c}
                </button>
              ))}
            </div>
          </div>

          <div className="panel pad" style={{ display: 'flex', gap: 12 }}>
            <ShieldCheck size={22} color="#39ff88" style={{ flex: 'none', marginTop: 2 }} />
            <p className="muted small">
              {t(
                'Alat seperti nmap, curl, atau ssh sengaja diblokir. Latihan hanya untuk konsep defensif. Hanya uji sistem milikmu sendiri atau yang kamu punya izin tertulis untuk mengujinya.',
                'Tools such as nmap, curl, or ssh are deliberately blocked. Practice here is for defensive concepts only. Only test systems you own or have written permission to test.'
              )}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
