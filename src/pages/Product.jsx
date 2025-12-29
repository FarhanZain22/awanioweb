import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useLanguage } from "../Context/LanguageContext";
import { Link } from "react-router-dom";

// Images
import heroBg from "../assets/image-product/productHero.png";
import iconCost from "../assets/image-product/cost.png";
import iconImprove from "../assets/image-product/improve.png";
import iconSeamless from "../assets/image-product/seamless.png";
import iconSimplifies from "../assets/image-product/simplifies.png";
import iconHcl from "../assets/image-product/hyper.png";
import iconPlatform from "../assets/image-product/platform.png";
import iconDashboard from "../assets/image-product/dashboard.png";

const Product = () => {
  const { language } = useLanguage();

  const translations = {
    ID: {
      heroTitle: "Awanio Cloud Enabler Platform",
      heroDesc:
        "Hadirkan Kekuatan Cloud di ujung jari Anda dan ubah infrastruktur TI Anda menjadi cloud-ready.",
      exploreTitle: "Jelajahi Produk Awanio",
      exploreDesc:
        "Mulailah evolusi teknologi mutakhir bersama Awanio dan definisikan kembali lanskap digital Anda dengan gaya yang tak tertandingi dalam satu solusi kami.",
      exploreCards: [
        { title: "Integrasi Mulus", desc: "Layanan Awanio memungkinkan perusahaan untuk memanfaatkan manfaat dari berbagai layanan cloud sambil mempertahankan satu konsol manajemen terpadu.", icon: iconSeamless },
        { title: "Sederhanakan Infrastruktur", desc: "Awanio menyederhanakan pengelolaan infrastruktur cloud yang kompleks, mengurangi kompleksitas pengelolaan berbagai alat orkestrasi TI.", icon: iconSimplifies },
        { title: "Kontrol Biaya", desc: "Awanio dapat menghemat biaya dengan memberikan pandangan komprehensif terhadap seluruh sumber daya cloud, memungkinkan mereka mengidentifikasi dan menghilangkan sumber daya yang kurang dimanfaatkan.", icon: iconCost },
        { title: "Standarisasi Operasi", desc: "Awanio menyediakan platform tunggal untuk mengelola beberapa alat orkestrasi TI, yang memungkinkan bisnis menerapkan standar operasi yang konsisten di seluruh infrastruktur cloud mereka.", icon: iconImprove },
      ],
      hciTitle: "Awanio Hyper Converged Infrastructure (HCI)",
      hciDesc: "Dengan mendobrak silo, Awanio HCI membangun jembatan efisiensi tanpa batas dalam lanskap digital. Ketika inovasi bertemu dengan integrasi, lepaskan kekuatan untuk mendefinisikan ulang masa depan TI Anda.",
      hciCards: [
        { title: "Performa Luar Biasa", desc: "Awanio HCI memberikan kinerja luar biasa dengan kemampuan untuk menskalakan sumber daya komputasi, penyimpanan, dan jaringan sesuai permintaan." },
        { title: "Hemat Biaya", desc: "Awanio HCI memberikan penghematan biaya dengan pendekatan infrastruktur menyeluruh yang mengurangi biaya perangkat keras, pemeliharaan, dan perizinan." },
        { title: "Tangkas dan terukur", desc: "Awanio HCI adalah solusi fleksibel dan terukur yang dapat diterapkan di berbagai lingkungan dan mudah disesuaikan dengan perubahan kebutuhan bisnis." },
        { title: "Terpercaya dan dapat diandalkan", desc: "Awanio HCI memiliki rekam jejak yang terbukti dalam memberikan kinerja dan keandalan yang sangat penting, didukung oleh dukungan teknis ahli dan jaringan mitra global." },
      ],
      platformTitle: "Awanio Platform",
      platformDesc: "Antarmuka bagi pelanggan akhir untuk menikmati layanan cloud.",
      platformCards: [
        { title: "Compute", desc: "Infrastructure as a Service (IaaS) disediakan oleh CEP Awanio untuk menciptakan infrastruktur sesuai kebutuhan pelanggan dalam bentuk Virtual Machine (VM)." },
        { title: "Volumes", desc: "Ini adalah penyimpanan SSD/HDD berbasis jaringan yang melekat pada VM sebagai perangkat penyimpanan tambahan. Semua data disimpan di perangkat keras yang terpisah dari VM dan direplikasi beberapa kali di server berbeda." },
        { title: "Bare Metal", desc: "Sebuah layanan yang mengelola server bare metal khusus dengan mengotomatisasi proses awal pengaturan dan konfigurasi untuk meningkatkan waktu pengiriman tumpukan." },
        { title: "Organization", desc: "Layanan ini memiliki manajemen pengguna dan organisasi tingkat lanjut, serta kebijakan peran akses (IAM). Ini akan membantu perusahaan mengelola peran akses ke sumber daya yang ditunjuk." },
        { title: "Billing", desc: "CEP juga mencakup integrasi mesin penagihan dan payment gateway (PG). Hal ini dapat diterapkan untuk mempermudah proses pembayaran menurut perusahaan PG." },
        { title: "Kubernetes as a Service", desc: "Layanan yang mengatur bidang kendali berbasis container, menyediakan dan menyebarkan cluster, serta mengotomatisasi tugas sehingga pelanggan dapat meluncurkan cluster Kubernetes dalam hitungan menit." },
      ],
      dashTitle: "Awanio Dashboard",
      dashDesc: "Antarmuka untuk mengelola keseluruhan pengalaman di seluruh platform.",
      dashCards: [
        { title: "Catalogue", desc: "Fitur katalog komputasi digunakan untuk mengelola sistem operasi dan data gambar yang akan digunakan untuk membuat Mesin Virtual dan Bare Metal." },
        { title: "Machine", desc: "Fitur ini memungkinkan admin untuk mengelola layanan Bare Metal, seperti: melihat, memperbarui, dan menghapus data bare metal yang dibuat oleh pengguna di CEP Awanio." },
        { title: "Inventory", desc: "Bare Metal Inventory, merupakan fitur untuk mengelola data mesin/inventory bare metal yang tersedia, sehingga dapat digunakan oleh pengguna di CEP." },
        { title: "Price", desc: "Fitur harga digunakan untuk mengelola data spesifikasi dengan paket harga yang akan digunakan untuk pembuatan Mesin Virtual, Bare Metal, Kubernetes, dan layanan lainnya." },
        { title: "Invoice", desc: "Invoice merupakan fitur untuk melihat data billing yang ada untuk pemesanan/menggunakan Awanio CEP. Admin dapat mencetak invoice langsung ke kertas atau ke dokumen PDF." },
        { title: "Voucher", desc: "Fitur voucher digunakan untuk mengelola data voucher yang merupakan tambahan nominal pulsa pengguna." },
      ],
    },
    EN: {
      heroTitle: "Awanio Cloud Enabler Platform",
      heroDesc: "Bring The Power of The Cloud to Your Fingertips and transforms your IT infrastructure to become cloud-ready.",
      exploreTitle: "Explore Awanio Products",
      exploreDesc: "Embark on a cutting-edge technological evolution with Awanio and redefine your digital landscape in unparalleled style within a single solution us.",
      exploreCards: [
        { title: "Seamless Integration", desc: "Awanio service allows businesses to leverage the benefits of different cloud services while maintaining a single, unified management console.", icon: iconSeamless },
        { title: "Simplified Infrastructure", desc: "Awanio simplifies the management of complex cloud infrastructures, reducing the complexity of managing multiple IT orchestration tools.", icon: iconSimplifies },
        { title: "Cost Control", desc: "Awanio can save costs by providing a comprehensive view of all cloud resources, enabling them to identify and eliminate underutilized resources.", icon: iconCost },
        { title: "Standardization", desc: "Awanio provides a single platform for managing multiple IT orchestration tools, enabling businesses to enforce a consistent standard of operations across their cloud infrastructure.", icon: iconImprove },
      ],
      hciTitle: "Awanio Hyper Converged Infrastructure (HCI)",
      hciDesc: "Breaking down silos, Awanio HCI builds bridges of seamless efficiency in the digital landscape. Where innovation meets integration, unleash the power to redefine your IT future.",
      hciCards: [
        { title: "Outstanding Perfomance", desc: "SAwanio HCI delivers exceptional performance with the ability to scale compute, storage, and networking resources on demand." },
        { title: "Agile and scalable", desc: "Awanio HCI is a flexible and scalable solution that can be deployed in a variety of environments and easily adapted to changing business needs." },
        { title: "Cost Efficient", desc: "Awanio HCI provides cost savings with its all-in-one approach to infrastructure that reduces hardware, maintenance, and licensing costs." },
        { title: "Trusted and reliable", desc: "Awanio HCI has a proven track record of delivering mission-critical performance and reliability, backed by expert technical support and a global network of partners." },
      ],
      platformTitle: "Awanio Platform",
      platformDesc: "The interface for end-customers to enjoy the cloud service",
      platformCards: [
        { title: "Compute", desc: "Infrastructure as a Service (IaaS) provided by Awanio's CEP to create infrastructure according to customers` needs in the form of a Virtual Machine (VM)." },
        { title: "Volumes", desc: "This is a network-based SSD/HDD storage that attached to a VM as additional storage device. All data is stored on hardware separated from VM and replicated multiple times across different servers." },
        { title: "Bare Metal", desc: "A service that manages dedicated bare metal servers by automating the initial process of setup and configuration to improve the stack delivery times." },
        { title: "Organization", desc: "This service has an advance users and organization management, and access role policy (IAM). It will help enterprise manage access role to the designated resource." },
        { title: "Billing", desc: "The CEP also includes billing engine and payment gateway (PG) integration. It can be implemented to simplify the payment process according to the enterprise PG." },
        { title: "Kubernetes as a Service", desc: "Service that orchestrates a container-based control plane, provisions and deploys clusters, and automates tasks so customer can launch a Kubernetes cluster within minutes." },
      ],
      dashTitle: "Awanio Dashboard",
      dashDesc: "The interface to administer the overall experience across the platform.",
      dashCards: [
        { title: "Catalogue", desc: "The compute catalog feature is used to manage operating system and image data that will be used for creating Virtual Machines and Bare Metal." },
        { title: "Machine", desc: "This feature enable admin to manage Bare Metal service, such as: view, update, and delete the bare metal data created by the user in CEP Awanio." },
        { title: "Inventory", desc: "Bare Metal Inventory, is the feature to manage available bare metal machine/inventory data, so that they can be used by users in CEP." },
        { title: "Price", desc: "Price feature is used to manage specification data with a price package that will be used for creating Virtual Machines, Bare Metal, Kubernetes, and other services." },
        { title: "Invoice", desc: "Invoice is a feature to view existing billing data for ordering/using Awanio CEP. Admin can print the invoices directly to paper or to PDF document." },
        { title: "Voucher", desc: "The vouchers feature is used to manage voucher data, which is an additional nominal for user credit." },
      ],
    },
  };

  const text = translations[language];

  return (
    <>
      <Navbar active="product" />

      <main className="bg-white transition-colors duration-300 dark:bg-[#0B1221]">
        {/* HERO */}
        <section>
          <div className="relative w-full h-[380px] sm:h-[480px] lg:h-[640px]">
            <img
              src={heroBg}
              alt="Awanio Product Hero"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40"></div>
            <div className="relative z-10 max-w-[1440px] mx-auto px-6 h-full flex flex-col justify-center">
              <h1 className="text-white font-bold text-4xl lg:text-6xl leading-tight">
                {text.heroTitle}
              </h1>
              <p className="text-gray-200 text-lg max-w-[600px] mt-4">
                {text.heroDesc}
              </p>
              <div className="mt-8">
                <Link to="/demo">
                  <button className="px-16 py-4 text-white text-xl font-semibold rounded-full bg-[#0A5EA8] shadow-[0_6px_0_#063B6A] transition-all duration-100 ease-out active:translate-y-[4px] active:shadow-none">
                    Request Demo
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* EXPLORE */}
        <section className="bg-white dark:bg-[#0B1221] py-24 transition-colors duration-300">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="text-center mb-20">
              <h2 className="text-[36px] font-bold text-[#00ADEE] dark:text-[#00ADEE]">
                {text.exploreTitle}
              </h2>
              <p className="text-gray-500 dark:text-gray-400 max-w-[760px] mx-auto mt-4 leading-relaxed">
                {text.exploreDesc}
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-14">
              {text.exploreCards.map((item, i) => (
                <div key={i} className="text-left">
                  <img src={item.icon} alt={item.title} className="w-14 h-14 mb-6" />
                  <h3 className="text-lg font-bold text-[#0B1F44] dark:text-white mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="max-w-[1200px] mx-auto px-6">
          <hr className="border-t-2 border-gray-100 dark:border-gray-800" />
        </div>

        {/* HCI SECTION */}
        <section className="bg-white dark:bg-[#0B1221] py-24 transition-colors duration-300">
          <div className="max-w-[1200px] mx-auto px-6">
            <img src={iconHcl} className="w-20 h-20 mb-6" alt="HCI Icon" />
            <h2 className="text-3xl font-bold text-[#1E1E1E] dark:text-white mb-2">
              {text.hciTitle}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-[600px] mb-12">
              {text.hciDesc}
            </p>
            <div className="grid sm:grid-cols-2 gap-8">
              {text.hciCards.map((item, i) => (
                <div key={i} className="relative overflow-hidden p-8 rounded-2xl border transition-all duration-300 group bg-white border-gray-100 shadow-sm dark:bg-[#161F32] dark:border-gray-700/50 hover:border-[#00ADEE]/50 hover:shadow-lg">
                  {/* Perbaikan garis samping dengan opacity-0 */}
                  <div className="absolute top-0 left-0 w-1 h-full bg-[#00ADEE] transform -translate-x-full opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300"></div>
                  <h3 className="text-[#00ADEE] font-bold text-lg mb-3">{item.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="max-w-[1200px] mx-auto px-6">
          <hr className="border-t-2 border-gray-100 dark:border-gray-800" />
        </div>

        {/* PLATFORM SECTION */}
        <section className="bg-white dark:bg-[#0B1221] py-24 transition-colors duration-300">
          <div className="max-w-[1200px] mx-auto px-6">
            <img src={iconPlatform} className="w-20 h-20 mb-6" alt="Platform Icon" />
            <h2 className="text-3xl font-bold text-[#1E1E1E] dark:text-white mb-2">
              {text.platformTitle}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-[600px] mb-12">
              {text.platformDesc}
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {text.platformCards.map((item, i) => (
                <div key={i} className="relative overflow-hidden p-8 rounded-2xl border transition-all duration-300 group bg-[#F8F9FB] border-transparent shadow-sm dark:bg-[#161F32] dark:border-gray-700/50 hover:bg-white dark:hover:bg-[#1C263B] hover:border-[#00ADEE]/50 hover:shadow-lg">
                  <div className="absolute top-0 left-0 w-1 h-full bg-[#00ADEE] transform -translate-x-full opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300"></div>
                  <h3 className="text-[#00ADEE] font-bold text-lg mb-3">{item.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="max-w-[1200px] mx-auto px-6">
          <hr className="border-t-2 border-gray-100 dark:border-gray-800" />
        </div>

        {/* DASHBOARD SECTION - Memperbaiki space kosong di atas footer */}
        <section className="bg-white dark:bg-[#0B1221] py-24 transition-colors duration-300">
          <div className="max-w-[1200px] mx-auto px-6">
            <img src={iconDashboard} className="w-20 h-20 mb-6" alt="Dashboard Icon" />
            <h2 className="text-3xl font-bold text-[#1E1E1E] dark:text-white mb-2">
              {text.dashTitle}
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-[600px] mb-12">
              {text.dashDesc}
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {text.dashCards.map((item, i) => (
                <div key={i} className="relative overflow-hidden p-8 rounded-2xl border transition-all duration-300 group bg-[#F8F9FB] border-transparent shadow-sm dark:bg-[#161F32] dark:border-gray-700/50 hover:bg-white dark:hover:bg-[#1C263B] hover:border-[#00ADEE]/50 hover:shadow-lg">
                  <div className="absolute top-0 left-0 w-1 h-full bg-[#00ADEE] transform -translate-x-full opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300"></div>
                  <h3 className="text-[#00ADEE] font-bold text-lg mb-3">{item.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer active="product" />
    </>
  );
};

export default Product;