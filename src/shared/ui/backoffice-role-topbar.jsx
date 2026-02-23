import BackofficeTopbar from "@/shared/ui/backoffice-topbar";
import { useAsyncData } from "@/shared/hooks";
import { BACKOFFICE_ROLE_UI } from "@/shared/config/backoffice";
import {
  fetchSuperadminProfile,
  fetchTopbarNotifications,
} from "@/features/superadmin/api/superadminApi";

export default function BackofficeRoleTopbar({ role = "admin" }) {
  const roleUi = BACKOFFICE_ROLE_UI[role] ?? BACKOFFICE_ROLE_UI.admin;
  const isSuperadmin = role === "superadmin";
  const adminFallback = BACKOFFICE_ROLE_UI.admin.topbar;

  const { data: superadminProfile } = useAsyncData(fetchSuperadminProfile, {
    immediate: isSuperadmin,
    initialData: BACKOFFICE_ROLE_UI.superadmin.topbar.initialProfile,
  });
  const { data: superadminNotifications } = useAsyncData(fetchTopbarNotifications, {
    immediate: isSuperadmin,
    initialData: BACKOFFICE_ROLE_UI.superadmin.topbar.notifications,
  });

  const profile = isSuperadmin ? superadminProfile : adminFallback.initialProfile;
  const notifications = isSuperadmin
    ? superadminNotifications
    : adminFallback.notifications;
  const notificationCount = isSuperadmin
    ? undefined
    : adminFallback.notificationCount;

  return (
    <BackofficeTopbar
      panelRole={roleUi.panelRole}
      profile={profile}
      notificationCount={notificationCount}
      notifications={notifications}
    />
  );
}
