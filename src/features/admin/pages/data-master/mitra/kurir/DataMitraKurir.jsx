import { useState, useEffect } from "react";
import { Plus, Eye, Pencil, Trash2 } from "lucide-react";
import { Card, CardContent, Modal } from "@/shared/ui";

export default function DataMitraKurir() {
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
            Data Mitra Kurir
          </h1>
          <p className="text-sm text-[#7a7368]">
            Daftar mitra kurir dan informasi kendaraan mereka.
          </p>
        </div>
        <button
          onClick={() => setModalTambah(true)}
          className="siqah-btn-primary shadow-sm"
        >
          <Plus size={16} />
          Tambah Kurir
        </button>
      </div>

      {/* Table */}
      <Card className="siqah-table-card overflow-hidden">
        <CardContent className="p-0">
          <table className="w-full text-sm text-left border-collapse">
            <thead className="siqah-table-head">
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
                  className="siqah-table-row"
                >
                  <td className="px-4 py-3">{k.kode_kurir}</td>
                  <td className="px-4 py-3">{k.nama_kurir}</td>
                  <td className="px-4 py-3">{k.no_hp}</td>
                  <td className="px-4 py-3">{k.plat_nomor}</td>
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
        {selectedKurir && (
          <div className="p-5 space-y-3">
            <h2 className="text-lg font-semibold text-[#3b3b3b]">
              Detail Mitra Kurir
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
                  className="siqah-field"
                />
              </div>
              <div>
                <label className="text-sm font-medium">No. HP</label>
                <input
                  type="text"
                  defaultValue={selectedKurir.no_hp}
                  className="siqah-field"
                />
              </div>
              <div>
                <label className="text-sm font-medium">Alamat</label>
                <textarea
                  defaultValue={selectedKurir.alamat}
                  rows="3"
                  className="siqah-field"
                />
              </div>
              <div>
                <label className="text-sm font-medium">Plat Nomor</label>
                <input
                  type="text"
                  defaultValue={selectedKurir.plat_nomor}
                  className="siqah-field"
                />
              </div>
              <div>
                <label className="text-sm font-medium">Status</label>
                <select
                  defaultValue={selectedKurir.status_aktif ? "Aktif" : "Nonaktif"}
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
        {selectedKurir && (
          <div className="p-6 text-center space-y-3">
            <Trash2 size={40} className="mx-auto text-red-500" />
            <h3 className="text-lg font-semibold text-[#3b3b3b]">
              Hapus Mitra Kurir?
            </h3>
            <p className="text-sm text-[#7a7368]">
              Data kurir <strong>{selectedKurir.nama_kurir}</strong> akan dihapus dari sistem.
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
            Tambah Mitra Kurir
          </h2>
          <form className="space-y-3">
            <div>
              <label className="text-sm font-medium">Nama Kurir</label>
              <input
                type="text"
                placeholder="Masukkan nama kurir"
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
              <label className="text-sm font-medium">Alamat</label>
              <textarea
                placeholder="Masukkan alamat kurir"
                rows="3"
                className="siqah-field"
              />
            </div>
            <div>
              <label className="text-sm font-medium">Plat Nomor</label>
              <input
                type="text"
                placeholder="Masukkan plat nomor kendaraan"
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







