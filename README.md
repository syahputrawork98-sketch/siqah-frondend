# Siqah Frontend

Frontend aplikasi Siqah Aqiqah untuk kanal pengunjung, admin, superadmin, dan petugas operasional.

## Tech Stack

- React 19
- Vite 7
- React Router DOM 7
- Tailwind CSS 4
- DaisyUI 5
- Recharts
- Framer Motion
- Lucide React
- ESLint 9

## Menjalankan Project

Konfigurasi project dijalankan dari root, dengan source utama berada di `src`.

```bash
npm install
npm run dev
```

Perintah lain:

```bash
npm run build
npm run lint
npm run preview
```

## Struktur Saat Ini

- `src/` source frontend aktif
- root (`package.json`, `vite.config.js`, `eslint.config.js`, `tailwind.config.js`, `postcss.config.js`, `index.html`) sebagai fondasi konfigurasi
- `docs/` dokumentasi arsitektur, roadmap, dan pedoman tim

## Dokumentasi

- [Refactor Roadmap V2](docs/Refactor Roadmap Batch 2.md)
- [Refactor Roadmap (Legacy Pointer)](docs/REFRACTOR_ROADMAP.md)
- [Architecture Guide](docs/ARCHITECTURE.md)
- [Contributing Guide](docs/CONTRIBUTING.md)

## Catatan

Refactor berjalan bertahap dengan target arsitektur yang lebih scalable untuk kolaborasi tim.
