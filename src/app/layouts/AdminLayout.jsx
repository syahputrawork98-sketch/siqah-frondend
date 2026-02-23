import BackofficeLayout from "@/app/layouts/BackofficeLayout";
import Sidebar from "@/features/admin/ui/Sidebar";
import Topbar from "@/features/admin/ui/Topbar";

export default function AdminLayout() {
  return (
    <BackofficeLayout
      sidebar={<Sidebar />}
      topbar={<Topbar />}
      rootClassName="bg-[#fdfbf8] min-h-screen"
      contentClassName="flex flex-col min-h-screen lg:pl-64 transition-all duration-300"
      mainClassName="flex-1 overflow-y-auto p-5 md:p-8"
    />
  );
}
