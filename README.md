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

Saat ini source utama masih berada di folder `client/`.

```bash
cd client
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

- `client/` source frontend aktif
- `docs/` dokumentasi arsitektur, roadmap, dan pedoman tim

## Dokumentasi

- [Refactor Roadmap](docs/REFRACTOR_ROADMAP.md)
- [Architecture Guide](docs/ARCHITECTURE.md)
- [Contributing Guide](docs/CONTRIBUTING.md)

## Catatan

Refactor sedang berjalan bertahap untuk migrasi dari `client/` ke root project dengan target arsitektur yang lebih scalable untuk kolaborasi tim.
