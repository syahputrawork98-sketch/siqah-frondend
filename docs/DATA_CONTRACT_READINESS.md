# Data Contract Readiness (B2-5)

Status: selesai untuk scope Batch 2 role aktif (`admin`, `superadmin`, `public`) pada 2026-02-23.

## Kontrak Global API

- Base URL: `VITE_API_BASE_URL` (default `http://localhost:8000/api`).
- Mock switch: `VITE_ENABLE_MOCK=true|false`.
- Request client: `src/shared/api/httpClient.js`.
- Header default: `Accept: application/json`.
- Body JSON otomatis diberi `Content-Type: application/json` (kecuali `FormData`).
- Query: hanya value non kosong yang dikirim.
- Sukses: frontend menerima bentuk `raw` atau envelope `{ data: ... }`.
- Error: non-2xx melempar `ApiError` dengan bentuk:
  - `message: string`
  - `status: number`
  - `data: any` (payload error asli)

## Modul Public

- Endpoint aktif: belum ada.
- Catatan: halaman public masih berbasis static content lokal, belum memakai service layer API.

## Modul Admin

Service file: `src/features/admin/api/adminApi.js`

| Service function | Method | Endpoint final | Kontrak sukses minimal (setelah normalisasi) | Sumber mock saat ini | Skenario transisi mock -> API riil |
| --- | --- | --- | --- | --- | --- |
| `fetchAdminDashboardData` | `GET` | `/admin/dashboard` | `{ totalPesanan:number, pesananDiproses:number, pesananSelesai:number, pembayaranMenunggu:number, pesananTerbaru:Array<{ id,nama,tanggal,status }> }` | `src/shared/mocks/admin/dashboard.json` via `getMockDashboardData()` | 1) Backend kirim field canonical di atas (boleh tetap dalam `data`). 2) UAT dengan `VITE_ENABLE_MOCK=false`. 3) Jika stabil, hentikan update file mock dashboard. |
| `fetchAdminPayments` | `GET` | `/admin/payments` | `Array<{ id,konsumen,tanggal,jumlah:number,status,buktiUrl|null }>` | `src/shared/mocks/admin/payments.json` via `getMockPayments()` | 1) Samakan enum status pembayaran backend dengan UI. 2) Validasi daftar kosong/error state. 3) Bekukan mock pembayaran setelah parity. |
| `fetchAdminNotifications` | `GET` | `/admin/notifications` | `Array<{ id,judul,pesan,tipe,waktu,status_baca:boolean }>` | `src/shared/mocks/admin/notifications.json` via `getMockNotifications()` | 1) Pastikan `id` stabil dan unik. 2) Pastikan timezone `waktu` konsisten. 3) Nonaktifkan fallback mock endpoint ini saat backend ready. |
| `fetchAdminOrderDetail(orderId)` | `GET` | `/admin/orders/{orderId}` | `{ id,tanggal,total:number,status,konsumen:{ nama,telepon,alamat },pembayaran:{ status,metode,bukti },progress:Array<{ tahap,mitra,waktu,foto }> }` | `src/shared/mocks/admin/order-detail.json` via `getMockOrderDetail(orderId)` | 1) Uji order valid/tidak ditemukan. 2) Cocokkan nested object + progress timeline. 3) Tambah monitoring error 404 agar UX fallback jelas. |
| `fetchAdminProfile` | `GET` | `/admin/profile` | `{ username,email,nama_admin,no_telp,alamat,foto }` | `src/shared/mocks/admin/profile.json` via `getMockAdminProfile()` | 1) Map `nama_admin/no_telp` backend bila snake/camel berubah. 2) Uji avatar null/invalid URL. 3) Bekukan mock profile setelah parity. |

## Modul Superadmin

Service file: `src/features/superadmin/api/superadminApi.js`

| Service function | Method | Endpoint final | Kontrak sukses minimal (setelah normalisasi) | Sumber mock saat ini | Skenario transisi mock -> API riil |
| --- | --- | --- | --- | --- | --- |
| `fetchSuperadminDashboard` | `GET` | `/superadmin/dashboard` | `{ totalUsers:number,totalOrders:number,waitingPayments:number,totalRevenue:number,newNotifications:number }` | `src/shared/mocks/superadmin/dashboard.json` | 1) Sinkron tipe numerik. 2) Uji data nol. 3) Lepas mock dashboard. |
| `fetchSuperadminProfile` | `GET` | `/superadmin/profile` | `{ name,email,avatar }` | `src/shared/mocks/superadmin/topbar-profile.json` | 1) Validasi fallback avatar kosong. 2) Lepas mock profile. |
| `fetchTopbarNotifications` | `GET` | `/superadmin/topbar-notifications` | `Array<{ id,title,message }>` | `src/shared/mocks/superadmin/topbar-notifications.json` | 1) Pastikan urutan terbaru-pertama. 2) Lepas mock topbar notification. |
| `fetchMonitoringOrders` | `GET` | `/superadmin/monitoring/orders` | `Array<{ id,konsumen,paket,tanggal,status,catering,kurir }>` | `src/shared/mocks/superadmin/monitoring-orders.json` | 1) Sinkron enum status lintas mitra. 2) Lepas mock monitoring. |
| `fetchReports` | `GET` | `/superadmin/reports` | `Array<{ id,tanggal,konsumen,total:number,status }>` | `src/shared/mocks/superadmin/reports.json` | 1) Pastikan format tanggal. 2) Lepas mock reports list. |
| `fetchReportChart` | `GET` | `/superadmin/reports/chart` | `Array<{ bulan,total:number }>` | `src/shared/mocks/superadmin/report-chart.json` | 1) Tetapkan granularitas periode (bulanan). 2) Lepas mock chart. |
| `fetchSystemNotifications` | `GET` | `/superadmin/notifications` | `Array<{ id,pesan,waktu,status }>` | `src/shared/mocks/superadmin/notifications.json` | 1) Sinkron status baca. 2) Lepas mock notifikasi sistem. |
| `fetchActivityLogs` | `GET` | `/superadmin/activity-logs` | `Array<{ id,aksi,user,waktu,keterangan }>` | `src/shared/mocks/superadmin/activity-logs.json` | 1) Uji paging bila data besar. 2) Lepas mock logs. |
| `fetchUsers` | `GET` | `/superadmin/users` | `Array<{ id,nama,email,role }>` | `src/shared/mocks/superadmin/users.json` | 1) Sinkron role enum dengan policy akses. 2) Lepas mock users. |
| `fetchDataMaster` | `GET` | `/superadmin/data-master` | `{ hewan:Array<{ id,jenis_hewan,jenis_kelamin,harga_final:number }>, menu:Array<{ id,nama_menu,kategori_menu }>, paket:Array<{ id,nama_paket,deskripsi,harga_paket:number }> }` | `src/shared/mocks/superadmin/data-master.json` | 1) Validasi struktur object bertingkat (bukan flat list). 2) Lepas mock data-master. |
| `fetchRoles` | `GET` | `/superadmin/roles` | `Array<{ id,nama_role,deskripsi }>` | `src/shared/mocks/superadmin/roles.json` | 1) Sinkron role master dengan backend ACL. 2) Lepas mock roles. |
| `fetchSettingsProfile` | `GET` | `/superadmin/settings/profile` | `{ nama,email,role,avatar }` | `src/shared/mocks/superadmin/settings-profile.json` | 1) Uji update tampilan profil saat data parsial. 2) Lepas mock settings profile. |

## Runbook Transisi Bertahap

1. Tetapkan endpoint per modul dengan status `READY` dari backend dan lock schema canonical.
2. Uji setiap endpoint secara terpisah dengan `VITE_ENABLE_MOCK=false` di environment dev.
3. Pertahankan normalizer sebagai compatibility layer selama backend stabilisasi.
4. Tambahkan regresi test mapper saat ditemukan gap field/tipe dari backend.
5. Setelah endpoint stabil 2 sprint, hapus dependency JSON mock endpoint terkait dari `mock*Api.js`.
6. Setelah semua endpoint siap, nonaktifkan mode mock sebagai default (`VITE_ENABLE_MOCK=false`).



