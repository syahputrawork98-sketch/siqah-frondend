import { useEffect, useState } from "react";
import { Plus, Trash2 } from "lucide-react";
import {
  Card,
  CardContent,
  CrudRowActions,
  EmptyState,
  ErrorState,
  LoadingState,
  Modal,
} from "@/shared/ui";
import { useAsyncData, useCrudModalState } from "@/shared/hooks";
import { fetchAdminPackages } from "@/features/admin/api/adminApi";
import { DEFAULT_PACKAGE_LIST } from "@/features/admin/model/adminDataMappers";

export default function DataPaket() {
  const {
    data: fetchedPackages,
    error,
    isLoading,
    reload,
  } = useAsyncData(fetchAdminPackages, {
    initialData: DEFAULT_PACKAGE_LIST,
  });
  const [dataPaket, setDataPaket] = useState(DEFAULT_PACKAGE_LIST);
  const {
    selectedItem: selectedPaket,
    modalView,
    modalEdit,
    modalDelete,
    modalTambah,
    setModalView,
    setModalEdit,
    setModalDelete,
    setModalTambah,
    openView: handleView,
    openEdit: handleEdit,
    openDelete: handleDelete,
  } = useCrudModalState();

  useEffect(() => {
    setDataPaket(fetchedPackages);
  }, [fetchedPackages]);

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-semibold text-[#3b3b3b]">Data Paket</h1>
          <p className="text-sm text-[#7a7368]">
            Daftar paket aqiqah yang tersedia di sistem Siqah.
          </p>
        </div>
        <button
          onClick={() => setModalTambah(true)}
          className="siqah-btn-primary shadow-sm"
        >
          <Plus size={16} />
          Tambah Paket
        </button>
      </div>

      {isLoading ? (
        <LoadingState message="Memuat data paket..." />
      ) : error ? (
        <ErrorState
          message={error?.message || "Gagal memuat data paket."}
          onRetry={reload}
        />
      ) : dataPaket.length === 0 ? (
        <EmptyState message="Belum ada data paket." />
      ) : (
        <Card className="siqah-table-card overflow-hidden">
          <CardContent className="p-0">
            <table className="w-full text-sm text-left border-collapse">
              <thead className="siqah-table-head">
                <tr>
                  <th className="px-4 py-3">Kode Paket</th>
                  <th className="px-4 py-3">Nama Paket</th>
                  <th className="px-4 py-3">Deskripsi</th>
                  <th className="px-4 py-3 text-center">Harga</th>
                  <th className="px-4 py-3 text-center">Status</th>
                  <th className="px-4 py-3 text-center">Aksi</th>
                </tr>
              </thead>
              <tbody>
                {dataPaket.map((p) => (
                  <tr key={p.id_paket} className="siqah-table-row">
                    <td className="px-4 py-3">{p.kode_paket}</td>
                    <td className="px-4 py-3">{p.nama_paket}</td>
                    <td className="px-4 py-3">{p.deskripsi}</td>
                    <td className="px-4 py-3 text-center">
                      Rp {p.harga.toLocaleString("id-ID")}
                    </td>
                    <td className="px-4 py-3 text-center">
                      <span
                        className={`siqah-status-badge ${
                          p.status_aktif ? "siqah-status-success" : "siqah-status-danger"
                        }`}
                      >
                        {p.status_aktif ? "Aktif" : "Nonaktif"}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-center">
                      <CrudRowActions
                        item={p}
                        onView={handleView}
                        onEdit={handleEdit}
                        onDelete={handleDelete}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </CardContent>
        </Card>
      )}

      <Modal isOpen={modalView} onClose={() => setModalView(false)}>
        {selectedPaket && (
          <div className="p-5 space-y-3">
            <h2 className="text-lg font-semibold text-[#3b3b3b]">Detail Paket</h2>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <p><strong>Kode:</strong> {selectedPaket.kode_paket}</p>
              <p><strong>Nama Paket:</strong> {selectedPaket.nama_paket}</p>
              <p className="col-span-2"><strong>Deskripsi:</strong> {selectedPaket.deskripsi}</p>
              <p><strong>Harga:</strong> Rp {selectedPaket.harga.toLocaleString("id-ID")}</p>
              <p><strong>Status:</strong> {selectedPaket.status_aktif ? "Aktif" : "Nonaktif"}</p>
              <p><strong>Tanggal Input:</strong> {selectedPaket.created_at}</p>
            </div>
          </div>
        )}
      </Modal>

      <Modal isOpen={modalEdit} onClose={() => setModalEdit(false)}>
        {selectedPaket && (
          <div className="p-5 space-y-3">
            <h2 className="text-lg font-semibold text-[#3b3b3b]">Edit Data Paket</h2>
            <form className="space-y-3">
              <div>
                <label className="text-sm font-medium">Nama Paket</label>
                <input type="text" defaultValue={selectedPaket.nama_paket} className="siqah-field" />
              </div>
              <div>
                <label className="text-sm font-medium">Deskripsi</label>
                <textarea defaultValue={selectedPaket.deskripsi} className="siqah-field" rows="3" />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-sm font-medium">Harga</label>
                  <input type="number" defaultValue={selectedPaket.harga} className="siqah-field" />
                </div>
                <div>
                  <label className="text-sm font-medium">Status</label>
                  <select defaultValue={selectedPaket.status_aktif ? "Aktif" : "Nonaktif"} className="siqah-field">
                    <option value="Aktif">Aktif</option>
                    <option value="Nonaktif">Nonaktif</option>
                  </select>
                </div>
              </div>
              <div className="flex justify-end pt-3">
                <button type="button" onClick={() => setModalEdit(false)} className="siqah-btn-primary">
                  Simpan Perubahan
                </button>
              </div>
            </form>
          </div>
        )}
      </Modal>

      <Modal isOpen={modalDelete} onClose={() => setModalDelete(false)}>
        {selectedPaket && (
          <div className="p-6 text-center space-y-3">
            <Trash2 size={40} className="mx-auto text-red-500" />
            <h3 className="text-lg font-semibold text-[#3b3b3b]">Hapus Paket?</h3>
            <p className="text-sm text-[#7a7368]">
              Data paket <strong>{selectedPaket.nama_paket}</strong> akan dihapus dari sistem.
            </p>
            <div className="flex justify-center gap-3 pt-2">
              <button onClick={() => setModalDelete(false)} className="siqah-btn-secondary">Batal</button>
              <button onClick={() => setModalDelete(false)} className="siqah-btn-danger">Hapus</button>
            </div>
          </div>
        )}
      </Modal>

      <Modal isOpen={modalTambah} onClose={() => setModalTambah(false)}>
        <div className="p-5 space-y-3">
          <h2 className="text-lg font-semibold text-[#3b3b3b]">Tambah Paket Baru</h2>
          <form className="space-y-3">
            <div>
              <label className="text-sm font-medium">Nama Paket</label>
              <input type="text" placeholder="Masukkan nama paket" className="siqah-field" />
            </div>
            <div>
              <label className="text-sm font-medium">Deskripsi</label>
              <textarea placeholder="Masukkan deskripsi paket" rows="3" className="siqah-field" />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-sm font-medium">Harga</label>
                <input type="number" placeholder="Masukkan harga paket" className="siqah-field" />
              </div>
              <div>
                <label className="text-sm font-medium">Status</label>
                <select className="siqah-field">
                  <option value="Aktif">Aktif</option>
                  <option value="Nonaktif">Nonaktif</option>
                </select>
              </div>
            </div>
            <div className="flex justify-end pt-3">
              <button type="button" onClick={() => setModalTambah(false)} className="siqah-btn-primary">Simpan</button>
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
}
