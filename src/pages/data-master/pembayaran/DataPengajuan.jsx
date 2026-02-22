// client/src/pages/data-master/pembayaran/DataPengajuan.jsx
import { useState, useEffect } from "react";
import { Eye, Pencil, Trash2 } from "lucide-react";
import { Card, CardContent } from "../../../components/ui/Card";
import Modal from "../../../components/ui/Modal";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../../../components/ui/Tabs";

export default function DataPengajuan() {
  const [dataPengajuan, setDataPengajuan] = useState([]);
  const [selectedPengajuan, setSelectedPengajuan] = useState(null);
  const [modalView, setModalView] = useState(false);
  const [modalEdit, setModalEdit] = useState(false);
  const [modalDelete, setModalDelete] = useState(false);
  const [tab, setTab] = useState("MENUNGGU");

  useEffect(() => {
    // Dummy data sesuai tb_validasi_pesanan
    setDataPengajuan([
      {
        id_validasi: 1,
        id_pesanan: 101,
        tanggal_validasi: "2025-10-30",
        status_validasi: "MENUNGGU",
        catatan_admin: "Menunggu konfirmasi admin",
        status_invoice: "BELUM_DIBUAT",
        status_tracking: "BELUM_MULAI",
      },
      {
        id_validasi: 2,
        id_pesanan: 102,
        tanggal_validasi: "2025-10-31",
        status_validasi: "DISETUJUI",
        catatan_admin: "Pesanan disetujui dan diteruskan ke proses invoice.",
        status_invoice: "DIBUAT",
        status_tracking: "PROSES",
      },
      {
        id_validasi: 3,
        id_pesanan: 103,
        tanggal_validasi: "2025-11-01",
        status_validasi: "DITOLAK",
        catatan_admin: "Data hewan tidak valid.",
        status_invoice: "BELUM_DIBUAT",
        status_tracking: "BATAL",
      },
      {
        id_validasi: 4,
        id_pesanan: 104,
        tanggal_validasi: "2025-11-02",
        status_validasi: "MENUNGGU",
        catatan_admin: "Menunggu konfirmasi ulang admin.",
        status_invoice: "BELUM_DIBUAT",
        status_tracking: "BELUM_MULAI",
      },
    ]);
  }, []);

  const handleView = (v) => {
    setSelectedPengajuan(v);
    setModalView(true);
  };

  const handleEdit = (v) => {
    setSelectedPengajuan(v);
    setModalEdit(true);
  };

  const handleDelete = (v) => {
    setSelectedPengajuan(v);
    setModalDelete(true);
  };

  // Filter berdasarkan tab aktif
  const filteredData = dataPengajuan.filter((v) => v.status_validasi === tab);

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-semibold text-[#3b3b3b]">Data Pengajuan Pesanan</h1>
        <p className="text-sm text-[#7a7368]">
          Daftar seluruh pengajuan pesanan dari konsumen yang menunggu atau telah divalidasi.
        </p>
      </div>

      {/* Tabs */}
      <Tabs value={tab} onValueChange={setTab}>
        <TabsList className="mb-2 border-b border-[#eee6da] pb-2">
          <TabsTrigger
            value="MENUNGGU"
            active={tab === "MENUNGGU"}
            onClick={setTab}
          >
            Menunggu
          </TabsTrigger>
          <TabsTrigger
            value="DISETUJUI"
            active={tab === "DISETUJUI"}
            onClick={setTab}
          >
            Disetujui
          </TabsTrigger>
          <TabsTrigger
            value="DITOLAK"
            active={tab === "DITOLAK"}
            onClick={setTab}
          >
            Ditolak
          </TabsTrigger>
        </TabsList>

        {/* Konten Tab */}
        <TabsContent value={tab}>
          <Card className="border border-[#eee6da] shadow-sm rounded-2xl overflow-hidden">
            <CardContent className="p-0">
              <table className="w-full text-sm text-left border-collapse">
                <thead className="bg-[#fdfaf6] border-b border-[#eee6da]">
                  <tr>
                    <th className="px-4 py-3">ID Validasi</th>
                    <th className="px-4 py-3">ID Pesanan</th>
                    <th className="px-4 py-3">Tanggal Validasi</th>
                    <th className="px-4 py-3 text-center">Status Validasi</th>
                    <th className="px-4 py-3 text-center">Status Invoice</th>
                    <th className="px-4 py-3 text-center">Tracking</th>
                    <th className="px-4 py-3 text-center">Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredData.length > 0 ? (
                    filteredData.map((v) => (
                      <tr
                        key={v.id_validasi}
                        className="border-b border-[#f3eee6] hover:bg-[#f9f6ef]/60 transition"
                      >
                        <td className="px-4 py-3">{v.id_validasi}</td>
                        <td className="px-4 py-3">{v.id_pesanan}</td>
                        <td className="px-4 py-3">{v.tanggal_validasi}</td>
                        <td className="px-4 py-3 text-center">
                          <span
                            className={`px-3 py-1 rounded-full text-xs font-medium ${
                              v.status_validasi === "DISETUJUI"
                                ? "bg-green-100 text-green-700"
                                : v.status_validasi === "MENUNGGU"
                                ? "bg-yellow-100 text-yellow-700"
                                : "bg-red-100 text-red-700"
                            }`}
                          >
                            {v.status_validasi}
                          </span>
                        </td>
                        <td className="px-4 py-3 text-center">
                          <span className="text-[#7a7368]">{v.status_invoice}</span>
                        </td>
                        <td className="px-4 py-3 text-center">
                          <span className="text-[#7a7368]">{v.status_tracking}</span>
                        </td>
                        <td className="px-4 py-3 text-center">
                          <div className="flex justify-center gap-2">
                            <button
                              onClick={() => handleView(v)}
                              className="p-2 rounded-md hover:bg-[#f9f6ef] text-[#e2b97f]"
                            >
                              <Eye size={16} />
                            </button>
                            <button
                              onClick={() => handleEdit(v)}
                              className="p-2 rounded-md hover:bg-[#f9f6ef] text-blue-500"
                            >
                              <Pencil size={16} />
                            </button>
                            <button
                              onClick={() => handleDelete(v)}
                              className="p-2 rounded-md hover:bg-[#f9f6ef] text-red-500"
                            >
                              <Trash2 size={16} />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="7" className="text-center py-4 text-[#7a7368]">
                        Tidak ada data pengajuan dengan status {tab}.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Modal View */}
      <Modal isOpen={modalView} onClose={() => setModalView(false)}>
        {selectedPengajuan && (
          <div className="p-5 space-y-3">
            <h2 className="text-lg font-semibold text-[#3b3b3b]">Detail Pengajuan</h2>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <p><strong>ID Validasi:</strong> {selectedPengajuan.id_validasi}</p>
              <p><strong>ID Pesanan:</strong> {selectedPengajuan.id_pesanan}</p>
              <p><strong>Status Validasi:</strong> {selectedPengajuan.status_validasi}</p>
              <p><strong>Status Invoice:</strong> {selectedPengajuan.status_invoice}</p>
              <p><strong>Status Tracking:</strong> {selectedPengajuan.status_tracking}</p>
              <p><strong>Tanggal Validasi:</strong> {selectedPengajuan.tanggal_validasi}</p>
              <p className="col-span-2"><strong>Catatan Admin:</strong> {selectedPengajuan.catatan_admin}</p>
            </div>
          </div>
        )}
      </Modal>

      {/* Modal Edit */}
      <Modal isOpen={modalEdit} onClose={() => setModalEdit(false)}>
        {selectedPengajuan && (
          <div className="p-5 space-y-3">
            <h2 className="text-lg font-semibold text-[#3b3b3b]">Edit Status Validasi</h2>
            <form className="space-y-3">
              <div>
                <label className="text-sm font-medium">Status Validasi</label>
                <select
                  defaultValue={selectedPengajuan.status_validasi}
                  className="w-full border border-[#e7e1d8] rounded-lg px-3 py-2 mt-1 text-sm"
                >
                  <option value="MENUNGGU">MENUNGGU</option>
                  <option value="DISETUJUI">DISETUJUI</option>
                  <option value="DITOLAK">DITOLAK</option>
                </select>
              </div>
              <div>
                <label className="text-sm font-medium">Catatan Admin</label>
                <textarea
                  defaultValue={selectedPengajuan.catatan_admin}
                  className="w-full border border-[#e7e1d8] rounded-lg px-3 py-2 mt-1 text-sm"
                ></textarea>
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
        {selectedPengajuan && (
          <div className="p-6 text-center space-y-3">
            <Trash2 size={40} className="mx-auto text-red-500" />
            <h3 className="text-lg font-semibold text-[#3b3b3b]">
              Hapus Data Pengajuan?
            </h3>
            <p className="text-sm text-[#7a7368]">
              Data pengajuan dengan ID <strong>{selectedPengajuan.id_validasi}</strong> akan dihapus dari sistem.
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
    </div>
  );
}
