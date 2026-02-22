import React from "react";
import { motion } from "framer-motion";

const VisiMisi = () => {
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

      <div className="relative max-w-6xl mx-auto px-6 md:px-10 z-10">
        {/* Judul Section */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-emerald-800">
            Visi & Misi <span className="text-yellow-600">Siqah</span>
          </h2>
          <p className="text-gray-700 mt-4 max-w-2xl mx-auto text-lg leading-relaxed">
            Nilai dan arah yang menuntun kami dalam memberikan layanan aqiqah &
            qurban yang syar’i, amanah, dan penuh berkah.
          </p>
        </motion.div>

        {/* Isi Visi & Misi */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* Visi */}
          <motion.div
            className="bg-white/90 rounded-2xl shadow-md p-8 border border-emerald-100 hover:shadow-lg transition duration-300"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-emerald-700 mb-3">Visi Kami</h3>
            <p className="text-gray-700 leading-relaxed">
              Menjadi penyedia layanan aqiqah terpercaya yang menghadirkan
              kemudahan, keberkahan, dan ketenangan bagi setiap keluarga Muslim
              di seluruh Indonesia.
            </p>
          </motion.div>

          {/* Misi */}
          <motion.div
            className="bg-white/90 rounded-2xl shadow-md p-8 border border-emerald-100 hover:shadow-lg transition duration-300"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-emerald-700 mb-3">Misi Kami</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>
                Menyediakan layanan yang <strong>syar’i</strong> dan{" "}
                <strong>transparan</strong>
              </li>
              <li>
                Memberdayakan <strong>peternak lokal</strong> dan{" "}
                <strong>dapur halal</strong>
              </li>
              <li>
                Menjaga <strong>kualitas hewan</strong> &{" "}
                <strong>kebersihan dapur</strong>
              </li>
              <li>
                Memberikan pengalaman <strong>mudah</strong> dan{" "}
                <strong>berkesan</strong> bagi keluarga
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VisiMisi;
