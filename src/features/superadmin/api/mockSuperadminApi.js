import dashboardMock from "@/shared/mocks/superadmin/dashboard.json";
import topbarProfileMock from "@/shared/mocks/superadmin/topbar-profile.json";
import topbarNotificationsMock from "@/shared/mocks/superadmin/topbar-notifications.json";
import monitoringOrdersMock from "@/shared/mocks/superadmin/monitoring-orders.json";
import reportsMock from "@/shared/mocks/superadmin/reports.json";
import reportChartMock from "@/shared/mocks/superadmin/report-chart.json";
import notificationsMock from "@/shared/mocks/superadmin/notifications.json";
import activityLogsMock from "@/shared/mocks/superadmin/activity-logs.json";
import usersMock from "@/shared/mocks/superadmin/users.json";
import dataMasterMock from "@/shared/mocks/superadmin/data-master.json";
import rolesMock from "@/shared/mocks/superadmin/roles.json";
import settingsProfileMock from "@/shared/mocks/superadmin/settings-profile.json";
import {
  normalizeActivityLogs,
  normalizeDataMaster,
  normalizeMonitoringOrders,
  normalizeReportChart,
  normalizeReports,
  normalizeRoles,
  normalizeSettingsProfile,
  normalizeSuperadminDashboard,
  normalizeSuperadminProfile,
  normalizeSystemNotifications,
  normalizeTopbarNotifications,
  normalizeUsers,
} from "@/features/superadmin/model/superadminDataMappers";

const wait = (ms = 200) => new Promise((resolve) => setTimeout(resolve, ms));

export async function getMockSuperadminDashboard() {
  await wait();
  return normalizeSuperadminDashboard(dashboardMock);
}

export async function getMockSuperadminProfile() {
  await wait();
  return normalizeSuperadminProfile(topbarProfileMock);
}

export async function getMockTopbarNotifications() {
  await wait();
  return normalizeTopbarNotifications(topbarNotificationsMock);
}

export async function getMockMonitoringOrders() {
  await wait();
  return normalizeMonitoringOrders(monitoringOrdersMock);
}

export async function getMockReports() {
  await wait();
  return normalizeReports(reportsMock);
}

export async function getMockReportChart() {
  await wait();
  return normalizeReportChart(reportChartMock);
}

export async function getMockSystemNotifications() {
  await wait();
  return normalizeSystemNotifications(notificationsMock);
}

export async function getMockActivityLogs() {
  await wait();
  return normalizeActivityLogs(activityLogsMock);
}

export async function getMockUsers() {
  await wait();
  return normalizeUsers(usersMock);
}

export async function getMockDataMaster() {
  await wait();
  return normalizeDataMaster(dataMasterMock);
}

export async function getMockRoles() {
  await wait();
  return normalizeRoles(rolesMock);
}

export async function getMockSettingsProfile() {
  await wait();
  return normalizeSettingsProfile(settingsProfileMock);
}

export async function approveMockSuperadminPaymentValidation(paymentId) {
  await wait();
  return {
    id: paymentId,
    status: "Diterima",
    message: "Pembayaran berhasil disetujui oleh superadmin.",
  };
}

export async function rejectMockSuperadminPaymentValidation(paymentId) {
  await wait();
  return {
    id: paymentId,
    status: "Pengajuan",
    message: "Pembayaran ditolak oleh superadmin.",
  };
}
