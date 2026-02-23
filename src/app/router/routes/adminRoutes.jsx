import { Navigate } from "react-router-dom";

import Dashboard from "@/features/admin/pages/Dashboard";
import Pesanan from "@/features/admin/pages/Pesanan";
import DetailPesanan from "@/features/admin/pages/DetailPesanan";
import Pembayaran from "@/features/admin/pages/Pembayaran";
import Notifikasi from "@/features/admin/pages/Notifikasi";
import Pengaturan from "@/features/admin/pages/Pengaturan";

import DashboardData from "@/features/admin/pages/data-master/DashboardData";
import DataHewan from "@/features/admin/pages/data-master/kandang/DataHewan";
import DataKandang from "@/features/admin/pages/data-master/kandang/DataKandang";
import DataCatering from "@/features/admin/pages/data-master/catering/DataCatering";
import DataMenu from "@/features/admin/pages/data-master/catering/DataMenu";
import DataPaket from "@/features/admin/pages/data-master/catering/DataPaket";
import DashboardUsers from "@/features/admin/pages/data-master/DashboardUsers";
import DataMitraCatering from "@/features/admin/pages/data-master/mitra/catering/DataMitraCatering";
import DataMitraKurir from "@/features/admin/pages/data-master/mitra/kurir/DataMitraKurir";
import DataKonsumen from "@/features/admin/pages/data-master/konsumen/DataKonsumen";
import DashboardPembayaran from "@/features/admin/pages/data-master/DashboardPembayaran";
import DataPengajuan from "@/features/admin/pages/data-master/pembayaran/DataPengajuan";
import DataInvoice from "@/features/admin/pages/data-master/pembayaran/DataInvoice";
import DataPembayaran from "@/features/admin/pages/data-master/pembayaran/DataPembayaran";
import DashboardLaporan from "@/features/admin/pages/data-master/DashboardLaporan";

export const ADMIN_ROUTES = [
  { index: true, element: <Dashboard /> },
  { path: "pesanan", element: <Pesanan /> },
  { path: "pesanan/:id", element: <DetailPesanan /> },
  { path: "pembayaran", element: <Pembayaran /> },
  { path: "data-master/dashboard", element: <DashboardData /> },
  { path: "data-master/hewan", element: <DataHewan /> },
  { path: "data-master/kandang", element: <DataKandang /> },
  { path: "data-master/catering", element: <DataCatering /> },
  { path: "data-master/menu", element: <DataMenu /> },
  { path: "data-master/paket", element: <DataPaket /> },
  { path: "data-master/users", element: <DashboardUsers /> },
  { path: "data-master/mitra/catering", element: <DataMitraCatering /> },
  { path: "data-master/mitra/kurir", element: <DataMitraKurir /> },
  { path: "data-master/konsumen", element: <DataKonsumen /> },
  { path: "data-master/pembayaran/dashboard", element: <DashboardPembayaran /> },
  { path: "pembayaran/pengajuan", element: <DataPengajuan /> },
  { path: "pembayaran/invoice", element: <DataInvoice /> },
  { path: "pembayaran/data", element: <DataPembayaran /> },
  { path: "laporan", element: <DashboardLaporan /> },
  { path: "notifikasi", element: <Notifikasi /> },
  { path: "data", element: <Navigate to="/admin/data-master/dashboard" replace /> },
  { path: "datauser", element: <Navigate to="/admin/data-master/users" replace /> },
  { path: "dashboardpembayaran", element: <Navigate to="/admin/data-master/pembayaran/dashboard" replace /> },
  { path: "notifikasiadmin", element: <Navigate to="/admin/notifikasi" replace /> },
  { path: "Notifikasiadmin", element: <Navigate to="/admin/notifikasi" replace /> },
  { path: "pengaturan", element: <Pengaturan /> },
];


