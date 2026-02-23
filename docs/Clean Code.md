# Clean Code

`Clean Code` adalah praktik menulis kode yang mudah dibaca, mudah diubah, dan minim efek samping.

## Tujuan

- Mempercepat iterasi tanpa menambah technical debt berlebihan.
- Menurunkan risiko bug saat refactor.
- Membuat kode mudah dipahami lintas developer.

## Prinsip Utama

1. Naming yang jelas  
   Nama variabel/fungsi/komponen harus merepresentasikan intent.

2. Fungsi kecil dan fokus  
   Satu fungsi idealnya punya satu tanggung jawab.

3. Hindari duplikasi  
   Pola berulang diekstrak jadi helper atau komponen reusable.

4. Kode eksplisit lebih baik daripada "pintar tapi membingungkan"  
   Pilih keterbacaan daripada trik singkat.

5. Error handling yang jelas  
   State `loading/success/error` harus terlihat dan konsisten.

## Standar Praktis di Project Ini

- Struktur import konsisten (alias `@/`).
- Pisahkan data statis dari rendering saat memungkinkan.
- Hindari file komponen terlalu panjang; pecah per section/logika.
- Jangan campur style ad-hoc berulang di banyak file.
- Rapikan karakter/encoding teks agar tidak rusak di UI.

## Checklist Clean Code

- [ ] Nama komponen dan props deskriptif.
- [ ] Tidak ada dead code/TODO lama tanpa konteks.
- [ ] Tidak ada copy-paste logic yang bisa diekstrak.
- [ ] Komponen tidak memegang terlalu banyak tanggung jawab.
- [ ] Lint, test, dan build tetap lulus setelah perubahan.

## Anti-Pattern yang Harus Dihindari

- "God component" yang mengatur semuanya sekaligus.
- Magic value tersebar tanpa token/konstanta.
- Logika bisnis ditulis inline di JSX kompleks.
- Refactor setengah jalan yang menyisakan pola campuran lama-baru.

