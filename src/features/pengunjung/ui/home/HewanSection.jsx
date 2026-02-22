// client/src/components/home/HewanSection.jsx
import React from "react";
import { motion } from "framer-motion";
import { GiGoat, GiCow } from "react-icons/gi";
import { FaCheckCircle } from "react-icons/fa";

const HewanSection = () => {
  const hewanList = [
    {
      id: 1,
      nama: "Kambing Jawa Super",
      berat: "25-30 kg",
      harga: "Rp 2.450.000",
      img: "https://res.cloudinary.com/dcida9qys/image/upload/v1761097682/goat-1_vpqckt.jpg",
      ready: true,
    },
    {
      id: 2,
      nama: "Kambing Etawa Premium",
      berat: "30-35 kg",
      harga: "Rp 2.950.000",
      img: "https://res.cloudinary.com/dcida9qys/image/upload/v1761097701/goat-2_fpt7xt.jpg",
      ready: true,
    },
    {
      id: 3,
      nama: "Domba Garut Pilihan",
      berat: "28-33 kg",
      harga: "Rp 2.750.000",
      img: "https://res.cloudinary.com/dcida9qys/image/upload/v1761097715/goat-3_lrrmbl.jpg",
      ready: true,
    },
  ];

  return (
    <section
      className="relative py-20 px-6 md:px-16 bg-gradient-to-b from-[#f9f6ef] to-[#fefbf7] overflow-hidden"
      style={{
        backgroundImage:
          "url('https://res.cloudinary.com/dcida9qys/image/upload/v1761094380/background-siqah_vcgib5.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed", // 🔥 Efek parallax
      }}
    >
      {/* Overlay lembut agar teks tetap terbaca */}
      <div className="absolute inset-0 bg-white/70"></div>

      
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        {/* Header */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-cormorant font-bold text-[#45624B] mb-4">
            Pilihan Hewan Aqiqah
          </h2>
          <p className="text-base sm:text-lg text-[#45624B]/80 font-montserrat max-w-2xl mx-auto">
            Semua hewan kami dirawat dengan baik dan disembelih sesuai tuntunan syariat Islam.
            Anda dapat memilih sesuai kebutuhan keluarga dan paket aqiqah Anda.
          </p>
        </motion.div>

        {/* Grid Hewan */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {hewanList.map((hewan, index) => (
            <motion.div
              key={hewan.id}
              className="relative bg-white rounded-3xl shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
            >
              {/* Gambar Hewan */}
              <div className="relative">
                <img
                  src={hewan.img}
                  alt={hewan.nama}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Badge Ready */}
                {hewan.ready && (
                  <div className="absolute top-4 left-4 bg-[#B9914D] text-white px-3 py-1 rounded-full text-xs font-semibold shadow-md">
                    <FaCheckCircle className="inline-block mr-1 mb-[2px]" />
                    Siap Aqiqah
                  </div>
                )}
              </div>

              {/* Detail Hewan */}
              <div className="p-6 text-center">
                <h3 className="text-xl font-cormorant font-bold text-[#45624B] mb-2">
                  {hewan.nama}
                </h3>
                <p className="text-sm text-[#45624B]/80 mb-1">
                  Berat: {hewan.berat}
                </p>
                <p className="text-lg font-bold text-[#B9914D]">{hewan.harga}</p>

                {/* CTA */}
                <button className="mt-4 bg-[#45624B] text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-[#39523d] transition">
                  Pilih Sekarang
                </button>
              </div>

              {/* Soft Glow Effect */}
              <motion.div
                className="absolute inset-0 rounded-3xl bg-gradient-to-t from-[#ffffff33] to-transparent opacity-0 group-hover:opacity-100 transition duration-500"
                animate={{
                  opacity: [0.2, 0.4, 0.2],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HewanSection;
