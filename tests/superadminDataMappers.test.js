import test from "node:test";
import assert from "node:assert/strict";
import {
  normalizeSuperadminDashboard,
  normalizeMonitoringOrders,
  normalizeDataMaster,
  normalizeUsers,
} from "../src/features/superadmin/model/superadminDataMappers.js";

test("normalizeSuperadminDashboard converts numeric fields", () => {
  const result = normalizeSuperadminDashboard({
    data: {
      totalUsers: "20",
      totalOrders: "8",
      waitingPayments: "2",
      totalRevenue: "1000000",
      newNotifications: "4",
    },
  });

  assert.deepEqual(result, {
    totalUsers: 20,
    totalOrders: 8,
    waitingPayments: 2,
    totalRevenue: 1000000,
    newNotifications: 4,
  });
});

test("normalizeMonitoringOrders falls back to default status labels", () => {
  const result = normalizeMonitoringOrders({
    items: [{ id: 1, konsumen: "A", paket: "Paket A", tanggal: "2025-01-01" }],
  });

  assert.deepEqual(result[0], {
    id: 1,
    konsumen: "A",
    paket: "Paket A",
    tanggal: "2025-01-01",
    status: "Menunggu",
    kandang: "Menunggu",
    dapur: "Menunggu",
    kurir: "Menunggu",
  });
});

test("normalizeDataMaster keeps arrays with safe number conversion", () => {
  const result = normalizeDataMaster({
    data: {
      hewan: [{ id: 1, harga_final: "3000000" }],
      menu: [{ id: 2, nama_menu: "Sate", kategori_menu: "Lauk" }],
      paket: [{ id: 3, harga_paket: "4500000" }],
    },
  });

  assert.equal(result.hewan[0].harga_final, 3000000);
  assert.equal(result.menu[0].nama_menu, "Sate");
  assert.equal(result.paket[0].harga_paket, 4500000);
});

test("normalizeUsers returns normalized user shape", () => {
  const result = normalizeUsers({
    data: {
      users: [{ id: 1, nama: "Superadmin", email: "a@b.c", role: "Superadmin" }],
    },
  });

  assert.deepEqual(result, [
    { id: 1, nama: "Superadmin", email: "a@b.c", role: "Superadmin" },
  ]);
});
