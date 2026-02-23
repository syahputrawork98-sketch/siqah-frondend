# Best Architecture (Patokan Batch 3)

Dokumen ini adalah blueprint arsitektur yang bisa dijadikan patokan utama untuk aplikasi 3 role:
- `public`
- `admin`
- `superadmin`

Targetnya adalah arsitektur yang konsisten, scalable, dan aman dari ketergantungan silang.

## Tujuan

- Menjaga struktur kode tetap jelas saat fitur bertambah.
- Memisahkan concern global app, domain fitur, dan utilitas bersama.
- Mempercepat maintenance, testing, dan onboarding developer.

## Aturan Emas

1. Gunakan boundary layer: `app -> features -> shared`.
2. `app` boleh impor `features` dan `shared`.
3. `features` hanya boleh impor `shared` (tidak boleh impor `app` atau fitur lain secara internal).
4. `shared` tidak boleh impor `app` maupun `features`.
5. Semua route dan access policy harus terpusat di `app/router`.

## Struktur Folder Patokan

```text
src/
  app/
    layouts/
    providers/
    router/
      AppRouter.jsx
      RoleGuard.jsx
      accessPolicy.js
      routes/
        publicRoutes.jsx
        adminRoutes.jsx
        superadminRoutes.jsx
        index.js
  features/
    public/
      pages/
      ui/
      api/
      model/
    admin/
      pages/
      ui/
      api/
      model/
    superadmin/
      pages/
      ui/
      api/
      model/
  shared/
    api/
    config/
    hooks/
    lib/
    mocks/
    styles/
      tokens.css
    ui/
      index.js
  main.jsx
```

## Kegunaan Detail Per Folder

### `src/app`

- `router/`  
  Sumber tunggal navigasi aplikasi.
  Isi: daftar route, guard role, policy akses.

- `layouts/`  
  Shell per area aplikasi (mis. layout public/admin/superadmin).
  Tidak menyimpan business logic fitur.

- `providers/`  
  Provider global (error boundary, context global, dsb).

Kapan menaruh kode di `app`:
- kalau sifatnya global lintas role.
- kalau mengatur bootstrap aplikasi.

### `src/features`

Setiap role adalah modul domain mandiri:
- `features/public`
- `features/admin`
- `features/superadmin`

Isi umum per role:
- `pages/`: halaman entry per route role tersebut.
- `ui/`: komponen UI spesifik role/fitur.
- `api/`: adapter endpoint role itu.
- `model/`: mapper/transform data khusus role.

Kapan menaruh kode di `features`:
- kalau behavior-nya milik domain role tertentu.
- kalau komponen tidak dipakai lintas role.

### `src/shared`

Library internal lintas role:
- `ui/`: komponen reusable (`Button`, `Modal`, `PublicSection`, dst).
- `styles/`: token desain (`tokens.css`).
- `api/`: http client base, error normalizer.
- `hooks/`: hook reusable lintas modul.
- `lib/`: utility murni (formatter/date/helper).
- `config/`: config runtime/environment.
- `mocks/`: data mock standar untuk development/testing.

Kapan menaruh kode di `shared`:
- dipakai minimal oleh 2 fitur/role.
- domain-neutral (tidak membawa aturan bisnis spesifik role).

## Contoh Alur untuk 3 Role

### 1) Public

1. Route didefinisikan di `src/app/router/routes/publicRoutes.jsx`.
2. Page entry ada di `src/features/public/pages/*`.
3. Section/komponen page ada di `src/features/public/ui/*`.
4. Reusable UI pakai primitive dari `src/shared/ui`.
5. Style mengacu token `src/shared/styles/tokens.css`.

### 2) Admin

1. Route admin di `src/app/router/routes/adminRoutes.jsx`.
2. Akses dibatasi oleh `RoleGuard` + `accessPolicy`.
3. Halaman operasional di `src/features/admin/pages/*`.
4. Data adapter di `src/features/admin/api/*`.
5. Komponen generik tabel/modal/tabs tetap ambil dari `src/shared/ui`.

### 3) Superadmin

1. Route superadmin di `src/app/router/routes/superadminRoutes.jsx`.
2. Policy akses tetap terpusat di `src/app/router/accessPolicy.js`.
3. Page dan UI khusus superadmin di `src/features/superadmin/*`.
4. Mapper data khusus di `src/features/superadmin/model/*`.
5. Shared hooks/lib/api tetap dipakai dari `src/shared/*`.

## Convention Import (Patokan)

- `app/*` boleh:
  - `@/features/*`
  - `@/shared/*`
- `features/*` boleh:
  - `@/shared/*`
- `shared/*` boleh:
  - sesama `@/shared/*`

Tidak boleh:
- `@/shared/*` -> `@/features/*`
- `@/shared/*` -> `@/app/*`
- `@/features/a/*` -> internal private `@/features/b/*` tanpa kontrak jelas.

## Checklist Review Arsitektur

- [ ] Setiap route sudah berada di `app/router/routes`.
- [ ] Tidak ada import melanggar boundary layer.
- [ ] Kode reusable dipindah ke `shared`, bukan copy-paste antarfolder feature.
- [ ] Setiap role punya folder `pages/ui/api/model` yang rapi.
- [ ] Token desain dipakai konsisten dari `shared/styles/tokens.css`.

## Anti-Pattern yang Wajib Dihindari

- Menaruh business logic role di `app/layouts`.
- Menaruh komponen global di feature role tertentu.
- Menambah folder compatibility/legacy tanpa owner dan rencana hapus.
- Mencampur API call, mapper, dan rendering kompleks dalam satu file halaman.
