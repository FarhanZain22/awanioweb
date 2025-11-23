import React, { useState } from "react"; // useEffect dihapus karena tidak butuh deteksi scroll lagi
import { Link, useLocation } from "react-router-dom";
import images from "../assets";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [lang, setLang] = useState("ID");
  const location = useLocation();

  const navLinks = [
    { title: "About", path: "/about", type: "internal" },
    { title: "Product", path: "/product", type: "internal" },
    { title: "Solution", path: "/solution", type: "internal" },
    { title: "Support", path: "https://docs.awan.io/", type: "external" },
    { title: "Partner", path: "https://partner.awan.io/", type: "external" },
    { title: "Demo", path: "/demo", type: "internal" },
    { title: "Privacy Policy", path: "/privacy-policy", type: "internal" },
  ];

  const closeMenu = () => setOpen(false);

  return (
    // HAPUS 'fixed top-0'. Ganti jadi 'relative' atau biarkan default.
    // Tambahkan 'bg-white' agar background-nya pasti putih.
    <header className="w-full z-50 flex flex-col font-sans bg-white relative shadow-sm">
      {/* --- BAGIAN 1: TOP BAR --- */}
      <div className="hidden lg:flex justify-end items-center h-10 px-6 sm:px-10 lg:px-20 bg-gray-50 border-b border-gray-200 text-sm">
        {/* Language Switcher */}
        <div className="flex items-center gap-3 pr-6 border-r border-gray-300 h-6">
          <span className="text-gray-500 text-xs font-semibold tracking-wide">BAHASA:</span>
          <button onClick={() => setLang("ID")} className={`flex items-center gap-1 font-bold transition-colors ${lang === "ID" ? "text-[#00ADEE]" : "text-gray-400 hover:text-gray-600"}`}>
            <span className="text-xs">ID</span>
          </button>
          <button onClick={() => setLang("EN")} className={`flex items-center gap-1 font-bold transition-colors ${lang === "EN" ? "text-[#00ADEE]" : "text-gray-400 hover:text-gray-600"}`}>
            <span className="text-xs">EN</span>
          </button>
        </div>

        {/* Admin Link */}
        <Link to="/login" className="flex items-center gap-2 pl-6 text-[#1E1E1E] hover:text-[#00ADEE] font-semibold transition-colors">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
          Admin
        </Link>
      </div>

      {/* --- BAGIAN 2: MAIN NAVBAR --- */}
      <nav className="w-full flex items-center h-20 px-6 sm:px-10 lg:px-20 justify-between bg-white">
        {/* LOGO */}
        <Link to="/" onClick={closeMenu}>
          <img src={images.awanlogo} alt="Logo" className="w-24 sm:w-28 cursor-pointer" />
        </Link>

        {/* MENU DESKTOP */}
        <div className="hidden lg:flex items-center gap-6 ml-auto">
          {navLinks.map((link, index) =>
            link.type === "internal" ? (
              <Link key={index} to={link.path} className={`text-base font-medium transition hover:text-[#00ADEE] ${location.pathname === link.path ? "text-[#00ADEE]" : "text-[#1E1E1E]"}`}>
                {link.title}
              </Link>
            ) : (
              <a key={index} href={link.path} target="_blank" rel="noopener noreferrer" className="text-base font-medium text-[#1E1E1E] transition hover:text-[#00ADEE]">
                {link.title}
              </a>
            )
          )}
        </div>

        {/* MOBILE MENU BUTTON */}
        <button className="lg:hidden ml-auto text-[#1E1E1E]" onClick={() => setOpen(!open)}>
          {open ? (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>

        {/* MOBILE DROPDOWN */}
        <div
          className={`absolute top-full left-0 w-full bg-white shadow-lg flex flex-col lg:hidden transition-all duration-300 overflow-hidden z-50 ${
            open ? "max-h-screen py-5 opacity-100" : "max-h-0 py-0 opacity-0"
          }`}
        >
          {navLinks.map((link, index) => (
            <Link key={index} to={link.path} onClick={closeMenu} className="py-3 px-6 text-[#1E1E1E] hover:text-[#00ADEE] font-medium border-b border-gray-50">
              {link.title}
            </Link>
          ))}
          <div className="flex justify-between items-center px-6 mt-4 pt-4 bg-gray-50 mx-4 rounded-lg">
            <div className="flex gap-4 py-3">
              <button onClick={() => setLang("ID")} className={`${lang === "ID" ? "text-[#00ADEE] font-bold" : "text-gray-400"}`}>
                ID
              </button>
              <span className="text-gray-300">|</span>
              <button onClick={() => setLang("EN")} className={`${lang === "EN" ? "text-[#00ADEE] font-bold" : "text-gray-400"}`}>
                EN
              </button>
            </div>
            <Link to="/login" onClick={closeMenu} className="text-[#1E1E1E] font-medium hover:text-[#00ADEE]">
              Admin Login
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
