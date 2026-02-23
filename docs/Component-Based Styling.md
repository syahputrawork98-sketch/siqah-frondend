# Component-Based Styling

`Component-Based Styling` adalah pendekatan styling berbasis komponen reusable, bukan style ad-hoc per halaman.

## Tujuan

- Menjaga konsistensi visual lintas halaman/role.
- Mengurangi duplikasi class/style.
- Mempercepat pengembangan section baru dengan primitive yang sama.

## Prinsip Utama

1. Source of truth di shared layer  
   Komponen UI reusable dikelola di `src/shared/ui`.

2. Token-driven styling  
   Nilai warna, spacing, radius, shadow, font mengacu `src/shared/styles/tokens.css`.

3. State style konsisten  
   `hover`, `focus`, `active`, `disabled`, `loading`, `error` harus standar.

4. Komposisi, bukan copy-paste  
   Halaman dibangun dari primitive seperti section, heading, card, button, badge, stat.

5. Progressive enhancement  
   Variasi visual baru ditambah lewat variant/props, bukan komponen duplikat.

## Implementasi di Project Ini

- Token desain: `src/shared/styles/tokens.css`
- Public primitives: `PublicSection`, `SectionHeading`, `PublicCard`, `PublicButton`, `PublicBadge`, `PublicStat`
- Export terpusat: `src/shared/ui/index.js`

## Workflow Styling yang Disarankan

1. Definisikan kebutuhan visual di level token dulu.
2. Jika pola dipakai >=2 kali, ekstrak ke `src/shared/ui`.
3. Gunakan props/variant untuk perbedaan kecil.
4. Terapkan ke feature pages sebagai komposisi section.
5. Verifikasi dengan lint/build sebelum merge.

## Checklist Component-Based Styling

- [ ] Tidak ada style wrapper berulang yang seharusnya jadi primitive.
- [ ] Hardcoded color berkurang dan diganti token.
- [ ] Primitive shared dipakai konsisten lintas halaman.
- [ ] Style state interaktif tersedia dan seragam.
- [ ] UI baru mengikuti pattern yang sudah ada, bukan membuat pola paralel.

## Anti-Pattern yang Harus Dihindari

- Menambah class util panjang berulang di banyak section.
- Menulis inline `style` untuk nilai yang bisa ditokenkan.
- Membuat komponen serupa dengan nama berbeda tapi fungsi sama.
- Mencampur sistem style lama dan baru tanpa rencana migrasi.

