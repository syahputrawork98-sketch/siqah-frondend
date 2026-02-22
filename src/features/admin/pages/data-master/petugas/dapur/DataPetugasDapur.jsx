import { useState, useEffect } from "react";
import { Plus, Eye, Pencil, Trash2 } from "lucide-react";
import { Card, CardContent, Modal } from "@/shared/ui";

export default function DataPetugasDapur() {
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
        id_petugas_dapur: 1,
        kode_petugas: "PTGDP001",
        nama_petugas: "Siti Aminah",
        no_telp: "081234567890",
        alamat: "Jl. Melati No. 5, Bandung",
        nama_dapur: "Dapur Utama 1",
        status: "Aktif",
        created_at: "2025-10-25",
      },
      {
        id_petugas_dapur: 2,
        kode_petugas: "PTGDP002",
        nama_petugas: "Rahmat Hidayat",
        no_telp: "082134567890",
        alamat: "Jl. Raya Cipadung No. 10, Cimahi",
        nama_dapur: "Dapur Aqiqah Sejahtera",
        status: "Aktif",
        created_at: "2025-10-27",
      },
      {
        id_petugas_dapur: 3,
        kode_petugas: "PTGDP003",
        nama_petugas: "Lina Marlina",
        no_telp: "081298765432",
        alamat: "Desa Cibiru, Kab. Bandung",
        nama_dapur: "Dapur Berkah",
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
            Data Petugas Dapur
          </h1>
          <p className="text-sm text-[#7a7368]">
            Daftar semua petugas dapur dan unit kerja mereka.
          </p>
        </div>
        <button
          onClick={() => setModalTambah(true)}
          className="siqah-btn-primary shadow-sm"
        >
          <Plus size={16} />
          Tambah Petugas
        </button>
      </div>

      {/* Table */}
      <Card className="siqah-table-card overflow-hidden">
        <CardContent className="p-0">
          <table className="w-full text-sm text-left border-collapse">
            <thead className="siqah-table-head">
              <tr>
                <th className="px-4 py-3">Kode Petugas</th>
                <th className="px-4 py-3">Nama Petugas</th>
                <th className="px-4 py-3">No. Telepon</th>
                <th className="px-4 py-3">Nama Dapur</th>
                <th className="px-4 py-3 text-center">Status</th>
                <th className="px-4 py-3 text-center">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {dataPetugas.map((p) => (
                <tr
                  key={p.id_petugas_dapur}
                  className="siqah-table-row"
                >
                  <td className="px-4 py-3">{p.kode_petugas}</td>
                  <td className="px-4 py-3">{p.nama_petugas}</td>
                  <td className="px-4 py-3">{p.no_telp}</td>
                  <td className="px-4 py-3">{p.nama_dapur}</td>
                  <td className="px-4 py-3 text-center">
                    <span
                      className={`siqah-status-badge ${
                        p.status === "Aktif"
                          ? "siqah-status-success"
                          : "siqah-status-danger"
                      }`}
                    >
                      {p.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-center">
                    <div className="flex justify-center gap-2">
                      <button
                        onClick={() => handleView(p)}
                        className="siqah-icon-action siqah-icon-action-view"
                      >
                        <Eye size={16} />
                      </button>
                      <button
                        onClick={() => handleEdit(p)}
                        className="siqah-icon-action siqah-icon-action-edit"
                      >
                        <Pencil size={16} />
                      </button>
                      <button
                        onClick={() => handleDelete(p)}
                        className="siqah-icon-action siqah-icon-action-delete"
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
              Detail Petugas Dapur
            </h2>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <p><strong>Kode:</strong> {selectedPetugas.kode_petugas}</p>
              <p><strong>Nama:</strong> {selectedPetugas.nama_petugas}</p>
              <p><strong>No. Telepon:</strong> {selectedPetugas.no_telp}</p>
              <p><strong>Nama Dapur:</strong> {selectedPetugas.nama_dapur}</p>
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
              Edit Data Petugas Dapur
            </h2>
            <form className="space-y-3">
              <div>
                <label className="text-sm font-medium">Nama Petugas</label>
                <input
                  type="text"
                  defaultValue={selectedPetugas.nama_petugas}
                  className="siqah-field"
                />
              </div>
              <div>
                <label className="text-sm font-medium">No. Telepon</label>
                <input
                  type="text"
                  defaultValue={selectedPetugas.no_telp}
                  className="siqah-field"
                />
              </div>
              <div>
                <label className="text-sm font-medium">Alamat</label>
                <textarea
                  defaultValue={selectedPetugas.alamat}
                  className="siqah-field"
                  rows="3"
                />
              </div>
              <div>
                <label className="text-sm font-medium">Nama Dapur</label>
                <input
                  type="text"
                  defaultValue={selectedPetugas.nama_dapur}
                  className="siqah-field"
                />
              </div>
              <div>
                <label className="text-sm font-medium">Status</label>
                <select
                  defaultValue={selectedPetugas.status}
                  className="siqah-field"
                >
                  <option value="Aktif">Aktif</option>
                  <option value="Tidak Aktif">Tidak Aktif</option>
                </select>
              </div>
              <div className="flex justify-end pt-3">
                <button
                  type="button"
                  onClick={() => setModalEdit(false)}
                  className="siqah-btn-primary"
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
              Hapus Petugas Dapur?
            </h3>
            <p className="text-sm text-[#7a7368]">
              Data petugas <strong>{selectedPetugas.nama_petugas}</strong> akan dihapus dari sistem.
            </p>
            <div className="flex justify-center gap-3 pt-2">
              <button
                onClick={() => setModalDelete(false)}
                className="siqah-btn-secondary"
              >
                Batal
              </button>
              <button
                onClick={() => setModalDelete(false)}
                className="siqah-btn-danger"
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
            Tambah Petugas Dapur Baru
          </h2>
          <form className="space-y-3">
            <div>
              <label className="text-sm font-medium">Nama Petugas</label>
              <input
                type="text"
                placeholder="Masukkan nama petugas"
                className="siqah-field"
              />
            </div>
            <div>
              <label className="text-sm font-medium">No. Telepon</label>
              <input
                type="text"
                placeholder="Masukkan nomor telepon"
                className="siqah-field"
              />
            </div>
            <div>
              <label className="text-sm font-medium">Alamat</label>
              <textarea
                placeholder="Masukkan alamat petugas"
                rows="3"
                className="siqah-field"
              />
            </div>
            <div>
              <label className="text-sm font-medium">Nama Dapur</label>
              <input
                type="text"
                placeholder="Masukkan nama dapur"
                className="siqah-field"
              />
            </div>
            <div>
              <label className="text-sm font-medium">Status</label>
              <select className="siqah-field">
                <option value="Aktif">Aktif</option>
                <option value="Tidak Aktif">Tidak Aktif</option>
              </select>
            </div>
            <div className="flex justify-end pt-3">
              <button
                type="button"
                onClick={() => setModalTambah(false)}
                className="siqah-btn-primary"
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






