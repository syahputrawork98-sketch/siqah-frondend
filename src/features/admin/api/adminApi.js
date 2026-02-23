import { runtimeConfig } from "@/shared/config";
import { httpRequest } from "@/shared/api";
import {
  normalizeAdminProfile,
  normalizeAnimalList,
  normalizeBarnList,
  normalizeCateringList,
  normalizeCateringPartnerList,
  normalizeConsumerList,
  normalizeCourierPartnerList,
  normalizeDashboardData,
  normalizeMasterDataDashboard,
  normalizeMasterPaymentsDashboard,
  normalizeMasterReportsDashboard,
  normalizeMasterUsersDashboard,
  normalizeInvoiceList,
  normalizeMenuList,
  normalizeNotificationList,
  normalizeOrderDetail,
  normalizePackageList,
  normalizePaymentRecordList,
  normalizePaymentList,
  normalizeValidationSubmissionList,
} from "@/features/admin/model/adminDataMappers";
import {
  getMockAdminProfile,
  getMockAnimals,
  getMockBarns,
  getMockCaterings,
  getMockCateringPartners,
  getMockConsumers,
  getMockCourierPartners,
  getMockDashboardData,
  getMockMasterDataDashboard,
  getMockMasterPaymentsDashboard,
  getMockMasterReportsDashboard,
  getMockMasterUsersDashboard,
  getMockInvoices,
  getMockMenus,
  getMockNotifications,
  getMockOrderDetail,
  getMockPackages,
  getMockPaymentRecords,
  getMockPayments,
  getMockValidationSubmissions,
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

export async function fetchAdminCaterings() {
  if (runtimeConfig.enableMock) {
    return getMockCaterings();
  }

  const response = await httpRequest("/admin/data-master/caterings");
  return normalizeCateringList(response);
}

export async function fetchAdminMenus() {
  if (runtimeConfig.enableMock) {
    return getMockMenus();
  }

  const response = await httpRequest("/admin/data-master/menus");
  return normalizeMenuList(response);
}

export async function fetchAdminConsumers() {
  if (runtimeConfig.enableMock) {
    return getMockConsumers();
  }

  const response = await httpRequest("/admin/data-master/consumers");
  return normalizeConsumerList(response);
}

export async function fetchAdminCateringPartners() {
  if (runtimeConfig.enableMock) {
    return getMockCateringPartners();
  }

  const response = await httpRequest("/admin/data-master/catering-partners");
  return normalizeCateringPartnerList(response);
}

export async function fetchAdminCourierPartners() {
  if (runtimeConfig.enableMock) {
    return getMockCourierPartners();
  }

  const response = await httpRequest("/admin/data-master/courier-partners");
  return normalizeCourierPartnerList(response);
}

export async function fetchAdminPackages() {
  if (runtimeConfig.enableMock) {
    return getMockPackages();
  }

  const response = await httpRequest("/admin/data-master/packages");
  return normalizePackageList(response);
}

export async function fetchAdminAnimals() {
  if (runtimeConfig.enableMock) {
    return getMockAnimals();
  }

  const response = await httpRequest("/admin/data-master/animals");
  return normalizeAnimalList(response);
}

export async function fetchAdminBarns() {
  if (runtimeConfig.enableMock) {
    return getMockBarns();
  }

  const response = await httpRequest("/admin/data-master/barns");
  return normalizeBarnList(response);
}

export async function fetchAdminValidationSubmissions() {
  if (runtimeConfig.enableMock) {
    return getMockValidationSubmissions();
  }

  const response = await httpRequest("/admin/data-master/validation-submissions");
  return normalizeValidationSubmissionList(response);
}

export async function fetchAdminInvoices() {
  if (runtimeConfig.enableMock) {
    return getMockInvoices();
  }

  const response = await httpRequest("/admin/data-master/invoices");
  return normalizeInvoiceList(response);
}

export async function fetchAdminPaymentRecords() {
  if (runtimeConfig.enableMock) {
    return getMockPaymentRecords();
  }

  const response = await httpRequest("/admin/data-master/payment-records");
  return normalizePaymentRecordList(response);
}

export async function fetchAdminMasterDataDashboard() {
  if (runtimeConfig.enableMock) {
    return getMockMasterDataDashboard();
  }

  const response = await httpRequest("/admin/data-master/dashboard");
  return normalizeMasterDataDashboard(response);
}

export async function fetchAdminMasterUsersDashboard() {
  if (runtimeConfig.enableMock) {
    return getMockMasterUsersDashboard();
  }

  const response = await httpRequest("/admin/data-master/users/dashboard");
  return normalizeMasterUsersDashboard(response);
}

export async function fetchAdminMasterPaymentsDashboard() {
  if (runtimeConfig.enableMock) {
    return getMockMasterPaymentsDashboard();
  }

  const response = await httpRequest("/admin/data-master/payments/dashboard");
  return normalizeMasterPaymentsDashboard(response);
}

export async function fetchAdminMasterReportsDashboard() {
  if (runtimeConfig.enableMock) {
    return getMockMasterReportsDashboard();
  }

  const response = await httpRequest("/admin/data-master/reports/dashboard");
  return normalizeMasterReportsDashboard(response);
}
