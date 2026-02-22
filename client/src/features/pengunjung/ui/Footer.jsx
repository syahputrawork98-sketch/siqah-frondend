import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaInstagram, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";
import { getCurrentYear } from "@/shared/lib";

export function Footer() {
  const [visible, setVisible] = useState(false);

  // Fade-in saat scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight;
      const footer = document.getElementById("footer");
      if (footer && scrollPos > footer.offsetTop + 100) setVisible(true);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <footer
      id="footer"
      className={`relative text-white py-16 px-6 font-sans transition-opacity duration-1000 ease-out ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* Background dekoratif */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#45624B] to-[#2f4233] z-0"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-[#B9914D]/20 rounded-full blur-3xl z-0"></div>

      {/* Konten utama */}
      <motion.div
        className="relative z-10 max-w-6xl mx-auto grid md:grid-cols-3 gap-12 items-start"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        {/* Kolom 1: Brand */}
        <div className="flex flex-col items-center md:items-start">
          <div className="mb-4">
            <img
              src="https://res.cloudinary.com/dcida9qys/image/upload/v1761097925/Siqah-logo-HD_umjt9e.png"
              alt="Logo Siqah"
              className="w-20 transition-transform duration-300 hover:scale-105"
            />
          </div>
          <h3 className="font-cormorant text-2xl text-[#B9914D] font-bold mb-2">
            Siap Aqiqah
          </h3>
          <p className="text-sm text-gray-200/80 max-w-xs leading-relaxed text-center md:text-left">
            Kami berkomitmen memberikan layanan aqiqah terbaik dengan penuh amanah dan profesional.
          </p>
        </div>

        {/* Kolom 2: Navigasi */}
        <div className="flex flex-col items-center md:items-start">
          <h4 className="text-lg font-semibold mb-4 text-[#B9914D]">Navigasi</h4>
          <ul className="space-y-3 text-gray-200/90">
            <li>
              <Link to="/" className="hover:text-[#B9914D] transition-colors duration-300">
                Home
              </Link>
            </li>
            <li>
              <Link to="/tentang" className="hover:text-[#B9914D] transition-colors duration-300">
                Tentang Kami
              </Link>
            </li>
            <li>
              <Link to="/layanan" className="hover:text-[#B9914D] transition-colors duration-300">
                Layanan
              </Link>
            </li>
            <li>
              <Link to="/paket" className="hover:text-[#B9914D] transition-colors duration-300">
                Paket
              </Link>
            </li>
            <li>
              <Link to="/kontak" className="hover:text-[#B9914D] transition-colors duration-300">
                Kontak
              </Link>
            </li>
          </ul>
        </div>

        {/* Kolom 3: Kontak Sosial */}
        <div className="flex flex-col items-center md:items-start">
          <h4 className="text-lg font-semibold mb-4 text-[#B9914D]">Hubungi Kami</h4>
          <ul className="space-y-3">
            <li className="flex items-center gap-3 hover:text-[#B9914D] transition-all duration-300">
              <FaWhatsapp className="text-xl" />
              <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noopener noreferrer"
              >
                0812-3456-7890
              </a>
            </li>
            <li className="flex items-center gap-3 hover:text-[#B9914D] transition-all duration-300">
              <FaEnvelope className="text-xl" />
              <a href="mailto:info@siqah.id">info@siqah.id</a>
            </li>
            <li className="flex items-center gap-3 hover:text-[#B9914D] transition-all duration-300">
              <FaInstagram className="text-xl" />
              <a
                href="https://instagram.com/siqah.id"
                target="_blank"
                rel="noopener noreferrer"
              >
                @siqah.id
              </a>
            </li>
          </ul>
        </div>
      </motion.div>

      {/* Garis bawah & hak cipta */}
      <div className="relative z-10 mt-12 text-center border-t border-white/20 pt-6 text-sm text-gray-300">
        © {getCurrentYear()} Siap Aqiqah. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;

