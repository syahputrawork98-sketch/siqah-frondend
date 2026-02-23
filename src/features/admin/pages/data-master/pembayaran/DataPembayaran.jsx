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
import { fetchAdminPaymentRecords } from "@/features/admin/api/adminApi";
import { DEFAULT_PAYMENT_RECORD_LIST } from "@/features/admin/model/adminDataMappers";

export default function DataPembayaran() {
  const [tab, setTab] = useState("MENUNGGU_VALIDASI");
  const { data, error, isLoading, reload } = useAsyncData(fetchAdminPaymentRecords, {
    initialData: DEFAULT_PAYMENT_RECORD_LIST,
  });
  const {
    selectedItem: selectedPembayaran,
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

  const filteredData = useMemo(
    () => data.filter((p) => p.status_pembayaran === tab),
    [data, tab]
  );

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-[#3b3b3b]">Data Pembayaran</h1>
        <p className="text-sm text-[#7a7368]">Daftar seluruh pembayaran dari konsumen berdasarkan invoice.</p>
      </div>

      <Tabs value={tab} onValueChange={setTab}>
        <TabsList className="mb-2 border-b border-[#eee6da] pb-2">
          <TabsTrigger value="MENUNGGU_VALIDASI" active={tab === "MENUNGGU_VALIDASI"} onClick={setTab}>Menunggu Validasi</TabsTrigger>
          <TabsTrigger value="VALID" active={tab === "VALID"} onClick={setTab}>Valid</TabsTrigger>
          <TabsTrigger value="DITOLAK" active={tab === "DITOLAK"} onClick={setTab}>Ditolak</TabsTrigger>
        </TabsList>

        <TabsContent value={tab}>
          {isLoading ? (
            <LoadingState message="Memuat data pembayaran..." />
          ) : error ? (
            <ErrorState message={error?.message || "Gagal memuat data pembayaran."} onRetry={reload} />
          ) : data.length === 0 ? (
            <EmptyState message="Belum ada data pembayaran." />
          ) : (
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
                        <tr key={p.id_pembayaran} className="siqah-table-row">
                          <td className="px-4 py-3">{p.id_pembayaran}</td>
                          <td className="px-4 py-3">{p.id_invoice}</td>
                          <td className="px-4 py-3">{p.tanggal_pembayaran}</td>
                          <td className="px-4 py-3 text-center">{formatCurrencyIdr(p.jumlah_bayar)}</td>
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
                            <CrudRowActions item={p} onView={handleView} onEdit={handleEdit} onDelete={handleDelete} />
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="7" className="text-center py-4 text-[#7a7368]">Tidak ada data pembayaran dengan status {tab}.</td>
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
                <img src={`/uploads/${selectedPembayaran.bukti_pembayaran}`} alt="Bukti Pembayaran" className="mt-2 rounded-lg border border-[#eee6da] w-full max-h-64 object-cover" />
              </div>
            )}
          </div>
        )}
      </Modal>

      <Modal isOpen={modalEdit} onClose={() => setModalEdit(false)}>
        {selectedPembayaran && (
          <div className="p-5 space-y-3">
            <h2 className="text-lg font-semibold text-[#3b3b3b]">Edit Status Pembayaran</h2>
            <form className="space-y-3">
              <div>
                <label className="text-sm font-medium">Status Pembayaran</label>
                <select defaultValue={selectedPembayaran.status_pembayaran} className="siqah-field">
                  <option value="MENUNGGU_VALIDASI">MENUNGGU_VALIDASI</option>
                  <option value="VALID">VALID</option>
                  <option value="DITOLAK">DITOLAK</option>
                </select>
              </div>
              <div>
                <label className="text-sm font-medium">Catatan Admin</label>
                <textarea defaultValue={selectedPembayaran.catatan_admin} className="siqah-field" />
              </div>
              <div className="flex justify-end pt-3">
                <button type="button" onClick={() => setModalEdit(false)} className="siqah-btn-primary">Simpan Perubahan</button>
              </div>
            </form>
          </div>
        )}
      </Modal>

      <Modal isOpen={modalDelete} onClose={() => setModalDelete(false)}>
        {selectedPembayaran && (
          <div className="p-6 text-center space-y-3">
            <Trash2 size={40} className="mx-auto text-red-500" />
            <h3 className="text-lg font-semibold text-[#3b3b3b]">Hapus Data Pembayaran?</h3>
            <p className="text-sm text-[#7a7368]">Pembayaran ID <strong>{selectedPembayaran.id_pembayaran}</strong> akan dihapus dari sistem.</p>
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
