// client/src/App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Layouts
import PublicLayout from "@/app/layouts/PublicLayout";
import SuperadminLayout from "./layouts/SuperadminLayout";
import AdminLayout from "./layouts/AdminLayout";
import PetugasKandangLayout from "./layouts/PetugasKandangLayout";

// admin Pages
import DashboardAdmin from "./pages/admin/DashboardAdmin";
import PesananAdmin from "./pages/admin/PesananAdmin";
import DetailPesananAdmin from "./pages/admin/DetailPesananAdmin";
import PembayaranAdmin from "./pages/admin/PembayaranAdmin";
import LogNotifikasiAdmin from "./pages/admin/LogNotifikasiAdmin";
import PengaturanAdmin from "./pages/admin/PengaturanAdmin";

//Data Master entitas
import Data from "./pages/data-master/DashboardData"; //import
import DataHewan from "./pages/data-master/kandang/DataHewan";
import DataKandang from "./pages/data-master/kandang/DataKandang";
import DataDapur from "./pages/data-master/dapur/DataDapur";
import DataMenu from "./pages/data-master/dapur/DataMenu";
import DataPaket from "./pages/data-master/dapur/DataPaket";

//Data Master User
import DataUser from "./pages/data-master/DashboardUsers"; 
import DataPetugasKandang from "./pages/data-master/petugas/kandang/DataPetugasKandang";
import DataPetugasDapur from "./pages/data-master/petugas/dapur/DataPetugasDapur";
import DataPetugasKurir from "./pages/data-master/petugas/kurir/DataPetugasKurir";
import DataKonsumen from "./pages/data-master/konsumen/DataKonsumen";

//Data Master Pembayaran
import DataPembayaranDashboard from "./pages/data-master/DashboardPembayaran";
import DataPengajuan from "./pages/data-master/pembayaran/DataPengajuan";
import DataInvoice from "./pages/data-master/pembayaran/DataInvoice";
import DataPembayaran from "./pages/data-master/pembayaran/DataPembayaran";

//laporan Master
import DashboardLaporan from "./pages/data-master/DashboardLaporan";



// Petugas Kandang Pages
import DashboardPetugasKandang from "./pages/petugas/kandang/DashboardPetugasKandang";
import DaftarTugasKandang from "./pages/petugas/kandang/DaftarTugasKandang";
import DaftarHewanPetugasKandang from "./pages/petugas/kandang/DaftarHewanPetugasKandang";
import DashboardLaporanPetugasKandang from "./pages/petugas/kandang/DashboardLaporanPetugasKandang";
import LogNotifikasiPetugasKandang from "./pages/petugas/kandang/LogNotifikasiPetugasKandang";
import PengaturanPetugasKandang from "./pages/petugas/kandang/PengaturanPetugasKandang";



// Superadmin Pages
import Dashboard from "./pages/superadmin/Dashboard";
 import DataMaster from "./pages/superadmin/DataMaster";
 import Users from "./pages/superadmin/Users";
 import Monitoring from "./pages/superadmin/Monitoring";
 import Laporan from "./pages/superadmin/Laporan";
 import Pengaturan from "./pages/superadmin/Pengaturan";
 import Notifikasi from "./pages/superadmin/Notifikasi";

// Public Pages
import Home from "@/features/public/pages/Home";
import About from "@/features/public/pages/About";
import Services from "@/features/public/pages/Services";
import Paket from "@/features/public/pages/Paket";
import Contact from "@/features/public/pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* 🔹 ROUTE UNTUK PENGUNJUNG (LAYOUT UMUM) */}
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/tentang" element={<About />} />
          <Route path="/layanan" element={<Services />} />
          <Route path="/paket" element={<Paket />} />
          <Route path="/kontak" element={<Contact />} />
        </Route>

        {/* 🔹 ROUTE UNTUK SUPERADMIN (LAYOUT KHUSUS SUPER ADMIN) */}
        <Route path="/superadmin" element={<SuperadminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="data-master" element={<DataMaster />} />
          <Route path="users" element={<Users />} />
          <Route path="monitoring" element={<Monitoring />} />
          <Route path="laporan" element={<Laporan />} />
          <Route path="pengaturan" element={<Pengaturan />} /> 
          <Route path="notifikasi" element={<Notifikasi />} />
        </Route>

        {/* 🔹 ROUTE UNTUK ADMIN (LAYOUT KHUSUS ADMIN) */}
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
          <Route path="data-master/petugas/kandang" element={<DataPetugasKandang />} />
          <Route path="data-master/petugas/dapur" element={<DataPetugasDapur />} />
          <Route path="data-master/petugas/kurir" element={<DataPetugasKurir />} />
          <Route path="data-master/konsumen" element={<DataKonsumen />} />


          <Route path="dashboardpembayaran" element={<DataPembayaranDashboard />} />
          <Route path="pembayaran/pengajuan" element={<DataPengajuan />} />
          <Route path="pembayaran/invoice" element={<DataInvoice />} />
          <Route path="pembayaran/data" element={<DataPembayaran />} />


          <Route path="laporan" element={<DashboardLaporan />} />

          <Route path="Notifikasiadmin" element={<LogNotifikasiAdmin />} />
          <Route path="pengaturan" element={<PengaturanAdmin />} />           
        </Route>

        {/* 🔹 ROUTE UNTUK PETUGAS KANDANG (LAYOUT KHUSUS PETUGAS KANDANG) */}
        <Route path="/petugas-kandang" element={<PetugasKandangLayout />}>
          <Route index element={<DashboardPetugasKandang />} />
          <Route path="tugas" element={<DaftarTugasKandang />} />
          <Route path="hewan" element={<DaftarHewanPetugasKandang />} />
          

          <Route path="laporan" element={<DashboardLaporanPetugasKandang />} />
          <Route path="notifikasi" element={<LogNotifikasiPetugasKandang />} />
          <Route path="pengaturan" element={<PengaturanPetugasKandang />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;

