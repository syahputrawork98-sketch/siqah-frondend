// client/src/components/home/CTASection.jsx
import React from "react";
import { motion } from "framer-motion";

const CTASection = () => {
  return (
    <section
      className="relative py-24 px-6 md:px-16 text-center overflow-hidden bg-fixed bg-center bg-cover"
      style={{
        backgroundImage:
          "url('https://res.cloudinary.com/dcida9qys/image/upload/v1761094380/background-siqah_vcgib5.jpg')",
      }}
    >
      {/* Overlay hijau lembut */}
      <div className="absolute inset-0 bg-[#45624B]/75 mix-blend-multiply"></div>

      <div className="relative z-10 max-w-4xl mx-auto text-white">
        {/* Judul */}
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-cormorant font-bold text-[#B9914D] mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Wujudkan Aqiqah Penuh Berkah Bersama Siqah
        </motion.h2>

        {/* Deskripsi */}
        <motion.p
          className="text-base sm:text-lg font-montserrat text-gray-100 mb-10 leading-relaxed max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          viewport={{ once: true }}
        >
          Percayakan momen berharga keluarga Anda pada Siqah — layanan aqiqah
          yang syar’i, terpercaya, dan siap memberikan pengalaman terbaik dari
          kandang hingga rumah.
        </motion.p>

        {/* Tombol CTA */}
        <motion.div
          className="flex flex-col sm:flex-row justify-center items-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
          viewport={{ once: true }}
        >
          <a
            href="#paket"
            className="bg-[#B9914D] hover:bg-[#a37f3e] text-white font-semibold px-8 py-3 rounded-full shadow-md transition"
          >
            Lihat Paket Aqiqah
          </a>
          <a
            href="#kontak"
            className="bg-[#B9914D] hover:bg-[#a37f3e] text-white font-semibold px-8 py-3 rounded-full shadow-md transition"
          >
            Konsultasi Sekarang
          </a>
        </motion.div>
      </div>

      {/* Soft floating glow */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-t from-[#ffffff22] to-transparent rounded-none"
        animate={{ opacity: [0.2, 0.4, 0.2] }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </section>
  );
};

export default CTASection;
