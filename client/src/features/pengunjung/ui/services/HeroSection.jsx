// client/src/components/services/HeroSection.jsx
import React from "react";
import { motion } from "framer-motion";
import { GiGoat, GiCookingPot, GiDeliveryDrone } from "react-icons/gi";

const HeroSection = () => {
  return (
    <section
      className="relative w-full min-h-screen flex items-center justify-center bg-cover bg-center overflow-hidden"
      style={{
        backgroundImage:
          'url("https://res.cloudinary.com/dcida9qys/image/upload/v1761094380/background-siqah_vcgib5.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Overlay hijau gelap transparan — sama dengan CTASection */}
      <div className="absolute inset-0 bg-[#45624B]/90" />

      <div className="relative z-10 w-full max-w-7xl px-8 py-20 flex flex-col md:flex-row items-center justify-between gap-12 text-white">
        {/* === Kiri: Teks utama === */}
        <motion.div
          className="md:w-1/2 text-center"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight text-[#B9914D] drop-shadow-xl">
            Layanan Aqiqah & Qurban Terpadu
          </h1>

          <p className="text-lg md:text-xl text-gray-100 mb-10 leading-relaxed">
            Siqah menghadirkan sistem layanan{" "}
            <span className="text-[#B9914D] font-semibold">terintegrasi</span> — 
            mulai dari pemilihan hewan di kandang, pengolahan di dapur, hingga pengantaran oleh kurir terpercaya.
          </p>

          <div className="flex gap-4 justify-center items-center">
            <motion.a
              href="#layanan"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#B9914D] hover:bg-[#a47e3a] text-white px-6 py-3 rounded-xl font-semibold shadow-md transition"
            >
              Jelajahi Layanan
            </motion.a>

            <motion.a
              href="/paket"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border border-white px-6 py-3 rounded-xl font-semibold hover:bg-white hover:text-[#45624B] transition"
            >
              Lihat Paket
            </motion.a>
          </div>
        </motion.div>

        {/* === Kanan: Ikon proses === */}
        <motion.div
          className="md:w-1/2 flex flex-col md:flex-row justify-center items-center md:items-end gap-10"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.3 }}
        >
          {/* Peternakan */}
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="flex flex-col items-center text-center"
          >
            <div className="text-6xl text-[#B9914D] mb-3">
              <GiGoat />
            </div>
            <h4 className="font-semibold text-lg">Peternakan Amanah</h4>
            <p className="text-sm text-gray-200 text-center w-40">
              Hewan sehat dari kandang terverifikasi.
            </p>
          </motion.div>

          {/* Dapur */}
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="flex flex-col items-center text-center"
          >
            <div className="text-6xl text-[#B9914D] mb-3">
              <GiCookingPot />
            </div>
            <h4 className="font-semibold text-lg">Dapur Profesional</h4>
            <p className="text-sm text-gray-200 text-center w-40">
              Diolah oleh juru masak berpengalaman.
            </p>
          </motion.div>

          {/* Kurir */}
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="flex flex-col items-center text-center"
          >
            <div className="text-6xl text-[#B9914D] mb-3">
              <GiDeliveryDrone />
            </div>
            <h4 className="font-semibold text-lg">Pengantaran Tepat Waktu</h4>
            <p className="text-sm text-gray-200 text-center w-40">
              Dikirim aman ke lokasi Anda.
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Gradasi lembut bawah */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/30 to-transparent" />
    </section>
  );
};

export default HeroSection;
