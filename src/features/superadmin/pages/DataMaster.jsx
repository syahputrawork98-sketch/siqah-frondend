import { useState } from "react";
import {
  Table,
  Modal,
  Button,
  Card,
  CardContent,
  CardHeader,
  EmptyState,
  ErrorState,
  LoadingState,
} from "@/shared/ui";
import { PlusCircle, Edit2, Trash2 } from "lucide-react";
import { formatCurrencyIdr } from "@/shared/lib";
import { useAsyncData } from "@/shared/hooks";
import { fetchDataMaster } from "@/features/superadmin/api/superadminApi";

export default function DataMaster() {
  const [activeTab, setActiveTab] = useState("hewan");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formMode, setFormMode] = useState("Tambah");
  const { data, error, isLoading, reload } = useAsyncData(fetchDataMaster, {
    initialData: { hewan: [], menu: [], paket: [] },
  });

  const columns = {
    hewan: [
      { header: "Jenis Hewan", accessor: "jenis_hewan" },
      { header: "Jenis Kelamin", accessor: "jenis_kelamin" },
      {
        header: "Harga",
        accessor: "harga_final",
        render: (row) => formatCurrencyIdr(row.harga_final),
      },
      { header: "Aksi", render: (row) => <ActionButtons row={row} /> },
    ],
    menu: [
      { header: "Nama Menu", accessor: "nama_menu" },
      { header: "Kategori", accessor: "kategori_menu" },
      { header: "Aksi", render: (row) => <ActionButtons row={row} /> },
    ],
    paket: [
      { header: "Nama Paket", accessor: "nama_paket" },
      { header: "Deskripsi", accessor: "deskripsi" },
      {
        header: "Harga Paket",
        accessor: "harga_paket",
        render: (row) => formatCurrencyIdr(row.harga_paket),
      },
      { header: "Aksi", render: (row) => <ActionButtons row={row} /> },
    ],
  };

  const handleAdd = () => {
    setFormMode("Tambah");
    setIsModalOpen(true);
  };

  const ActionButtons = () => (
    <div className="flex gap-2 justify-center">
      <Button variant="ghost" size="sm" className="p-1.5 text-[#45624B] hover:bg-[#E3EBD2]">
        <Edit2 size={16} />
      </Button>
      <Button variant="ghost" size="sm" className="p-1.5 text-[#B9914D] hover:bg-[#FAF6E7]">
        <Trash2 size={16} />
      </Button>
    </div>
  );

  const currentData = data[activeTab] || [];

  return (
    <div className="space-y-6">
      <Card className="border border-[#e7e1d8] bg-white/90 backdrop-blur-md rounded-2xl shadow-md">
        <CardHeader
          title={<span className="text-[#45624B] font-semibold text-lg">Data Master</span>}
          subtitle="Kelola data hewan, menu, dan paket aqiqah"
        />

        <CardContent>
          <div className="flex flex-wrap gap-3 mb-6 border-b border-[#e7e1d8]">
            {["hewan", "menu", "paket"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative px-5 py-2 text-sm font-medium transition-all ${
                  activeTab === tab
                    ? "text-[#45624B] font-semibold after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-gradient-to-r after:from-[#45624B] after:to-[#B9914D]"
                    : "text-[#888] hover:text-[#45624B]"
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          <div className="flex justify-end mb-4">
            <Button
              onClick={handleAdd}
              variant="primary"
            >
              <PlusCircle size={18} />
              Tambah Data
            </Button>
          </div>

          {isLoading ? (
            <LoadingState message="Memuat data master..." />
          ) : error ? (
            <ErrorState
              message={error?.message || "Gagal memuat data master."}
              onRetry={reload}
            />
          ) : currentData.length === 0 ? (
            <EmptyState message={`Belum ada data ${activeTab}.`} />
          ) : (
            <div className="overflow-x-auto rounded-xl border border-[#E7E1D8]">
              <Table columns={columns[activeTab]} data={currentData} />
            </div>
          )}
        </CardContent>
      </Card>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={`${formMode} ${activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}`}
      >
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1 text-[#45624B]">
              Nama {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
            </label>
            <input
              type="text"
              placeholder={`Masukkan nama ${activeTab}`}
              className="w-full border border-[#e7e1d8] rounded-lg p-2 focus:ring focus:ring-[#E3EBD2] focus:outline-none"
            />
          </div>

          <div className="flex justify-end gap-2 pt-4">
            <Button
              type="button"
              onClick={() => setIsModalOpen(false)}
              variant="ghost"
              className="border border-[#e7e1d8] text-[#45624B] hover:bg-[#F8F4E3]"
            >
              Batal
            </Button>
            <Button
              type="submit"
              variant="primary"
            >
              Simpan
            </Button>
          </div>
        </form>
      </Modal>
    </div>
  );
}
