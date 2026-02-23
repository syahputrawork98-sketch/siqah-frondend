import React from "react";
import { motion } from "framer-motion";
import { PublicButton, PublicCard, PublicSection, SectionHeading } from "@/shared/ui";

const paketData = [
  {
    id: 1,
    nama: "Paket Aqiqah Premium",
    harga: "Rp3.000.000",
    deskripsi: "Daging kambing pilihan, sate dan gulai, lengkap dengan nasi kebuli.",
    gambar:
      "https://res.cloudinary.com/dcida9qys/image/upload/v1761262212/paket-premium_y5pyhe.jpg",
  },
  {
    id: 2,
    nama: "Paket Aqiqah Standar",
    harga: "Rp2.400.000",
    deskripsi: "Pilihan ekonomis dengan rasa tetap nikmat dan syari.",
    gambar:
      "https://res.cloudinary.com/dcida9qys/image/upload/v1761262212/paket-standar_wzcoek.jpg",
  },
  {
    id: 3,
    nama: "Paket Aqiqah Hemat",
    harga: "Rp1.800.000",
    deskripsi: "Cocok untuk keluarga kecil yang ingin tetap penuh keberkahan.",
    gambar:
      "https://res.cloudinary.com/dcida9qys/image/upload/v1761262212/paket-hemat_ebt8wa.jpg",
  },
];

const PaketSection = () => {
  return (
    <PublicSection id="paket" className="bg-gradient-to-b from-[#fefbf7] to-[#f9f6ef]">
      <SectionHeading
        className="mb-12"
        title="Pilihan Paket Aqiqah"
        description="Kami menyediakan beragam paket aqiqah yang dirancang dengan cinta untuk membantu keluarga Muslim merayakan kelahiran dengan penuh berkah dan kemudahan."
      />

      <motion.div
        className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        {paketData.map((paket, index) => (
          <motion.div
            key={paket.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <PublicCard className="overflow-hidden">
              <div className="relative">
                <img src={paket.gambar} alt={paket.nama} className="h-56 w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>

              <div className="p-6 text-center">
                <h3 className="mb-2 font-heading text-xl font-bold text-[var(--color-public-primary)]">
                  {paket.nama}
                </h3>
                <p className="mb-3 font-sans text-[color-mix(in_srgb,var(--color-public-primary)_80%,#fff)]">
                  {paket.deskripsi}
                </p>
                <p className="mb-4 text-lg font-bold text-[var(--color-public-accent)]">{paket.harga}</p>
                <PublicButton as="a" href="#transaksi" size="sm" className="shadow-md">
                  Pesan Sekarang
                </PublicButton>
              </div>
            </PublicCard>
          </motion.div>
        ))}
      </motion.div>
    </PublicSection>
  );
};

export default PaketSection;
