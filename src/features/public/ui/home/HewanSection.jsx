import React from "react";
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";
import { PublicButton, PublicCard, PublicSection, SectionHeading } from "@/shared/ui";

const hewanList = [
  {
    id: 1,
    nama: "Kambing Jawa Super",
    berat: "25-30 kg",
    harga: "Rp 2.450.000",
    img: "https://res.cloudinary.com/dcida9qys/image/upload/v1761097682/goat-1_vpqckt.jpg",
    ready: true,
  },
  {
    id: 2,
    nama: "Kambing Etawa Premium",
    berat: "30-35 kg",
    harga: "Rp 2.950.000",
    img: "https://res.cloudinary.com/dcida9qys/image/upload/v1761097701/goat-2_fpt7xt.jpg",
    ready: true,
  },
  {
    id: 3,
    nama: "Domba Garut Pilihan",
    berat: "28-33 kg",
    harga: "Rp 2.750.000",
    img: "https://res.cloudinary.com/dcida9qys/image/upload/v1761097715/goat-3_lrrmbl.jpg",
    ready: true,
  },
];

const HewanSection = () => {
  return (
    <PublicSection className="bg-gradient-to-b from-[#f9f6ef] to-[#fefbf7]">
      <SectionHeading
        className="mb-12"
        title="Pilihan Hewan Aqiqah"
        description="Semua hewan kami dirawat dengan baik dan disembelih sesuai tuntunan syariat Islam. Anda dapat memilih sesuai kebutuhan keluarga dan paket aqiqah Anda."
      />

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
        {hewanList.map((hewan, index) => (
          <motion.div
            key={hewan.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <PublicCard className="group relative overflow-hidden">
              <div className="relative">
                <img
                  src={hewan.img}
                  alt={hewan.nama}
                  className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {hewan.ready && (
                  <div className="absolute left-4 top-4 inline-flex items-center gap-1 rounded-full bg-[var(--color-public-accent)] px-3 py-1 text-xs font-semibold text-white shadow-md">
                    <FaCheckCircle />
                    Siap Aqiqah
                  </div>
                )}
              </div>

              <div className="p-6 text-center">
                <h3 className="mb-2 font-heading text-xl font-bold text-[var(--color-public-primary)]">{hewan.nama}</h3>
                <p className="mb-1 text-sm text-[color-mix(in_srgb,var(--color-public-primary)_80%,#fff)]">Berat: {hewan.berat}</p>
                <p className="text-lg font-bold text-[var(--color-public-accent)]">{hewan.harga}</p>

                <PublicButton className="mt-4" size="sm">
                  Pilih Sekarang
                </PublicButton>
              </div>
            </PublicCard>
          </motion.div>
        ))}
      </div>
    </PublicSection>
  );
};

export default HewanSection;
