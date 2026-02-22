// client/src/pages/petugas/kandang/LogNotifikasiPetugasKandang.jsx
import { useState, useEffect } from "react";
import { Card, CardContent } from "../../../components/ui/Card";
import {
  Bell,
  MailOpen,
  AlertCircle,
  CheckCircle,
  Search,
  Filter,
  X,
  ClipboardCheck,
  AlertTriangle,
  UploadCloud,
} from "lucide-react";

export default function LogNotifikasiPetugasKandang() {
  const [notifikasi, setNotifikasi] = useState([]);
  const [filter, setFilter] = useState("Semua");
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    // Data dummy sementara (mengacu pada struktur tb_notifikasi_petugas)
    setNotifikasi([
      {
        id_notifikasi: 1,
        judul: "Tugas Baru Diterima",
        pesan:
          "Admin menugaskan Anda untuk menangani proses penyembelihan hewan PSN-00121 di Kandang A.",
        tipe: "Tugas",
        waktu: "04 Nov 2025, 08:15",
        status_baca: false,
      },
      {
        id_notifikasi: 2,
        judul: "Permintaan Upload Bukti",
        pesan:
          "Silakan unggah bukti foto penyembelihan untuk hewan dengan kode HW-202.",
        tipe: "Upload",
        waktu: "03 Nov 2025, 16:00",
        status_baca: true,
      },
      {
        id_notifikasi: 3,
        judul: "Hewan Sakit Terdeteksi",
        pesan:
          "Sistem mendeteksi penurunan berat badan pada hewan HW-187. Segera periksa kondisi fisik.",
        tipe: "Kesehatan",
        waktu: "02 Nov 2025, 11:45",
        status_baca: false,
      },
      {
        id_notifikasi: 4,
        judul: "Proses Kandang Selesai",
        pesan:
          "Anda berhasil menyelesaikan tugas penyembelihan PSN-00120. Data telah dikirim ke admin.",
        tipe: "Operasional",
        waktu: "01 Nov 2025, 17:25",
        status_baca: true,
      },
    ]);
  }, []);

  // --- Filter & Search Logic ---
  const filteredData = notifikasi.filter((item) => {
    const matchFilter =
      filter === "Semua"
        ? true
        : item.tipe === filter || (filter === "Belum Dibaca" && !item.status_baca);
    const matchSearch =
      item.judul.toLowerCase().includes(search.toLowerCase()) ||
      item.pesan.toLowerCase().includes(search.toLowerCase());
    return matchFilter && matchSearch;
  });

  const total = notifikasi.length;
  const belumDibaca = notifikasi.filter((n) => !n.status_baca).length;
  const sudahDibaca = total - belumDibaca;

  return (
    <div className="p-6 space-y-10">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-semibold text-[#3b3b3b] mb-2">
          Log Notifikasi Petugas Kandang
        </h1>
        <p className="text-sm text-[#7a7368]">
          Riwayat semua notifikasi sistem yang dikirim kepada Anda sebagai petugas kandang.
        </p>
      </div>

      {/* Statistik Ringkas */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <Card className="border border-[#eee6da] bg-gradient-to-br from-[#fff7e8] to-[#fbeed7] rounded-2xl">
          <CardContent className="p-4 flex items-center justify-between">
            <div>
              <p className="text-sm text-[#7a7368]">Total Notifikasi</p>
              <h2 className="text-2xl font-bold text-[#3b3b3b]">{total}</h2>
            </div>
            <Bell size={26} className="text-[#e2b97f]" />
          </CardContent>
        </Card>
        <Card className="border border-[#eee6da] bg-gradient-to-br from-[#fff4eb] to-[#fdebdc] rounded-2xl">
          <CardContent className="p-4 flex items-center justify-between">
            <div>
              <p className="text-sm text-[#7a7368]">Belum Dibaca</p>
              <h2 className="text-2xl font-bold text-[#3b3b3b]">
                {belumDibaca}
              </h2>
            </div>
            <AlertCircle size={26} className="text-[#e88c30]" />
          </CardContent>
        </Card>
        <Card className="border border-[#eee6da] bg-gradient-to-br from-[#eefbf4] to-[#dcf7ec] rounded-2xl">
          <CardContent className="p-4 flex items-center justify-between">
            <div>
              <p className="text-sm text-[#7a7368]">Sudah Dibaca</p>
              <h2 className="text-2xl font-bold text-[#3b3b3b]">
                {sudahDibaca}
              </h2>
            </div>
            <CheckCircle size={26} className="text-[#4baf7c]" />
          </CardContent>
        </Card>
      </div>

      {/* Filter & Search */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-3">
          <Filter size={18} className="text-[#7a7368]" />
          <select
            className="border border-[#eee6da] rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#e2b97f]"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option>Semua</option>
            <option>Tugas</option>
            <option>Upload</option>
            <option>Kesehatan</option>
            <option>Operasional</option>
            <option>Belum Dibaca</option>
          </select>
        </div>

        <div className="relative w-full sm:w-64">
          <Search
            size={16}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-[#a8a093]"
          />
          <input
            type="text"
            placeholder="Cari notifikasi..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full border border-[#eee6da] rounded-lg pl-9 pr-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#e2b97f]"
          />
        </div>
      </div>

      {/* Daftar Notifikasi */}
      <div className="bg-white/80 backdrop-blur-md border border-[#eee6da] rounded-2xl shadow-sm p-6">
        <h3 className="text-lg font-semibold text-[#3b3b3b] mb-4">
          Daftar Notifikasi
        </h3>
        <div className="overflow-y-auto max-h-[420px]">
          <table className="w-full text-sm">
            <thead className="text-[#7a7368] border-b border-[#eee6da]">
              <tr>
                <th className="text-left py-2 px-2">Tanggal</th>
                <th className="text-left py-2 px-2">Judul</th>
                <th className="text-left py-2 px-2">Tipe</th>
                <th className="text-left py-2 px-2">Status</th>
                <th className="text-left py-2 px-2">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((item) => (
                <tr
                  key={item.id_notifikasi}
                  className="border-b border-[#f3eee6] hover:bg-[#f9f6ef]/60 transition cursor-pointer"
                >
                  <td className="py-2 px-2">{item.waktu}</td>
                  <td className="py-2 px-2 font-medium">{item.judul}</td>
                  <td className="py-2 px-2">{item.tipe}</td>
                  <td className="py-2 px-2">
                    {item.status_baca ? (
                      <span className="text-green-700 flex items-center gap-1">
                        <MailOpen size={14} /> Dibaca
                      </span>
                    ) : (
                      <span className="text-yellow-700 flex items-center gap-1">
                        <Bell size={14} /> Belum Dibaca
                      </span>
                    )}
                  </td>
                  <td className="py-2 px-2">
                    <button
                      onClick={() => setSelected(item)}
                      className="text-[#e2b97f] hover:text-[#c59e63] text-sm font-medium"
                    >
                      Lihat
                    </button>
                  </td>
                </tr>
              ))}

              {filteredData.length === 0 && (
                <tr>
                  <td
                    colSpan="5"
                    className="text-center py-6 text-[#9a9487] italic"
                  >
                    Tidak ada notifikasi yang sesuai filter.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal Detail Notifikasi */}
      {selected && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl shadow-xl p-6 w-[90%] sm:w-[500px] border border-[#eee6da] relative">
            <button
              className="absolute top-3 right-3 text-[#a8a093] hover:text-[#3b3b3b]"
              onClick={() => setSelected(null)}
            >
              <X size={18} />
            </button>
            <h2 className="text-lg font-semibold text-[#3b3b3b] mb-2">
              {selected.judul}
            </h2>
            <p className="text-sm text-[#7a7368] mb-4">
              {selected.waktu} &middot;{" "}
              <span className="font-medium text-[#e2b97f]">
                {selected.tipe}
              </span>
            </p>
            <p className="text-[#4a4a4a] text-sm leading-relaxed mb-6">
              {selected.pesan}
            </p>
            {!selected.status_baca && (
              <button
                onClick={() => {
                  setNotifikasi((prev) =>
                    prev.map((n) =>
                      n.id_notifikasi === selected.id_notifikasi
                        ? { ...n, status_baca: true }
                        : n
                    )
                  );
                  setSelected(null);
                }}
                className="px-4 py-2 bg-[#e2b97f] text-white rounded-lg hover:bg-[#caa268] transition"
              >
                Tandai Dibaca
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
