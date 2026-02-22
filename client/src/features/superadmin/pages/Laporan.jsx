import { useState } from "react";
import { Table } from "@/shared/ui";
import { Card, CardContent, CardHeader } from "@/shared/ui";
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

export default function Laporan() {
  const [filter, setFilter] = useState("bulan");

  // 📊 Data dummy laporan pembayaran
  const laporan = [
    { id: 1, tanggal: "2025-10-29", konsumen: "Ahmad Fauzi", total: 3500000, status: "Lunas" },
    { id: 2, tanggal: "2025-10-30", konsumen: "Budi Santoso", total: 2500000, status: "Pending" },
    { id: 3, tanggal: "2025-11-01", konsumen: "Citra Dewi", total: 4000000, status: "Lunas" },
  ];

  // 📈 Data grafik pendapatan
  const dataChart = [
    { bulan: "September", total: 12000000 },
    { bulan: "Oktober", total: 21000000 },
    { bulan: "November", total: 16500000 },
  ];

  const columns = [
    { header: "Tanggal", accessor: "tanggal" },
    { header: "Nama Konsumen", accessor: "konsumen" },
    {
      header: "Total Pembayaran",
      render: (row) => (
        <span className="font-medium text-[#45624B]">
          Rp {row.total.toLocaleString("id-ID")}
        </span>
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
      {/* ======== KARTU LAPORAN ======== */}
      <Card className="border border-[#e7e1d8] bg-white/90 backdrop-blur-md rounded-2xl shadow-md">
        <CardHeader
          title={<span className="text-[#45624B] font-semibold text-lg">Laporan Pembayaran & Aktivitas</span>}
          subtitle="Lihat rekap transaksi dan aktivitas sistem Siqah Aqiqah"
        />

        <CardContent>
          {/* Filter Periode */}
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

          {/* Tabel Laporan */}
          <div className="overflow-x-auto rounded-xl border border-[#E7E1D8]">
            <Table columns={columns} data={laporan} />
          </div>
        </CardContent>
      </Card>

      {/* ======== GRAFIK PENDAPATAN ======== */}
      <Card className="border border-[#e7e1d8] bg-white/90 backdrop-blur-md rounded-2xl shadow-md">
        <CardHeader
          title={<span className="text-[#45624B] font-semibold text-lg">Grafik Pendapatan Bulanan</span>}
          subtitle="Visualisasi total pemasukan berdasarkan bulan"
        />
        <CardContent>
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
                  formatter={(value) =>
                    `Rp ${value.toLocaleString("id-ID")}`
                  }
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
        </CardContent>
      </Card>
    </div>
  );
}

