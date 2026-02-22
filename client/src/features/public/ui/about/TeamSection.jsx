import React from "react";
import { motion } from "framer-motion";

const teamData = [
  {
    nama: "Admin Siqah",
    jabatan: "Manajemen & Layanan Pelanggan",
    foto: "https://res.cloudinary.com/dcida9qys/image/upload/v1761272551/admin_siqah_gx3jtz.png",
    deskripsi:
      "Mengelola sistem, memastikan proses layanan berjalan lancar, dan menjaga komunikasi dengan pelanggan agar selalu puas dan tenang.",
  },
  {
    nama: "Petugas Kandang",
    jabatan: "Perawatan & Pemilihan Hewan",
    foto: "https://res.cloudinary.com/dcida9qys/image/upload/v1761272551/kandang_siqah_fphlfv.png",
    deskripsi:
      "Bertanggung jawab atas kesehatan dan kelayakan hewan aqiqah, memastikan setiap hewan dipelihara dengan penuh kasih dan sesuai syariat.",
  },
  {
    nama: "Petugas Dapur",
    jabatan: "Pengolahan & Penyajian Menu",
    foto: "https://res.cloudinary.com/dcida9qys/image/upload/v1761272551/dapur_siqah_xcw9ry.png",
    deskripsi:
      "Menyiapkan olahan daging aqiqah dengan standar kebersihan tinggi, cita rasa terbaik, dan penuh keberkahan.",
  },
  {
    nama: "Petugas Kurir",
    jabatan: "Pengantaran & Ketepatan Waktu",
    foto: "https://res.cloudinary.com/dcida9qys/image/upload/v1761272551/kurir_siqah_yu7nmp.png",
    deskripsi:
      "Mengantarkan paket aqiqah dengan aman, tepat waktu, dan pelayanan penuh senyum hingga ke tangan penerima.",
  },
];

const TeamSection = () => {
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
            Tim <span className="text-yellow-600">Siqah</span>
          </h2>
          <p className="text-gray-700 mt-4 max-w-3xl mx-auto text-lg leading-relaxed">
            Di balik setiap proses aqiqah yang amanah, ada tim Siqah yang bekerja
            dengan hati, tanggung jawab, dan semangat ibadah.
          </p>
        </motion.div>

        {/* Daftar Tim */}
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
          {teamData.map((person, index) => (
            <motion.div
              key={index}
              className="bg-white/90 rounded-3xl shadow-md border border-emerald-100 p-6 hover:shadow-xl transition duration-300 flex flex-col items-center text-center"
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <img
                src={person.foto}
                alt={person.nama}
                className="w-32 h-32 object-cover rounded-full mb-4 shadow-md border-4 border-emerald-200"
              />
              <h3 className="text-xl font-semibold text-emerald-700">
                {person.nama}
              </h3>
              <p className="text-yellow-600 text-sm font-medium mb-3">
                {person.jabatan}
              </p>
              <p className="text-gray-700 text-sm leading-relaxed">
                {person.deskripsi}
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
            Setiap anggota tim <span className="text-emerald-700 font-semibold">Siqah</span> 
            memiliki peran penting dalam memastikan setiap momen aqiqah berjalan dengan 
            sempurna — dari kandang hingga ke tangan penerima. Kami bekerja bukan hanya 
            untuk melayani, tetapi juga untuk <strong>menghadirkan keberkahan</strong>.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default TeamSection;
