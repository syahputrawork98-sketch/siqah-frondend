# Token Architecture v1

Dokumen ini menetapkan fondasi global agar styling tidak kembali menjadi CSS raw ad-hoc.

## Layer Token

1. `core`  
   Nilai mentah (palette, overlay, neutral, status base).

2. `semantic`  
   Token bermakna UI (`color-text-primary`, `color-bg-surface`, `color-public-accent`).

3. `component-intent`  
   Token untuk intent komponen (`color-button-primary-bg`, `color-field-border`).

## Lokasi Resmi

- `src/shared/styles/tokens.css` adalah source of truth.

## Aturan Penggunaan

1. Fitur/page tidak menulis hex baru langsung jika sudah ada token semantic.
2. Komponen reusable di `src/shared/ui` wajib konsumsi token semantic/component-intent.
3. Jika ada kebutuhan warna/spacing baru lintas lebih dari satu file, tambah token dulu, baru pakai.
4. Hardcoded value diperbolehkan hanya untuk:
   - eksperimen lokal sementara,
   - third-party embed/style yang tidak bisa di-token-kan.

## Checklist Saat Menambah UI Baru

- [ ] Sudah cek token yang ada di `tokens.css`.
- [ ] Tidak menambah class warna hardcoded berulang.
- [ ] Komponen baru ditempatkan di `shared/ui` jika reusable.
- [ ] State `hover/focus/active/disabled/error` sudah dipetakan.

## Prioritas Migrasi Selanjutnya

1. `src/features/public/ui/Navbar.jsx` dan `src/features/public/ui/Footer.jsx` (masih ada banyak literal warna).
2. Normalisasi gradien `home/about/services/paket` ke utility token class agar tidak duplikat.
3. Tambah lint guard internal untuk mendeteksi literal warna di layer `features/*`.
