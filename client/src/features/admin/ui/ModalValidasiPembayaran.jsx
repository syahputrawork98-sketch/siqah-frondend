import { X, CheckCircle, XCircle } from "lucide-react";
import { formatCurrencyIdr } from "@/shared/lib";

export default function ModalValidasiPembayaran({ data, onClose }) {
  return (
    <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center backdrop-blur-sm">
      <div className="bg-white/90 rounded-xl shadow-lg w-[90%] md:w-[550px] border border-[#eee6da]">
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-3 border-b border-[#eee6da] bg-gradient-to-r from-[#fefbf7] to-[#f9f6ef] rounded-t-xl">
          <h2 className="text-lg font-semibold text-[#3b3b3b]">
            Validasi Pembayaran
          </h2>
          <button onClick={onClose} className="hover:text-[#e2b97f]">
            <X size={20} />
          </button>
        </div>

        {/* Konten */}
        <div className="p-5 space-y-4 text-[#3b3b3b]">
          <p>
            <span className="font-medium">ID Pembayaran:</span> {data.id}
          </p>
          <p>
            <span className="font-medium">Nama Konsumen:</span> {data.konsumen}
          </p>
          <p>
            <span className="font-medium">Tanggal:</span> {data.tanggal}
          </p>
          <p>
            <span className="font-medium">Jumlah:</span>{" "}
            {formatCurrencyIdr(data.jumlah)}
          </p>

          {/* Bukti transfer */}
          <div>
            <span className="font-medium">Bukti Pembayaran:</span>
            <img
              src="https://placehold.co/400x250?text=Bukti+Transfer"
              alt="bukti"
              className="rounded-lg mt-2 border border-[#eee6da]"
            />
          </div>
        </div>

        {/* Footer aksi */}
        <div className="flex justify-end gap-3 p-4 border-t border-[#eee6da] bg-[#fefbf7] rounded-b-xl">
          <button
            onClick={onClose}
            className="px-4 py-2 text-sm text-[#3b3b3b] hover:text-[#e2b97f] transition"
          >
            Batal
          </button>
          <button className="flex items-center gap-1 px-4 py-2 bg-red-100 hover:bg-red-200 text-red-700 rounded-lg text-sm font-medium transition">
            <XCircle size={16} /> Tolak
          </button>
          <button className="flex items-center gap-1 px-4 py-2 bg-green-100 hover:bg-green-200 text-green-700 rounded-lg text-sm font-medium transition">
            <CheckCircle size={16} /> Setujui
          </button>
        </div>
      </div>
    </div>
  );
}
