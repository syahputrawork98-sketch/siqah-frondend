import { useState } from "react";
import {
  Card,
  CardHeader,
  CardContent,
  EmptyState,
  ErrorState,
  LoadingState,
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@/shared/ui";
import { Eye, CreditCard, Clock, CheckCircle, FileCheck } from "lucide-react";
import ModalValidasiPembayaran from "@/features/admin/ui/ModalValidasiPembayaran";
import { formatCurrencyIdr } from "@/shared/lib";
import { fetchAdminPayments } from "@/features/admin/api/adminApi";
import { useAsyncData } from "@/shared/hooks";

export default function PembayaranAdmin() {
  const [activeTab, setActiveTab] = useState("pengajuan");
  const [selectedData, setSelectedData] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const { data, error, isLoading, reload } = useAsyncData(fetchAdminPayments, {
    initialData: [],
  });

  const tabs = ["pengajuan", "menunggu", "validasi", "lunas"];

  const getFilteredData = (tab) => {
    switch (tab) {
      case "pengajuan":
        return data.filter((item) => item.status === "Pengajuan");
      case "menunggu":
        return data.filter((item) => item.status === "Menunggu Validasi");
      case "validasi":
        return data.filter((item) => item.status === "Diterima");
      case "lunas":
        return data.filter((item) => item.status === "Lunas");
      default:
        return data;
    }
  };

  const handleOpenModal = (item) => {
    setSelectedData(item);
    setShowModal(true);
  };

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-xl font-semibold text-[#3b3b3b] tracking-wide">
          Manajemen <span className="text-[#e2b97f]">Pembayaran</span>
        </h2>
        <p className="text-sm text-[#7a7368]">
          Kelola dan validasi pembayaran konsumen.
        </p>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="flex flex-wrap border-b border-[#eee6da] mb-4">
          <TabsTrigger value="pengajuan" active={activeTab === "pengajuan"}>
            Pengajuan
          </TabsTrigger>
          <TabsTrigger value="menunggu" active={activeTab === "menunggu"}>
            Menunggu Validasi
          </TabsTrigger>
          <TabsTrigger value="validasi" active={activeTab === "validasi"}>
            Validasi Pembayaran
          </TabsTrigger>
          <TabsTrigger value="lunas" active={activeTab === "lunas"}>
            Lunas
          </TabsTrigger>
        </TabsList>

        {isLoading ? (
          <LoadingState message="Memuat data pembayaran..." />
        ) : error ? (
          <ErrorState
            message={error?.message || "Gagal memuat data pembayaran."}
            onRetry={reload}
          />
        ) : (
          tabs.map((tab) => {
            const filteredData = getFilteredData(tab);
            return (
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
                    {filteredData.length === 0 ? (
                      <EmptyState message="Tidak ada data pada tab ini." />
                    ) : (
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
                            {filteredData.map((item) => (
                              <tr
                                key={item.id}
                                className="text-sm text-[#3b3b3b] border-b border-[#f0ebe2] hover:bg-[#f9f6ef]/60 transition"
                              >
                                <td className="py-2 px-3 font-medium">{item.id}</td>
                                <td className="py-2 px-3">{item.konsumen}</td>
                                <td className="py-2 px-3">{item.tanggal}</td>
                                <td className="py-2 px-3">{formatCurrencyIdr(item.jumlah)}</td>
                                <td className="py-2 px-3">
                                  <StatusBadge status={item.status} />
                                </td>
                                <td className="py-2 px-3 text-center">
                                  <button
                                    onClick={() => handleOpenModal(item)}
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
                    )}
                  </CardContent>
                </Card>
              </TabsContent>
            );
          })
        )}
      </Tabs>

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
