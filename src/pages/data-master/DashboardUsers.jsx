// client/src/pages/data-master/DashboardUsers
// .jsx
import { useEffect, useState } from "react";
import { Card, CardContent } from "../../components/ui/Card";
import {
  Users,
  Truck,
  Warehouse,
  UtensilsCrossed,
} from "lucide-react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export default function DashboardUsers
() {
  // --- Data State ---
  const [data, setData] = useState({
    konsumen: 0,
    kurir: 0,
    kandang: 0,
    dapur: 0,
  });

  // --- Dummy data untuk chart & aktivitas (nanti diganti API real) ---
  const [chartData, setChartData] = useState([]);
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    // Simulasi fetch data dari API
    setData({
      konsumen: 152,
      kurir: 5,
      kandang: 7,
      dapur: 4,
    });

    setChartData([
      { name: "Konsumen", value: 152 },
      { name: "Petugas Kurir", value: 5 },
      { name: "Petugas Kandang", value: 7 },
      { name: "Petugas Dapur", value: 4 },
    ]);

    setActivities([
      {
        tanggal: "02 Nov 2025",
        user: "Konsumen - Ahmad Fauzi",
        aktivitas: "Melakukan pemesanan Paket Aqiqah Premium.",
      },
      {
        tanggal: "01 Nov 2025",
        user: "Petugas Kurir - Rudi Hartono",
        aktivitas: "Mengantarkan pesanan ke daerah Antapani.",
      },
      {
        tanggal: "31 Okt 2025",
        user: "Petugas Dapur - Siti Nurhaliza",
        aktivitas: "Memasak pesanan untuk 15 paket Aqiqah.",
      },
      {
        tanggal: "29 Okt 2025",
        user: "Petugas Kandang - Samsul Anwar",
        aktivitas: "Menambahkan hewan baru di KDG-003.",
      },
    ]);
  }, []);

  const COLORS = ["#e2b97f", "#caa268", "#f6e7c2", "#f2deb3"];

  // --- Card Statistik ---
  const cards = [
    {
      title: "Total Konsumen",
      value: data.konsumen,
      icon: Users,
      color: "from-[#fff7e8] to-[#fbeed7]",
    },
    {
      title: "Total Petugas Kurir",
      value: data.kurir,
      icon: Truck,
      color: "from-[#eafaf3] to-[#dcf7ec]",
    },
    {
      title: "Total Petugas Kandang",
      value: data.kandang,
      icon: Warehouse,
      color: "from-[#f8ecf8] to-[#f3def4]",
    },
    {
      title: "Total Petugas Dapur",
      value: data.dapur,
      icon: UtensilsCrossed,
      color: "from-[#e9f2fb] to-[#dceaf9]",
    },
  ];

  return (
    <div className="p-6 space-y-10">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-semibold text-[#3b3b3b] mb-2">
          Dashboard User
        </h1>
        <p className="text-sm text-[#7a7368]">
          Lihat ringkasan jumlah konsumen dan seluruh petugas operasional Siqah.
        </p>
      </div>

      {/* Statistik Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
        {cards.map((card) => {
          const Icon = card.icon;
          return (
            <Card
              key={card.title}
              className={`shadow-sm border border-[#eee6da] bg-gradient-to-br ${card.color} rounded-2xl hover:shadow-md transition`}
            >
              <CardContent className="p-5 flex items-center justify-between">
                <div>
                  <p className="text-sm text-[#7a7368]">{card.title}</p>
                  <h2 className="text-3xl font-bold text-[#3b3b3b] mt-1">
                    {card.value}
                  </h2>
                </div>
                <div className="p-3 bg-white/60 rounded-xl shadow-inner">
                  <Icon size={28} className="text-[#e2b97f]" />
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Grafik dan Aktivitas */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Grafik Distribusi User */}
        <div className="bg-white/80 backdrop-blur-md border border-[#eee6da] rounded-2xl p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-[#3b3b3b] mb-4">
            Distribusi Pengguna Siqah
          </h3>
          <ResponsiveContainer width="100%" height={280}>
            <PieChart>
              <Pie
                data={chartData}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={100}
                fill="#e2b97f"
                dataKey="value"
              >
                {chartData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Aktivitas Terbaru Pengguna */}
        <div className="bg-white/80 backdrop-blur-md border border-[#eee6da] rounded-2xl p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-[#3b3b3b] mb-4">
            Aktivitas Terbaru Pengguna
          </h3>
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
                {activities.map((act, i) => (
                  <tr
                    key={i}
                    className="border-b border-[#f3eee6] hover:bg-[#f9f6ef]/60 transition"
                  >
                    <td className="py-2">{act.tanggal}</td>
                    <td className="py-2">{act.user}</td>
                    <td className="py-2">{act.aktivitas}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
