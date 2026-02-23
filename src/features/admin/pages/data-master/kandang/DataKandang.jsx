import { useState, useEffect } from "react";
import { Plus, Eye, Pencil, Trash2 } from "lucide-react";
import { Card, CardContent, Modal } from "@/shared/ui";

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
        penanggung_jawab: "Tim Kandang A",
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
        penanggung_jawab: "Tim Kandang B",
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
        penanggung_jawab: "Tim Kandang C",
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
            Daftar semua kandang yang terdaftar dan aktif digunakan oleh mitra.
          </p>
        </div>
        <button
          onClick={() => setModalTambah(true)}
          className="siqah-btn-primary shadow-sm"
        >
          <Plus size={16} />
          Tambah Kandang
        </button>
      </div>

      {/* Table */}
      <Card className="siqah-table-card overflow-hidden">
        <CardContent className="p-0">
          <table className="w-full text-sm text-left border-collapse">
            <thead className="siqah-table-head">
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
                  className="siqah-table-row"
                >
                  <td className="px-4 py-3">{k.kode_kandang}</td>
                  <td className="px-4 py-3">{k.nama_kandang}</td>
                  <td className="px-4 py-3">{k.lokasi}</td>
                  <td className="px-4 py-3 text-center">{k.kapasitas}</td>
                  <td className="px-4 py-3 text-center">{k.jumlah_hewan}</td>
                  <td className="px-4 py-3">{k.penanggung_jawab}</td>
                  <td className="px-4 py-3 text-center">
                    <span
                      className={`siqah-status-badge ${
                        k.status === "Aktif"
                          ? "siqah-status-success"
                          : k.status === "Penuh"
                          ? "siqah-status-warning"
                          : "siqah-status-danger"
                      }`}
                    >
                      {k.status}
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
                  className="siqah-field"
                />
              </div>
              <div>
                <label className="text-sm font-medium">Lokasi</label>
                <input
                  type="text"
                  defaultValue={selectedKandang.lokasi}
                  className="siqah-field"
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-sm font-medium">Kapasitas</label>
                  <input
                    type="number"
                    defaultValue={selectedKandang.kapasitas}
                    className="siqah-field"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">Status</label>
                  <select
                    defaultValue={selectedKandang.status}
                    className="siqah-field"
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
          <h2 className="text-lg font-semibold text-[#3b3b3b]">Tambah Kandang Baru</h2>
          <form className="space-y-3">
            <div>
              <label className="text-sm font-medium">Nama Kandang</label>
              <input
                type="text"
                placeholder="Masukkan nama kandang"
                className="siqah-field"
              />
            </div>
            <div>
              <label className="text-sm font-medium">Lokasi</label>
              <input
                type="text"
                placeholder="Masukkan lokasi kandang"
                className="siqah-field"
              />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-sm font-medium">Kapasitas</label>
                <input
                  type="number"
                  placeholder="Masukkan kapasitas"
                  className="siqah-field"
                />
              </div>
              <div>
                <label className="text-sm font-medium">Status</label>
                <select className="siqah-field">
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
                placeholder="Masukkan nama mitra kandang"
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









