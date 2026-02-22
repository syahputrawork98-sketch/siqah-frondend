import React from "react";
import { motion } from "framer-motion";

const PaketSection = () => {
  const paketList = [
    {
      id: "PKT-001",
      nama: "Paket Aqiqah Premium",
      deskripsi: "Berisi sate kambing, gulai, dan nasi kebuli.",
      harga: 3000000,
      foto: "https://placehold.co/400",
    },
    {
      id: "PKT-002",
      nama: "Paket Aqiqah Hemat",
      deskripsi: "Paket ekonomis dengan cita rasa lezat.",
      harga: 2000000,
      foto: "https://placehold.co/400",
    },
    {
      id: "PKT-003",
      nama: "Paket Aqiqah Keluarga",
      deskripsi: "Paket lengkap untuk keluarga besar.",
      harga: 4000000,
      foto: "https://placehold.co/400",
    },
  ];

  return (
    <section
      className="relative py-20 px-6 md:px-16 bg-gradient-to-b from-[#fefbf7] to-[#f9f6ef] overflow-hidden"
      style={{
        backgroundImage:
          "url('https://res.cloudinary.com/dcida9qys/image/upload/v1761094380/background-siqah_vcgib5.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed", // ðŸ”¥ efek parallax di sini
      }}
    >
      {/* Overlay gradasi lembut */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-[#45624B]/20 to-white/40" />



      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Judul Section */}
        <motion.h2
          className="text-4xl md:text-5xl font-cormorant font-bold text-[#45624B] mb-12 mx-auto text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Daftar Paket Aqiqah Siqah
        </motion.h2>

        {/* Grid Paket */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 ">
          {paketList.map((paket, index) => (
            <motion.div
              key={paket.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl shadow-md overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="relative w-full h-56">
                <img
                  src={paket.foto}
                  alt={paket.nama}
                  className="w-full h-full object-cover rounded-t-3xl"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-2xl font-cormorant text-[#45624B] mb-2">
                  {paket.nama}
                </h3>
                <p className="text-gray-700 mb-4 text-sm md:text-base">
                  {paket.deskripsi}
                </p>
                <p className="text-xl font-bold siqah-public-accent mb-4">
                  Rp {paket.harga.toLocaleString("id-ID")}
                </p>
                <button className="px-6 py-2 siqah-public-btn">
                  Lihat Detail
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PaketSection;

