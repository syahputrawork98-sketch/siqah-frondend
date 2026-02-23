import { useState, useEffect } from "react";
import { Plus, Eye, Pencil, Trash2 } from "lucide-react";
import { Card, CardContent, Modal } from "@/shared/ui";

export default function DataMitraKandang() {
  const [dataMitra, setDataMitra] = useState([]);
  const [selectedMitra, setSelectedMitra] = useState(null);
  const [modalView, setModalView] = useState(false);
  const [modalEdit, setModalEdit] = useState(false);
  const [modalDelete, setModalDelete] = useState(false);
  const [modalTambah, setModalTambah] = useState(false);

  useEffect(() => {
    // Dummy data simulasi (nanti diganti API)
    setDataMitra([
      {
        id_mitra_kandang: 1,
        kode_mitra: "PTGKD001",
        nama_mitra: "Ahmad Fauzi",
        no_telp: "081234567890",
        alamat: "Jl. Raya Aqiqah No. 15, Bandung",
        jumlah_kandang: 3,
        jumlah_hewan: 47,
        status: "Aktif",
        created_at: "2025-10-25",
      },
      {
        id_mitra_kandang: 2,
        kode_mitra: "PTGKD002",
        nama_mitra: "Rizki Hidayat",
        no_telp: "081356789012",
        alamat: "Jl. Cisaranten Kulon No. 8, Cimahi",
        jumlah_kandang: 2,
        jumlah_hewan: 32,
        status: "Aktif",
        created_at: "2025-10-28",
      },
      {
        id_mitra_kandang: 3,
        kode_mitra: "PTGKD003",
        nama_mitra: "Samsul Anwar",
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
    setSelectedMitra(p);
    setModalView(true);
  };

  const handleEdit = (p) => {
    setSelectedMitra(p);
    setModalEdit(true);
  };

  const handleDelete = (p) => {
    setSelectedMitra(p);
    setModalDelete(true);
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-semibold text-[#3b3b3b]">
            Data Mitra Kandang
          </h1>
          <p className="text-sm text-[#7a7368]">
            Daftar semua mitra kandang dan tanggung jawab mereka.
          </p>
        </div>
        <button
          onClick={() => setModalTambah(true)}
          className="siqah-btn-primary shadow-sm"
        >
          <Plus size={16} />
          Tambah Mitra
        </button>
      </div>

      {/* Table */}
      <Card className="siqah-table-card overflow-hidden">
        <CardContent className="p-0">
          <table className="w-full text-sm text-left border-collapse">
            <thead className="siqah-table-head">
              <tr>
                <th className="px-4 py-3">Kode Mitra</th>
                <th className="px-4 py-3">Nama Mitra</th>
                <th className="px-4 py-3">No. Telepon</th>
                <th className="px-4 py-3 text-center">Jumlah Kandang</th>
                <th className="px-4 py-3 text-center">Jumlah Hewan</th>
                <th className="px-4 py-3 text-center">Status</th>
                <th className="px-4 py-3 text-center">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {dataMitra.map((p) => (
                <tr
                  key={p.id_mitra_kandang}
                  className="siqah-table-row"
                >
                  <td className="px-4 py-3">{p.kode_mitra}</td>
                  <td className="px-4 py-3">{p.nama_mitra}</td>
                  <td className="px-4 py-3">{p.no_telp}</td>
                  <td className="px-4 py-3 text-center">{p.jumlah_kandang}</td>
                  <td className="px-4 py-3 text-center">{p.jumlah_hewan}</td>
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
        {selectedMitra && (
          <div className="p-5 space-y-3">
            <h2 className="text-lg font-semibold text-[#3b3b3b]">
              Detail Mitra
            </h2>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <p><strong>Kode:</strong> {selectedMitra.kode_mitra}</p>
              <p><strong>Nama:</strong> {selectedMitra.nama_mitra}</p>
              <p><strong>No. Telepon:</strong> {selectedMitra.no_telp}</p>
              <p><strong>Jumlah Kandang:</strong> {selectedMitra.jumlah_kandang}</p>
              <p><strong>Jumlah Hewan:</strong> {selectedMitra.jumlah_hewan}</p>
              <p><strong>Status:</strong> {selectedMitra.status}</p>
              <p className="col-span-2">
                <strong>Alamat:</strong> {selectedMitra.alamat}
              </p>
            </div>
          </div>
        )}
      </Modal>

      {/* Modal Edit */}
      <Modal isOpen={modalEdit} onClose={() => setModalEdit(false)}>
        {selectedMitra && (
          <div className="p-5 space-y-3">
            <h2 className="text-lg font-semibold text-[#3b3b3b]">
              Edit Data Mitra
            </h2>
            <form className="space-y-3">
              <div>
                <label className="text-sm font-medium">Nama Mitra</label>
                <input
                  type="text"
                  defaultValue={selectedMitra.nama_mitra}
                  className="siqah-field"
                />
              </div>
              <div>
                <label className="text-sm font-medium">No. Telepon</label>
                <input
                  type="text"
                  defaultValue={selectedMitra.no_telp}
                  className="siqah-field"
                />
              </div>
              <div>
                <label className="text-sm font-medium">Alamat</label>
                <textarea
                  defaultValue={selectedMitra.alamat}
                  className="siqah-field"
                  rows="3"
                />
              </div>
              <div>
                <label className="text-sm font-medium">Status</label>
                <select
                  defaultValue={selectedMitra.status}
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
        {selectedMitra && (
          <div className="p-6 text-center space-y-3">
            <Trash2 size={40} className="mx-auto text-red-500" />
            <h3 className="text-lg font-semibold text-[#3b3b3b]">
              Hapus Mitra Kandang?
            </h3>
            <p className="text-sm text-[#7a7368]">
              Data mitra <strong>{selectedMitra.nama_mitra}</strong> akan dihapus dari sistem.
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
            Tambah Mitra Baru
          </h2>
          <form className="space-y-3">
            <div>
              <label className="text-sm font-medium">Nama Mitra</label>
              <input
                type="text"
                placeholder="Masukkan nama mitra"
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
                placeholder="Masukkan alamat mitra"
                rows="3"
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








