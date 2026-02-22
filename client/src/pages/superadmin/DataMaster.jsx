import { useState } from "react";
import Table from "../../components/ui/Table";
import Modal from "../../components/ui/Modal";
import { Card, CardHeader, CardContent } from "../../components/ui/Card";
import { PlusCircle, Edit2, Trash2 } from "lucide-react";

export default function DataMaster() {
  const [activeTab, setActiveTab] = useState("hewan");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formMode, setFormMode] = useState("Tambah");

  // Dummy Data
  const data = {
    hewan: [
      { id: 1, jenis_hewan: "Kambing Etawa", jenis_kelamin: "Jantan", harga_final: 3000000 },
      { id: 2, jenis_hewan: "Kambing Jawa", jenis_kelamin: "Betina", harga_final: 2500000 },
    ],
    menu: [
      { id: 1, nama_menu: "Gule Kambing", kategori_menu: "Masakan Utama" },
      { id: 2, nama_menu: "Sate", kategori_menu: "Lauk" },
    ],
    paket: [
      { id: 1, nama_paket: "Paket Hemat", deskripsi: "1 Ekor + Sate + Gule", harga_paket: 3500000 },
      { id: 2, nama_paket: "Paket Premium", deskripsi: "2 Ekor + Sate + Tongseng", harga_paket: 6000000 },
    ],
  };

  const columns = {
    hewan: [
      { header: "Jenis Hewan", accessor: "jenis_hewan" },
      { header: "Jenis Kelamin", accessor: "jenis_kelamin" },
      {
        header: "Harga",
        accessor: "harga_final",
        render: (row) =>
          new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR",
          }).format(row.harga_final),
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
        render: (row) =>
          new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR",
          }).format(row.harga_paket),
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
      <button className="p-1.5 text-[#45624B] hover:bg-[#E3EBD2] rounded-md transition">
        <Edit2 size={16} />
      </button>
      <button className="p-1.5 text-[#B9914D] hover:bg-[#FAF6E7] rounded-md transition">
        <Trash2 size={16} />
      </button>
    </div>
  );

  return (
    <div className="space-y-6">
      <Card className="border border-[#e7e1d8] bg-white/90 backdrop-blur-md rounded-2xl shadow-md">
        <CardHeader
          title={<span className="text-[#45624B] font-semibold text-lg">Data Master</span>}
          subtitle="Kelola data hewan, menu, dan paket aqiqah"
        />

        <CardContent>
          {/* Tabs */}
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

          {/* Tombol Tambah */}
          <div className="flex justify-end mb-4">
            <button
              onClick={handleAdd}
              className="flex items-center gap-2 bg-gradient-to-r from-[#45624B] to-[#B9914D] text-white px-4 py-2 rounded-lg shadow hover:opacity-90 transition"
            >
              <PlusCircle size={18} />
              Tambah Data
            </button>
          </div>

          {/* Tabel */}
          <div className="overflow-x-auto rounded-xl border border-[#E7E1D8]">
            <Table columns={columns[activeTab]} data={data[activeTab]} />
          </div>
        </CardContent>
      </Card>

      {/* Modal */}
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
            <button
              type="button"
              onClick={() => setIsModalOpen(false)}
              className="px-4 py-2 border border-[#e7e1d8] rounded-lg text-[#45624B] hover:bg-[#F8F4E3] transition"
            >
              Batal
            </button>
            <button
              type="submit"
              className="bg-gradient-to-r from-[#45624B] to-[#B9914D] text-white px-5 py-2 rounded-lg shadow hover:opacity-90 transition"
            >
              Simpan
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
}
