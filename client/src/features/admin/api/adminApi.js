import { runtimeConfig } from "@/shared/config";
import { httpRequest } from "@/shared/api";
import {
  normalizeAdminProfile,
  normalizeDashboardData,
  normalizeNotificationList,
  normalizeOrderDetail,
  normalizePaymentList,
} from "@/features/admin/model/adminDataMappers";
import {
  getMockAdminProfile,
  getMockDashboardData,
  getMockNotifications,
  getMockOrderDetail,
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

export async function fetchAdminOrderDetail(orderId) {
  if (runtimeConfig.enableMock) {
    return getMockOrderDetail(orderId);
  }

  const response = await httpRequest(`/admin/orders/${orderId}`);
  return normalizeOrderDetail(response);
}

export async function fetchAdminProfile() {
  if (runtimeConfig.enableMock) {
    return getMockAdminProfile();
  }

  const response = await httpRequest("/admin/profile");
  return normalizeAdminProfile(response);
}
