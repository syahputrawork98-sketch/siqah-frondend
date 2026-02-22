# Refactor Roadmap Batch 2

Dokumen ini fokus untuk pekerjaan lanjutan setelah migrasi besar Batch 1 selesai.
Status terakhir diverifikasi pada 2026-02-23.

## Prioritas Utama Batch 2

1. Best Architecture
2. Clean Code
3. Component-Based Styling

## Tujuan Refactor

- [ ] Menyempurnakan arsitektur scalable multi-role (routing, auth guard, role policy terpusat).
- [ ] Menegakkan clean code dan batas layer agar tidak ada ketergantungan silang.
- [ ] Merapikan legacy compatibility layer agar sumber kebenaran hanya di modul aktif.
- [ ] Menstabilkan quality gate lokal dan CI (`test`, `lint`, `build`) secara konsisten.
- [ ] Menyiapkan landasan integrasi backend riil tanpa ubah UI behavior.

## Prinsip Utama

### 1) Best Architecture
- [ ] Routing terpusat di `app/router`.
- [ ] Terapkan auth guard + role policy yang eksplisit.
- [ ] Pertahankan batas dependensi layer: `app -> features -> shared`.

### 2) Clean Code
- [ ] Hapus dead code, TODO lama, dan wrapper yang tidak terpakai.
- [ ] Hilangkan duplikasi modul `pengunjung` vs `public`.
- [ ] Jaga naming dan import convention tetap konsisten.

### 3) Component-Based Styling
- [ ] Jadikan `src/shared/ui` sebagai source of truth komponen reusable.
- [ ] Kurangi style ad-hoc berulang di level page/feature.
- [ ] Standarkan state style (`hover`, `focus`, `active`, `disabled`, `loading`, `error`).
- [ ] Gunakan token desain konsisten di komponen aktif.

### 4) Data & State
- [ ] Pertahankan service layer sebagai pintu data tunggal.
- [ ] Lengkapi kontrak endpoint final untuk persiapan backend.
- [ ] Pastikan standar async state dipakai konsisten di halaman aktif.

### 5) Quality Engineering
- [x] Pulihkan toolchain lokal agar `npm run lint` dan `npm run build` lulus.
- [ ] Pertahankan unit test yang ada dan tambah test untuk area kritikal.
- [ ] Siapkan smoke test lintas role aktif.

## Scope Batch 2

- [x] Source aktif tetap di root `src/` (migrasi `client/` dianggap selesai di Batch 1).
- [x] Fokus role aktif: `public`, `admin`, `superadmin`.
- [ ] `petugas-kandang` tetap di luar scope runtime utama sampai requirement final.

## Roadmap Batch 2

### B2-1 - Stabilize Tooling

- [x] Pulihkan dependensi dev agar `eslint` dan `vite` terbaca di environment lokal.
- [x] Jalankan dan catat hasil quality gate lokal (`npm test`, `npm run lint`, `npm run build`).
- [ ] Tindak lanjuti vulnerability dari `npm audit` (4 high severity) agar baseline keamanan lebih aman.

### B2-2 - Router & Access Control

- [x] Ekstrak definisi route dari `src/App.jsx` ke `src/app/router`.
- [x] Terapkan auth guard dan role-based access policy.
- [x] Standarkan naming path route (lowercase, konsisten).

### B2-3 - Legacy Cleanup

- [x] Hapus wrapper legacy yang tidak dipakai di `src/pages/*`, `src/components/*`, `src/layouts/*`.
- [x] Konsolidasikan `src/features/pengunjung` ke `src/features/public`.
- [x] Bersihkan komentar/path lama `client/src` yang tersisa di source code.

### B2-4 - Component Styling Standardization

- [x] Audit komponen yang masih styling ad-hoc di role aktif (`public`, `admin`, `superadmin`).
- [x] Refactor style berulang ke komponen `src/shared/ui` atau wrapper reusable per fitur.
- [x] Terapkan token desain dan state style standar pada halaman prioritas (admin/superadmin core pages + public core/section utama selesai; hardcoded dekoratif minor tetap dipertahankan).

### B2-5 - Data Contract Readiness

- [x] Rapikan halaman admin yang masih bercampur dengan legacy `src/pages/data-master/*`.
- [x] Definisikan kontrak endpoint final per modul aktif.
- [x] Siapkan skenario transisi dari JSON mock ke API riil per endpoint.

### B2-6 - Test & Final Pass

- [ ] Tambah cakupan test untuk alur UI kritikal.
- [ ] Jalankan final pass satu putaran penuh: test + lint + build.
- [ ] Update dokumentasi arsitektur jika ada perubahan struktur final.

## Progress Log Batch 2

### 2026-02-23

- [x] Baseline Batch 2 didokumentasikan.
- [x] Verifikasi lokal: `npm test` lulus (9/9 test pass).
- [x] Perbaikan tooling lokal: jalankan `npm install` dan pulihkan dependency dev (`eslint`, `vite`).
- [x] Verifikasi lokal: `npm run lint` lulus.
- [x] Verifikasi lokal: `npm run build` lulus (masih ada warning chunk > 500kB, non-blocking).
- [x] Implementasi `B2-2`: route dipusatkan ke `src/app/router/AppRouter.jsx` + `RoleGuard` dengan policy role eksplisit.
- [x] Implementasi `B2-3`: hapus wrapper/duplikasi legacy non-runtime (`pages`, `components`, `features/pengunjung`, `layouts` lama) dan bersihkan jejak komentar `client/src`.
- [x] Implementasi bertahap `B2-4`: tambah utility class berbasis token di `src/index.css`, tambah `Button` reusable di `src/shared/ui/button.jsx`, dan migrasi style shell admin/superadmin serta modal validasi ke pola reusable.
- [x] Lanjutan `B2-4`: migrasi aksi tombol berulang di halaman admin/superadmin core pages ke `Button` reusable + utility class token.
- [x] Lanjutan `B2-4`: rollout utility class component-based styling ke public core (`Navbar`, `Footer`, CTA/Hero utama, section paket, contact form`) dengan state hover/focus yang konsisten.
- [x] Finalisasi `B2-4`: rollout lanjutan ke section public `home/services` serta area `contact/paket` untuk konsistensi accent + CTA state style.
- [x] Implementasi `B2-5`: boundary admin data-master dipindah ke `features/admin/pages/data-master` (router tidak lagi impor langsung dari legacy path) + kontrak endpoint final dan runbook transisi mock ke API riil didokumentasikan di `docs/DATA_CONTRACT_READINESS.md`.

## Definition of Done Batch 2

- [ ] Struktur routing dan access control terpusat sudah aktif.
- [ ] Tidak ada wrapper legacy non-esensial yang tertinggal di jalur runtime.
- [ ] Quality gate lokal dan CI lulus konsisten (`test`, `lint`, `build`).
- [ ] Dokumentasi roadmap dan arsitektur sinkron dengan kode.
