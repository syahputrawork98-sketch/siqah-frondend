# Refactor Roadmap

Siqah Akikah adalah layanan akikah terpercaya dari Bandung sejak 2025, dengan fokus pada layanan yang praktis, amanah, dan sesuai syariat.

Dokumen ini adalah sumber utama rencana refactor frontend agar siap dikembangkan tim untuk skala project yang lebih besar.

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
- [ ] Perbaiki syntax error dan broken route.
- [ ] Pastikan `npm run build` dan `npm run lint` lolos di baseline.
- [ ] Inventaris area yang masih dummy data.

### Phase 1 - Foundation di Root
- [ ] Pindahkan konfigurasi inti dari `client/` ke root (`package`, `vite`, `tailwind`, `eslint`, `index.html`).
- [ ] Setup alias import (`@/app`, `@/features`, `@/shared`, dll).
- [ ] Setup env config (`.env.example`) dan runtime config.

### Phase 2 - Shared Layer
- [ ] Migrasi komponen UI reusable ke `shared/ui`.
- [ ] Buat design token tunggal (theme, typography, spacing).
- [ ] Migrasi helper/util common ke `shared/lib`.

### Phase 3 - Feature-by-Feature Migration
- [ ] Migrasi `pengunjung` ke struktur baru.
- [ ] Migrasi `admin`.
- [ ] Migrasi `superadmin`.
- [ ] Migrasi `petugas-kandang`.
- [ ] Tiap fitur: move -> fix import -> test -> build.

### Phase 4 - Data Layer & API Integration
- [ ] Ganti dummy data dengan API service layer.
- [ ] Tambahkan error boundary, loading state, empty state standar.
- [ ] Standarkan model data lintas fitur.

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
