//  client/src/pages/data-master/kandang/DataKandang.jsx
import { useState, useEffect } from "react";
import { Plus, Eye, Pencil, Trash2 } from "lucide-react";
import { Card, CardContent } from "../../../components/ui/Card";
import Modal from "../../../components/ui/Modal";

export default function DataKandang() {
  const [dataKandang, setDataKandang] = useState([]);
  const [selectedKandang, setSelectedKandang] = useState(null);
  const [modalView, setModalView] = useState(false);
  const [modalEdit, setModalEdit] = useState(false);
  const [modalDelete, setModalDelete] = useState(false);
  const [modalTambah, setModalTambah] = useState(false);

  useEffect(() => {
    // Dummy data sesuai tb_kandang
    setDataKandang([
      {
        id_kandang: 1,
        kode_kandang: "KDG001",
        nama_kandang: "Kandang Utama",
        lokasi: "Jl. Raya Aqiqah No.12, Bandung",
        kapasitas: 20,
        jumlah_hewan: 12,
        penanggung_jawab: "Petugas Kandang A",
        status: "Aktif",
        created_at: "2025-10-30",
      },
      {
        id_kandang: 2,
        kode_kandang: "KDG002",
        nama_kandang: "Kandang Selatan",
        lokasi: "Desa Cikole, Lembang",
        kapasitas: 15,
        jumlah_hewan: 15,
        penanggung_jawab: "Petugas Kandang B",
        status: "Penuh",
        created_at: "2025-10-31",
      },
      {
        id_kandang: 3,
        kode_kandang: "KDG003",
        nama_kandang: "Kandang Timur",
        lokasi: "Jl. Sukamaju No.9, Cimahi",
        kapasitas: 25,
        jumlah_hewan: 10,
        penanggung_jawab: "Petugas Kandang C",
        status: "Aktif",
        created_at: "2025-11-01",
      },
    ]);
  }, []);

  const handleView = (k) => {
    setSelectedKandang(k);
    setModalView(true);
  };

  const handleEdit = (k) => {
    setSelectedKandang(k);
    setModalEdit(true);
  };

  const handleDelete = (k) => {
    setSelectedKandang(k);
    setModalDelete(true);
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-semibold text-[#3b3b3b]">Data Kandang</h1>
          <p className="text-sm text-[#7a7368]">
            Daftar semua kandang yang terdaftar dan aktif digunakan oleh petugas.
          </p>
        </div>
        <button
          onClick={() => setModalTambah(true)}
          className="flex items-center gap-2 bg-[#e2b97f] hover:bg-[#d7aa6b] text-white px-4 py-2 rounded-lg text-sm font-medium shadow-sm transition"
        >
          <Plus size={16} />
          Tambah Kandang
        </button>
      </div>

      {/* Table */}
      <Card className="border border-[#eee6da] shadow-sm rounded-2xl overflow-hidden">
        <CardContent className="p-0">
          <table className="w-full text-sm text-left border-collapse">
            <thead className="bg-[#fdfaf6] border-b border-[#eee6da]">
              <tr>
                <th className="px-4 py-3">Kode Kandang</th>
                <th className="px-4 py-3">Nama Kandang</th>
                <th className="px-4 py-3">Lokasi</th>
                <th className="px-4 py-3 text-center">Kapasitas</th>
                <th className="px-4 py-3 text-center">Jumlah Hewan</th>
                <th className="px-4 py-3">Penanggung Jawab</th>
                <th className="px-4 py-3 text-center">Status</th>
                <th className="px-4 py-3 text-center">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {dataKandang.map((k) => (
                <tr
                  key={k.id_kandang}
                  className="border-b border-[#f3eee6] hover:bg-[#f9f6ef]/60 transition"
                >
                  <td className="px-4 py-3">{k.kode_kandang}</td>
                  <td className="px-4 py-3">{k.nama_kandang}</td>
                  <td className="px-4 py-3">{k.lokasi}</td>
                  <td className="px-4 py-3 text-center">{k.kapasitas}</td>
                  <td className="px-4 py-3 text-center">{k.jumlah_hewan}</td>
                  <td className="px-4 py-3">{k.penanggung_jawab}</td>
                  <td className="px-4 py-3 text-center">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        k.status === "Aktif"
                          ? "bg-green-100 text-green-700"
                          : k.status === "Penuh"
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {k.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-center">
                    <div className="flex justify-center gap-2">
                      <button
                        onClick={() => handleView(k)}
                        className="p-2 rounded-md hover:bg-[#f9f6ef] text-[#e2b97f]"
                      >
                        <Eye size={16} />
                      </button>
                      <button
                        onClick={() => handleEdit(k)}
                        className="p-2 rounded-md hover:bg-[#f9f6ef] text-blue-500"
                      >
                        <Pencil size={16} />
                      </button>
                      <button
                        onClick={() => handleDelete(k)}
                        className="p-2 rounded-md hover:bg-[#f9f6ef] text-red-500"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </CardContent>
      </Card>

      {/* Modal View */}
      <Modal isOpen={modalView} onClose={() => setModalView(false)}>
        {selectedKandang && (
          <div className="p-5 space-y-3">
            <h2 className="text-lg font-semibold text-[#3b3b3b]">Detail Kandang</h2>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <p><strong>Kode:</strong> {selectedKandang.kode_kandang}</p>
              <p><strong>Nama:</strong> {selectedKandang.nama_kandang}</p>
              <p><strong>Lokasi:</strong> {selectedKandang.lokasi}</p>
              <p><strong>Kapasitas:</strong> {selectedKandang.kapasitas}</p>
              <p><strong>Jumlah Hewan:</strong> {selectedKandang.jumlah_hewan}</p>
              <p><strong>Penanggung Jawab:</strong> {selectedKandang.penanggung_jawab}</p>
              <p><strong>Status:</strong> {selectedKandang.status}</p>
              <p><strong>Tanggal Input:</strong> {selectedKandang.created_at}</p>
            </div>
          </div>
        )}
      </Modal>

      {/* Modal Edit */}
      <Modal isOpen={modalEdit} onClose={() => setModalEdit(false)}>
        {selectedKandang && (
          <div className="p-5 space-y-3">
            <h2 className="text-lg font-semibold text-[#3b3b3b]">Edit Data Kandang</h2>
            <form className="space-y-3">
              <div>
                <label className="text-sm font-medium">Nama Kandang</label>
                <input
                  type="text"
                  defaultValue={selectedKandang.nama_kandang}
                  className="w-full border border-[#e7e1d8] rounded-lg px-3 py-2 mt-1 text-sm"
                />
              </div>
              <div>
                <label className="text-sm font-medium">Lokasi</label>
                <input
                  type="text"
                  defaultValue={selectedKandang.lokasi}
                  className="w-full border border-[#e7e1d8] rounded-lg px-3 py-2 mt-1 text-sm"
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-sm font-medium">Kapasitas</label>
                  <input
                    type="number"
                    defaultValue={selectedKandang.kapasitas}
                    className="w-full border border-[#e7e1d8] rounded-lg px-3 py-2 mt-1 text-sm"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">Status</label>
                  <select
                    defaultValue={selectedKandang.status}
                    className="w-full border border-[#e7e1d8] rounded-lg px-3 py-2 mt-1 text-sm"
                  >
                    <option value="Aktif">Aktif</option>
                    <option value="Penuh">Penuh</option>
                    <option value="Tidak Aktif">Tidak Aktif</option>
                  </select>
                </div>
              </div>
              <div className="flex justify-end pt-3">
                <button
                  type="button"
                  onClick={() => setModalEdit(false)}
                  className="bg-[#e2b97f] hover:bg-[#d7aa6b] text-white px-4 py-2 rounded-lg text-sm font-medium transition"
                >
                  Simpan Perubahan
                </button>
              </div>
            </form>
          </div>
        )}
      </Modal>

      {/* Modal Delete */}
      <Modal isOpen={modalDelete} onClose={() => setModalDelete(false)}>
        {selectedKandang && (
          <div className="p-6 text-center space-y-3">
            <Trash2 size={40} className="mx-auto text-red-500" />
            <h3 className="text-lg font-semibold text-[#3b3b3b]">
              Hapus Data Kandang?
            </h3>
            <p className="text-sm text-[#7a7368]">
              Data kandang <strong>{selectedKandang.kode_kandang}</strong> akan dihapus
              dari sistem. Tindakan ini tidak dapat dibatalkan.
            </p>
            <div className="flex justify-center gap-3 pt-2">
              <button
                onClick={() => setModalDelete(false)}
                className="px-4 py-2 rounded-lg text-sm border border-[#e7e1d8] hover:bg-[#f9f6ef]"
              >
                Batal
              </button>
              <button
                onClick={() => setModalDelete(false)}
                className="px-4 py-2 rounded-lg text-sm bg-red-500 hover:bg-red-600 text-white"
              >
                Hapus
              </button>
            </div>
          </div>
        )}
      </Modal>

      {/* Modal Tambah */}
      <Modal isOpen={modalTambah} onClose={() => setModalTambah(false)}>
        <div className="p-5 space-y-3">
          <h2 className="text-lg font-semibold text-[#3b3b3b]">Tambah Kandang Baru</h2>
          <form className="space-y-3">
            <div>
              <label className="text-sm font-medium">Nama Kandang</label>
              <input
                type="text"
                placeholder="Masukkan nama kandang"
                className="w-full border border-[#e7e1d8] rounded-lg px-3 py-2 mt-1 text-sm"
              />
            </div>
            <div>
              <label className="text-sm font-medium">Lokasi</label>
              <input
                type="text"
                placeholder="Masukkan lokasi kandang"
                className="w-full border border-[#e7e1d8] rounded-lg px-3 py-2 mt-1 text-sm"
              />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-sm font-medium">Kapasitas</label>
                <input
                  type="number"
                  placeholder="Masukkan kapasitas"
                  className="w-full border border-[#e7e1d8] rounded-lg px-3 py-2 mt-1 text-sm"
                />
              </div>
              <div>
                <label className="text-sm font-medium">Status</label>
                <select className="w-full border border-[#e7e1d8] rounded-lg px-3 py-2 mt-1 text-sm">
                  <option value="Aktif">Aktif</option>
                  <option value="Penuh">Penuh</option>
                  <option value="Tidak Aktif">Tidak Aktif</option>
                </select>
              </div>
            </div>
            <div>
              <label className="text-sm font-medium">Penanggung Jawab</label>
              <input
                type="text"
                placeholder="Masukkan nama petugas kandang"
                className="w-full border border-[#e7e1d8] rounded-lg px-3 py-2 mt-1 text-sm"
              />
            </div>
            <div className="flex justify-end pt-3">
              <button
                type="button"
                onClick={() => setModalTambah(false)}
                className="bg-[#e2b97f] hover:bg-[#d7aa6b] text-white px-4 py-2 rounded-lg text-sm font-medium transition"
              >
                Simpan
              </button>
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
}
