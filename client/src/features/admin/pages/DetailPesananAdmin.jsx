import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Card, CardHeader, CardContent } from "@/shared/ui";
import {
  ArrowLeft,
  CreditCard,
  Package,
  User,
  Truck,
  Utensils,
  Camera,
  CheckCircle,
} from "lucide-react";

export default function DetailPesananAdmin() {
  const { id: _id } = useParams();
  const navigate = useNavigate();

  // Dummy data sementara sebelum koneksi ke backend
  const dummyDetail = {
    id: "ORD-00122",
    tanggal: "2025-11-01",
    total: 1800000,
    status: "Diproses",
    konsumen: {
      nama: "Rina Marlina",
      telepon: "0812-3456-7890",
      alamat: "Jl. Melati No. 12, Bandung",
    },
    pembayaran: {
      status: "Diterima",
      metode: "Transfer BCA",
      bukti:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Example.jpg/300px-Example.jpg",
    },
    progress: [
      {
        tahap: "Penyembelihan",
        petugas: "Ahmad Fauzi",
        waktu: "2025-11-01 08:30",
        foto: "https://placehold.co/100x100?text=Kandang",
      },
      {
        tahap: "Pemotongan & Dapur",
        petugas: "Siti Aminah",
        waktu: "2025-11-01 10:00",
        foto: "https://placehold.co/100x100?text=Dapur",
      },
      {
        tahap: "Pengantaran",
        petugas: "Rizal Fathoni",
        waktu: "2025-11-01 12:30",
        foto: "https://placehold.co/100x100?text=Kurir",
      },
    ],
  };
  const [pesanan] = useState(dummyDetail);

  if (!pesanan)
    return (
      <div className="text-center text-[#7a7368] mt-10">Memuat data...</div>
    );

  return (
    <div className="space-y-6">
      {/* Tombol kembali */}
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 text-[#3b3b3b] hover:text-[#e2b97f] transition-all"
      >
        <ArrowLeft size={18} />
        <span className="text-sm font-medium">Kembali</span>
      </button>

      {/* Judul halaman */}
      <div>
        <h2 className="text-xl font-semibold text-[#3b3b3b] tracking-wide">
          Detail <span className="text-[#e2b97f]">Pesanan</span>
        </h2>
        <p className="text-sm text-[#7a7368]">
          ID Pesanan: <strong>{pesanan.id}</strong>
        </p>
      </div>

      {/* Informasi Pesanan */}
      <Card className="bg-white/80 backdrop-blur-md border border-[#eee6da] shadow-sm">
        <CardHeader>
          <h3 className="text-lg font-semibold text-[#3b3b3b]">
            Informasi Pesanan
          </h3>
        </CardHeader>
        <CardContent className="space-y-2 text-sm text-[#3b3b3b]">
          <p>
            <span className="font-medium">Tanggal Pesanan:</span> {pesanan.tanggal}
          </p>
          <p>
            <span className="font-medium">Total:</span> Rp{" "}
            {pesanan.total.toLocaleString("id-ID")}
          </p>
          <p>
            <span className="font-medium">Status:</span>{" "}
            <StatusBadge status={pesanan.status} />
          </p>
        </CardContent>
      </Card>

      {/* Informasi Konsumen */}
      <Card className="bg-white/80 backdrop-blur-md border border-[#eee6da] shadow-sm">
        <CardHeader>
          <h3 className="text-lg font-semibold flex items-center gap-2 text-[#3b3b3b]">
            <User size={18} className="text-[#e2b97f]" /> Data Konsumen
          </h3>
        </CardHeader>
        <CardContent className="text-sm text-[#3b3b3b] space-y-1">
          <p>
            <span className="font-medium">Nama:</span> {pesanan.konsumen.nama}
          </p>
          <p>
            <span className="font-medium">Telepon:</span>{" "}
            {pesanan.konsumen.telepon}
          </p>
          <p>
            <span className="font-medium">Alamat:</span> {pesanan.konsumen.alamat}
          </p>
        </CardContent>
      </Card>

      {/* Informasi Pembayaran */}
      <Card className="bg-white/80 backdrop-blur-md border border-[#eee6da] shadow-sm">
        <CardHeader>
          <h3 className="text-lg font-semibold flex items-center gap-2 text-[#3b3b3b]">
            <CreditCard size={18} className="text-[#e2b97f]" /> Pembayaran
          </h3>
        </CardHeader>
        <CardContent className="text-sm text-[#3b3b3b] space-y-2">
          <p>
            <span className="font-medium">Status:</span>{" "}
            <StatusBadge status={pesanan.pembayaran.status} />
          </p>
          <p>
            <span className="font-medium">Metode:</span>{" "}
            {pesanan.pembayaran.metode}
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

      {/* Progress Pesanan */}
      <Card className="bg-white/80 backdrop-blur-md border border-[#eee6da] shadow-sm">
        <CardHeader>
          <h3 className="text-lg font-semibold flex items-center gap-2 text-[#3b3b3b]">
            <Package size={18} className="text-[#e2b97f]" /> Progress Pesanan
          </h3>
        </CardHeader>
        <CardContent className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {pesanan.progress.map((p, idx) => (
            <div
              key={idx}
              className="p-4 border border-[#eee6da] rounded-lg bg-[#fefbf7] hover:shadow-md transition-all"
            >
              <div className="flex items-center gap-2 text-[#3b3b3b] font-medium mb-2">
                {idx === 0 ? (
                  <Camera size={16} className="text-[#e2b97f]" />
                ) : idx === 1 ? (
                  <Utensils size={16} className="text-[#e2b97f]" />
                ) : (
                  <Truck size={16} className="text-[#e2b97f]" />
                )}
                {p.tahap}
              </div>
              <p className="text-xs text-[#7a7368]">
                Petugas: <span className="font-medium">{p.petugas}</span>
              </p>
              <p className="text-xs text-[#7a7368] mb-2">
                Waktu: {p.waktu}
              </p>
              <img
                src={p.foto}
                alt={p.tahap}
                className="w-full rounded-md border border-[#eee6da] object-cover"
              />
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}

function StatusBadge({ status }) {
  const base =
    "px-2 py-1 rounded-full text-xs font-semibold inline-flex items-center gap-1";
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
      return (
        <span className={`${base} bg-gray-100 text-gray-700`}>{status}</span>
      );
  }
}

