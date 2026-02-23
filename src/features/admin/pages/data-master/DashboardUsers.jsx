import { Card, CardContent, EmptyState, ErrorState, LoadingState } from "@/shared/ui";
import { useAsyncData } from "@/shared/hooks";
import { fetchAdminMasterUsersDashboard } from "@/features/admin/api/adminApi";
import { DEFAULT_MASTER_USERS_DASHBOARD } from "@/features/admin/model/adminDataMappers";
import { Users, ShieldCheck, UserRound } from "lucide-react";
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";

export default function DashboardUsers() {
  const { data, error, isLoading, reload } = useAsyncData(fetchAdminMasterUsersDashboard, {
    initialData: DEFAULT_MASTER_USERS_DASHBOARD,
  });

  const COLORS = ["#e2b97f", "#caa268", "#f6e7c2", "#f2deb3"];
  const cards = [
    { title: "Total Public", value: data.counts.public, icon: Users, color: "from-[#fff7e8] to-[#fbeed7]" },
    { title: "Total Admin", value: data.counts.admin, icon: UserRound, color: "from-[#eafaf3] to-[#dcf7ec]" },
    { title: "Total Superadmin", value: data.counts.superadmin, icon: ShieldCheck, color: "from-[#e9f2fb] to-[#dceaf9]" },
  ];

  return (
    <div className="p-6 space-y-10">
      <div>
        <h1 className="text-2xl font-semibold text-[#3b3b3b] mb-2">Dashboard User</h1>
        <p className="text-sm text-[#7a7368]">Lihat ringkasan jumlah pengguna berdasarkan role aktif sistem.</p>
      </div>

      {isLoading ? (
        <LoadingState message="Memuat dashboard user..." />
      ) : error ? (
        <ErrorState message={error?.message || "Gagal memuat dashboard user."} onRetry={reload} />
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
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
              <h3 className="text-lg font-semibold text-[#3b3b3b] mb-4">Distribusi Pengguna Siqah</h3>
              {data.chartData.length === 0 ? (
                <EmptyState message="Data distribusi pengguna belum tersedia." />
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
              <h3 className="text-lg font-semibold text-[#3b3b3b] mb-4">Aktivitas Terbaru Pengguna</h3>
              {data.activities.length === 0 ? (
                <EmptyState message="Belum ada aktivitas terbaru pengguna." />
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
