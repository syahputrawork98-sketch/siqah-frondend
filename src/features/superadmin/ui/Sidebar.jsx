import { NavLink, useLocation } from "react-router-dom";
import { useState } from "react";
import {
  LayoutDashboard,
  Users,
  Database,
  ClipboardList,
  BarChart3,
  Settings,
  Menu,
  X,
  Bell,
} from "lucide-react";
import { getCurrentYear } from "@/shared/lib";

const menuItems = [
  { name: "Dashboard", icon: LayoutDashboard, path: "/superadmin" },
  { name: "Data Master", icon: Database, path: "/superadmin/data-master" },
  { name: "Manajemen User", icon: Users, path: "/superadmin/users" },
  { name: "Monitoring", icon: ClipboardList, path: "/superadmin/monitoring" },
  { name: "Laporan", icon: BarChart3, path: "/superadmin/laporan" },
  { name: "Pengaturan", icon: Settings, path: "/superadmin/pengaturan" },
  { name: "Notifikasi & Log", icon: Bell, path: "/superadmin/notifikasi"  },
];

export default function Sidebar() {
  const location = useLocation();
  const [open, setOpen] = useState(true);

  return (
    <>
      {/* Overlay untuk mobile */}
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
        siqah-sidebar-shell flex flex-col`}
      >
        {/* Header */}
        <div className="siqah-sidebar-header flex items-center justify-between p-5">
          <h1 className="text-lg font-semibold text-[#3b3b3b] tracking-wide">
            <span className="siqah-accent-text font-bold">Siqah</span> Superadmin
          </h1>
          <button
            className="lg:hidden siqah-icon-button"
            onClick={() => setOpen(false)}
          >
            <X size={20} className="text-[#3b3b3b]" />
          </button>
        </div>

        {/* Menu */}
        <nav className="flex-1 overflow-y-auto p-4 space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;

            return (
              <NavLink
                key={item.name}
                to={item.path}
                className={`flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium
                  ${
                    isActive
                      ? "siqah-nav-item-active"
                      : "siqah-nav-item"
                  }`}
              >
                <Icon size={18} />
                {item.name}
              </NavLink>
            );
          })}
        </nav>

        {/* Footer kecil di sidebar */}
        <div className="siqah-sidebar-footer p-4 text-xs text-center">
          (c) {getCurrentYear()} <span className="font-semibold">Siqah Aqiqah</span>
        </div>
      </aside>

      {/* Tombol buka sidebar di layar kecil */}
      <button
        className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-md shadow-md border border-[#e7e1d8] siqah-sidebar-shell"
        onClick={() => setOpen(true)}
      >
        <Menu size={20} className="text-[#3b3b3b]" />
      </button>
    </>
  );
}


