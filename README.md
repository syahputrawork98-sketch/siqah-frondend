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

Konfigurasi project utama sudah dijalankan dari root, sementara source utama masih berada di `client/src`.

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

- `client/src/` source frontend aktif (migrasi bertahap)
- root (`package.json`, `vite.config.js`, `eslint.config.js`, `tailwind.config.js`, `postcss.config.js`, `index.html`) sebagai fondasi konfigurasi
- `docs/` dokumentasi arsitektur, roadmap, dan pedoman tim

## Dokumentasi

- [Refactor Roadmap](docs/REFRACTOR_ROADMAP.md)
- [Architecture Guide](docs/ARCHITECTURE.md)
- [Contributing Guide](docs/CONTRIBUTING.md)

## Catatan

Refactor sedang berjalan bertahap untuk migrasi dari `client/` ke root project dengan target arsitektur yang lebih scalable untuk kolaborasi tim.
