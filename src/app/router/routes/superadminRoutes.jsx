import Dashboard from "@/features/superadmin/pages/Dashboard";
import DataMaster from "@/features/superadmin/pages/DataMaster";
import Users from "@/features/superadmin/pages/Users";
import Monitoring from "@/features/superadmin/pages/Monitoring";
import Laporan from "@/features/superadmin/pages/Laporan";
import Pengaturan from "@/features/superadmin/pages/Pengaturan";
import Notifikasi from "@/features/superadmin/pages/Notifikasi";

export const SUPERADMIN_ROUTES = [
  { index: true, element: <Dashboard /> },
  { path: "data-master", element: <DataMaster /> },
  { path: "users", element: <Users /> },
  { path: "monitoring", element: <Monitoring /> },
  { path: "laporan", element: <Laporan /> },
  { path: "pengaturan", element: <Pengaturan /> },
  { path: "notifikasi", element: <Notifikasi /> },
];
