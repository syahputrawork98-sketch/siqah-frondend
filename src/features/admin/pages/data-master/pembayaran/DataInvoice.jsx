import { useMemo, useState } from "react";
import { Trash2 } from "lucide-react";
import {
  Card,
  CardContent,
  CrudRowActions,
  EmptyState,
  ErrorState,
  LoadingState,
  Modal,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/shared/ui";
import { formatCurrencyIdr } from "@/shared/lib";
import { useAsyncData, useCrudModalState } from "@/shared/hooks";
import { fetchAdminInvoices } from "@/features/admin/api/adminApi";
import { DEFAULT_INVOICE_LIST } from "@/features/admin/model/adminDataMappers";

export default function DataInvoice() {
  const [tab, setTab] = useState("BELUM_DIBAYAR");
  const { data, error, isLoading, reload } = useAsyncData(fetchAdminInvoices, {
    initialData: DEFAULT_INVOICE_LIST,
  });
  const {
    selectedItem: selectedInvoice,
    modalView,
    modalEdit,
    modalDelete,
    setModalView,
    setModalEdit,
    setModalDelete,
    openView: handleView,
    openEdit: handleEdit,
    openDelete: handleDelete,
  } = useCrudModalState();

  const filteredData = useMemo(() => data.filter((i) => i.status_invoice === tab), [data, tab]);

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-[#3b3b3b]">Data Invoice</h1>
        <p className="text-sm text-[#7a7368]">Daftar seluruh invoice pesanan aqiqah dari konsumen.</p>
      </div>

      <Tabs value={tab} onValueChange={setTab}>
        <TabsList className="mb-2 border-b border-[#eee6da] pb-2">
          <TabsTrigger value="BELUM_DIBAYAR" active={tab === "BELUM_DIBAYAR"} onClick={setTab}>Belum Dibayar</TabsTrigger>
          <TabsTrigger value="MENUNGGU_VALIDASI" active={tab === "MENUNGGU_VALIDASI"} onClick={setTab}>Menunggu Validasi</TabsTrigger>
          <TabsTrigger value="LUNAS" active={tab === "LUNAS"} onClick={setTab}>Lunas</TabsTrigger>
        </TabsList>

        <TabsContent value={tab}>
          {isLoading ? (
            <LoadingState message="Memuat data invoice..." />
          ) : error ? (
            <ErrorState message={error?.message || "Gagal memuat data invoice."} onRetry={reload} />
          ) : data.length === 0 ? (
            <EmptyState message="Belum ada data invoice." />
          ) : (
            <Card className="siqah-table-card overflow-hidden">
              <CardContent className="p-0">
                <table className="w-full text-sm text-left border-collapse">
                  <thead className="siqah-table-head">
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
                        <tr key={i.id_invoice} className="siqah-table-row">
                          <td className="px-4 py-3 font-medium text-[#3b3b3b]">{i.kode_invoice}</td>
                          <td className="px-4 py-3">{i.id_pesanan}</td>
                          <td className="px-4 py-3">{i.tanggal_invoice}</td>
                          <td className="px-4 py-3 text-center">{formatCurrencyIdr(i.total_biaya)}</td>
                          <td className="px-4 py-3 text-center">
                            <span
                              className={`siqah-status-badge ${
                                i.status_invoice === "LUNAS"
                                  ? "siqah-status-success"
                                  : i.status_invoice === "MENUNGGU_VALIDASI"
                                    ? "siqah-status-warning"
                                    : "siqah-status-danger"
                              }`}
                            >
                              {i.status_invoice}
                            </span>
                          </td>
                          <td className="px-4 py-3 text-center">
                            <CrudRowActions item={i} onView={handleView} onEdit={handleEdit} onDelete={handleDelete} />
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="6" className="text-center py-4 text-[#7a7368]">Tidak ada data invoice dengan status {tab}.</td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </CardContent>
            </Card>
          )}
        </TabsContent>
      </Tabs>

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
                <img src={`/uploads/${selectedInvoice.bukti_pembayaran}`} alt="Bukti Pembayaran" className="mt-2 rounded-lg border border-[#eee6da] w-full max-h-64 object-cover" />
              </div>
            )}
          </div>
        )}
      </Modal>

      <Modal isOpen={modalEdit} onClose={() => setModalEdit(false)}>
        {selectedInvoice && (
          <div className="p-5 space-y-3">
            <h2 className="text-lg font-semibold text-[#3b3b3b]">Edit Status Invoice</h2>
            <form className="space-y-3">
              <div>
                <label className="text-sm font-medium">Status Invoice</label>
                <select defaultValue={selectedInvoice.status_invoice} className="siqah-field">
                  <option value="BELUM_DIBAYAR">BELUM_DIBAYAR</option>
                  <option value="MENUNGGU_VALIDASI">MENUNGGU_VALIDASI</option>
                  <option value="LUNAS">LUNAS</option>
                </select>
              </div>
              <div>
                <label className="text-sm font-medium">Catatan Admin</label>
                <textarea defaultValue={selectedInvoice.catatan_admin} className="siqah-field" />
              </div>
              <div className="flex justify-end pt-3">
                <button type="button" onClick={() => setModalEdit(false)} className="siqah-btn-primary">Simpan Perubahan</button>
              </div>
            </form>
          </div>
        )}
      </Modal>

      <Modal isOpen={modalDelete} onClose={() => setModalDelete(false)}>
        {selectedInvoice && (
          <div className="p-6 text-center space-y-3">
            <Trash2 size={40} className="mx-auto text-red-500" />
            <h3 className="text-lg font-semibold text-[#3b3b3b]">Hapus Data Invoice?</h3>
            <p className="text-sm text-[#7a7368]">Invoice <strong>{selectedInvoice.kode_invoice}</strong> akan dihapus dari sistem.</p>
            <div className="flex justify-center gap-3 pt-2">
              <button onClick={() => setModalDelete(false)} className="siqah-btn-secondary">Batal</button>
              <button onClick={() => setModalDelete(false)} className="siqah-btn-danger">Hapus</button>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}
