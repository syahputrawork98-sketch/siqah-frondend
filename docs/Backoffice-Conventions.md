# Backoffice Conventions

Dokumen ini jadi acuan untuk area `admin` dan `superadmin` agar konsisten dan mudah dirawat.

## 1) Struktur folder role

Setiap role menggunakan struktur yang sama:

- `src/features/<role>/api`
- `src/features/<role>/model`
- `src/features/<role>/pages`
- `src/features/<role>/ui`

Komponen lintas role wajib dipindah ke `src/shared`.

## 2) Aturan naming

- Nama file halaman gunakan nama netral tanpa suffix role:
  - gunakan `Dashboard.jsx`, bukan `DashboardAdmin.jsx`.
- Nama komponen UI role gunakan nama netral:
  - gunakan `Topbar.jsx` dan `Sidebar.jsx`.
- Jika perlu kompatibilitas sementara, gunakan file alias re-export.

## 2a) Aturan path route admin

- Gunakan format konsisten berbasis domain:
  - `/admin/data-master/dashboard`
  - `/admin/data-master/users`
  - `/admin/data-master/pembayaran/dashboard`
- Path lama tetap boleh hidup sementara sebagai redirect kompatibilitas:
  - `/admin/data`
  - `/admin/datauser`
  - `/admin/dashboardpembayaran`

## 3) Boundary shared vs role

Masuk `src/shared` jika:

- Dipakai minimal 2 role.
- Tidak mengandung aturan bisnis role spesifik.

Tetap di `src/features/<role>` jika:

- Bergantung izin/hak akses role tertentu.
- Memanggil API atau mapper role tertentu.

## 4) Layout backoffice

- Gunakan `src/app/layouts/BackofficeLayout.jsx` sebagai shell dasar.
- `AdminLayout` dan `SuperadminLayout` hanya mengatur varian:
  - komponen sidebar/topbar/footer
  - class/style khusus role

## 5) Topbar dan notifikasi

- Gunakan `BackofficeTopbar` di `src/shared/ui/backoffice-topbar.jsx`.
- Gunakan dropdown notifikasi shared di `src/shared/ui/backoffice-notification-dropdown.jsx`.
- Komponen role boleh menjadi wrapper data-fetching.

## 6) Status refactor saat ini

- `AdminLayout` dan `SuperadminLayout` sudah memakai `BackofficeLayout`.
- Topbar `admin` dan `superadmin` sudah memakai `BackofficeTopbar`.
- Sidebar `admin` dan `superadmin` sudah memakai `BackofficeSidebar`.
- `NotificationDropdown` `superadmin` menjadi re-export ke shared.
- Implementasi utama halaman `admin` sudah dipindah ke nama netral.
- File lama `*Admin.jsx` tetap tersedia sebagai wrapper re-export.
