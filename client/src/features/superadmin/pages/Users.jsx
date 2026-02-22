import { useState } from "react";
import { Table } from "@/shared/ui";
import { Modal } from "@/shared/ui";
import { Card, CardContent, CardHeader } from "@/shared/ui";
import { PlusCircle, Edit2, Trash2 } from "lucide-react";

export default function Users() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formMode, setFormMode] = useState("Tambah");
  const [activeTab, setActiveTab] = useState("semua");

  // 🧩 Data simulasi user
  const users = [
    { id: 1, nama: "Superadmin Siqah", email: "superadmin@siqah.id", role: "Superadmin" },
    { id: 2, nama: "Admin Aqiqah", email: "admin@siqah.id", role: "Admin" },
    { id: 3, nama: "Petugas Kandang 1", email: "kandang1@siqah.id", role: "Petugas Kandang" },
    { id: 4, nama: "Petugas Dapur 1", email: "dapur1@siqah.id", role: "Petugas Dapur" },
    { id: 5, nama: "Petugas Kurir 1", email: "kurir1@siqah.id", role: "Petugas Kurir" },
    { id: 6, nama: "Konsumen 1", email: "konsumen1@siqah.id", role: "Konsumen" },
  ];

  // 🔎 Filter data berdasarkan tab aktif
  const filteredUsers =
    activeTab === "semua"
      ? users
      : activeTab === "petugas"
      ? users.filter((u) => u.role.includes("Petugas"))
      : users.filter((u) => u.role.toLowerCase() === activeTab);

  // 🧱 Kolom tabel
  const columns = [
    { header: "Nama", accessor: "nama" },
    { header: "Email", accessor: "email" },
    {
      header: "Role",
      render: (row) => (
        <span
          className={`px-3 py-1.5 text-xs rounded-full font-medium border ${
            row.role === "Superadmin"
              ? "bg-purple-50 border-purple-200 text-purple-700"
              : row.role === "Admin"
              ? "bg-amber-50 border-amber-200 text-amber-700"
              : row.role.includes("Petugas")
              ? "bg-green-50 border-green-200 text-green-700"
              : "bg-gray-50 border-gray-200 text-gray-700"
          }`}
        >
          {row.role}
        </span>
      ),
    },
    {
      header: "Aksi",
      render: (row) => (
        <div className="flex gap-2 justify-center">
          <button
            onClick={() => handleEdit(row)}
            className="p-1.5 text-[#45624B] hover:bg-[#E3EBD2] rounded-md transition"
          >
            <Edit2 size={16} />
          </button>
          <button
            onClick={() => handleDelete(row)}
            className="p-1.5 text-[#B9914D] hover:bg-[#FAF6E7] rounded-md transition"
          >
            <Trash2 size={16} />
          </button>
        </div>
      ),
    },
  ];

  const handleAdd = () => {
    setFormMode("Tambah");
    setIsModalOpen(true);
  };

  const handleEdit = (row) => {
    setFormMode("Edit");
    console.log("Edit user:", row);
    setIsModalOpen(true);
  };

  const handleDelete = (row) => {
    if (confirm(`Yakin ingin menghapus akun ${row.nama}?`)) {
      console.log("Hapus user:", row);
    }
  };

  // 🧭 Daftar tab
  const tabs = [
    { key: "semua", label: "Semua" },
    { key: "superadmin", label: "Superadmin" },
    { key: "admin", label: "Admin" },
    { key: "petugas", label: "Petugas" },
    { key: "konsumen", label: "Konsumen" },
  ];

  return (
    <div className="space-y-6">
      <Card className="border border-[#e7e1d8] bg-white/90 backdrop-blur-md rounded-2xl shadow-md">
        <CardHeader
          title={<span className="text-[#45624B] font-semibold text-lg">Manajemen User</span>}
          subtitle="Kelola akun pengguna di seluruh sistem Siqah Aqiqah"
        />

        <CardContent>
          {/* Tabs Filter */}
          <div className="flex flex-wrap gap-3 mb-6 border-b border-[#e7e1d8]">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`relative px-5 py-2 text-sm font-medium transition-all ${
                  activeTab === tab.key
                    ? "text-[#45624B] font-semibold after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-gradient-to-r after:from-[#45624B] after:to-[#B9914D]"
                    : "text-[#888] hover:text-[#45624B]"
                }`}
              >
                {tab.label}
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
              Tambah User
            </button>
          </div>

          {/* Tabel User */}
          <div className="overflow-x-auto rounded-xl border border-[#E7E1D8]">
            <Table columns={columns} data={filteredUsers} />
          </div>
        </CardContent>
      </Card>

      {/* Modal Tambah/Edit User */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={`${formMode} User`}
      >
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1 text-[#45624B]">Nama</label>
            <input
              type="text"
              placeholder="Nama lengkap"
              className="w-full border border-[#e7e1d8] rounded-lg p-2 focus:ring focus:ring-[#E3EBD2] focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1 text-[#45624B]">Email</label>
            <input
              type="email"
              placeholder="Alamat email"
              className="w-full border border-[#e7e1d8] rounded-lg p-2 focus:ring focus:ring-[#E3EBD2] focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1 text-[#45624B]">Role</label>
            <select className="w-full border border-[#e7e1d8] rounded-lg p-2 focus:ring focus:ring-[#E3EBD2]">
              <option value="">Pilih Role</option>
              <option>Superadmin</option>
              <option>Admin</option>
              <option>Petugas Kandang</option>
              <option>Petugas Dapur</option>
              <option>Petugas Kurir</option>
              <option>Konsumen</option>
            </select>
          </div>

          <div className="flex justify-end gap-2 pt-3">
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

