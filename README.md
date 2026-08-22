# SPACEBOX — Website Company Profile

Website company profile untuk brand **SPACEBOX** ("Creatif, Elektronik & Desain"), dibangun dengan React + Vite + Tailwind CSS v4.

## Menjalankan Project

```bash
npm install
npm run dev       # development server
npm run build     # build production ke folder dist/
npm run preview   # preview hasil build
```

## Struktur Project

```
src/
├── assets/              # logo SPACEBOX resmi
├── components/          # semua komponen UI (Navbar, Hero, Services, dst)
├── data/                 # data konten (services, process, portfolio, testimonials)
├── hooks/useReveal.js    # hook IntersectionObserver untuk scroll animation
├── App.jsx               # menyusun seluruh section halaman
├── main.jsx               # entry point React
└── index.css              # design tokens Tailwind v4 + base styles
```

## Design Tokens

Warna, font, shadow, dan animasi diatur di `src/index.css` melalui `@theme` (Tailwind v4):
- `--color-sb-blue`, `--color-sb-navy`, `--color-sb-orange`, `--color-sb-cyan`, dst.
- Font: Manrope (display) & Inter (body), dimuat dari Google Fonts.

## Catatan

- Logo SPACEBOX yang digunakan adalah asset asli yang diberikan (`src/assets/spacebox-logo.png`), tidak dibuat ulang.
- Semua teks UI menggunakan Bahasa Indonesia, istilah teknis tetap dalam Bahasa Inggris jika lebih natural.
- Form kontak saat ini bersifat front-end only (menampilkan pesan sukses setelah submit) — hubungkan ke backend/email service sesuai kebutuhan produksi.
- Animasi menghormati `prefers-reduced-motion`.
