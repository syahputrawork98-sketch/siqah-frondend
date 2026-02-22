// client/src/components/petugas/kandang/TopbarPetugasKandang.jsx
import { Bell, LogOut } from "lucide-react";
import { useState } from "react";
import NotificationDropdown from "../../superadmin/NotificationDropdown";

export default function TopbarPetugasKandang() {
  const [openNotif, setOpenNotif] = useState(false);

  const petugas = {
    name: "Petugas Kandang",
    email: "kandang@siqah.id",
    avatar:
      "https://ui-avatars.com/api/?name=Petugas+Kandang&background=e2b97f&color=fff",
  };

  return (
    <header
      className="flex items-center justify-between px-6 py-3 
      bg-white/80 backdrop-blur-md border-b border-[#e7e1d8] shadow-sm"
    >
      {/* Kiri - Judul halaman */}
      <div>
        <h2 className="text-lg font-semibold text-[#3b3b3b] tracking-wide">
          Panel <span className="text-[#e2b97f]">Petugas Kandang</span>
        </h2>
      </div>

      {/* Kanan - Notifikasi, Profil, Logout */}
      <div className="flex items-center gap-5">
        {/* 🔔 Notifikasi */}
        <div className="relative">
          <button
            onClick={() => setOpenNotif((prev) => !prev)}
            className="relative p-2 rounded-full hover:bg-[#f9f6ef] transition-all"
          >
            <Bell
              size={20}
              className="text-[#3b3b3b] hover:text-[#e2b97f] transition"
            />
            <span
              className="absolute -top-0.5 -right-0.5 bg-[#e2b97f] text-white
              text-[10px] font-semibold rounded-full px-1.5 shadow-sm"
            >
              3
            </span>
          </button>
          {openNotif && (
            <NotificationDropdown onClose={() => setOpenNotif(false)} />
          )}
        </div>

        {/* 👤 Profil */}
        <div className="flex items-center gap-3 bg-white/60 rounded-full px-3 py-1 border border-[#eee6da] shadow-sm">
          <img
            src={petugas.avatar}
            alt="avatar"
            className="w-9 h-9 rounded-full border border-[#e7e1d8] object-cover"
          />
          <div className="hidden sm:block">
            <p className="text-sm font-medium text-[#3b3b3b]">{petugas.name}</p>
            <p className="text-xs text-[#7a7368]">{petugas.email}</p>
          </div>
        </div>

        {/* 🚪 Logout */}
        <button
          className="flex items-center gap-1 text-[#3b3b3b] hover:text-[#e2b97f] transition-all"
          onClick={() => console.log("Logout clicked")}
        >
          <LogOut size={18} />
          <span className="hidden sm:inline text-sm font-medium">Logout</span>
        </button>
      </div>
    </header>
  );
}
