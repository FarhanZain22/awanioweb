import React from "react";
import Navbar from "../components/Navbar";
import images from "../assets";
import Card from "../components/card";
import Footer from "../components/Footer";

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
  return (
    <>
      <Navbar />
      <main>
        {/* ========== LANDING HERO ========== */}
        <section>
          <div className="relative w-full h-[360px] sm:h-[480px] lg:h-[635px] bg-cover bg-center">
            <img src={images.landinghero} alt="Awanio Solution Hero" className="absolute inset-0 w-full h-full object-cover" />

            <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
              <div className="max-w-[650px]">
                <h1 className="text-white font-bold text-2xl sm:text-3xl lg:text-4xl leading-tight mb-3">A Cloud Enabler Platform to simplify resources management</h1>

                <p className="text-gray-200 text-xs sm:text-sm lg:text-[16px] leading-relaxed">
                  Transform Your Data Center with Awanio Cloud Enabler Platform (CEP) – The Modern Solution for Seamless Virtual and Containerized Workload Management. Experience the Power of Cloud
                  Flexibility in Your Private Infrastructure, Beyond Traditional Hypervisors.
                </p>

                <button className="w-fit px-6 py-3 text-white bg-[#00539B] rounded-[30px] text-sm sm:text-base mt-4">Get Started</button>
              </div>
            </div>
          </div>
        </section>

        {/* ========== FEATURE CARDS ========== */}
        <section className="py-12 sm:py-16 lg:py-20 bg-[#F8F9FB]">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
            {/* FEATURE CARDS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
              <Card
                icon={images.speed}
                title="Speed-up Development"
                description="Awanio accelerates the development cycle from ideas to applications that end-users can directly access without having to mess around with infrastructure."
              />
              <Card icon={images.speed1} title="High Scalability" description="Awanio makes the process of deployment, configuration, scaling, tuning, and managing applications easy and simple." />
              <Card
                icon={images.user}
                title="User Experience Focused"
                description="Awanio provides services that focus not only for the business user, but also accentuate the developer experience (DX) so that developers, can use and utilize the latest technology that can provide more value to their applications."
              />
              <Card
                icon={images.speed2}
                title="Speed-up Development"
                description="Awanio promoting modern application workflows, from the development phase, deployment, until the production environment."
              />
            </div>

            {/* TEXT + VIDEO */}
            <div className=" mt-16 p-8 rounded-xl  bg-white shadow-[0_4px_12px_rgba(0,0,0,0.06)] grid grid-cols-1 lg:grid-cols-2 gap-10 items-center ">
              <div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1E6BB8] mb-4">Simplifying Cloud Services</h2>

                <p className="text-gray-600 leading-relaxed max-w-md">
                  Awanio simplifies the management of complex cloud infrastructures, reducing the complexity of managing multiple IT orchestration tools.
                </p>
              </div>

              <div className="w-full aspect-video rounded-xl overflow-hidden shadow">
                <iframe className="w-full h-full" src="https://www.youtube.com/embed/eUKYvPis5VI" title="Awanio - Simplifying Cloud Services" allowFullScreen />
              </div>
            </div>
          </div>
        </section>

        {/* ========== WAYS TO CREATE SECTION ========== */}
        <section className="py-16 bg-white">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1E6BB8] mb-4">Ways to create with Awanio</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-12 text-sm sm:text-base">
              "Enhance your cloud experience. Unleash your full potential with Awanio HCI the ultimate hyper- converged infrastructure solution for agile, efficient, and scalable IT operations."
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 text-left">
              {/* Card 1 */}
              <div className=" border border-gray-200 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-sm hover:shadow-md transition bg-white">
                <img src={images.landing1} className="w-24 sm:w-32 lg:w-40 h-auto mx-auto mb-3 sm:mb-4" />
                <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-2">Business Continuity - DC Optimization</h3>
                <p className="text-gray-500 text-xs sm:text-sm lg:text-[14px] leading-relaxed">
                  Enable the capabilities to ensure company can create a highly available and resilient infrastructure that can withstand outages and disasters.
                </p>
              </div>
              {/* Card 2 */}
              <div className="border border-gray-200 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-sm hover:shadow-md transition bg-white">
                <img src={images.landing2} className="w-24 sm:w-32 lg:w-40 h-auto mx-auto mb-3 sm:mb-4" />
                <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-2">Business Agility - Cost Control</h3>
                <p className="text-gray-500 text-xs sm:text-sm lg:text-[14px] leading-relaxed">
                  Company can gain visibility into their cloud costs, so IT team will be able to make decisions about resource allocation, and optimize their private cloud usage to achieve cost
                  savings.
                </p>
              </div>
              {/* Card 3 */}
              <div className="border border-gray-200 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-sm hover:shadow-md transition bg-white">
                <img src={images.landing3} className="w-24 sm:w-32 lg:w-40 h-auto mx-auto mb-3 sm:mb-4" />
                <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-2">Automation - Seamless Management</h3>
                <p className="text-gray-500 text-xs sm:text-sm lg:text-[14px] leading-relaxed">
                  Awanio is designed to be customizable, and supports integration with existing dev tools. This integration enables automation of the creation process of IT infrastructure,
                  streamlining workflows and reducing manual effort.
                </p>
              </div>
              {/* Card 4 */}
              <div className="border border-gray-200 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-sm hover:shadow-md transition bg-white">
                <img src={images.landing4} className="w-24 sm:w-32 lg:w-40 h-auto mx-auto mb-3 sm:mb-4" />
                <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-2">Continuous and Consolidated Monitoring</h3>
                <p className="text-gray-500 text-xs sm:text-sm lg:text-[14px] leading-relaxed">
                  Company will be able to have a continuous and consolidated view of the private cloud resource utilization: CPU, Memory, Network, Storage, as well as financial usage and transaction.
                </p>
              </div>
              {/* Card 5 */}
              <div className="border border-gray-200 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-sm hover:shadow-md transition bg-white">
                <img src={images.landing5} className="w-24 sm:w-32 lg:w-40 h-auto mx-auto mb-3 sm:mb-4" />
                <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-2">Embedded Backup and Recovery Solution</h3>
                <p className="text-gray-500 text-xs sm:text-sm lg:text-[14px] leading-relaxed">
                  Backup and recovery is never been this easy. Backup and recovery is the feature embed in Awanio Cloud Enabler Platform. It can create file and folder backups, as well as system
                  images backups, to be used for recovery in the event of data corruption, hard disk drive failure, or malware infection.
                </p>
              </div>
              {/* Card 6 */}
              <div className="border border-gray-200 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-sm hover:shadow-md transition bg-white">
                <img src={images.landing6} className="w-24 sm:w-32 lg:w-40 h-auto mx-auto mb-3 sm:mb-4" />
                <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-2">Centralized Management</h3>
                <p className="text-gray-500 text-xs sm:text-sm lg:text-[14px] leading-relaxed">
                  Awanio's bare metal services provide a centralized management platform that can be used to manage servers across multiple data centers. This ensures that company can easily manage
                  and monitor their infrastructure, regardless of where it is located.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* ========== TRUSTED BY ========== */}
        <section className="py-16 bg-gray-50">
          {/* Title (centered & max-width) */}
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 text-center mb-10">
            <h2 className="text-3xl font-bold text-[#1E6BB8]">Trusted by</h2>
            <p className="text-gray-600 mt-2">We are trusted by following companies and it has been the most incredible journey.</p>
          </div>

          {/* Sponsor strip (FULL WIDTH) */}
          <div className="w-full bg-white shadow-lg py-6 overflow-hidden">
            <div className=" flex items-center gap-16 w-max animate-scroll px-8 ">
              {logos.map((logo, i) => (
                <img key={i} src={logo} className="h-12 object-contain opacity-90" />
              ))}

              {logos.map((logo, i) => (
                <img key={`dup-${i}`} src={logo} className="h-12 object-contain opacity-90" />
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Landing;
