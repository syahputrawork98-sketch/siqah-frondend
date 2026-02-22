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
      siqah-topbar"
    >
      <div>
        <h2 className="text-lg font-semibold text-[#3b3b3b] tracking-wide">
          Panel <span className="siqah-accent-text">Superadmin</span>
        </h2>
      </div>

      <div className="flex items-center gap-5">
        <div className="relative">
          <button
            onClick={() => setOpenNotif((prev) => !prev)}
            className="relative siqah-icon-button"
          >
            <Bell size={20} className="text-[#3b3b3b] transition" />
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

        <div className="siqah-chip flex items-center gap-3 rounded-full px-3 py-1">
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
          className="siqah-link-action flex items-center gap-1"
          onClick={() => console.log("Logout clicked")}
        >
          <LogOut size={18} />
          <span className="hidden sm:inline text-sm font-medium">Logout</span>
        </button>
      </div>
    </header>
  );
}
