import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import images from "../assets";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuClass = (path) =>
    location.pathname === path
      ? "h-16 flex items-center justify-center px-6 bg-[#00ADEE] text-white transition box-border"
      : "h-16 flex items-center justify-center px-6 text-[#1E1E1E] transition box-border";

  const closeMenu = () => setOpen(false);

  return (
    <nav
      className={`
        sticky top-0 z-50 w-full flex items-center h-16 
        px-6 sm:px-10 lg:px-20 justify-between transition-all duration-300 
        backdrop-blur-xl border-b border-white/20
        ${scrolled ? "bg-white/30" : "bg-white/95"}
      `}
    >
      <Link to="/">
        <img src={images.awanlogo} alt="Logo" className="w-20 sm:w-24 cursor-pointer" />
      </Link>

      {/* Desktop Menu */}
      <div className="hidden lg:flex items-center gap-0">
        <Link to="/about" className={menuClass("/about")}>
          About
        </Link>
        <Link to="/product" className={menuClass("/product")}>
          Product
        </Link>
        <Link to="/solution" className={menuClass("/solution")}>
          Solution
        </Link>

        {/* External Links */}
        <a href="https://docs.awan.io/" target="_blank" rel="noopener noreferrer" className="h-16 flex items-center justify-center px-6 text-[#1E1E1E] transition box-border">
          Support
        </a>

        <a href="https://partner.awan.io/" target="_blank" rel="noopener noreferrer" className="h-16 flex items-center justify-center px-6 text-[#1E1E1E] transition box-border">
          Partner
        </a>

        <Link to="/demo" className={menuClass("/demo")}>
          Demo
        </Link>
        <Link to="/privacy-policy" className={menuClass("/privacy-policy")}>
          Privacy Policy
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <button className="lg:hidden ml-auto" onClick={() => setOpen(!open)}>
        <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Mobile Menu */}
      {open && (
        <div className="absolute top-16 left-0 w-full backdrop-blur-xl bg-white/80 shadow-md flex flex-col p-5 gap-4 lg:hidden z-50">
          <Link to="/about" onClick={closeMenu} className={menuClass("/about")}>
            About
          </Link>
          <Link to="/product" onClick={closeMenu} className={menuClass("/product")}>
            Product
          </Link>
          <Link to="/solution" onClick={closeMenu} className={menuClass("/solution")}>
            Solution
          </Link>

          {/* External Links (mobile) */}
          <a href="https://docs.awan.io/" target="_blank" rel="noopener noreferrer" onClick={closeMenu} className="h-16 flex items-center justify-center px-6 text-[#1E1E1E]">
            Support
          </a>

          <a href="https://partner.awan.io/" target="_blank" rel="noopener noreferrer" onClick={closeMenu} className="h-16 flex items-center justify-center px-6 text-[#1E1E1E]">
            Partner
          </a>

          <Link to="/demo" onClick={closeMenu} className={menuClass("/demo")}>
            Demo
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
