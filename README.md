# CyberLearn 2.0 — Learn. Explore. Secure.

Platform edukasi cybersecurity bilingual (ID/EN): 36 modul, Network Lab, Terminal Playground,
Security Scenarios, Cyber Quiz, Cyber Dictionary, My Progress, Learning Roadmap.

## Jalankan

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # build produksi
```

Deploy ke Vercel: import repo, framework Next.js terdeteksi otomatis. Tidak perlu env var atau backend.

## Struktur

- `src/data/modules/level{1,2,3}.js` — 36 modul (konten ID + EN), terpisah dari UI
- `src/data/dictionary.js`, `src/data/scenarios.js` — kamus & skenario
- `src/lib/progress.js` — logika progres/streak murni; `src/lib/terminal.js` — mesin shell simulasi
- `src/components/AppProvider.jsx` — bahasa + progres (LocalStorage, kunci `cyberlearn:v2:*`)
- `src/app/**` — route App Router; halaman modul `/learn/[slug]` di-generate statis (36 halaman)

Semua lab adalah simulasi lokal di browser; tidak ada pemindaian atau serangan ke sistem nyata.
