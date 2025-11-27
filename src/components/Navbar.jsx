import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import images from "../assets";
import { useLanguage } from "../Context/LanguageContext";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  // --- LOGIC DARK MODE ---
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  // Ambil state bahasa
  const { language, setLanguage } = useLanguage();

  // Buat Kamus Kata
  const translations = {
    ID: {
      about: "Tentang Kami",
      product: "Produk",
      solution: "Solusi",
      support: "Dukungan",
      partner: "Mitra",
      demo: "Demo",
      privacy: "Kebijakan Privasi",
      admin: "Admin",
      adminLogin: "Login Admin",
      langLabel: "BAHASA:",
    },
    EN: {
      about: "About",
      product: "Product",
      solution: "Solution",
      support: "Support",
      partner: "Partner",
      demo: "Demo",
      privacy: "Privacy Policy",
      admin: "Admin",
      adminLogin: "Admin Login",
      langLabel: "LANGUAGE:",
    },
  };

  const t = translations[language];

  const navLinks = [
    { title: t.about, path: "/about", type: "internal" },
    { title: t.product, path: "/product", type: "internal" },
    { title: t.solution, path: "/solution", type: "internal" },
    { title: t.support, path: "https://docs.awan.io/", type: "external" },
    { title: t.partner, path: "https://partner.awan.io/", type: "external" },
    { title: t.demo, path: "/demo", type: "internal" },
    { title: t.privacy, path: "/privacy-policy", type: "internal" },
  ];

  const closeMenu = () => setOpen(false);

  return (
    <header className="w-full z-50 flex flex-col font-sans bg-white dark:bg-gray-900 relative shadow-sm transition-colors duration-300">
      {/* ====================== TOP BAR ====================== */}
      <div className="hidden lg:flex justify-end items-center h-10 px-6 sm:px-10 lg:px-20 bg-gray-50 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 text-sm transition-colors duration-300">
        {/* --- TOMBOL DARK MODE --- */}
        <button
          onClick={toggleTheme}
          className="flex items-center gap-2 mr-6 pr-6 border-r border-gray-300 dark:border-gray-600 h-6 text-gray-500 dark:text-gray-300 hover:text-[#00ADEE] transition-colors"
          title={theme === "light" ? "Switch to Dark Mode" : "Switch to Light Mode"}
        >
          {theme === "light" ? (
            <>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
              <span className="text-xs font-semibold">DARK</span>
            </>
          ) : (
            <>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
              <span className="text-xs font-semibold">LIGHT</span>
            </>
          )}
        </button>

        {/* Language Switcher */}
        <div className="flex items-center gap-3 pr-6 border-r border-gray-300 dark:border-gray-600 h-6">
          <span className="text-gray-500 dark:text-gray-400 text-xs font-semibold tracking-wide">{t.langLabel}</span>
          <button
            onClick={() => setLanguage("ID")}
            className={`flex items-center gap-1 font-bold transition-colors ${language === "ID" ? "text-[#00ADEE]" : "text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"}`}
          >
            <span className="text-xs">ID</span>
          </button>
          <button
            onClick={() => setLanguage("EN")}
            className={`flex items-center gap-1 font-bold transition-colors ${language === "EN" ? "text-[#00ADEE]" : "text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"}`}
          >
            <span className="text-xs">EN</span>
          </button>
        </div>

        {/* Admin Link */}
        <Link to="/login" className="flex items-center gap-2 pl-6 text-[#1E1E1E] dark:text-gray-200 hover:text-[#00ADEE] dark:hover:text-[#00ADEE] font-semibold transition-colors">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
          {t.admin}
        </Link>
      </div>

      {/* ====================== MAIN NAVBAE ====================== */}
      <nav className="w-full flex items-center h-20 px-6 sm:px-10 lg:px-20 justify-between bg-white dark:bg-gray-900 transition-colors duration-300">
        {/* LOGO */}
        <Link to="/" onClick={closeMenu}>
          <img src={images.awanlogo} alt="Logo" className="w-24 sm:w-28 cursor-pointer" />
        </Link>

        {/* MENU DESKTOP */}
        <div className="hidden lg:flex items-center gap-6 ml-auto">
          {navLinks.map((link, index) =>
            link.type === "internal" ? (
              <Link
                key={index}
                to={link.path}
                className={`text-base font-medium transition hover:text-[#00ADEE] ${location.pathname === link.path ? "text-[#00ADEE]" : "text-[#1E1E1E] dark:text-gray-100"}`}
              >
                {link.title}
              </Link>
            ) : (
              <a key={index} href={link.path} target="_blank" rel="noopener noreferrer" className="text-base font-medium text-[#1E1E1E] dark:text-gray-100 transition hover:text-[#00ADEE]">
                {link.title}
              </a>
            )
          )}
        </div>

        {/* MOBILE MENU BUTTON */}
        <button className="lg:hidden ml-auto text-[#1E1E1E] dark:text-white" onClick={() => setOpen(!open)}>
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
          className={`absolute top-full left-0 w-full bg-white dark:bg-gray-900 shadow-lg flex flex-col lg:hidden transition-all duration-300 overflow-hidden z-50 ${
            open ? "max-h-screen py-5 opacity-100" : "max-h-0 py-0 opacity-0"
          }`}
        >
          {navLinks.map((link, index) =>
            link.type === "internal" ? (
              <Link
                key={index}
                to={link.path}
                onClick={closeMenu}
                className={`py-3 px-6 font-medium border-b border-gray-50 dark:border-gray-800 hover:text-[#00ADEE] transition-colors ${
                  location.pathname === link.path ? "text-[#00ADEE]" : "text-[#1E1E1E] dark:text-gray-100"
                }`}
              >
                {link.title}
              </Link>
            ) : (
              <a
                key={index}
                href={link.path}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
                className="py-3 px-6 font-medium border-b border-gray-50 dark:border-gray-800 hover:text-[#00ADEE] transition-colors text-[#1E1E1E] dark:text-gray-100"
              >
                {link.title}
              </a>
            )
          )}

          {/* Mobile Bottom Actions */}
          <div className="flex justify-between items-center px-6 mt-4 pt-4 bg-gray-50 dark:bg-gray-800 mx-4 rounded-lg">
            <div className="flex gap-4 py-3">
              <button onClick={() => setLanguage("ID")} className={`${language === "ID" ? "text-[#00ADEE] font-bold" : "text-gray-400"}`}>
                ID
              </button>
              <span className="text-gray-300">|</span>
              <button onClick={() => setLanguage("EN")} className={`${language === "EN" ? "text-[#00ADEE] font-bold" : "text-gray-400"}`}>
                EN
              </button>
            </div>

            <button onClick={toggleTheme} className="text-gray-500 dark:text-gray-300 hover:text-[#00ADEE]">
              {theme === "light" ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
              )}
            </button>

            <Link to="/login" onClick={closeMenu} className="text-[#1E1E1E] dark:text-gray-100 font-medium hover:text-[#00ADEE]">
              {t.adminLogin}
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
