import { X, CheckCircle, XCircle } from "lucide-react";
import { formatCurrencyIdr } from "@/shared/lib";
import { Button } from "@/shared/ui";

export default function ModalValidasiPembayaran({
  data,
  onClose,
  onApprove,
  onReject,
  isSubmitting = false,
  loadingAction = null,
  canValidate = true,
}) {
  const proofImageUrl =
    data?.buktiUrl || "https://placehold.co/400x250?text=Bukti+Transfer";

  return (
    <div className="fixed inset-0 z-50 bg-black/40 flex items-center justify-center backdrop-blur-sm">
      <div className="bg-white/90 rounded-xl shadow-lg w-[90%] md:w-[550px] border border-[#eee6da]">
        <div className="flex items-center justify-between px-5 py-3 border-b border-[#eee6da] bg-gradient-to-r from-[#fefbf7] to-[#f9f6ef] rounded-t-xl">
          <h2 className="text-lg font-semibold text-[#3b3b3b]">
            Validasi Pembayaran
          </h2>
          <Button variant="ghost" size="sm" onClick={onClose} disabled={isSubmitting}>
            <X size={20} />
          </Button>
        </div>

        <div className="p-5 space-y-4 text-[#3b3b3b]">
          <p>
            <span className="font-medium">ID Pembayaran:</span> {data?.id}
          </p>
          <p>
            <span className="font-medium">Nama Konsumen:</span> {data?.konsumen}
          </p>
          <p>
            <span className="font-medium">Tanggal:</span> {data?.tanggal}
          </p>
          <p>
            <span className="font-medium">Jumlah:</span>{" "}
            {formatCurrencyIdr(data?.jumlah ?? 0)}
          </p>

          <div>
            <span className="font-medium">Bukti Pembayaran:</span>
            <img
              src={proofImageUrl}
              alt="bukti"
              className="rounded-lg mt-2 border border-[#eee6da]"
            />
          </div>
        </div>

        <div className="flex justify-end gap-3 p-4 border-t border-[#eee6da] bg-[#fefbf7] rounded-b-xl">
          <Button variant="ghost" onClick={onClose} disabled={isSubmitting}>
            Batal
          </Button>
          <Button
            variant="danger"
            onClick={onReject}
            disabled={!canValidate}
            isLoading={isSubmitting && loadingAction === "reject"}
          >
            <XCircle size={16} /> Tolak
          </Button>
          <Button
            variant="success"
            onClick={onApprove}
            disabled={!canValidate}
            isLoading={isSubmitting && loadingAction === "approve"}
          >
            <CheckCircle size={16} /> Setujui
          </Button>
        </div>
      </div>
    </div>
  );
}
