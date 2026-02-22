// client/src/pages/data-master/petugas/kandang/DataPetugasKandang.jsx
import { useState, useEffect } from "react";
import { Plus, Eye, Pencil, Trash2 } from "lucide-react";
import { Card, CardContent } from "../../../../components/ui/Card";
import Modal from "../../../../components/ui/Modal";

export default function DataPetugasKandang() {
  const [dataPetugas, setDataPetugas] = useState([]);
  const [selectedPetugas, setSelectedPetugas] = useState(null);
  const [modalView, setModalView] = useState(false);
  const [modalEdit, setModalEdit] = useState(false);
  const [modalDelete, setModalDelete] = useState(false);
  const [modalTambah, setModalTambah] = useState(false);

  useEffect(() => {
    // Dummy data simulasi (nanti diganti API)
    setDataPetugas([
      {
        id_petugas_kandang: 1,
        kode_petugas: "PTGKD001",
        nama_petugas: "Ahmad Fauzi",
        no_telp: "081234567890",
        alamat: "Jl. Raya Aqiqah No. 15, Bandung",
        jumlah_kandang: 3,
        jumlah_hewan: 47,
        status: "Aktif",
        created_at: "2025-10-25",
      },
      {
        id_petugas_kandang: 2,
        kode_petugas: "PTGKD002",
        nama_petugas: "Rizki Hidayat",
        no_telp: "081356789012",
        alamat: "Jl. Cisaranten Kulon No. 8, Cimahi",
        jumlah_kandang: 2,
        jumlah_hewan: 32,
        status: "Aktif",
        created_at: "2025-10-28",
      },
      {
        id_petugas_kandang: 3,
        kode_petugas: "PTGKD003",
        nama_petugas: "Samsul Anwar",
        no_telp: "081298765432",
        alamat: "Desa Ciparay, Kab. Bandung",
        jumlah_kandang: 1,
        jumlah_hewan: 14,
        status: "Tidak Aktif",
        created_at: "2025-11-01",
      },
    ]);
  }, []);

  const handleView = (p) => {
    setSelectedPetugas(p);
    setModalView(true);
  };

  const handleEdit = (p) => {
    setSelectedPetugas(p);
    setModalEdit(true);
  };

  const handleDelete = (p) => {
    setSelectedPetugas(p);
    setModalDelete(true);
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-semibold text-[#3b3b3b]">
            Data Petugas Kandang
          </h1>
          <p className="text-sm text-[#7a7368]">
            Daftar semua petugas kandang dan tanggung jawab mereka.
          </p>
        </div>
        <button
          onClick={() => setModalTambah(true)}
          className="flex items-center gap-2 bg-[#e2b97f] hover:bg-[#d7aa6b] text-white px-4 py-2 rounded-lg text-sm font-medium shadow-sm transition"
        >
          <Plus size={16} />
          Tambah Petugas
        </button>
      </div>

      {/* Table */}
      <Card className="border border-[#eee6da] shadow-sm rounded-2xl overflow-hidden">
        <CardContent className="p-0">
          <table className="w-full text-sm text-left border-collapse">
            <thead className="bg-[#fdfaf6] border-b border-[#eee6da]">
              <tr>
                <th className="px-4 py-3">Kode Petugas</th>
                <th className="px-4 py-3">Nama Petugas</th>
                <th className="px-4 py-3">No. Telepon</th>
                <th className="px-4 py-3 text-center">Jumlah Kandang</th>
                <th className="px-4 py-3 text-center">Jumlah Hewan</th>
                <th className="px-4 py-3 text-center">Status</th>
                <th className="px-4 py-3 text-center">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {dataPetugas.map((p) => (
                <tr
                  key={p.id_petugas_kandang}
                  className="border-b border-[#f3eee6] hover:bg-[#f9f6ef]/60 transition"
                >
                  <td className="px-4 py-3">{p.kode_petugas}</td>
                  <td className="px-4 py-3">{p.nama_petugas}</td>
                  <td className="px-4 py-3">{p.no_telp}</td>
                  <td className="px-4 py-3 text-center">{p.jumlah_kandang}</td>
                  <td className="px-4 py-3 text-center">{p.jumlah_hewan}</td>
                  <td className="px-4 py-3 text-center">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        p.status === "Aktif"
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {p.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-center">
                    <div className="flex justify-center gap-2">
                      <button
                        onClick={() => handleView(p)}
                        className="p-2 rounded-md hover:bg-[#f9f6ef] text-[#e2b97f]"
                      >
                        <Eye size={16} />
                      </button>
                      <button
                        onClick={() => handleEdit(p)}
                        className="p-2 rounded-md hover:bg-[#f9f6ef] text-blue-500"
                      >
                        <Pencil size={16} />
                      </button>
                      <button
                        onClick={() => handleDelete(p)}
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
        {selectedPetugas && (
          <div className="p-5 space-y-3">
            <h2 className="text-lg font-semibold text-[#3b3b3b]">
              Detail Petugas
            </h2>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <p><strong>Kode:</strong> {selectedPetugas.kode_petugas}</p>
              <p><strong>Nama:</strong> {selectedPetugas.nama_petugas}</p>
              <p><strong>No. Telepon:</strong> {selectedPetugas.no_telp}</p>
              <p><strong>Jumlah Kandang:</strong> {selectedPetugas.jumlah_kandang}</p>
              <p><strong>Jumlah Hewan:</strong> {selectedPetugas.jumlah_hewan}</p>
              <p><strong>Status:</strong> {selectedPetugas.status}</p>
              <p className="col-span-2">
                <strong>Alamat:</strong> {selectedPetugas.alamat}
              </p>
            </div>
          </div>
        )}
      </Modal>

      {/* Modal Edit */}
      <Modal isOpen={modalEdit} onClose={() => setModalEdit(false)}>
        {selectedPetugas && (
          <div className="p-5 space-y-3">
            <h2 className="text-lg font-semibold text-[#3b3b3b]">
              Edit Data Petugas
            </h2>
            <form className="space-y-3">
              <div>
                <label className="text-sm font-medium">Nama Petugas</label>
                <input
                  type="text"
                  defaultValue={selectedPetugas.nama_petugas}
                  className="w-full border border-[#e7e1d8] rounded-lg px-3 py-2 mt-1 text-sm"
                />
              </div>
              <div>
                <label className="text-sm font-medium">No. Telepon</label>
                <input
                  type="text"
                  defaultValue={selectedPetugas.no_telp}
                  className="w-full border border-[#e7e1d8] rounded-lg px-3 py-2 mt-1 text-sm"
                />
              </div>
              <div>
                <label className="text-sm font-medium">Alamat</label>
                <textarea
                  defaultValue={selectedPetugas.alamat}
                  className="w-full border border-[#e7e1d8] rounded-lg px-3 py-2 mt-1 text-sm"
                  rows="3"
                />
              </div>
              <div>
                <label className="text-sm font-medium">Status</label>
                <select
                  defaultValue={selectedPetugas.status}
                  className="w-full border border-[#e7e1d8] rounded-lg px-3 py-2 mt-1 text-sm"
                >
                  <option value="Aktif">Aktif</option>
                  <option value="Tidak Aktif">Tidak Aktif</option>
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
        {selectedPetugas && (
          <div className="p-6 text-center space-y-3">
            <Trash2 size={40} className="mx-auto text-red-500" />
            <h3 className="text-lg font-semibold text-[#3b3b3b]">
              Hapus Petugas Kandang?
            </h3>
            <p className="text-sm text-[#7a7368]">
              Data petugas <strong>{selectedPetugas.nama_petugas}</strong> akan dihapus dari sistem.
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
            Tambah Petugas Baru
          </h2>
          <form className="space-y-3">
            <div>
              <label className="text-sm font-medium">Nama Petugas</label>
              <input
                type="text"
                placeholder="Masukkan nama petugas"
                className="w-full border border-[#e7e1d8] rounded-lg px-3 py-2 mt-1 text-sm"
              />
            </div>
            <div>
              <label className="text-sm font-medium">No. Telepon</label>
              <input
                type="text"
                placeholder="Masukkan nomor telepon"
                className="w-full border border-[#e7e1d8] rounded-lg px-3 py-2 mt-1 text-sm"
              />
            </div>
            <div>
              <label className="text-sm font-medium">Alamat</label>
              <textarea
                placeholder="Masukkan alamat petugas"
                rows="3"
                className="w-full border border-[#e7e1d8] rounded-lg px-3 py-2 mt-1 text-sm"
              />
            </div>
            <div>
              <label className="text-sm font-medium">Status</label>
              <select className="w-full border border-[#e7e1d8] rounded-lg px-3 py-2 mt-1 text-sm">
                <option value="Aktif">Aktif</option>
                <option value="Tidak Aktif">Tidak Aktif</option>
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
