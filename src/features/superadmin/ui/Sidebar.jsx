import {
  LayoutDashboard,
  Users,
  Database,
  ClipboardList,
  BarChart3,
  Settings,
  Bell,
} from "lucide-react";
import { BackofficeSidebar } from "@/shared/ui";

const menuItems = [
  { name: "Dashboard", icon: LayoutDashboard, path: "/superadmin" },
  { name: "Data Master", icon: Database, path: "/superadmin/data-master" },
  { name: "Manajemen User", icon: Users, path: "/superadmin/users" },
  { name: "Monitoring", icon: ClipboardList, path: "/superadmin/monitoring" },
  { name: "Laporan", icon: BarChart3, path: "/superadmin/laporan" },
  { name: "Pengaturan", icon: Settings, path: "/superadmin/pengaturan" },
  { name: "Notifikasi & Log", icon: Bell, path: "/superadmin/notifikasi" },
];

export default function Sidebar() {
  return (
    <BackofficeSidebar
      menuItems={menuItems}
      roleLabel="Superadmin"
      navClassName="space-y-2"
    />
  );
}
