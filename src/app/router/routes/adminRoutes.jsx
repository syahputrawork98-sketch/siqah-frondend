import { Navigate } from "react-router-dom";

import DashboardAdmin from "@/features/admin/pages/DashboardAdmin";
import PesananAdmin from "@/features/admin/pages/PesananAdmin";
import DetailPesananAdmin from "@/features/admin/pages/DetailPesananAdmin";
import PembayaranAdmin from "@/features/admin/pages/PembayaranAdmin";
import LogNotifikasiAdmin from "@/features/admin/pages/LogNotifikasiAdmin";
import PengaturanAdmin from "@/features/admin/pages/PengaturanAdmin";

import DashboardData from "@/features/admin/pages/data-master/DashboardData";
import DataHewan from "@/features/admin/pages/data-master/kandang/DataHewan";
import DataKandang from "@/features/admin/pages/data-master/kandang/DataKandang";
import DataDapur from "@/features/admin/pages/data-master/dapur/DataDapur";
import DataMenu from "@/features/admin/pages/data-master/dapur/DataMenu";
import DataPaket from "@/features/admin/pages/data-master/dapur/DataPaket";
import DashboardUsers from "@/features/admin/pages/data-master/DashboardUsers";
import DataPetugasDapur from "@/features/admin/pages/data-master/petugas/dapur/DataPetugasDapur";
import DataPetugasKurir from "@/features/admin/pages/data-master/petugas/kurir/DataPetugasKurir";
import DataKonsumen from "@/features/admin/pages/data-master/konsumen/DataKonsumen";
import DashboardPembayaran from "@/features/admin/pages/data-master/DashboardPembayaran";
import DataPengajuan from "@/features/admin/pages/data-master/pembayaran/DataPengajuan";
import DataInvoice from "@/features/admin/pages/data-master/pembayaran/DataInvoice";
import DataPembayaran from "@/features/admin/pages/data-master/pembayaran/DataPembayaran";
import DashboardLaporan from "@/features/admin/pages/data-master/DashboardLaporan";

export const ADMIN_ROUTES = [
  { index: true, element: <DashboardAdmin /> },
  { path: "pesanan", element: <PesananAdmin /> },
  { path: "pesanan/:id", element: <DetailPesananAdmin /> },
  { path: "pembayaran", element: <PembayaranAdmin /> },
  { path: "data", element: <DashboardData /> },
  { path: "data-master/hewan", element: <DataHewan /> },
  { path: "data-master/kandang", element: <DataKandang /> },
  { path: "data-master/dapur", element: <DataDapur /> },
  { path: "data-master/menu", element: <DataMenu /> },
  { path: "data-master/paket", element: <DataPaket /> },
  { path: "datauser", element: <DashboardUsers /> },
  { path: "data-master/petugas/dapur", element: <DataPetugasDapur /> },
  { path: "data-master/petugas/kurir", element: <DataPetugasKurir /> },
  { path: "data-master/konsumen", element: <DataKonsumen /> },
  { path: "dashboardpembayaran", element: <DashboardPembayaran /> },
  { path: "pembayaran/pengajuan", element: <DataPengajuan /> },
  { path: "pembayaran/invoice", element: <DataInvoice /> },
  { path: "pembayaran/data", element: <DataPembayaran /> },
  { path: "laporan", element: <DashboardLaporan /> },
  { path: "notifikasi", element: <LogNotifikasiAdmin /> },
  { path: "notifikasiadmin", element: <Navigate to="/admin/notifikasi" replace /> },
  { path: "Notifikasiadmin", element: <Navigate to="/admin/notifikasi" replace /> },
  { path: "pengaturan", element: <PengaturanAdmin /> },
];
