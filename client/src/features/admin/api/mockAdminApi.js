import {
  normalizeDashboardData,
  normalizeNotificationList,
  normalizePaymentList,
} from "@/features/admin/model/adminDataMappers";

const wait = (ms = 200) => new Promise((resolve) => setTimeout(resolve, ms));

const dashboardMock = {
  totalPesanan: 120,
  pesananDiproses: 38,
  pesananSelesai: 67,
  pembayaranMenunggu: 15,
  pesananTerbaru: [
    {
      id: "ORD-00120",
      nama: "Ahmad Fauzi",
      tanggal: "2025-11-01",
      status: "Menunggu Pembayaran",
    },
    {
      id: "ORD-00119",
      nama: "Nur Aini",
      tanggal: "2025-11-01",
      status: "Diproses",
    },
    {
      id: "ORD-00118",
      nama: "Rizal Fathoni",
      tanggal: "2025-10-31",
      status: "Selesai",
    },
  ],
};

const paymentsMock = [
  {
    id: "PAY-001",
    konsumen: "Ahmad Fauzi",
    tanggal: "2025-11-01",
    jumlah: 1500000,
    status: "Pengajuan",
  },
  {
    id: "PAY-002",
    konsumen: "Rina Marlina",
    tanggal: "2025-11-01",
    jumlah: 1800000,
    status: "Menunggu Validasi",
  },
  {
    id: "PAY-003",
    konsumen: "Siti Lestari",
    tanggal: "2025-10-31",
    jumlah: 1600000,
    status: "Diterima",
  },
  {
    id: "PAY-004",
    konsumen: "Rizal Fathoni",
    tanggal: "2025-10-30",
    jumlah: 1500000,
    status: "Lunas",
  },
];

const notificationsMock = [
  {
    id: 1,
    judul: "Pembayaran Baru Diterima",
    pesan:
      "Konsumen Ahmad telah mengirim bukti pembayaran sebesar Rp 2.500.000 untuk pesanan PSN-00124.",
    tipe: "Pembayaran",
    waktu: "03 Nov 2025, 09:45",
    status_baca: false,
  },
  {
    id: 2,
    judul: "Pesanan Baru Masuk",
    pesan: "Pesanan baru dari konsumen Rina Mulyani (Paket Hemat A).",
    tipe: "Pesanan",
    waktu: "02 Nov 2025, 14:30",
    status_baca: true,
  },
  {
    id: 3,
    judul: "Proses Kandang Selesai",
    pesan:
      "Petugas Kandang A telah menyelesaikan penyembelihan hewan untuk pesanan PSN-00120.",
    tipe: "Operasional",
    waktu: "01 Nov 2025, 10:15",
    status_baca: false,
  },
  {
    id: 4,
    judul: "Sistem Backup Otomatis Berhasil",
    pesan: "Backup database otomatis berhasil dilakukan pada 31 Okt 2025 pukul 23:59.",
    tipe: "Sistem",
    waktu: "31 Okt 2025, 23:59",
    status_baca: true,
  },
];

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

