import { useMemo } from "react";
import { useAsyncData } from "@/shared/hooks";
import { BACKOFFICE_ROLE_UI } from "@/shared/config/backoffice";
import {
  fetchSuperadminProfile,
  fetchTopbarNotifications,
} from "@/features/superadmin/api/superadminApi";

export function useSuperadminTopbarData({ enabled = true } = {}) {
  const fallback = BACKOFFICE_ROLE_UI.superadmin.topbar;

  const { data: profileData } = useAsyncData(fetchSuperadminProfile, {
    immediate: enabled,
    initialData: fallback.initialProfile,
  });

  const { data: notificationsData } = useAsyncData(fetchTopbarNotifications, {
    immediate: enabled,
    initialData: fallback.notifications,
  });

  const profile = useMemo(() => {
    const source = profileData ?? {};
    return {
      name: source.name ?? fallback.initialProfile.name,
      email: source.email ?? fallback.initialProfile.email,
      avatar: source.avatar ?? fallback.initialProfile.avatar,
    };
  }, [fallback.initialProfile, profileData]);

  const notifications = useMemo(() => {
    const list = Array.isArray(notificationsData) ? notificationsData : [];
    return list.map((item, index) => ({
      id: item.id ?? `superadmin-topbar-${index}`,
      title: item.title ?? "-",
      message: item.message ?? "-",
    }));
  }, [notificationsData]);

  return {
    profile,
    notifications,
    notificationCount: notifications.length,
  };
}
