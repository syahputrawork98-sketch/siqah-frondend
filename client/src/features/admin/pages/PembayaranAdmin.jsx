// client/src/pages/admin/PembayaranAdmin.jsx
import { useState } from "react";
import { Card, CardHeader, CardContent } from "@/shared/ui";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/shared/ui";
import { Eye, CreditCard, Clock, CheckCircle, FileCheck } from "lucide-react";
import ModalValidasiPembayaran from "@/features/admin/ui/ModalValidasiPembayaran";

export default function PembayaranAdmin() {
  const [activeTab, setActiveTab] = useState("pengajuan");
  const [selectedData, setSelectedData] = useState(null);
  const [showModal, setShowModal] = useState(false);

  // Dummy data sementara
  const dummy = [
    {
      id: "PAY-001",
      konsumen: "Ahmad Fauzi",
      tanggal: "2025-11-01",
      jumlah: 1500000,
      status: "Pengajuan",
    },
    {
      id: "PAY-002",
      konsumen: "Rina Marlina",
      tanggal: "2025-11-01",
      jumlah: 1800000,
      status: "Menunggu Validasi",
    },
    {
      id: "PAY-003",
      konsumen: "Siti Lestari",
      tanggal: "2025-10-31",
      jumlah: 1600000,
      status: "Diterima",
    },
    {
      id: "PAY-004",
      konsumen: "Rizal Fathoni",
      tanggal: "2025-10-30",
      jumlah: 1500000,
      status: "Lunas",
    },
  ];

  const tabs = ["pengajuan", "menunggu", "validasi", "lunas"];

  const getFilteredData = (tab) => {
    switch (tab) {
      case "pengajuan":
        return dummy.filter((d) => d.status === "Pengajuan");
      case "menunggu":
        return dummy.filter((d) => d.status === "Menunggu Validasi");
      case "validasi":
        return dummy.filter((d) => d.status === "Diterima");
      case "lunas":
        return dummy.filter((d) => d.status === "Lunas");
      default:
        return dummy;
    }
  };

  const handleOpenModal = (data) => {
    setSelectedData(data);
    setShowModal(true);
  };

  return (
    <div className="space-y-6">
      {/* Judul Halaman */}
      <div>
        <h2 className="text-xl font-semibold text-[#3b3b3b] tracking-wide">
          Manajemen <span className="text-[#e2b97f]">Pembayaran</span>
        </h2>
        <p className="text-sm text-[#7a7368]">
          Kelola dan validasi pembayaran konsumen.
        </p>
      </div>

      {/* Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="flex flex-wrap border-b border-[#eee6da] mb-4">
          <TabsTrigger value="pengajuan" active={activeTab === "pengajuan"}>
            📥 Pengajuan
          </TabsTrigger>
          <TabsTrigger value="menunggu" active={activeTab === "menunggu"}>
            ⏳ Menunggu Validasi
          </TabsTrigger>
          <TabsTrigger value="validasi" active={activeTab === "validasi"}>
            ✅ Validasi Pembayaran
          </TabsTrigger>
          <TabsTrigger value="lunas" active={activeTab === "lunas"}>
            💰 Lunas
          </TabsTrigger>
        </TabsList>

        {/* Loop untuk tiap tab */}
        {tabs.map((tab) => (
          <TabsContent key={tab} value={tab}>
            <Card className="bg-white/80 backdrop-blur-md border border-[#eee6da] shadow-sm">
              <CardHeader>
                <h3 className="text-lg font-semibold text-[#3b3b3b] capitalize">
                  {tab === "pengajuan"
                    ? "Pengajuan Baru"
                    : tab === "menunggu"
                    ? "Menunggu Validasi"
                    : tab === "validasi"
                    ? "Pembayaran Divalidasi"
                    : "Pembayaran Lunas"}
                </h3>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="min-w-full border-collapse">
                    <thead>
                      <tr className="text-sm text-[#7a7368] border-b border-[#eee6da]">
                        <th className="py-2 px-3 text-left">ID</th>
                        <th className="py-2 px-3 text-left">Nama Konsumen</th>
                        <th className="py-2 px-3 text-left">Tanggal</th>
                        <th className="py-2 px-3 text-left">Jumlah</th>
                        <th className="py-2 px-3 text-left">Status</th>
                        <th className="py-2 px-3 text-center">Aksi</th>
                      </tr>
                    </thead>
                    <tbody>
                      {getFilteredData(tab).map((d) => (
                        <tr
                          key={d.id}
                          className="text-sm text-[#3b3b3b] border-b border-[#f0ebe2] hover:bg-[#f9f6ef]/60 transition"
                        >
                          <td className="py-2 px-3 font-medium">{d.id}</td>
                          <td className="py-2 px-3">{d.konsumen}</td>
                          <td className="py-2 px-3">{d.tanggal}</td>
                          <td className="py-2 px-3">
                            Rp {d.jumlah.toLocaleString("id-ID")}
                          </td>
                          <td className="py-2 px-3">
                            <StatusBadge status={d.status} />
                          </td>
                          <td className="py-2 px-3 text-center">
                            <button
                              onClick={() => handleOpenModal(d)}
                              className="flex items-center gap-1 text-[#e2b97f] hover:text-[#c49b61] mx-auto transition-all"
                            >
                              <Eye size={16} />
                              <span className="text-sm">Lihat</span>
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>

      {/* Modal */}
      {showModal && selectedData && (
        <ModalValidasiPembayaran
          data={selectedData}
          onClose={() => setShowModal(false)}
        />
      )}
    </div>
  );
}

function StatusBadge({ status }) {
  const base =
    "px-2 py-1 rounded-full text-xs font-semibold inline-flex items-center gap-1";
  switch (status) {
    case "Pengajuan":
      return (
        <span className={`${base} bg-gray-100 text-gray-700`}>
          <FileCheck size={12} /> {status}
        </span>
      );
    case "Menunggu Validasi":
      return (
        <span className={`${base} bg-yellow-100 text-yellow-700`}>
          <Clock size={12} /> {status}
        </span>
      );
    case "Diterima":
      return (
        <span className={`${base} bg-blue-100 text-blue-700`}>
          <CheckCircle size={12} /> {status}
        </span>
      );
    case "Lunas":
      return (
        <span className={`${base} bg-green-100 text-green-700`}>
          <CreditCard size={12} /> {status}
        </span>
      );
    default:
      return <span className={`${base} bg-gray-100 text-gray-700`}>{status}</span>;
  }
}

