import React, { useState } from "react";
import images from "../assets";

const Navbar = ({ active = "" }) => {
  const [open, setOpen] = useState(false);

  const menuClass = (name) => (name === active ? "h-16 flex items-center justify-center px-6 bg-[#00ADEE] text-white" : "h-16 flex items-center justify-center px-2 text-[#1E1E1E] transition");

  return (
    <nav className="relative w-full bg-white flex items-center h-16 px-4 sm:px-10 lg:px-20 justify-between">
      {/* Logo */}
      <img src={images.awanlogo} alt="Logo" className="w-20 sm:w-24" />

      {/* Desktop Menu */}
      <div className="hidden lg:flex items-center gap-10">
        <button className={menuClass("about")}>About</button>
        <button className={menuClass("product")}>Product</button>
        <button className={menuClass("solution")}>Solution</button>
        <button className={menuClass("support")}>Support</button>
        <button className={menuClass("partner")}>Partner</button>
        <button className={menuClass("demo")}>Demo</button>
        <button className={menuClass("privacy")}>Privacy Policy</button>
      </div>

      {/* Mobile Hamburger */}
      <button className="lg:hidden ml-auto" onClick={() => setOpen(!open)}>
        <svg className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Mobile Menu */}
      {open && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-md flex flex-col p-5 gap-4 lg:hidden z-50">
          <button className={menuClass("about")}>About</button>
          <button className={menuClass("product")}>Product</button>
          <button className={menuClass("solution")}>Solution</button>
          <button className={menuClass("support")}>Support</button>
          <button className={menuClass("partner")}>Partner</button>
          <button className={menuClass("demo")}>Demo</button>
          <button className={menuClass("privacy")}>Privacy Policy</button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
