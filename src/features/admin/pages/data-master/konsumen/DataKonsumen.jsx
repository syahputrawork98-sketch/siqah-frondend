import { useState, useEffect } from "react";
import { Plus, Eye, Pencil, Trash2 } from "lucide-react";
import { Card, CardContent, Modal } from "@/shared/ui";

export default function DataKonsumen() {
  const [dataKonsumen, setDataKonsumen] = useState([]);
  const [selectedKonsumen, setSelectedKonsumen] = useState(null);
  const [modalView, setModalView] = useState(false);
  const [modalEdit, setModalEdit] = useState(false);
  const [modalDelete, setModalDelete] = useState(false);
  const [modalTambah, setModalTambah] = useState(false);

  useEffect(() => {
    // Dummy data simulasi (nanti diganti API)
    setDataKonsumen([
      {
        id_konsumen: 1,
        kode_konsumen: "KSM001",
        nama_lengkap: "Ahmad Fauzi",
        no_hp: "081234567890",
        email: "ahmadfauzi@mail.com",
        alamat: "Jl. Aqiqah No. 15, Bandung",
        status_aktif: true,
        created_at: "2025-10-25",
      },
      {
        id_konsumen: 2,
        kode_konsumen: "KSM002",
        nama_lengkap: "Siti Rahmawati",
        no_hp: "081345678901",
        email: "sitirahma@mail.com",
        alamat: "Jl. Cisaranten Kulon No. 8, Cimahi",
        status_aktif: true,
        created_at: "2025-10-28",
      },
      {
        id_konsumen: 3,
        kode_konsumen: "KSM003",
        nama_lengkap: "Rizki Hidayat",
        no_hp: "081298765432",
        email: "rizkihidayat@mail.com",
        alamat: "Jl. Mekarwangi No. 10, Kab. Bandung",
        status_aktif: false,
        created_at: "2025-11-01",
      },
    ]);
  }, []);

  const handleView = (k) => {
    setSelectedKonsumen(k);
    setModalView(true);
  };

  const handleEdit = (k) => {
    setSelectedKonsumen(k);
    setModalEdit(true);
  };

  const handleDelete = (k) => {
    setSelectedKonsumen(k);
    setModalDelete(true);
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-semibold text-[#3b3b3b]">
            Data Konsumen
          </h1>
          <p className="text-sm text-[#7a7368]">
            Daftar seluruh konsumen Siqah beserta kontak dan status akun mereka.
          </p>
        </div>
        <button
          onClick={() => setModalTambah(true)}
          className="siqah-btn-primary shadow-sm"
        >
          <Plus size={16} />
          Tambah Konsumen
        </button>
      </div>

      {/* Table */}
      <Card className="siqah-table-card overflow-hidden">
        <CardContent className="p-0">
          <table className="w-full text-sm text-left border-collapse">
            <thead className="siqah-table-head">
              <tr>
                <th className="px-4 py-3">Kode Konsumen</th>
                <th className="px-4 py-3">Nama Lengkap</th>
                <th className="px-4 py-3">No. HP</th>
                <th className="px-4 py-3">Email</th>
                <th className="px-4 py-3 text-center">Status</th>
                <th className="px-4 py-3 text-center">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {dataKonsumen.map((k) => (
                <tr
                  key={k.id_konsumen}
                  className="siqah-table-row"
                >
                  <td className="px-4 py-3">{k.kode_konsumen}</td>
                  <td className="px-4 py-3">{k.nama_lengkap}</td>
                  <td className="px-4 py-3">{k.no_hp}</td>
                  <td className="px-4 py-3">{k.email}</td>
                  <td className="px-4 py-3 text-center">
                    <span
                      className={`siqah-status-badge ${
                        k.status_aktif
                          ? "siqah-status-success"
                          : "siqah-status-danger"
                      }`}
                    >
                      {k.status_aktif ? "Aktif" : "Nonaktif"}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-center">
                    <div className="flex justify-center gap-2">
                      <button
                        onClick={() => handleView(k)}
                        className="siqah-icon-action siqah-icon-action-view"
                      >
                        <Eye size={16} />
                      </button>
                      <button
                        onClick={() => handleEdit(k)}
                        className="siqah-icon-action siqah-icon-action-edit"
                      >
                        <Pencil size={16} />
                      </button>
                      <button
                        onClick={() => handleDelete(k)}
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
        {selectedKonsumen && (
          <div className="p-5 space-y-3">
            <h2 className="text-lg font-semibold text-[#3b3b3b]">
              Detail Konsumen
            </h2>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <p><strong>Kode:</strong> {selectedKonsumen.kode_konsumen}</p>
              <p><strong>Nama:</strong> {selectedKonsumen.nama_lengkap}</p>
              <p><strong>No. HP:</strong> {selectedKonsumen.no_hp}</p>
              <p><strong>Email:</strong> {selectedKonsumen.email}</p>
              <p><strong>Status:</strong> {selectedKonsumen.status_aktif ? "Aktif" : "Nonaktif"}</p>
              <p className="col-span-2">
                <strong>Alamat:</strong> {selectedKonsumen.alamat}
              </p>
            </div>
          </div>
        )}
      </Modal>

      {/* Modal Edit */}
      <Modal isOpen={modalEdit} onClose={() => setModalEdit(false)}>
        {selectedKonsumen && (
          <div className="p-5 space-y-3">
            <h2 className="text-lg font-semibold text-[#3b3b3b]">
              Edit Data Konsumen
            </h2>
            <form className="space-y-3">
              <div>
                <label className="text-sm font-medium">Nama Lengkap</label>
                <input
                  type="text"
                  defaultValue={selectedKonsumen.nama_lengkap}
                  className="siqah-field"
                />
              </div>
              <div>
                <label className="text-sm font-medium">No. HP</label>
                <input
                  type="text"
                  defaultValue={selectedKonsumen.no_hp}
                  className="siqah-field"
                />
              </div>
              <div>
                <label className="text-sm font-medium">Email</label>
                <input
                  type="email"
                  defaultValue={selectedKonsumen.email}
                  className="siqah-field"
                />
              </div>
              <div>
                <label className="text-sm font-medium">Alamat</label>
                <textarea
                  defaultValue={selectedKonsumen.alamat}
                  rows="3"
                  className="siqah-field"
                />
              </div>
              <div>
                <label className="text-sm font-medium">Status</label>
                <select
                  defaultValue={selectedKonsumen.status_aktif ? "Aktif" : "Nonaktif"}
                  className="siqah-field"
                >
                  <option value="Aktif">Aktif</option>
                  <option value="Nonaktif">Nonaktif</option>
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
        {selectedKonsumen && (
          <div className="p-6 text-center space-y-3">
            <Trash2 size={40} className="mx-auto text-red-500" />
            <h3 className="text-lg font-semibold text-[#3b3b3b]">
              Hapus Konsumen?
            </h3>
            <p className="text-sm text-[#7a7368]">
              Data konsumen <strong>{selectedKonsumen.nama_lengkap}</strong> akan dihapus dari sistem.
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
            Tambah Konsumen Baru
          </h2>
          <form className="space-y-3">
            <div>
              <label className="text-sm font-medium">Nama Lengkap</label>
              <input
                type="text"
                placeholder="Masukkan nama konsumen"
                className="siqah-field"
              />
            </div>
            <div>
              <label className="text-sm font-medium">No. HP</label>
              <input
                type="text"
                placeholder="Masukkan nomor telepon"
                className="siqah-field"
              />
            </div>
            <div>
              <label className="text-sm font-medium">Email</label>
              <input
                type="email"
                placeholder="Masukkan email konsumen"
                className="siqah-field"
              />
            </div>
            <div>
              <label className="text-sm font-medium">Alamat</label>
              <textarea
                placeholder="Masukkan alamat konsumen"
                rows="3"
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






