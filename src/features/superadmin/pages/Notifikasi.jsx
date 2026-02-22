import { useState } from "react";
import {
  Table,
  Button,
  Card,
  CardContent,
  CardHeader,
  EmptyState,
  ErrorState,
  LoadingState,
} from "@/shared/ui";
import { Bell, Trash2, Clock3, Activity } from "lucide-react";
import { useAsyncData } from "@/shared/hooks";
import {
  fetchActivityLogs,
  fetchSystemNotifications,
} from "@/features/superadmin/api/superadminApi";

export default function Notifikasi() {
  const [tab, setTab] = useState("notifikasi");
  const {
    data: notifikasiList,
    error: notifError,
    isLoading: notifLoading,
    reload: reloadNotif,
  } = useAsyncData(fetchSystemNotifications, { initialData: [] });
  const {
    data: logList,
    error: logError,
    isLoading: logLoading,
    reload: reloadLog,
  } = useAsyncData(fetchActivityLogs, { initialData: [] });

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

  const isLoading = tab === "notifikasi" ? notifLoading : logLoading;
  const error = tab === "notifikasi" ? notifError : logError;
  const data = tab === "notifikasi" ? notifikasiList : logList;
  const reload = tab === "notifikasi" ? reloadNotif : reloadLog;

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
          <div className="flex gap-4 border-b border-[#E7E1D8] mb-4">
            {[
              { key: "notifikasi", label: "Notifikasi", icon: <Bell size={16} /> },
              { key: "log", label: "Log Aktivitas", icon: <Activity size={16} /> },
            ].map((item) => (
              <Button
                key={item.key}
                onClick={() => setTab(item.key)}
                className={`relative px-4 py-2 text-sm font-medium flex items-center gap-2 transition ${
                  tab === item.key
                    ? "text-[#45624B] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-gradient-to-r after:from-[#45624B] after:to-[#B9914D]"
                    : "text-gray-500 hover:text-[#45624B]"
                }`}
                variant="ghost"
                size="sm"
              >
                {item.icon}
                {item.label}
              </Button>
            ))}
          </div>

          {tab === "notifikasi" && (
            <div className="flex justify-end mb-3">
              <Button variant="ghost" size="sm" className="text-[#B9914D] hover:text-[#45624B]">
                <Trash2 size={16} />
                Hapus Semua
              </Button>
            </div>
          )}

          {tab === "log" && (
            <div className="flex justify-end mb-3">
              <span className="flex items-center gap-1 text-gray-500 text-sm">
                <Clock3 size={14} />
                Terakhir diperbarui: 5 menit lalu
              </span>
            </div>
          )}

          {isLoading ? (
            <LoadingState message="Memuat data notifikasi..." />
          ) : error ? (
            <ErrorState
              message={error?.message || "Gagal memuat data notifikasi."}
              onRetry={reload}
            />
          ) : data.length === 0 ? (
            <EmptyState message="Belum ada data tersedia." />
          ) : (
            <Table columns={tab === "notifikasi" ? columnsNotif : columnsLog} data={data} />
          )}
        </CardContent>
      </Card>
    </div>
  );
}
