// client/src/components/home/HeroSection.jsx
import React from "react";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative flex flex-col-reverse md:flex-row items-center justify-center gap-10 md:gap-20 px-6 md:px-16 py-20 bg-gradient-to-br from-[#fefbf7] to-[#f9f6ef] overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1716047866102-ec21d084fe0e?q=80&w=1170&auto=format&fit=crop"
          alt="Background Siqah"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#45624B]/80 via-[#45624B]/60 to-[#B9914D]/50 mix-blend-multiply"></div>
      </div>

      {/* Text Content */}
      <motion.div
        className="relative z-10 text-center md:text-center max-w-xl text-white "
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <motion.h1
          className="text-4xl md:text-5xl font-cormorant font-bold leading-tight mb-4 drop-shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
        >
          Rayakan Kelahiran Si Kecil <br />
          dengan Aqiqah yang Penuh Berkah
        </motion.h1>

        <motion.p
          className="text-lg text-gray-100 mb-6 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Siqah menghadirkan layanan aqiqah yang praktis, syar’i, dan hangat —
          dari pemilihan hewan hingga pengantaran ke rumah Anda dengan penuh amanah.
        </motion.p>

        <motion.div
          className="flex justify-center md:justify-center gap-4 "
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
        >
          <a
            href="#paket"
            className="bg-[#B9914D] text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-[#a6823e] transition"
          >
            Lihat Paket Aqiqah
          </a>
          <a
            href="#kontak"
            className="border border-white text-white font-semibold px-6 py-3 rounded-full hover:bg-white/10 transition"
          >
            Hubungi Kami
          </a>
        </motion.div>
      </motion.div>

      {/* Video Section */}
      <motion.div
        className="relative z-10 md:w-1/2 flex justify-center"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.6, duration: 1 }}
      >
        <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white/70">
          {/* Soft Glow Animation (diletakkan di bawah video) */}
          <motion.div
            className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-[#ffffff33] to-transparent z-10"
            animate={{
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Video */}
          <video
            src="https://res.cloudinary.com/dcida9qys/video/upload/v1761261096/White_Minimalist_Morning_Routine_Mobile_Video_1_a04fes.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="relative z-10 w-[90%] md:w-[500px] h-[300px] md:h-[400px] object-cover mx-auto rounded-3xl"
          />

          {/* Floating Badge (di atas segalanya) */}
          <motion.div
            className="absolute top-4 right-4 bg-[#B9914D] text-white px-4 py-2 rounded-full text-sm shadow-md backdrop-blur-md z-20"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.2, duration: 0.5 }}
          >
            🕋 Amanah & Halal
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
