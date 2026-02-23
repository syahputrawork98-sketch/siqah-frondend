import React from "react";
import { motion } from "framer-motion";
import { FiCheckCircle, FiScissors, FiShoppingCart, FiTruck } from "react-icons/fi";
import { GiCook, GiGoat } from "react-icons/gi";
import { PublicSection, SectionHeading } from "@/shared/ui";

const steps = [
  {
    id: 1,
    icon: <FiShoppingCart className="text-3xl text-[var(--color-public-accent)]" />,
    title: "Pemesanan",
    desc: "Konsumen memesan paket aqiqah sesuai kebutuhan dan budget.",
  },
  {
    id: 2,
    icon: <GiGoat className="text-3xl text-[var(--color-public-accent)]" />,
    title: "Pemilihan Hewan",
    desc: "Hewan dipilih langsung dari mitra kandang yang terpercaya.",
  },
  {
    id: 3,
    icon: <FiScissors className="text-3xl text-[var(--color-public-accent)]" />,
    title: "Pemotongan",
    desc: "Proses penyembelihan dilakukan sesuai syariat Islam.",
  },
  {
    id: 4,
    icon: <GiCook className="text-3xl text-[var(--color-public-accent)]" />,
    title: "Pengolahan Catering",
    desc: "Tim catering menyiapkan hidangan dengan cita rasa terbaik.",
  },
  {
    id: 5,
    icon: <FiTruck className="text-3xl text-[var(--color-public-accent)]" />,
    title: "Pengantaran",
    desc: "Pesanan dikirim tepat waktu oleh kurir Siqah ke rumah Anda.",
  },
  {
    id: 6,
    icon: <FiCheckCircle className="text-3xl text-[var(--color-public-accent)]" />,
    title: "Selesai",
    desc: "Aqiqah terselenggara dengan lancar dan penuh keberkahan.",
  },
];

const TimelineSection = () => {
  return (
    <PublicSection className="bg-gradient-to-b from-[#f9f6ef] to-[#fefbf7]">
      <SectionHeading
        className="mb-12"
        title="Proses Aqiqah Siqah"
        description="Kami memastikan setiap tahapan aqiqah berjalan sesuai syariat dan penuh keberkahan dari pemesanan hingga hidangan siap disantap."
      />

      <motion.div
        className="relative flex flex-col items-center justify-between md:flex-row md:items-start"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <div className="absolute left-0 right-0 top-12 z-0 hidden h-[2px] bg-[var(--color-public-accent)]/50 md:block" />

        {steps.map((step, index) => (
          <motion.div
            key={step.id}
            className="relative mb-10 flex flex-col items-center text-center md:mb-0 md:w-1/6"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="relative z-10 mb-4 flex h-16 w-16 items-center justify-center rounded-full border-4 border-[var(--color-public-accent)] bg-white shadow-md">
              {step.icon}
            </div>

            {index !== steps.length - 1 && (
              <div className="block h-10 w-[2px] bg-[var(--color-public-accent)]/50 md:hidden" />
            )}

            <h3 className="mb-2 font-heading text-lg font-bold text-[var(--color-public-primary)]">{step.title}</h3>
            <p className="max-w-[200px] font-sans text-sm text-[color-mix(in_srgb,var(--color-public-primary)_80%,#fff)]">
              {step.desc}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </PublicSection>
  );
};

export default TimelineSection;
