import { Outlet } from "react-router-dom";
import SidebarAdmin from "@/features/admin/ui/SidebarAdmin";
import TopbarAdmin from "@/features/admin/ui/TopbarAdmin";

export default function AdminLayout() {
  return (
    <div className="bg-[#fdfbf8] min-h-screen">
      <SidebarAdmin />
      <div className="flex flex-col min-h-screen lg:pl-64 transition-all duration-300">
        <TopbarAdmin />
        <main className="flex-1 overflow-y-auto p-5 md:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
