// src/pages/Contact.jsx
import React from "react";
import { motion } from "framer-motion";
import ContactInfo from "@/features/public/ui/contact/ContactInfo";
import ContactForm from "@/features/public/ui/contact/ContactForm";

const adminData = {
  nama: "Admin Utama Siqah",
  email: "admin@siqah.id",
  no_hp: "081234567890",
  jabatan: "Super Admin",
  foto: "https://placehold.co/400",
  alamat: "Jl. Raya Siqah No. 1, Bandung",
  sosial: {
    instagram: "https://instagram.com/siqah",
    tiktok: "https://tiktok.com/@siqah",
  },
};

const Contact = () => {
  return (
    <section
      className="w-full py-24 overflow-hidden relative"
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

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-white">
        {/* Hero Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <img src="https://res.cloudinary.com/dcida9qys/image/upload/v1761097925/Siqah-logo-HD_umjt9e.png" alt="Siqah Logo" className="mx-auto mb-4 w-32" />
          <h1 className="text-4xl md:text-5xl font-bold text-[#45624B] mb-4">Hubungi Siqah</h1>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
            Kami siap membantu Anda dengan layanan aqiqah & qurban terbaik
          </p>
        </motion.div>

        {/* Info & Form */}
        <div className="grid md:grid-cols-2 gap-8">
          <ContactInfo adminData={adminData} />
          <ContactForm />
        </div>

        {/* Profil Admin */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-semibold mb-6 text-white">Tim Siqah</h2>
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="flex-shrink-0">
              <img
                src={adminData.foto}
                alt={adminData.nama}
                className="w-32 h-32 rounded-full object-cover shadow-md"
              />
            </div>
            <div className="text-white">
              <h3 className="text-xl font-bold">{adminData.nama}</h3>
              <p>{adminData.jabatan}</p>
              <p>
                Email:{" "}
                <a href={`mailto:${adminData.email}`} className="text-[#45624B] underline">
                  {adminData.email}
                </a>
              </p>
              <p>
                HP:{" "}
                <a href={`tel:${adminData.no_hp}`} className="text-[#45624B] underline">
                  {adminData.no_hp}
                </a>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;


