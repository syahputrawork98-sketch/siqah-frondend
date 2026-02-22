// client/src/components/home/TimSection.jsx
import React from "react";
import { motion } from "framer-motion";

const teamMembers = [
  {
    id: 1,
    nama: "Ahmad Fauzi",
    role: "Petugas Kandang",
    img: "https://res.cloudinary.com/dcida9qys/image/upload/v1761263221/team-kandang_tzqlbo.jpg",
    quote: "Merawat hewan dengan penuh tanggung jawab dan kasih sayang.",
  },
  {
    id: 2,
    nama: "Siti Rahmah",
    role: "Petugas Dapur",
    img: "https://res.cloudinary.com/dcida9qys/image/upload/v1761263221/team-dapur_f3e0ro.jpg",
    quote: "Menyiapkan hidangan aqiqah dengan cita rasa terbaik dan penuh keberkahan.",
  },
  {
    id: 3,
    nama: "Rizky Pratama",
    role: "Kurir Siqah",
    img: "https://res.cloudinary.com/dcida9qys/image/upload/v1761263221/team-kurir_rjhecz.jpg",
    quote: "Mengantar pesanan aqiqah Anda dengan aman, cepat, dan ramah.",
  },
  {
    id: 4,
    nama: "Nur Aulia",
    role: "Admin & Layanan Pelanggan",
    img: "https://res.cloudinary.com/dcida9qys/image/upload/v1761263221/team-admin_wtrdcj.jpg",
    quote: "Membantu setiap pelanggan dengan pelayanan yang jujur dan amanah.",
  },
];

const TimSection = () => {
  return (
    <section className="relative py-20 px-6 md:px-16 bg-gradient-to-b from-[#f9f6ef] to-[#fefbf7] overflow-hidden"
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
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-cormorant font-bold text-[#45624B] mb-4">
            Tim Amanah Siqah
          </h2>
          <p className="text-base sm:text-lg text-[#45624B]/80 font-montserrat max-w-2xl mx-auto">
            Di balik setiap proses aqiqah yang lancar, ada tim yang bekerja
            dengan tulus dan penuh dedikasi untuk menghadirkan keberkahan bagi
            keluarga Anda.
          </p>
        </motion.div>

        {/* Grid Tim */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {teamMembers.map((person, index) => (
            <motion.div
              key={person.id}
              className="bg-white rounded-3xl shadow-lg p-6 flex flex-col items-center text-center hover:shadow-2xl transition"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
            >
              {/* Foto */}
              <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-[#B9914D]/80 mb-4">
                <img
                  src={person.img}
                  alt={person.nama}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Nama & Role */}
              <h3 className="text-lg font-cormorant font-bold text-[#45624B] mb-1">
                {person.nama}
              </h3>
              <p className="text-sm text-[#B9914D] font-semibold mb-3">
                {person.role}
              </p>

              {/* Quote */}
              <p className="text-sm text-[#45624B]/80 font-montserrat leading-relaxed">
                “{person.quote}”
              </p>

              {/* Subtle glow hover */}
              <motion.div
                className="absolute inset-0 rounded-3xl bg-gradient-to-t from-[#ffffff33] to-transparent opacity-0 hover:opacity-100 transition duration-500"
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

export default TimSection;
