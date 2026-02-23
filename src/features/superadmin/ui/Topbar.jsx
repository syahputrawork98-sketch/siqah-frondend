import { BackofficeTopbar } from "@/shared/ui";
import { useAsyncData } from "@/shared/hooks";
import {
  fetchSuperadminProfile,
  fetchTopbarNotifications,
} from "@/features/superadmin/api/superadminApi";

export default function Topbar() {
  const { data: profile } = useAsyncData(fetchSuperadminProfile, {
    initialData: { name: "-", email: "-", avatar: "" },
  });
  const { data: notifications } = useAsyncData(fetchTopbarNotifications, {
    initialData: [],
  });

  return (
    <BackofficeTopbar
      panelRole="Superadmin"
      profile={profile}
      notifications={notifications}
    />
  );
}
