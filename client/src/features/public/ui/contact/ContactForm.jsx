// src/components/contact/ContactForm.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";

const ContactForm = () => {
  const [formData, setFormData] = useState({ nama: "", email: "", hp: "", pesan: "" });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.nama || !formData.email || !formData.pesan) {
      setStatus({ type: "error", message: "Harap isi semua field yang wajib." });
      return;
    }
    setTimeout(() => {
      setStatus({ type: "success", message: "Pesan berhasil dikirim!" });
      setFormData({ nama: "", email: "", hp: "", pesan: "" });
    }, 1000);
  };

  return (
    <motion.div
      className="bg-white bg-opacity-90 p-6 rounded-2xl shadow-md text-gray-900"
      initial={{ x: 50, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <h2 className="text-xl font-semibold mb-4 text-[#45624B]">Kirim Pesan</h2>
      {status && (
        <div
          className={`p-2 mb-4 rounded ${
            status.type === "success" ? "bg-green-200 text-green-900" : "bg-red-200 text-red-900"
          }`}
        >
          {status.message}
        </div>
      )}
      <form className="space-y-4" onSubmit={handleSubmit}>
        <input
          type="text"
          name="nama"
          placeholder="Nama Lengkap"
          value={formData.nama}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#45624B]"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#45624B]"
        />
        <input
          type="text"
          name="hp"
          placeholder="Nomor HP"
          value={formData.hp}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#45624B]"
        />
        <textarea
          name="pesan"
          placeholder="Pesan Anda"
          rows="4"
          value={formData.pesan}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#45624B]"
        />
        <button
          type="submit"
          className="w-full bg-[#45624B] text-white py-2 rounded hover:bg-[#B9914D] transition"
        >
          Kirim Pesan
        </button>
      </form>
    </motion.div>
  );
};

export default ContactForm;
