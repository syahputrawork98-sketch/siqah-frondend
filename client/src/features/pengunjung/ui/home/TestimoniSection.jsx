// client/src/components/home/TestimoniSection.jsx
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const testimonials = [
  {
    id: 1,
    nama: "Hafidz & Aisyah",
    role: "Orang Tua Bayi",
    img: "https://res.cloudinary.com/dcida9qys/image/upload/v1761262211/family-1_sxghss.jpg",
    text: "Layanannya cepat, hewannya sehat, dan masakannya enak banget. Terima kasih Siqah, aqiqah anak kami jadi lebih mudah dan penuh berkah.",
    rating: 5,
  },
  {
    id: 2,
    nama: "Rini Kartika",
    role: "Konsumen Siqah",
    img: "https://res.cloudinary.com/dcida9qys/image/upload/v1761262211/family-2_rlp3ci.jpg",
    text: "Tim Siqah sangat ramah dan profesional. Semua proses mulai dari pemesanan sampai pengantaran berjalan lancar.",
    rating: 5,
  },
  {
    id: 3,
    nama: "Dedi Firmansyah",
    role: "Ayah dari Bayi Khalid",
    img: "https://res.cloudinary.com/dcida9qys/image/upload/v1761262211/family-3_uc8dfo.jpg",
    text: "Alhamdulillah, semuanya sesuai syariat dan transparan. Kami sangat puas dengan pelayanan Siqah.",
    rating: 5,
  },
];

const TestimoniSection = () => {
  const [index, setIndex] = useState(0);

  // Ganti otomatis setiap 6 detik
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const prevSlide = () =>
    setIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  const nextSlide = () =>
    setIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );

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


      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-cormorant font-bold text-[#45624B] mb-4">
            Apa Kata Mereka
          </h2>
          <p className="text-base sm:text-lg text-[#45624B]/80 font-montserrat max-w-2xl mx-auto">
            Suara hati para keluarga yang telah merasakan layanan Siqah —
            penuh amanah, cita rasa, dan keberkahan.
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="relative flex items-center justify-center">
          {/* Tombol kiri */}
          <button
            onClick={prevSlide}
            className="absolute left-0 md:-left-12 text-[#B9914D] hover:text-[#a37f3e] p-3 rounded-full bg-white/70 shadow-md transition"
          >
            <FaChevronLeft size={20} />
          </button>

          {/* Animasi perpindahan */}
          <div className="overflow-hidden w-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={testimonials[index].id}
                initial={{ opacity: 0, x: 80 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -80 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="bg-white rounded-3xl shadow-lg p-10 flex flex-col items-center text-center"
              >
                {/* Foto profil */}
                <div className="w-28 h-28 rounded-full overflow-hidden mb-4 border-4 border-[#B9914D]/80 shadow-md">
                  <img
                    src={testimonials[index].img}
                    alt={testimonials[index].nama}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Nama & Role */}
                <h3 className="text-xl font-cormorant font-bold text-[#45624B]">
                  {testimonials[index].nama}
                </h3>
                <p className="text-sm text-[#45624B]/70 mb-4 font-montserrat">
                  {testimonials[index].role}
                </p>

                {/* Teks */}
                <p className="text-[#45624B]/80 font-montserrat text-sm leading-relaxed max-w-2xl mb-6">
                  “{testimonials[index].text}”
                </p>

                {/* Rating */}
                <div className="flex justify-center text-[#B9914D]">
                  {[...Array(testimonials[index].rating)].map((_, i) => (
                    <FaStar key={i} className="mx-0.5" />
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Tombol kanan */}
          <button
            onClick={nextSlide}
            className="absolute right-0 md:-right-12 text-[#B9914D] hover:text-[#a37f3e] p-3 rounded-full bg-white/70 shadow-md transition"
          >
            <FaChevronRight size={20} />
          </button>
        </div>

        {/* Dots indikator */}
        <div className="flex justify-center mt-6 gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                i === index
                  ? "bg-[#B9914D]"
                  : "bg-[#B9914D]/30 hover:bg-[#B9914D]/60"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimoniSection;
