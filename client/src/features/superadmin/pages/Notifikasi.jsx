import { useState } from "react";
import { Table } from "@/shared/ui";
import { Card, CardContent, CardHeader } from "@/shared/ui";
import { Bell, Trash2, Clock3, Activity } from "lucide-react";

export default function Notifikasi() {
  const [tab, setTab] = useState("notifikasi");

  // Data dummy untuk notifikasi
  const notifikasiList = [
    {
      id: 1,
      pesan: "Pesanan #AQK001 telah selesai dan dikirim oleh kurir.",
      waktu: "2025-11-02 10:15",
      status: "Belum Dibaca",
    },
    {
      id: 2,
      pesan: "Petugas dapur telah mengunggah bukti proses pengolahan.",
      waktu: "2025-11-02 09:40",
      status: "Sudah Dibaca",
    },
    {
      id: 3,
      pesan: "Admin menambahkan pengguna baru: Petugas Kandang 2",
      waktu: "2025-11-01 18:25",
      status: "Sudah Dibaca",
    },
  ];

  // Data dummy untuk log aktivitas
  const logList = [
    {
      id: 1,
      aksi: "Login Sistem",
      user: "Superadmin Siqah",
      waktu: "2025-11-02 07:20",
      keterangan: "Superadmin berhasil login ke dashboard",
    },
    {
      id: 2,
      aksi: "Edit Role",
      user: "Superadmin Siqah",
      waktu: "2025-11-01 20:55",
      keterangan: "Mengubah hak akses Petugas Dapur",
    },
    {
      id: 3,
      aksi: "Tambah User",
      user: "Superadmin Siqah",
      waktu: "2025-11-01 18:12",
      keterangan: "Menambahkan akun Petugas Kurir 1",
    },
  ];

  const columnsNotif = [
    { header: "Pesan", accessor: "pesan" },
    { header: "Waktu", accessor: "waktu" },
    {
      header: "Status",
      render: (row) => (
        <span
          className={`px-3 py-1 text-xs rounded-full font-medium ${
            row.status === "Belum Dibaca"
              ? "bg-yellow-100 text-yellow-700"
              : "bg-gray-100 text-gray-700"
          }`}
        >
          {row.status}
        </span>
      ),
    },
  ];

  const columnsLog = [
    { header: "Aksi", accessor: "aksi" },
    { header: "User", accessor: "user" },
    { header: "Waktu", accessor: "waktu" },
    { header: "Keterangan", accessor: "keterangan" },
  ];

  return (
    <div className="space-y-6">
      <Card className="border border-[#E7E1D8] bg-white/90 backdrop-blur-md rounded-2xl shadow-md">
        <CardHeader
          title={
            <span className="text-[#45624B] font-semibold text-lg">
              Notifikasi & Log Aktivitas
            </span>
          }
          subtitle="Pantau pemberitahuan sistem dan riwayat aktivitas pengguna"
        />

        <CardContent>
          {/* Tabs */}
          <div className="flex gap-4 border-b border-[#E7E1D8] mb-4">
            {[
              { key: "notifikasi", label: "Notifikasi", icon: <Bell size={16} /> },
              { key: "log", label: "Log Aktivitas", icon: <Activity size={16} /> },
            ].map((item) => (
              <button
                key={item.key}
                onClick={() => setTab(item.key)}
                className={`relative px-4 py-2 text-sm font-medium flex items-center gap-2 transition ${
                  tab === item.key
                    ? "text-[#45624B] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-gradient-to-r after:from-[#45624B] after:to-[#B9914D]"
                    : "text-gray-500 hover:text-[#45624B]"
                }`}
              >
                {item.icon}
                {item.label}
              </button>
            ))}
          </div>

          {/* Tabel Notifikasi */}
          {tab === "notifikasi" && (
            <div>
              <div className="flex justify-end mb-3">
                <button className="flex items-center gap-2 text-[#B9914D] hover:text-[#45624B] text-sm font-medium">
                  <Trash2 size={16} />
                  Hapus Semua
                </button>
              </div>
              <Table columns={columnsNotif} data={notifikasiList} />
            </div>
          )}

          {/* Tabel Log Aktivitas */}
          {tab === "log" && (
            <div>
              <div className="flex justify-end mb-3">
                <span className="flex items-center gap-1 text-gray-500 text-sm">
                  <Clock3 size={14} />
                  Terakhir diperbarui: 5 menit lalu
                </span>
              </div>
              <Table columns={columnsLog} data={logList} />
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

