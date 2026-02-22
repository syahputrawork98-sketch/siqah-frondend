// client/src/pages/petugas/kandang/DashboardLaporanPetugasKandang.jsx
import { useEffect, useState } from "react";
import { Card, CardContent } from "../../../components/ui/Card";
import {
  Activity,
  CheckCircle,
  AlertTriangle,
  PawPrint,
  CalendarDays,
  TrendingUp,
} from "lucide-react";
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

export default function DashboardLaporanPetugasKandang() {
  const [summary, setSummary] = useState({
    totalHewan: 0,
    totalKandang: 0,
    prosesAktif: 0,
    prosesSelesai: 0,
    hewanSehat: 0,
    hewanSakit: 0,
  });

  const [chartMingguan, setChartMingguan] = useState([]);
  const [chartBulanan, setChartBulanan] = useState([]);
  const [chartKesehatan, setChartKesehatan] = useState([]);

  // Data dummy (akan diganti API)
  useEffect(() => {
    setSummary({
      totalHewan: 45,
      totalKandang: 3,
      prosesAktif: 8,
      prosesSelesai: 37,
      hewanSehat: 39,
      hewanSakit: 6,
    });

    // Grafik aktivitas mingguan (jumlah proses per hari)
    setChartMingguan([
      { hari: "Sen", proses: 3 },
      { hari: "Sel", proses: 5 },
      { hari: "Rab", proses: 4 },
      { hari: "Kam", proses: 6 },
      { hari: "Jum", proses: 3 },
      { hari: "Sab", proses: 2 },
      { hari: "Min", proses: 1 },
    ]);

    // Grafik laporan bulanan (jumlah proses selesai)
    setChartBulanan([
      { bulan: "Jan", selesai: 30 },
      { bulan: "Feb", selesai: 35 },
      { bulan: "Mar", selesai: 42 },
      { bulan: "Apr", selesai: 38 },
      { bulan: "Mei", selesai: 40 },
      { bulan: "Jun", selesai: 44 },
      { bulan: "Jul", selesai: 50 },
      { bulan: "Agu", selesai: 46 },
      { bulan: "Sep", selesai: 39 },
      { bulan: "Okt", selesai: 48 },
      { bulan: "Nov", selesai: 45 },
    ]);

    // Grafik pie kesehatan hewan
    setChartKesehatan([
      { name: "Sehat", value: 39 },
      { name: "Perlu Perawatan", value: 4 },
      { name: "Sakit", value: 2 },
    ]);
  }, []);

  const COLORS = ["#9ed27a", "#f6d77c", "#f2997d"];

  const cards = [
    {
      title: "Total Hewan",
      value: summary.totalHewan,
      icon: PawPrint,
      color: "from-[#fff7e8] to-[#fbeed7]",
    },
    {
      title: "Total Kandang",
      value: summary.totalKandang,
      icon: CalendarDays,
      color: "from-[#eafaf3] to-[#dcf7ec]",
    },
    {
      title: "Proses Aktif",
      value: summary.prosesAktif,
      icon: Activity,
      color: "from-[#f8ecf8] to-[#f3def4]",
    },
    {
      title: "Proses Selesai",
      value: summary.prosesSelesai,
      icon: CheckCircle,
      color: "from-[#e9f2fb] to-[#dceaf9]",
    },
    {
      title: "Hewan Sehat",
      value: summary.hewanSehat,
      icon: CheckCircle,
      color: "from-[#eefbf4] to-[#dcf7ec]",
    },
    {
      title: "Hewan Sakit",
      value: summary.hewanSakit,
      icon: AlertTriangle,
      color: "from-[#fff4eb] to-[#fdebdc]",
    },
  ];

  return (
    <div className="p-6 space-y-10">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-semibold text-[#3b3b3b] mb-2">
          Dashboard Laporan Kandang
        </h1>
        <p className="text-sm text-[#7a7368]">
          Ringkasan laporan aktivitas, kesehatan hewan, dan progres kerja Anda.
        </p>
      </div>

      {/* Statistik Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-6 gap-6">
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
                  <h2 className="text-2xl font-bold text-[#3b3b3b] mt-1">
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

      {/* Grafik Aktivitas */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Grafik Mingguan */}
        <div className="bg-white/80 backdrop-blur-md border border-[#eee6da] rounded-2xl p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-[#3b3b3b] mb-4">
            Aktivitas Proses Mingguan
          </h3>
          <ResponsiveContainer width="100%" height={280}>
            <LineChart data={chartMingguan}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="hari" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="proses"
                stroke="#e2b97f"
                strokeWidth={3}
                dot={{ r: 5 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Grafik Bulanan */}
        <div className="bg-white/80 backdrop-blur-md border border-[#eee6da] rounded-2xl p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-[#3b3b3b] mb-4">
            Rekap Proses Selesai Bulanan
          </h3>
          <ResponsiveContainer width="100%" height={280}>
            <LineChart data={chartBulanan}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="bulan" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="selesai"
                stroke="#caa268"
                strokeWidth={3}
                dot={{ r: 5 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Grafik Kesehatan Hewan */}
      <div className="bg-white/80 backdrop-blur-md border border-[#eee6da] rounded-2xl p-6 shadow-sm">
        <h3 className="text-lg font-semibold text-[#3b3b3b] mb-4">
          Kondisi Kesehatan Hewan
        </h3>
        <ResponsiveContainer width="100%" height={280}>
          <PieChart>
            <Pie
              data={chartKesehatan}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={100}
              fill="#e2b97f"
              dataKey="value"
            >
              {chartKesehatan.map((entry, index) => (
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
    </div>
  );
}
