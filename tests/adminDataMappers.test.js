import test from "node:test";
import assert from "node:assert/strict";
import {
  normalizeDashboardData,
  normalizeOrderDetail,
  normalizeAdminProfile,
} from "../src/features/admin/model/adminDataMappers.js";

test("normalizeDashboardData maps API aliases", () => {
  const result = normalizeDashboardData({
    data: {
      totalOrders: "10",
      processingOrders: "3",
      completedOrders: "5",
      pendingPayments: "2",
      latestOrders: [
        {
          id: "ORD-1",
          consumerName: "Ali",
          orderDate: "2025-01-01",
          status: "Diproses",
        },
      ],
    },
  });

  assert.equal(result.totalPesanan, 10);
  assert.equal(result.pesananDiproses, 3);
  assert.equal(result.pesananSelesai, 5);
  assert.equal(result.pembayaranMenunggu, 2);
  assert.deepEqual(result.pesananTerbaru[0], {
    id: "ORD-1",
    nama: "Ali",
    tanggal: "2025-01-01",
    status: "Diproses",
  });
});

test("normalizeOrderDetail provides safe defaults", () => {
  const result = normalizeOrderDetail({});

  assert.equal(result.id, "-");
  assert.equal(result.total, 0);
  assert.deepEqual(result.konsumen, {
    nama: "-",
    telepon: "-",
    alamat: "-",
  });
  assert.deepEqual(result.progress, []);
});

test("normalizeAdminProfile supports snake_case and camelCase fields", () => {
  const result = normalizeAdminProfile({
    data: {
      username: "admin",
      email: "admin@siqah.id",
      namaAdmin: "Admin Siqah",
      noTelp: "08123",
      alamat: "Bandung",
      avatar: "avatar.png",
    },
  });

  assert.deepEqual(result, {
    username: "admin",
    email: "admin@siqah.id",
    nama_admin: "Admin Siqah",
    no_telp: "08123",
    alamat: "Bandung",
    foto: "avatar.png",
  });
});
