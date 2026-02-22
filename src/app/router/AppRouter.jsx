import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import RoleGuard from "@/app/router/RoleGuard";
import { ACCESS_POLICY } from "@/app/router/accessPolicy";
import PublicLayout from "@/app/layouts/PublicLayout";
import AdminLayout from "@/app/layouts/AdminLayout";
import SuperadminLayout from "@/app/layouts/SuperadminLayout";

import Home from "@/features/public/pages/Home";
import About from "@/features/public/pages/About";
import Services from "@/features/public/pages/Services";
import Paket from "@/features/public/pages/Paket";
import Contact from "@/features/public/pages/Contact";

import DashboardAdmin from "@/features/admin/pages/DashboardAdmin";
import PesananAdmin from "@/features/admin/pages/PesananAdmin";
import DetailPesananAdmin from "@/features/admin/pages/DetailPesananAdmin";
import PembayaranAdmin from "@/features/admin/pages/PembayaranAdmin";
import LogNotifikasiAdmin from "@/features/admin/pages/LogNotifikasiAdmin";
import PengaturanAdmin from "@/features/admin/pages/PengaturanAdmin";

import Data from "@/pages/data-master/DashboardData";
import DataHewan from "@/pages/data-master/kandang/DataHewan";
import DataKandang from "@/pages/data-master/kandang/DataKandang";
import DataDapur from "@/pages/data-master/dapur/DataDapur";
import DataMenu from "@/pages/data-master/dapur/DataMenu";
import DataPaket from "@/pages/data-master/dapur/DataPaket";
import DataUser from "@/pages/data-master/DashboardUsers";
import DataPetugasDapur from "@/pages/data-master/petugas/dapur/DataPetugasDapur";
import DataPetugasKurir from "@/pages/data-master/petugas/kurir/DataPetugasKurir";
import DataKonsumen from "@/pages/data-master/konsumen/DataKonsumen";
import DataPembayaranDashboard from "@/pages/data-master/DashboardPembayaran";
import DataPengajuan from "@/pages/data-master/pembayaran/DataPengajuan";
import DataInvoice from "@/pages/data-master/pembayaran/DataInvoice";
import DataPembayaran from "@/pages/data-master/pembayaran/DataPembayaran";
import DashboardLaporan from "@/pages/data-master/DashboardLaporan";

import Dashboard from "@/features/superadmin/pages/Dashboard";
import DataMaster from "@/features/superadmin/pages/DataMaster";
import Users from "@/features/superadmin/pages/Users";
import Monitoring from "@/features/superadmin/pages/Monitoring";
import Laporan from "@/features/superadmin/pages/Laporan";
import Pengaturan from "@/features/superadmin/pages/Pengaturan";
import Notifikasi from "@/features/superadmin/pages/Notifikasi";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/tentang" element={<About />} />
          <Route path="/layanan" element={<Services />} />
          <Route path="/paket" element={<Paket />} />
          <Route path="/kontak" element={<Contact />} />
        </Route>

        <Route element={<RoleGuard allowedRoles={ACCESS_POLICY.superadmin} />}>
          <Route path="/superadmin" element={<SuperadminLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="data-master" element={<DataMaster />} />
            <Route path="users" element={<Users />} />
            <Route path="monitoring" element={<Monitoring />} />
            <Route path="laporan" element={<Laporan />} />
            <Route path="pengaturan" element={<Pengaturan />} />
            <Route path="notifikasi" element={<Notifikasi />} />
          </Route>
        </Route>

        <Route element={<RoleGuard allowedRoles={ACCESS_POLICY.admin} />}>
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<DashboardAdmin />} />
            <Route path="pesanan" element={<PesananAdmin />} />
            <Route path="pesanan/:id" element={<DetailPesananAdmin />} />
            <Route path="pembayaran" element={<PembayaranAdmin />} />
            <Route path="data" element={<Data />} />
            <Route path="data-master/hewan" element={<DataHewan />} />
            <Route path="data-master/kandang" element={<DataKandang />} />
            <Route path="data-master/dapur" element={<DataDapur />} />
            <Route path="data-master/menu" element={<DataMenu />} />
            <Route path="data-master/paket" element={<DataPaket />} />
            <Route path="datauser" element={<DataUser />} />
            <Route path="data-master/petugas/dapur" element={<DataPetugasDapur />} />
            <Route path="data-master/petugas/kurir" element={<DataPetugasKurir />} />
            <Route path="data-master/konsumen" element={<DataKonsumen />} />
            <Route path="dashboardpembayaran" element={<DataPembayaranDashboard />} />
            <Route path="pembayaran/pengajuan" element={<DataPengajuan />} />
            <Route path="pembayaran/invoice" element={<DataInvoice />} />
            <Route path="pembayaran/data" element={<DataPembayaran />} />
            <Route path="laporan" element={<DashboardLaporan />} />
            <Route path="notifikasi" element={<LogNotifikasiAdmin />} />
            <Route path="notifikasiadmin" element={<Navigate to="/admin/notifikasi" replace />} />
            <Route path="Notifikasiadmin" element={<Navigate to="/admin/notifikasi" replace />} />
            <Route path="pengaturan" element={<PengaturanAdmin />} />
          </Route>
        </Route>

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
