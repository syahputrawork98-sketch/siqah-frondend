// client/src/pages/petugas/kandang/DaftarTugasKandang.jsx
import { useState } from "react";
import { Card, CardHeader, CardContent } from "../../../components/ui/Card";
import { Eye, Edit3, UploadCloud } from "lucide-react";
import Modal from "../../../components/ui/Modal";
import ModalUploadBukti from "../../../components/petugas/kandang/ModalUploadBukti";

const dummyTugas = [
  {
    id_proses: "PR-00121",
    id_hewan: "HW-202",
    jenis_hewan: "Kambing Jawa",
    kandang: "Kandang A",
    tanggal_mulai: "2025-11-01",
    status: "Menunggu",
  },
  {
    id_proses: "PR-00120",
    id_hewan: "HW-198",
    jenis_hewan: "Domba Garut",
    kandang: "Kandang B",
    tanggal_mulai: "2025-10-31",
    status: "Proses",
  },
  {
    id_proses: "PR-00119",
    id_hewan: "HW-192",
    jenis_hewan: "Kambing Etawa",
    kandang: "Kandang A",
    tanggal_mulai: "2025-10-30",
    status: "Selesai",
  },
];

export default function DaftarTugasKandang() {
  const [data, setData] = useState(dummyTugas);
  const [selected, setSelected] = useState(null);
  const [showDetail, setShowDetail] = useState(false);
  const [showStatus, setShowStatus] = useState(false);
  const [showUpload, setShowUpload] = useState(false);

  const openDetail = (item) => {
    setSelected(item);
    setShowDetail(true);
  };

  const openStatusModal = (item) => {
    setSelected(item);
    setShowStatus(true);
  };

  const openUploadModal = (item) => {
    setSelected(item);
    setShowUpload(true);
  };

  const handleUpdateStatus = (statusBaru) => {
    setData((prev) =>
      prev.map((item) =>
        item.id_proses === selected.id_proses
          ? { ...item, status: statusBaru }
          : item
      )
    );
    setShowStatus(false);
  };

  const handleUploadBukti = (dataUpload) => {
    console.log("Bukti berhasil diupload:", dataUpload);
    // nanti bisa dikirim ke API
  };

  return (
    <div className="space-y-6">
      {/* Judul Halaman */}
      <div>
        <h2 className="text-xl font-semibold text-[#3b3b3b] tracking-wide">
          Daftar <span className="text-[#e2b97f]">Tugas Kandang</span>
        </h2>
        <p className="text-sm text-[#7a7368]">
          Berikut daftar tugas penyembelihan dan perawatan hewan yang sedang
          berlangsung.
        </p>
      </div>

      {/* Tabel Daftar Tugas */}
      <Card className="bg-white/80 backdrop-blur-md border border-[#eee6da] shadow-sm">
        <CardHeader>
          <h3 className="text-lg font-semibold text-[#3b3b3b]">
            Tugas Proses Kandang
          </h3>
          <p className="text-sm text-[#7a7368]">
            Data proses dari tabel <code>tb_proses_kandang</code>.
          </p>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse">
              <thead>
                <tr className="text-left text-sm text-[#7a7368] border-b border-[#eee6da]">
                  <th className="py-2 px-3">ID Proses</th>
                  <th className="py-2 px-3">Jenis Hewan</th>
                  <th className="py-2 px-3">Kandang</th>
                  <th className="py-2 px-3">Tanggal</th>
                  <th className="py-2 px-3">Status</th>
                  <th className="py-2 px-3 text-center">Aksi</th>
                </tr>
              </thead>
              <tbody>
                {data.map((item) => (
                  <tr
                    key={item.id_proses}
                    className="text-sm text-[#3b3b3b] border-b border-[#f0ebe2] hover:bg-[#f9f6ef]/60 transition"
                  >
                    <td className="py-2 px-3 font-medium">{item.id_proses}</td>
                    <td className="py-2 px-3">{item.jenis_hewan}</td>
                    <td className="py-2 px-3">{item.kandang}</td>
                    <td className="py-2 px-3">{item.tanggal_mulai}</td>
                    <td className="py-2 px-3">
                      <StatusBadge status={item.status} />
                    </td>
                    <td className="py-2 px-3 flex justify-center gap-3">
                      <button
                        onClick={() => openDetail(item)}
                        className="p-2 rounded-md hover:bg-[#f9f6ef]"
                        title="Lihat Detail"
                      >
                        <Eye size={18} className="text-[#e2b97f]" />
                      </button>
                      <button
                        onClick={() => openStatusModal(item)}
                        className="p-2 rounded-md hover:bg-[#f9f6ef]"
                        title="Update Status"
                      >
                        <Edit3 size={18} className="text-[#7a7368]" />
                      </button>
                      <button
                        onClick={() => openUploadModal(item)}
                        className="p-2 rounded-md hover:bg-[#f9f6ef]"
                        title="Upload Bukti"
                      >
                        <UploadCloud size={18} className="text-[#3b3b3b]" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Modal Detail */}
      {showDetail && selected && (
        <Modal
          isOpen={showDetail}
          title="Detail Proses Kandang"
          onClose={() => setShowDetail(false)}
        >
          <div className="space-y-3 text-sm text-[#3b3b3b]">
            <p>
              <strong>ID Proses:</strong> {selected.id_proses}
            </p>
            <p>
              <strong>Jenis Hewan:</strong> {selected.jenis_hewan}
            </p>
            <p>
              <strong>Kandang:</strong> {selected.kandang}
            </p>
            <p>
              <strong>Tanggal Mulai:</strong> {selected.tanggal_mulai}
            </p>
            <p>
              <strong>Status:</strong>{" "}
              <StatusBadge status={selected.status} />
            </p>
          </div>
        </Modal>
      )}

      {/* Modal Update Status */}
      {showStatus && selected && (
        <Modal
          isOpen={showStatus}
          title="Update Status Tugas"
          onClose={() => setShowStatus(false)}
        >
          <div className="space-y-4 text-sm">
            <p className="text-[#3b3b3b]">
              Pilih status terbaru untuk proses <b>{selected.id_proses}</b>:
            </p>
            <div className="flex gap-3">
              {["Menunggu", "Proses", "Selesai"].map((status) => (
                <button
                  key={status}
                  onClick={() => handleUpdateStatus(status)}
                  className={`px-4 py-2 rounded-md border text-sm font-medium transition ${
                    selected.status === status
                      ? "bg-[#e2b97f] text-white border-[#e2b97f]"
                      : "border-[#eee6da] hover:bg-[#f9f6ef]"
                  }`}
                >
                  {status}
                </button>
              ))}
            </div>
          </div>
        </Modal>
      )}

      {/* ✅ Modal Upload Bukti */}
      {showUpload && selected && (
        <ModalUploadBukti
          proses={selected}
          onClose={() => setShowUpload(false)}
          onSubmit={handleUploadBukti}
        />
      )}
    </div>
  );
}

/* ---------- Komponen tambahan ---------- */
function StatusBadge({ status }) {
  const base = "px-2 py-1 rounded-full text-xs font-semibold";
  switch (status) {
    case "Menunggu":
      return <span className={`${base} bg-yellow-100 text-yellow-700`}>{status}</span>;
    case "Proses":
      return <span className={`${base} bg-blue-100 text-blue-700`}>{status}</span>;
    case "Selesai":
      return <span className={`${base} bg-green-100 text-green-700`}>{status}</span>;
    default:
      return <span className={`${base} bg-gray-100 text-gray-700`}>{status}</span>;
  }
}
