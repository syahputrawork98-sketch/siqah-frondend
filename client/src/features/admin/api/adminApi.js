import { runtimeConfig } from "@/shared/config";
import { httpRequest } from "@/shared/api";
import {
  normalizeDashboardData,
  normalizeNotificationList,
  normalizePaymentList,
} from "@/features/admin/model/adminDataMappers";
import {
  getMockDashboardData,
  getMockNotifications,
  getMockPayments,
} from "@/features/admin/api/mockAdminApi";

export async function fetchAdminDashboardData() {
  if (runtimeConfig.enableMock) {
    return getMockDashboardData();
  }

  const response = await httpRequest("/admin/dashboard");
  return normalizeDashboardData(response);
}

export async function fetchAdminPayments() {
  if (runtimeConfig.enableMock) {
    return getMockPayments();
  }

  const response = await httpRequest("/admin/payments");
  return normalizePaymentList(response);
}

export async function fetchAdminNotifications() {
  if (runtimeConfig.enableMock) {
    return getMockNotifications();
  }

  const response = await httpRequest("/admin/notifications");
  return normalizeNotificationList(response);
}

