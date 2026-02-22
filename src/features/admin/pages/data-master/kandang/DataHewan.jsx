import { useState, useEffect } from "react";
import { Plus, Eye, Pencil, Trash2 } from "lucide-react";
import { Card, CardContent, Modal } from "@/shared/ui";

export default function DataHewan() {
  const [dataHewan, setDataHewan] = useState([]);
  const [selectedHewan, setSelectedHewan] = useState(null);
  const [modalView, setModalView] = useState(false);
  const [modalEdit, setModalEdit] = useState(false);
  const [modalDelete, setModalDelete] = useState(false);
  const [modalTambah, setModalTambah] = useState(false);

  useEffect(() => {
    // Dummy data
    setDataHewan([
      {
        id_hewan: 1,
        kode_hewan: "KDG001-001",
        jenis_hewan: "Kambing",
        nama_kandang: "Kandang Utama",
        berat: 35,
        harga: 2500000,
        foto: "/images/hewan/kambing1.jpg",
        status: "Aktif",
        created_at: "2025-10-30",
      },
      {
        id_hewan: 2,
        kode_hewan: "KDG002-001",
        jenis_hewan: "Domba",
        nama_kandang: "Kandang Selatan",
        berat: 42,
        harga: 2800000,
        foto: "/images/hewan/domba1.jpg",
        status: "Terjual",
        created_at: "2025-10-31",
      },
      {
        id_hewan: 3,
        kode_hewan: "KDG003-002",
        jenis_hewan: "Sapi",
        nama_kandang: "Kandang Timur",
        berat: 215,
        harga: 14500000,
        foto: "/images/hewan/sapi1.jpg",
        status: "Aktif",
        created_at: "2025-11-01",
      },
    ]);
  }, []);

  const handleView = (h) => {
    setSelectedHewan(h);
    setModalView(true);
  };

  const handleEdit = (h) => {
    setSelectedHewan(h);
    setModalEdit(true);
  };

  const handleDelete = (h) => {
    setSelectedHewan(h);
    setModalDelete(true);
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-semibold text-[#3b3b3b]">Data Hewan</h1>
          <p className="text-sm text-[#7a7368]">
            Daftar semua hewan dari seluruh kandang.
          </p>
        </div>
        <button
          onClick={() => setModalTambah(true)}
          className="siqah-btn-primary shadow-sm"
        >
          <Plus size={16} />
          Tambah Hewan
        </button>
      </div>

      {/* Table */}
      <Card className="siqah-table-card overflow-hidden">
        <CardContent className="p-0">
          <table className="w-full text-sm text-left border-collapse">
            <thead className="siqah-table-head">
              <tr>
                <th className="px-4 py-3">Kode Hewan</th>
                <th className="px-4 py-3">Jenis Hewan</th>
                <th className="px-4 py-3">Kandang</th>
                <th className="px-4 py-3 text-center">Berat (kg)</th>
                <th className="px-4 py-3 text-center">Harga (Rp)</th>
                <th className="px-4 py-3 text-center">Status</th>
                <th className="px-4 py-3 text-center">Tanggal Input</th>
                <th className="px-4 py-3 text-center">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {dataHewan.map((h) => (
                <tr
                  key={h.id_hewan}
                  className="siqah-table-row"
                >
                  <td className="px-4 py-3">{h.kode_hewan}</td>
                  <td className="px-4 py-3">{h.jenis_hewan}</td>
                  <td className="px-4 py-3">{h.nama_kandang}</td>
                  <td className="px-4 py-3 text-center">{h.berat}</td>
                  <td className="px-4 py-3 text-center">
                    {h.harga.toLocaleString("id-ID")}
                  </td>
                  <td className="px-4 py-3 text-center">
                    <span
                      className={`siqah-status-badge ${
                        h.status === "Aktif"
                          ? "siqah-status-success"
                          : h.status === "Terjual"
                          ? "siqah-status-danger"
                          : "siqah-status-warning"
                      }`}
                    >
                      {h.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-center">{h.created_at}</td>
                  <td className="px-4 py-3 text-center">
                    <div className="flex justify-center gap-2">
                      <button
                        onClick={() => handleView(h)}
                        className="siqah-icon-action siqah-icon-action-view"
                      >
                        <Eye size={16} />
                      </button>
                      <button
                        onClick={() => handleEdit(h)}
                        className="siqah-icon-action siqah-icon-action-edit"
                      >
                        <Pencil size={16} />
                      </button>
                      <button
                        onClick={() => handleDelete(h)}
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
        {selectedHewan && (
          <div className="p-5 space-y-3">
            <h2 className="text-lg font-semibold text-[#3b3b3b]">Detail Hewan</h2>
            <img
              src={selectedHewan.foto}
              alt={selectedHewan.jenis_hewan}
              className="w-full h-56 object-cover rounded-lg border border-[#eee6da]"
            />
            <div className="grid grid-cols-2 gap-3 text-sm">
              <p><strong>Kode:</strong> {selectedHewan.kode_hewan}</p>
              <p><strong>Jenis:</strong> {selectedHewan.jenis_hewan}</p>
              <p><strong>Kandang:</strong> {selectedHewan.nama_kandang}</p>
              <p><strong>Berat:</strong> {selectedHewan.berat} kg</p>
              <p><strong>Harga:</strong> Rp {selectedHewan.harga.toLocaleString("id-ID")}</p>
              <p><strong>Status:</strong> {selectedHewan.status}</p>
              <p><strong>Tanggal Input:</strong> {selectedHewan.created_at}</p>
            </div>
          </div>
        )}
      </Modal>

      {/* Modal Edit */}
      <Modal isOpen={modalEdit} onClose={() => setModalEdit(false)}>
        {selectedHewan && (
          <div className="p-5 space-y-3">
            <h2 className="text-lg font-semibold text-[#3b3b3b]">Edit Data Hewan</h2>
            <form className="space-y-3">
              <div>
                <label className="text-sm font-medium">Jenis Hewan</label>
                <select
                  defaultValue={selectedHewan.jenis_hewan}
                  className="siqah-field"
                >
                  <option value="Kambing">Kambing</option>
                  <option value="Domba">Domba</option>
                  <option value="Sapi">Sapi</option>
                </select>
              </div>
              <div>
                <label className="text-sm font-medium">Kandang</label>
                <input
                  type="text"
                  defaultValue={selectedHewan.nama_kandang}
                  className="siqah-field"
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-sm font-medium">Berat (kg)</label>
                  <input
                    type="number"
                    defaultValue={selectedHewan.berat}
                    className="siqah-field"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">Harga (Rp)</label>
                  <input
                    type="number"
                    defaultValue={selectedHewan.harga}
                    className="siqah-field"
                  />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium">Status</label>
                <select
                  defaultValue={selectedHewan.status}
                  className="siqah-field"
                >
                  <option value="Aktif">Aktif</option>
                  <option value="Terjual">Terjual</option>
                  <option value="Diproses">Diproses</option>
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

      {/* Modal Delete Confirmation */}
      <Modal isOpen={modalDelete} onClose={() => setModalDelete(false)}>
        {selectedHewan && (
          <div className="p-6 text-center space-y-3">
            <Trash2 size={40} className="mx-auto text-red-500" />
            <h3 className="text-lg font-semibold text-[#3b3b3b]">
              Hapus Data Hewan?
            </h3>
            <p className="text-sm text-[#7a7368]">
              Data hewan <strong>{selectedHewan.kode_hewan}</strong> akan dihapus
              dari daftar. Tindakan ini tidak dapat dibatalkan.
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

      {/* Modal Tambah Hewan */}
      <Modal isOpen={modalTambah} onClose={() => setModalTambah(false)}>
        <div className="p-5 space-y-3">
          <h2 className="text-lg font-semibold text-[#3b3b3b]">
            Tambah Hewan Baru
          </h2>
          <form className="space-y-3">
            <div>
              <label className="text-sm font-medium">Jenis Hewan</label>
              <select className="siqah-field">
                <option>Kambing</option>
                <option>Domba</option>
                <option>Sapi</option>
              </select>
            </div>
            <div>
              <label className="text-sm font-medium">Asal Kandang</label>
              <input
                type="text"
                placeholder="Masukkan nama kandang"
                className="siqah-field"
              />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-sm font-medium">Berat (kg)</label>
                <input
                  type="number"
                  placeholder="Masukkan berat"
                  className="siqah-field"
                />
              </div>
              <div>
                <label className="text-sm font-medium">Harga (Rp)</label>
                <input
                  type="number"
                  placeholder="Masukkan harga"
                  className="siqah-field"
                />
              </div>
            </div>
            <div>
              <label className="text-sm font-medium">Upload Foto</label>
              <input
                type="file"
                className="siqah-field bg-white"
              />
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







