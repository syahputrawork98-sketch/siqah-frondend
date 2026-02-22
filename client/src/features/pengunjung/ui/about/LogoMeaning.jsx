import React from "react";
import { motion } from "framer-motion";

const LogoMeaning = () => {
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
            Makna <span className="text-yellow-600">Logo Siqah</span>
          </h2>
          <p className="text-gray-700 mt-4 max-w-3xl mx-auto text-lg leading-relaxed">
            Setiap elemen dalam logo <span className="font-semibold text-emerald-700">Siqah</span> 
            memiliki arti mendalam yang mencerminkan rasa syukur, kebahagiaan, dan keberkahan dalam 
            ibadah aqiqah.
          </p>
        </motion.div>

        {/* Logo Utama */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <img
            src="https://res.cloudinary.com/dcida9qys/image/upload/v1761098052/Siqah-logo-HD_fpetwm.png"
            alt="Logo Siqah"
            className="w-60 md:w-72 lg:w-80 drop-shadow-lg hover:scale-105 transition-transform duration-500"
          />
        </motion.div>

        {/* Penjelasan Elemen Logo */}
        <motion.div
          className="grid md:grid-cols-2 gap-10 text-left md:text-justify"
          initial="hidden"
          whileInView="visible"
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } },
          }}
          viewport={{ once: true }}
        >
          {/* Lingkaran di Atas */}
          <motion.div
            className="bg-white/90 rounded-2xl shadow-md border border-emerald-100 p-8"
            variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } }}
          >
            <h3 className="text-2xl font-semibold text-yellow-600 mb-3">
              Lingkaran di Atas
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Melambangkan <strong>anak yang baru lahir</strong> sekaligus simbol 
              kesempurnaan dan berkah dari Allah SWT. Menjadi pusat makna dari ibadah 
              aqiqah yang penuh rasa syukur.
            </p>
          </motion.div>

          {/* Lengkungan Emas di Samping */}
          <motion.div
            className="bg-white/90 rounded-2xl shadow-md border border-emerald-100 p-8"
            variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } }}
          >
            <h3 className="text-2xl font-semibold text-yellow-600 mb-3">
              Lengkungan Emas di Samping
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Menggambarkan <strong>kedua orang tua</strong> yang merentangkan tangan penuh 
              syukur. Bentuknya menyerupai figur manusia yang sedang berdoa, melambangkan doa, 
              kebahagiaan, dan keberkahan keluarga.
            </p>
          </motion.div>

          {/* Lengkungan Hijau di Bawah */}
          <motion.div
            className="bg-white/90 rounded-2xl shadow-md border border-emerald-100 p-8"
            variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } }}
          >
            <h3 className="text-2xl font-semibold text-emerald-700 mb-3">
              Lengkungan Hijau di Bawah
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Menyerupai tanduk atau bagian tubuh kambing/domba — hewan yang disyariatkan 
              dalam aqiqah. Warna hijau merepresentasikan <strong>Islam, kesuburan, dan 
              kehidupan baru</strong>.
            </p>
          </motion.div>

          {/* Komposisi Keseluruhan */}
          <motion.div
            className="bg-white/90 rounded-2xl shadow-md border border-emerald-100 p-8"
            variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } }}
          >
            <h3 className="text-2xl font-semibold text-emerald-700 mb-3">
              Komposisi Keseluruhan
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Secara utuh, logo ini membentuk figur manusia yang tegak dengan tangan terbuka — 
              simbol <strong>syukur keluarga atas kelahiran anak</strong>. Unsur hijau (kambing) 
              dan emas (anak & doa) berpadu menjadi makna mendalam: 
              “Syukur keluarga atas kelahiran anak yang disempurnakan dengan ibadah aqiqah 
              sesuai syariat Islam.”
            </p>
          </motion.div>
        </motion.div>

        {/* Warna & Tipografi */}
        <motion.div
          className="mt-16 bg-white/90 rounded-3xl shadow-md border border-emerald-100 p-8 md:p-12 text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold text-emerald-800 mb-4">
            Warna & Tipografi
          </h3>
          <p className="text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Warna <span className="text-emerald-700 font-semibold">hijau</span> 
            mencerminkan Islam, kesuburan, dan kehidupan baru. Sedangkan 
            <span className="text-yellow-600 font-semibold"> emas </span>
            melambangkan kebahagiaan, syukur, dan keberkahan. Logo ini menggunakan 
            font <span className="font-semibold text-gray-800">Cormorant Garamond</span> 
            dan <span className="font-semibold text-gray-800">Montserrat</span> 
            yang menghadirkan nuansa elegan dan modern.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default LogoMeaning;
