import { Card, CardContent, EmptyState, ErrorState, LoadingState } from "@/shared/ui";
import { useAsyncData } from "@/shared/hooks";
import { fetchAdminMasterReportsDashboard } from "@/features/admin/api/adminApi";
import { DEFAULT_MASTER_REPORTS_DASHBOARD } from "@/features/admin/model/adminDataMappers";
import { Receipt, CreditCard, ShoppingBag, Users, CheckCircle, TrendingUp } from "lucide-react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";

export default function DashboardLaporan() {
  const { data, error, isLoading, reload } = useAsyncData(fetchAdminMasterReportsDashboard, {
    initialData: DEFAULT_MASTER_REPORTS_DASHBOARD,
  });

  const COLORS = ["#e2b97f", "#caa268", "#f6e7c2"];
  const cards = [
    { title: "Total Pesanan", value: data.summary.totalPesanan, icon: ShoppingBag, color: "from-[#fff7e8] to-[#fbeed7]" },
    { title: "Total Invoice", value: data.summary.totalInvoice, icon: Receipt, color: "from-[#eafaf3] to-[#dcf7ec]" },
    { title: "Total Pembayaran", value: data.summary.totalPembayaran, icon: CreditCard, color: "from-[#f8ecf8] to-[#f3def4]" },
    { title: "Total Pendapatan", value: "Rp " + data.summary.totalPendapatan.toLocaleString("id-ID"), icon: TrendingUp, color: "from-[#e9f2fb] to-[#dceaf9]" },
    { title: "Pesanan Selesai", value: data.summary.pesananSelesai, icon: CheckCircle, color: "from-[#fff4eb] to-[#fdebdc]" },
    { title: "Total Konsumen", value: data.summary.totalKonsumen, icon: Users, color: "from-[#eefbf4] to-[#dcf7ec]" },
  ];

  return (
    <div className="p-6 space-y-10">
      <div>
        <h1 className="text-2xl font-semibold text-[#3b3b3b] mb-2">Dashboard Laporan</h1>
        <p className="text-sm text-[#7a7368]">Ringkasan laporan transaksi, keuangan, dan progres operasional dalam sistem Siqah.</p>
      </div>

      {isLoading ? (
        <LoadingState message="Memuat dashboard laporan..." />
      ) : error ? (
        <ErrorState message={error?.message || "Gagal memuat dashboard laporan."} onRetry={reload} />
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-6 gap-6">
            {cards.map((card) => {
              const Icon = card.icon;
              return (
                <Card key={card.title} className={`shadow-sm border border-[#eee6da] bg-gradient-to-br ${card.color} rounded-2xl hover:shadow-md transition`}>
                  <CardContent className="p-5 flex items-center justify-between">
                    <div>
                      <p className="text-sm text-[#7a7368]">{card.title}</p>
                      <h2 className="text-2xl font-bold text-[#3b3b3b] mt-1">{card.value}</h2>
                    </div>
                    <div className="p-3 bg-white/60 rounded-xl shadow-inner">
                      <Icon size={28} className="text-[#e2b97f]" />
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white/80 backdrop-blur-md border border-[#eee6da] rounded-2xl p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-[#3b3b3b] mb-4">Tren Pendapatan Bulanan</h3>
              {data.chartPendapatan.length === 0 ? (
                <EmptyState message="Data tren pendapatan belum tersedia." />
              ) : (
                <ResponsiveContainer width="100%" height={280}>
                  <LineChart data={data.chartPendapatan}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="bulan" />
                    <YAxis />
                    <Tooltip formatter={(v) => "Rp " + v.toLocaleString("id-ID")} />
                    <Line type="monotone" dataKey="total" stroke="#e2b97f" strokeWidth={3} dot={{ r: 5 }} />
                  </LineChart>
                </ResponsiveContainer>
              )}
            </div>

            <div className="bg-white/80 backdrop-blur-md border border-[#eee6da] rounded-2xl p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-[#3b3b3b] mb-4">Status Pembayaran</h3>
              {data.chartStatusPembayaran.length === 0 ? (
                <EmptyState message="Data status pembayaran belum tersedia." />
              ) : (
                <ResponsiveContainer width="100%" height={280}>
                  <PieChart>
                    <Pie data={data.chartStatusPembayaran} cx="50%" cy="50%" labelLine={false} outerRadius={100} fill="#e2b97f" dataKey="value">
                      {data.chartStatusPembayaran.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              )}
            </div>
          </div>

          <div className="bg-white/80 backdrop-blur-md border border-[#eee6da] rounded-2xl p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-[#3b3b3b] mb-4">Transaksi Terbaru</h3>
            {data.recentTransaksi.length === 0 ? (
              <EmptyState message="Belum ada transaksi terbaru." />
            ) : (
              <div className="overflow-y-auto max-h-72">
                <table className="w-full text-sm">
                  <thead className="text-[#7a7368] border-b border-[#eee6da]">
                    <tr>
                      <th className="text-left py-2">Tanggal</th>
                      <th className="text-left py-2">Kode</th>
                      <th className="text-left py-2">Konsumen</th>
                      <th className="text-left py-2">Total</th>
                      <th className="text-left py-2">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.recentTransaksi.map((trx, i) => (
                      <tr key={i} className="siqah-table-row">
                        <td className="py-2">{trx.tanggal}</td>
                        <td className="py-2 font-medium">{trx.kode}</td>
                        <td className="py-2">{trx.konsumen}</td>
                        <td className="py-2">{trx.total}</td>
                        <td className={`py-2 font-medium ${trx.status === "Lunas" ? "text-green-600" : trx.status === "DP" ? "text-yellow-600" : "text-red-500"}`}>
                          {trx.status}
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
    </div>
  );
}
