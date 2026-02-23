# Web Architecture & Role Extension Guide

Dokumen ini jadi panduan utama tim untuk memahami struktur frontend Siqah dan menambah role baru secara aman.

## 1. Gambaran Aplikasi

Siqah Frontend adalah aplikasi multi-role dengan 3 role runtime aktif saat ini:
- `public`
- `admin`
- `superadmin`

Role lain (contoh: mitra) tetap boleh dikembangkan, tetapi tidak masuk jalur runtime utama sampai requirement final ditetapkan.

## 2. Tech Stack

- React 19
- Vite 7
- React Router DOM 7
- Tailwind CSS 4 + DaisyUI 5
- ESLint 9

## 3. Struktur Folder Utama

```txt
src/
  app/
    layouts/
    providers/
    router/
      routes/
  features/
    public/
    admin/
    superadmin/
  shared/
    api/
    config/
    hooks/
    lib/
    styles/
    ui/
```

Prinsip dependensi:
- `app -> features -> shared`
- `features` tidak boleh import `app`
- `shared` tidak boleh import `app/features/entities/widgets`

Guardrail lint sudah aktif di `eslint.config.js` via `no-restricted-imports`.

## 4. Router Saat Ini (Modular Per Role)

Entry router tetap di:
- `src/app/router/AppRouter.jsx`

Definisi route per role dipisah di:
- `src/app/router/routes/publicRoutes.jsx`
- `src/app/router/routes/adminRoutes.jsx`
- `src/app/router/routes/superadminRoutes.jsx`
- `src/app/router/routes/index.js`

`AppRouter.jsx` hanya melakukan:
- compose routes
- apply `RoleGuard`
- bind layout per role

## 5. Access Control

Policy role ada di:
- `src/app/router/accessPolicy.js`

Guard route ada di:
- `src/app/router/RoleGuard.jsx`

Konsep:
- Role aktif dibaca dari `localStorage` key `siqah.active_role`
- Route role-protected dibungkus `<RoleGuard allowedRoles={...} />`
- Redirect fallback ditentukan oleh `getDefaultLandingByRole`

## 6. Data Layer

- HTTP client tunggal: `src/shared/api/httpClient.js`
- Runtime config: `src/shared/config/runtimeConfig.js`
- Service per role:
  - `src/features/admin/api/*`
  - `src/features/superadmin/api/*`

Mode mock/API riil dikontrol oleh `VITE_ENABLE_MOCK`.

## 7. UI & Styling

Source of truth komponen reusable:
- `src/shared/ui/*`

Token desain:
- `src/shared/styles/tokens.css`

Utility class shared:
- `src/index.css`

Gunakan class berbasis token (`siqah-btn-*`, `siqah-field`, `siqah-table-*`, dsb) untuk mengurangi style ad-hoc di page.

## 8. Cara Menambah Role Baru (Playbook)

Contoh role baru: `finance`.

### Step 1 - Tambah feature module

Buat struktur minimal:
- `src/features/finance/pages/`
- `src/features/finance/ui/`
- `src/features/finance/api/`
- `src/features/finance/model/`

### Step 2 - Tambah layout role (jika perlu shell khusus)

Buat:
- `src/app/layouts/FinanceLayout.jsx`

Layout ini berisi `Outlet` dan shell navigasi role finance.

### Step 3 - Tambah policy akses

Edit `src/app/router/accessPolicy.js`:
1. Tambah role di `ROLES`
2. Tambah alias di `ROLE_ALIASES`
3. Tambah policy di `ACCESS_POLICY`
4. Tambah landing default di `getDefaultLandingByRole`

### Step 4 - Definisikan routes role baru

Buat file baru:
- `src/app/router/routes/financeRoutes.jsx`

Format route sama seperti role lain:
- `{ index: true, element: <DashboardFinance /> }`
- `{ path: "laporan", element: <LaporanFinance /> }`

Export dari:
- `src/app/router/routes/index.js`

### Step 5 - Compose di AppRouter

Di `src/app/router/AppRouter.jsx`:
1. Import routes role baru + layout
2. Bungkus dengan `<RoleGuard allowedRoles={ACCESS_POLICY.finance}>`
3. Pasang parent path, misal `/finance`
4. Render child via helper `renderRoutes(...)`

### Step 6 - Siapkan data layer

Buat service role baru di:
- `src/features/finance/api/financeApi.js`

Gunakan `httpRequest` dari `shared/api`.

Jika mulai dari mock:
- siapkan mock di `src/shared/mocks/finance/*`
- buat `mockFinanceApi.js`
- gunakan switch `runtimeConfig.enableMock`

### Step 7 - Role switch saat login

Saat auth/session siap, pastikan role yang tersimpan di `localStorage` menggunakan value canonical yang sesuai `ROLES`.

### Step 8 - Testing minimum

Tambahkan minimal:
- unit test mapper/service role baru
- test policy/landing jika ada perubahan akses

Lokasi test:
- `tests/*.test.js`

### Step 9 - Quality gate

Wajib lulus sebelum merge:
1. `npm test`
2. `npm run lint`
3. `npm run build`

### Step 10 - Dokumentasi

Update dokumen berikut jika role baru jadi runtime aktif:
- `README.md`
- `docs/ARCHITECTURE.md`
- `docs/Refactor Roadmap Batch 2.md`
- `docs/DATA_CONTRACT_READINESS.md` (jika punya endpoint)

## 9. Checklist Singkat Penambahan Role

- [ ] Module role dibuat di `src/features/<role>`
- [ ] Layout role tersedia (jika perlu)
- [ ] `accessPolicy.js` diperbarui
- [ ] File routes role baru dibuat dan di-export
- [ ] `AppRouter.jsx` compose route role baru
- [ ] Service API role baru disiapkan
- [ ] Test + lint + build lulus
- [ ] Dokumentasi diperbarui

## 10. Catatan Praktik Tim

- Hindari menambah import lintas layer yang melanggar boundary.
- Hindari menaruh fetch langsung di komponen presentational.
- Prioritaskan reuse komponen di `shared/ui` daripada copy style per halaman.
- Tambah route baru hanya lewat modul route per role, bukan hardcode acak di file lain.

