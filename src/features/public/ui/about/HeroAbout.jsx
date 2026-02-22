import React from "react";
import { motion } from "framer-motion";

const HeroAbout = () => {
  return (
    <section
      className="relative py-20 px-6 md:px-16 bg-gradient-to-b from-[#fefbf7] to-[#f9f6ef] overflow-hidden"
      style={{
        backgroundImage:
          "url('https://res.cloudinary.com/dcida9qys/image/upload/v1761094380/background-siqah_vcgib5.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed", // 🔥 efek parallax di sini
      }}
    >
      {/* Overlay lembut */}
      <div className="absolute inset-0 bg-white/85 md:bg-white/75 backdrop-blur-[2px]"></div>

      <div className="relative max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 px-6 md:px-10 z-10">
        {/* Bagian Kiri - Teks */}
        <motion.div
          className="flex-1 space-y-6 text-center md:text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-emerald-800 leading-snug">
            Tentang <span className="text-yellow-600">Siqah Aqiqah</span>
          </h1>
          <p className="text-gray-700 text-lg leading-relaxed">
            <span className="font-semibold text-emerald-700">Siqah</span> hadir
            untuk membantu keluarga Muslim menjalankan ibadah aqiqah dan qurban
            dengan cara yang <strong>mudah</strong>, <strong>amanah</strong>, dan
            <strong> sesuai tuntunan syariat</strong>. Kami berkomitmen
            menghadirkan layanan yang profesional, transparan, dan penuh
            keberkahan bagi setiap keluarga.
          </p>
          <motion.a
            href="/layanan"
            className="inline-block bg-emerald-700 hover:bg-emerald-800 text-white font-medium px-6 py-3 rounded-full shadow-md transition duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Lihat Layanan Kami
          </motion.a>
        </motion.div>

        {/* Bagian Kanan - Gambar */}
        <motion.div
          className="flex-1 flex justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <img
            src="https://res.cloudinary.com/dcida9qys/image/upload/v1761098052/Siqah-logo-HD_fpetwm.png"
            alt="Tentang Siqah"
            className="w-72 md:w-[400px] rounded-2xl hover:scale-105 transition-transform duration-500"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroAbout;
