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
import { fetchAdminMenus } from "@/features/admin/api/adminApi";
import { DEFAULT_MENU_LIST } from "@/features/admin/model/adminDataMappers";

export default function DataMenu() {
  const {
    data: fetchedMenus,
    error,
    isLoading,
    reload,
  } = useAsyncData(fetchAdminMenus, {
    initialData: DEFAULT_MENU_LIST,
  });
  const [dataMenu, setDataMenu] = useState(DEFAULT_MENU_LIST);
  const {
    selectedItem: selectedMenu,
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
    setDataMenu(fetchedMenus);
  }, [fetchedMenus]);

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-semibold text-[#3b3b3b]">Data Menu</h1>
          <p className="text-sm text-[#7a7368]">
            Daftar menu olahan aqiqah yang tersedia di catering Siqah.
          </p>
        </div>
        <button
          onClick={() => setModalTambah(true)}
          className="siqah-btn-primary shadow-sm"
        >
          <Plus size={16} />
          Tambah Menu
        </button>
      </div>

      {isLoading ? (
        <LoadingState message="Memuat data menu..." />
      ) : error ? (
        <ErrorState
          message={error?.message || "Gagal memuat data menu."}
          onRetry={reload}
        />
      ) : dataMenu.length === 0 ? (
        <EmptyState message="Belum ada data menu." />
      ) : (
        <Card className="siqah-table-card overflow-hidden">
          <CardContent className="p-0">
            <table className="w-full text-sm text-left border-collapse">
              <thead className="siqah-table-head">
                <tr>
                  <th className="px-4 py-3">Kode Menu</th>
                  <th className="px-4 py-3">Nama Menu</th>
                  <th className="px-4 py-3">Kategori</th>
                  <th className="px-4 py-3">Deskripsi</th>
                  <th className="px-4 py-3 text-center">Harga</th>
                  <th className="px-4 py-3 text-center">Status</th>
                  <th className="px-4 py-3 text-center">Aksi</th>
                </tr>
              </thead>
              <tbody>
                {dataMenu.map((m) => (
                  <tr
                    key={m.id_menu}
                    className="siqah-table-row"
                  >
                    <td className="px-4 py-3">{m.kode_menu}</td>
                    <td className="px-4 py-3">{m.nama_menu}</td>
                    <td className="px-4 py-3">{m.kategori}</td>
                    <td className="px-4 py-3">{m.deskripsi}</td>
                    <td className="px-4 py-3 text-center">
                      Rp {m.harga.toLocaleString("id-ID")}
                    </td>
                    <td className="px-4 py-3 text-center">
                      <span
                        className={`siqah-status-badge ${
                          m.status_aktif
                            ? "siqah-status-success"
                            : "siqah-status-danger"
                        }`}
                      >
                        {m.status_aktif ? "Aktif" : "Nonaktif"}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-center">
                      <CrudRowActions
                        item={m}
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
        {selectedMenu && (
          <div className="p-5 space-y-3">
            <h2 className="text-lg font-semibold text-[#3b3b3b]">
              Detail Menu
            </h2>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <p><strong>Kode:</strong> {selectedMenu.kode_menu}</p>
              <p><strong>Nama Menu:</strong> {selectedMenu.nama_menu}</p>
              <p><strong>Kategori:</strong> {selectedMenu.kategori}</p>
              <p><strong>Harga:</strong> Rp {selectedMenu.harga.toLocaleString("id-ID")}</p>
              <p className="col-span-2">
                <strong>Deskripsi:</strong> {selectedMenu.deskripsi}
              </p>
              <p><strong>Status:</strong> {selectedMenu.status_aktif ? "Aktif" : "Nonaktif"}</p>
              <p><strong>Tanggal Input:</strong> {selectedMenu.created_at}</p>
            </div>
          </div>
        )}
      </Modal>

      <Modal isOpen={modalEdit} onClose={() => setModalEdit(false)}>
        {selectedMenu && (
          <div className="p-5 space-y-3">
            <h2 className="text-lg font-semibold text-[#3b3b3b]">
              Edit Data Menu
            </h2>
            <form className="space-y-3">
              <div>
                <label className="text-sm font-medium">Nama Menu</label>
                <input
                  type="text"
                  defaultValue={selectedMenu.nama_menu}
                  className="siqah-field"
                />
              </div>
              <div>
                <label className="text-sm font-medium">Kategori</label>
                <input
                  type="text"
                  defaultValue={selectedMenu.kategori}
                  className="siqah-field"
                />
              </div>
              <div>
                <label className="text-sm font-medium">Deskripsi</label>
                <textarea
                  defaultValue={selectedMenu.deskripsi}
                  className="siqah-field"
                  rows="3"
                />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-sm font-medium">Harga</label>
                  <input
                    type="number"
                    defaultValue={selectedMenu.harga}
                    className="siqah-field"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium">Status</label>
                  <select
                    defaultValue={selectedMenu.status_aktif ? "Aktif" : "Nonaktif"}
                    className="siqah-field"
                  >
                    <option value="Aktif">Aktif</option>
                    <option value="Nonaktif">Nonaktif</option>
                  </select>
                </div>
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

      <Modal isOpen={modalDelete} onClose={() => setModalDelete(false)}>
        {selectedMenu && (
          <div className="p-6 text-center space-y-3">
            <Trash2 size={40} className="mx-auto text-red-500" />
            <h3 className="text-lg font-semibold text-[#3b3b3b]">
              Hapus Menu?
            </h3>
            <p className="text-sm text-[#7a7368]">
              Data menu <strong>{selectedMenu.nama_menu}</strong> akan dihapus dari sistem.
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

      <Modal isOpen={modalTambah} onClose={() => setModalTambah(false)}>
        <div className="p-5 space-y-3">
          <h2 className="text-lg font-semibold text-[#3b3b3b]">
            Tambah Menu Baru
          </h2>
          <form className="space-y-3">
            <div>
              <label className="text-sm font-medium">Nama Menu</label>
              <input
                type="text"
                placeholder="Masukkan nama menu"
                className="siqah-field"
              />
            </div>
            <div>
              <label className="text-sm font-medium">Kategori</label>
              <input
                type="text"
                placeholder="Masukkan kategori menu"
                className="siqah-field"
              />
            </div>
            <div>
              <label className="text-sm font-medium">Deskripsi</label>
              <textarea
                placeholder="Masukkan deskripsi menu"
                rows="3"
                className="siqah-field"
              />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-sm font-medium">Harga</label>
                <input
                  type="number"
                  placeholder="Masukkan harga menu"
                  className="siqah-field"
                />
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
              <button
                type="button"
                onClick={() => setModalTambah(false)}
                className="siqah-btn-primary"
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
