import { useState, useEffect } from "react";
import { Eye, Pencil, Trash2 } from "lucide-react";
import { Card, CardContent, Modal, Tabs, TabsList, TabsTrigger, TabsContent } from "@/shared/ui";
import { formatCurrencyIdr } from "@/shared/lib";

export default function DataInvoice() {
  const [dataInvoice, setDataInvoice] = useState([]);
  const [selectedInvoice, setSelectedInvoice] = useState(null);
  const [modalView, setModalView] = useState(false);
  const [modalEdit, setModalEdit] = useState(false);
  const [modalDelete, setModalDelete] = useState(false);
  const [tab, setTab] = useState("BELUM_DIBAYAR");

  useEffect(() => {
    // Dummy data sesuai tb_invoice
    setDataInvoice([
      {
        id_invoice: 1,
        id_pesanan: 101,
        kode_invoice: "INV-20251101-001",
        tanggal_invoice: "2025-11-01",
        total_biaya: 3500000,
        status_invoice: "BELUM_DIBAYAR",
        bukti_pembayaran: null,
        catatan_admin: "Menunggu pembayaran dari konsumen.",
      },
      {
        id_invoice: 2,
        id_pesanan: 102,
        kode_invoice: "INV-20251101-002",
        tanggal_invoice: "2025-11-01",
        total_biaya: 4200000,
        status_invoice: "MENUNGGU_VALIDASI",
        bukti_pembayaran: "bukti_102.jpg",
        catatan_admin: "Menunggu validasi admin.",
      },
      {
        id_invoice: 3,
        id_pesanan: 103,
        kode_invoice: "INV-20251102-003",
        tanggal_invoice: "2025-11-02",
        total_biaya: 5000000,
        status_invoice: "LUNAS",
        bukti_pembayaran: "bukti_103.jpg",
        catatan_admin: "Pembayaran sudah diterima.",
      },
    ]);
  }, []);

  const handleView = (i) => {
    setSelectedInvoice(i);
    setModalView(true);
  };

  const handleEdit = (i) => {
    setSelectedInvoice(i);
    setModalEdit(true);
  };

  const handleDelete = (i) => {
    setSelectedInvoice(i);
    setModalDelete(true);
  };

  const filteredData = dataInvoice.filter((i) => i.status_invoice === tab);

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-semibold text-[#3b3b3b]">Data Invoice</h1>
        <p className="text-sm text-[#7a7368]">
          Daftar seluruh invoice pesanan aqiqah dari konsumen.
        </p>
      </div>

      {/* Tabs Filter */}
      <Tabs value={tab} onValueChange={setTab}>
        <TabsList className="mb-2 border-b border-[#eee6da] pb-2">
          <TabsTrigger
            value="BELUM_DIBAYAR"
            active={tab === "BELUM_DIBAYAR"}
            onClick={setTab}
          >
            Belum Dibayar
          </TabsTrigger>
          <TabsTrigger
            value="MENUNGGU_VALIDASI"
            active={tab === "MENUNGGU_VALIDASI"}
            onClick={setTab}
          >
            Menunggu Validasi
          </TabsTrigger>
          <TabsTrigger
            value="LUNAS"
            active={tab === "LUNAS"}
            onClick={setTab}
          >
            Lunas
          </TabsTrigger>
        </TabsList>

        {/* Table Content */}
        <TabsContent value={tab}>
          <Card className="border border-[#eee6da] shadow-sm rounded-2xl overflow-hidden">
            <CardContent className="p-0">
              <table className="w-full text-sm text-left border-collapse">
                <thead className="bg-[#fdfaf6] border-b border-[#eee6da]">
                  <tr>
                    <th className="px-4 py-3">Kode Invoice</th>
                    <th className="px-4 py-3">ID Pesanan</th>
                    <th className="px-4 py-3">Tanggal</th>
                    <th className="px-4 py-3 text-center">Total Biaya</th>
                    <th className="px-4 py-3 text-center">Status</th>
                    <th className="px-4 py-3 text-center">Aksi</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredData.length > 0 ? (
                    filteredData.map((i) => (
                      <tr
                        key={i.id_invoice}
                        className="border-b border-[#f3eee6] hover:bg-[#f9f6ef]/60 transition"
                      >
                        <td className="px-4 py-3 font-medium text-[#3b3b3b]">
                          {i.kode_invoice}
                        </td>
                        <td className="px-4 py-3">{i.id_pesanan}</td>
                        <td className="px-4 py-3">{i.tanggal_invoice}</td>
                        <td className="px-4 py-3 text-center">
                          {formatCurrencyIdr(i.total_biaya)}
                        </td>
                        <td className="px-4 py-3 text-center">
                          <span
                            className={`px-3 py-1 rounded-full text-xs font-medium ${
                              i.status_invoice === "LUNAS"
                                ? "bg-green-100 text-green-700"
                                : i.status_invoice === "MENUNGGU_VALIDASI"
                                ? "bg-yellow-100 text-yellow-700"
                                : "bg-red-100 text-red-700"
                            }`}
                          >
                            {i.status_invoice}
                          </span>
                        </td>
                        <td className="px-4 py-3 text-center">
                          <div className="flex justify-center gap-2">
                            <button
                              onClick={() => handleView(i)}
                              className="p-2 rounded-md hover:bg-[#f9f6ef] text-[#e2b97f]"
                            >
                              <Eye size={16} />
                            </button>
                            <button
                              onClick={() => handleEdit(i)}
                              className="p-2 rounded-md hover:bg-[#f9f6ef] text-blue-500"
                            >
                              <Pencil size={16} />
                            </button>
                            <button
                              onClick={() => handleDelete(i)}
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
                      <td colSpan="6" className="text-center py-4 text-[#7a7368]">
                        Tidak ada data invoice dengan status {tab}.
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
        {selectedInvoice && (
          <div className="p-5 space-y-3">
            <h2 className="text-lg font-semibold text-[#3b3b3b]">Detail Invoice</h2>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <p><strong>Kode Invoice:</strong> {selectedInvoice.kode_invoice}</p>
              <p><strong>ID Pesanan:</strong> {selectedInvoice.id_pesanan}</p>
              <p><strong>Tanggal:</strong> {selectedInvoice.tanggal_invoice}</p>
              <p><strong>Status:</strong> {selectedInvoice.status_invoice}</p>
              <p><strong>Total Biaya:</strong> {formatCurrencyIdr(selectedInvoice.total_biaya)}</p>
              <p className="col-span-2"><strong>Catatan Admin:</strong> {selectedInvoice.catatan_admin}</p>
            </div>
            {selectedInvoice.bukti_pembayaran && (
              <div className="mt-4">
                <p className="text-sm font-medium">Bukti Pembayaran:</p>
                <img
                  src={`/uploads/${selectedInvoice.bukti_pembayaran}`}
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
        {selectedInvoice && (
          <div className="p-5 space-y-3">
            <h2 className="text-lg font-semibold text-[#3b3b3b]">Edit Status Invoice</h2>
            <form className="space-y-3">
              <div>
                <label className="text-sm font-medium">Status Invoice</label>
                <select
                  defaultValue={selectedInvoice.status_invoice}
                  className="w-full border border-[#e7e1d8] rounded-lg px-3 py-2 mt-1 text-sm"
                >
                  <option value="BELUM_DIBAYAR">BELUM_DIBAYAR</option>
                  <option value="MENUNGGU_VALIDASI">MENUNGGU_VALIDASI</option>
                  <option value="LUNAS">LUNAS</option>
                </select>
              </div>
              <div>
                <label className="text-sm font-medium">Catatan Admin</label>
                <textarea
                  defaultValue={selectedInvoice.catatan_admin}
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
        {selectedInvoice && (
          <div className="p-6 text-center space-y-3">
            <Trash2 size={40} className="mx-auto text-red-500" />
            <h3 className="text-lg font-semibold text-[#3b3b3b]">
              Hapus Data Invoice?
            </h3>
            <p className="text-sm text-[#7a7368]">
              Invoice <strong>{selectedInvoice.kode_invoice}</strong> akan dihapus dari sistem.
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




