// client/src/App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Layouts
import PublicLayout from "@/app/layouts/PublicLayout";
import AdminLayout from "@/app/layouts/AdminLayout";
import SuperadminLayout from "@/app/layouts/SuperadminLayout";

// admin Pages
import DashboardAdmin from "@/features/admin/pages/DashboardAdmin";
import PesananAdmin from "@/features/admin/pages/PesananAdmin";
import DetailPesananAdmin from "@/features/admin/pages/DetailPesananAdmin";
import PembayaranAdmin from "@/features/admin/pages/PembayaranAdmin";
import LogNotifikasiAdmin from "@/features/admin/pages/LogNotifikasiAdmin";
import PengaturanAdmin from "@/features/admin/pages/PengaturanAdmin";

//Data Master entitas
import Data from "./pages/data-master/DashboardData"; //import
import DataHewan from "./pages/data-master/kandang/DataHewan";
import DataKandang from "./pages/data-master/kandang/DataKandang";
import DataDapur from "./pages/data-master/dapur/DataDapur";
import DataMenu from "./pages/data-master/dapur/DataMenu";
import DataPaket from "./pages/data-master/dapur/DataPaket";

//Data Master User
import DataUser from "./pages/data-master/DashboardUsers"; 
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



// Superadmin Pages
import Dashboard from "@/features/superadmin/pages/Dashboard";
 import DataMaster from "@/features/superadmin/pages/DataMaster";
 import Users from "@/features/superadmin/pages/Users";
 import Monitoring from "@/features/superadmin/pages/Monitoring";
 import Laporan from "@/features/superadmin/pages/Laporan";
 import Pengaturan from "@/features/superadmin/pages/Pengaturan";
 import Notifikasi from "@/features/superadmin/pages/Notifikasi";

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

      </Routes>
    </BrowserRouter>
  );
}

export default App;


