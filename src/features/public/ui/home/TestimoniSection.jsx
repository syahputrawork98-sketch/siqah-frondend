import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaChevronLeft, FaChevronRight, FaStar } from "react-icons/fa";
import { PublicCard, PublicSection, SectionHeading } from "@/shared/ui";

const testimonials = [
  {
    id: 1,
    nama: "Hafidz dan Aisyah",
    role: "Orang Tua Bayi",
    img: "https://res.cloudinary.com/dcida9qys/image/upload/v1761262211/family-1_sxghss.jpg",
    text: "Layanannya cepat, hewannya sehat, dan masakannya enak. Terima kasih Siqah, aqiqah anak kami jadi lebih mudah dan penuh berkah.",
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

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const prevSlide = () => setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  const nextSlide = () => setIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));

  return (
    <PublicSection className="bg-gradient-to-b from-[#f9f6ef] to-[#fefbf7]" containerClassName="max-w-4xl text-center">
      <SectionHeading
        className="mb-12"
        title="Apa Kata Mereka"
        description="Suara keluarga yang telah merasakan layanan Siqah yang amanah, rapi, dan penuh keberkahan."
      />

      <div className="relative flex items-center justify-center">
        <button
          onClick={prevSlide}
          className="absolute left-0 rounded-full bg-white/70 p-3 text-[var(--color-public-accent)] shadow-md transition md:-left-12"
          aria-label="Sebelumnya"
        >
          <FaChevronLeft size={20} />
        </button>

        <div className="w-full overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={testimonials[index].id}
              initial={{ opacity: 0, x: 80 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -80 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <PublicCard className="p-10 text-center">
                <div className="mx-auto mb-4 h-28 w-28 overflow-hidden rounded-full border-4 border-[var(--color-public-accent)]/80 shadow-md">
                  <img src={testimonials[index].img} alt={testimonials[index].nama} className="h-full w-full object-cover" />
                </div>

                <h3 className="font-heading text-xl font-bold text-[var(--color-public-primary)]">{testimonials[index].nama}</h3>
                <p className="mb-4 text-sm text-[color-mix(in_srgb,var(--color-public-primary)_70%,#fff)]">{testimonials[index].role}</p>

                <p className="mx-auto mb-6 max-w-2xl text-sm leading-relaxed text-[color-mix(in_srgb,var(--color-public-primary)_80%,#fff)]">
                  "{testimonials[index].text}"
                </p>

                <div className="flex justify-center text-[var(--color-public-accent)]">
                  {[...Array(testimonials[index].rating)].map((_, starIndex) => (
                    <FaStar key={starIndex} className="mx-0.5" />
                  ))}
                </div>
              </PublicCard>
            </motion.div>
          </AnimatePresence>
        </div>

        <button
          onClick={nextSlide}
          className="absolute right-0 rounded-full bg-white/70 p-3 text-[var(--color-public-accent)] shadow-md transition md:-right-12"
          aria-label="Selanjutnya"
        >
          <FaChevronRight size={20} />
        </button>
      </div>

      <div className="mt-6 flex justify-center gap-2">
        {testimonials.map((item, dotIndex) => (
          <button
            key={item.id}
            onClick={() => setIndex(dotIndex)}
            className={`h-3 w-3 rounded-full transition-all duration-300 ${
              dotIndex === index
                ? "bg-[var(--color-public-accent)]"
                : "bg-[var(--color-public-accent)]/30 hover:bg-[var(--color-public-accent)]/60"
            }`}
            aria-label={`Pindah ke testimonial ${dotIndex + 1}`}
          />
        ))}
      </div>
    </PublicSection>
  );
};

export default TestimoniSection;
