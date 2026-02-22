import { useEffect, useState } from "react";
import { Card, CardContent, ErrorState, LoadingState } from "@/shared/ui";
import { Camera, Save, KeyRound } from "lucide-react";
import { useAsyncData } from "@/shared/hooks";
import { fetchAdminProfile } from "@/features/admin/api/adminApi";
import { DEFAULT_ADMIN_PROFILE } from "@/features/admin/model/adminDataMappers";

export default function PengaturanAdmin() {
  const { data, error, isLoading, reload } = useAsyncData(fetchAdminProfile, {
    initialData: DEFAULT_ADMIN_PROFILE,
  });
  const [adminData, setAdminData] = useState(DEFAULT_ADMIN_PROFILE);
  const [preview, setPreview] = useState(null);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    setAdminData(data);
  }, [data]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setAdminData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePhotoChange = (event) => {
    const file = event.target.files?.[0];
    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSuccess(true);
    setTimeout(() => setSuccess(false), 2000);
  };

  return (
    <div className="p-6 space-y-8">
      <div>
        <h1 className="text-2xl font-semibold text-[#3b3b3b] mb-2">Pengaturan Admin</h1>
        <p className="text-sm text-[#7a7368]">
          Kelola informasi akun dan profil admin Anda.
        </p>
      </div>

      {isLoading ? (
        <LoadingState message="Memuat profil admin..." />
      ) : error ? (
        <ErrorState
          message={error?.message || "Gagal memuat data profil admin."}
          onRetry={reload}
        />
      ) : (
        <Card className="border border-[#eee6da] rounded-2xl bg-white/80 shadow-sm">
          <CardContent className="p-6">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="flex flex-col items-center space-y-3">
                <div className="relative">
                  <img
                    src={preview || adminData.foto}
                    alt="Foto Profil"
                    className="w-28 h-28 object-cover rounded-full border-4 border-[#e2b97f]/40"
                  />
                  <label
                    htmlFor="foto"
                    className="absolute bottom-2 right-2 bg-[#e2b97f] text-white rounded-full p-2 cursor-pointer hover:bg-[#caa268] transition"
                  >
                    <Camera size={18} />
                    <input
                      id="foto"
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={handlePhotoChange}
                    />
                  </label>
                </div>
                <p className="text-sm text-[#7a7368]">Format JPG/PNG, maksimal 2MB.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="text-sm text-[#7a7368]">Nama Lengkap</label>
                  <input
                    type="text"
                    name="nama_admin"
                    value={adminData.nama_admin}
                    onChange={handleChange}
                    className="w-full border border-[#eee6da] rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#e2b97f]"
                  />
                </div>
                <div>
                  <label className="text-sm text-[#7a7368]">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={adminData.email}
                    onChange={handleChange}
                    className="w-full border border-[#eee6da] rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#e2b97f]"
                  />
                </div>
                <div>
                  <label className="text-sm text-[#7a7368]">Username</label>
                  <input
                    type="text"
                    name="username"
                    value={adminData.username}
                    onChange={handleChange}
                    className="w-full border border-[#eee6da] rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#e2b97f]"
                  />
                </div>
                <div>
                  <label className="text-sm text-[#7a7368]">No. Telepon</label>
                  <input
                    type="text"
                    name="no_telp"
                    value={adminData.no_telp}
                    onChange={handleChange}
                    className="w-full border border-[#eee6da] rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#e2b97f]"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="text-sm text-[#7a7368]">Alamat</label>
                  <textarea
                    name="alamat"
                    value={adminData.alamat}
                    onChange={handleChange}
                    className="w-full border border-[#eee6da] rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#e2b97f] h-20"
                  />
                </div>
              </div>

              <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-4">
                <button
                  type="button"
                  className="flex items-center gap-2 px-4 py-2 border border-[#e2b97f] text-[#e2b97f] rounded-lg hover:bg-[#e2b97f] hover:text-white transition"
                >
                  <KeyRound size={16} />
                  Ubah Password
                </button>
                <button
                  type="submit"
                  className="flex items-center gap-2 px-6 py-2 bg-[#e2b97f] text-white rounded-lg hover:bg-[#caa268] transition"
                >
                  <Save size={18} />
                  Simpan Perubahan
                </button>
              </div>

              {success && (
                <div className="text-center text-green-700 font-medium mt-3">
                  Data berhasil disimpan.
                </div>
              )}
            </form>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
