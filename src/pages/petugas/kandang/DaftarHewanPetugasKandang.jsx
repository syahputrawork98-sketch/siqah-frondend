// client/src/pages/petugas/kandang/DaftarHewanPetugasKandang.jsx
import { useState, useEffect } from "react";
import { Eye, Edit3 } from "lucide-react";
import { Card, CardContent } from "../../../components/ui/Card";
import Modal from "../../../components/ui/Modal";

export default function DaftarHewanPetugasKandang() {
  const [dataHewan, setDataHewan] = useState([]);
  const [selectedHewan, setSelectedHewan] = useState(null);
  const [modalView, setModalView] = useState(false);
  const [modalEdit, setModalEdit] = useState(false);

  // Dummy data sesuai petugas (misalnya petugas di "Kandang A")
  useEffect(() => {
    setDataHewan([
      {
        id_hewan: 1,
        kode_hewan: "KDG-A001",
        jenis_hewan: "Kambing Jawa",
        nama_kandang: "Kandang A",
        berat: 36,
        harga: 2500000,
        foto: "/images/hewan/kambing1.jpg",
        status: "Aktif",
        kesehatan: "Sehat",
        created_at: "2025-11-01",
      },
      {
        id_hewan: 2,
        kode_hewan: "KDG-A002",
        jenis_hewan: "Domba Garut",
        nama_kandang: "Kandang A",
        berat: 41,
        harga: 2800000,
        foto: "/images/hewan/domba1.jpg",
        status: "Aktif",
        kesehatan: "Perlu Perawatan",
        created_at: "2025-11-02",
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

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-semibold text-[#3b3b3b]">
          Daftar Hewan di Kandang Anda
        </h1>
        <p className="text-sm text-[#7a7368]">
          Data hewan yang berada di kandang tempat Anda bertugas.
        </p>
      </div>

      {/* Table */}
      <Card className="border border-[#eee6da] shadow-sm rounded-2xl overflow-hidden">
        <CardContent className="p-0">
          <table className="w-full text-sm text-left border-collapse">
            <thead className="bg-[#fdfaf6] border-b border-[#eee6da]">
              <tr>
                <th className="px-4 py-3">Kode Hewan</th>
                <th className="px-4 py-3">Jenis Hewan</th>
                <th className="px-4 py-3">Berat (kg)</th>
                <th className="px-4 py-3 text-center">Status</th>
                <th className="px-4 py-3 text-center">Kesehatan</th>
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
                  <td className="px-4 py-3">{h.berat}</td>
                  <td className="px-4 py-3 text-center">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        h.status === "Aktif"
                          ? "bg-green-100 text-green-700"
                          : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      {h.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-center">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        h.kesehatan === "Sehat"
                          ? "bg-green-100 text-green-700"
                          : "bg-orange-100 text-orange-700"
                      }`}
                    >
                      {h.kesehatan}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-center">{h.created_at}</td>
                  <td className="px-4 py-3 text-center">
                    <div className="flex justify-center gap-2">
                      <button
                        onClick={() => handleView(h)}
                        className="p-2 rounded-md hover:bg-[#f9f6ef] text-[#e2b97f]"
                        title="Lihat Detail"
                      >
                        <Eye size={16} />
                      </button>
                      <button
                        onClick={() => handleEdit(h)}
                        className="p-2 rounded-md hover:bg-[#f9f6ef] text-blue-500"
                        title="Perbarui Data"
                      >
                        <Edit3 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </CardContent>
      </Card>

      {/* Modal View Detail */}
      <Modal isOpen={modalView} onClose={() => setModalView(false)}>
        {selectedHewan && (
          <div className="p-5 space-y-3">
            <h2 className="text-lg font-semibold text-[#3b3b3b]">
              Detail Hewan
            </h2>
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
              <p><strong>Status:</strong> {selectedHewan.status}</p>
              <p><strong>Kesehatan:</strong> {selectedHewan.kesehatan}</p>
              <p><strong>Tanggal Input:</strong> {selectedHewan.created_at}</p>
            </div>
          </div>
        )}
      </Modal>

      {/* Modal Edit Kondisi / Berat */}
      <Modal isOpen={modalEdit} onClose={() => setModalEdit(false)}>
        {selectedHewan && (
          <div className="p-5 space-y-3">
            <h2 className="text-lg font-semibold text-[#3b3b3b]">
              Update Kondisi Hewan
            </h2>
            <form className="space-y-3">
              <div>
                <label className="text-sm font-medium">Berat (kg)</label>
                <input
                  type="number"
                  defaultValue={selectedHewan.berat}
                  className="w-full border border-[#e7e1d8] rounded-lg px-3 py-2 mt-1 text-sm"
                />
              </div>
              <div>
                <label className="text-sm font-medium">Kesehatan</label>
                <select
                  defaultValue={selectedHewan.kesehatan}
                  className="w-full border border-[#e7e1d8] rounded-lg px-3 py-2 mt-1 text-sm"
                >
                  <option value="Sehat">Sehat</option>
                  <option value="Perlu Perawatan">Perlu Perawatan</option>
                  <option value="Sakit">Sakit</option>
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
    </div>
  );
}
