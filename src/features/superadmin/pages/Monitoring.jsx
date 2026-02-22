import { useState } from "react";
import { Button, Table, Card, CardContent, CardHeader, EmptyState, ErrorState, LoadingState } from "@/shared/ui";
import { Eye, CheckCircle2, Clock, XCircle } from "lucide-react";
import { useAsyncData } from "@/shared/hooks";
import { fetchMonitoringOrders } from "@/features/superadmin/api/superadminApi";

export default function Monitoring() {
  const [selectedOrder, setSelectedOrder] = useState(null);
  const { data: orders, error, isLoading, reload } = useAsyncData(fetchMonitoringOrders, {
    initialData: [],
  });

  const columns = [
    { header: "Nama Konsumen", accessor: "konsumen" },
    { header: "Paket", accessor: "paket" },
    { header: "Tanggal", accessor: "tanggal" },
    {
      header: "Status Kandang",
      render: (row) => <StatusBadge status={row.kandang} />,
    },
    {
      header: "Status Dapur",
      render: (row) => <StatusBadge status={row.dapur} />,
    },
    {
      header: "Status Kurir",
      render: (row) => <StatusBadge status={row.kurir} />,
    },
    {
      header: "Status Akhir",
      render: (row) => <StatusBadge status={row.status} />,
    },
    {
      header: "Aksi",
      render: (row) => (
        <Button
          onClick={() => setSelectedOrder(row)}
          variant="ghost"
          size="sm"
          className="text-[#45624B] hover:bg-[#E3EBD2]/60"
        >
          <Eye size={16} />
          Lihat
        </Button>
      ),
    },
  ];

  return (
    <div className="space-y-6">
      <Card className="border border-[#e7e1d8] bg-white/90 backdrop-blur-md rounded-2xl shadow-md">
        <CardHeader
          title={<span className="text-[#45624B] font-semibold text-lg">Monitoring Proses Aqiqah</span>}
          subtitle="Pantau setiap tahap penyembelihan, pengolahan, dan pengantaran"
        />
        <CardContent>
          {isLoading ? (
            <LoadingState message="Memuat data monitoring..." />
          ) : error ? (
            <ErrorState
              message={error?.message || "Gagal memuat monitoring proses."}
              onRetry={reload}
            />
          ) : orders.length === 0 ? (
            <EmptyState message="Belum ada pesanan untuk dimonitor." />
          ) : (
            <div className="overflow-x-auto rounded-xl border border-[#E7E1D8]">
              <Table columns={columns} data={orders} />
            </div>
          )}
        </CardContent>
      </Card>

      {selectedOrder && (
        <div className="border border-[#E7E1D8] bg-white/90 backdrop-blur-md rounded-2xl shadow-md p-6">
          <h2 className="text-lg font-semibold text-[#45624B] mb-4">
            Detail Proses - {selectedOrder.konsumen}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            <StageCard
              title="Penyembelihan"
              status={selectedOrder.kandang}
              detail="Petugas kandang telah mengunggah bukti foto/video."
            />
            <StageCard
              title="Pengolahan"
              status={selectedOrder.dapur}
              detail="Petugas dapur sedang mengolah daging."
            />
            <StageCard
              title="Pengantaran"
              status={selectedOrder.kurir}
              detail="Petugas kurir sedang mengantarkan pesanan."
            />
          </div>

          <div className="flex justify-end mt-6">
            <Button
              onClick={() => setSelectedOrder(null)}
              variant="primary"
            >
              Tutup
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

function StatusBadge({ status }) {
  const colors = {
    Selesai: "bg-green-50 text-green-700 border border-green-200",
    Proses: "bg-amber-50 text-amber-700 border border-amber-200",
    Menunggu: "bg-gray-50 text-gray-700 border border-gray-200",
    Terkirim: "bg-blue-50 text-blue-700 border border-blue-200",
    Gagal: "bg-red-50 text-red-700 border border-red-200",
  };

  const icon =
    status === "Selesai" ? (
      <CheckCircle2 size={14} />
    ) : status === "Proses" ? (
      <Clock size={14} />
    ) : status === "Terkirim" ? (
      <CheckCircle2 size={14} />
    ) : (
      <XCircle size={14} />
    );

  return (
    <span
      className={`inline-flex items-center gap-1 px-2.5 py-1.5 rounded-full text-xs font-medium ${colors[status] || colors.Menunggu}`}
    >
      {icon}
      {status}
    </span>
  );
}

function StageCard({ title, status, detail }) {
  return (
    <div className="border border-[#E7E1D8] bg-white/90 rounded-xl p-4 shadow-sm hover:shadow-md transition">
      <div className="flex justify-between items-center mb-2">
        <h3 className="font-semibold text-[#45624B]">{title}</h3>
        <StatusBadge status={status} />
      </div>
      <p className="text-sm text-gray-500 mb-3">{detail}</p>
      <Button variant="ghost" size="sm" className="text-[#45624B] hover:text-[#B9914D] px-0">
        Lihat Bukti
      </Button>
    </div>
  );
}
