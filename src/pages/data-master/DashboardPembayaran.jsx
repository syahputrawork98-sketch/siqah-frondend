// client/src/pages/pembayaran/DashboardPembayaran.jsx
import { useEffect, useState } from "react";
import { Card, CardContent } from "../../components/ui/Card";
import {
  CreditCard,
  CheckCircle,
  FileText,
  DollarSign,
  BadgeCheck,
} from "lucide-react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export default function DashboardPembayaran() {
  const [data, setData] = useState({
    pengajuan: 0,
    validasi: 0,
    invoice: 0,
    dibayar: 0,
    lunas: 0,
  });

  const [chartData, setChartData] = useState([]);
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    // --- Dummy data sementara (nanti diganti API real) ---
    setData({
      pengajuan: 45,
      validasi: 37,
      invoice: 52,
      dibayar: 30,
      lunas: 25,
    });

    setChartData([
      { name: "Pengajuan", value: 45 },
      { name: "Tervalidasi", value: 37 },
      { name: "Invoice", value: 52 },
      { name: "Dibayar", value: 30 },
      { name: "Lunas", value: 25 },
    ]);

    setActivities([
      {
        tanggal: "02 Nov 2025",
        user: "Konsumen - Ahmad Fauzi",
        aktivitas: "Mengajukan pembayaran untuk INV-023.",
      },
      {
        tanggal: "01 Nov 2025",
        user: "Admin - Nurul Aini",
        aktivitas: "Memvalidasi pembayaran INV-018.",
      },
      {
        tanggal: "31 Okt 2025",
        user: "Konsumen - Dedi Pratama",
        aktivitas: "Melakukan pembayaran sebesar Rp1.500.000.",
      },
      {
        tanggal: "30 Okt 2025",
        user: "Admin - Rina Dewi",
        aktivitas: "Menandai INV-015 sebagai LUNAS.",
      },
    ]);
  }, []);

  const COLORS = ["#e2b97f", "#f2deb3", "#f6e7c2", "#caa268", "#e8d7b8"];

  const cards = [
    {
      title: "Jumlah Pengajuan",
      value: data.pengajuan,
      icon: CreditCard,
      color: "from-[#fff7e8] to-[#fbeed7]",
    },
    {
      title: "Telah Divalidasi",
      value: data.validasi,
      icon: CheckCircle,
      color: "from-[#eafaf3] to-[#dcf7ec]",
    },
    {
      title: "Jumlah Invoice",
      value: data.invoice,
      icon: FileText,
      color: "from-[#f8ecf8] to-[#f3def4]",
    },
    {
      title: "Telah Dibayar",
      value: data.dibayar,
      icon: DollarSign,
      color: "from-[#e9f2fb] to-[#dceaf9]",
    },
    {
      title: "Status Lunas",
      value: data.lunas,
      icon: BadgeCheck,
      color: "from-[#fff3e5] to-[#ffe9cc]",
    },
  ];

  return (
    <div className="p-6 space-y-10">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-semibold text-[#3b3b3b] mb-2">
          Dashboard Pembayaran
        </h1>
        <p className="text-sm text-[#7a7368]">
          Lihat ringkasan pengajuan, validasi, dan status pembayaran Aqiqah Siqah.
        </p>
      </div>

      {/* Statistik Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 gap-6">
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
        {/* Grafik Distribusi Pembayaran */}
        <div className="bg-white/80 backdrop-blur-md border border-[#eee6da] rounded-2xl p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-[#3b3b3b] mb-4">
            Distribusi Status Pembayaran
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

        {/* Aktivitas Terbaru Pembayaran */}
        <div className="bg-white/80 backdrop-blur-md border border-[#eee6da] rounded-2xl p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-[#3b3b3b] mb-4">
            Aktivitas Terbaru Pembayaran
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
