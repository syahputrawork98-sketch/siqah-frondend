import { useState, useEffect } from "react";
import { Plus, Eye, Pencil, Trash2 } from "lucide-react";
import { Card, CardContent, Modal } from "@/shared/ui";

export default function DataPaket() {
  const [dataPaket, setDataPaket] = useState([]);
  const [selectedPaket, setSelectedPaket] = useState(null);
  const [modalView, setModalView] = useState(false);
  const [modalEdit, setModalEdit] = useState(false);
  const [modalDelete, setModalDelete] = useState(false);
  const [modalTambah, setModalTambah] = useState(false);

  useEffect(() => {
    // Dummy data sesuai tb_paket
    setDataPaket([
      {
        id_paket: 1,
        kode_paket: "PKT001",
        nama_paket: "Paket Aqiqah Hemat",
        deskripsi: "Paket aqiqah dengan 1 ekor kambing dan 3 menu masakan.",
        harga: 2500000,
        status_aktif: true,
        created_at: "2025-10-28",
      },
      {
        id_paket: 2,
        kode_paket: "PKT002",
        nama_paket: "Paket Aqiqah Premium",
        deskripsi: "Paket lengkap dengan 1 ekor kambing premium dan 5 menu masakan.",
        harga: 3500000,
        status_aktif: true,
        created_at: "2025-10-30",
      },
      {
        id_paket: 3,
        kode_paket: "PKT003",
        nama_paket: "Paket Aqiqah Spesial",
        deskripsi: "Paket khusus untuk acara besar, dengan tambahan nasi box dan souvenir.",
        harga: 4500000,
        status_aktif: false,
        created_at: "2025-11-01",
      },
    ]);
  }, []);

  const handleView = (p) => {
    setSelectedPaket(p);
    setModalView(true);
  };

  const handleEdit = (p) => {
    setSelectedPaket(p);
    setModalEdit(true);
  };

  const handleDelete = (p) => {
    setSelectedPaket(p);
    setModalDelete(true);
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-semibold text-[#3b3b3b]">Data Paket</h1>
          <p className="text-sm text-[#7a7368]">
            Daftar paket aqiqah yang tersedia di sistem Siqah.
          </p>
        </div>
        <button
          onClick={() => setModalTambah(true)}
          className="siqah-btn-primary shadow-sm"
        >
          <Plus size={16} />
          Tambah Paket
        </button>
      </div>

      {/* Table */}
      <Card className="siqah-table-card overflow-hidden">
        <CardContent className="p-0">
          <table className="w-full text-sm text-left border-collapse">
            <thead className="siqah-table-head">
              <tr>
                <th className="px-4 py-3">Kode Paket</th>
                <th className="px-4 py-3">Nama Paket</th>
                <th className="px-4 py-3">Deskripsi</th>
                <th className="px-4 py-3 text-center">Harga</th>
                <th className="px-4 py-3 text-center">Status</th>
                <th className="px-4 py-3 text-center">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {dataPaket.map((p) => (
                <tr
                  key={p.id_paket}
                  className="siqah-table-row"
                >
                  <td className="px-4 py-3">{p.kode_paket}</td>
                  <td className="px-4 py-3">{p.nama_paket}</td>
                  <td className="px-4 py-3">{p.deskripsi}</td>
                  <td className="px-4 py-3 text-center">
                    Rp {p.harga.toLocaleString("id-ID")}
                  </td>
                  <td className="px-4 py-3 text-center">
                    <span
                      className={`siqah-status-badge ${
                        p.status_aktif
                          ? "siqah-status-success"
                          : "siqah-status-danger"
                      }`}
                    >
                      {p.status_aktif ? "Aktif" : "Nonaktif"}
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
        {selectedPaket && (
          <div className="p-5 space-y-3">
            <h2 className="text-lg font-semibold text-[#3b3b3b]">
              Detail Paket
            </h2>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <p><strong>Kode:</strong> {selectedPaket.kode_paket}</p>
              <p><strong>Nama Paket:</strong> {selectedPaket.nama_paket}</p>
              <p className="col-span-2">
                <strong>Deskripsi:</strong> {selectedPaket.deskripsi}
              </p>
              <p><strong>Harga:</strong> Rp {selectedPaket.harga.toLocaleString("id-ID")}</p>
              <p><strong>Status:</strong> {selectedPaket.status_aktif ? "Aktif" : "Nonaktif"}</p>
              <p><strong>Tanggal Input:</strong> {selectedPaket.created_at}</p>
            </div>
          </div>
        )}
      </Modal>

      {/* Modal Edit */}
      <Modal isOpen={modalEdit} onClose={() => setModalEdit(false)}>
        {selectedPaket && (
          <div className="p-5 space-y-3">
            <h2 className="text-lg font-semibold text-[#3b3b3b]">
              Edit Data Paket
            </h2>
            <form className="space-y-3">
              <div>
                <label className="text-sm font-medium">Nama Paket</label>
                <input
                  type="text"
                  defaultValue={selectedPaket.nama_paket}
                  className="siqah-field"
                />
              </div>
              <div>
                <label className="text-sm font-medium">Deskripsi</label>
                <textarea
                  defaultValue={selectedPaket.deskripsi}
                  className="siqah-field"
                  rows="3"
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-sm font-medium">Harga</label>
                  <input
                    type="number"
                    defaultValue={selectedPaket.harga}
                    className="siqah-field"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">Status</label>
                  <select
                    defaultValue={selectedPaket.status_aktif ? "Aktif" : "Nonaktif"}
                    className="siqah-field"
                  >
                    <option value="Aktif">Aktif</option>
                    <option value="Nonaktif">Nonaktif</option>
                  </select>
                </div>
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
        {selectedPaket && (
          <div className="p-6 text-center space-y-3">
            <Trash2 size={40} className="mx-auto text-red-500" />
            <h3 className="text-lg font-semibold text-[#3b3b3b]">
              Hapus Paket?
            </h3>
            <p className="text-sm text-[#7a7368]">
              Data paket <strong>{selectedPaket.nama_paket}</strong> akan dihapus dari sistem.
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
            Tambah Paket Baru
          </h2>
          <form className="space-y-3">
            <div>
              <label className="text-sm font-medium">Nama Paket</label>
              <input
                type="text"
                placeholder="Masukkan nama paket"
                className="siqah-field"
              />
            </div>
            <div>
              <label className="text-sm font-medium">Deskripsi</label>
              <textarea
                placeholder="Masukkan deskripsi paket"
                rows="3"
                className="siqah-field"
              />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-sm font-medium">Harga</label>
                <input
                  type="number"
                  placeholder="Masukkan harga paket"
                  className="siqah-field"
                />
              </div>
              <div>
                <label className="text-sm font-medium">Status</label>
                <select className="siqah-field">
                  <option value="Aktif">Aktif</option>
                  <option value="Nonaktif">Nonaktif</option>
                </select>
              </div>
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






