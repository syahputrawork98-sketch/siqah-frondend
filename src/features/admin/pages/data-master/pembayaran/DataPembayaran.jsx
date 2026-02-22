import { useState, useEffect } from "react";
import { Eye, Pencil, Trash2 } from "lucide-react";
import { Card, CardContent, Modal, Tabs, TabsList, TabsTrigger, TabsContent } from "@/shared/ui";
import { formatCurrencyIdr } from "@/shared/lib";

export default function DataPembayaran() {
  const [dataPembayaran, setDataPembayaran] = useState([]);
  const [selectedPembayaran, setSelectedPembayaran] = useState(null);
  const [modalView, setModalView] = useState(false);
  const [modalEdit, setModalEdit] = useState(false);
  const [modalDelete, setModalDelete] = useState(false);
  const [tab, setTab] = useState("MENUNGGU_VALIDASI");

  useEffect(() => {
    // Dummy data sesuai tb_pembayaran
    setDataPembayaran([
      {
        id_pembayaran: 1,
        id_invoice: 101,
        tanggal_pembayaran: "2025-11-01",
        jumlah_bayar: 3500000,
        metode_pembayaran: "TRANSFER",
        bukti_pembayaran: "bukti_transfer_1.jpg",
        status_pembayaran: "MENUNGGU_VALIDASI",
        catatan_admin: "Menunggu validasi admin keuangan.",
      },
      {
        id_pembayaran: 2,
        id_invoice: 102,
        tanggal_pembayaran: "2025-11-02",
        jumlah_bayar: 4200000,
        metode_pembayaran: "TRANSFER",
        bukti_pembayaran: "bukti_transfer_2.jpg",
        status_pembayaran: "VALID",
        catatan_admin: "Pembayaran sudah diverifikasi.",
      },
      {
        id_pembayaran: 3,
        id_invoice: 103,
        tanggal_pembayaran: "2025-11-02",
        jumlah_bayar: 5000000,
        metode_pembayaran: "TUNAI",
        bukti_pembayaran: null,
        status_pembayaran: "DITOLAK",
        catatan_admin: "Nominal tidak sesuai dengan total invoice.",
      },
    ]);
  }, []);

  const handleView = (p) => {
    setSelectedPembayaran(p);
    setModalView(true);
  };

  const handleEdit = (p) => {
    setSelectedPembayaran(p);
    setModalEdit(true);
  };

  const handleDelete = (p) => {
    setSelectedPembayaran(p);
    setModalDelete(true);
  };

  const filteredData = dataPembayaran.filter(
    (p) => p.status_pembayaran === tab
  );

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-semibold text-[#3b3b3b]">Data Pembayaran</h1>
        <p className="text-sm text-[#7a7368]">
          Daftar seluruh pembayaran dari konsumen berdasarkan invoice.
        </p>
      </div>

      {/* Tabs Filter */}
      <Tabs value={tab} onValueChange={setTab}>
        <TabsList className="mb-2 border-b border-[#eee6da] pb-2">
          <TabsTrigger
            value="MENUNGGU_VALIDASI"
            active={tab === "MENUNGGU_VALIDASI"}
            onClick={setTab}
          >
            Menunggu Validasi
          </TabsTrigger>
          <TabsTrigger
            value="VALID"
            active={tab === "VALID"}
            onClick={setTab}
          >
            Valid
          </TabsTrigger>
          <TabsTrigger
            value="DITOLAK"
            active={tab === "DITOLAK"}
            onClick={setTab}
          >
            Ditolak
          </TabsTrigger>
        </TabsList>

        {/* Table */}
        <TabsContent value={tab}>
          <Card className="siqah-table-card overflow-hidden">
            <CardContent className="p-0">
              <table className="w-full text-sm text-left border-collapse">
                <thead className="siqah-table-head">
                  <tr>
                    <th className="px-4 py-3">ID Pembayaran</th>
                    <th className="px-4 py-3">ID Invoice</th>
                    <th className="px-4 py-3">Tanggal</th>
                    <th className="px-4 py-3 text-center">Jumlah</th>
                    <th className="px-4 py-3 text-center">Metode</th>
                    <th className="px-4 py-3 text-center">Status</th>
                    <th className="px-4 py-3 text-center">Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredData.length > 0 ? (
                    filteredData.map((p) => (
                      <tr
                        key={p.id_pembayaran}
                        className="siqah-table-row"
                      >
                        <td className="px-4 py-3">{p.id_pembayaran}</td>
                        <td className="px-4 py-3">{p.id_invoice}</td>
                        <td className="px-4 py-3">{p.tanggal_pembayaran}</td>
                        <td className="px-4 py-3 text-center">
                          {formatCurrencyIdr(p.jumlah_bayar)}
                        </td>
                        <td className="px-4 py-3 text-center">{p.metode_pembayaran}</td>
                        <td className="px-4 py-3 text-center">
                          <span
                            className={`siqah-status-badge ${
                              p.status_pembayaran === "VALID"
                                ? "siqah-status-success"
                                : p.status_pembayaran === "MENUNGGU_VALIDASI"
                                ? "siqah-status-warning"
                                : "siqah-status-danger"
                            }`}
                          >
                            {p.status_pembayaran}
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
                    ))
                  ) : (
                    <tr>
                      <td colSpan="7" className="text-center py-4 text-[#7a7368]">
                        Tidak ada data pembayaran dengan status {tab}.
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
        {selectedPembayaran && (
          <div className="p-5 space-y-3">
            <h2 className="text-lg font-semibold text-[#3b3b3b]">Detail Pembayaran</h2>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <p><strong>ID Pembayaran:</strong> {selectedPembayaran.id_pembayaran}</p>
              <p><strong>ID Invoice:</strong> {selectedPembayaran.id_invoice}</p>
              <p><strong>Tanggal:</strong> {selectedPembayaran.tanggal_pembayaran}</p>
              <p><strong>Metode:</strong> {selectedPembayaran.metode_pembayaran}</p>
              <p><strong>Jumlah Bayar:</strong> {formatCurrencyIdr(selectedPembayaran.jumlah_bayar)}</p>
              <p><strong>Status:</strong> {selectedPembayaran.status_pembayaran}</p>
              <p className="col-span-2"><strong>Catatan Admin:</strong> {selectedPembayaran.catatan_admin}</p>
            </div>
            {selectedPembayaran.bukti_pembayaran && (
              <div className="mt-4">
                <p className="text-sm font-medium">Bukti Pembayaran:</p>
                <img
                  src={`/uploads/${selectedPembayaran.bukti_pembayaran}`}
                  alt="Bukti Pembayaran"
                  className="mt-2 rounded-lg border border-[#eee6da] w-full max-h-64 object-cover"
                />
              </div>
            )}
          </div>
        )}
      </Modal>

      {/* Modal Edit */}
      <Modal isOpen={modalEdit} onClose={() => setModalEdit(false)}>
        {selectedPembayaran && (
          <div className="p-5 space-y-3">
            <h2 className="text-lg font-semibold text-[#3b3b3b]">Edit Status Pembayaran</h2>
            <form className="space-y-3">
              <div>
                <label className="text-sm font-medium">Status Pembayaran</label>
                <select
                  defaultValue={selectedPembayaran.status_pembayaran}
                  className="siqah-field"
                >
                  <option value="MENUNGGU_VALIDASI">MENUNGGU_VALIDASI</option>
                  <option value="VALID">VALID</option>
                  <option value="DITOLAK">DITOLAK</option>
                </select>
              </div>
              <div>
                <label className="text-sm font-medium">Catatan Admin</label>
                <textarea
                  defaultValue={selectedPembayaran.catatan_admin}
                  className="siqah-field"
                ></textarea>
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
        {selectedPembayaran && (
          <div className="p-6 text-center space-y-3">
            <Trash2 size={40} className="mx-auto text-red-500" />
            <h3 className="text-lg font-semibold text-[#3b3b3b]">
              Hapus Data Pembayaran?
            </h3>
            <p className="text-sm text-[#7a7368]">
              Pembayaran ID <strong>{selectedPembayaran.id_pembayaran}</strong> akan dihapus dari sistem.
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
    </div>
  );
}







