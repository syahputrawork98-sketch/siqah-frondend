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
import { fetchAdminBarns } from "@/features/admin/api/adminApi";
import { DEFAULT_BARN_LIST } from "@/features/admin/model/adminDataMappers";

export default function DataKandang() {
  const {
    data: fetchedBarns,
    error,
    isLoading,
    reload,
  } = useAsyncData(fetchAdminBarns, {
    initialData: DEFAULT_BARN_LIST,
  });
  const [dataKandang, setDataKandang] = useState(DEFAULT_BARN_LIST);
  const {
    selectedItem: selectedKandang,
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
    setDataKandang(fetchedBarns);
  }, [fetchedBarns]);

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-semibold text-[#3b3b3b]">Data Kandang</h1>
          <p className="text-sm text-[#7a7368]">
            Daftar semua kandang yang terdaftar dan aktif digunakan oleh mitra.
          </p>
        </div>
        <button onClick={() => setModalTambah(true)} className="siqah-btn-primary shadow-sm">
          <Plus size={16} />
          Tambah Kandang
        </button>
      </div>

      {isLoading ? (
        <LoadingState message="Memuat data kandang..." />
      ) : error ? (
        <ErrorState message={error?.message || "Gagal memuat data kandang."} onRetry={reload} />
      ) : dataKandang.length === 0 ? (
        <EmptyState message="Belum ada data kandang." />
      ) : (
        <Card className="siqah-table-card overflow-hidden">
          <CardContent className="p-0">
            <table className="w-full text-sm text-left border-collapse">
              <thead className="siqah-table-head">
                <tr>
                  <th className="px-4 py-3">Kode Kandang</th>
                  <th className="px-4 py-3">Nama Kandang</th>
                  <th className="px-4 py-3">Lokasi</th>
                  <th className="px-4 py-3 text-center">Kapasitas</th>
                  <th className="px-4 py-3 text-center">Jumlah Hewan</th>
                  <th className="px-4 py-3">Penanggung Jawab</th>
                  <th className="px-4 py-3 text-center">Status</th>
                  <th className="px-4 py-3 text-center">Aksi</th>
                </tr>
              </thead>
              <tbody>
                {dataKandang.map((k) => (
                  <tr key={k.id_kandang} className="siqah-table-row">
                    <td className="px-4 py-3">{k.kode_kandang}</td>
                    <td className="px-4 py-3">{k.nama_kandang}</td>
                    <td className="px-4 py-3">{k.lokasi}</td>
                    <td className="px-4 py-3 text-center">{k.kapasitas}</td>
                    <td className="px-4 py-3 text-center">{k.jumlah_hewan}</td>
                    <td className="px-4 py-3">{k.penanggung_jawab}</td>
                    <td className="px-4 py-3 text-center">
                      <span
                        className={`siqah-status-badge ${
                          k.status === "Aktif"
                            ? "siqah-status-success"
                            : k.status === "Penuh"
                              ? "siqah-status-warning"
                              : "siqah-status-danger"
                        }`}
                      >
                        {k.status}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-center">
                      <CrudRowActions item={k} onView={handleView} onEdit={handleEdit} onDelete={handleDelete} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </CardContent>
        </Card>
      )}

      <Modal isOpen={modalView} onClose={() => setModalView(false)}>
        {selectedKandang && (
          <div className="p-5 space-y-3">
            <h2 className="text-lg font-semibold text-[#3b3b3b]">Detail Kandang</h2>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <p><strong>Kode:</strong> {selectedKandang.kode_kandang}</p>
              <p><strong>Nama:</strong> {selectedKandang.nama_kandang}</p>
              <p><strong>Lokasi:</strong> {selectedKandang.lokasi}</p>
              <p><strong>Kapasitas:</strong> {selectedKandang.kapasitas}</p>
              <p><strong>Jumlah Hewan:</strong> {selectedKandang.jumlah_hewan}</p>
              <p><strong>Penanggung Jawab:</strong> {selectedKandang.penanggung_jawab}</p>
              <p><strong>Status:</strong> {selectedKandang.status}</p>
              <p><strong>Tanggal Input:</strong> {selectedKandang.created_at}</p>
            </div>
          </div>
        )}
      </Modal>

      <Modal isOpen={modalEdit} onClose={() => setModalEdit(false)}>
        {selectedKandang && (
          <div className="p-5 space-y-3">
            <h2 className="text-lg font-semibold text-[#3b3b3b]">Edit Data Kandang</h2>
            <form className="space-y-3">
              <div>
                <label className="text-sm font-medium">Nama Kandang</label>
                <input type="text" defaultValue={selectedKandang.nama_kandang} className="siqah-field" />
              </div>
              <div>
                <label className="text-sm font-medium">Lokasi</label>
                <input type="text" defaultValue={selectedKandang.lokasi} className="siqah-field" />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-sm font-medium">Kapasitas</label>
                  <input type="number" defaultValue={selectedKandang.kapasitas} className="siqah-field" />
                </div>
                <div>
                  <label className="text-sm font-medium">Status</label>
                  <select defaultValue={selectedKandang.status} className="siqah-field">
                    <option value="Aktif">Aktif</option>
                    <option value="Penuh">Penuh</option>
                    <option value="Tidak Aktif">Tidak Aktif</option>
                  </select>
                </div>
              </div>
              <div className="flex justify-end pt-3">
                <button type="button" onClick={() => setModalEdit(false)} className="siqah-btn-primary">Simpan Perubahan</button>
              </div>
            </form>
          </div>
        )}
      </Modal>

      <Modal isOpen={modalDelete} onClose={() => setModalDelete(false)}>
        {selectedKandang && (
          <div className="p-6 text-center space-y-3">
            <Trash2 size={40} className="mx-auto text-red-500" />
            <h3 className="text-lg font-semibold text-[#3b3b3b]">Hapus Data Kandang?</h3>
            <p className="text-sm text-[#7a7368]">
              Data kandang <strong>{selectedKandang.kode_kandang}</strong> akan dihapus dari sistem.
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
          <h2 className="text-lg font-semibold text-[#3b3b3b]">Tambah Kandang Baru</h2>
          <form className="space-y-3">
            <div>
              <label className="text-sm font-medium">Nama Kandang</label>
              <input type="text" placeholder="Masukkan nama kandang" className="siqah-field" />
            </div>
            <div>
              <label className="text-sm font-medium">Lokasi</label>
              <input type="text" placeholder="Masukkan lokasi kandang" className="siqah-field" />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-sm font-medium">Kapasitas</label>
                <input type="number" placeholder="Masukkan kapasitas" className="siqah-field" />
              </div>
              <div>
                <label className="text-sm font-medium">Status</label>
                <select className="siqah-field">
                  <option value="Aktif">Aktif</option>
                  <option value="Penuh">Penuh</option>
                  <option value="Tidak Aktif">Tidak Aktif</option>
                </select>
              </div>
            </div>
            <div>
              <label className="text-sm font-medium">Penanggung Jawab</label>
              <input type="text" placeholder="Masukkan nama mitra kandang" className="siqah-field" />
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
