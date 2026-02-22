# Contributing Guide

Panduan kolaborasi tim untuk menjaga kualitas dan konsistensi codebase.

## Branching Strategy

- Gunakan branch kecil per scope: `feat/<scope>`, `fix/<scope>`, `refactor/<scope>`.
- Hindari branch yang menggabungkan banyak domain sekaligus.

## Commit Convention

Format rekomendasi:

```txt
<type>(<scope>): <ringkas perubahan>
```

Contoh:
- `refactor(admin): split payment table into feature modules`
- `fix(public): correct invalid overlay JSX`
- `docs(architecture): add layer dependency rules`

Type yang dipakai:
- `feat`, `fix`, `refactor`, `docs`, `test`, `chore`

## Pull Request Rules

- Satu PR untuk satu tujuan utama.
- Sertakan deskripsi masalah dan solusi.
- Lampirkan screenshot/video jika ada perubahan UI.
- Pastikan tidak ada file tidak relevan ikut berubah.

## PR Checklist

- [ ] Scope perubahan jelas dan kecil.
- [ ] Lint pass untuk file yang diubah.
- [ ] Build pass.
- [ ] Tidak ada route rusak.
- [ ] Tidak ada dummy data baru untuk flow production.
- [ ] Dokumentasi diperbarui jika ada perubahan arsitektur/alur.

## Code Review Focus

Reviewer fokus pada:
- Correctness (bug, edge case, regresi).
- Maintainability (readability, duplikasi, coupling).
- Architecture compliance (layer boundary).
- Test coverage untuk logic penting.

## Definition of Done

Suatu task dianggap selesai jika:
- [ ] Kode mengikuti struktur dan konvensi proyek.
- [ ] Kebutuhan fungsional terpenuhi.
- [ ] Build sukses.
- [ ] Lint sukses.
- [ ] Test relevan ditambahkan/diupdate.
- [ ] PR sudah direview dan disetujui.

## Refactor Rules

- Refactor dilakukan bertahap, bukan big-bang.
- Saat memindahkan file, jaga behavior tetap sama dahulu.
- Pisahkan PR refactor dari PR fitur baru jika memungkinkan.
- Catat perubahan struktur di `docs/REFRACTOR_ROADMAP.md`.

## Communication

- Jika menemukan blocker teknis, tulis jelas di PR/issue.
- Jika ada keputusan arsitektur baru, dokumentasikan sebelum merge.
