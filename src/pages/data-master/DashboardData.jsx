// client/src/pages/data-master/DashboardData.jsx
import { useEffect, useState } from "react";
import { Card, CardContent } from "../../components/ui/Card";
import {
  Warehouse,
  Drumstick,
  UtensilsCrossed,
  Package,
  Grid,
} from "lucide-react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export default function DashboardData() {
  // --- Data State ---
  const [data, setData] = useState({
    dapur: 0,
    kandang: 0,
    paket: 0,
    menu: 0,
    hewan: 0,
  });

  // --- Dummy data untuk chart & aktivitas (ganti nanti dengan API real) ---
  const [chartData, setChartData] = useState([]);
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    // Simulasi fetch data dari API
    setData({
      dapur: 4,
      kandang: 7,
      paket: 12,
      menu: 9,
      hewan: 28,
    });

    setChartData([
      { name: "Kambing", value: 18 },
      { name: "Domba", value: 6 },
      { name: "Sapi", value: 4 },
    ]);

    setActivities([
      {
        tanggal: "02 Nov 2025",
        petugas: "Petugas Kandang A",
        aktivitas: "Menambah hewan baru (Kambing)",
      },
      {
        tanggal: "01 Nov 2025",
        petugas: "Petugas Dapur B",
        aktivitas: "Menambahkan menu baru (Gulai Domba)",
      },
      {
        tanggal: "31 Okt 2025",
        petugas: "Petugas Dapur C",
        aktivitas: "Memperbarui stok Paket Hemat",
      },
      {
        tanggal: "29 Okt 2025",
        petugas: "Petugas Kandang B",
        aktivitas: "Menambahkan kandang baru (KDG-003)",
      },
    ]);
  }, []);

  const COLORS = ["#e2b97f", "#caa268", "#f6e7c2"];

  // --- Card Statistik ---
  const cards = [
    {
      title: "Total Dapur",
      value: data.dapur,
      icon: UtensilsCrossed,
      color: "from-[#fff7e8] to-[#fbeed7]",
    },
    {
      title: "Total Kandang",
      value: data.kandang,
      icon: Warehouse,
      color: "from-[#eafaf3] to-[#dcf7ec]",
    },
    {
      title: "Total Hewan",
      value: data.hewan,
      icon: Drumstick,
      color: "from-[#f8ecf8] to-[#f3def4]",
    },
    {
      title: "Total Paket",
      value: data.paket,
      icon: Package,
      color: "from-[#e9f2fb] to-[#dceaf9]",
    },
    {
      title: "Total Menu",
      value: data.menu,
      icon: Grid,
      color: "from-[#fff4eb] to-[#fdebdc]",
    },
  ];

  return (
    <div className="p-6 space-y-10">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-semibold text-[#3b3b3b] mb-2">
          Dashboard Data Master
        </h1>
        <p className="text-sm text-[#7a7368]">
          Lihat ringkasan data yang telah diinput oleh petugas kandang dan
          dapur.
        </p>
      </div>

      {/* Statistik Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-5 gap-6">
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
        {/* Grafik Distribusi Hewan */}
        <div className="bg-white/80 backdrop-blur-md border border-[#eee6da] rounded-2xl p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-[#3b3b3b] mb-4">
            Distribusi Hewan per Jenis
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

        {/* Aktivitas Terbaru Petugas */}
        <div className="bg-white/80 backdrop-blur-md border border-[#eee6da] rounded-2xl p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-[#3b3b3b] mb-4">
            Aktivitas Terbaru Petugas
          </h3>
          <div className="overflow-y-auto max-h-72">
            <table className="w-full text-sm">
              <thead className="text-[#7a7368] border-b border-[#eee6da]">
                <tr>
                  <th className="text-left py-2">Tanggal</th>
                  <th className="text-left py-2">Petugas</th>
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
                    <td className="py-2">{act.petugas}</td>
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
