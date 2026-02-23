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

const DEFAULT_CATERING_LIST = [];
const DEFAULT_CATERING_PARTNER_LIST = [];
const DEFAULT_COURIER_PARTNER_LIST = [];
const DEFAULT_MENU_LIST = [];
const DEFAULT_CONSUMER_LIST = [];
const DEFAULT_PACKAGE_LIST = [];
const DEFAULT_ANIMAL_LIST = [];
const DEFAULT_BARN_LIST = [];
const DEFAULT_VALIDATION_SUBMISSION_LIST = [];
const DEFAULT_INVOICE_LIST = [];
const DEFAULT_PAYMENT_RECORD_LIST = [];
const DEFAULT_MASTER_DATA_DASHBOARD = {
  counts: {
    catering: 0,
    kandang: 0,
    paket: 0,
    menu: 0,
    hewan: 0,
  },
  chartData: [],
  activities: [],
};
const DEFAULT_MASTER_USERS_DASHBOARD = {
  counts: {
    public: 0,
    admin: 0,
    superadmin: 0,
  },
  chartData: [],
  activities: [],
};
const DEFAULT_MASTER_PAYMENTS_DASHBOARD = {
  summary: {
    pengajuan: 0,
    validasi: 0,
    invoice: 0,
    dibayar: 0,
    lunas: 0,
  },
  chartData: [],
  activities: [],
};
const DEFAULT_MASTER_REPORTS_DASHBOARD = {
  summary: {
    totalPesanan: 0,
    totalInvoice: 0,
    totalPembayaran: 0,
    totalPendapatan: 0,
    pesananSelesai: 0,
    totalKonsumen: 0,
  },
  chartPendapatan: [],
  chartStatusPembayaran: [],
  recentTransaksi: [],
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
      mitra: item.mitra ?? "-",
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

export const normalizeCateringList = (raw) => {
  const source = raw?.data ?? raw ?? {};
  const caterings = toSafeArray(source.caterings ?? source.items ?? source);

  return caterings.map((item) => ({
    id_catering: Number(item.id_catering ?? item.id ?? 0),
    kode_catering: item.kode_catering ?? item.code ?? "-",
    nama_catering: item.nama_catering ?? item.name ?? "-",
    lokasi: item.lokasi ?? item.location ?? "-",
    kapasitas: Number(item.kapasitas ?? item.capacity ?? 0),
    penanggung_jawab: item.penanggung_jawab ?? item.pic ?? "-",
    status_aktif: Boolean(item.status_aktif ?? item.is_active),
    created_at: item.created_at ?? item.createdAt ?? "-",
  }));
};

export const normalizeMenuList = (raw) => {
  const source = raw?.data ?? raw ?? {};
  const menus = toSafeArray(source.menus ?? source.items ?? source);

  return menus.map((item) => ({
    id_menu: Number(item.id_menu ?? item.id ?? 0),
    kode_menu: item.kode_menu ?? item.code ?? "-",
    nama_menu: item.nama_menu ?? item.name ?? "-",
    kategori: item.kategori ?? item.category ?? "-",
    deskripsi: item.deskripsi ?? item.description ?? "-",
    harga: Number(item.harga ?? item.price ?? 0),
    status_aktif: Boolean(item.status_aktif ?? item.is_active),
    created_at: item.created_at ?? item.createdAt ?? "-",
  }));
};

export const normalizeConsumerList = (raw) => {
  const source = raw?.data ?? raw ?? {};
  const consumers = toSafeArray(source.consumers ?? source.items ?? source);

  return consumers.map((item) => ({
    id_konsumen: Number(item.id_konsumen ?? item.id ?? 0),
    kode_konsumen: item.kode_konsumen ?? item.code ?? "-",
    nama_lengkap: item.nama_lengkap ?? item.full_name ?? item.name ?? "-",
    no_hp: item.no_hp ?? item.phone ?? "-",
    email: item.email ?? "-",
    alamat: item.alamat ?? item.address ?? "-",
    status_aktif: Boolean(item.status_aktif ?? item.is_active),
    created_at: item.created_at ?? item.createdAt ?? "-",
  }));
};

export const normalizeCateringPartnerList = (raw) => {
  const source = raw?.data ?? raw ?? {};
  const partners = toSafeArray(source.partners ?? source.items ?? source);

  return partners.map((item) => ({
    id_mitra_catering: Number(item.id_mitra_catering ?? item.id ?? 0),
    kode_mitra: item.kode_mitra ?? item.code ?? "-",
    nama_mitra: item.nama_mitra ?? item.name ?? "-",
    no_telp: item.no_telp ?? item.phone ?? "-",
    alamat: item.alamat ?? item.address ?? "-",
    nama_catering: item.nama_catering ?? item.catering_name ?? "-",
    status: item.status ?? (item.is_active ? "Aktif" : "Tidak Aktif"),
    created_at: item.created_at ?? item.createdAt ?? "-",
  }));
};

export const normalizeCourierPartnerList = (raw) => {
  const source = raw?.data ?? raw ?? {};
  const couriers = toSafeArray(source.couriers ?? source.items ?? source);

  return couriers.map((item) => ({
    id_kurir: Number(item.id_kurir ?? item.id ?? 0),
    kode_kurir: item.kode_kurir ?? item.code ?? "-",
    nama_kurir: item.nama_kurir ?? item.name ?? "-",
    no_hp: item.no_hp ?? item.phone ?? "-",
    alamat: item.alamat ?? item.address ?? "-",
    plat_nomor: item.plat_nomor ?? item.license_plate ?? "-",
    status_aktif: Boolean(item.status_aktif ?? item.is_active),
    created_at: item.created_at ?? item.createdAt ?? "-",
  }));
};

export const normalizePackageList = (raw) => {
  const source = raw?.data ?? raw ?? {};
  const packages = toSafeArray(source.packages ?? source.items ?? source);

  return packages.map((item) => ({
    id_paket: Number(item.id_paket ?? item.id ?? 0),
    kode_paket: item.kode_paket ?? item.code ?? "-",
    nama_paket: item.nama_paket ?? item.name ?? "-",
    deskripsi: item.deskripsi ?? item.description ?? "-",
    harga: Number(item.harga ?? item.price ?? 0),
    status_aktif: Boolean(item.status_aktif ?? item.is_active),
    created_at: item.created_at ?? item.createdAt ?? "-",
  }));
};

export const normalizeAnimalList = (raw) => {
  const source = raw?.data ?? raw ?? {};
  const animals = toSafeArray(source.animals ?? source.items ?? source);

  return animals.map((item) => ({
    id_hewan: Number(item.id_hewan ?? item.id ?? 0),
    kode_hewan: item.kode_hewan ?? item.code ?? "-",
    jenis_hewan: item.jenis_hewan ?? item.type ?? "-",
    nama_kandang: item.nama_kandang ?? item.barn_name ?? "-",
    berat: Number(item.berat ?? item.weight ?? 0),
    harga: Number(item.harga ?? item.price ?? 0),
    foto: item.foto ?? item.image ?? "",
    status: item.status ?? "-",
    created_at: item.created_at ?? item.createdAt ?? "-",
  }));
};

export const normalizeBarnList = (raw) => {
  const source = raw?.data ?? raw ?? {};
  const barns = toSafeArray(source.barns ?? source.items ?? source);

  return barns.map((item) => ({
    id_kandang: Number(item.id_kandang ?? item.id ?? 0),
    kode_kandang: item.kode_kandang ?? item.code ?? "-",
    nama_kandang: item.nama_kandang ?? item.name ?? "-",
    lokasi: item.lokasi ?? item.location ?? "-",
    kapasitas: Number(item.kapasitas ?? item.capacity ?? 0),
    jumlah_hewan: Number(item.jumlah_hewan ?? item.animal_count ?? 0),
    penanggung_jawab: item.penanggung_jawab ?? item.pic ?? "-",
    status: item.status ?? "-",
    created_at: item.created_at ?? item.createdAt ?? "-",
  }));
};

export const normalizeValidationSubmissionList = (raw) => {
  const source = raw?.data ?? raw ?? {};
  const submissions = toSafeArray(source.submissions ?? source.items ?? source);

  return submissions.map((item) => ({
    id_validasi: Number(item.id_validasi ?? item.id ?? 0),
    id_pesanan: Number(item.id_pesanan ?? item.order_id ?? 0),
    tanggal_validasi: item.tanggal_validasi ?? item.validation_date ?? "-",
    status_validasi: item.status_validasi ?? item.validation_status ?? "MENUNGGU",
    catatan_admin: item.catatan_admin ?? item.admin_note ?? "-",
    status_invoice: item.status_invoice ?? item.invoice_status ?? "-",
    status_tracking: item.status_tracking ?? item.tracking_status ?? "-",
  }));
};

export const normalizeInvoiceList = (raw) => {
  const source = raw?.data ?? raw ?? {};
  const invoices = toSafeArray(source.invoices ?? source.items ?? source);

  return invoices.map((item) => ({
    id_invoice: Number(item.id_invoice ?? item.id ?? 0),
    id_pesanan: Number(item.id_pesanan ?? item.order_id ?? 0),
    kode_invoice: item.kode_invoice ?? item.code ?? "-",
    tanggal_invoice: item.tanggal_invoice ?? item.invoice_date ?? "-",
    total_biaya: Number(item.total_biaya ?? item.total ?? 0),
    status_invoice: item.status_invoice ?? item.status ?? "BELUM_DIBAYAR",
    bukti_pembayaran: item.bukti_pembayaran ?? item.payment_proof ?? null,
    catatan_admin: item.catatan_admin ?? item.admin_note ?? "-",
  }));
};

export const normalizePaymentRecordList = (raw) => {
  const source = raw?.data ?? raw ?? {};
  const payments = toSafeArray(source.payments ?? source.items ?? source);

  return payments.map((item) => ({
    id_pembayaran: Number(item.id_pembayaran ?? item.id ?? 0),
    id_invoice: Number(item.id_invoice ?? item.invoice_id ?? 0),
    tanggal_pembayaran: item.tanggal_pembayaran ?? item.payment_date ?? "-",
    jumlah_bayar: Number(item.jumlah_bayar ?? item.amount ?? 0),
    metode_pembayaran: item.metode_pembayaran ?? item.payment_method ?? "-",
    bukti_pembayaran: item.bukti_pembayaran ?? item.payment_proof ?? null,
    status_pembayaran: item.status_pembayaran ?? item.payment_status ?? "MENUNGGU_VALIDASI",
    catatan_admin: item.catatan_admin ?? item.admin_note ?? "-",
  }));
};

export const normalizeMasterDataDashboard = (raw) => {
  const source = raw?.data ?? raw ?? {};
  const counts = source.counts ?? source;
  return {
    counts: {
      catering: Number(counts.catering ?? 0),
      kandang: Number(counts.kandang ?? 0),
      paket: Number(counts.paket ?? 0),
      menu: Number(counts.menu ?? 0),
      hewan: Number(counts.hewan ?? 0),
    },
    chartData: toSafeArray(source.chartData).map((item) => ({
      name: item.name ?? "-",
      value: Number(item.value ?? 0),
    })),
    activities: toSafeArray(source.activities).map((item) => ({
      tanggal: item.tanggal ?? "-",
      mitra: item.mitra ?? "-",
      aktivitas: item.aktivitas ?? "-",
    })),
  };
};

export const normalizeMasterUsersDashboard = (raw) => {
  const source = raw?.data ?? raw ?? {};
  const counts = source.counts ?? source;
  return {
    counts: {
      public: Number(counts.public ?? 0),
      admin: Number(counts.admin ?? 0),
      superadmin: Number(counts.superadmin ?? 0),
    },
    chartData: toSafeArray(source.chartData).map((item) => ({
      name: item.name ?? "-",
      value: Number(item.value ?? 0),
    })),
    activities: toSafeArray(source.activities).map((item) => ({
      tanggal: item.tanggal ?? "-",
      user: item.user ?? "-",
      aktivitas: item.aktivitas ?? "-",
    })),
  };
};

export const normalizeMasterPaymentsDashboard = (raw) => {
  const source = raw?.data ?? raw ?? {};
  const summary = source.summary ?? source;
  return {
    summary: {
      pengajuan: Number(summary.pengajuan ?? 0),
      validasi: Number(summary.validasi ?? 0),
      invoice: Number(summary.invoice ?? 0),
      dibayar: Number(summary.dibayar ?? 0),
      lunas: Number(summary.lunas ?? 0),
    },
    chartData: toSafeArray(source.chartData).map((item) => ({
      name: item.name ?? "-",
      value: Number(item.value ?? 0),
    })),
    activities: toSafeArray(source.activities).map((item) => ({
      tanggal: item.tanggal ?? "-",
      user: item.user ?? "-",
      aktivitas: item.aktivitas ?? "-",
    })),
  };
};

export const normalizeMasterReportsDashboard = (raw) => {
  const source = raw?.data ?? raw ?? {};
  const summary = source.summary ?? source;
  return {
    summary: {
      totalPesanan: Number(summary.totalPesanan ?? 0),
      totalInvoice: Number(summary.totalInvoice ?? 0),
      totalPembayaran: Number(summary.totalPembayaran ?? 0),
      totalPendapatan: Number(summary.totalPendapatan ?? 0),
      pesananSelesai: Number(summary.pesananSelesai ?? 0),
      totalKonsumen: Number(summary.totalKonsumen ?? 0),
    },
    chartPendapatan: toSafeArray(source.chartPendapatan).map((item) => ({
      bulan: item.bulan ?? "-",
      total: Number(item.total ?? 0),
    })),
    chartStatusPembayaran: toSafeArray(source.chartStatusPembayaran).map((item) => ({
      name: item.name ?? "-",
      value: Number(item.value ?? 0),
    })),
    recentTransaksi: toSafeArray(source.recentTransaksi).map((item) => ({
      tanggal: item.tanggal ?? "-",
      kode: item.kode ?? "-",
      konsumen: item.konsumen ?? "-",
      total: item.total ?? "-",
      status: item.status ?? "-",
    })),
  };
};

export {
  DEFAULT_ADMIN_PROFILE,
  DEFAULT_CATERING_LIST,
  DEFAULT_CATERING_PARTNER_LIST,
  DEFAULT_CONSUMER_LIST,
  DEFAULT_COURIER_PARTNER_LIST,
  DEFAULT_DASHBOARD,
  DEFAULT_ANIMAL_LIST,
  DEFAULT_BARN_LIST,
  DEFAULT_INVOICE_LIST,
  DEFAULT_MASTER_DATA_DASHBOARD,
  DEFAULT_MASTER_PAYMENTS_DASHBOARD,
  DEFAULT_MASTER_REPORTS_DASHBOARD,
  DEFAULT_MASTER_USERS_DASHBOARD,
  DEFAULT_MENU_LIST,
  DEFAULT_ORDER_DETAIL,
  DEFAULT_PACKAGE_LIST,
  DEFAULT_PAYMENT_RECORD_LIST,
  DEFAULT_VALIDATION_SUBMISSION_LIST,
};

