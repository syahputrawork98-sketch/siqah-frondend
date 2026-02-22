import { NavLink, useLocation } from "react-router-dom";
import { useState } from "react";
import {
  LayoutDashboard,
  Package,
  CreditCard,
  Database,
  Users,
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
  { name: "Dashboard", icon: LayoutDashboard, path: "/admin" },
  { name: "Pesanan", icon: Package, path: "/admin/pesanan" },
  {
    name: "Data Master",
    icon: Database,
    children: [
      { name: "Dashboard Data", path: "/admin/data" },
      { name: "Data Kandang", path: "/admin/data-master/kandang" },
      { name: "Data Hewan", path: "/admin/data-master/hewan" },
      { name: "Data Dapur", path: "/admin/data-master/dapur" },
      { name: "Data Paket", path: "/admin/data-master/paket" },
      { name: "Data Menu", path: "/admin/data-master/menu" },
    ],
  },
  {
    name: "Pembayaran",
    icon: CreditCard,
    children: [
      { name: "Dashboard Pembayaran", path: "/admin/dashboardpembayaran" },
      { name: "Data Pengajuan", path: "/admin/pembayaran/pengajuan" },
      { name: "Data Invoice", path: "/admin/pembayaran/invoice" },
      { name: "Data Pembayaran", path: "/admin/pembayaran/data" },
    ],
  },
  {
    name: "Manajemen User",
    icon: Users,
    children: [
      { name: "Dashboard User", path: "/admin/datauser" },
      { name: "Data Petugas Dapur", path: "/admin/data-master/petugas/dapur" },
      { name: "Data Kurir", path: "/admin/data-master/petugas/kurir" },
      { name: "Data konsumen", path: "/admin/data-master/konsumen" },
    ],
  },
  { name: "Laporan", icon: BarChart3, path: "/admin/laporan" },
  { name: "Notifikasi", icon: Bell, path: "/admin/notifikasi" },
  { name: "Pengaturan", icon: Settings, path: "/admin/pengaturan" },
];

export default function SidebarAdmin() {
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
        siqah-sidebar-shell flex flex-col`}
      >
        {/* Header */}
        <div className="siqah-sidebar-header flex items-center justify-between p-5">
          <h1 className="text-lg font-semibold text-[#3b3b3b] tracking-wide">
            <span className="siqah-accent-text font-bold">Siqah</span> Admin
          </h1>
          <button
            className="lg:hidden siqah-icon-button"
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
                    className={`w-full flex items-center justify-between px-4 py-2.5 rounded-lg text-sm font-medium ${
                      isExpanded ? "siqah-nav-item-active" : "siqah-nav-item"
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
                          className={`block px-3 py-1.5 rounded-md text-sm ${
                            activeChild
                              ? "siqah-nav-item-active"
                              : "siqah-nav-item text-[#4a463d]"
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

        {/* Footer */}
        <div className="siqah-sidebar-footer p-4 text-xs text-center">
          (c) {getCurrentYear()}{" "}
          <span className="font-semibold">Siqah Aqiqah</span>
        </div>
      </aside>

      {/* Tombol buka sidebar (mobile) */}
      <button
        className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-md shadow-md border border-[#e7e1d8] siqah-sidebar-shell"
        onClick={() => setOpen(true)}
      >
        <Menu size={20} className="text-[#3b3b3b]" />
      </button>
    </>
  );
}


