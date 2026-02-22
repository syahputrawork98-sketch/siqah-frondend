import React from "react";
import { motion } from "framer-motion";

const values = [
  {
    title: "Amanah",
    icon: "🤝",
    color: "text-yellow-600",
    description:
      "Kami menjaga kepercayaan setiap pelanggan dengan menjalankan proses aqiqah secara jujur, bertanggung jawab, dan sesuai janji.",
  },
  {
    title: "Syar’i",
    icon: "🕌",
    color: "text-emerald-700",
    description:
      "Setiap tahapan dilakukan sesuai tuntunan Islam — mulai dari pemilihan hewan, penyembelihan, hingga distribusi hasil aqiqah.",
  },
  {
    title: "Transparansi",
    icon: "🔍",
    color: "text-yellow-600",
    description:
      "Dengan sistem digital Siqah, pelanggan dapat memantau progres aqiqah secara langsung — dari kandang, dapur, hingga pengiriman.",
  },
  {
    title: "Kualitas",
    icon: "🌿",
    color: "text-emerald-700",
    description:
      "Kami menjamin kualitas terbaik dalam setiap aspek: hewan sehat, dapur higienis, dan cita rasa masakan yang lezat serta berkah.",
  },
];

const ValuesSection = () => {
  return (
    <section
      className="relative py-20 px-6 md:px-16 bg-gradient-to-b from-[#fefbf7] to-[#f9f6ef] overflow-hidden"
      style={{
        backgroundImage:
          "url('https://res.cloudinary.com/dcida9qys/image/upload/v1761094380/background-siqah_vcgib5.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed", // 🔥 efek parallax di sini
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-white/85 md:bg-white/75 backdrop-blur-[2px]"></div>

      <div className="relative max-w-6xl mx-auto px-6 md:px-10 z-10 text-center space-y-16">
        {/* Judul Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-emerald-800">
            Nilai <span className="text-yellow-600">Utama Siqah</span>
          </h2>
          <p className="text-gray-700 mt-4 max-w-3xl mx-auto text-lg leading-relaxed">
            Nilai-nilai yang menjadi dasar dalam setiap langkah kami, memastikan
            layanan aqiqah dan qurban selalu amanah, syar’i, dan penuh berkah.
          </p>
        </motion.div>

        {/* Daftar Nilai */}
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10"
          initial="hidden"
          whileInView="visible"
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { staggerChildren: 0.2 },
            },
          }}
          viewport={{ once: true }}
        >
          {values.map((value, index) => (
            <motion.div
              key={index}
              className="bg-white/90 rounded-3xl shadow-md border border-emerald-100 p-8 hover:shadow-xl transition duration-300 flex flex-col items-center text-center"
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <div className="text-5xl mb-4">{value.icon}</div>
              <h3
                className={`text-2xl font-semibold mb-3 ${value.color}`}
              >
                {value.title}
              </h3>
              <p className="text-gray-700 text-sm leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Penutup */}
        <motion.div
          className="bg-white/90 rounded-3xl shadow-md border border-emerald-100 p-8 md:p-12 mt-16 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <p className="text-gray-700 text-lg leading-relaxed">
            Nilai-nilai ini bukan hanya prinsip kerja, tapi juga niat ibadah
            yang kami tanamkan dalam setiap layanan. Bersama{" "}
            <span className="text-emerald-700 font-semibold">Siqah</span>,
            kami ingin menghadirkan pengalaman aqiqah yang penuh
            <span className="text-yellow-600 font-semibold"> keberkahan dan kepercayaan</span>.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ValuesSection;
