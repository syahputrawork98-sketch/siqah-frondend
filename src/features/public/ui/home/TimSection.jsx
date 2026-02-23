import React from "react";
import { motion } from "framer-motion";
import { PublicCard, PublicSection, SectionHeading } from "@/shared/ui";

const teamMembers = [
  {
    id: 1,
    nama: "Ahmad Fauzi",
    role: "Tim Kandang",
    img: "https://res.cloudinary.com/dcida9qys/image/upload/v1761263221/team-kandang_tzqlbo.jpg",
    quote: "Merawat hewan dengan penuh tanggung jawab dan kasih sayang.",
  },
  {
    id: 2,
    nama: "Siti Rahmah",
    role: "Mitra Catering",
    img: "https://res.cloudinary.com/dcida9qys/image/upload/v1761263221/team-catering_f3e0ro.jpg",
    quote: "Menyiapkan hidangan aqiqah dengan cita rasa terbaik dan penuh keberkahan.",
  },
  {
    id: 3,
    nama: "Rizky Pratama",
    role: "Kurir Siqah",
    img: "https://res.cloudinary.com/dcida9qys/image/upload/v1761263221/team-kurir_rjhecz.jpg",
    quote: "Mengantar pesanan aqiqah Anda dengan aman, cepat, dan ramah.",
  },
  {
    id: 4,
    nama: "Nur Aulia",
    role: "Admin dan Layanan Pelanggan",
    img: "https://res.cloudinary.com/dcida9qys/image/upload/v1761263221/team-admin_wtrdcj.jpg",
    quote: "Membantu setiap pelanggan dengan pelayanan yang jujur dan amanah.",
  },
];

const TimSection = () => {
  return (
    <PublicSection className="bg-gradient-to-b from-[#f9f6ef] to-[#fefbf7]">
      <SectionHeading
        className="mb-12"
        title="Tim Amanah Siqah"
        description="Di balik setiap proses aqiqah yang lancar, ada tim yang bekerja tulus dan penuh dedikasi untuk menghadirkan keberkahan bagi keluarga Anda."
      />

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
        {teamMembers.map((person, index) => (
          <motion.div
            key={person.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <PublicCard className="relative p-6 text-center">
              <div className="mx-auto mb-4 h-32 w-32 overflow-hidden rounded-full border-4 border-[var(--color-public-accent)]/80">
                <img src={person.img} alt={person.nama} className="h-full w-full object-cover" />
              </div>

              <h3 className="mb-1 font-heading text-lg font-bold text-[var(--color-public-primary)]">{person.nama}</h3>
              <p className="mb-3 text-sm font-semibold text-[var(--color-public-accent)]">{person.role}</p>
              <p className="text-sm leading-relaxed text-[color-mix(in_srgb,var(--color-public-primary)_80%,#fff)]">
                "{person.quote}"
              </p>
            </PublicCard>
          </motion.div>
        ))}
      </div>
    </PublicSection>
  );
};

export default TimSection;
