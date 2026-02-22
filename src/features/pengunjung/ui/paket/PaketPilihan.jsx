// client/src/components/paket/PaketPilihan.jsx
import React from "react";
import { motion } from "framer-motion";

const PaketPilihan = () => {
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

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.h2
          className="text-3xl md:text-5xl font-cormorant font-bold text-[#F8F8F5] mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Buat Paket Aqiqah Sesuai Keinginan Anda
        </motion.h2>
        <motion.p
          className="text-lg md:text-xl font-montserrat text-gray-100 mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Pilih menu, jumlah hewan, dan layanan tambahan sesuai kebutuhan
          keluarga Anda. Kami siap membantu mewujudkan paket aqiqah yang
          sempurna dan sesuai syariat.
        </motion.p>

        <motion.button
          className="px-8 py-4 bg-[#B9914D] text-[#45624B] font-bold text-lg rounded-full shadow-lg hover:shadow-xl hover:bg-[#d1a759] transition-all duration-300"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Buat Paket Saya
        </motion.button>
      </div>
    </section>
  );
};

export default PaketPilihan;
