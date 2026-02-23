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
import animalsMock from "@/shared/mocks/admin/animals.json";
import barnsMock from "@/shared/mocks/admin/barns.json";
import cateringsMock from "@/shared/mocks/admin/caterings.json";
import cateringPartnersMock from "@/shared/mocks/admin/catering-partners.json";
import consumersMock from "@/shared/mocks/admin/consumers.json";
import courierPartnersMock from "@/shared/mocks/admin/courier-partners.json";
import dashboardMock from "@/shared/mocks/admin/dashboard.json";
import dataMasterDashboardMock from "@/shared/mocks/admin/data-master-dashboard.json";
import dataMasterPaymentsDashboardMock from "@/shared/mocks/admin/data-master-payments-dashboard.json";
import dataMasterReportsDashboardMock from "@/shared/mocks/admin/data-master-reports-dashboard.json";
import dataMasterUsersDashboardMock from "@/shared/mocks/admin/data-master-users-dashboard.json";
import invoicesMock from "@/shared/mocks/admin/invoices.json";
import menusMock from "@/shared/mocks/admin/menus.json";
import orderDetailMock from "@/shared/mocks/admin/order-detail.json";
import packagesMock from "@/shared/mocks/admin/packages.json";
import paymentRecordsMock from "@/shared/mocks/admin/payment-records.json";
import paymentsMock from "@/shared/mocks/admin/payments.json";
import notificationsMock from "@/shared/mocks/admin/notifications.json";
import adminProfileMock from "@/shared/mocks/admin/profile.json";
import validationSubmissionsMock from "@/shared/mocks/admin/validation-submissions.json";

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

export async function getMockCaterings() {
  await wait();
  return normalizeCateringList(cateringsMock);
}

export async function getMockMenus() {
  await wait();
  return normalizeMenuList(menusMock);
}

export async function getMockConsumers() {
  await wait();
  return normalizeConsumerList(consumersMock);
}

export async function getMockCateringPartners() {
  await wait();
  return normalizeCateringPartnerList(cateringPartnersMock);
}

export async function getMockCourierPartners() {
  await wait();
  return normalizeCourierPartnerList(courierPartnersMock);
}

export async function getMockPackages() {
  await wait();
  return normalizePackageList(packagesMock);
}

export async function getMockAnimals() {
  await wait();
  return normalizeAnimalList(animalsMock);
}

export async function getMockBarns() {
  await wait();
  return normalizeBarnList(barnsMock);
}

export async function getMockValidationSubmissions() {
  await wait();
  return normalizeValidationSubmissionList(validationSubmissionsMock);
}

export async function getMockInvoices() {
  await wait();
  return normalizeInvoiceList(invoicesMock);
}

export async function getMockPaymentRecords() {
  await wait();
  return normalizePaymentRecordList(paymentRecordsMock);
}

export async function getMockMasterDataDashboard() {
  await wait();
  return normalizeMasterDataDashboard(dataMasterDashboardMock);
}

export async function getMockMasterUsersDashboard() {
  await wait();
  return normalizeMasterUsersDashboard(dataMasterUsersDashboardMock);
}

export async function getMockMasterPaymentsDashboard() {
  await wait();
  return normalizeMasterPaymentsDashboard(dataMasterPaymentsDashboardMock);
}

export async function getMockMasterReportsDashboard() {
  await wait();
  return normalizeMasterReportsDashboard(dataMasterReportsDashboardMock);
}

export async function approveMockPaymentValidation(paymentId) {
  await wait();
  return {
    id: paymentId,
    status: "Diterima",
    message: "Pembayaran berhasil disetujui.",
  };
}

export async function rejectMockPaymentValidation(paymentId) {
  await wait();
  return {
    id: paymentId,
    status: "Pengajuan",
    message: "Pembayaran ditolak dan dikembalikan ke pengajuan.",
  };
}
