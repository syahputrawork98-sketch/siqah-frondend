const toSafeArray = (value) => (Array.isArray(value) ? value : []);

export const DEFAULT_SUPERADMIN_DASHBOARD = {
  totalUsers: 0,
  totalOrders: 0,
  waitingPayments: 0,
  totalRevenue: 0,
  newNotifications: 0,
};

export const normalizeSuperadminDashboard = (raw) => {
  const source = raw?.data ?? raw ?? {};
  return {
    totalUsers: Number(source.totalUsers ?? 0),
    totalOrders: Number(source.totalOrders ?? 0),
    waitingPayments: Number(source.waitingPayments ?? 0),
    totalRevenue: Number(source.totalRevenue ?? 0),
    newNotifications: Number(source.newNotifications ?? 0),
  };
};

export const normalizeSuperadminProfile = (raw) => {
  const source = raw?.data ?? raw ?? {};
  return {
    name: source.name ?? "-",
    email: source.email ?? "-",
    avatar: source.avatar ?? "",
  };
};

export const normalizeTopbarNotifications = (raw) => {
  const source = raw?.data ?? raw ?? {};
  const list = toSafeArray(source.notifications ?? source.items ?? source);
  return list.map((item) => ({
    id: item.id,
    title: item.title ?? "-",
    message: item.message ?? "-",
  }));
};

export const normalizeMonitoringOrders = (raw) => {
  const source = raw?.data ?? raw ?? {};
  const list = toSafeArray(source.orders ?? source.items ?? source);
  return list.map((item) => ({
    id: item.id,
    konsumen: item.konsumen ?? "-",
    paket: item.paket ?? "-",
    tanggal: item.tanggal ?? "-",
    status: item.status ?? "Menunggu",
    kandang: item.kandang ?? "Menunggu",
    dapur: item.dapur ?? "Menunggu",
    kurir: item.kurir ?? "Menunggu",
  }));
};

export const normalizeReports = (raw) => {
  const source = raw?.data ?? raw ?? {};
  const list = toSafeArray(source.reports ?? source.items ?? source);
  return list.map((item) => ({
    id: item.id,
    tanggal: item.tanggal ?? "-",
    konsumen: item.konsumen ?? "-",
    total: Number(item.total ?? 0),
    status: item.status ?? "Pending",
  }));
};

export const normalizeReportChart = (raw) => {
  const source = raw?.data ?? raw ?? {};
  const list = toSafeArray(source.chart ?? source.items ?? source);
  return list.map((item) => ({
    bulan: item.bulan ?? "-",
    total: Number(item.total ?? 0),
  }));
};

export const normalizeSystemNotifications = (raw) => {
  const source = raw?.data ?? raw ?? {};
  const list = toSafeArray(source.notifications ?? source.items ?? source);
  return list.map((item) => ({
    id: item.id,
    pesan: item.pesan ?? "-",
    waktu: item.waktu ?? "-",
    status: item.status ?? "Belum Dibaca",
  }));
};

export const normalizeActivityLogs = (raw) => {
  const source = raw?.data ?? raw ?? {};
  const list = toSafeArray(source.logs ?? source.items ?? source);
  return list.map((item) => ({
    id: item.id,
    aksi: item.aksi ?? "-",
    user: item.user ?? "-",
    waktu: item.waktu ?? "-",
    keterangan: item.keterangan ?? "-",
  }));
};

export const normalizeUsers = (raw) => {
  const source = raw?.data ?? raw ?? {};
  const list = toSafeArray(source.users ?? source.items ?? source);
  return list.map((item) => ({
    id: item.id,
    nama: item.nama ?? "-",
    email: item.email ?? "-",
    role: item.role ?? "-",
  }));
};

export const normalizeDataMaster = (raw) => {
  const source = raw?.data ?? raw ?? {};
  return {
    hewan: toSafeArray(source.hewan).map((item) => ({
      id: item.id,
      jenis_hewan: item.jenis_hewan ?? "-",
      jenis_kelamin: item.jenis_kelamin ?? "-",
      harga_final: Number(item.harga_final ?? 0),
    })),
    menu: toSafeArray(source.menu).map((item) => ({
      id: item.id,
      nama_menu: item.nama_menu ?? "-",
      kategori_menu: item.kategori_menu ?? "-",
    })),
    paket: toSafeArray(source.paket).map((item) => ({
      id: item.id,
      nama_paket: item.nama_paket ?? "-",
      deskripsi: item.deskripsi ?? "-",
      harga_paket: Number(item.harga_paket ?? 0),
    })),
  };
};

export const normalizeRoles = (raw) => {
  const source = raw?.data ?? raw ?? {};
  const list = toSafeArray(source.roles ?? source.items ?? source);
  return list.map((item) => ({
    id: item.id,
    nama_role: item.nama_role ?? "-",
    deskripsi: item.deskripsi ?? "-",
  }));
};

export const normalizeSettingsProfile = (raw) => {
  const source = raw?.data ?? raw ?? {};
  return {
    nama: source.nama ?? "-",
    email: source.email ?? "-",
    role: source.role ?? "-",
    avatar: source.avatar ?? "",
  };
};
