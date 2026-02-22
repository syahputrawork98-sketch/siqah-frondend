// client/src/components/home/AboutSection.jsx
import React from "react";
import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section
      className="relative py-20 px-6 md:px-16 overflow-hidden bg-fixed bg-center bg-cover"
      style={{
        backgroundImage:
          "url('https://res.cloudinary.com/dcida9qys/image/upload/v1761094380/background-siqah_vcgib5.jpg')",
      }}
    >
      {/* Overlay lembut agar teks tetap terbaca */}
      <div className="absolute inset-0 bg-[#45624B]/70 mix-blend-multiply"></div>

      <div className="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center gap-12 md:gap-40">
        {/* LEFT: Logo */}
        <motion.div
          className="basis-1/2 flex justify-center md:justify-end items-center relative"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          {/* Lingkaran cahaya di belakang logo */}
          <div className="absolute w-72 h-72 bg-[#B9914D]/20 rounded-full blur-3xl -z-0"></div>

          {/* Logo utama */}
          <motion.img
            src="https://res.cloudinary.com/dcida9qys/image/upload/v1761098052/Siqah-logo-HD_fpetwm.png"
            alt="Logo Siqah"
            className="w-80 h-50 md:w-80 md:h-70 relative z-10 drop-shadow-2xl"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
          />
        </motion.div>

        {/* RIGHT: Text */}
        <motion.div
          className="basis-1/2 text-center md:text-left text-white"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-cormorant font-bold text-[#B9914D] mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Tentang Siqah
          </motion.h2>

          <motion.p
            className="text-base sm:text-lg font-montserrat leading-relaxed text-gray-100/90 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Siqah lahir dari doa dan harapan para orang tua Muslim yang ingin
            menjalankan aqiqah dengan mudah, amanah, dan penuh keberkahan.
            <br />
            <br />
            Sejak tahun <span className="text-[#B9914D] font-semibold">2025</span> di Bandung,
            kami berkomitmen menghadirkan layanan aqiqah yang praktis, syar’i, dan berkesan —
            mulai dari perawatan hewan, proses penyembelihan sesuai sunnah, hingga pengantaran
            hidangan terbaik untuk keluarga Anda.
          </motion.p>

          <motion.div
            className="flex justify-center md:justify-start"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <a
              href="#tentang"
              className="bg-[#B9914D] hover:bg-[#a37f3e] text-white font-semibold px-6 py-3 rounded-full shadow-md transition"
            >
              Baca Lebih Lanjut
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
