import { useState, useEffect } from "react";
import { Plus, Eye, Pencil, Trash2 } from "lucide-react";
import { Card, CardContent, Modal } from "@/shared/ui";

export default function DataCatering() {
  const [dataCatering, setDataCatering] = useState([]);
  const [selectedCatering, setSelectedCatering] = useState(null);
  const [modalView, setModalView] = useState(false);
  const [modalEdit, setModalEdit] = useState(false);
  const [modalDelete, setModalDelete] = useState(false);
  const [modalTambah, setModalTambah] = useState(false);

  useEffect(() => {
    // Dummy data sesuai tb_catering
    setDataCatering([
      {
        id_catering: 1,
        kode_catering: "DPR001",
        nama_catering: "Catering Utama",
        lokasi: "Jl. Raya Aqiqah No. 10, Bandung",
        kapasitas: 50,
        penanggung_jawab: "Siti Aminah",
        status_aktif: true,
        created_at: "2025-10-25",
      },
      {
        id_catering: 2,
        kode_catering: "DPR002",
        nama_catering: "Catering Selatan",
        lokasi: "Desa Cisaranten, Bandung",
        kapasitas: 30,
        penanggung_jawab: "Rahmat Hidayat",
        status_aktif: true,
        created_at: "2025-10-28",
      },
      {
        id_catering: 3,
        kode_catering: "DPR003",
        nama_catering: "Catering Timur",
        lokasi: "Jl. Sukamaju No. 8, Cimahi",
        kapasitas: 40,
        penanggung_jawab: "Dewi Lestari",
        status_aktif: false,
        created_at: "2025-11-01",
      },
    ]);
  }, []);

  const handleView = (d) => {
    setSelectedCatering(d);
    setModalView(true);
  };

  const handleEdit = (d) => {
    setSelectedCatering(d);
    setModalEdit(true);
  };

  const handleDelete = (d) => {
    setSelectedCatering(d);
    setModalDelete(true);
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-semibold text-[#3b3b3b]">Data Catering</h1>
          <p className="text-sm text-[#7a7368]">
            Daftar seluruh catering yang terdaftar dan aktif dalam sistem Siqah.
          </p>
        </div>
        <button
          onClick={() => setModalTambah(true)}
          className="siqah-btn-primary shadow-sm"
        >
          <Plus size={16} />
          Tambah Catering
        </button>
      </div>

      {/* Table */}
      <Card className="siqah-table-card overflow-hidden">
        <CardContent className="p-0">
          <table className="w-full text-sm text-left border-collapse">
            <thead className="siqah-table-head">
              <tr>
                <th className="px-4 py-3">Kode Catering</th>
                <th className="px-4 py-3">Nama Catering</th>
                <th className="px-4 py-3">Lokasi</th>
                <th className="px-4 py-3 text-center">Kapasitas</th>
                <th className="px-4 py-3">Penanggung Jawab</th>
                <th className="px-4 py-3 text-center">Status</th>
                <th className="px-4 py-3 text-center">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {dataCatering.map((d) => (
                <tr
                  key={d.id_catering}
                  className="siqah-table-row"
                >
                  <td className="px-4 py-3">{d.kode_catering}</td>
                  <td className="px-4 py-3">{d.nama_catering}</td>
                  <td className="px-4 py-3">{d.lokasi}</td>
                  <td className="px-4 py-3 text-center">{d.kapasitas}</td>
                  <td className="px-4 py-3">{d.penanggung_jawab}</td>
                  <td className="px-4 py-3 text-center">
                    <span
                      className={`siqah-status-badge ${
                        d.status_aktif
                          ? "siqah-status-success"
                          : "siqah-status-danger"
                      }`}
                    >
                      {d.status_aktif ? "Aktif" : "Nonaktif"}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-center">
                    <div className="flex justify-center gap-2">
                      <button
                        onClick={() => handleView(d)}
                        className="siqah-icon-action siqah-icon-action-view"
                      >
                        <Eye size={16} />
                      </button>
                      <button
                        onClick={() => handleEdit(d)}
                        className="siqah-icon-action siqah-icon-action-edit"
                      >
                        <Pencil size={16} />
                      </button>
                      <button
                        onClick={() => handleDelete(d)}
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
        {selectedCatering && (
          <div className="p-5 space-y-3">
            <h2 className="text-lg font-semibold text-[#3b3b3b]">Detail Catering</h2>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <p><strong>Kode:</strong> {selectedCatering.kode_catering}</p>
              <p><strong>Nama Catering:</strong> {selectedCatering.nama_catering}</p>
              <p><strong>Lokasi:</strong> {selectedCatering.lokasi}</p>
              <p><strong>Kapasitas:</strong> {selectedCatering.kapasitas}</p>
              <p><strong>Penanggung Jawab:</strong> {selectedCatering.penanggung_jawab}</p>
              <p><strong>Status:</strong> {selectedCatering.status_aktif ? "Aktif" : "Nonaktif"}</p>
              <p><strong>Tanggal Input:</strong> {selectedCatering.created_at}</p>
            </div>
          </div>
        )}
      </Modal>

      {/* Modal Edit */}
      <Modal isOpen={modalEdit} onClose={() => setModalEdit(false)}>
        {selectedCatering && (
          <div className="p-5 space-y-3">
            <h2 className="text-lg font-semibold text-[#3b3b3b]">Edit Data Catering</h2>
            <form className="space-y-3">
              <div>
                <label className="text-sm font-medium">Nama Catering</label>
                <input
                  type="text"
                  defaultValue={selectedCatering.nama_catering}
                  className="siqah-field"
                />
              </div>
              <div>
                <label className="text-sm font-medium">Lokasi</label>
                <input
                  type="text"
                  defaultValue={selectedCatering.lokasi}
                  className="siqah-field"
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-sm font-medium">Kapasitas</label>
                  <input
                    type="number"
                    defaultValue={selectedCatering.kapasitas}
                    className="siqah-field"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">Status</label>
                  <select
                    defaultValue={selectedCatering.status_aktif ? "Aktif" : "Nonaktif"}
                    className="siqah-field"
                  >
                    <option value="Aktif">Aktif</option>
                    <option value="Nonaktif">Nonaktif</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="text-sm font-medium">Penanggung Jawab</label>
                <input
                  type="text"
                  defaultValue={selectedCatering.penanggung_jawab}
                  className="siqah-field"
                />
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
        {selectedCatering && (
          <div className="p-6 text-center space-y-3">
            <Trash2 size={40} className="mx-auto text-red-500" />
            <h3 className="text-lg font-semibold text-[#3b3b3b]">Hapus Catering?</h3>
            <p className="text-sm text-[#7a7368]">
              Data catering <strong>{selectedCatering.nama_catering}</strong> akan dihapus dari sistem.
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
          <h2 className="text-lg font-semibold text-[#3b3b3b]">Tambah Catering Baru</h2>
          <form className="space-y-3">
            <div>
              <label className="text-sm font-medium">Nama Catering</label>
              <input
                type="text"
                placeholder="Masukkan nama catering"
                className="siqah-field"
              />
            </div>
            <div>
              <label className="text-sm font-medium">Lokasi</label>
              <input
                type="text"
                placeholder="Masukkan lokasi catering"
                className="siqah-field"
              />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-sm font-medium">Kapasitas</label>
                <input
                  type="number"
                  placeholder="Masukkan kapasitas catering"
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
            <div>
              <label className="text-sm font-medium">Penanggung Jawab</label>
              <input
                type="text"
                placeholder="Masukkan nama penanggung jawab"
                className="siqah-field"
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







