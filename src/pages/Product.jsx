import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useLanguage } from "../Context/LanguageContext";

// Import background images
import heroBg from "../assets/image-product/productHero.png";
import bgHyper from "../assets/image-product/bg-hyper.png";
import bgPlatform from "../assets/image-product/bg-platform.png";
import bgDashboard from "../assets/image-product/bg-dashboard.png";
import iconCost from "../assets/image-product/cost.png";
import iconImprove from "../assets/image-product/improve.png";
import iconSeamless from "../assets/image-product/seamless.png";
import iconSimplifies from "../assets/image-product/simplifies.png";
import bgExplore from "../assets/image-product/bg-explore.png";
import iconHcl from "../assets/image-product/Hyper.png";
import iconPlatform from "../assets/image-product/platform.png";
import iconDashboard from "../assets/image-product/dashboard.png";

const Product = () => {
  const { language } = useLanguage();

  const translations = {
    ID: {
      heroTitle: "Awanio Cloud Enabler Platform",
      heroDesc: "Hadirkan Kekuatan Cloud ke Ujung Jari Anda dan ubah infrastruktur IT Anda menjadi siap cloud.",
      exploreTitle: "Jelajahi Produk Awanio",
      exploreDesc: "Mulailah evolusi teknologi mutakhir bersama Awanio dan definisikan ulang lanskap digital Anda dengan gaya tak tertandingi dalam satu solusi.",
      exploreCards: [
        {
          title: "Integrasi Mulus",
          desc: "Layanan Awanio memungkinkan bisnis memanfaatkan keuntungan dari berbagai layanan cloud sambil mempertahankan satu konsol manajemen terpadu.",
          icon: iconSeamless,
        },
        {
          title: "Sederhanakan infrastruktur cloud",
          desc: "Awanio menyederhanakan pengelolaan infrastruktur cloud yang kompleks, mengurangi kerumitan mengelola berbagai alat orkestrasi IT.",
          icon: iconSimplifies,
        },
        {
          title: "Kontrol Biaya",
          desc: "Awanio dapat menghemat biaya dengan memberikan pandangan komprehensif tentang semua sumber daya cloud, memungkinkan bisnis mengidentifikasi dan menghilangkan sumber daya yang kurang dimanfaatkan.",
          icon: iconCost,
        },
        {
          title: "Tingkatkan standarisasi",
          desc: "Awanio menyediakan satu platform untuk mengelola berbagai alat orkestrasi IT, memungkinkan bisnis menegakkan standar operasi yang konsisten.",
          icon: iconImprove,
        },
      ],
      hciTitle: "Awanio Hyper Converged Infrastructure (HCI)",
      hciDesc:
        "Mendobrak silo, Awanio HCI membangun jembatan efisiensi yang mulus dalam lanskap digital. Di mana inovasi bertemu integrasi, lepaskan kekuatan untuk mendefinisikan ulang masa depan IT Anda.",
      hciCards: [
        { title: "Performa Luar Biasa", desc: "Awanio HCI memberikan performa luar biasa dengan kemampuan untuk menyekalakan sumber daya komputasi, penyimpanan, dan jaringan sesuai permintaan." },
        { title: "Tangkas dan Dapat Diskalakan", desc: "Awanio HCI adalah solusi fleksibel dan dapat diskalakan yang beradaptasi dengan kebutuhan bisnis yang terus berubah." },
        { title: "Efisiensi Biaya", desc: "Awanio HCI memberikan penghematan biaya dengan pendekatan infrastruktur all-in-one yang mengurangi biaya perangkat keras & lisensi." },
        { title: "Terpercaya dan Andal", desc: "Awanio HCI sangat andal dan dapat digunakan di berbagai lingkungan dengan aman." },
      ],
      platformTitle: "Awanio Platform",
      platformDesc: "Antarmuka bagi pelanggan akhir untuk menikmati layanan cloud.",
      platformCards: [
        { title: "Compute", desc: "Infrastructure as a Service (IaaS) yang disediakan oleh Awanio CEP untuk membuat infrastruktur berbasis VM." },
        { title: "Volumes", desc: "Penyimpanan SSD/HDD yang terlampir ke VM dengan multi-replikasi di seluruh server." },
        { title: "Bare Metal", desc: "Penyediaan bare metal khusus dan pengaturan otomatis untuk pengiriman cepat." },
        { title: "Organization", desc: "Manajemen pengguna tingkat lanjut, grup, dan kebijakan IAM." },
        { title: "Billing", desc: "Mesin penagihan + integrasi gateway pembayaran untuk penggunaan perusahaan." },
        { title: "Kubernetes as a Service", desc: "Penyediaan klaster otomatis untuk penyebaran Kubernetes yang cepat." },
      ],
      dashTitle: "Awanio Dashboard",
      dashDesc: "Antarmuka untuk mengelola pengalaman keseluruhan di seluruh platform.",
      dashCards: [
        { title: "Catalogue", desc: "Kelola data OS & image untuk membuat VM dan Bare Metal." },
        { title: "Machine", desc: "Kelola Bare Metal: perbarui, hapus, dan konfigurasi sumber daya." },
        { title: "Inventory", desc: "Lacak mesin/stok bare-metal yang tersedia untuk pengguna CEP." },
        { title: "Price", desc: "Kelola spesifikasi harga untuk VM, Bare Metal, Kubernetes, dan lainnya." },
        { title: "Invoice", desc: "Lihat + cetak data penagihan dalam format kertas atau PDF." },
        { title: "Voucher", desc: "Kelola data voucher kredit pengguna." },
      ],
    },
    EN: {
      heroTitle: "Awanio Cloud Enabler Platform",
      heroDesc: "Bring The Power of The Cloud to Your Fingertips and transforms your IT infrastructure to become cloud-ready.",
      exploreTitle: "Explore Awanio Products",
      exploreDesc: "Embark on a cutting-edge technological evolution with Awanio and redefine your digital landscape in unparalleled style within a single solution.",
      exploreCards: [
        {
          title: "Seamless Integration",
          desc: "Awanio service allows businesses to leverage the benefits of different cloud services while maintaining a single, unified management console.",
          icon: iconSeamless,
        },
        {
          title: "Simplifies complex cloud infrastructures",
          desc: "Awanio simplifies the management of complex cloud infrastructures, reducing the complexity of managing multiple IT orchestration tools.",
          icon: iconSimplifies,
        },
        {
          title: "Cost Control",
          desc: "Awanio can save costs by providing a comprehensive view of all cloud resources, enabling businesses to identify and eliminate underutilized resources.",
          icon: iconCost,
        },
        {
          title: "Improve standardization",
          desc: "Awanio provides a single platform for managing multiple IT orchestration tools, enabling businesses to enforce a consistent standard of operations.",
          icon: iconImprove,
        },
      ],
      hciTitle: "Awanio Hyper Converged Infrastructure (HCI)",
      hciDesc: "Breaking down silos, Awanio HCI builds bridges of seamless efficiency in the digital landscape. Where innovation meets integration, unleash the power to redefine your IT future.",
      hciCards: [
        { title: "Outstanding Performance", desc: "Awanio HCI delivers exceptional performance with the ability to scale compute, storage, and networking resources on demand." },
        { title: "Agile and Scalable", desc: "Awanio HCI is a flexible and scalable solution that adapts to changing business needs." },
        { title: "Cost Efficient", desc: "Awanio HCI provides cost savings with its all-in-one infrastructure approach that reduces hardware & licensing costs." },
        { title: "Trusted and Reliable", desc: "Awanio HCI is highly reliable and can be deployed across multiple environments securely." },
      ],
      platformTitle: "Awanio Platform",
      platformDesc: "The interface for end-customers to enjoy the cloud service.",
      platformCards: [
        { title: "Compute", desc: "Infrastructure as a Service (IaaS) provided by Awanio CEP to create VM-based infrastructure." },
        { title: "Volumes", desc: "SSD/HDD storage attached to VM with multi-replication across servers." },
        { title: "Bare Metal", desc: "Dedicated bare metal provisioning and automated setup for fast delivery." },
        { title: "Organization", desc: "Advanced user, group, and IAM policy management." },
        { title: "Billing", desc: "Billing engine + payment gateway integration for enterprise use." },
        { title: "Kubernetes as a Service", desc: "Automated cluster provisioning for fast Kubernetes deployment." },
      ],
      dashTitle: "Awanio Dashboard",
      dashDesc: "The interface to administer the overall experience across the platform.",
      dashCards: [
        { title: "Catalogue", desc: "Manage OS & image data for creating VMs and Bare Metal." },
        { title: "Machine", desc: "Manage Bare Metal: update, delete, and configure resources." },
        { title: "Inventory", desc: "Track available bare-metal machines/stock for CEP users." },
        { title: "Price", desc: "Manage price specs for VM, Bare Metal, Kubernetes, and more." },
        { title: "Invoice", desc: "View + print billing data in paper or PDF format." },
        { title: "Voucher", desc: "Manage user credit voucher data." },
      ],
    },
  };

  const text = translations[language];

  return (
    <>
      <Navbar active="product" />

      {/* Container Utama: Tambahkan dark:bg-gray-900 */}
      <div className="w-full overflow-hidden transition-colors duration-300 dark:bg-gray-900">
        {/* ======================= HERO SECTION ======================= */}
        {/* Tidak berubah karena text sudah putih dan background image menutupi */}
        <section>
          <div className=" relative w-full h-[380px] sm:h-[480px] lg:h-[640px] bg-cover bg-center">
            <img src={heroBg} alt="Awanio product Hero" className="absolute inset-0 w-full h-full object-cover" />
            <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
              <h1 className="text-white font-bold text-3xl sm:text-4xl lg:text-6xl mb-2 sm:mb-4">{text.heroTitle}</h1>
              <p className="text-gray-200 text-sm sm:text-lg lg:text-xl max-w-[600px] leading-relaxed">{text.heroDesc}</p>
            </div>
          </div>
        </section>

        {/* ======================= PRODUCTS SECTION ======================= */}
        {/* Background Image dihilangkan saat dark mode (dark:bg-none) diganti warna solid (dark:bg-gray-900) */}
        <section className="relative w-full bg-cover bg-center py-16 sm:py-20 lg:py-24 transition-colors duration-300 dark:bg-gray-900 dark:bg-none" style={{ backgroundImage: `url(${bgExplore})` }}>
          <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
            {/* TITLE */}
            <div className="text-center mb-10 sm:mb-12 lg:mb-16">
              <h2 className="text-[28px] sm:text-[32px] font-bold text-[#1E1E1E]  transition-colors">{text.exploreTitle}</h2>
              <p className="max-w-[700px] mx-auto text-black text-sm sm:text-base leading-relaxed mt-2 transition-colors">{text.exploreDesc}</p>
            </div>

            {/* CARDS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {text.exploreCards.map((item, i) => (
                <div key={i} className="bg-white dark:bg-gray-800 rounded-3xl p-6 sm:p-8 shadow-[0_8px_25px_rgba(0,0,0,0.08)] hover:shadow-xl transition-all duration-300">
                  {/* ICON */}
                  <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-linear-to-br from-blue-600 to-cyan-400 flex items-center justify-center p-4 shadow-md">
                    <img src={item.icon} alt={item.title} className="w-10 h-10 object-contain" />
                  </div>

                  {/* TITLE: Biru Tua -> Putih/Biru Terang */}
                  <h3 className="font-semibold text-[17px] text-[#1C3C78] dark:text-blue-300 text-center mb-2 transition-colors">{item.title}</h3>

                  {/* DESCRIPTION: Abu -> Abu Terang */}
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed text-center transition-colors">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ======================= HCI SECTION ======================= */}
        {/* Section ini sudah "Dark Theme" secara default (text putih), jadi aman */}
        <section className="relative w-full py-20 bg-cover bg-center" style={{ backgroundImage: `url(${bgHyper})` }}>
          <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-14 max-w-[480px]">
              <img src={iconHcl} alt="HCI" className="w-20 h-20 mb-4 opacity-90" />
              <h2 className="text-[28px] sm:text-[32px] font-bold text-white mb-4">{text.hciTitle}</h2>
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base">{text.hciDesc}</p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
              {text.hciCards.map((item, i) => (
                <div key={i} className="bg-white/5 rounded-2xl p-6 border border-white/10 backdrop-blur-sm">
                  <h3 className="text-lg font-semibold text-blue-400 mb-2">{item.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ======================= PLATFORM SECTION ======================= */}
        {/* Aman untuk Dark Mode */}
        <section className="relative w-full py-20 bg-cover bg-center" style={{ backgroundImage: `url(${bgPlatform})` }}>
          <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-14">
              <img src={iconPlatform} alt="Platform" className="w-20 h-20 mb-4 opacity-90" />
              <h2 className="text-[28px] sm:text-[32px] font-bold text-white">{text.platformTitle}</h2>
              <p className="text-gray-300 text-sm sm:text-base max-w-[600px] leading-relaxed mt-2">{text.platformDesc}</p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {text.platformCards.map((item, i) => (
                <div key={i} className="bg-white/5 rounded-2xl p-6 border border-white/10 backdrop-blur-sm">
                  <h3 className="text-lg font-semibold text-blue-400 mb-2">{item.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ======================= DASHBOARD SECTION ======================= */}
        {/* Aman untuk Dark Mode */}
        <section className="relative w-full py-20 bg-cover bg-center" style={{ backgroundImage: `url(${bgDashboard})` }}>
          <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-14">
              <img src={iconDashboard} alt="Dashboard" className="w-20 h-20 mb-4 opacity-90" />
              <h2 className="text-[28px] sm:text-[32px] font-bold text-white">{text.dashTitle}</h2>
              <p className="text-gray-300 text-sm sm:text-base max-w-[600px] leading-relaxed mt-2">{text.dashDesc}</p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {text.dashCards.map((item, i) => (
                <div key={i} className="bg-white/5 rounded-2xl p-6 border border-white/10 backdrop-blur-sm">
                  <h3 className="text-lg font-semibold text-blue-400 mb-2">{item.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      <Footer active="product" />
    </>
  );
};

export default Product;
