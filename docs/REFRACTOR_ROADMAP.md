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
- [ ] Sisa halaman admin/superadmin lain masih menggunakan dummy data dan akan dimigrasikan bertahap di lanjutan Phase 4.

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
- [ ] Ganti dummy data dengan API service layer (ongoing, prioritas admin selesai sebagian).
- [x] Tambahkan error boundary, loading state, empty state standar.
- [ ] Standarkan model data lintas fitur (ongoing, dimulai dari mapper admin).

### Phase 5 - Quality Gate & Cleanup
- [ ] Tambahkan test coverage minimum yang disepakati.
- [ ] Aktifkan CI pipeline.
- [ ] Hapus folder lama `client/` setelah parity fitur tercapai.
- [ ] Final pass: lint, build, test, docs update.

## Definition of Done (Per Task Refactor)

- [ ] Kode mengikuti struktur folder baru.
- [ ] Tidak ada hardcoded dummy data untuk flow production.
- [ ] Tidak ada warning/error lint di file yang diubah.
- [ ] Build sukses.
- [ ] Test yang relevan ditambahkan/diupdate.
- [ ] Dokumentasi perubahan ditulis singkat di PR.

## Working Agreement Tim

- [ ] Gunakan branch per scope kecil (`refactor/<scope>`).
- [ ] Hindari PR besar yang campur banyak domain.
- [ ] Review fokus pada correctness, maintainability, dan regresi.
- [ ] Setiap perubahan arsitektur dicatat di dokumen ini.

