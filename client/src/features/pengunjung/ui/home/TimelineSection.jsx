// client/src/components/home/TimelineSection.jsx
import React from "react";
import { motion } from "framer-motion";
import {
  FiShoppingCart,
  FiTruck,
  FiHome,
  FiCheckCircle,
  FiScissors,
} from "react-icons/fi";
import { GiGoat, GiCook } from "react-icons/gi";

const TimelineSection = () => {
  const steps = [
    {
      id: 1,
      icon: <FiShoppingCart className="text-3xl text-[#B9914D]" />,
      title: "Pemesanan",
      desc: "Konsumen memesan paket aqiqah sesuai kebutuhan dan budget.",
    },
    {
      id: 2,
      icon: <GiGoat className="text-3xl text-[#B9914D]" />,
      title: "Pemilihan Hewan",
      desc: "Hewan dipilih langsung dari petugas kandang yang terpercaya.",
    },
    {
      id: 3,
      icon: <FiScissors className="text-3xl text-[#B9914D]" />,
      title: "Pemotongan",
      desc: "Proses penyembelihan dilakukan sesuai syariat Islam.",
    },
    {
      id: 4,
      icon: <GiCook className="text-3xl text-[#B9914D]" />,
      title: "Pengolahan Dapur",
      desc: "Tim dapur menyiapkan hidangan dengan cita rasa terbaik.",
    },
    {
      id: 5,
      icon: <FiTruck className="text-3xl text-[#B9914D]" />,
      title: "Pengantaran",
      desc: "Pesanan dikirim tepat waktu oleh kurir Siqah ke rumah Anda.",
    },
    {
      id: 6,
      icon: <FiCheckCircle className="text-3xl text-[#B9914D]" />,
      title: "Selesai",
      desc: "Aqiqah terselenggara dengan lancar, penuh keberkahan. 🤲",
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

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-cormorant font-bold text-[#45624B] mb-4">
            Proses Aqiqah Siqah
          </h2>
          <p className="text-base sm:text-lg text-[#45624B]/80 font-montserrat max-w-2xl mx-auto">
            Kami memastikan setiap tahapan aqiqah berjalan sesuai syariat dan
            penuh keberkahan — dari pemesanan hingga hidangan siap disantap.
          </p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center md:items-start relative"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {/* Garis penghubung horizontal */}
          <div className="hidden md:block absolute top-12 left-0 right-0 h-[2px] bg-[#B9914D]/50 z-0"></div>

          {steps.map((step, index) => (
            <motion.div
              key={step.id}
              className="relative flex flex-col items-center text-center md:w-1/6 mb-10 md:mb-0"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.2,
                duration: 0.8,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
            >
              {/* Icon Circle */}
              <div className="relative z-10 flex items-center justify-center w-16 h-16 bg-white rounded-full border-4 border-[#B9914D] shadow-md mb-4">
                {step.icon}
              </div>

              {/* Connector for mobile */}
              {index !== steps.length - 1 && (
                <div className="block md:hidden w-[2px] h-10 bg-[#B9914D]/50"></div>
              )}

              {/* Title & Desc */}
              <h3 className="text-lg font-bold text-[#45624B] mb-2 font-cormorant">
                {step.title}
              </h3>
              <p className="text-sm text-[#45624B]/80 font-montserrat max-w-[200px]">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TimelineSection;
