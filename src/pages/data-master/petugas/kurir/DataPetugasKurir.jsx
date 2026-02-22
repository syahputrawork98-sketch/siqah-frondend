import { useState, useEffect } from "react";
import { Plus, Eye, Pencil, Trash2 } from "lucide-react";
import { Card, CardContent } from "../../../../components/ui/Card";
import Modal from "../../../../components/ui/Modal";

export default function DataPetugasKurir() {
  const [dataKurir, setDataKurir] = useState([]);
  const [selectedKurir, setSelectedKurir] = useState(null);
  const [modalView, setModalView] = useState(false);
  const [modalEdit, setModalEdit] = useState(false);
  const [modalDelete, setModalDelete] = useState(false);
  const [modalTambah, setModalTambah] = useState(false);

  useEffect(() => {
    // Data dummy kurir
    setDataKurir([
      {
        id_kurir: 1,
        kode_kurir: "KR001",
        nama_kurir: "Ahmad Hidayat",
        no_hp: "081234567890",
        alamat: "Jl. Sukamaju No.12, Bandung",
        plat_nomor: "D 1234 AB",
        status_aktif: true,
        created_at: "2025-10-28",
      },
      {
        id_kurir: 2,
        kode_kurir: "KR002",
        nama_kurir: "Siti Marlina",
        no_hp: "081345678901",
        alamat: "Jl. Mekarwangi No.8, Cimahi",
        plat_nomor: "D 5678 CD",
        status_aktif: true,
        created_at: "2025-10-30",
      },
      {
        id_kurir: 3,
        kode_kurir: "KR003",
        nama_kurir: "Rizky Firmansyah",
        no_hp: "081298765432",
        alamat: "Jl. Cibiru Wetan No.10, Kab. Bandung",
        plat_nomor: "D 9012 EF",
        status_aktif: false,
        created_at: "2025-11-01",
      },
    ]);
  }, []);

  const handleView = (k) => {
    setSelectedKurir(k);
    setModalView(true);
  };

  const handleEdit = (k) => {
    setSelectedKurir(k);
    setModalEdit(true);
  };

  const handleDelete = (k) => {
    setSelectedKurir(k);
    setModalDelete(true);
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-semibold text-[#3b3b3b]">
            Data Petugas Kurir
          </h1>
          <p className="text-sm text-[#7a7368]">
            Daftar petugas kurir dan informasi kendaraan mereka.
          </p>
        </div>
        <button
          onClick={() => setModalTambah(true)}
          className="flex items-center gap-2 bg-[#e2b97f] hover:bg-[#d7aa6b] text-white px-4 py-2 rounded-lg text-sm font-medium shadow-sm transition"
        >
          <Plus size={16} />
          Tambah Kurir
        </button>
      </div>

      {/* Table */}
      <Card className="border border-[#eee6da] shadow-sm rounded-2xl overflow-hidden">
        <CardContent className="p-0">
          <table className="w-full text-sm text-left border-collapse">
            <thead className="bg-[#fdfaf6] border-b border-[#eee6da]">
              <tr>
                <th className="px-4 py-3">Kode Kurir</th>
                <th className="px-4 py-3">Nama Kurir</th>
                <th className="px-4 py-3">No. Telepon</th>
                <th className="px-4 py-3">Plat Nomor</th>
                <th className="px-4 py-3 text-center">Status</th>
                <th className="px-4 py-3 text-center">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {dataKurir.map((k) => (
                <tr
                  key={k.id_kurir}
                  className="border-b border-[#f3eee6] hover:bg-[#f9f6ef]/60 transition"
                >
                  <td className="px-4 py-3">{k.kode_kurir}</td>
                  <td className="px-4 py-3">{k.nama_kurir}</td>
                  <td className="px-4 py-3">{k.no_hp}</td>
                  <td className="px-4 py-3">{k.plat_nomor}</td>
                  <td className="px-4 py-3 text-center">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        k.status_aktif
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {k.status_aktif ? "Aktif" : "Nonaktif"}
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
        {selectedKurir && (
          <div className="p-5 space-y-3">
            <h2 className="text-lg font-semibold text-[#3b3b3b]">
              Detail Petugas Kurir
            </h2>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <p><strong>Kode:</strong> {selectedKurir.kode_kurir}</p>
              <p><strong>Nama:</strong> {selectedKurir.nama_kurir}</p>
              <p><strong>No. HP:</strong> {selectedKurir.no_hp}</p>
              <p><strong>Plat Nomor:</strong> {selectedKurir.plat_nomor}</p>
              <p><strong>Status:</strong> {selectedKurir.status_aktif ? "Aktif" : "Nonaktif"}</p>
              <p className="col-span-2">
                <strong>Alamat:</strong> {selectedKurir.alamat}
              </p>
            </div>
          </div>
        )}
      </Modal>

      {/* Modal Edit */}
      <Modal isOpen={modalEdit} onClose={() => setModalEdit(false)}>
        {selectedKurir && (
          <div className="p-5 space-y-3">
            <h2 className="text-lg font-semibold text-[#3b3b3b]">
              Edit Data Kurir
            </h2>
            <form className="space-y-3">
              <div>
                <label className="text-sm font-medium">Nama Kurir</label>
                <input
                  type="text"
                  defaultValue={selectedKurir.nama_kurir}
                  className="w-full border border-[#e7e1d8] rounded-lg px-3 py-2 mt-1 text-sm"
                />
              </div>
              <div>
                <label className="text-sm font-medium">No. HP</label>
                <input
                  type="text"
                  defaultValue={selectedKurir.no_hp}
                  className="w-full border border-[#e7e1d8] rounded-lg px-3 py-2 mt-1 text-sm"
                />
              </div>
              <div>
                <label className="text-sm font-medium">Alamat</label>
                <textarea
                  defaultValue={selectedKurir.alamat}
                  rows="3"
                  className="w-full border border-[#e7e1d8] rounded-lg px-3 py-2 mt-1 text-sm"
                />
              </div>
              <div>
                <label className="text-sm font-medium">Plat Nomor</label>
                <input
                  type="text"
                  defaultValue={selectedKurir.plat_nomor}
                  className="w-full border border-[#e7e1d8] rounded-lg px-3 py-2 mt-1 text-sm"
                />
              </div>
              <div>
                <label className="text-sm font-medium">Status</label>
                <select
                  defaultValue={selectedKurir.status_aktif ? "Aktif" : "Nonaktif"}
                  className="w-full border border-[#e7e1d8] rounded-lg px-3 py-2 mt-1 text-sm"
                >
                  <option value="Aktif">Aktif</option>
                  <option value="Nonaktif">Nonaktif</option>
                </select>
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
        {selectedKurir && (
          <div className="p-6 text-center space-y-3">
            <Trash2 size={40} className="mx-auto text-red-500" />
            <h3 className="text-lg font-semibold text-[#3b3b3b]">
              Hapus Petugas Kurir?
            </h3>
            <p className="text-sm text-[#7a7368]">
              Data kurir <strong>{selectedKurir.nama_kurir}</strong> akan dihapus dari sistem.
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
          <h2 className="text-lg font-semibold text-[#3b3b3b]">
            Tambah Petugas Kurir
          </h2>
          <form className="space-y-3">
            <div>
              <label className="text-sm font-medium">Nama Kurir</label>
              <input
                type="text"
                placeholder="Masukkan nama kurir"
                className="w-full border border-[#e7e1d8] rounded-lg px-3 py-2 mt-1 text-sm"
              />
            </div>
            <div>
              <label className="text-sm font-medium">No. HP</label>
              <input
                type="text"
                placeholder="Masukkan nomor telepon"
                className="w-full border border-[#e7e1d8] rounded-lg px-3 py-2 mt-1 text-sm"
              />
            </div>
            <div>
              <label className="text-sm font-medium">Alamat</label>
              <textarea
                placeholder="Masukkan alamat kurir"
                rows="3"
                className="w-full border border-[#e7e1d8] rounded-lg px-3 py-2 mt-1 text-sm"
              />
            </div>
            <div>
              <label className="text-sm font-medium">Plat Nomor</label>
              <input
                type="text"
                placeholder="Masukkan plat nomor kendaraan"
                className="w-full border border-[#e7e1d8] rounded-lg px-3 py-2 mt-1 text-sm"
              />
            </div>
            <div>
              <label className="text-sm font-medium">Status</label>
              <select className="w-full border border-[#e7e1d8] rounded-lg px-3 py-2 mt-1 text-sm">
                <option value="Aktif">Aktif</option>
                <option value="Nonaktif">Nonaktif</option>
              </select>
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
