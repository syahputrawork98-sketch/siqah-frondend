import { useState, useEffect } from "react";
import { Plus, Eye, Pencil, Trash2 } from "lucide-react";
import { Card, CardContent, Modal } from "@/shared/ui";

export default function DataMenu() {
  const [dataMenu, setDataMenu] = useState([]);
  const [selectedMenu, setSelectedMenu] = useState(null);
  const [modalView, setModalView] = useState(false);
  const [modalEdit, setModalEdit] = useState(false);
  const [modalDelete, setModalDelete] = useState(false);
  const [modalTambah, setModalTambah] = useState(false);

  useEffect(() => {
    // Dummy data sesuai tb_menu
    setDataMenu([
      {
        id_menu: 1,
        kode_menu: "MNU001",
        nama_menu: "Gulai Kambing",
        kategori: "Daging",
        deskripsi: "Gulai kambing dengan bumbu rempah pilihan dan santan gurih.",
        harga: 45000,
        status_aktif: true,
        created_at: "2025-10-25",
      },
      {
        id_menu: 2,
        kode_menu: "MNU002",
        nama_menu: "Sate Domba",
        kategori: "Grill",
        deskripsi: "Sate domba empuk dengan bumbu kacang khas Siqah.",
        harga: 40000,
        status_aktif: true,
        created_at: "2025-10-28",
      },
      {
        id_menu: 3,
        kode_menu: "MNU003",
        nama_menu: "Tongseng Kambing",
        kategori: "Daging",
        deskripsi: "Tongseng dengan kuah kental manis pedas nikmat.",
        harga: 50000,
        status_aktif: false,
        created_at: "2025-11-01",
      },
    ]);
  }, []);

  const handleView = (m) => {
    setSelectedMenu(m);
    setModalView(true);
  };

  const handleEdit = (m) => {
    setSelectedMenu(m);
    setModalEdit(true);
  };

  const handleDelete = (m) => {
    setSelectedMenu(m);
    setModalDelete(true);
  };

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-semibold text-[#3b3b3b]">Data Menu</h1>
          <p className="text-sm text-[#7a7368]">
            Daftar menu olahan aqiqah yang tersedia di dapur Siqah.
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

      {/* Table */}
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
                    <div className="flex justify-center gap-2">
                      <button
                        onClick={() => handleView(m)}
                        className="siqah-icon-action siqah-icon-action-view"
                      >
                        <Eye size={16} />
                      </button>
                      <button
                        onClick={() => handleEdit(m)}
                        className="siqah-icon-action siqah-icon-action-edit"
                      >
                        <Pencil size={16} />
                      </button>
                      <button
                        onClick={() => handleDelete(m)}
                        className="siqah-icon-action siqah-icon-action-delete"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </CardContent>
      </Card>

      {/* Modal View */}
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

      {/* Modal Edit */}
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

      {/* Modal Delete */}
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

      {/* Modal Tambah */}
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






