import { NavLink, useLocation } from "react-router-dom";
import { useState } from "react";
import {
  LayoutDashboard,
  ClipboardList,
  PawPrint,
  Bell,
  Settings,
  Menu,
  X,
  ChevronDown,
  ChevronRight,
  BarChart3,
} from "lucide-react";
import { getCurrentYear } from "@/shared/lib";

const menuItems = [
  { name: "Dashboard", icon: LayoutDashboard, path: "/mitra-kandang" },
  {
    name: "Tugas Kandang",
    icon: ClipboardList,
    children: [
      { name: "Daftar Tugas", path: "/mitra-kandang/tugas" },
    ],
  },
  {
    name: "Data Hewan",
    icon: PawPrint,
    children: [
      { name: "Hewan Tersedia", path: "/mitra-kandang/hewan" },
    ],
  },
  { name: "Laporan", icon: BarChart3, path: "/mitra-kandang/laporan" },
  { name: "Notifikasi", icon: Bell, path: "/mitra-kandang/notifikasi" },
  { name: "Pengaturan", icon: Settings, path: "/mitra-kandang/pengaturan" },
];

export default function SidebarMitraKandang() {
  const location = useLocation();
  const [open, setOpen] = useState(true);
  const [expanded, setExpanded] = useState({});

  const toggleExpand = (name) => {
    setExpanded((prev) => ({ ...prev, [name]: !prev[name] }));
  };

  return (
    <>
      {/* Overlay (mobile) */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 bg-black/40 z-30 lg:hidden transition-opacity ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      ></div>

      {/* Sidebar */}
      <aside
        className={`fixed z-40 top-0 left-0 h-full w-64 transform transition-transform duration-300 lg:translate-x-0
        ${open ? "translate-x-0" : "-translate-x-full"}
        bg-white/90 backdrop-blur-md border-r border-[#e7e1d8] shadow-[0_4px_12px_rgba(0,0,0,0.04)] flex flex-col`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-5 border-b border-[#eee6da] bg-gradient-to-r from-[#fefbf7] to-[#f9f6ef]">
          <h1 className="text-lg font-semibold text-[#3b3b3b] tracking-wide">
            <span className="text-[#e2b97f] font-bold">Siqah</span> Kandang
          </h1>
          <button
            className="lg:hidden p-2 rounded hover:bg-[#f9f6ef]"
            onClick={() => setOpen(false)}
          >
            <X size={20} className="text-[#3b3b3b]" />
          </button>
        </div>

        {/* Menu navigasi */}
        <nav className="flex-1 overflow-y-auto p-4 space-y-1">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;

            if (item.children) {
              const isExpanded = expanded[item.name];
              return (
                <div key={item.name}>
                  <button
                    onClick={() => toggleExpand(item.name)}
                    className={`w-full flex items-center justify-between px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${
                      isExpanded
                        ? "bg-[#e2b97f]/90 text-white shadow-sm"
                        : "text-[#3b3b3b] hover:bg-[#f9f6ef] hover:text-[#e2b97f]"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Icon size={18} />
                      {item.name}
                    </div>
                    {isExpanded ? (
                      <ChevronDown size={16} />
                    ) : (
                      <ChevronRight size={16} />
                    )}
                  </button>

                  <div
                    className={`ml-8 mt-1 space-y-1 overflow-hidden transition-all duration-300 ${
                      isExpanded ? "max-h-96" : "max-h-0"
                    }`}
                  >
                    {item.children.map((child) => {
                      const activeChild = location.pathname === child.path;
                      return (
                        <NavLink
                          key={child.name}
                          to={child.path}
                          className={`block px-3 py-1.5 rounded-md text-sm transition ${
                            activeChild
                              ? "bg-[#e2b97f]/80 text-white"
                              : "text-[#4a463d] hover:bg-[#f9f6ef] hover:text-[#e2b97f]"
                          }`}
                        >
                          {child.name}
                        </NavLink>
                      );
                    })}
                  </div>
                </div>
              );
            }

            return (
              <NavLink
                key={item.name}
                to={item.path}
                className={`flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium transition-all
                  ${
                    isActive
                      ? "bg-[#e2b97f]/90 text-white shadow-sm"
                      : "text-[#3b3b3b] hover:bg-[#f9f6ef] hover:text-[#e2b97f]"
                  }`}
              >
                <Icon size={18} />
                {item.name}
              </NavLink>
            );
          })}
        </nav>

        {/* Footer */}
        <div className="p-4 border-t border-[#eee6da] text-xs text-[#7a7368] bg-white/60 text-center">
          © {getCurrentYear()}{" "}
          <span className="font-semibold">Siqah Aqiqah</span>
        </div>
      </aside>

      {/* Tombol buka sidebar (mobile) */}
      <button
        className="lg:hidden fixed top-4 left-4 z-50 bg-white/90 backdrop-blur-md p-2 rounded-md shadow-md border border-[#e7e1d8]"
        onClick={() => setOpen(true)}
      >
        <Menu size={20} className="text-[#3b3b3b]" />
      </button>
    </>
  );
}



