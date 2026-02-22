// client/src/pages/superadmin/Dashboard.jsx
import { Users, ShoppingBag, CreditCard, Bell } from "lucide-react";
import { Card, CardContent } from "../../components/ui/Card";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

export default function Dashboard() {
  const stats = {
    totalUsers: 120,
    totalOrders: 87,
    waitingPayments: 5,
    totalRevenue: 22500000,
    newNotifications: 4,
  };

  const dataChart = [
    { name: "Total Pesanan", value: stats.totalOrders },
    { name: "Menunggu Pembayaran", value: stats.waitingPayments },
    { name: "Notifikasi Baru", value: stats.newNotifications },
  ];

  // Warna utama Siqah
  const COLORS = ["#45624B", "#B9914D", "#EBD9B4"];

  return (
    <div
      className="space-y-10 p-8 rounded-2xl"
      style={{
        backgroundImage: "linear-gradient(to bottom, #fefbf7, #f9f6ef)",
      }}
    >
      {/* Judul */}
      <div className="text-center">
        <h1 className="text-3xl font-bold text-[#45624B]">
          Dashboard <span className="text-[#B9914D]">Superadmin</span>
        </h1>
        <p className="text-sm text-[#6f6b5b]">
          Ringkasan aktivitas sistem dan performa operasional Siqah Aqiqah
        </p>
      </div>

      {/* Statistik */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          icon={<Users className="text-[#45624B]" />}
          title="Total Pengguna"
          value={stats.totalUsers}
          colorFrom="#E3EBD2"
          colorTo="#F5F0E1"
        />
        <StatCard
          icon={<ShoppingBag className="text-[#B9914D]" />}
          title="Total Pesanan"
          value={stats.totalOrders}
          colorFrom="#FAF6E7"
          colorTo="#EBD9B4"
        />
        <StatCard
          icon={<CreditCard className="text-[#45624B]" />}
          title="Total Pendapatan"
          value={`Rp ${stats.totalRevenue.toLocaleString("id-ID")}`}
          colorFrom="#EAE8E2"
          colorTo="#F8F4E3"
        />
        <StatCard
          icon={<Bell className="text-[#B9914D]" />}
          title="Notifikasi Baru"
          value={stats.newNotifications}
          colorFrom="#F8F4E3"
          colorTo="#E9D5B4"
        />
      </div>

      {/* Grafik */}
      <Card className="rounded-2xl shadow-md border-0 bg-white">
        <CardContent className="p-6">
          <h2 className="text-lg font-semibold mb-4 text-[#45624B]">
            Distribusi Aktivitas Sistem
          </h2>
          <div className="w-full h-72">
            <ResponsiveContainer>
              <PieChart>
                <Pie
                  data={dataChart}
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                  label
                >
                  {dataChart.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#fff",
                    borderRadius: "10px",
                    border: "1px solid #EBD9B4",
                    color: "#45624B",
                  }}
                />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

// Komponen Kartu Statistik dengan dua warna lembut
function StatCard({ icon, title, value, colorFrom, colorTo }) {
  return (
    <Card
      className="rounded-2xl border-0 shadow-sm hover:shadow-md transition-all"
      style={{
        backgroundImage: `linear-gradient(to bottom right, ${colorFrom}, ${colorTo})`,
      }}
    >
      <CardContent className="flex items-center gap-4 p-6">
        <div className="p-3 bg-white/70 rounded-xl border border-[#E7E1D8] shadow-sm">
          {icon}
        </div>
        <div>
          <p className="text-sm text-[#6f6b5b]">{title}</p>
          <p className="text-xl font-semibold text-[#45624B]">{value}</p>
        </div>
      </CardContent>
    </Card>
  );
}
