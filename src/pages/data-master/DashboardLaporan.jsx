// client/src/pages/laporan/DashboardLaporan.jsx
import { useEffect, useState } from "react";
import { Card, CardContent } from "../../components/ui/Card";
import {
  Receipt,
  CreditCard,
  ShoppingBag,
  Users,
  CheckCircle,
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

export default function DashboardLaporan() {
  // --- State ---
  const [summary, setSummary] = useState({
    totalPesanan: 0,
    totalInvoice: 0,
    totalPembayaran: 0,
    totalPendapatan: 0,
    pesananSelesai: 0,
    totalKonsumen: 0,
  });

  const [chartPendapatan, setChartPendapatan] = useState([]);
  const [chartStatusPembayaran, setChartStatusPembayaran] = useState([]);
  const [recentTransaksi, setRecentTransaksi] = useState([]);

  // --- Dummy data sementara (bisa diganti API backend nanti) ---
  useEffect(() => {
    setSummary({
      totalPesanan: 124,
      totalInvoice: 210,
      totalPembayaran: 185,
      totalPendapatan: 85000000,
      pesananSelesai: 98,
      totalKonsumen: 75,
    });

    // Data grafik pendapatan bulanan
    setChartPendapatan([
      { bulan: "Jan", total: 5000000 },
      { bulan: "Feb", total: 7000000 },
      { bulan: "Mar", total: 9000000 },
      { bulan: "Apr", total: 6500000 },
      { bulan: "Mei", total: 8000000 },
      { bulan: "Jun", total: 12000000 },
      { bulan: "Jul", total: 9500000 },
      { bulan: "Agu", total: 10500000 },
      { bulan: "Sep", total: 11500000 },
      { bulan: "Okt", total: 9800000 },
      { bulan: "Nov", total: 8700000 },
    ]);

    // Data pie chart status pembayaran
    setChartStatusPembayaran([
      { name: "Belum Lunas", value: 24 },
      { name: "DP", value: 46 },
      { name: "Lunas", value: 55 },
    ]);

    // Data transaksi terbaru
    setRecentTransaksi([
      {
        tanggal: "03 Nov 2025",
        kode: "PSN00124",
        konsumen: "Ahmad Fauzi",
        total: "Rp 2.500.000",
        status: "Lunas",
      },
      {
        tanggal: "02 Nov 2025",
        kode: "PSN00123",
        konsumen: "Rina Mulyani",
        total: "Rp 1.800.000",
        status: "DP",
      },
      {
        tanggal: "01 Nov 2025",
        kode: "PSN00122",
        konsumen: "Budi Santoso",
        total: "Rp 3.200.000",
        status: "Lunas",
      },
      {
        tanggal: "31 Okt 2025",
        kode: "PSN00121",
        konsumen: "Fitri Ayu",
        total: "Rp 2.000.000",
        status: "Belum Lunas",
      },
    ]);
  }, []);

  const COLORS = ["#e2b97f", "#caa268", "#f6e7c2"];

  // --- Data Card ---
  const cards = [
    {
      title: "Total Pesanan",
      value: summary.totalPesanan,
      icon: ShoppingBag,
      color: "from-[#fff7e8] to-[#fbeed7]",
    },
    {
      title: "Total Invoice",
      value: summary.totalInvoice,
      icon: Receipt,
      color: "from-[#eafaf3] to-[#dcf7ec]",
    },
    {
      title: "Total Pembayaran",
      value: summary.totalPembayaran,
      icon: CreditCard,
      color: "from-[#f8ecf8] to-[#f3def4]",
    },
    {
      title: "Total Pendapatan",
      value:
        "Rp " + summary.totalPendapatan.toLocaleString("id-ID"),
      icon: TrendingUp,
      color: "from-[#e9f2fb] to-[#dceaf9]",
    },
    {
      title: "Pesanan Selesai",
      value: summary.pesananSelesai,
      icon: CheckCircle,
      color: "from-[#fff4eb] to-[#fdebdc]",
    },
    {
      title: "Total Konsumen",
      value: summary.totalKonsumen,
      icon: Users,
      color: "from-[#eefbf4] to-[#dcf7ec]",
    },
  ];

  return (
    <div className="p-6 space-y-10">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-semibold text-[#3b3b3b] mb-2">
          Dashboard Laporan
        </h1>
        <p className="text-sm text-[#7a7368]">
          Ringkasan laporan transaksi, keuangan, dan progres operasional
          dalam sistem Siqah.
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

      {/* Grafik dan Tabel */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Grafik Pendapatan Bulanan */}
        <div className="bg-white/80 backdrop-blur-md border border-[#eee6da] rounded-2xl p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-[#3b3b3b] mb-4">
            Tren Pendapatan Bulanan
          </h3>
          <ResponsiveContainer width="100%" height={280}>
            <LineChart data={chartPendapatan}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="bulan" />
              <YAxis />
              <Tooltip formatter={(v) => "Rp " + v.toLocaleString("id-ID")} />
              <Line
                type="monotone"
                dataKey="total"
                stroke="#e2b97f"
                strokeWidth={3}
                dot={{ r: 5 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Grafik Status Pembayaran */}
        <div className="bg-white/80 backdrop-blur-md border border-[#eee6da] rounded-2xl p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-[#3b3b3b] mb-4">
            Status Pembayaran
          </h3>
          <ResponsiveContainer width="100%" height={280}>
            <PieChart>
              <Pie
                data={chartStatusPembayaran}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={100}
                fill="#e2b97f"
                dataKey="value"
              >
                {chartStatusPembayaran.map((entry, index) => (
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

      {/* Transaksi Terbaru */}
      <div className="bg-white/80 backdrop-blur-md border border-[#eee6da] rounded-2xl p-6 shadow-sm">
        <h3 className="text-lg font-semibold text-[#3b3b3b] mb-4">
          Transaksi Terbaru
        </h3>
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
              {recentTransaksi.map((trx, i) => (
                <tr
                  key={i}
                  className="border-b border-[#f3eee6] hover:bg-[#f9f6ef]/60 transition"
                >
                  <td className="py-2">{trx.tanggal}</td>
                  <td className="py-2 font-medium">{trx.kode}</td>
                  <td className="py-2">{trx.konsumen}</td>
                  <td className="py-2">{trx.total}</td>
                  <td
                    className={`py-2 font-medium ${
                      trx.status === "Lunas"
                        ? "text-green-600"
                        : trx.status === "DP"
                        ? "text-yellow-600"
                        : "text-red-500"
                    }`}
                  >
                    {trx.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
