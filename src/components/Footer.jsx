import React from "react";
import { Link } from "react-router-dom";
import images from "../assets";
import { useLanguage } from "../Context/LanguageContext";

const Footer = ({ active = "" }) => {
  // Update menuClass: tambahkan dark:text-gray-400 untuk state tidak aktif
  const menuClass = (name) => (name === active ? "text-[#00ADEE] font-semibold" : "text-[#555] dark:text-gray-400");

  const { language } = useLanguage();

  const translations = {
    ID: {
      explore: "Jelajahi",
      registered: "Terdaftar di",
      touch: "Hubungi Kami",
      about: "Tentang Kami",
      product: "Produk",
      solution: "Solusi",
      support: "Dukungan",
      partner: "Mitra",
      demo: "Demo",
      privacy: "Kebijakan Privasi",
      address: "Ashta District 8, Treasury Tower, Jl. Jend. Sudirman Kav. 52-53 Lantai 16, SCBD, Kebayoran Baru, Jakarta Selatan 12190",
      copyright: "Awanio © 2023",
    },
    EN: {
      explore: "Explore us",
      registered: "Registered at",
      touch: "Get in touch",
      about: "About",
      product: "Product",
      solution: "Solution",
      support: "Support",
      partner: "Partner",
      demo: "Demo",
      privacy: "Privacy Policy",
      address: "Ashta District 8, Treasury Tower, Jl. Jend. Sudirman Kav. 52-53 Floor 16, SCBD, Kebayoran Baru, Jakarta Selatan 12190",
      copyright: "Awanio © 2023",
    },
  };

  const t = translations[language];

  return (
    // 1. Background utama berubah jadi gelap
    <footer className="bg-white dark:bg-gray-900 mt-20 transition-colors duration-300 border-t border-transparent dark:border-gray-800">
      <div className="max-w-[1200px] mx-auto px-8 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Logo Section */}
        <div>
          {/* Filter invert agar logo hitam menjadi putih di dark mode */}
          <img src={images.awanlogo} alt="Awanio Logo" className="w-32 mb-4 dark:brightness-0 dark:invert transition-all duration-300" />
        </div>

        {/* Explore Us */}
        <div>
          {/* Judul H3 berubah jadi putih */}
          <h3 className="font-semibold text-[#1E1E1E] dark:text-gray-100 mb-4">{t.explore}</h3>

          <div className="flex flex-col gap-2">
            <Link to="/about" className={`${menuClass("about")} w-fit hover:text-[#00ADEE] transition-colors`}>
              {t.about}
            </Link>
            <Link to="/product" className={`${menuClass("product")} w-fit hover:text-[#00ADEE] transition-colors`}>
              {t.product}
            </Link>
            <Link to="/solution" className={`${menuClass("solution")} w-fit hover:text-[#00ADEE] transition-colors`}>
              {t.solution}
            </Link>

            <a href="https://docs.awan.io/" target="_blank" rel="noopener noreferrer" className={`w-fit ${menuClass("support")} hover:text-[#00ADEE] transition-colors`}>
              {t.support}
            </a>

            <a href="https://partner.awan.io/" target="_blank" rel="noopener noreferrer" className={`w-fit ${menuClass("partner")} hover:text-[#00ADEE] transition-colors`}>
              {t.partner}
            </a>

            <Link to="/demo" className={`${menuClass("demo")} w-fit hover:text-[#00ADEE] transition-colors`}>
              {t.demo}
            </Link>
            <Link to="/privacy-policy" className={`${menuClass("privacy")} w-fit hover:text-[#00ADEE] transition-colors`}>
              {t.privacy}
            </Link>
          </div>
        </div>

        {/* Registered At */}
        <div>
          <h3 className="font-semibold text-[#1E1E1E] dark:text-gray-100 mb-4">{t.registered}</h3>
          <div className="flex flex-col space-y-4">
            {/* Logo partner biasanya berwarna, jika perlu background putih tambahkan 'bg-white p-1 rounded' */}
            {/* Di sini saya tambahkan filter brightness agar sedikit lebih terang di background gelap */}
            <img src={images.kominfo} alt="Kominfo" className="object-contain max-w-[30px] dark:brightness-200" />
            <img src={images.pdpl} alt="UU PDP Ready" className="object-contain max-w-[50px] dark:brightness-200" />
            <img src={images.p3dn} alt="P3DN" className="object-contain max-w-[50px] dark:brightness-200" />
          </div>
        </div>

        {/* Get in touch */}
        <div>
          <h3 className="font-semibold text-[#1E1E1E] dark:text-gray-100 mb-4">{t.touch}</h3>

          <p className="text-[#555] dark:text-gray-400 text-sm leading-relaxed mb-6">{t.address}</p>

          {/* Phone */}
          <div className="flex items-center gap-2 text-[#555] dark:text-gray-400 mb-3">
            {/* Icon di-invert jadi putih */}
            <img src={images.telpon} className="w-4 dark:invert" alt="phone" />
            <span>+622150919543</span>
          </div>

          {/* Email */}
          <div className="flex items-center gap-2 text-[#555] dark:text-gray-400 mb-6">
            <img src={images.mail} className="w-4 dark:invert" alt="email" />
            <span>ask@awan.io</span>
          </div>

          {/* Social Icons - Invert hitam ke putih */}
          <div className="flex gap-3">
            <img src={images.facebook} className="w-6 cursor-pointer hover:opacity-80 transition-opacity dark:invert" alt="facebook" />
            <img src={images.twitter} className="w-6 cursor-pointer hover:opacity-80 transition-opacity dark:invert" alt="twitter" />
            <img src={images.linkedin} className="w-6 cursor-pointer hover:opacity-80 transition-opacity dark:invert" alt="linkedin" />
            <img src={images.instagram} className="w-6 cursor-pointer hover:opacity-80 transition-opacity dark:invert" alt="instagram" />
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      {/* Ubah border color agar tidak terlalu terang di dark mode */}
      <div className="py-4 mt-10 border-t border-gray-100 dark:border-gray-800 transition-colors duration-300">
        <div className="max-w-[1200px] mx-auto px-8 flex flex-col sm:flex-row justify-between items-center text-sm text-[#555] dark:text-gray-500 gap-4 sm:gap-0">
          <span>{t.copyright}</span>

          <Link to="/privacy-policy" className="cursor-pointer hover:text-[#00ADEE] transition-colors">
            {t.privacy}
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
