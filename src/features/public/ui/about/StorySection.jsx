import React from "react";
import { motion } from "framer-motion";

const StorySection = () => {
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
      {/* Overlay lembut */}
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
            Kisah <span className="text-yellow-600">Siqah</span>
          </h2>
          <p className="text-gray-700 mt-4 max-w-2xl mx-auto text-lg leading-relaxed">
            Perjalanan kami bermula dari niat sederhana: menghadirkan ibadah
            aqiqah dan qurban yang tidak hanya mudah, tetapi juga benar-benar
            bermakna dan penuh berkah.
          </p>
        </motion.div>

        {/* Cerita Awal */}
        <motion.div
          className="bg-white/90 rounded-3xl shadow-md border border-emerald-100 p-8 md:p-12 text-left md:text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <p className="text-gray-700 text-lg leading-relaxed max-w-4xl mx-auto">
            <span className="font-semibold text-emerald-700">Siqah</span> lahir
            dari keinginan untuk menjawab kebutuhan banyak keluarga Muslim yang
            ingin menjalankan ibadah aqiqah dengan tenang, tanpa harus bingung
            mengurus hewan, dapur, atau distribusi. Kami menyadari bahwa
            momen aqiqah bukan sekadar acara, tapi bentuk rasa syukur dan doa
            keluarga atas anugerah Allah.
          </p>
        </motion.div>

        {/* Timeline / Proses Cerita */}
        <motion.div
          className="grid md:grid-cols-3 gap-10 mt-10"
          initial="hidden"
          whileInView="visible"
          variants={{
            hidden: { opacity: 0, y: 40 },
            visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } },
          }}
          viewport={{ once: true }}
        >
          {/* 1 - Kelahiran Ide */}
          <motion.div
            className="flex flex-col items-center text-center space-y-4"
            variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } }}
          >
            <img
              src="https://res.cloudinary.com/dcida9qys/image/upload/v1761270102/Keluarga_thg4y4.png"
              alt="Ide Siqah"
              className="w-40 md:w-48"
            />
            <h3 className="text-xl font-semibold text-emerald-700">
              Dari Niat yang Tulus
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Dimulai dari rasa ingin membantu keluarga Muslim agar bisa
              beribadah dengan nyaman dan sesuai sunnah.
            </p>
          </motion.div>

          {/* 2 - Proses Kolaborasi */}
          <motion.div
            className="flex flex-col items-center text-center space-y-4"
            variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } }}
          >
            <img
              src="https://res.cloudinary.com/dcida9qys/image/upload/v1761270102/Kolaborasi_szz0ib.png"
              alt="Kolaborasi Tim"
              className="w-40 md:w-48"
            />
            <h3 className="text-xl font-semibold text-emerald-700">
              Kolaborasi Penuh Amanah
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Siqah membangun ekosistem yang melibatkan peternak, dapur halal,
              dan kurir yang bekerja dengan penuh tanggung jawab.
            </p>
          </motion.div>

          {/* 3 - Transformasi Digital */}
          <motion.div
            className="flex flex-col items-center text-center space-y-4"
            variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } }}
          >
            <img
              src="https://res.cloudinary.com/dcida9qys/image/upload/v1761270101/Modern_transparan_pflgyz.png"
              alt="Transformasi Digital"
              className="w-40 md:w-48"
            />
            <h3 className="text-xl font-semibold text-emerald-700">
              Modern & Transparan
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Dengan sistem digital, setiap proses aqiqah kini bisa dipantau
              langsung — dari hewan, dapur, hingga pengantaran.
            </p>
          </motion.div>
        </motion.div>

        {/* Pesan Akhir */}
        <motion.div
          className="bg-white/90 rounded-3xl shadow-md border border-emerald-100 p-8 md:p-12 mt-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <p className="text-gray-700 text-lg leading-relaxed max-w-4xl mx-auto">
            Hari ini, <span className="font-semibold text-emerald-700">Siqah</span> 
            terus tumbuh bersama keluarga Muslim di seluruh Indonesia. Kami ingin
            setiap momen aqiqah menjadi pengalaman yang mudah, berkah, dan tak
            terlupakan — dari kandang hingga tangan Anda.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default StorySection;
