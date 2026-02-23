import { useState } from "react";
import {
  Table,
  Modal,
  Card,
  CardContent,
  CardHeader,
  ErrorState,
  LoadingState,
} from "@/shared/ui";
import { Edit2, PlusCircle } from "lucide-react";
import { useAsyncData } from "@/shared/hooks";
import {
  fetchRoles,
  fetchSettingsProfile,
} from "@/features/superadmin/api/superadminApi";

export default function Pengaturan() {
  const [activeTab, setActiveTab] = useState("profil");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formMode, setFormMode] = useState("Tambah");

  const {
    data: profil,
    error: profileError,
    isLoading: profileLoading,
    reload: reloadProfile,
  } = useAsyncData(fetchSettingsProfile, {
    initialData: {
      nama: "-",
      email: "-",
      role: "-",
      avatar: "",
    },
  });

  const {
    data: roles,
    error: rolesError,
    isLoading: rolesLoading,
    reload: reloadRoles,
  } = useAsyncData(fetchRoles, {
    initialData: [],
  });

  const columnsRole = [
    { header: "Nama Role", accessor: "nama_role" },
    { header: "Deskripsi", accessor: "deskripsi" },
    {
      header: "Aksi",
      render: (row) => (
        <button
          onClick={() => handleEditRole(row)}
          className="p-1.5 text-[#45624B] hover:bg-[#E3EBD2] rounded-md transition"
        >
          <Edit2 size={16} />
        </button>
      ),
    },
  ];

  const handleEditRole = (row) => {
    setFormMode("Edit");
    console.log("Edit role:", row);
    setIsModalOpen(true);
  };

  const handleAddRole = () => {
    setFormMode("Tambah");
    setIsModalOpen(true);
  };

  return (
    <div className="space-y-6">
      <Card className="border border-[#e7e1d8] bg-white/90 backdrop-blur-md rounded-2xl shadow-md">
        <CardHeader
          title={<span className="text-[#45624B] font-semibold text-lg">Pengaturan Sistem</span>}
          subtitle="Atur profil Superadmin dan kelola hak akses pengguna"
        />

        <CardContent>
          <div className="flex flex-wrap gap-3 mb-6 border-b border-[#e7e1d8]">
            {["profil", "role"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative px-5 py-2 text-sm font-medium transition-all ${
                  activeTab === tab
                    ? "text-[#45624B] font-semibold after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-gradient-to-r after:from-[#45624B] after:to-[#B9914D]"
                    : "text-[#888] hover:text-[#45624B]"
                }`}
              >
                {tab === "profil" ? "Profil Superadmin" : "Manajemen Role"}
              </button>
            ))}
          </div>

          {activeTab === "profil" && (
            <div className="max-w-lg space-y-5">
              {profileLoading ? (
                <LoadingState message="Memuat profil superadmin..." />
              ) : profileError ? (
                <ErrorState
                  message={profileError?.message || "Gagal memuat profil superadmin."}
                  onRetry={reloadProfile}
                />
              ) : (
                <>
                  <div className="flex items-center gap-4">
                    <img
                      src={profil.avatar}
                      alt="Avatar"
                      className="w-20 h-20 rounded-full border border-[#E7E1D8] object-cover shadow-sm"
                    />
                    <div>
                      <h3 className="text-lg font-semibold text-[#45624B]">{profil.nama}</h3>
                      <p className="text-gray-600 text-sm">{profil.email}</p>
                      <p className="siqah-accent-text text-xs italic">{profil.role}</p>
                    </div>
                  </div>

                  <form className="space-y-4 mt-4">
                    <div>
                      <label className="block text-sm font-medium mb-1 text-[#45624B]">Nama Lengkap</label>
                      <input
                        type="text"
                        defaultValue={profil.nama}
                        className="w-full border border-[#E7E1D8] rounded-lg p-2 focus:ring focus:ring-[#E3EBD2] focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-1 text-[#45624B]">Email</label>
                      <input
                        type="email"
                        defaultValue={profil.email}
                        className="w-full border border-[#E7E1D8] rounded-lg p-2 focus:ring focus:ring-[#E3EBD2] focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-1 text-[#45624B]">Password Baru</label>
                      <input
                        type="password"
                        placeholder="********"
                        className="w-full border border-[#E7E1D8] rounded-lg p-2 focus:ring focus:ring-[#E3EBD2] focus:outline-none"
                      />
                    </div>

                    <div className="flex justify-end pt-2">
                      <button
                        type="submit"
                        className="bg-gradient-to-r from-[#45624B] to-[#B9914D] text-white px-5 py-2 rounded-lg shadow hover:opacity-90 transition"
                      >
                        Simpan Perubahan
                      </button>
                    </div>
                  </form>
                </>
              )}
            </div>
          )}

          {activeTab === "role" && (
            <div>
              <div className="flex justify-end mb-4">
                <button
                  onClick={handleAddRole}
                  className="flex items-center gap-2 bg-gradient-to-r from-[#45624B] to-[#B9914D] text-white px-4 py-2 rounded-lg shadow hover:opacity-90 transition"
                >
                  <PlusCircle size={18} />
                  Tambah Role
                </button>
              </div>

              {rolesLoading ? (
                <LoadingState message="Memuat data role..." />
              ) : rolesError ? (
                <ErrorState
                  message={rolesError?.message || "Gagal memuat data role."}
                  onRetry={reloadRoles}
                />
              ) : (
                <div className="overflow-x-auto rounded-xl border border-[#E7E1D8]">
                  <Table columns={columnsRole} data={roles} />
                </div>
              )}
            </div>
          )}
        </CardContent>
      </Card>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={`${formMode} Role`}
      >
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1 text-[#45624B]">Nama Role</label>
            <input
              type="text"
              placeholder="Contoh: Public"
              className="w-full border border-[#E7E1D8] rounded-lg p-2 focus:ring focus:ring-[#E3EBD2] focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1 text-[#45624B]">Deskripsi</label>
            <textarea
              rows="3"
              placeholder="Deskripsi hak akses role ini..."
              className="w-full border border-[#E7E1D8] rounded-lg p-2 focus:ring focus:ring-[#E3EBD2] focus:outline-none"
            ></textarea>
          </div>

          <div className="flex justify-end gap-2 pt-3">
            <button
              type="button"
              onClick={() => setIsModalOpen(false)}
              className="px-4 py-2 border border-[#E7E1D8] rounded-lg text-[#45624B] hover:bg-[#F8F4E3] transition"
            >
              Batal
            </button>
            <button
              type="submit"
              className="bg-gradient-to-r from-[#45624B] to-[#B9914D] text-white px-5 py-2 rounded-lg shadow hover:opacity-90 transition"
            >
              Simpan
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
}

