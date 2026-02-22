import { useMemo, useState } from "react";
import { Card, CardContent, EmptyState, ErrorState, LoadingState } from "@/shared/ui";
import {
  Bell,
  MailOpen,
  AlertCircle,
  CheckCircle,
  Search,
  Filter,
  X,
} from "lucide-react";
import { fetchAdminNotifications } from "@/features/admin/api/adminApi";
import { useAsyncData } from "@/shared/hooks";

export default function LogNotifikasiAdmin() {
  const { data, setData, error, isLoading, reload } = useAsyncData(
    fetchAdminNotifications,
    {
      initialData: [],
    }
  );
  const [filter, setFilter] = useState("Semua");
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState(null);

  const filteredData = useMemo(() => {
    return data.filter((item) => {
      const matchesFilter =
        filter === "Semua"
          ? true
          : item.tipe === filter || (filter === "Belum Dibaca" && !item.status_baca);

      const keyword = search.toLowerCase();
      const matchesSearch =
        item.judul.toLowerCase().includes(keyword) ||
        item.pesan.toLowerCase().includes(keyword);

      return matchesFilter && matchesSearch;
    });
  }, [data, filter, search]);

  const total = data.length;
  const belumDibaca = data.filter((item) => !item.status_baca).length;
  const sudahDibaca = total - belumDibaca;

  const markAsRead = (id) => {
    setData((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, status_baca: true } : item
      )
    );
  };

  return (
    <div className="p-6 space-y-10">
      <div>
        <h1 className="text-2xl font-semibold text-[#3b3b3b] mb-2">Log Notifikasi</h1>
        <p className="text-sm text-[#7a7368]">
          Riwayat semua notifikasi sistem untuk Admin dan Superadmin.
        </p>
      </div>

      {isLoading ? (
        <LoadingState message="Memuat notifikasi..." />
      ) : error ? (
        <ErrorState
          message={error?.message || "Gagal memuat notifikasi admin."}
          onRetry={reload}
        />
      ) : (
        <>
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

            <Card className="border border-[#eee6da] bg-gradient-to-br from-[#eafaf3] to-[#dcf7ec] rounded-2xl">
              <CardContent className="p-4 flex items-center justify-between">
                <div>
                  <p className="text-sm text-[#7a7368]">Belum Dibaca</p>
                  <h2 className="text-2xl font-bold text-[#3b3b3b]">{belumDibaca}</h2>
                </div>
                <AlertCircle size={26} className="text-[#3ba57c]" />
              </CardContent>
            </Card>

            <Card className="border border-[#eee6da] bg-gradient-to-br from-[#eefbf4] to-[#dcf7ec] rounded-2xl">
              <CardContent className="p-4 flex items-center justify-between">
                <div>
                  <p className="text-sm text-[#7a7368]">Sudah Dibaca</p>
                  <h2 className="text-2xl font-bold text-[#3b3b3b]">{sudahDibaca}</h2>
                </div>
                <CheckCircle size={26} className="text-[#4baf7c]" />
              </CardContent>
            </Card>
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-3">
              <Filter size={18} className="text-[#7a7368]" />
              <select
                className="border border-[#eee6da] rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#e2b97f]"
                value={filter}
                onChange={(event) => setFilter(event.target.value)}
              >
                <option>Semua</option>
                <option>Pembayaran</option>
                <option>Pesanan</option>
                <option>Operasional</option>
                <option>Sistem</option>
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
                onChange={(event) => setSearch(event.target.value)}
                className="w-full border border-[#eee6da] rounded-lg pl-9 pr-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#e2b97f]"
              />
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-md border border-[#eee6da] rounded-2xl shadow-sm p-6">
            <h3 className="text-lg font-semibold text-[#3b3b3b] mb-4">Daftar Notifikasi</h3>
            {filteredData.length === 0 ? (
              <EmptyState message="Tidak ada notifikasi yang sesuai filter." />
            ) : (
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
                        key={item.id}
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
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </>
      )}

      {selected && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl shadow-xl p-6 w-[90%] sm:w-[500px] border border-[#eee6da] relative">
            <button
              className="absolute top-3 right-3 text-[#a8a093] hover:text-[#3b3b3b]"
              onClick={() => setSelected(null)}
            >
              <X size={18} />
            </button>
            <h2 className="text-lg font-semibold text-[#3b3b3b] mb-2">{selected.judul}</h2>
            <p className="text-sm text-[#7a7368] mb-4">
              {selected.waktu} · <span className="font-medium text-[#e2b97f]">{selected.tipe}</span>
            </p>
            <p className="text-[#4a4a4a] text-sm leading-relaxed mb-6">{selected.pesan}</p>
            {!selected.status_baca && (
              <button
                onClick={() => {
                  markAsRead(selected.id);
                  setSelected((prev) => (prev ? { ...prev, status_baca: true } : prev));
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
