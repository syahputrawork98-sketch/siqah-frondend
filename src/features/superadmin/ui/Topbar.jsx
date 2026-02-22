import { Bell, LogOut } from "lucide-react";
import { useState } from "react";
import NotificationDropdown from "@/features/superadmin/ui/NotificationDropdown";
import { useAsyncData } from "@/shared/hooks";
import { fetchSuperadminProfile, fetchTopbarNotifications } from "@/features/superadmin/api/superadminApi";

export default function Topbar() {
  const [openNotif, setOpenNotif] = useState(false);
  const {
    data: profile,
  } = useAsyncData(fetchSuperadminProfile, {
    initialData: { name: "-", email: "-", avatar: "" },
  });
  const {
    data: notifications,
  } = useAsyncData(fetchTopbarNotifications, {
    initialData: [],
  });

  return (
    <header
      className="flex items-center justify-between px-6 py-3
      bg-white/80 backdrop-blur-md border-b border-[#e7e1d8] shadow-sm"
    >
      <div>
        <h2 className="text-lg font-semibold text-[#3b3b3b] tracking-wide">
          Panel <span className="text-[#e2b97f]">Superadmin</span>
        </h2>
      </div>

      <div className="flex items-center gap-5">
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
              {notifications.length}
            </span>
          </button>
          {openNotif && (
            <NotificationDropdown
              notifications={notifications}
              onClose={() => setOpenNotif(false)}
            />
          )}
        </div>

        <div className="flex items-center gap-3 bg-white/60 rounded-full px-3 py-1 border border-[#eee6da] shadow-sm">
          <img
            src={profile.avatar}
            alt="avatar"
            className="w-9 h-9 rounded-full border border-[#e7e1d8] object-cover"
          />
          <div className="hidden sm:block">
            <p className="text-sm font-medium text-[#3b3b3b]">{profile.name}</p>
            <p className="text-xs text-[#7a7368]">{profile.email}</p>
          </div>
        </div>

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
