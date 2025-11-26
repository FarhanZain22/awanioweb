import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useLanguage } from "../Context/LanguageContext";

const PrivacyPolicy = () => {
  const { language } = useLanguage();

  // --- 1. DATA TERJEMAHAN ---
  const translations = {
    ID: {
      pageTitle: "Kebijakan Privasi",
      pageSubtitle: "Bagaimana Kami Mengumpulkan, Menggunakan, dan Melindungi Informasi Anda",

      // --- Introduction ---
      introTitle: "Pendahuluan",
      introDesc:
        'Awanio berkomitmen untuk melindungi data pribadi Anda. Kebijakan privasi ini ("Kebijakan Privasi") mengatur penggunaan data yang dikumpulkan oleh Awanio, termasuk setiap dan semua data pribadi. Data pribadi adalah informasi yang berkaitan dengan Anda dan dapat mengidentifikasi Anda sebagai individu. Kami menggunakan data pribadi Anda sesuai dengan semua hukum yang berlaku. Untuk memastikan kepatuhan dan menyelaraskan dengan nilai-nilai Awanio seputar kepercayaan dan transparansi, kami memiliki tim yang bertanggung jawab untuk terus menerapkan program privasi global kami.',

      whoWeAreTitle: "Siapa kami:",
      whoWeAreDesc:
        'Kebijakan privasi ini berlaku untuk PT Awan Komputasi Teknologi, perusahaan Indonesia yang berkantor pusat di Jakarta dan anak perusahaannya yang berafiliasi (secara kolektif, "Awanio," atau "kami", "kita"). Kami beroperasi di berbagai kantor di seluruh dunia dan kami bermitra dengan distributor dan integrator sistem di seluruh dunia.',

      whatWeDoTitle: "Apa yang kami lakukan:",
      whatWeDoDesc: "Misi Awanio adalah meningkatkan kemampuan ekosistem cloud lokal untuk melampaui daya saing global. Untuk mencapai misi kami, kami menjalin perjanjian dengan:",
      whatWeDoList1: "distributor yang ingin membantu menumbuhkan ekosistem Awanio;",
      whatWeDoList2: "integrator sistem yang mendukung implementasi produk Awanio di lokasi pelanggan.",

      contactUsTitle: "Cara menghubungi kami:", // Renamed to avoid conflict
      contactUsDesc:
        "Kami secara teratur meninjau kepatuhan kami terhadap Kebijakan Privasi ini. Pertanyaan, komentar, dan permintaan mengenai Kebijakan Privasi ini disambut baik dan harus ditujukan pertama kali ke privacy@awan.io atau melalui surat ke PT. Awan Komputasi Teknologi, Gedung Office 8, Lantai 18 Unit A, SCBD Lot. 28, Jl. Jend Sudirman Kav. 52-53, Senayan, Kebayoran Baru, Jakarta Selatan, Indonesia, Attn: Privacy Questions. Jika Awanio tidak menjawab pertanyaan atau kekhawatiran Anda dengan memuaskan, Anda juga dapat menghubungi pihak berikut untuk saran, dukungan, atau keluhan:",
      contactDPO: 'Petugas Perlindungan Data ("DPO") Awanio di',
      contactPSE:
        "Kami terdaftar di Penyelenggara Sistem Elektronik (PSE) di Kementerian Komunikasi dan Informatika Republik Indonesia, sebuah regulasi sistem elektronik oleh penyelenggara negara, individu, badan usaha, dan masyarakat yang dapat dilakukan untuk layanan publik dan non-publik. Keberadaan PSE ini berguna untuk menjamin pengumpulan data dan menjaga keamanan ruang digital.",

      // --- Definition ---
      defTitle: "Definisi",
      defIntro:
        "Sebagian besar Kebijakan Privasi ini dibagi menjadi bagian-bagian berdasarkan cara Anda berinteraksi dengan Awanio. Anda bisa berupa Pengunjung Situs, Pengguna, dan/atau Mitra Bisnis (seperti yang didefinisikan di bawah). Silakan tentukan tipe pengguna Anda. Untuk setiap tipe pengguna, kami telah menjelaskan informasi apa yang kami kumpulkan dan mengapa, cookie dan teknologi serupa lainnya yang kami gunakan, bagaimana kami membagikan informasi tersebut, dan hak-hak Anda.",
      defSiteVisitorTitle: "PENGUNJUNG SITUS:",
      defSiteVisitorDesc:
        'Anda adalah Pengunjung Situs ketika Anda mengunjungi dan berinteraksi dengan situs web, halaman web, fitur interaktif, blog, dan konten masing-masing di awan.io (atau turunannya) ("Situs Kami").',
      defUserTitle: "PENGGUNA:",
      defUserDesc:
        'Anda adalah Pengguna ketika Anda mengunjungi halaman situs web atau aplikasi salah satu mitra Awanio di mana widget Awanio dipasang atau rekomendasi kami ditempatkan ("Situs Mitra"). Anda tahu bahwa Anda terlibat dengan Awanio ketika Anda melihat teks yang merujuk pada Awanio (misalnya, "Direkomendasikan oleh Awanio", "oleh Awanio" di dekat rekomendasi). Jika Anda mengklik referensi hyperlink ke Awanio, Anda akan melihat pemberitahuan terperinci yang memungkinkan Anda menavigasi ke Portal Minat Awanio dan Kebijakan Privasi ini di mana Anda dapat memilih untuk tidak menerima rekomendasi yang dipersonalisasi. Dalam beberapa kasus, mitra mungkin memiliki layanan white-label Awanio untuk penawaran mereka sendiri. Dalam hal demikian, mitra tersebut harus mengungkapkan penggunaan Awanio dalam kebijakan privasi mereka.',
      defPartnerTitle: "MITRA BISNIS:",
      defPartnerDesc: "Anda adalah Mitra Bisnis ketika Anda mendaftar (atau mengirim email ke Awanio) atas nama perusahaan tempat Anda bekerja untuk menggunakan Awanio Cloud Enabler Platform.",
      defServiceTitle: "LAYANAN",
      defServiceDesc: "berarti situs web https://awan.io yang dioperasikan oleh PT Awan Komputasi Teknologi.",
      defPersonalDataTitle: "DATA PRIBADI",
      defPersonalDataDesc:
        "berarti data tentang individu yang teridentifikasi atau dapat diidentifikasi secara individu atau dikombinasikan dengan informasi lain baik secara langsung maupun tidak langsung melalui sistem elektronik atau non-elektronik.",
      defUsageDataTitle: "DATA PENGGUNAAN",
      defUsageDataDesc: "adalah data yang dikumpulkan secara otomatis baik yang dihasilkan oleh penggunaan Layanan atau dari infrastruktur Layanan itu sendiri (misalnya, durasi kunjungan halaman).",
      defCookiesTitle: "COOKIES",
      defCookiesDesc: "adalah file kecil yang disimpan di perangkat Anda (komputer atau perangkat seluler).",
      defControllerTitle: "PENGENDALI DATA",
      defControllerDesc:
        "berarti setiap orang, badan publik, dan organisasi internasional yang bertindak secara individu atau bersama-sama dalam menentukan tujuan dan melaksanakan kendali atas pemrosesan Data Pribadi.",
      defProcessorTitle: "PEMROSES DATA",
      defProcessorSub: "(ATAU PENYEDIA LAYANAN)",
      defProcessorDesc:
        "berarti setiap orang, badan publik, dan organisasi internasional yang bertindak secara individu atau bersama-sama dalam pemrosesan Data Pribadi atas nama Pengendali Data Pribadi.",
      defSubjectTitle: "SUBJEK DATA PRIBADI",
      defSubjectDesc: "adalah individu yang kepadanya Data Pribadi dilampirkan.",
      defTheUserTitle: "PENGGUNA",
      defTheUserDesc: "adalah individu yang menggunakan Layanan kami. Pengguna merujuk pada Subjek Data Pribadi, yang merupakan subjek dari Data Pribadi.",

      // --- Types of Data Collected ---
      typeTitle: "Jenis Data yang Dikumpulkan",
      demoTitle: "Formulir Demo",
      demoDesc:
        "Kami mengumpulkan data pribadi pada formulir demo seperti Nama, Email, dan Telepon yang telah Anda setujui untuk diberikan datanya. Data pribadi akan dikirim langsung ke saluran Slack dan akan ditanggapi oleh tim Awanio untuk menyiapkan demo platform. Data pribadi berdasarkan formulir demo tidak digunakan untuk tujuan lain selain demonstrasi platform.",
      partnerTitle: "Formulir Mitra",
      partnerDesc1:
        "Formulir kemitraan ditempatkan di situs web, dan pengunjung situs web yang ingin menjadi mitra Awanio harus mengisi formulir kemitraan. Data pribadi pada formulir kemitraan seperti:",
      partnerList: ["Email", "Nama Depan", "Nama Belakang", "Seluler", "Telepon"],
      partnerDesc2:
        "Tujuan pengumpulan data ini adalah untuk memutuskan mitra mana yang akan dipilih sebagai mitra resmi Awanio. Awanio akan menghubungi mitra berdasarkan data pribadi yang mereka masukkan dalam formulir. Data tidak dibagikan untuk tujuan lain dan hanya diakses oleh tim bisnis Awanio.",
      deployTitle: "Formulir Penerapan (Deployment)",
      deployDesc:
        "Formulir penerapan digunakan untuk mengidentifikasi lingkungan server klien. Awanio perlu mengetahui informasi tersebut untuk memberikan rencana instalasi dan data pribadi yang terlibat dalam formulir untuk mengumpulkan orang yang bertanggung jawab untuk dihubungi. Kami mengumpulkan nama dan informasi kontak untuk tujuan ini. Namun, formulir ini digunakan ketika Anda memutuskan untuk menggunakan platform Awanio dan kami berada dalam tahap penerapan ke server Anda.",
      cookiesTitle: "Cookies",
      cookiesDesc1:
        "Cookies adalah file teks kecil yang disimpan di komputer Anda saat Anda mengunjungi situs web kami dan memungkinkan kami untuk menugaskan ulang browser Anda. Cookies menyimpan informasi seperti pengaturan bahasa Anda, durasi kunjungan Anda ke situs web kami, atau informasi yang Anda masukkan di sana.",
      cookiesDesc2: "Cookies yang digunakan di situs web ini adalah:",
      cookiesList1Title: "Cookie Analitis",
      cookiesList1Desc:
        "Cookie analitis digunakan untuk memahami bagaimana pengunjung berinteraksi dengan situs web. Cookie ini membantu memberikan informasi tentang metrik seperti jumlah pengunjung, rasio pentalan (bounce rate), sumber lalu lintas, dll.",
      cookiesList2Title: "Cookie Iklan",
      cookiesList2Desc:
        "Cookie iklan digunakan untuk memberikan pengunjung iklan yang disesuaikan berdasarkan halaman yang Anda kunjungi sebelumnya dan untuk menganalisis efektivitas kampanye iklan.",
      legalTitle: "Dasar Hukum",
      legalDesc: "Dasar hukum untuk memproses data yang Anda masukkan dalam setiap formulir adalah Undang-Undang Perlindungan Data Pribadi (UU PDP) Bab V Pasal 16(2).",
      storageTitle: "Penyimpanan Data – Durasi",
      storageDesc:
        "Kami akan menghapus data yang kami terima dari Anda dalam menjalin kontak baik segera setelah tidak lagi diperlukan untuk memenuhi tujuan penyimpanannya, segera setelah masalah Anda ditangani sepenuhnya dan tidak ada komunikasi lebih lanjut dengan Anda yang diperlukan, atau jika Anda ingin kami menghapus data tersebut.",
      objectTitle: "Keberatan",
      objectDesc:
        "Anda dapat merujuk ke petugas kami kapan saja sehubungan dengan penghapusan data untuk pertanyaan Anda (lihat di bagian “Cara menghubungi kami:” untuk detail kontak). Namun, ini mungkin juga berarti bahwa kami tidak dapat menangani masalah Anda sepenuhnya.",

      // --- Contact Section (General) ---
      contactTitle: "Kontak",
      // Renamed from 'content'
      contactGeneralContent:
        "Kami juga mengumpulkan data pribadi Anda ketika Anda sendiri memberikan persetujuan untuk melakukannya – misalnya ketika Anda ingin kami menghubungi Anda. Tentu saja, data pribadi yang ditransfer dengan cara ini hanya digunakan untuk tujuan yang dimaksudkan: menjalin kontak. Rincian ini diberikan secara sukarela dan, dalam kasus ini, diprakarsai oleh Anda sendiri. Asalkan rincian yang diberikan adalah rincian saluran komunikasi (seperti alamat email, nomor telepon), kami akan menggunakan saluran ini untuk menghubungi Anda guna menangani masalah Anda.",

      // --- Security ---
      securityTitle: "Keamanan",
      securityPara1:
        "Awanio memiliki tim keamanan khusus. Kami memelihara kontrol ketat atas data pribadi yang kami kumpulkan, menyimpannya dalam basis data yang dilindungi firewall dan aman dengan hak akses yang sangat terbatas dan terkontrol, untuk memastikannya aman. Silakan hubungi kami untuk informasi lebih lanjut.",
      securityPara2_part1:
        "Mitra Bisnis memiliki akses ke fitur-fitur tertentu yang dilindungi kata sandi dari Awanio Cloud Enabler Platform. Mitra Bisnis bertanggung jawab untuk menjaga kerahasiaan kata sandi ini dan untuk memastikan hal yang sama bagi karyawan dan/atau agen mereka. Harap diingat bahwa, sayangnya, transmisi informasi melalui internet tidak pernah sepenuhnya aman.",
      securityPara2_part2:
        'Penipuan Internet yang umum dikenal sebagai "spoofing" atau "phishing". Ini terjadi ketika Anda menerima email dari sumber yang tampaknya sah yang meminta data pribadi dari Anda. Harap diperhatikan bahwa kami tidak akan mengirimi Anda email apa pun yang meminta Anda untuk memverifikasi kartu kredit, informasi bank, atau data pribadi lainnya.',
      securityPara2_part3:
        "Jika Anda pernah menerima email yang tampaknya berasal dari kami yang meminta informasi tersebut dari Anda, jangan tanggapi, dan jangan klik tautan apa pun yang muncul di email. Sebaliknya, silakan teruskan email tersebut kepada kami di",

      // --- Sharing ---
      sharingTitle: "Berbagi dan Transfer Data ke Luar Indonesia",
      // Renamed from 'content'
      sharingContent:
        "Ketika kami mentransfer data pribadi dari Indonesia ke negara lain mana pun, kami akan memastikan transfer tersebut mematuhi undang-undang perlindungan data yang relevan, termasuk, jika berlaku, Undang-Undang Perlindungan Data Pribadi Indonesia. Dengan kata lain, hak dan perlindungan Anda tetap ada pada data Anda dan kami menggunakan klausul kontrak yang disetujui dan tindakan lain yang dirancang untuk memastikan bahwa penerima data pribadi Anda melindunginya. Namun, kami tidak memiliki rencana untuk mentransfer data pribadi Anda ke pihak ketiga di dalam atau di luar Indonesia untuk saat ini.",

      // --- PDPL ---
      pdplTitle: "Hak Perlindungan Data Anda Berdasarkan Undang-Undang Perlindungan Data Pribadi (UU PDP) Indonesia",
      pdplIntro1:
        "Jika Anda adalah penduduk Indonesia, Anda memiliki hak perlindungan data tertentu, yang tercakup dalam Undang-Undang Perlindungan Data Pribadi (UU PDP). Kami bertujuan untuk mengambil langkah-langkah yang wajar untuk memungkinkan Anda mengoreksi, mengubah, menghapus, atau membatasi penggunaan Data Pribadi Anda.",
      pdplIntro2_pre: "Jika Anda ingin diberitahu Data Pribadi apa yang kami miliki tentang Anda dan jika Anda ingin data tersebut dihapus dari sistem kami, silakan hubungi kami di",
      pdplIntro2_post: ". Dalam keadaan tertentu, Anda memiliki hak perlindungan data berikut:",
      pdplRightsList: [
        "hak untuk memperoleh informasi mengenai kejelasan identitas, dasar kepentingan hukum, tujuan permintaan dan penggunaan Data Pribadi, serta akuntabilitas pihak yang meminta Data Pribadi;",
        "hak untuk melengkapi, memperbarui, dan/atau memperbaiki kesalahan dan/atau ketidakakuratan Data Pribadi mengenai dirinya sesuai dengan tujuan pemrosesan Data Pribadi;",
        "hak untuk mengakses dan memperoleh salinan Data Pribadi mengenai dirinya sesuai dengan ketentuan peraturan perundang-undangan;",
        "hak untuk mengakhiri pemrosesan, menghapus, dan/atau memusnahkan Data Pribadi mengenai dirinya sesuai dengan ketentuan peraturan perundang-undangan;",
        "hak untuk menarik kembali persetujuan pemrosesan Data Pribadi mengenai dirinya yang telah diberikan kepada Pengendali Data Pribadi;",
        "hak untuk keberatan atas tindakan pengambilan keputusan yang hanya didasarkan pada pemrosesan secara otomatis, termasuk pemrofilan, yang menimbulkan akibat hukum atau berdampak signifikan pada Subjek Data Pribadi;",
        "hak untuk menunda atau membatasi pemrosesan Data Pribadi secara proporsional sesuai dengan tujuan pemrosesan Data Pribadi;",
        "hak untuk menggugat dan menerima ganti rugi atas pelanggaran pemrosesan Data Pribadi tentang dirinya sesuai dengan ketentuan peraturan perundang-undangan;",
        "hak untuk mendapatkan dan/atau menggunakan Data Pribadi tentang dirinya dari Pengendali Data Pribadi dalam bentuk yang sesuai dengan struktur dan/atau format yang umum digunakan atau dapat dibaca oleh sistem elektronik;",
        "hak untuk menggunakan dan mengirimkan Data Pribadi tentang dirinya ke Pengendali Data Pribadi lainnya, sepanjang sistem yang digunakan dapat saling berkomunikasi secara aman sesuai dengan prinsip Perlindungan Data Pribadi berdasarkan Undang-Undang ini;",
      ],
      pdplClosing1:
        "Harap dicatat bahwa kami mungkin meminta Anda untuk memverifikasi identitas Anda sebelum menanggapi permintaan tersebut. Harap dicatat, kami mungkin tidak dapat menyediakan Layanan tanpa beberapa data yang diperlukan. Anda berhak untuk mengeluh kepada Otoritas Perlindungan Data tentang pengumpulan dan penggunaan Data Pribadi Anda oleh kami. Untuk informasi lebih lanjut, silakan hubungi otoritas perlindungan data lokal Anda di Indonesia.",
      pdplUpdates:
        "Kami dapat mengubah Kebijakan Privasi ini dari waktu ke waktu. Kami akan menempatkan pemberitahuan penting yang akan terlihat oleh Anda sebagai Pengunjung Situs atau Mitra Bisnis, tetapi kami tidak memiliki sarana untuk memberi tahu Pengguna tentang pembaruan melalui pemberitahuan. Anda harus memeriksa kembali di sini secara berkala untuk melihat apakah Kebijakan Privasi telah diperbarui karena kami akan selalu menampilkan tanggal modifikasi terakhir Kebijakan Privasi di bagian atas halaman sehingga Anda dapat mengetahui kapan terakhir kali direvisi.",

      // --- Children ---
      childrenTitle: "Privasi Anak-anak",
      // Renamed from 'content'
      childrenContent:
        "Tidak ada layanan kami yang secara sengaja ditujukan untuk anak-anak di bawah 17 tahun. Kami tidak secara sadar mengumpulkan data pribadi dari siapa pun yang berusia di bawah 17 tahun. Jika kami menentukan saat pengumpulan bahwa Pengunjung Situs, Pengguna, atau Mitra Bisnis berusia di bawah 17 tahun, kami tidak akan menggunakan atau memelihara data pribadinya. Jika kami menyadari bahwa kami telah secara tidak sadar mengumpulkan data pribadi dari seorang anak di bawah usia 17 tahun, kami akan melakukan upaya yang wajar untuk menghapus informasi tersebut dari catatan kami. Jika Anda masih anak-anak, silakan pergi bermain di halaman, jangan gunakan atau berinteraksi dengan Platform Awanio!",

      // --- Sensitive Data ---
      sensitiveTitle: "Data Sensitif",
      sensitiveContent: "Kami tidak mengumpulkan atau menerima kategori data pribadi yang sensitif apa pun.", // Renamed from 'content'
    },
    EN: {
      pageTitle: "Privacy policy",
      pageSubtitle: "How We Collect, Use, and Protect Your Information",

      // --- Introduction ---
      introTitle: "Introduction",
      introDesc:
        "Awanio is committed to protecting your personal data. This privacy policy (“Privacy Policy”) governs Awanio’s use of data collected by us, including any and all personal data. Personal data is information that relates to you and may identify you as an individual. We use your personal data in line with all applicable laws. To ensure compliance and to align with Awanio’s values around trust and transparency we have a team of privacy champions responsible for continuously implementing our global privacy program.",
      whoWeAreTitle: "Who we are:",
      whoWeAreDesc:
        "This privacy policy applies to PT Awan Komputasi Teknologi, Indonesia corporation with headquarters in Jakarta and its affiliated subsidiaries (collectively, “Awanio,” or “we“, “us“, “our“). We operate in various offices around the world and we partner with distributors and system integrator across the globe.",
      whatWeDoTitle: "What we do:",
      whatWeDoDesc: "Awanio’s mission is to improve the local cloud ecosystem capabilities to exceed the global competitiveness. To achieve our mission we enter into agreements with:",
      whatWeDoList1: "distributors who wants to help grow Awanio ecosystem;",
      whatWeDoList2: "system integrator that support to implement Awanio product at the customer site.",
      contactUsTitle: "How to contact us:",
      contactUsDesc:
        "We regularly review our compliance with this Privacy Policy. Questions, comments and requests regarding this Privacy Policy are welcomed and should be addressed in the first instance to privacy@awan.io or by mail to PT. Awan Komputasi Teknologi, Office 8 Building, Floor 18 Unit A, SCBD Lot. 28, Jl. Jend Sudirman Kav. 52-53, Senayan, Kebayoran Baru, South Jakarta, Indonesia, Attn: Privacy Questions.If Awanio does not satisfactorily answer your questions or concerns, you may also contact the following for advice, support or complaints:",
      contactDPO: 'Awanio\'s Data Protection Officer ("DPO") at',
      contactPSE:
        "We registered at Electronic System Provider (PSE) at Ministry of Communication and Information Republic of Indonesia, a regulation of electronic systems by state administrators, individuals, business entities, and the public which can be carried out for public and non-public services. The existence of this PSE is useful to guarantee data collection and maintain the security of the digital space.",

      // --- Definition ---
      defTitle: "Definition",
      defIntro:
        "Much of this Privacy Policy is divided into sections based on the way you may interact with Awanio. You are either a Site Visitor, a User and/or a Business Partner (as defined below). Please determine what user type you are. For each user type we’ve explained what information we collect and why, what cookies and other similar technologies we use, how we share such information and your rights.",
      defSiteVisitorTitle: "SITE VISITORS:",
      defSiteVisitorDesc:
        "You are a Site Visitor when you visit and interact with our web sites, web pages, interactive features, blogs and their respective contents at awan.io (or any derivation.) (“Our Sites“).",
      defUserTitle: "USERS :",
      defUserDesc:
        "You are a User when you visit a page of a website or application of one of Awanio’s partners where the Awanio widget is installed or our recommendations are placed (“Partner Sites”). You know you are engaging with an Awanio when you see text referencing Awanio (e.g., “Recommended by Awanio”, “by Awanio” near recommendations If you click on the hyperlinked reference to Awanio you will see a detailed notice that enables you to navigate to Awanio’s Interest Portal and this Privacy Policy where you can opt out of personalized recommendations. In some instances, a partner may have white-label Awanio’s service for their own offering. In such an event, such partners must disclose their use of Awanio in their privacy policies.",
      defPartnerTitle: "BUSINESS PARTNERS :",
      defPartnerDesc: "You are a Business Partner when you register (or email with Awanio) on behalf of the company you work for to use the Awanio Cloud Enabler Platform.",
      defServiceTitle: "SERVICE",
      defServiceDesc: "means the https://awan.io website operated by PT Awan Komputasi Teknologi.",
      defPersonalDataTitle: "PERSONAL DATA",
      defPersonalDataDesc:
        "means data about an identified or identifiable individual individually or in combination with other information either directly or indirectly through electronic or non-electronic systems.",
      defUsageDataTitle: "USAGE DATA",
      defUsageDataDesc: "is data collected automatically either generated by the use of Service or from Service infrastructure itself (for example, the duration of a page visit).",
      defCookiesTitle: "COOKIES",
      defCookiesDesc: "are small files stored on your device (computer or mobile device).",
      defControllerTitle: "DATA CONTROLLER",
      defControllerDesc:
        "means any person, public body and international organization acting individually or together in determining the purposes and exercising control of the processing of Personal Data.",
      defProcessorTitle: "DATA PROCESSORS",
      defProcessorSub: "(OR SERVICE PROVIDERS)",
      defProcessorDesc: "means any person, public body and international organization acting individually or jointly in the processing of Personal Data on behalf of a Personal Data Controller.",
      defSubjectTitle: "PERSONAL DATA SUBJECT",
      defSubjectDesc: "is an individual to whom Personal Data is attached.",
      defTheUserTitle: "THE USER",
      defTheUserDesc: "is the individual using our Service. The User corresponds to the Personal Data Subject, who is the subject of Personal Data.",

      // --- Types of Data Collected ---
      typeTitle: "Types of Data Collected",
      demoTitle: "Demo Form",
      demoDesc:
        "We collect personal data on demo form such as Name, Email, and Phone that you already consent to give the data. The personal data will be directly sent to the Slack channel and will be responded by the Awanio team to prepare the platform demo. The personal data based on the demo form is not used for other purposes other than the platform demonstration.",
      partnerTitle: "Partner Form",
      partnerDesc1:
        "The partnership form is placed on the website, and the website visitor that wants to be an Awanio partner should fill out the partnership form. The personal data on the partnership form such as :",
      partnerList: ["Email", "First Name", "Last Name", "Mobile", "Phone"],
      partnerDesc2:
        "The purpose to collect this data is to decide which partner will be chosen as the Awanio official partner. Awanio will contact partners based on the personal data they put in the form. The data does not share for other purposes and only accessed by the Awanio business team.",
      deployTitle: "Deployment Form",
      deployDesc:
        "Deployment form use to identify the environment of the client’s server. Awanio need to know the information to provide the installation plan and the personal data involved in the form to collect the person in charge of contact. We collect name and contact information for this purpose. However, the form is used when you decide to use Awanio platform and we are in the phase of deployment to your server.",
      cookiesTitle: "Cookies",
      cookiesDesc1:
        "Cookies are small text files that are stored on your computer when you visit our website and allow us to reassign your browser. Cookies store information such as your language setting, the duration of your visit to our website or the information you enter there.",
      cookiesDesc2: "The cookies used on this website are:",
      cookiesList1Title: "Analytical cookies",
      cookiesList1Desc:
        "Analytical cookies are used to understand how visitors interact with the website. These cookies help provide information on metrics such as the number of visitors, bounce rate, traffic source, etc.",
      cookiesList2Title: "Advertisement cookies",
      cookiesList2Desc:
        "Advertisement cookies are used to provide visitors with customized advertisements based on the pages you visited previously and to analyze the effectiveness of the ad campaigns.",
      legalTitle: "Legal basis",
      legalDesc: "The legal basis for processing the data you entered in every form is Personal Data Protection Law (PDPL) Chapter V Article 16(2).",
      storageTitle: "Data storage – duration",
      storageDesc:
        "We will delete the data we received from you in establishing contact either as soon as it is no longer required to fulfil the purpose for storing it, as soon as your concern has been dealt with in full and no further communication with you is necessary, or if you wish us to delete the data.",
      objectTitle: "Objection",
      objectDesc:
        "You can refer to our officer at any time with respect to deleting the data to your query (see in the “How to contact us:” section for contact details). However, this might also mean that we cannot fully deal with your concern.",

      // --- Contact Section (General) ---
      contactTitle: "Contact",
      contactGeneralContent:
        "We also collect your personal data when you yourself give your approval to do so – for example when you want us to contact you. Of course, personal data transferred in this manner is solely used for the purpose intended: establishing contact. These details are provided voluntarily and, in these cases, are initiated by you yourself. Provided the details supplied are details of communication channels (such as email address, phone number), we will use these channels to contact you to deal with your concerns.",

      // --- Security ---
      securityTitle: "Security",
      securityPara1:
        "Awanio has a dedicated security team. We maintain tight controls over the personal data we collect, retaining it in firewalled and secured databases with strictly limited and controlled access rights, to ensure it is secure. Please contact us for more information.",
      securityPara2_part1:
        "Business Partners have access to certain password-protected features of the Awanio Cloud Enabler Platform. Business Partners are responsible for keeping this password confidential and for ensuring the same for their employees and/or their agents. Please remember that, unfortunately, the transmission of information via the internet is never completely secure.",
      securityPara2_part2:
        "A common Internet scam is known as “spoofing” or “phishing.” This occurs when you receive an email from what appears to be a legitimate source requesting personal data from you. Please be aware that we will not send you any emails requesting you to verify credit card, bank information, or any other personal data.",
      securityPara2_part3:
        "If you ever receive an email that appears to be from us requesting such information from you, do not respond to it, and do not click on any links appearing in the email. Instead, please forward the email to us at",

      // --- Sharing ---
      sharingTitle: "Sharing and Data Transfers Outside Indonesia",
      sharingContent:
        "When we transfer personal data from Indonesia to any other country, we will ensure such transfers are in compliance with relevant data protection laws, including, if applicable, Indonesia Data Protection Law. In other words, your rights and protections remain with your data and we used approved contractual clauses and other measures designed to ensure that the recipients of your personal data protect it. However, we do not have plan to transfer your personal data to third parties in or outside Indonesia for now.",

      // --- PDPL ---
      pdplTitle: "Your Data Protection Rights Under Indonesia Personal Data Protection Law (PDPL)",
      pdplIntro1:
        "If you are an Indonesian resident, you have certain data protection rights, covered by Personal Data Protection Law (PDPL). We aim to take reasonable steps to allow you to correct, amend, delete, or limit the use of your Personal Data.",
      pdplIntro2_pre: "If you wish to be informed what Personal Data we hold about you and if you want it to be removed from our systems, please email us at",
      pdplIntro2_post: ". In certain circumstances, you have the following data protection rights:",
      pdplRightsList: [
        "right to obtain information about the clarity of identity, the basis of legal interests, the purpose of the request and use of Personal Data, and the accountability of the party requesting Personal Data;",
        "right to complete, update, and/or correct errors and/or inaccuracies of Personal Data about him/her in accordance with the purposes of processing Personal Data;",
        "right to access and obtain a copy of Personal Data about him/her in accordance with the provisions of laws and regulations;",
        "right to end the processing, delete, and/or destroy Personal Data about him/her in accordance with the provisions of laws and regulations;",
        "right to withdraw the consent to the processing of Personal Data about him/her that has been given to the Personal Data Controller;",
        "right to object to decision-making measures based solely on automated processing, including profiling, that give rise to legal consequences or have a significant impact on the Personal Data Subject;",
        "right to delay or restrictthe processing of Personal Data in proportion to the purposes for which the Personal Data is processed;",
        "right to sue and receive compensation for violations of the processing of Personal Data about him in accordance with the provisions of laws and regulations;",
        "right to obtain and/or use Personal Data about him/her from the Personal Data Controller in a form that is in accordance with the structure and/or format commonly used or readable by electronic systems;",
        "right to use and send Personal Data about him/her to other Personal Data Controllers, as long as the systems used can communicate with each other securely in accordance with the principles of Personal Data Protection under this Law;",
      ],
      pdplClosing1:
        "Please note that we may ask you to verify your identity before responding to such requests. Please note, we may not able to provide Service without some necessary data. You have the right to complain to a Data Protection Authority about our collection and use of your Personal Data. For more information, please contact your local data protection authority in Indonesia.",
      pdplUpdates:
        "We may change this Privacy Policy from time to time. We will place a prominent notice that will be visible to you as a Site Visitor or Business Partner, but we do not have a means of advising Users of an update by way of notice. You should check back here periodically to see if the Privacy Policy has been updated as we will always show the date of the latest modification of the Privacy Policy at the top of the page so you can tell when it was last revised.",

      // --- Children ---
      childrenTitle: "Children Privacy",
      childrenContent:
        "None of our services are intentionally directed at children under 17. We do not knowingly collect personal data from anyone under 17 years of age. If we determine upon collection that a Site Visitor, a User or a Business Partner is under 17, we will not use or maintain his/her personal data. If we become aware that we have unknowingly collected personal data from a child under the age of 17, we will make reasonable efforts to delete such information from our records. If you’re a kid, please go play in the yard, don’t use or interact with Awanio Platform!",

      // --- Sensitive Data ---
      sensitiveTitle: "Sensitive Data",
      sensitiveContent: "We do not collect or receive any sensitive categories of personal data.",
    },
  };

  const text = translations[language];
  const fraudText = language === "ID" ? ", karena kami akan menyelidiki kejadian kemungkinan penipuan Internet." : ", as we will investigate instances of possible Internet fraud.";

  // --- 2. RENDER COMPONENT ---
  return (
    <>
      <Navbar active="privacy-policy" />

      <main className="font-sans text-gray-700 bg-white dark:bg-gray-900 dark:text-gray-300 transition-colors duration-300">
        {/* Hero Section */}
        <div className="relative bg-[#0B1C3E] text-white py-20 md:py-24 px-4 overflow-hidden">
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <div className="absolute right-0 top-0 w-72 h-72 md:w-96 md:h-96 bg-blue-500 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute left-0 bottom-0 w-48 h-48 md:w-64 md:h-64 bg-cyan-500 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
          </div>
          <div className="relative max-w-7xl mx-auto text-center z-10">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">{text.pageTitle}</h1>
            <p className="text-base md:text-xl text-blue-100 max-w-2xl mx-auto px-2">{text.pageSubtitle}</p>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 space-y-12 md:space-y-16">
          {/* Section: Introduction */}
          <SectionRow title={text.introTitle}>
            <p className="mb-4">{text.introDesc}</p>

            <h3 className="font-bold text-black dark:text-white mt-6 mb-2 transition-colors">{text.whoWeAreTitle}</h3>
            <p className="mb-4">{text.whoWeAreDesc}</p>

            <h3 className="font-bold text-black dark:text-white mt-6 mb-2 transition-colors">{text.whatWeDoTitle}</h3>
            <p className="mb-2">{text.whatWeDoDesc}</p>
            <ul className="list-disc pl-5 mb-4 space-y-1 marker:text-gray-500 dark:marker:text-gray-400">
              <li>{text.whatWeDoList1}</li>
              <li>{text.whatWeDoList2}</li>
            </ul>

            <h3 className="font-bold text-black dark:text-white mt-6 mb-2 transition-colors">{text.contactUsTitle}</h3>
            <p className="mb-4">
              {text.contactUsDesc}
              <br />
              <a href="mailto:privacy@awan.io" className="underline decoration-gray-400 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300">
                privacy@awan.io
              </a>
            </p>
            <ul className="list-disc pl-5 space-y-2 marker:text-gray-500 dark:marker:text-gray-400">
              <li>
                {text.contactDPO}{" "}
                <a href="mailto:privacy@awan.io" className="underline decoration-gray-400 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300">
                  privacy@awan.io
                </a>
                .
              </li>
              <li>{text.contactPSE}</li>
            </ul>
          </SectionRow>

          {/* Section: Definition */}
          <SectionRow title={text.defTitle}>
            <p className="mb-4">{text.defIntro}</p>

            {/* List Definitions */}
            <ul className="list-disc pl-5 space-y-4 marker:text-gray-500 dark:marker:text-gray-400">
              <li>
                <strong className="text-black dark:text-white transition-colors uppercase">{text.defSiteVisitorTitle} </strong>
                {text.defSiteVisitorDesc}
              </li>
              <li>
                <strong className="text-black dark:text-white transition-colors uppercase">{text.defUserTitle} </strong>
                {text.defUserDesc}
              </li>
              <li>
                <strong className="text-black dark:text-white transition-colors uppercase">{text.defPartnerTitle} </strong>
                {text.defPartnerDesc}
              </li>
            </ul>

            {/* Paragraph Definitions */}
            <div className="space-y-4 mt-6">
              <p>
                <strong className="text-black dark:text-white transition-colors uppercase">{text.defServiceTitle}</strong> {text.defServiceDesc}
              </p>
              <p>
                <strong className="text-black dark:text-white transition-colors uppercase">{text.defPersonalDataTitle}</strong> {text.defPersonalDataDesc}
              </p>
              <p>
                <strong className="text-black dark:text-white transition-colors uppercase">{text.defUsageDataTitle}</strong> {text.defUsageDataDesc}
              </p>
              <p>
                <strong className="text-black dark:text-white transition-colors uppercase">{text.defCookiesTitle}</strong> {text.defCookiesDesc}
              </p>
              <p>
                <strong className="text-black dark:text-white transition-colors uppercase">{text.defControllerTitle}</strong> {text.defControllerDesc}
              </p>
              <p>
                <strong className="text-black dark:text-white transition-colors uppercase">{text.defProcessorTitle}</strong> {text.defProcessorSub} {text.defProcessorDesc}
              </p>
              <p>
                <strong className="text-black dark:text-white transition-colors uppercase">{text.defSubjectTitle}</strong> {text.defSubjectDesc}
              </p>
              <p>
                <strong className="text-black dark:text-white transition-colors uppercase">{text.defTheUserTitle}</strong> {text.defTheUserDesc}
              </p>
            </div>
          </SectionRow>

          {/* Section: Types of Data Collected */}
          <SectionRow title={text.typeTitle}>
            {/* Demo Form */}
            <h3 className="font-bold text-black dark:text-white mb-2 transition-colors">{text.demoTitle}</h3>
            <p className="mb-6">{text.demoDesc}</p>

            {/* Partner Form */}
            <h3 className="font-bold text-black dark:text-white mb-2 transition-colors">{text.partnerTitle}</h3>
            <p className="mb-2">{text.partnerDesc1}</p>
            <ul className="list-disc pl-5 mb-4 space-y-1 marker:text-gray-500 dark:marker:text-gray-400">
              {text.partnerList.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <p className="mb-6">{text.partnerDesc2}</p>

            {/* Deployment Form */}
            <h3 className="font-bold text-black dark:text-white mb-2 transition-colors">{text.deployTitle}</h3>
            <p className="mb-6">{text.deployDesc}</p>

            {/* Cookies */}
            <h3 className="font-bold text-black dark:text-white mb-2 transition-colors">{text.cookiesTitle}</h3>
            <p className="mb-2">{text.cookiesDesc1}</p>
            <p className="mb-2">{text.cookiesDesc2}</p>
            <ol className="list-decimal pl-5 mb-6 space-y-2 marker:text-gray-500 dark:marker:text-gray-400">
              <li>
                <span className="font-medium text-gray-800 dark:text-gray-200">{text.cookiesList1Title}</span>
                <br />
                {text.cookiesList1Desc}
              </li>
              <li>
                <span className="font-medium text-gray-800 dark:text-gray-200">{text.cookiesList2Title}</span>
                <br />
                {text.cookiesList2Desc}
              </li>
            </ol>

            {/* Legal Basis */}
            <h3 className="font-bold text-black dark:text-white mb-2 transition-colors">{text.legalTitle}</h3>
            <p className="mb-6">{text.legalDesc}</p>

            {/* Data Storage */}
            <h3 className="font-bold text-black dark:text-white mb-2 transition-colors">{text.storageTitle}</h3>
            <p className="mb-6">{text.storageDesc}</p>

            {/* Objection */}
            <h3 className="font-bold text-black dark:text-white mb-2 transition-colors">{text.objectTitle}</h3>
            <p>{text.objectDesc}</p>
          </SectionRow>

          {/* Section: Contact General */}
          <SectionRow title={text.contactTitle}>
            <p className="mb-4">{text.contactGeneralContent}</p>
          </SectionRow>

          {/* Section: Security */}
          <SectionRow title={text.securityTitle}>
            <p className="mb-4">{text.securityPara1}</p>
            <p className="mb-4">{text.securityPara2_part1}</p>
            <p className="mb-4">{text.securityPara2_part2}</p>
            <p>
              {text.securityPara2_part3}{" "}
              <a href="mailto:privacy@awan.io" className="underline decoration-gray-400 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 transition-colors">
                privacy@awan.io
              </a>
              {fraudText}
            </p>
          </SectionRow>

          {/* Section: Sharing & Data Transfers */}
          <SectionRow title={text.sharingTitle}>
            <p>{text.sharingContent}</p>
          </SectionRow>

          {/* Section: PDPL Rights */}
          <SectionRow title={text.pdplTitle}>
            <p className="mb-4">{text.pdplIntro1}</p>
            <p className="mb-4">
              {text.pdplIntro2_pre}{" "}
              <a href="mailto:privacy@awan.io" className="underline hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 transition-colors">
                privacy@awan.io
              </a>
              {text.pdplIntro2_post}
            </p>

            {/* List Rights */}
            <ol className="list-decimal pl-5 space-y-2 text-sm marker:text-gray-500 dark:marker:text-gray-400">
              {text.pdplRightsList.map((right, index) => (
                <li key={index}>{right}</li>
              ))}
            </ol>

            <p className="mt-4 mb-4">{text.pdplClosing1}</p>
            <p className="mt-4">{text.pdplUpdates}</p>
          </SectionRow>

          {/* Section: Children Privacy */}
          <SectionRow title={text.childrenTitle}>
            <p>{text.childrenContent}</p>
          </SectionRow>

          {/* Section: Sensitive Data */}
          <SectionRow title={text.sensitiveTitle}>
            <p>{text.sensitiveContent}</p>
          </SectionRow>
        </div>
      </main>

      <Footer active="privacy-policy" />
    </>
  );
};

// Helper Component for Layout
const SectionRow = ({ title, children }) => {
  return (
    <div className="flex flex-col md:flex-row gap-6 md:gap-8 border-b border-gray-100 dark:border-gray-800 last:border-0 pb-12 last:pb-0 transition-colors duration-300">
      {/* Left Column: Title */}
      <div className="w-full md:w-1/3 lg:w-1/4 shrink-0">
        <h2 className="text-xl md:text-2xl font-bold text-black dark:text-white sticky top-20 md:top-6 transition-colors duration-300">{title}</h2>
      </div>
      {/* Right Column: Content */}
      <div className="w-full md:w-2/3 lg:w-3/4 text-justify leading-relaxed text-[15px] text-gray-600 dark:text-gray-300 transition-colors duration-300">{children}</div>
    </div>
  );
};

export default PrivacyPolicy;
