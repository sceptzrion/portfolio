import type { Locale } from "@/i18n/config";

export type ProjectScreenLayout =
  | "wide"
  | "standard"
  | "portrait";

export type ProjectScreenFrame =
  | "browser"
  | "phone"
  | "plain";

export type ProjectDetailProjectCopy = {
  overview: string;

  focus: readonly string[];

  responsibilities?: readonly string[];

  features: readonly {
    title: string;
    detail: string;
  }[];

  implementation?: readonly {
    title: string;
    detail: string;
  }[];

  screens: readonly {
    label: string;
    detail: string;
    layout: ProjectScreenLayout;
    frame?: ProjectScreenFrame;
  }[];
};

type ProjectDetailsDictionary = {
  ui: {
    back: string;

    labels: {
      role: string;
      context: string;
      year: string;
    };

    overview: string;
    focus: string;
    responsibilities: string;
    technology: string;
    keyFeatures: string;
    implementation: string;
    screens: string;
    selectedScreen: string;
    selectedScreens: string;
    primaryScreen: string;

    nextProject: string;

    actions: {
      liveProject: string;
      allProjects: string;
      contact: string;
    };
  };

  projects: Record<
    string,
    ProjectDetailProjectCopy
  >;
};

export const projectDetailsDictionary: Record<
  Locale,
  ProjectDetailsDictionary
> = {
  en: {
    ui: {
      back: "All Projects",

      labels: {
        role: "Role",
        context: "Context",
        year: "Year",
      },

      overview: "Overview",
      focus: "Project Focus",
      responsibilities: "Responsibilities",
      technology: "Technology",
      keyFeatures: "Key Features",
      implementation: "Technical Implementation",
      screens: "Selected Screens",
      selectedScreen:
        "selected screen",
      selectedScreens:
        "selected screens",
      primaryScreen:
        "Primary screen",

      nextProject:
        "Next Project",

      actions: {
        liveProject:
          "Live Project",
        allProjects:
          "Back to All Projects",
        contact:
          "Get in Touch",
      },
    },

    projects: {
      edubidan: {
        overview:
          "EduBidan is a full-stack Learning Management System developed as my bachelor's thesis for midwifery education. It supports distinct Student, Lecturer, and Admin workflows, structured modules with sequential learning access, randomized quizzes, progress tracking, lecturer gradebook, media handling, and notifications.",

        focus: [
          "Organize learning content and assessments in a structured module flow.",
          "Provide distinct workflows and access for Student, Lecturer, and Admin roles.",
          "Apply sequential learning access while tracking student progress.",
          "Randomize quiz questions and answer options with Fisher-Yates Shuffle.",
        ],

        responsibilities: [
          "Developed the application across frontend and backend.",
          "Implemented authentication and role-based access control for Student, Lecturer, and Admin workflows.",
          "Built learning modules, sequential content access, quiz flows, and progress tracking.",
          "Integrated Cloudinary for media handling and Resend for email delivery.",
        ],

        features: [
          {
            title:
              "Multi-Role Learning",
            detail:
              "Student, Lecturer, and Admin roles have distinct access and workflows across the platform.",
          },
          {
            title:
              "Structured Learning Flow",
            detail:
              "Modules combine learning materials and quizzes with sequential access and progress tracking.",
          },
          {
            title:
              "Quiz & Assessment",
            detail:
              "Questions and answer options are randomized with Fisher-Yates Shuffle, with support for time limits, attempts, and results.",
          },
          {
            title:
              "Learning Management",
            detail:
              "Lecturer gradebook, enrollment, user management, and notification flows support the broader LMS experience.",
          },
        ],

        implementation: [
          {
            title:
              "Full-Stack Application",
            detail:
              "Next.js and TypeScript provide the main application foundation across interface and server-side flows.",
          },
          {
            title:
              "Relational Data Layer",
            detail:
              "Prisma ORM and MySQL model users, roles, modules, learning content, enrollments, progress, quizzes, and related records.",
          },
          {
            title:
              "Sequential Learning Logic",
            detail:
              "Learning items are progressively unlocked to support an ordered material and assessment flow.",
          },
          {
            title:
              "Quiz Randomization",
            detail:
              "Fisher-Yates Shuffle randomizes both question and answer-option ordering within quiz sessions.",
          },
          {
            title:
              "Supporting Services",
            detail:
              "Cloudinary handles media while Resend supports email delivery.",
          },
        ],

        screens: [
          {
            label:
              "Student Dashboard",
            detail:
              "Overview of enrolled modules, learning progress, completed activities, and pending quizzes.",
            layout: "wide",
          },
          {
            label:
              "Module & Lesson",
            detail:
              "A representative module and learning-content experience with structured progression.",
            layout:
              "standard",
          },
          {
            label:
              "Quiz & Result",
            detail:
              "The assessment experience with randomized questions, answer options, and quiz results.",
            layout:
              "standard",
          },
          {
            label:
              "Lecturer Gradebook",
            detail:
              "A lecturer-facing view for reviewing student learning and assessment results.",
            layout: "wide",
          },
        ],
      },

      "disarpus-bekasi": {
        overview:
          "A responsive public-facing website for Disarpus Kabupaten Bekasi, presenting institutional information, news and articles, quick-access services, and public contact information. During my internship, I contributed to the frontend implementation from Figma designs using Next.js.",

        focus: [
          "Translate Figma designs into responsive public-facing web pages.",
          "Present institutional information and service entry points through a clear interface.",
          "Keep the frontend visually consistent across different screen sizes.",
        ],

        responsibilities: [
          "Translated Figma designs into responsive Next.js pages.",
          "Implemented the homepage, navigation, and news-related interfaces.",
          "Reviewed and fixed layout issues across different screen sizes.",
          "Collaborated with the team during implementation and refinement.",
        ],

        features: [
          {
            title:
              "Public Information Homepage",
            detail:
              "The homepage introduces Disarpus services, public information, quick access, and recent content.",
          },
          {
            title:
              "Institutional Information",
            detail:
              "Profile-related pages present organizational information, duties, functions, vision, and related public content.",
          },
          {
            title:
              "News & Articles",
            detail:
              "Article listing and detail interfaces support publication of news and informational content.",
          },
          {
            title:
              "Quick Access & Contact",
            detail:
              "Service shortcuts, location information, contact details, and public communication flows support visitor access.",
          },
        ],

        implementation: [
          {
            title:
              "Figma-to-Code",
            detail:
              "Figma designs were used as the visual reference for frontend implementation.",
          },
          {
            title:
              "Next.js Frontend",
            detail:
              "Responsive public-facing pages and reusable interface components were implemented with Next.js and TypeScript.",
          },
          {
            title:
              "Responsive Refinement",
            detail:
              "Layouts were reviewed and adjusted across different viewport sizes.",
          },
        ],

        screens: [
          {
            label:
              "Homepage",
            detail:
              "The primary desktop implementation of the public-facing website.",
            layout: "wide",
          },
          {
            label:
              "News & Article Interface",
            detail:
              "A representative news listing or article-detail interface from the project.",
            layout:
              "standard",
          },
          {
            label:
              "Responsive View",
            detail:
              "A mobile or narrow-screen view showing responsive navigation and layout behavior.",
            layout:
              "portrait",
            frame:
              "phone",
          },
        ],
      },

      "lestari-waste-bank": {
        overview:
          "Lestari Waste Bank is a collaborative digital waste-bank platform developed during the Kampus Merdeka MSIB program. The product covers waste collection services, points and rewards, educational content, marketplace-related flows, and supporting management features. I contributed to the frontend implementation using Laravel.",

        focus: [
          "Support waste collection activities through an accessible digital interface.",
          "Connect collected waste with point tracking and reward-oriented flows.",
          "Provide educational and marketplace-related content within the platform.",
          "Support broader waste-bank management through operational and reporting flows.",
        ],

        responsibilities: [
          "Developed frontend interfaces using Laravel.",
          "Contributed to user-facing waste services, point tracking, educational content, and reward flows.",
          "Collaborated with the team throughout project development.",
        ],

        features: [
          {
            title:
              "Waste Collection Services",
            detail:
              "Digital service flows support waste collection and drop-off activities within the waste-bank experience.",
          },
          {
            title:
              "Points & Rewards",
            detail:
              "Waste activities connect with point tracking and reward-redemption experiences.",
          },
          {
            title:
              "Education & Marketplace",
            detail:
              "Educational content and marketplace-related flows extend the platform beyond waste transactions.",
          },
          {
            title:
              "Management & Reporting",
            detail:
              "Supporting management interfaces cover operational data, rewards, waste reception, and reporting needs.",
          },
        ],

        screens: [
          {
            label:
              "Platform Homepage",
            detail:
              "A primary view introducing the waste-bank platform and its main services.",
            layout: "wide",
          },
          {
            label:
              "Waste Service Flow",
            detail:
              "A representative user-facing flow for waste collection or drop-off services.",
            layout:
              "standard",
          },
          {
            label:
              "Points, Rewards & Marketplace",
            detail:
              "A supporting view representing point, reward, or marketplace-related functionality.",
            layout:
              "standard",
          },
        ],
      },

      "gold-price-prediction": {
        overview:
          "Gold Price Prediction System is a Machine Learning course project built as a Streamlit application. I developed the application and technical implementation, integrating a linear regression model with gold-price and USD/IDR data, automatic currency and unit conversion, next-day prediction, and manual simulation.",

        focus: [
          "Use recent gold-price values as inputs for a linear regression prediction model.",
          "Combine gold-price and USD/IDR data to present values in IDR per gram.",
          "Present a next-day prediction together with its direction and price difference.",
          "Provide a manual simulation flow for exploring predictions with custom inputs.",
        ],

        responsibilities: [
          "Built the Streamlit interface and application flow.",
          "Integrated the trained linear regression model with market and exchange-rate APIs.",
          "Implemented currency and unit conversion between USD per troy ounce and IDR per gram.",
          "Built the live prediction and manual simulation result flows.",
        ],

        features: [
          {
            title:
              "Live Market Data",
            detail:
              "MetalPriceAPI and CurrencyAPI provide gold-price and USD/IDR data used by the application.",
          },
          {
            title:
              "Automatic Conversion",
            detail:
              "Market values are converted from USD per troy ounce into IDR per gram for user-facing results.",
          },
          {
            title:
              "Next-Day Prediction",
            detail:
              "The model generates a next-day price prediction and presents its direction, nominal difference, and percentage change.",
          },
          {
            title:
              "Manual Simulation",
            detail:
              "Users can enter their own recent price values to explore a separate prediction scenario.",
          },
        ],

        screens: [
          {
            label:
              "Prediction Dashboard",
            detail:
              "The main Streamlit dashboard showing current market information and the next-day prediction.",
            layout: "wide",
          },
          {
            label:
              "Manual Simulation",
            detail:
              "The custom-input flow for exploring a separate prediction scenario.",
            layout: "wide",
          },
        ],
      },

      healingaja: {
        overview:
          "HealingAja! is a personal responsive tourism landing-page project built with HTML, CSS, and JavaScript. It presents selected Indonesian destinations, travel guidance, and supporting travel information through a responsive single-page experience.",

        focus: [
          "Present destination content through a clear and visual landing-page hierarchy.",
          "Organize destinations, travel guidance, services, and contact information in one page.",
          "Keep navigation and content usable across desktop and mobile screen sizes.",
        ],

        features: [
          {
            title:
              "Destination Discovery",
            detail:
              "Selected Indonesian destinations are presented through visual destination cards.",
          },
          {
            title:
              "Travel Guidance",
            detail:
              "A dedicated guidance section presents supporting information for planning a trip.",
          },
          {
            title:
              "Responsive Navigation",
            detail:
              "The navigation adapts to smaller screens with a JavaScript-powered mobile menu.",
          },
          {
            title:
              "Travel Information",
            detail:
              "Supporting sections organize travel inspiration, services, and related information within the landing page.",
          },
        ],

        screens: [
          {
            label:
              "Landing Page",
            detail:
              "The main desktop view combining the hero and destination-focused experience.",
            layout: "wide",
          },
          {
            label:
              "Guide & Travel Content",
            detail:
              "A supporting view showing travel guidance or service-oriented content.",
            layout: "wide",
          },
          {
            label:
              "Mobile Experience",
            detail:
              "A mobile view demonstrating the responsive layout and navigation.",
            layout:
              "portrait",
            frame:
              "phone",
          },
        ],
      },

    },
  },

  id: {
    ui: {
      back:
        "Semua Proyek",

      labels: {
        role: "Peran",
        context: "Konteks",
        year: "Tahun",
      },

      overview:
        "Ringkasan",
      focus:
        "Fokus Proyek",
      responsibilities:
        "Tanggung Jawab",
      technology:
        "Teknologi",
      keyFeatures:
        "Fitur Utama",
      implementation:
        "Implementasi Teknis",
      screens:
        "Tampilan Pilihan",
      selectedScreen:
        "tampilan terpilih",
      selectedScreens:
        "tampilan terpilih",
      primaryScreen:
        "Tampilan utama",

      nextProject:
        "Proyek Berikutnya",

      actions: {
        liveProject:
          "Live Project",
        allProjects:
          "Kembali ke Semua Proyek",
        contact:
          "Get in Touch",
      },
    },

    projects: {
      edubidan: {
        overview:
          "EduBidan adalah Learning Management System full-stack yang dikembangkan sebagai proyek skripsi untuk pendidikan kebidanan. Platform ini mendukung workflow Mahasiswa, Dosen, dan Admin yang berbeda, modul pembelajaran dengan akses berurutan, kuis teracak, pelacakan progres, gradebook dosen, pengelolaan media, dan notifikasi.",

        focus: [
          "Menyusun konten pembelajaran dan asesmen dalam alur modul yang terstruktur.",
          "Menyediakan workflow dan akses yang berbeda untuk Mahasiswa, Dosen, dan Admin.",
          "Menerapkan akses pembelajaran berurutan sekaligus melacak progres mahasiswa.",
          "Mengacak soal dan pilihan jawaban menggunakan Fisher-Yates Shuffle.",
        ],

        responsibilities: [
          "Mengembangkan aplikasi pada sisi frontend dan backend.",
          "Mengimplementasikan autentikasi dan role-based access control untuk workflow Mahasiswa, Dosen, dan Admin.",
          "Membangun modul pembelajaran, akses konten berurutan, alur kuis, dan pelacakan progres.",
          "Mengintegrasikan Cloudinary untuk media serta Resend untuk pengiriman email.",
        ],

        features: [
          {
            title:
              "Pembelajaran Multi-Role",
            detail:
              "Mahasiswa, Dosen, dan Admin memiliki akses serta workflow yang berbeda di dalam platform.",
          },
          {
            title:
              "Alur Belajar Terstruktur",
            detail:
              "Modul menggabungkan materi dan kuis dengan akses berurutan serta pelacakan progres.",
          },
          {
            title:
              "Kuis & Asesmen",
            detail:
              "Soal dan pilihan jawaban diacak menggunakan Fisher-Yates Shuffle dengan dukungan batas waktu, riwayat pengerjaan, dan hasil kuis.",
          },
          {
            title:
              "Pengelolaan Pembelajaran",
            detail:
              "Gradebook dosen, enrollment, pengelolaan pengguna, dan notifikasi mendukung workflow LMS secara menyeluruh.",
          },
        ],

        implementation: [
          {
            title:
              "Aplikasi Full-Stack",
            detail:
              "Next.js dan TypeScript menjadi fondasi utama untuk antarmuka serta alur server-side aplikasi.",
          },
          {
            title:
              "Data Relasional",
            detail:
              "Prisma ORM dan MySQL memodelkan pengguna, role, modul, konten belajar, enrollment, progres, kuis, dan data terkait.",
          },
          {
            title:
              "Logika Pembelajaran Berurutan",
            detail:
              "Item pembelajaran dibuka secara bertahap untuk menjaga urutan materi dan asesmen.",
          },
          {
            title:
              "Randomisasi Kuis",
            detail:
              "Fisher-Yates Shuffle mengacak urutan soal sekaligus pilihan jawaban pada sesi kuis.",
          },
          {
            title:
              "Layanan Pendukung",
            detail:
              "Cloudinary menangani media, sedangkan Resend mendukung pengiriman email.",
          },
        ],

        screens: [
          {
            label:
              "Dashboard Mahasiswa",
            detail:
              "Ringkasan modul yang diikuti, progres belajar, aktivitas selesai, dan kuis yang belum dikerjakan.",
            layout: "wide",
          },
          {
            label:
              "Modul & Materi",
            detail:
              "Tampilan modul dan materi pembelajaran dengan progres yang terstruktur.",
            layout:
              "standard",
          },
          {
            label:
              "Kuis & Hasil",
            detail:
              "Pengalaman asesmen dengan soal dan pilihan jawaban teracak serta hasil kuis.",
            layout:
              "standard",
          },
          {
            label:
              "Gradebook Dosen",
            detail:
              "Tampilan dosen untuk meninjau pembelajaran dan hasil asesmen mahasiswa.",
            layout: "wide",
          },
        ],
      },

      "disarpus-bekasi": {
        overview:
          "Website publik responsif untuk Disarpus Kabupaten Bekasi yang menyajikan informasi kelembagaan, berita dan artikel, akses cepat layanan, serta informasi kontak publik. Selama magang, saya berkontribusi pada implementasi frontend dari desain Figma menggunakan Next.js.",

        focus: [
          "Menerapkan desain Figma menjadi halaman publik yang responsif.",
          "Menyajikan informasi kelembagaan dan akses layanan melalui antarmuka yang jelas.",
          "Menjaga konsistensi frontend pada berbagai ukuran layar.",
        ],

        responsibilities: [
          "Menerapkan desain Figma menjadi halaman Next.js yang responsif.",
          "Mengembangkan homepage, navigasi, dan antarmuka terkait berita.",
          "Meninjau dan memperbaiki masalah layout pada berbagai ukuran layar.",
          "Berkolaborasi dengan tim selama proses implementasi dan penyempurnaan.",
        ],

        features: [
          {
            title:
              "Homepage Informasi Publik",
            detail:
              "Homepage memperkenalkan layanan Disarpus, informasi publik, akses cepat, dan konten terbaru.",
          },
          {
            title:
              "Informasi Kelembagaan",
            detail:
              "Halaman profil menyajikan informasi organisasi, tugas dan fungsi, visi misi, serta konten publik terkait.",
          },
          {
            title:
              "Berita & Artikel",
            detail:
              "Antarmuka daftar dan detail artikel mendukung penyajian berita serta konten informasi.",
          },
          {
            title:
              "Akses Cepat & Kontak",
            detail:
              "Shortcut layanan, informasi lokasi, detail kontak, dan alur komunikasi publik mendukung kebutuhan pengunjung.",
          },
        ],

        implementation: [
          {
            title:
              "Figma-to-Code",
            detail:
              "Desain Figma digunakan sebagai acuan visual dalam implementasi frontend.",
          },
          {
            title:
              "Frontend Next.js",
            detail:
              "Halaman publik responsif dan komponen antarmuka reusable diimplementasikan menggunakan Next.js dan TypeScript.",
          },
          {
            title:
              "Penyempurnaan Responsif",
            detail:
              "Layout ditinjau dan disesuaikan pada berbagai ukuran viewport.",
          },
        ],

        screens: [
          {
            label:
              "Homepage",
            detail:
              "Implementasi desktop utama dari website publik Disarpus.",
            layout: "wide",
          },
          {
            label:
              "Antarmuka Berita & Artikel",
            detail:
              "Tampilan representatif dari daftar berita atau halaman detail artikel.",
            layout:
              "standard",
          },
          {
            label:
              "Responsive View",
            detail:
              "Tampilan mobile yang menunjukkan perilaku navigasi dan layout responsif.",
            layout:
              "portrait",
            frame:
              "phone",
          },
        ],
      },

      "lestari-waste-bank": {
        overview:
          "Lestari Waste Bank adalah platform bank sampah digital yang dikembangkan secara kolaboratif dalam program Kampus Merdeka MSIB. Produk ini mencakup layanan pengelolaan sampah, poin dan reward, konten edukasi, alur marketplace, serta fitur pengelolaan pendukung. Saya berkontribusi pada implementasi frontend menggunakan Laravel.",

        focus: [
          "Mendukung aktivitas pengelolaan sampah melalui antarmuka digital yang mudah diakses.",
          "Menghubungkan aktivitas sampah dengan pencatatan poin dan alur reward.",
          "Menyediakan konten edukasi serta fungsi marketplace di dalam platform.",
          "Mendukung pengelolaan bank sampah melalui alur operasional dan pelaporan.",
        ],

        responsibilities: [
          "Mengembangkan antarmuka frontend menggunakan Laravel.",
          "Berkontribusi pada layanan sampah, pencatatan poin, konten edukasi, dan alur reward untuk pengguna.",
          "Berkolaborasi dengan tim selama pengembangan proyek.",
        ],

        features: [
          {
            title:
              "Layanan Pengelolaan Sampah",
            detail:
              "Alur layanan digital mendukung aktivitas pengumpulan atau drop-off sampah dalam pengalaman bank sampah.",
          },
          {
            title:
              "Poin & Reward",
            detail:
              "Aktivitas pengelolaan sampah terhubung dengan pencatatan poin dan pengalaman penukaran reward.",
          },
          {
            title:
              "Edukasi & Marketplace",
            detail:
              "Konten edukasi dan alur marketplace memperluas fungsi platform di luar transaksi sampah.",
          },
          {
            title:
              "Pengelolaan & Pelaporan",
            detail:
              "Antarmuka pengelolaan pendukung mencakup data operasional, reward, penerimaan sampah, dan kebutuhan pelaporan.",
          },
        ],

        screens: [
          {
            label:
              "Homepage Platform",
            detail:
              "Tampilan utama yang memperkenalkan platform bank sampah dan layanan utamanya.",
            layout: "wide",
          },
          {
            label:
              "Alur Layanan Sampah",
            detail:
              "Tampilan representatif dari layanan pengumpulan atau drop-off sampah.",
            layout:
              "standard",
          },
          {
            label:
              "Poin, Reward & Marketplace",
            detail:
              "Tampilan pendukung untuk fungsi poin, reward, atau marketplace.",
            layout:
              "standard",
          },
        ],
      },

      "gold-price-prediction": {
        overview:
          "Gold Price Prediction System adalah proyek mata kuliah Machine Learning yang dibangun sebagai aplikasi Streamlit. Saya mengembangkan aplikasi dan implementasi teknisnya, mencakup integrasi model linear regression dengan data harga emas dan USD/IDR, konversi mata uang dan satuan secara otomatis, prediksi hari berikutnya, serta simulasi manual.",

        focus: [
          "Menggunakan nilai harga emas terbaru sebagai input model prediksi linear regression.",
          "Menggabungkan data harga emas dan USD/IDR untuk menyajikan nilai dalam IDR per gram.",
          "Menyajikan prediksi harga hari berikutnya beserta arah dan selisih nilainya.",
          "Menyediakan simulasi manual untuk mengeksplorasi prediksi menggunakan input sendiri.",
        ],

        responsibilities: [
          "Membangun antarmuka Streamlit dan alur aplikasi.",
          "Mengintegrasikan model linear regression dengan API harga pasar dan kurs.",
          "Mengimplementasikan konversi mata uang dan satuan dari USD per troy ounce ke IDR per gram.",
          "Membangun alur hasil prediksi aktual dan simulasi manual.",
        ],

        features: [
          {
            title:
              "Data Pasar Aktual",
            detail:
              "MetalPriceAPI dan CurrencyAPI menyediakan data harga emas serta USD/IDR yang digunakan oleh aplikasi.",
          },
          {
            title:
              "Konversi Otomatis",
            detail:
              "Nilai pasar dikonversi dari USD per troy ounce menjadi IDR per gram untuk hasil yang ditampilkan kepada pengguna.",
          },
          {
            title:
              "Prediksi Hari Berikutnya",
            detail:
              "Model menghasilkan prediksi harga hari berikutnya sekaligus menampilkan arah, selisih nominal, dan perubahan persentase.",
          },
          {
            title:
              "Simulasi Manual",
            detail:
              "Pengguna dapat memasukkan nilai harga sendiri untuk mengeksplorasi skenario prediksi yang berbeda.",
          },
        ],

        screens: [
          {
            label:
              "Dashboard Prediksi",
            detail:
              "Dashboard utama Streamlit yang menampilkan informasi pasar dan prediksi harga hari berikutnya.",
            layout: "wide",
          },
          {
            label:
              "Simulasi Manual",
            detail:
              "Alur input khusus untuk mengeksplorasi skenario prediksi yang berbeda.",
            layout: "wide",
          },
        ],
      },

      healingaja: {
        overview:
          "HealingAja! adalah proyek personal berupa landing page pariwisata responsif yang dibangun menggunakan HTML, CSS, dan JavaScript. Website ini menyajikan destinasi pilihan di Indonesia, panduan perjalanan, serta informasi wisata pendukung melalui pengalaman single-page yang responsif.",

        focus: [
          "Menyajikan konten destinasi melalui hierarki landing page yang jelas dan visual.",
          "Mengatur destinasi, panduan perjalanan, layanan, dan informasi kontak dalam satu halaman.",
          "Menjaga navigasi serta konten tetap nyaman digunakan pada desktop dan mobile.",
        ],

        features: [
          {
            title:
              "Eksplorasi Destinasi",
            detail:
              "Destinasi pilihan di Indonesia disajikan melalui card visual.",
          },
          {
            title:
              "Panduan Perjalanan",
            detail:
              "Bagian panduan menyajikan informasi pendukung untuk membantu perencanaan perjalanan.",
          },
          {
            title:
              "Navigasi Responsif",
            detail:
              "Navigasi menyesuaikan layar kecil menggunakan mobile menu berbasis JavaScript.",
          },
          {
            title:
              "Informasi Wisata",
            detail:
              "Bagian pendukung menyusun inspirasi perjalanan, layanan, dan informasi terkait dalam landing page.",
          },
        ],

        screens: [
          {
            label:
              "Landing Page",
            detail:
              "Tampilan desktop utama yang menggabungkan hero dan pengalaman eksplorasi destinasi.",
            layout: "wide",
          },
          {
            label:
              "Panduan & Konten Wisata",
            detail:
              "Tampilan pendukung yang menunjukkan bagian panduan atau layanan perjalanan.",
            layout: "wide",
          },
          {
            label:
              "Tampilan Mobile",
            detail:
              "Tampilan mobile yang menunjukkan layout dan navigasi responsif.",
            layout:
              "portrait",
            frame:
              "phone",
          },
        ],
      },

    },
  },
};
