const DEFAULT_DASHBOARD = {
  totalPesanan: 0,
  pesananDiproses: 0,
  pesananSelesai: 0,
  pembayaranMenunggu: 0,
  pesananTerbaru: [],
};

const toSafeArray = (value) => (Array.isArray(value) ? value : []);

export const normalizeDashboardData = (raw) => {
  const source = raw?.data ?? raw ?? {};
  const latestOrders = toSafeArray(source.pesananTerbaru ?? source.latestOrders).map(
    (item) => ({
      id: item.id ?? "-",
      nama: item.nama ?? item.consumerName ?? "-",
      tanggal: item.tanggal ?? item.orderDate ?? "-",
      status: item.status ?? "-",
    })
  );

  return {
    totalPesanan: Number(source.totalPesanan ?? source.totalOrders ?? 0),
    pesananDiproses: Number(source.pesananDiproses ?? source.processingOrders ?? 0),
    pesananSelesai: Number(source.pesananSelesai ?? source.completedOrders ?? 0),
    pembayaranMenunggu: Number(source.pembayaranMenunggu ?? source.pendingPayments ?? 0),
    pesananTerbaru: latestOrders,
  };
};

export const normalizePaymentList = (raw) => {
  const source = raw?.data ?? raw ?? {};
  const payments = toSafeArray(source.payments ?? source.items ?? source);

  return payments.map((item) => ({
    id: item.id ?? "-",
    konsumen: item.konsumen ?? item.consumerName ?? "-",
    tanggal: item.tanggal ?? item.paymentDate ?? "-",
    jumlah: Number(item.jumlah ?? item.amount ?? 0),
    status: item.status ?? "-",
    buktiUrl: item.buktiUrl ?? item.proofUrl ?? null,
  }));
};

export const normalizeNotificationList = (raw) => {
  const source = raw?.data ?? raw ?? {};
  const notifications = toSafeArray(source.notifications ?? source.items ?? source);

  return notifications.map((item) => ({
    id: item.id,
    judul: item.judul ?? item.title ?? "-",
    pesan: item.pesan ?? item.message ?? "-",
    tipe: item.tipe ?? item.type ?? "Sistem",
    waktu: item.waktu ?? item.createdAt ?? "-",
    status_baca: Boolean(item.status_baca ?? item.isRead),
  }));
};

export { DEFAULT_DASHBOARD };

