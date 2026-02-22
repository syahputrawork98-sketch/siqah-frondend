import React from "react";
import { motion } from "framer-motion";

const CTASection = () => {
  return (
    <section
      className="relative py-24 flex items-center justify-center text-center overflow-hidden"
      style={{
        backgroundImage:
          'url("https://res.cloudinary.com/dcida9qys/image/upload/v1761094380/background-siqah_vcgib5.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Overlay hijau gelap transparan */}
      <div className="absolute inset-0 bg-[#45624B]/90" />

      <motion.div
        className="relative z-10 max-w-3xl mx-auto px-6 text-white"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        {/* Judul utama */}
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#B9914D] drop-shadow-lg">
          Siap Memulai Aqiqah Bersama Siqah?
        </h2>

        {/* Deskripsi singkat */}
        <p className="text-lg md:text-xl text-gray-100 mb-10 leading-relaxed max-w-2xl mx-auto">
          Wujudkan momen penuh berkah dan kebahagiaan keluarga Anda dengan layanan aqiqah yang 
          <span className="text-[#B9914D] font-semibold"> amanah, profesional, dan sesuai syariat.</span>
        </p>

        {/* Tombol CTA */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <motion.a
            href="/kontak"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#B9914D] hover:bg-[#a47e3a] text-white px-8 py-3 rounded-xl font-semibold shadow-md transition"
          >
            Konsultasi Sekarang
          </motion.a>

          <motion.a
            href="/paket"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border border-white px-8 py-3 rounded-xl font-semibold hover:bg-white hover:text-[#45624B] transition"
          >
            Lihat Paket Aqiqah
          </motion.a>
        </div>
      </motion.div>

      {/* Gradasi lembut bawah */}
      <div className="absolute bottom-0 left-0 w-full h-24 " />
    </section>
  );
};

export default CTASection;
