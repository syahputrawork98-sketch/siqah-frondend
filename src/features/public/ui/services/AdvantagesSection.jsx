import React from "react";
import { motion } from "framer-motion";
import {
  FaHandsHelping,
  FaMosque,
  FaShieldAlt,
  FaUserCheck,
  FaSmileBeam,
} from "react-icons/fa";

const advantages = [
  {
    icon: <FaMosque className="text-4xl text-[#B9914D]" />,
    title: "Sesuai Syariat Islam",
    desc: "Seluruh proses aqiqah dan qurban dilaksanakan dengan tuntunan syariat yang benar dan diawasi langsung oleh ahlinya.",
  },
  {
    icon: <FaHandsHelping className="text-4xl text-[#B9914D]" />,
    title: "Amanah & Transparan",
    desc: "Setiap tahap dapat dipantau melalui sistem pelacakan Siqah agar pelanggan selalu merasa tenang dan percaya.",
  },
  {
    icon: <FaShieldAlt className="text-4xl text-[#B9914D]" />,
    title: "Kualitas Terjamin",
    desc: "Dari pemilihan hewan hingga hidangan akhir, semua dilakukan dengan kontrol mutu tinggi untuk hasil terbaik.",
  },
  {
    icon: <FaUserCheck className="text-4xl text-[#B9914D]" />,
    title: "Tim Profesional",
    desc: "Dikelola oleh tenaga ahli dari peternakan, dapur, hingga kurir yang bekerja penuh tanggung jawab.",
  },
  {
    icon: <FaSmileBeam className="text-4xl text-[#B9914D]" />,
    title: "Kepuasan Pelanggan",
    desc: "Kami berkomitmen memberikan pengalaman aqiqah yang mudah, nyaman, dan penuh keberkahan.",
  },
];

const AdvantagesSection = () => {
  return (
    <section
      className="relative py-24 text-center overflow-hidden"
      style={{
        backgroundImage:
          'url("https://res.cloudinary.com/dcida9qys/image/upload/v1761094380/background-siqah_vcgib5.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Overlay gradasi lembut */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-[#45624B]/20 to-white/40" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Judul */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#45624B] mb-4">
            Mengapa Memilih Siqah?
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
            Siqah hadir untuk memberikan ketenangan hati bagi setiap keluarga Muslim melalui layanan yang amanah, profesional, dan penuh keberkahan.
          </p>
        </motion.div>

        {/* Daftar Keunggulan */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {advantages.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-md p-8 flex flex-col items-center text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              {item.icon}
              <h3 className="text-xl font-semibold text-[#45624B] mt-4 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;
