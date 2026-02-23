import BackofficeLayout from "@/app/layouts/BackofficeLayout";
import { BackofficeRoleSidebar, BackofficeRoleTopbar } from "@/shared/ui";

export default function AdminLayout() {
  return (
    <BackofficeLayout
      sidebar={<BackofficeRoleSidebar role="admin" />}
      topbar={<BackofficeRoleTopbar role="admin" />}
      rootClassName="bg-[#fdfbf8] min-h-screen"
      contentClassName="flex flex-col min-h-screen lg:pl-64 transition-all duration-300"
      mainClassName="flex-1 overflow-y-auto p-5 md:p-8"
    />
  );
}
