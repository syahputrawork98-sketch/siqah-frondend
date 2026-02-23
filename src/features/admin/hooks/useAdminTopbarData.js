import { useMemo } from "react";
import { useAsyncData } from "@/shared/hooks";
import { BACKOFFICE_ROLE_UI } from "@/shared/config/backoffice";
import {
  fetchAdminNotifications,
  fetchAdminProfile,
} from "@/features/admin/api/adminApi";

export function useAdminTopbarData({ enabled = true } = {}) {
  const fallback = BACKOFFICE_ROLE_UI.admin.topbar;

  const { data: profileData } = useAsyncData(fetchAdminProfile, {
    immediate: enabled,
    initialData: fallback.initialProfile,
  });

  const { data: notificationsData } = useAsyncData(fetchAdminNotifications, {
    immediate: enabled,
    initialData: fallback.notifications,
  });

  const profile = useMemo(() => {
    const source = profileData ?? {};
    return {
      name: source.name ?? source.nama_admin ?? fallback.initialProfile.name,
      email: source.email ?? fallback.initialProfile.email,
      avatar: source.avatar ?? source.foto ?? fallback.initialProfile.avatar,
    };
  }, [fallback.initialProfile, profileData]);

  const notifications = useMemo(() => {
    const list = Array.isArray(notificationsData) ? notificationsData : [];
    return list.map((item, index) => ({
      id: item.id ?? `admin-topbar-${index}`,
      title: item.title ?? item.judul ?? "-",
      message: item.message ?? item.pesan ?? "-",
    }));
  }, [notificationsData]);

  return {
    profile,
    notifications,
    notificationCount: notifications.length,
  };
}
