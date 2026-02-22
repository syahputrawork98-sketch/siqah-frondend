# Refactor Roadmap

Siqah Akikah adalah layanan akikah terpercaya dari Bandung sejak 2025, dengan fokus pada layanan yang praktis, amanah, dan sesuai syariat.

Dokumen ini adalah sumber utama rencana refactor frontend agar siap dikembangkan tim untuk skala project yang lebih besar.

## Progress Log

### 2026-02-23
- [x] Membuat dokumentasi tim: `docs/ARCHITECTURE.md` dan `docs/CONTRIBUTING.md`.
- [x] Merapikan `README.md` agar fokus sebagai onboarding + index dokumentasi.
- [x] Fix baseline awal: syntax JSX invalid pada beberapa file pengunjung.
- [x] Fix baseline awal: perbaikan penggunaan komponen `Modal` di tugas petugas kandang.
- [x] Fix baseline awal: membersihkan link menu ke route yang belum tersedia.
- [x] Menyamakan path navbar/footer publik ke lowercase sesuai route utama.
- [x] Dependency project berhasil diinstall ulang (`npm install`).
- [x] `npm run build` berhasil (Vite build sukses, ada warning ukuran bundle > 500kB).
- [x] `npm run lint` berhasil setelah perbaikan konfigurasi dan cleanup unused code.
- [x] Validasi ulang `npm run build` berhasil setelah fix lint.
- [ ] Masih ada warning non-blocking di build: ukuran bundle > 500kB dan warning CSS `@property`.
- [x] Menambahkan fondasi konfigurasi di root: `package.json`, `vite.config.js`, `eslint.config.js`, `tailwind.config.js`, `postcss.config.js`, `index.html`.
- [x] Menambahkan alias import root untuk target struktur (`@`, `@/app`, `@/features`, `@/entities`, `@/widgets`, `@/shared`).
- [x] Menambahkan baseline environment config di root (`.env.example`) dan runtime config terpusat (`client/src/shared/config/runtimeConfig.js`).
- [x] Update `README.md` agar workflow command default berjalan dari root project.
- [x] Memulai Phase 2: membuat design token tunggal di `client/src/shared/styles/tokens.css` dan menghubungkannya ke `client/src/index.css`.
- [x] Memindahkan komponen reusable dasar (`Card`, `CardSummary`, `Label`, `Modal`, `Table`, `Tabs`) ke `client/src/shared/ui`.
- [x] Menjaga backward compatibility: `client/src/components/ui/*` kini menjadi re-export ke `shared/ui` agar migrasi bertahap aman.
- [x] Menambahkan `client/src/shared/lib` untuk util umum (`formatCurrencyIdr`, `getCurrentYear`) dan migrasi pemakaian util duplikat pada modul terkait.
- [x] Memulai Phase 3: migrasi fitur `pengunjung` ke struktur baru `client/src/features/public` (pages + ui) dan route publik diarahkan ke module baru.
- [x] Menambahkan `client/src/app/layouts/PublicLayout.jsx` sebagai layout publik di layer `app`.
- [x] Menjaga compatibility selama transisi: file legacy `pages/pengunjung/*` dan `components/pengunjung/{Navbar,Footer}` menjadi wrapper ke module baru.
- [x] Standardisasi naming clean code: istilah module dari `pengunjung` diganti menjadi `public`.
- [x] Melanjutkan Phase 3: migrasi fitur `admin` ke struktur baru `client/src/features/admin` (pages + ui) dan layout admin ke `client/src/app/layouts/AdminLayout.jsx`.
- [x] Menjaga compatibility selama transisi: file legacy `pages/admin/*`, `components/admin/*`, dan `layouts/AdminLayout.jsx` menjadi wrapper ke module baru.
- [x] Melanjutkan Phase 3: migrasi fitur `superadmin` ke struktur baru `client/src/features/superadmin` (pages + ui) dan layout superadmin ke `client/src/app/layouts/SuperadminLayout.jsx`.
- [x] Menjaga compatibility selama transisi: file legacy `pages/superadmin/*`, `components/superadmin/*`, dan `layouts/SuperadminLayout.jsx` menjadi wrapper ke module baru.
- [x] Scope update: role `petugas-kandang` dikeluarkan sementara dari scope implementasi karena masih tahap perencanaan dan akan dibuat ulang saat requirement final.
- [x] Route aktif `petugas-kandang` serta referensi menu admin ke data petugas kandang sudah dinonaktifkan dari jalur runtime utama.
- [x] Memulai Phase 4: menambahkan API client terpusat di `client/src/shared/api` (`httpClient`, `ApiError`).
- [x] Memulai Phase 4: menambahkan standar async state (`LoadingState`, `ErrorState`, `EmptyState`) di `client/src/shared/ui/async-state.jsx`.
- [x] Memulai Phase 4: menambahkan hook server-state sederhana `client/src/shared/hooks/useAsyncData.js`.
- [x] Memulai Phase 4: migrasi data layer fitur admin (`DashboardAdmin`, `PembayaranAdmin`, `LogNotifikasiAdmin`) ke `client/src/features/admin/api/adminApi.js`.
- [x] Menambahkan global `AppErrorBoundary` di `client/src/app/providers/AppErrorBoundary.jsx` dan mengaktifkannya di `client/src/main.jsx`.
- [x] Menstandarkan sumber dummy data admin ke file JSON terpusat di `client/src/shared/mocks/admin/*.json`.
- [x] `mockAdminApi` sekarang membaca data dari JSON (bukan hardcode di komponen).
- [x] Melanjutkan Phase 4: migrasi `DetailPesananAdmin` dan `PengaturanAdmin` ke service layer + mock JSON terpusat.
- [x] Melanjutkan Phase 4: menambahkan data layer `superadmin` (`api`, `model/mappers`) dan mock JSON terpusat di `client/src/shared/mocks/superadmin/*.json`.
- [x] Migrasi halaman `superadmin` (`Dashboard`, `Monitoring`, `Laporan`, `Notifikasi`, `Users`, `DataMaster`, `Pengaturan`) serta komponen `Topbar`/`NotificationDropdown` ke service layer + async state standar.
- [x] Bersih dari dummy inline di area aktif `features/admin` dan `features/superadmin` (dummy dipusatkan ke JSON mock).
- [x] Seluruh halaman aktif pada `features/admin` dan `features/superadmin` sudah menggunakan service layer + JSON mock terpusat.
- [x] Memulai Phase 5: menambahkan baseline unit test dengan Node test runner untuk `shared/lib` dan `model/mappers` (`tests/*.test.js`).
- [x] Menambahkan script quality gate test di root: `npm test` dan `npm run test:coverage`.
- [x] Verifikasi awal quality gate test lulus (9 test pass).
- [x] Menambahkan CI pipeline GitHub Actions (`.github/workflows/ci.yml`) untuk menjalankan `test`, `lint`, dan `build` pada push/PR.
- [x] Relokasi source aktif dari `client/src` ke root `src` tanpa perubahan behavior runtime.
- [x] Update konfigurasi/alias/import utama pasca relokasi (`vite.config.js`, `jsconfig.json`, `eslint.config.js`, `index.html`, path test).
- [x] Smoke test pasca relokasi untuk role `pengunjung`, `admin`, `superadmin` melalui verifikasi route aktif + quality gate (`test`, `lint`, `build`) berjalan sukses.
- [x] Menghapus folder legacy `client/` setelah relokasi source selesai.

## Tujuan Refactor

- [ ] Migrasi bertahap dari struktur lama di folder `client/` ke root project `siqah-frondend/`.
- [ ] Menerapkan arsitektur yang scalable untuk multi-role app (pengunjung, admin, superadmin, petugas).
- [ ] Menegakkan clean code dan standar kolaborasi tim.
- [ ] Menjadikan UI konsisten lewat component-based styling dan design system.
- [ ] Menurunkan risiko bug saat pengembangan paralel oleh banyak developer.

## Prinsip Utama

### 1) Best Architecture
- [ ] Gunakan struktur berbasis domain/feature, bukan file campur per tipe.
- [ ] Pisahkan `app`, `features`, `shared`, `entities`, `widgets` (atau varian yang disepakati tim).
- [ ] Centralize routing, auth guard, dan role access policy.
- [ ] API layer terpisah dari UI (service/repository).

### 2) Clean Code
- [ ] Naming konsisten dan eksplisit.
- [ ] Komponen kecil, single responsibility.
- [ ] Hindari duplikasi (extract reusable logic/component).
- [ ] Validasi input dan error handling standar.
- [ ] Hilangkan dead code, TODO lama, dan dummy data tanpa label.

### 3) Component-Based Styling
- [ ] Pakai komponen UI reusable sebagai source of truth.
- [ ] Standarkan token desain: warna, spacing, radius, typography, shadow.
- [ ] Standarkan state style: hover, focus, active, disabled, loading, error.
- [ ] Hindari style ad-hoc berulang di tiap page.

### 4) Type Safety & Contract
- [ ] Migrasi bertahap ke TypeScript.
- [ ] Definisikan type untuk DTO/API response.
- [ ] Hindari `any`; gunakan type guard/schema validation bila perlu.

### 5) State & Data Flow
- [ ] Pisahkan server state vs UI state.
- [ ] Standarkan pola fetch/caching/retry/error.
- [ ] Centralize auth/session state.

### 6) Quality Engineering
- [ ] Unit test untuk utility dan business logic.
- [ ] Component test untuk perilaku UI penting.
- [ ] E2E smoke test untuk alur inti per role.
- [ ] CI wajib lint + build + test.

### 7) Team Collaboration
- [ ] Conventions: struktur folder, naming, import order, commit message.
- [ ] PR template + checklist review.
- [ ] Definition of Done yang jelas.
- [ ] Dokumentasi onboarding developer.

### 8) Non-Functional Standards
- [ ] Accessibility (semantic HTML, keyboard nav, focus state, contrast).
- [ ] Performance (lazy load route, code splitting, image optimization).
- [ ] Security frontend (sanitize input, secure token handling).
- [ ] Observability minimum (error logging boundary + tracking event penting).

## Roadmap Migrasi (Bertahap)

### Phase 0 - Baseline Stabilization
- [x] Perbaiki syntax error dan broken route.
- [x] Pastikan `npm run build` dan `npm run lint` lolos di baseline.
- [x] Inventaris area yang masih dummy data.

### Phase 1 - Foundation di Root
- [x] Pindahkan konfigurasi inti dari `client/` ke root (`package`, `vite`, `tailwind`, `eslint`, `index.html`).
- [x] Setup alias import (`@/app`, `@/features`, `@/shared`, dll).
- [x] Setup env config (`.env.example`) dan runtime config.

### Phase 2 - Shared Layer
- [x] Migrasi komponen UI reusable ke `shared/ui`.
- [x] Buat design token tunggal (theme, typography, spacing).
- [x] Migrasi helper/util common ke `shared/lib`.

### Phase 3 - Feature-by-Feature Migration
- [x] Migrasi `pengunjung` ke struktur baru.
- [x] Migrasi `admin`.
- [x] Migrasi `superadmin`.
- [x] `petugas-kandang` ditunda (de-scoped sementara, akan dibuat ulang saat planning final).
- [x] Tiap fitur: move -> fix import -> test -> build.

### Phase 4 - Data Layer & API Integration
- [x] Ganti dummy data inline menjadi API service layer + mock JSON terpusat untuk scope frontend aktif.
- [x] Tambahkan error boundary, loading state, empty state standar.
- [x] Standarkan model data lintas fitur pada scope aktif (mapper diterapkan di admin + superadmin).
- [x] Keputusan scope: selama frontend belum final, seluruh data tetap memakai dummy JSON terpusat.

### Phase 5 - Quality Gate & Cleanup
- [x] Tambahkan test coverage minimum yang disepakati (baseline: util + data mappers).
- [x] Aktifkan CI pipeline.
- [x] Relokasi source aktif dari `client/src` ke root `src` (fase mekanis, tanpa ubah behavior).
- [x] Update konfigurasi/alias/import setelah relokasi path dan pastikan aplikasi tetap berjalan.
- [x] Smoke test lintas role setelah relokasi (`pengunjung`, `admin`, `superadmin`).
- [x] Hapus folder lama `client/` hanya setelah parity fitur tercapai dan seluruh verifikasi lolos.
- [ ] Final pass: lint, build, test, docs update.

### Phase 6 - Backend Integration & Data Finalization
- [ ] Integrasi backend API riil dikerjakan setelah fase frontend selesai di repo backend Siqah; kontrak endpoint dipertahankan di service layer frontend.
- [ ] Finalisasi standardisasi model data lintas seluruh modul yang belum masuk scope aktif.
- [ ] Migrasi bertahap dari JSON mock ke response backend riil per endpoint.

### Aturan Relokasi `client/` -> `src/`

- [x] Folder `client/` tidak dihapus pada Phase 4.
- [ ] Relokasi dilakukan setelah fitur stabil dan parity tercapai.
- [ ] Penghapusan `client/` adalah langkah terakhir cleanup, bukan langkah migrasi awal.

## Definition of Done (Per Task Refactor)

- [ ] Kode mengikuti struktur folder baru.
- [ ] Tidak ada hardcoded dummy data di komponen; gunakan service layer + file JSON mock terpusat selama backend belum tersedia.
- [ ] Tidak ada warning/error lint di file yang diubah.
- [ ] Build sukses.
- [ ] Test yang relevan ditambahkan/diupdate.
- [ ] Dokumentasi perubahan ditulis singkat di PR.

## Catatan Scope Sementara (Frontend-Only)

- [x] Pengerjaan saat ini dibatasi sampai endpoint contract di frontend (service layer).
- [x] Backend API riil akan dikerjakan terpisah di repo backend Siqah setelah fase frontend ini selesai.
- [x] Selama masa transisi, data dummy wajib disimpan dalam file JSON agar mudah disambungkan ke backend nantinya.
- [x] Phase 4 saat ini difokuskan pada kesiapan arsitektur data (service, mapper, state standar), bukan koneksi backend riil.

## Working Agreement Tim

- [ ] Gunakan branch per scope kecil (`refactor/<scope>`).
- [ ] Hindari PR besar yang campur banyak domain.
- [ ] Review fokus pada correctness, maintainability, dan regresi.
- [ ] Setiap perubahan arsitektur dicatat di dokumen ini.

