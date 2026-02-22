import React from "react";
import { motion } from "framer-motion";
import {
  GiGoat,
  GiMeatCleaver,
  GiCookingPot,
  GiBoxUnpacking,
  GiDeliveryDrone,
} from "react-icons/gi";

const processes = [
  {
    icon: <GiGoat className="text-5xl text-[#B9914D]" />,
    title: "Pemilihan Hewan",
    desc: "Konsumen memilih hewan terbaik dari peternakan Siqah yang sehat dan terverifikasi.",
  },
  {
    icon: <GiMeatCleaver className="text-5xl text-[#B9914D]" />,
    title: "Pemotongan Sesuai Syariat",
    desc: "Proses penyembelihan dilakukan oleh juru sembelih bersertifikat sesuai tuntunan syariat Islam.",
  },
  {
    icon: <GiCookingPot className="text-5xl text-[#B9914D]" />,
    title: "Pengolahan di Dapur Siqah",
    desc: "Daging diolah oleh tim dapur profesional menjadi hidangan lezat dan higienis.",
  },
  {
    icon: <GiBoxUnpacking className="text-5xl text-[#B9914D]" />,
    title: "Pengemasan Aman",
    desc: "Setiap hidangan dikemas rapi dan higienis agar tetap segar saat diterima.",
  },
  {
    icon: <GiDeliveryDrone className="text-5xl text-[#B9914D]" />,
    title: "Pengantaran ke Lokasi",
    desc: "Pesanan dikirim langsung oleh kurir Siqah dengan sistem pelacakan modern.",
  },
];

const ProcessSection = () => {
  return (
    <section
      className="relative py-24 bg-[#45624B] text-center overflow-hidden"
      style={{
        backgroundImage:
          'url("https://res.cloudinary.com/dcida9qys/image/upload/v1761094380/background-siqah_vcgib5.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Overlay gradasi lembut */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#45624B]/95 via-[#45624B]/80 to-[#45624B]/95" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-white">
        {/* Judul */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#B9914D]">
            Proses Layanan Siqah
          </h2>
          <p className="text-lg text-gray-100 max-w-2xl mx-auto leading-relaxed">
            Kami memastikan setiap tahap dilakukan dengan penuh amanah, transparansi, dan profesionalisme.
          </p>
        </motion.div>

        {/* Timeline proses */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-12 md:gap-6 flex-wrap">
          {processes.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-md rounded-2xl p-6 flex flex-col items-center text-center w-full md:w-[18%] hover:bg-white/20 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="mb-4">{step.icon}</div>
              <h3 className="text-lg font-semibold text-[#FFD88D] mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-gray-200 leading-relaxed">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
