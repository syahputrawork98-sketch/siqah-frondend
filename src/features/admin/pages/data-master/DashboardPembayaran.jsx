import { Card, CardContent, EmptyState, ErrorState, LoadingState } from "@/shared/ui";
import { useAsyncData } from "@/shared/hooks";
import { fetchAdminMasterPaymentsDashboard } from "@/features/admin/api/adminApi";
import { DEFAULT_MASTER_PAYMENTS_DASHBOARD } from "@/features/admin/model/adminDataMappers";
import { CreditCard, CheckCircle, FileText, DollarSign, BadgeCheck } from "lucide-react";
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";

export default function DashboardPembayaran() {
  const { data, error, isLoading, reload } = useAsyncData(fetchAdminMasterPaymentsDashboard, {
    initialData: DEFAULT_MASTER_PAYMENTS_DASHBOARD,
  });

  const COLORS = ["#e2b97f", "#f2deb3", "#f6e7c2", "#caa268", "#e8d7b8"];
  const cards = [
    { title: "Jumlah Pengajuan", value: data.summary.pengajuan, icon: CreditCard, color: "from-[#fff7e8] to-[#fbeed7]" },
    { title: "Telah Divalidasi", value: data.summary.validasi, icon: CheckCircle, color: "from-[#eafaf3] to-[#dcf7ec]" },
    { title: "Jumlah Invoice", value: data.summary.invoice, icon: FileText, color: "from-[#f8ecf8] to-[#f3def4]" },
    { title: "Telah Dibayar", value: data.summary.dibayar, icon: DollarSign, color: "from-[#e9f2fb] to-[#dceaf9]" },
    { title: "Status Lunas", value: data.summary.lunas, icon: BadgeCheck, color: "from-[#fff3e5] to-[#ffe9cc]" },
  ];

  return (
    <div className="p-6 space-y-10">
      <div>
        <h1 className="text-2xl font-semibold text-[#3b3b3b] mb-2">Dashboard Pembayaran</h1>
        <p className="text-sm text-[#7a7368]">Lihat ringkasan pengajuan, validasi, dan status pembayaran Aqiqah Siqah.</p>
      </div>

      {isLoading ? (
        <LoadingState message="Memuat dashboard pembayaran..." />
      ) : error ? (
        <ErrorState message={error?.message || "Gagal memuat dashboard pembayaran."} onRetry={reload} />
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 gap-6">
            {cards.map((card) => {
              const Icon = card.icon;
              return (
                <Card key={card.title} className={`shadow-sm border border-[#eee6da] bg-gradient-to-br ${card.color} rounded-2xl hover:shadow-md transition`}>
                  <CardContent className="p-5 flex items-center justify-between">
                    <div>
                      <p className="text-sm text-[#7a7368]">{card.title}</p>
                      <h2 className="text-3xl font-bold text-[#3b3b3b] mt-1">{card.value}</h2>
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
              <h3 className="text-lg font-semibold text-[#3b3b3b] mb-4">Distribusi Status Pembayaran</h3>
              {data.chartData.length === 0 ? (
                <EmptyState message="Data distribusi pembayaran belum tersedia." />
              ) : (
                <ResponsiveContainer width="100%" height={280}>
                  <PieChart>
                    <Pie data={data.chartData} cx="50%" cy="50%" labelLine={false} outerRadius={100} fill="#e2b97f" dataKey="value">
                      {data.chartData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              )}
            </div>

            <div className="bg-white/80 backdrop-blur-md border border-[#eee6da] rounded-2xl p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-[#3b3b3b] mb-4">Aktivitas Terbaru Pembayaran</h3>
              {data.activities.length === 0 ? (
                <EmptyState message="Belum ada aktivitas terbaru pembayaran." />
              ) : (
                <div className="overflow-y-auto max-h-72">
                  <table className="w-full text-sm">
                    <thead className="text-[#7a7368] border-b border-[#eee6da]">
                      <tr>
                        <th className="text-left py-2">Tanggal</th>
                        <th className="text-left py-2">User</th>
                        <th className="text-left py-2">Aktivitas</th>
                      </tr>
                    </thead>
                    <tbody>
                      {data.activities.map((act, i) => (
                        <tr key={i} className="siqah-table-row">
                          <td className="py-2">{act.tanggal}</td>
                          <td className="py-2">{act.user}</td>
                          <td className="py-2">{act.aktivitas}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
