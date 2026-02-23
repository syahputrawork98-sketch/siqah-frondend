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
import { useAsyncData, useCrudModalState } from "@/shared/hooks";
import { fetchAdminValidationSubmissions } from "@/features/admin/api/adminApi";
import { DEFAULT_VALIDATION_SUBMISSION_LIST } from "@/features/admin/model/adminDataMappers";

export default function DataPengajuan() {
  const [tab, setTab] = useState("MENUNGGU");
  const { data, error, isLoading, reload } = useAsyncData(fetchAdminValidationSubmissions, {
    initialData: DEFAULT_VALIDATION_SUBMISSION_LIST,
  });
  const {
    selectedItem: selectedPengajuan,
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
    () => data.filter((v) => v.status_validasi === tab),
    [data, tab]
  );

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-[#3b3b3b]">Data Pengajuan Pesanan</h1>
        <p className="text-sm text-[#7a7368]">
          Daftar seluruh pengajuan pesanan dari konsumen yang menunggu atau telah divalidasi.
        </p>
      </div>

      <Tabs value={tab} onValueChange={setTab}>
        <TabsList className="mb-2 border-b border-[#eee6da] pb-2">
          <TabsTrigger value="MENUNGGU" active={tab === "MENUNGGU"} onClick={setTab}>Menunggu</TabsTrigger>
          <TabsTrigger value="DISETUJUI" active={tab === "DISETUJUI"} onClick={setTab}>Disetujui</TabsTrigger>
          <TabsTrigger value="DITOLAK" active={tab === "DITOLAK"} onClick={setTab}>Ditolak</TabsTrigger>
        </TabsList>

        <TabsContent value={tab}>
          {isLoading ? (
            <LoadingState message="Memuat data pengajuan..." />
          ) : error ? (
            <ErrorState message={error?.message || "Gagal memuat data pengajuan."} onRetry={reload} />
          ) : data.length === 0 ? (
            <EmptyState message="Belum ada data pengajuan." />
          ) : (
            <Card className="siqah-table-card overflow-hidden">
              <CardContent className="p-0">
                <table className="w-full text-sm text-left border-collapse">
                  <thead className="siqah-table-head">
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
                        <tr key={v.id_validasi} className="siqah-table-row">
                          <td className="px-4 py-3">{v.id_validasi}</td>
                          <td className="px-4 py-3">{v.id_pesanan}</td>
                          <td className="px-4 py-3">{v.tanggal_validasi}</td>
                          <td className="px-4 py-3 text-center">
                            <span
                              className={`siqah-status-badge ${
                                v.status_validasi === "DISETUJUI"
                                  ? "siqah-status-success"
                                  : v.status_validasi === "MENUNGGU"
                                    ? "siqah-status-warning"
                                    : "siqah-status-danger"
                              }`}
                            >
                              {v.status_validasi}
                            </span>
                          </td>
                          <td className="px-4 py-3 text-center"><span className="text-[#7a7368]">{v.status_invoice}</span></td>
                          <td className="px-4 py-3 text-center"><span className="text-[#7a7368]">{v.status_tracking}</span></td>
                          <td className="px-4 py-3 text-center">
                            <CrudRowActions item={v} onView={handleView} onEdit={handleEdit} onDelete={handleDelete} />
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
          )}
        </TabsContent>
      </Tabs>

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

      <Modal isOpen={modalEdit} onClose={() => setModalEdit(false)}>
        {selectedPengajuan && (
          <div className="p-5 space-y-3">
            <h2 className="text-lg font-semibold text-[#3b3b3b]">Edit Status Validasi</h2>
            <form className="space-y-3">
              <div>
                <label className="text-sm font-medium">Status Validasi</label>
                <select defaultValue={selectedPengajuan.status_validasi} className="siqah-field">
                  <option value="MENUNGGU">MENUNGGU</option>
                  <option value="DISETUJUI">DISETUJUI</option>
                  <option value="DITOLAK">DITOLAK</option>
                </select>
              </div>
              <div>
                <label className="text-sm font-medium">Catatan Admin</label>
                <textarea defaultValue={selectedPengajuan.catatan_admin} className="siqah-field" />
              </div>
              <div className="flex justify-end pt-3">
                <button type="button" onClick={() => setModalEdit(false)} className="siqah-btn-primary">Simpan Perubahan</button>
              </div>
            </form>
          </div>
        )}
      </Modal>

      <Modal isOpen={modalDelete} onClose={() => setModalDelete(false)}>
        {selectedPengajuan && (
          <div className="p-6 text-center space-y-3">
            <Trash2 size={40} className="mx-auto text-red-500" />
            <h3 className="text-lg font-semibold text-[#3b3b3b]">Hapus Data Pengajuan?</h3>
            <p className="text-sm text-[#7a7368]">
              Data pengajuan dengan ID <strong>{selectedPengajuan.id_validasi}</strong> akan dihapus dari sistem.
            </p>
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
