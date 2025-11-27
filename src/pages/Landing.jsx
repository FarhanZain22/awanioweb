import React from "react";
import Navbar from "../components/Navbar";
import images from "../assets";
import Card from "../components/Card";
import Footer from "../components/Footer";
import { useLanguage } from "../Context/LanguageContext";

const logos = [
  images.amt,
  images.awanawa,
  images.dxy,
  images.exalogi,
  images.festino,
  images.fusion,
  images.ibm,
  images.idcloudHost,
  images.inticloud,
  images.intikom,
  images.jasaraharja,
  images.krakatau,
  images.metrocom,
  images.mitramandiri,
  images.sapta,
  images.sentra,
  images.sinergi,
  images.synex,
];

const Landing = () => {
  const { language } = useLanguage();

  const translations = {
    ID: {
      heroTitle: "Platform Cloud Enabler untuk menyederhanakan manajemen sumber daya",
      heroDesc:
        "Ubah Pusat Data Anda dengan Awanio Cloud Enabler Platform (CEP) – Solusi Modern untuk Manajemen Beban Kerja Virtual dan Terkontainerisasi yang Mulus. Rasakan Kekuatan Fleksibilitas Cloud di Infrastruktur Pribadi Anda, Melampaui Hypervisor Tradisional.",
      btnStart: "Mulai Sekarang",
      feat1Title: "Percepat Pengembangan",
      feat1Desc: "Awanio mempercepat siklus pengembangan dari ide menjadi aplikasi yang dapat diakses langsung oleh pengguna akhir tanpa harus mengurusi infrastruktur.",
      feat2Title: "Skalabilitas Tinggi",
      feat2Desc: "Awanio membuat proses penyebaran, konfigurasi, penskalaan, penyetelan, dan pengelolaan aplikasi menjadi mudah dan sederhana.",
      feat3Title: "Fokus Pengalaman Pengguna",
      feat3Desc:
        "Awanio menyediakan layanan yang tidak hanya berfokus pada pengguna bisnis, tetapi juga menonjolkan pengalaman pengembang (DX) agar pengembang dapat menggunakan teknologi terbaru yang memberikan nilai lebih.",
      feat4Title: "Percepat Pengembangan",
      feat4Desc: "Awanio mempromosikan alur kerja aplikasi modern, dari fase pengembangan, penyebaran, hingga lingkungan produksi.",
      vidTitle: "Menyederhanakan Layanan Cloud",
      vidDesc: "Awanio menyederhanakan pengelolaan infrastruktur cloud yang kompleks, mengurangi kerumitan mengelola berbagai alat orkestrasi IT.",
      waysTitle: "Cara berkreasi dengan Awanio",
      waysDesc:
        '"Tingkatkan pengalaman cloud Anda. Buka potensi penuh Anda dengan Awanio HCI, solusi infrastruktur hyper-converged terbaik untuk operasi IT yang tangkas, efisien, dan dapat diskalakan."',
      w1Title: "Kelangsungan Bisnis - Optimasi DC",
      w1Desc: "Aktifkan kemampuan untuk memastikan perusahaan dapat membuat infrastruktur yang sangat tersedia dan tangguh yang dapat menahan pemadaman dan bencana.",
      w2Title: "Ketangkasan Bisnis - Kontrol Biaya",
      w2Desc:
        "Perusahaan bisa mendapatkan visibilitas ke dalam biaya cloud mereka, sehingga tim IT dapat membuat keputusan tentang alokasi sumber daya dan mengoptimalkan penggunaan private cloud untuk penghematan biaya.",
      w3Title: "Otomatisasi - Manajemen Mulus",
      w3Desc:
        "Awanio dirancang agar dapat disesuaikan dan mendukung integrasi dengan alat pengembangan yang ada. Integrasi ini memungkinkan otomatisasi proses pembuatan infrastruktur IT, menyederhanakan alur kerja.",
      w4Title: "Pemantauan Berkelanjutan & Terkonsolidasi",
      w4Desc: "Perusahaan akan dapat memiliki pandangan berkelanjutan dan terkonsolidasi tentang pemanfaatan sumber daya private cloud: CPU, Memori, Jaringan, Penyimpanan, serta penggunaan keuangan.",
      w5Title: "Solusi Pencadangan & Pemulihan Tertanam",
      w5Desc:
        "Pencadangan dan pemulihan tidak pernah semudah ini. Fitur ini tertanam dalam Awanio CEP. Dapat membuat cadangan file, folder, serta gambar sistem untuk pemulihan jika terjadi kerusakan data.",
      w6Title: "Manajemen Terpusat",
      w6Desc:
        "Layanan bare metal Awanio menyediakan platform manajemen terpusat untuk mengelola server di berbagai pusat data. Ini memastikan perusahaan dapat dengan mudah mengelola infrastruktur di mana pun lokasinya.",
      trustTitle: "Dipercaya oleh",
      trustDesc: "Kami dipercaya oleh perusahaan-perusahaan berikut dan ini telah menjadi perjalanan yang paling luar biasa.",
    },
    EN: {
      heroTitle: "A Cloud Enabler Platform to simplify resources management",
      heroDesc:
        "Transform Your Data Center with Awanio Cloud Enabler Platform (CEP) – The Modern Solution for Seamless Virtual and Containerized Workload Management. Experience the Power of Cloud Flexibility in Your Private Infrastructure, Beyond Traditional Hypervisors.",
      btnStart: "Get Started",
      feat1Title: "Speed-up Development",
      feat1Desc: "Awanio accelerates the development cycle from ideas to applications that end-users can directly access without having to mess around with infrastructure.",
      feat2Title: "High Scalability",
      feat2Desc: "Awanio makes the process of deployment, configuration, scaling, tuning, and managing applications easy and simple.",
      feat3Title: "User Experience Focused",
      feat3Desc:
        "Awanio provides services that focus not only for the business user, but also accentuate the developer experience (DX) so that developers can use and utilize the latest technology that can provide more value to their applications.",
      feat4Title: "Speed-up Development",
      feat4Desc: "Awanio promoting modern application workflows, from the development phase, deployment, until the production environment.",
      vidTitle: "Simplifying Cloud Services",
      vidDesc: "Awanio simplifies the management of complex cloud infrastructures, reducing the complexity of managing multiple IT orchestration tools.",
      waysTitle: "Ways to create with Awanio",
      waysDesc: '"Enhance your cloud experience. Unleash your full potential with Awanio HCI the ultimate hyper-converged infrastructure solution for agile, efficient, and scalable IT operations."',
      w1Title: "Business Continuity - DC Optimization",
      w1Desc: "Enable the capabilities to ensure company can create a highly available and resilient infrastructure that can withstand outages and disasters.",
      w2Title: "Business Agility - Cost Control",
      w2Desc:
        "Company can gain visibility into their cloud costs, so IT team will be able to make decisions about resource allocation, and optimize their private cloud usage to achieve cost savings.",
      w3Title: "Automation - Seamless Management",
      w3Desc:
        "Awanio is designed to be customizable, and supports integration with existing dev tools. This integration enables automation of the creation process of IT infrastructure, streamlining workflows and reducing manual effort.",
      w4Title: "Continuous and Consolidated Monitoring",
      w4Desc: "Company will be able to have a continuous and consolidated view of the private cloud resource utilization: CPU, Memory, Network, Storage, as well as financial usage and transaction.",
      w5Title: "Embedded Backup and Recovery Solution",
      w5Desc:
        "Backup and recovery is never been this easy. Backup and recovery is the feature embed in Awanio Cloud Enabler Platform. It can create file and folder backups, as well as system images backups, to be used for recovery in the event of data corruption, hard disk drive failure, or malware infection.",
      w6Title: "Centralized Management",
      w6Desc:
        "Awanio's bare metal services provide a centralized management platform that can be used to manage servers across multiple data centers. This ensures that company can easily manage and monitor their infrastructure, regardless of where it is located.",
      trustTitle: "Trusted by",
      trustDesc: "We are trusted by following companies and it has been the most incredible journey.",
    },
  };

  const text = translations[language];

  const featuresList = [
    { icon: images.speed, title: text.feat1Title, desc: text.feat1Desc },
    { icon: images.speed1, title: text.feat2Title, desc: text.feat2Desc },
    { icon: images.user, title: text.feat3Title, desc: text.feat3Desc },
    { icon: images.speed2, title: text.feat4Title, desc: text.feat4Desc },
  ];

  const waysList = [
    { img: images.landing1, title: text.w1Title, desc: text.w1Desc },
    { img: images.landing2, title: text.w2Title, desc: text.w2Desc },
    { img: images.landing3, title: text.w3Title, desc: text.w3Desc },
    { img: images.landing4, title: text.w4Title, desc: text.w4Desc },
    { img: images.landing5, title: text.w5Title, desc: text.w5Desc },
    { img: images.landing6, title: text.w6Title, desc: text.w6Desc },
  ];

  return (
    <>
      <Navbar />
      {/* Tambahkan dark:bg-gray-900 di main agar transisi smooth */}
      <main className="transition-colors duration-300 dark:bg-gray-900">
        {/* ========== LANDING HERO ========== */}
        <section>
          {/* Gambar Background Hero tidak perlu dark mode karena menimpa background */}
          <div className="relative w-full h-[360px] sm:h-[480px] lg:h-[635px] bg-cover bg-center">
            <img src={images.landinghero} alt="Awanio Solution Hero" className="absolute inset-0 w-full h-full object-cover" />

            <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
              <div className="max-w-[650px]">
                <h1 className="text-white font-bold text-2xl sm:text-3xl lg:text-4xl leading-tight mb-3">{text.heroTitle}</h1>
                <p className="text-gray-200 text-xs sm:text-sm lg:text-[16px] leading-relaxed">{text.heroDesc}</p>
                {/* Button hover effect diperhalus */}
                <button className="w-fit px-6 py-3 text-white bg-[#00539B] dark:bg-[#00ADEE] rounded-[30px] text-sm sm:text-base mt-4 hover:bg-[#004080] dark:hover:bg-[#008CC9] transition">
                  {text.btnStart}
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ========== FEATURE CARDS ========== */}
        {/* Background berubah jadi gelap di dark mode */}
        <section className="py-12 sm:py-16 lg:py-20 bg-[#F8F9FB] dark:bg-gray-900 transition-colors duration-300">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
            {/* FEATURE CARDS (Catatan: Card.js juga harus diupdate manual untuk support dark mode) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
              {featuresList.map((item, idx) => (
                <Card key={idx} icon={item.icon} title={item.title} description={item.desc} />
              ))}
            </div>

            {/* TEXT + VIDEO */}
            {/* Container video berubah jadi dark gray */}
            <div className="mt-16 p-8 rounded-xl bg-white dark:bg-gray-800 shadow-[0_4px_12px_rgba(0,0,0,0.06)] grid grid-cols-1 lg:grid-cols-2 gap-10 items-center transition-colors duration-300">
              <div>
                {/* Judul Biru sedikit diterangkan agar kontras di dark mode */}
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1E6BB8] dark:text-[#4CA1E6] mb-4">{text.vidTitle}</h2>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed max-w-md">{text.vidDesc}</p>
              </div>

              <div className="w-full aspect-video rounded-xl overflow-hidden shadow">
                <iframe className="w-full h-full" src="https://www.youtube.com/embed/eUKYvPis5VI" title="Awanio - Simplifying Cloud Services" allowFullScreen />
              </div>
            </div>
          </div>
        </section>

        {/* ========== WAYS TO CREATE SECTION ========== */}
        {/* Background section jadi gelap */}
        <section className="py-16 bg-white dark:bg-gray-900 transition-colors duration-300">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1E6BB8] dark:text-[#4CA1E6] mb-4">{text.waysTitle}</h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-12 text-sm sm:text-base">{text.waysDesc}</p>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 text-left">
              {waysList.map((item, idx) => (
                <div key={idx} className="border border-gray-200 dark:border-gray-700 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-sm hover:shadow-md transition bg-white dark:bg-gray-800">
                  <img src={item.img} className="w-24 sm:w-32 lg:w-40 h-auto mx-auto mb-3 sm:mb-4" alt={item.title} />
                  <h3 className="text-base sm:text-lg font-semibold text-gray-800 dark:text-gray-100 mb-2">{item.title}</h3>
                  <p className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm lg:text-[14px] leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ========== TRUSTED BY ========== */}
        <section className="py-16 bg-gray-50 dark:bg-gray-950 transition-colors duration-300">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 text-center mb-10">
            <h2 className="text-3xl font-bold text-[#1E6BB8] dark:text-[#4CA1E6]">{text.trustTitle}</h2>
            <p className="text-gray-600 dark:text-gray-400 mt-2">{text.trustDesc}</p>
          </div>

          {/* Sponsor strip: Warna putih -> Dark Gray */}
          <div className="w-full bg-white dark:bg-gray-800 shadow-lg py-6 overflow-hidden transition-colors duration-300">
            <div className="flex items-center gap-16 w-max animate-scroll px-8">
              {/* Note: Menambahkan 'dark:invert dark:brightness-0' agar logo hitam jadi putih */}
              {logos.map((logo, i) => (
                <img key={i} src={logo} className="h-12 object-contain opacity-90 dark:opacity-80 dark:brightness-0 dark:invert transition-all" alt="sponsor" />
              ))}
              {logos.map((logo, i) => (
                <img key={`dup-${i}`} src={logo} className="h-12 object-contain opacity-90 dark:opacity-80 dark:brightness-0 dark:invert transition-all" alt="sponsor" />
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Pastikan Footer juga diupdate manual jika belum support dark mode */}
      <Footer />
    </>
  );
};

export default Landing;
