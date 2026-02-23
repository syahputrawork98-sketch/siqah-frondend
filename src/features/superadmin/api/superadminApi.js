import { runtimeConfig } from "@/shared/config";
import { httpRequest } from "@/shared/api";
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
import {
  getMockActivityLogs,
  getMockDataMaster,
  getMockMonitoringOrders,
  getMockReportChart,
  getMockReports,
  getMockRoles,
  getMockSettingsProfile,
  getMockSuperadminDashboard,
  getMockSuperadminProfile,
  getMockSystemNotifications,
  getMockTopbarNotifications,
  getMockUsers,
  approveMockSuperadminPaymentValidation,
  rejectMockSuperadminPaymentValidation,
} from "@/features/superadmin/api/mockSuperadminApi";

export async function fetchSuperadminDashboard() {
  if (runtimeConfig.enableMock) {
    return getMockSuperadminDashboard();
  }

  const response = await httpRequest("/superadmin/dashboard");
  return normalizeSuperadminDashboard(response);
}

export async function fetchSuperadminProfile() {
  if (runtimeConfig.enableMock) {
    return getMockSuperadminProfile();
  }

  const response = await httpRequest("/superadmin/profile");
  return normalizeSuperadminProfile(response);
}

export async function fetchTopbarNotifications() {
  if (runtimeConfig.enableMock) {
    return getMockTopbarNotifications();
  }

  const response = await httpRequest("/superadmin/topbar-notifications");
  return normalizeTopbarNotifications(response);
}

export async function fetchMonitoringOrders() {
  if (runtimeConfig.enableMock) {
    return getMockMonitoringOrders();
  }

  const response = await httpRequest("/superadmin/monitoring/orders");
  return normalizeMonitoringOrders(response);
}

export async function fetchReports() {
  if (runtimeConfig.enableMock) {
    return getMockReports();
  }

  const response = await httpRequest("/superadmin/reports");
  return normalizeReports(response);
}

export async function fetchReportChart() {
  if (runtimeConfig.enableMock) {
    return getMockReportChart();
  }

  const response = await httpRequest("/superadmin/reports/chart");
  return normalizeReportChart(response);
}

export async function fetchSystemNotifications() {
  if (runtimeConfig.enableMock) {
    return getMockSystemNotifications();
  }

  const response = await httpRequest("/superadmin/notifications");
  return normalizeSystemNotifications(response);
}

export async function fetchActivityLogs() {
  if (runtimeConfig.enableMock) {
    return getMockActivityLogs();
  }

  const response = await httpRequest("/superadmin/activity-logs");
  return normalizeActivityLogs(response);
}

export async function fetchUsers() {
  if (runtimeConfig.enableMock) {
    return getMockUsers();
  }

  const response = await httpRequest("/superadmin/users");
  return normalizeUsers(response);
}

export async function fetchDataMaster() {
  if (runtimeConfig.enableMock) {
    return getMockDataMaster();
  }

  const response = await httpRequest("/superadmin/data-master");
  return normalizeDataMaster(response);
}

export async function fetchRoles() {
  if (runtimeConfig.enableMock) {
    return getMockRoles();
  }

  const response = await httpRequest("/superadmin/roles");
  return normalizeRoles(response);
}

export async function fetchSettingsProfile() {
  if (runtimeConfig.enableMock) {
    return getMockSettingsProfile();
  }

  const response = await httpRequest("/superadmin/settings/profile");
  return normalizeSettingsProfile(response);
}

export async function approveSuperadminPaymentValidation(paymentId) {
  if (runtimeConfig.enableMock) {
    return approveMockSuperadminPaymentValidation(paymentId);
  }

  return httpRequest(`/superadmin/payments/${paymentId}/approve`, {
    method: "POST",
  });
}

export async function rejectSuperadminPaymentValidation(paymentId) {
  if (runtimeConfig.enableMock) {
    return rejectMockSuperadminPaymentValidation(paymentId);
  }

  return httpRequest(`/superadmin/payments/${paymentId}/reject`, {
    method: "POST",
  });
}
