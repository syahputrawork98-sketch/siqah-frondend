# Architecture Guide

Dokumen ini menjelaskan target arsitektur frontend Siqah agar scalable untuk pengembangan tim.

## Tujuan

- Konsistensi struktur lintas fitur.
- Pemisahan concern UI, state, dan data layer.
- Memudahkan refactor bertahap dari `client/` ke root project.

## Struktur Target

```txt
src/
  app/
    providers/
    router/
    layouts/
    styles/
  features/
    <feature-name>/
      api/
      model/
      ui/
      pages/
  entities/
    <entity-name>/
      model/
      ui/
  widgets/
    <widget-name>/
  shared/
    api/
    ui/
    lib/
    config/
    constants/
    hooks/
    styles/
```

## Layer Responsibility

### `app`
- Inisialisasi aplikasi.
- Router utama, provider global, layout global.
- Tidak menyimpan logic domain bisnis.

### `features`
- Use-case spesifik pengguna.
- Berisi UI + logic untuk sebuah fitur (contoh: validasi pembayaran, monitoring proses).
- API call per fitur berada di `features/<name>/api`.

### `entities`
- Blok domain inti yang reusable lintas fitur (contoh: `user`, `order`, `invoice`).
- Menyimpan model dan komponen representasi entity.

### `widgets`
- Komposisi UI tingkat section/halaman yang memadukan beberapa feature/entity.

### `shared`
- Bagian lintas aplikasi: UI dasar, helper, hook umum, konstanta, config, API client.
- Tidak memuat logic bisnis spesifik fitur.

## Routing & Access

- Definisikan route per role di `app/router`.
- Gunakan route guard untuk autentikasi/otorisasi role.
- Standard route path lowercase.

## Data Layer

- Pisahkan server state dari UI state.
- Semua request melewati API client terpusat (`shared/api`).
- Jangan fetch langsung di komponen presentational.

## Styling

- Gunakan komponen reusable dari `shared/ui`.
- Gunakan design tokens untuk warna, spacing, typography.
- Hindari utility class yang duplikatif tanpa abstraksi.

## Naming Convention

- Folder: `kebab-case`.
- Komponen React: `PascalCase`.
- Hooks: `useXxx`.
- Service/API: `camelCase` function.

## Import Convention

Urutan import:
1. library eksternal
2. alias internal (`@/app`, `@/features`, `@/shared`, dll)
3. relative import lokal

## Aturan Dependensi

- `app` boleh mengimpor semua layer.
- `features` boleh mengimpor `entities` dan `shared`.
- `entities` hanya boleh mengimpor `shared`.
- `shared` tidak boleh mengimpor layer di atasnya.

## Migrasi Bertahap

Selama masa transisi:
- Source aktif berada di `src`.
- Struktur target dibangun paralel di root.
- Migrasi dilakukan per fitur agar aman.
