// client/src/pages/petugas/kandang/DashboardPetugasKandang.jsx
import { Card, CardHeader, CardContent } from "../../../components/ui/Card";
import {
  Home,
  PawPrint,
  ClipboardList,
  CheckCircle,
  Users,
  Activity,
} from "lucide-react";

// 🧩 Dummy data — nanti diganti fetch dari API
const dummyData = {
  totalKandang: 5,
  totalHewan: 38,
  hewanSiapSembelih: 12,
  prosesAktif: 8,
  prosesSelesai: 25,
  petugasAktif: 4,
  daftarProses: [
    {
      id: "PR-00125",
      hewan: "Kambing Jawa",
      tanggal: "2025-11-03",
      status: "Proses",
    },
    {
      id: "PR-00124",
      hewan: "Domba Garut",
      tanggal: "2025-11-02",
      status: "Menunggu",
    },
    {
      id: "PR-00123",
      hewan: "Kambing Etawa",
      tanggal: "2025-11-01",
      status: "Selesai",
    },
    {
      id: "PR-00122",
      hewan: "Domba Merino",
      tanggal: "2025-10-31",
      status: "Selesai",
    },
  ],
};

export default function DashboardPetugasKandang() {
  const data = dummyData;

  return (
    <div className="space-y-6">
      {/* Judul Halaman */}
      <div>
        <h2 className="text-xl font-semibold text-[#3b3b3b] tracking-wide">
          Selamat Datang,{" "}
          <span className="text-[#e2b97f]">Petugas Kandang Siqah</span>
        </h2>
        <p className="text-sm text-[#7a7368]">
          Pantau aktivitas dan progres penyembelihan hewan aqiqah hari ini.
        </p>
      </div>

      {/* Statistik Card */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-5">
        <StatCard icon={Home} title="Jumlah Kandang" value={data.totalKandang} />
        <StatCard icon={PawPrint} title="Jumlah Hewan" value={data.totalHewan} />
        <StatCard
          icon={ClipboardList}
          title="Hewan Siap Sembelih"
          value={data.hewanSiapSembelih}
        />
        <StatCard icon={Activity} title="Proses Aktif" value={data.prosesAktif} />
        <StatCard
          icon={CheckCircle}
          title="Proses Selesai"
          value={data.prosesSelesai}
        />
        <StatCard icon={Users} title="Petugas Aktif" value={data.petugasAktif} />
      </div>

      {/* Daftar Proses Terbaru */}
      <Card className="bg-white/80 backdrop-blur-md border border-[#eee6da] shadow-sm">
        <CardHeader>
          <h3 className="text-lg font-semibold text-[#3b3b3b]">
            Daftar Proses Kandang Terbaru
          </h3>
          <p className="text-sm text-[#7a7368]">
            Berikut beberapa tugas penyembelihan dan perawatan terbaru.
          </p>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse">
              <thead>
                <tr className="text-left text-sm text-[#7a7368] border-b border-[#eee6da]">
                  <th className="py-2 px-3">ID Proses</th>
                  <th className="py-2 px-3">Jenis Hewan</th>
                  <th className="py-2 px-3">Tanggal</th>
                  <th className="py-2 px-3">Status</th>
                </tr>
              </thead>
              <tbody>
                {data.daftarProses.map((p) => (
                  <tr
                    key={p.id}
                    className="text-sm text-[#3b3b3b] border-b border-[#f0ebe2] hover:bg-[#f9f6ef]/60 transition-colors"
                  >
                    <td className="py-2 px-3 font-medium">{p.id}</td>
                    <td className="py-2 px-3">{p.hewan}</td>
                    <td className="py-2 px-3">{p.tanggal}</td>
                    <td className="py-2 px-3">
                      <StatusBadge status={p.status} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

/* ---------- Komponen tambahan ---------- */

function StatCard({ icon: Icon, title, value }) {
  return (
    <div
      className={`p-5 rounded-xl border border-[#eee6da] bg-gradient-to-br from-[#fefbf7] to-[#f9f6ef] shadow-sm hover:shadow-md transition-all`}
    >
      <div className="flex items-center gap-3 mb-2">
        <div className="p-2 bg-[#e2b97f]/10 rounded-lg">
          <Icon size={20} className="text-[#e2b97f]" />
        </div>
        <p className="text-sm font-medium text-[#7a7368]">{title}</p>
      </div>
      <h4 className="text-2xl font-semibold text-[#3b3b3b]">{value}</h4>
    </div>
  );
}

function StatusBadge({ status }) {
  const base = "px-2 py-1 rounded-full text-xs font-semibold";
  switch (status) {
    case "Menunggu":
      return <span className={`${base} bg-yellow-100 text-yellow-700`}>{status}</span>;
    case "Proses":
      return <span className={`${base} bg-blue-100 text-blue-700`}>{status}</span>;
    case "Selesai":
      return <span className={`${base} bg-green-100 text-green-700`}>{status}</span>;
    default:
      return <span className={`${base} bg-gray-100 text-gray-700`}>{status}</span>;
  }
}
