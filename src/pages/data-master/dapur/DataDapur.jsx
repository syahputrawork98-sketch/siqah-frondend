import { useState, useEffect } from "react";
import { Plus, Eye, Pencil, Trash2 } from "lucide-react";
import { Card, CardContent } from "../../../components/ui/Card";
import Modal from "../../../components/ui/Modal";

export default function DataDapur() {
  const [dataDapur, setDataDapur] = useState([]);
  const [selectedDapur, setSelectedDapur] = useState(null);
  const [modalView, setModalView] = useState(false);
  const [modalEdit, setModalEdit] = useState(false);
  const [modalDelete, setModalDelete] = useState(false);
  const [modalTambah, setModalTambah] = useState(false);

  useEffect(() => {
    // Dummy data sesuai tb_dapur
    setDataDapur([
      {
        id_dapur: 1,
        kode_dapur: "DPR001",
        nama_dapur: "Dapur Utama",
        lokasi: "Jl. Raya Aqiqah No. 10, Bandung",
        kapasitas: 50,
        penanggung_jawab: "Siti Aminah",
        status_aktif: true,
        created_at: "2025-10-25",
      },
      {
        id_dapur: 2,
        kode_dapur: "DPR002",
        nama_dapur: "Dapur Selatan",
        lokasi: "Desa Cisaranten, Bandung",
        kapasitas: 30,
        penanggung_jawab: "Rahmat Hidayat",
        status_aktif: true,
        created_at: "2025-10-28",
      },
      {
        id_dapur: 3,
        kode_dapur: "DPR003",
        nama_dapur: "Dapur Timur",
        lokasi: "Jl. Sukamaju No. 8, Cimahi",
        kapasitas: 40,
        penanggung_jawab: "Dewi Lestari",
        status_aktif: false,
        created_at: "2025-11-01",
      },
    ]);
  }, []);

  const handleView = (d) => {
    setSelectedDapur(d);
    setModalView(true);
  };

  const handleEdit = (d) => {
    setSelectedDapur(d);
    setModalEdit(true);
  };

  const handleDelete = (d) => {
    setSelectedDapur(d);
    setModalDelete(true);
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-semibold text-[#3b3b3b]">Data Dapur</h1>
          <p className="text-sm text-[#7a7368]">
            Daftar seluruh dapur yang terdaftar dan aktif dalam sistem Siqah.
          </p>
        </div>
        <button
          onClick={() => setModalTambah(true)}
          className="flex items-center gap-2 bg-[#e2b97f] hover:bg-[#d7aa6b] text-white px-4 py-2 rounded-lg text-sm font-medium shadow-sm transition"
        >
          <Plus size={16} />
          Tambah Dapur
        </button>
      </div>

      {/* Table */}
      <Card className="border border-[#eee6da] shadow-sm rounded-2xl overflow-hidden">
        <CardContent className="p-0">
          <table className="w-full text-sm text-left border-collapse">
            <thead className="bg-[#fdfaf6] border-b border-[#eee6da]">
              <tr>
                <th className="px-4 py-3">Kode Dapur</th>
                <th className="px-4 py-3">Nama Dapur</th>
                <th className="px-4 py-3">Lokasi</th>
                <th className="px-4 py-3 text-center">Kapasitas</th>
                <th className="px-4 py-3">Penanggung Jawab</th>
                <th className="px-4 py-3 text-center">Status</th>
                <th className="px-4 py-3 text-center">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {dataDapur.map((d) => (
                <tr
                  key={d.id_dapur}
                  className="border-b border-[#f3eee6] hover:bg-[#f9f6ef]/60 transition"
                >
                  <td className="px-4 py-3">{d.kode_dapur}</td>
                  <td className="px-4 py-3">{d.nama_dapur}</td>
                  <td className="px-4 py-3">{d.lokasi}</td>
                  <td className="px-4 py-3 text-center">{d.kapasitas}</td>
                  <td className="px-4 py-3">{d.penanggung_jawab}</td>
                  <td className="px-4 py-3 text-center">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        d.status_aktif
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {d.status_aktif ? "Aktif" : "Nonaktif"}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-center">
                    <div className="flex justify-center gap-2">
                      <button
                        onClick={() => handleView(d)}
                        className="p-2 rounded-md hover:bg-[#f9f6ef] text-[#e2b97f]"
                      >
                        <Eye size={16} />
                      </button>
                      <button
                        onClick={() => handleEdit(d)}
                        className="p-2 rounded-md hover:bg-[#f9f6ef] text-blue-500"
                      >
                        <Pencil size={16} />
                      </button>
                      <button
                        onClick={() => handleDelete(d)}
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
        {selectedDapur && (
          <div className="p-5 space-y-3">
            <h2 className="text-lg font-semibold text-[#3b3b3b]">Detail Dapur</h2>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <p><strong>Kode:</strong> {selectedDapur.kode_dapur}</p>
              <p><strong>Nama Dapur:</strong> {selectedDapur.nama_dapur}</p>
              <p><strong>Lokasi:</strong> {selectedDapur.lokasi}</p>
              <p><strong>Kapasitas:</strong> {selectedDapur.kapasitas}</p>
              <p><strong>Penanggung Jawab:</strong> {selectedDapur.penanggung_jawab}</p>
              <p><strong>Status:</strong> {selectedDapur.status_aktif ? "Aktif" : "Nonaktif"}</p>
              <p><strong>Tanggal Input:</strong> {selectedDapur.created_at}</p>
            </div>
          </div>
        )}
      </Modal>

      {/* Modal Edit */}
      <Modal isOpen={modalEdit} onClose={() => setModalEdit(false)}>
        {selectedDapur && (
          <div className="p-5 space-y-3">
            <h2 className="text-lg font-semibold text-[#3b3b3b]">Edit Data Dapur</h2>
            <form className="space-y-3">
              <div>
                <label className="text-sm font-medium">Nama Dapur</label>
                <input
                  type="text"
                  defaultValue={selectedDapur.nama_dapur}
                  className="w-full border border-[#e7e1d8] rounded-lg px-3 py-2 mt-1 text-sm"
                />
              </div>
              <div>
                <label className="text-sm font-medium">Lokasi</label>
                <input
                  type="text"
                  defaultValue={selectedDapur.lokasi}
                  className="w-full border border-[#e7e1d8] rounded-lg px-3 py-2 mt-1 text-sm"
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-sm font-medium">Kapasitas</label>
                  <input
                    type="number"
                    defaultValue={selectedDapur.kapasitas}
                    className="w-full border border-[#e7e1d8] rounded-lg px-3 py-2 mt-1 text-sm"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">Status</label>
                  <select
                    defaultValue={selectedDapur.status_aktif ? "Aktif" : "Nonaktif"}
                    className="w-full border border-[#e7e1d8] rounded-lg px-3 py-2 mt-1 text-sm"
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
                  defaultValue={selectedDapur.penanggung_jawab}
                  className="w-full border border-[#e7e1d8] rounded-lg px-3 py-2 mt-1 text-sm"
                />
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
        {selectedDapur && (
          <div className="p-6 text-center space-y-3">
            <Trash2 size={40} className="mx-auto text-red-500" />
            <h3 className="text-lg font-semibold text-[#3b3b3b]">Hapus Dapur?</h3>
            <p className="text-sm text-[#7a7368]">
              Data dapur <strong>{selectedDapur.nama_dapur}</strong> akan dihapus dari sistem.
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
          <h2 className="text-lg font-semibold text-[#3b3b3b]">Tambah Dapur Baru</h2>
          <form className="space-y-3">
            <div>
              <label className="text-sm font-medium">Nama Dapur</label>
              <input
                type="text"
                placeholder="Masukkan nama dapur"
                className="w-full border border-[#e7e1d8] rounded-lg px-3 py-2 mt-1 text-sm"
              />
            </div>
            <div>
              <label className="text-sm font-medium">Lokasi</label>
              <input
                type="text"
                placeholder="Masukkan lokasi dapur"
                className="w-full border border-[#e7e1d8] rounded-lg px-3 py-2 mt-1 text-sm"
              />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-sm font-medium">Kapasitas</label>
                <input
                  type="number"
                  placeholder="Masukkan kapasitas dapur"
                  className="w-full border border-[#e7e1d8] rounded-lg px-3 py-2 mt-1 text-sm"
                />
              </div>
              <div>
                <label className="text-sm font-medium">Status</label>
                <select className="w-full border border-[#e7e1d8] rounded-lg px-3 py-2 mt-1 text-sm">
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
                className="w-full border border-[#e7e1d8] rounded-lg px-3 py-2 mt-1 text-sm"
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
