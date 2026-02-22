import { Outlet } from "react-router-dom";
import Footer from "@/features/superadmin/ui/Footer";
import Sidebar from "@/features/superadmin/ui/Sidebar";
import Topbar from "@/features/superadmin/ui/Topbar";

export default function SuperadminLayout() {
  return (
    <div
      className="min-h-screen flex text-siqah-dark"
      style={{
        backgroundImage: "linear-gradient(to bottom, #fefbf7, #f9f6ef)",
      }}
    >
      <aside className="fixed left-0 top-0 h-full w-64 z-40 bg-white/90 backdrop-blur-md border-r border-[#e7e1d8] shadow-md">
        <Sidebar />
      </aside>
      <div className="flex flex-col flex-1 ml-64">
        <header className="sticky top-0 z-30 bg-white/80 backdrop-blur-md shadow-sm">
          <Topbar />
        </header>
        <main className="flex-1 p-8 overflow-y-auto">
          <Outlet />
        </main>
        <footer className="bg-white/70 text-center py-4 text-sm border-t border-[#e7e1d8]">
          <Footer />
        </footer>
      </div>
    </div>
  );
}
