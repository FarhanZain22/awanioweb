import React from "react";
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
            <button className={`${menuClass("about")} text-left w-fit`}>About</button>
            <button className={`${menuClass("product")} text-left w-fit`}>Product</button>
            <button className={`${menuClass("solution")} text-left w-fit`}>Solution</button>
            <button className={`${menuClass("support")} text-left w-fit`}>Support</button>
            <button className={`${menuClass("partner")} text-left w-fit`}>Partner</button>
            <button className={`${menuClass("demo")} text-left w-fit`}>Demo</button>
            <button className={`${menuClass("privacy")} text-left w-fit`}>Privacy Policy</button>
          </div>
        </div>

        {/* Registered At */}
        <div>
          <h3 className="font-semibold text-[#1E1E1E] mb-4">Registered at</h3>

          <div className="flex flex-col space-y-4">
            {/* KOMINFO */}
            <img src={images.kominfo} alt="Kominfo" className="object-contain max-w-[30px]" />

            {/* UU PDP */}
            <img src={images.pdpl} alt="UU PDP Ready" className="object-contain max-w-[50px]" />

            {/* P3DN */}
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
          <span className="cursor-pointer hover:underline">Privacy Policy</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
