
import { useEffect, useRef } from "react";

export default function NotificationDropdown({ onClose }) {
  const ref = useRef();

  // Tutup dropdown saat klik di luar
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        onClose();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);

  const dummyNotif = [
    { id: 1, title: "Pesanan Baru", message: "Konsumen baru melakukan pesanan." },
    { id: 2, title: "Pembayaran Divalidasi", message: "Admin telah memverifikasi pembayaran." },
    { id: 3, title: "Proses Dapur Dimulai", message: "Petugas dapur memulai pengolahan." },
  ];

  return (
    <div
      ref={ref}
      className="absolute right-0 mt-2 w-72 bg-white border rounded-xl shadow-lg p-3 z-30"
    >
      <p className="text-sm font-semibold mb-2 text-gray-700">Notifikasi</p>
      <div className="max-h-64 overflow-y-auto">
        {dummyNotif.length > 0 ? (
          dummyNotif.map((notif) => (
            <div
              key={notif.id}
              className="p-2 mb-1 rounded-md hover:bg-gray-50 cursor-pointer"
            >
              <p className="text-sm font-medium text-gray-800">{notif.title}</p>
              <p className="text-xs text-gray-500">{notif.message}</p>
            </div>
          ))
        ) : (
          <p className="text-sm text-gray-500 text-center py-4">
            Tidak ada notifikasi baru
          </p>
        )}
      </div>
    </div>
  );
}
