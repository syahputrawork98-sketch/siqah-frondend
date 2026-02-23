import BackofficeTopbar from "@/shared/ui/backoffice-topbar";
import { BACKOFFICE_ROLE_UI } from "@/shared/config/backoffice";
import { useAdminTopbarData } from "@/features/admin/hooks/useAdminTopbarData";
import { useSuperadminTopbarData } from "@/features/superadmin/hooks/useSuperadminTopbarData";

export default function BackofficeRoleTopbar({ role = "admin" }) {
  const roleUi = BACKOFFICE_ROLE_UI[role] ?? BACKOFFICE_ROLE_UI.admin;
  const isAdmin = role === "admin";
  const isSuperadmin = role === "superadmin";

  const adminTopbar = useAdminTopbarData({ enabled: isAdmin });
  const superadminTopbar = useSuperadminTopbarData({ enabled: isSuperadmin });

  const fallbackTopbar = roleUi.topbar ?? BACKOFFICE_ROLE_UI.admin.topbar;

  const topbarData = isSuperadmin
    ? superadminTopbar
    : isAdmin
    ? adminTopbar
    : {
        profile: fallbackTopbar.initialProfile,
        notifications: fallbackTopbar.notifications,
        notificationCount:
          fallbackTopbar.notificationCount ?? fallbackTopbar.notifications?.length ?? 0,
      };

  return (
    <BackofficeTopbar
      panelRole={roleUi.panelRole}
      profile={topbarData.profile}
      notificationCount={topbarData.notificationCount}
      notifications={topbarData.notifications}
    />
  );
}
