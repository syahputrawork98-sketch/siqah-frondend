// client/src/components/petugas/kandang/ModalUploadBukti.jsx
import { useState } from "react";
import { UploadCloud, X } from "lucide-react";

export default function ModalUploadBukti({ onClose, onSubmit, proses }) {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [keterangan, setKeterangan] = useState("");

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      setPreview(URL.createObjectURL(selectedFile));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!file) {
      alert("Silakan pilih file bukti terlebih dahulu!");
      return;
    }

    // Simulasi kirim data
    const formData = new FormData();
    formData.append("file", file);
    formData.append("keterangan", keterangan);
    formData.append("id_proses", proses.id_proses);

    // nanti diganti dengan API fetch('/api/petugas-kandang/upload-bukti', { method: 'POST', body: formData })
    console.log("Data dikirim:", {
      id_proses: proses.id_proses,
      file,
      keterangan,
    });

    onSubmit && onSubmit({ id_proses: proses.id_proses, file, keterangan });
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
      <div className="bg-white rounded-xl shadow-lg w-full max-w-md relative p-6 border border-[#eee6da]">
        {/* Tombol tutup */}
        <button
          className="absolute top-3 right-3 text-[#7a7368] hover:text-[#e2b97f] transition"
          onClick={onClose}
        >
          <X size={20} />
        </button>

        {/* Judul */}
        <h3 className="text-lg font-semibold text-[#3b3b3b] mb-2">
          Upload Bukti Proses
        </h3>
        <p className="text-sm text-[#7a7368] mb-4">
          Unggah foto atau dokumen sebagai bukti penyembelihan untuk proses{" "}
          <span className="font-semibold text-[#e2b97f]">
            {proses.id_proses}
          </span>
        </p>

        {/* Form Upload */}
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Input File */}
          <div className="border-2 border-dashed border-[#e2b97f]/40 rounded-lg p-5 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-[#f9f6ef]/40 transition">
            {preview ? (
              <img
                src={preview}
                alt="Preview"
                className="w-40 h-40 object-cover rounded-lg border border-[#eee6da] mb-3"
              />
            ) : (
              <>
                <UploadCloud className="text-[#e2b97f]" size={32} />
                <p className="text-sm text-[#7a7368] mt-2">
                  Klik untuk memilih file bukti
                </p>
              </>
            )}
            <input
              type="file"
              accept="image/*,video/*"
              onChange={handleFileChange}
              className="hidden"
              id="fileUpload"
            />
          </div>

          {/* Input Keterangan */}
          <div>
            <label
              htmlFor="keterangan"
              className="block text-sm font-medium text-[#3b3b3b] mb-1"
            >
              Keterangan
            </label>
            <textarea
              id="keterangan"
              value={keterangan}
              onChange={(e) => setKeterangan(e.target.value)}
              className="w-full border border-[#eee6da] rounded-md p-2 text-sm focus:ring-2 focus:ring-[#e2b97f] focus:outline-none"
              placeholder="Contoh: Penyembelihan berjalan lancar, hewan sehat..."
              rows="3"
            />
          </div>

          {/* Tombol Aksi */}
          <div className="flex justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-sm rounded-md border border-[#eee6da] text-[#7a7368] hover:bg-[#f9f6ef] transition"
            >
              Batal
            </button>
            <button
              type="submit"
              className="px-4 py-2 text-sm rounded-md bg-[#e2b97f] text-white hover:bg-[#d8a862] transition"
            >
              Upload
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
