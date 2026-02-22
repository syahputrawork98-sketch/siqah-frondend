import { useState } from "react";
import {
  Table,
  Card,
  CardContent,
  CardHeader,
  EmptyState,
  ErrorState,
  LoadingState,
} from "@/shared/ui";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import { FileDown } from "lucide-react";
import { formatCurrencyIdr } from "@/shared/lib";
import { useAsyncData } from "@/shared/hooks";
import { fetchReportChart, fetchReports } from "@/features/superadmin/api/superadminApi";

export default function Laporan() {
  const [filter, setFilter] = useState("bulan");
  const {
    data: laporan,
    error: laporanError,
    isLoading: laporanLoading,
    reload: reloadLaporan,
  } = useAsyncData(fetchReports, { initialData: [] });
  const {
    data: dataChart,
    error: chartError,
    isLoading: chartLoading,
    reload: reloadChart,
  } = useAsyncData(fetchReportChart, { initialData: [] });

  const columns = [
    { header: "Tanggal", accessor: "tanggal" },
    { header: "Nama Konsumen", accessor: "konsumen" },
    {
      header: "Total Pembayaran",
      render: (row) => (
        <span className="font-medium text-[#45624B]">{formatCurrencyIdr(row.total)}</span>
      ),
    },
    {
      header: "Status",
      render: (row) => (
        <span
          className={`px-3 py-1.5 text-xs rounded-full font-medium border ${
            row.status === "Lunas"
              ? "bg-green-50 text-green-700 border-green-200"
              : "bg-amber-50 text-amber-700 border-amber-200"
          }`}
        >
          {row.status}
        </span>
      ),
    },
  ];

  return (
    <div className="space-y-6">
      <Card className="border border-[#e7e1d8] bg-white/90 backdrop-blur-md rounded-2xl shadow-md">
        <CardHeader
          title={<span className="text-[#45624B] font-semibold text-lg">Laporan Pembayaran & Aktivitas</span>}
          subtitle="Lihat rekap transaksi dan aktivitas sistem Siqah Aqiqah"
        />

        <CardContent>
          <div className="flex flex-wrap justify-between items-center mb-6">
            <div className="flex gap-3 border-b border-[#e7e1d8]">
              {["hari", "minggu", "bulan"].map((p) => (
                <button
                  key={p}
                  onClick={() => setFilter(p)}
                  className={`relative px-5 py-2 text-sm font-medium transition-all ${
                    filter === p
                      ? "text-[#45624B] font-semibold after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-gradient-to-r after:from-[#45624B] after:to-[#B9914D]"
                      : "text-[#888] hover:text-[#45624B]"
                  }`}
                >
                  {p.charAt(0).toUpperCase() + p.slice(1)}
                </button>
              ))}
            </div>

            <button
              className="flex items-center gap-2 bg-gradient-to-r from-[#45624B] to-[#B9914D] text-white px-4 py-2 rounded-lg shadow hover:opacity-90 transition"
              onClick={() => alert("Fitur export ke PDF/Excel sedang dikembangkan.")}
            >
              <FileDown size={18} />
              Export
            </button>
          </div>

          {laporanLoading ? (
            <LoadingState message="Memuat laporan..." />
          ) : laporanError ? (
            <ErrorState
              message={laporanError?.message || "Gagal memuat data laporan."}
              onRetry={reloadLaporan}
            />
          ) : laporan.length === 0 ? (
            <EmptyState message="Belum ada data laporan." />
          ) : (
            <div className="overflow-x-auto rounded-xl border border-[#E7E1D8]">
              <Table columns={columns} data={laporan} />
            </div>
          )}
        </CardContent>
      </Card>

      <Card className="border border-[#e7e1d8] bg-white/90 backdrop-blur-md rounded-2xl shadow-md">
        <CardHeader
          title={<span className="text-[#45624B] font-semibold text-lg">Grafik Pendapatan Bulanan</span>}
          subtitle="Visualisasi total pemasukan berdasarkan bulan"
        />
        <CardContent>
          {chartLoading ? (
            <LoadingState message="Memuat grafik pendapatan..." />
          ) : chartError ? (
            <ErrorState
              message={chartError?.message || "Gagal memuat grafik pendapatan."}
              onRetry={reloadChart}
            />
          ) : dataChart.length === 0 ? (
            <EmptyState message="Belum ada data grafik pendapatan." />
          ) : (
            <div className="w-full h-72">
              <ResponsiveContainer>
                <BarChart data={dataChart}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#E7E1D8" />
                  <XAxis dataKey="bulan" tick={{ fill: "#45624B", fontSize: 12 }} />
                  <YAxis tick={{ fill: "#45624B", fontSize: 12 }} />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "rgba(255,255,255,0.9)",
                      border: "1px solid #E7E1D8",
                      borderRadius: "8px",
                      color: "#45624B",
                    }}
                    formatter={(value) => formatCurrencyIdr(value)}
                  />
                  <Bar dataKey="total" fill="url(#gradientSiqah)" radius={[6, 6, 0, 0]} />
                  <defs>
                    <linearGradient id="gradientSiqah" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#B9914D" />
                      <stop offset="100%" stopColor="#45624B" />
                    </linearGradient>
                  </defs>
                </BarChart>
              </ResponsiveContainer>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
