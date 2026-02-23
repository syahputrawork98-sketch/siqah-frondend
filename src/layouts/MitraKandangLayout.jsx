import SidebarMitraKandang from "../components/mitra/kandang/SidebarMitraKandang";
import TopbarMitraKandang from "../components/mitra/kandang/TopbarMitraKandang";
import { Outlet } from "react-router-dom";

export default function MitraKandangLayout() {
  return (
    <div className="bg-[#fdfbf8] min-h-screen">
      {/* Sidebar */}
      <SidebarMitraKandang />

      {/* Area konten utama */}
      <div className="flex flex-col min-h-screen lg:pl-64 transition-all duration-300">
        {/* Topbar */}
        <TopbarMitraKandang />

        {/* Konten halaman */}
        <main className="flex-1 overflow-y-auto p-5 md:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}


