const DEFAULT_DASHBOARD = {
  totalPesanan: 0,
  pesananDiproses: 0,
  pesananSelesai: 0,
  pembayaranMenunggu: 0,
  pesananTerbaru: [],
};

const DEFAULT_ORDER_DETAIL = {
  id: "-",
  tanggal: "-",
  total: 0,
  status: "-",
  konsumen: {
    nama: "-",
    telepon: "-",
    alamat: "-",
  },
  pembayaran: {
    status: "-",
    metode: "-",
    bukti: "",
  },
  progress: [],
};

const DEFAULT_ADMIN_PROFILE = {
  username: "",
  email: "",
  nama_admin: "",
  no_telp: "",
  alamat: "",
  foto: "",
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

export const normalizeOrderDetail = (raw) => {
  const source = raw?.data ?? raw ?? {};
  return {
    id: source.id ?? DEFAULT_ORDER_DETAIL.id,
    tanggal: source.tanggal ?? DEFAULT_ORDER_DETAIL.tanggal,
    total: Number(source.total ?? 0),
    status: source.status ?? DEFAULT_ORDER_DETAIL.status,
    konsumen: {
      nama: source.konsumen?.nama ?? DEFAULT_ORDER_DETAIL.konsumen.nama,
      telepon: source.konsumen?.telepon ?? DEFAULT_ORDER_DETAIL.konsumen.telepon,
      alamat: source.konsumen?.alamat ?? DEFAULT_ORDER_DETAIL.konsumen.alamat,
    },
    pembayaran: {
      status: source.pembayaran?.status ?? DEFAULT_ORDER_DETAIL.pembayaran.status,
      metode: source.pembayaran?.metode ?? DEFAULT_ORDER_DETAIL.pembayaran.metode,
      bukti: source.pembayaran?.bukti ?? DEFAULT_ORDER_DETAIL.pembayaran.bukti,
    },
    progress: toSafeArray(source.progress).map((item) => ({
      tahap: item.tahap ?? "-",
      petugas: item.petugas ?? "-",
      waktu: item.waktu ?? "-",
      foto: item.foto ?? "",
    })),
  };
};

export const normalizeAdminProfile = (raw) => {
  const source = raw?.data ?? raw ?? {};
  return {
    username: source.username ?? DEFAULT_ADMIN_PROFILE.username,
    email: source.email ?? DEFAULT_ADMIN_PROFILE.email,
    nama_admin: source.nama_admin ?? source.namaAdmin ?? DEFAULT_ADMIN_PROFILE.nama_admin,
    no_telp: source.no_telp ?? source.noTelp ?? DEFAULT_ADMIN_PROFILE.no_telp,
    alamat: source.alamat ?? DEFAULT_ADMIN_PROFILE.alamat,
    foto: source.foto ?? source.avatar ?? DEFAULT_ADMIN_PROFILE.foto,
  };
};

export { DEFAULT_ADMIN_PROFILE, DEFAULT_DASHBOARD, DEFAULT_ORDER_DETAIL };
