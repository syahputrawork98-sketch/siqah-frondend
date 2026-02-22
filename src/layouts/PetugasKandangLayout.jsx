
// client/src/layouts/PetugasKandangLayout.jsx
import SidebarPetugasKandang from "../components/petugas/kandang/SidebarPetugasKandang";
import TopbarPetugasKandang from "../components/petugas/kandang/TopbarPetugasKandang";
import { Outlet } from "react-router-dom";

export default function PetugasKandangLayout() {
  return (
    <div className="bg-[#fdfbf8] min-h-screen">
      {/* Sidebar */}
      <SidebarPetugasKandang />

      {/* Area konten utama */}
      <div className="flex flex-col min-h-screen lg:pl-64 transition-all duration-300">
        {/* Topbar */}
        <TopbarPetugasKandang />

        {/* Konten halaman */}
        <main className="flex-1 overflow-y-auto p-5 md:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
