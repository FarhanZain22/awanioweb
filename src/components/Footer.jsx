import React from "react";
import { Link } from "react-router-dom";
import images from "../assets";

const Footer = ({ active = "" }) => {
  const menuClass = (name) => (name === active ? "text-[#00ADEE] font-semibold" : "text-[#555]");

  return (
    <footer className="bg-white mt-20">
      <div className="max-w-[1200px] mx-auto px-8 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Logo Section */}
        <div>
          <img src={images.awanlogo} alt="Awanio Logo" className="w-32 mb-4" />
        </div>

        {/* Explore Us (NAV STYLE) */}
        <div>
          <h3 className="font-semibold text-[#1E1E1E] mb-4">Explore us</h3>

          <div className="flex flex-col gap-2">
            {/* Internal Routes */}
            <Link to="/about" className={`${menuClass("about")} w-fit`}>
              About
            </Link>
            <Link to="/product" className={`${menuClass("product")} w-fit`}>
              Product
            </Link>
            <Link to="/solution" className={`${menuClass("solution")} w-fit`}>
              Solution
            </Link>

            {/* External Links */}
            <a href="https://docs.awan.io/" target="_blank" rel="noopener noreferrer" className={`w-fit ${menuClass("support")}`}>
              Support
            </a>

            <a href="https://partner.awan.io/" target="_blank" rel="noopener noreferrer" className={`w-fit ${menuClass("partner")}`}>
              Partner
            </a>

            {/* Internal Routes */}
            <Link to="/demo" className={`${menuClass("demo")} w-fit`}>
              Demo
            </Link>
            <Link to="/privacy-policy" className={`${menuClass("privacy")} w-fit`}>
              Privacy Policy
            </Link>
          </div>
        </div>

        {/* Registered At */}
        <div>
          <h3 className="font-semibold text-[#1E1E1E] mb-4">Registered at</h3>
          <div className="flex flex-col space-y-4">
            <img src={images.kominfo} alt="Kominfo" className="object-contain max-w-[30px]" />
            <img src={images.pdpl} alt="UU PDP Ready" className="object-contain max-w-[50px]" />
            <img src={images.p3dn} alt="P3DN" className="object-contain max-w-[50px]" />
          </div>
        </div>

        {/* Get in touch */}
        <div>
          <h3 className="font-semibold text-[#1E1E1E] mb-4">Get in touch</h3>
          <p className="text-[#555] text-sm leading-relaxed mb-6">Ashta District 8, Treasury Tower, Jl. Jend. Sudirman Kav. 52-53 Floor 16, SCBD, Kebayoran Baru, Jakarta Selatan 12190</p>

          <div className="flex items-center gap-2 text-[#555] mb-3">
            <img src={images.telpon} className="w-4" />
            <span>+622150919543</span>
          </div>

          <div className="flex items-center gap-2 text-[#555] mb-6">
            <img src={images.mail} className="w-4" />
            <span>ask@awan.io</span>
          </div>

          <div className="flex gap-3">
            <img src={images.facebook} className="w-6 cursor-pointer" />
            <img src={images.twitter} className="w-6 cursor-pointer" />
            <img src={images.linkedin} className="w-6 cursor-pointer" />
            <img src={images.instagram} className="w-6 cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="py-4 mt-10">
        <div className="max-w-[1200px] mx-auto px-8 flex justify-between text-sm text-[#555]">
          <span>Awanio © 2023</span>

          <Link to="/privacy-policy" className="cursor-pointer hover:underline">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
