// client/src/components/home/PaketSection.jsx
import React from "react";
import { motion } from "framer-motion";

const PaketSection = () => {
  const paketData = [
    {
      id: 1,
      nama: "Paket Aqiqah Premium",
      harga: "Rp3.000.000",
      deskripsi:
        "Daging kambing pilihan, sate & gulai, lengkap dengan nasi kebuli.",
      gambar:
        "https://res.cloudinary.com/dcida9qys/image/upload/v1761262212/paket-premium_y5pyhe.jpg",
    },
    {
      id: 2,
      nama: "Paket Aqiqah Standar",
      harga: "Rp2.400.000",
      deskripsi: "Pilihan ekonomis dengan rasa tetap nikmat dan syar’i.",
      gambar:
        "https://res.cloudinary.com/dcida9qys/image/upload/v1761262212/paket-standar_wzcoek.jpg",
    },
    {
      id: 3,
      nama: "Paket Aqiqah Hemat",
      harga: "Rp1.800.000",
      deskripsi:
        "Cocok untuk keluarga kecil yang ingin tetap penuh keberkahan.",
      gambar:
        "https://res.cloudinary.com/dcida9qys/image/upload/v1761262212/paket-hemat_ebt8wa.jpg",
    },
  ];

  return (
    <section
      id="paket"
      className="relative py-20 px-6 md:px-16 bg-gradient-to-b from-[#fefbf7] to-[#f9f6ef] overflow-hidden"
      style={{
        backgroundImage:
          "url('https://res.cloudinary.com/dcida9qys/image/upload/v1761094380/background-siqah_vcgib5.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed", // 🔥 efek parallax di sini
      }}
    >
      {/* Overlay lembut agar teks tetap jelas */}
      <div className="absolute inset-0 bg-white/70"></div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* TEXT HEADER */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-cormorant font-bold text-[#45624B] mb-4">
            Pilihan Paket Aqiqah
          </h2>
          <p className="text-base sm:text-lg text-[#45624B]/80 font-montserrat max-w-2xl mx-auto">
            Kami menyediakan beragam paket aqiqah yang dirancang dengan cinta —
            untuk membantu keluarga Muslim merayakan kelahiran dengan penuh
            berkah dan kemudahan.
          </p>
        </motion.div>

        {/* GRID CARD PAKET */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {paketData.map((paket, index) => (
            <motion.div
              key={paket.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 border border-[#B9914D]/20"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.2,
                duration: 0.8,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
            >
              <div className="relative">
                <img
                  src={paket.gambar}
                  alt={paket.nama}
                  className="w-full h-56 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              </div>

              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-[#45624B] mb-2 font-cormorant">
                  {paket.nama}
                </h3>
                <p className="text-[#45624B]/80 font-montserrat mb-3">
                  {paket.deskripsi}
                </p>
                <p className="text-[#B9914D] font-bold mb-4 text-lg">
                  {paket.harga}
                </p>

                <motion.a
                  href="#transaksi"
                  className="inline-block bg-[#B9914D] hover:bg-[#a37f3e] text-white font-semibold px-6 py-2 rounded-full shadow-md transition"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Pesan Sekarang
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PaketSection;
