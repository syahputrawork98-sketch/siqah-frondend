import {
  normalizeAdminProfile,
  normalizeDashboardData,
  normalizeNotificationList,
  normalizeOrderDetail,
  normalizePaymentList,
} from "@/features/admin/model/adminDataMappers";
import dashboardMock from "@/shared/mocks/admin/dashboard.json";
import orderDetailMock from "@/shared/mocks/admin/order-detail.json";
import paymentsMock from "@/shared/mocks/admin/payments.json";
import notificationsMock from "@/shared/mocks/admin/notifications.json";
import adminProfileMock from "@/shared/mocks/admin/profile.json";

const wait = (ms = 200) => new Promise((resolve) => setTimeout(resolve, ms));

export async function getMockDashboardData() {
  await wait();
  return normalizeDashboardData(dashboardMock);
}

export async function getMockPayments() {
  await wait();
  return normalizePaymentList(paymentsMock);
}

export async function getMockNotifications() {
  await wait();
  return normalizeNotificationList(notificationsMock);
}

export async function getMockOrderDetail(orderId) {
  await wait();
  return normalizeOrderDetail({
    ...orderDetailMock,
    id: orderId || orderDetailMock.id,
  });
}

export async function getMockAdminProfile() {
  await wait();
  return normalizeAdminProfile(adminProfileMock);
}
