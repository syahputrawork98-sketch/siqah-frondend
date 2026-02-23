import { useMemo } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardContent,
  Button,
  EmptyState,
  ErrorState,
  LoadingState,
} from "@/shared/ui";
import { formatCurrencyIdr } from "@/shared/lib";
import { useAsyncData } from "@/shared/hooks";
import { fetchAdminOrderDetail } from "@/features/admin/api/adminApi";
import {
  ArrowLeft,
  CreditCard,
  Package,
  User,
  Truck,
  Utensils,
  Camera,
  CheckCircle,
  Clock,
} from "lucide-react";

export default function DetailPesananAdmin() {
  const { id } = useParams();
  const navigate = useNavigate();

  const fetcher = useMemo(() => () => fetchAdminOrderDetail(id), [id]);
  const { data: pesanan, error, isLoading, reload } = useAsyncData(fetcher, {
    initialData: null,
  });

  return (
    <div className="space-y-6">
      <Button
        onClick={() => navigate(-1)}
        variant="ghost"
      >
        <ArrowLeft size={18} />
        <span className="text-sm font-medium">Kembali</span>
      </Button>

      <div>
        <h2 className="text-xl font-semibold text-[#3b3b3b] tracking-wide">
          Detail <span className="siqah-accent-text">Pesanan</span>
        </h2>
        <p className="text-sm text-[#7a7368]">ID Pesanan: <strong>{id}</strong></p>
      </div>

      {isLoading ? (
        <LoadingState message="Memuat detail pesanan..." />
      ) : error ? (
        <ErrorState
          message={error?.message || "Gagal memuat detail pesanan."}
          onRetry={reload}
        />
      ) : !pesanan ? (
        <EmptyState message="Detail pesanan tidak ditemukan." />
      ) : (
        <>
          <Card className="bg-white/80 backdrop-blur-md border border-[#eee6da] shadow-sm">
            <CardHeader>
              <h3 className="text-lg font-semibold text-[#3b3b3b]">Informasi Pesanan</h3>
            </CardHeader>
            <CardContent className="space-y-2 text-sm text-[#3b3b3b]">
              <p>
                <span className="font-medium">Tanggal Pesanan:</span> {pesanan.tanggal}
              </p>
              <p>
                <span className="font-medium">Total:</span> {formatCurrencyIdr(pesanan.total)}
              </p>
              <p>
                <span className="font-medium">Status:</span> <StatusBadge status={pesanan.status} />
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-md border border-[#eee6da] shadow-sm">
            <CardHeader>
              <h3 className="text-lg font-semibold flex items-center gap-2 text-[#3b3b3b]">
                <User size={18} className="siqah-accent-text" /> Data Konsumen
              </h3>
            </CardHeader>
            <CardContent className="text-sm text-[#3b3b3b] space-y-1">
              <p><span className="font-medium">Nama:</span> {pesanan.konsumen.nama}</p>
              <p><span className="font-medium">Telepon:</span> {pesanan.konsumen.telepon}</p>
              <p><span className="font-medium">Alamat:</span> {pesanan.konsumen.alamat}</p>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-md border border-[#eee6da] shadow-sm">
            <CardHeader>
              <h3 className="text-lg font-semibold flex items-center gap-2 text-[#3b3b3b]">
                <CreditCard size={18} className="siqah-accent-text" /> Pembayaran
              </h3>
            </CardHeader>
            <CardContent className="text-sm text-[#3b3b3b] space-y-2">
              <p>
                <span className="font-medium">Status:</span>{" "}
                <StatusBadge status={pesanan.pembayaran.status} />
              </p>
              <p>
                <span className="font-medium">Metode:</span> {pesanan.pembayaran.metode}
              </p>
              <div className="space-y-1">
                <span className="font-medium">Bukti Pembayaran:</span>
                <img
                  src={pesanan.pembayaran.bukti}
                  alt="Bukti Pembayaran"
                  className="w-52 rounded-lg border border-[#eee6da] shadow-sm mt-1"
                />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white/80 backdrop-blur-md border border-[#eee6da] shadow-sm">
            <CardHeader>
              <h3 className="text-lg font-semibold flex items-center gap-2 text-[#3b3b3b]">
                <Package size={18} className="siqah-accent-text" /> Progress Pesanan
              </h3>
            </CardHeader>
            <CardContent className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {pesanan.progress.map((p, idx) => (
                <div
                  key={`${p.tahap}-${idx}`}
                  className="p-4 border border-[#eee6da] rounded-lg bg-[#fefbf7] hover:shadow-md transition-all"
                >
                  <div className="flex items-center gap-2 text-[#3b3b3b] font-medium mb-2">
                    {idx === 0 ? (
                      <Camera size={16} className="siqah-accent-text" />
                    ) : idx === 1 ? (
                      <Utensils size={16} className="siqah-accent-text" />
                    ) : (
                      <Truck size={16} className="siqah-accent-text" />
                    )}
                    {p.tahap}
                  </div>
                  <p className="text-xs text-[#7a7368]">Mitra: <span className="font-medium">{p.mitra}</span></p>
                  <p className="text-xs text-[#7a7368] mb-2">Waktu: {p.waktu}</p>
                  <img
                    src={p.foto}
                    alt={p.tahap}
                    className="w-full rounded-md border border-[#eee6da] object-cover"
                  />
                </div>
              ))}
            </CardContent>
          </Card>
        </>
      )}
    </div>
  );
}

function StatusBadge({ status }) {
  const base = "px-2 py-1 rounded-full text-xs font-semibold inline-flex items-center gap-1";
  switch (status) {
    case "Menunggu Pembayaran":
      return (
        <span className={`${base} bg-yellow-100 text-yellow-700`}>
          <Clock size={12} /> {status}
        </span>
      );
    case "Diproses":
      return (
        <span className={`${base} bg-blue-100 text-blue-700`}>
          <Package size={12} /> {status}
        </span>
      );
    case "Selesai":
    case "Diterima":
      return (
        <span className={`${base} bg-green-100 text-green-700`}>
          <CheckCircle size={12} /> {status}
        </span>
      );
    default:
      return <span className={`${base} bg-gray-100 text-gray-700`}>{status}</span>;
  }
}

