import React from "react";
import { motion } from "framer-motion";
import { FaMapMarkedAlt, FaChartLine, FaBoxOpen, FaGift } from "react-icons/fa";

const services = [
    {
        icon: <FaMapMarkedAlt className="text-4xl siqah-public-accent" />,
        title: "Teknologi Pelacakan Canggih",
        desc: "Pantau setiap tahap proses aqiqah dan qurban secara real-time melalui sistem tracking Siqah.",
    },
    {
        icon: <FaChartLine className="text-4xl siqah-public-accent" />,
        title: "Laporan Proses Otomatis",
        desc: "Dapatkan pembaruan singkat dari perjalanan proses aqiqah Anda, mulai dari pemotongan hingga pengiriman.",
    },
    {
        icon: <FaBoxOpen className="text-4xl siqah-public-accent" />,
        title: "Paket Sesuai Kebutuhan",
        desc: "Pilih berbagai paket aqiqah lengkap yang dapat disesuaikan dengan kebutuhan dan anggaran keluarga Anda.",
    },
    {
        icon: <FaGift className="text-4xl siqah-public-accent" />,
        title: "Bonus & Hadiah Tambahan",
        desc: "Nikmati bonus menarik seperti mukena, sajadah, dan perlengkapan ibadah sebagai bentuk apresiasi dari Siqah.",
    },
];

const ServicesList = () => {
    return (
        <section
            id="layanan"
            className="relative py-24 bg-[#F9F9F7] text-center overflow-hidden"
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


            <div className="relative z-10 max-w-6xl mx-auto px-6">
                {/* Judul Section */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-[#45624B] mb-4">
                        Keunggulan Layanan Siqah
                    </h2>
                    <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
                        Kami berkomitmen memberikan pengalaman aqiqah dan qurban yang modern, amanah, dan penuh keberkahan.
                    </p>
                </motion.div>

                {/* Grid daftar layanan */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {services.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                        >
                            {item.icon}
                            <h3 className="text-xl font-semibold text-[#45624B] mt-4 mb-2">
                                {item.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                                {item.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesList;
