// client/src/pages/data-master/kandang/DataHewan.jsx
import { useState, useEffect } from "react";
import { Plus, Eye, Pencil, Trash2 } from "lucide-react";
import { Card, CardContent } from "../../../components/ui/Card";
import Modal from "../../../components/ui/Modal";

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
          className="flex items-center gap-2 bg-[#e2b97f] hover:bg-[#d7aa6b] text-white px-4 py-2 rounded-lg text-sm font-medium shadow-sm transition"
        >
          <Plus size={16} />
          Tambah Hewan
        </button>
      </div>

      {/* Table */}
      <Card className="border border-[#eee6da] shadow-sm rounded-2xl overflow-hidden">
        <CardContent className="p-0">
          <table className="w-full text-sm text-left border-collapse">
            <thead className="bg-[#fdfaf6] border-b border-[#eee6da]">
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
                  className="border-b border-[#f3eee6] hover:bg-[#f9f6ef]/60 transition"
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
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        h.status === "Aktif"
                          ? "bg-green-100 text-green-700"
                          : h.status === "Terjual"
                          ? "bg-red-100 text-red-700"
                          : "bg-yellow-100 text-yellow-700"
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
                        className="p-2 rounded-md hover:bg-[#f9f6ef] text-[#e2b97f]"
                      >
                        <Eye size={16} />
                      </button>
                      <button
                        onClick={() => handleEdit(h)}
                        className="p-2 rounded-md hover:bg-[#f9f6ef] text-blue-500"
                      >
                        <Pencil size={16} />
                      </button>
                      <button
                        onClick={() => handleDelete(h)}
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
                  className="w-full border border-[#e7e1d8] rounded-lg px-3 py-2 mt-1 text-sm"
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
                  className="w-full border border-[#e7e1d8] rounded-lg px-3 py-2 mt-1 text-sm"
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-sm font-medium">Berat (kg)</label>
                  <input
                    type="number"
                    defaultValue={selectedHewan.berat}
                    className="w-full border border-[#e7e1d8] rounded-lg px-3 py-2 mt-1 text-sm"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">Harga (Rp)</label>
                  <input
                    type="number"
                    defaultValue={selectedHewan.harga}
                    className="w-full border border-[#e7e1d8] rounded-lg px-3 py-2 mt-1 text-sm"
                  />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium">Status</label>
                <select
                  defaultValue={selectedHewan.status}
                  className="w-full border border-[#e7e1d8] rounded-lg px-3 py-2 mt-1 text-sm"
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
                  className="bg-[#e2b97f] hover:bg-[#d7aa6b] text-white px-4 py-2 rounded-lg text-sm font-medium transition"
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

      {/* Modal Tambah Hewan */}
      <Modal isOpen={modalTambah} onClose={() => setModalTambah(false)}>
        <div className="p-5 space-y-3">
          <h2 className="text-lg font-semibold text-[#3b3b3b]">
            Tambah Hewan Baru
          </h2>
          <form className="space-y-3">
            <div>
              <label className="text-sm font-medium">Jenis Hewan</label>
              <select className="w-full border border-[#e7e1d8] rounded-lg px-3 py-2 mt-1 text-sm">
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
                className="w-full border border-[#e7e1d8] rounded-lg px-3 py-2 mt-1 text-sm"
              />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-sm font-medium">Berat (kg)</label>
                <input
                  type="number"
                  placeholder="Masukkan berat"
                  className="w-full border border-[#e7e1d8] rounded-lg px-3 py-2 mt-1 text-sm"
                />
              </div>
              <div>
                <label className="text-sm font-medium">Harga (Rp)</label>
                <input
                  type="number"
                  placeholder="Masukkan harga"
                  className="w-full border border-[#e7e1d8] rounded-lg px-3 py-2 mt-1 text-sm"
                />
              </div>
            </div>
            <div>
              <label className="text-sm font-medium">Upload Foto</label>
              <input
                type="file"
                className="w-full border border-[#e7e1d8] rounded-lg px-3 py-2 mt-1 text-sm bg-white"
              />
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
