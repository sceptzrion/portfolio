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
    selectedScreens: string;
    primaryScreen: string;

    nextProject: string;

    actions: {
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
      selectedScreens:
        "selected screens",
      primaryScreen:
        "Primary screen",

      nextProject:
        "Next Project",

      actions: {
        allProjects:
          "Back to All Projects",
        contact:
          "Get in Touch",
      },
    },

    projects: {
      edubidan: {
        overview:
          "EduBidan was developed as my bachelor's thesis to support structured digital learning for midwifery education. I worked across the application stack, covering role-based access, learning modules, randomized quizzes, progress tracking, media handling, and transactional email.",

        focus: [
          "Bring learning content and assessment into one structured application.",
          "Provide distinct access and capabilities for each user role.",
          "Randomize quiz question order with Fisher-Yates Shuffle.",
          "Track learning progress across the platform.",
        ],

        responsibilities: [
          "Develop the application across frontend and backend.",
          "Implement authentication and role-based access control.",
          "Build learning modules, quizzes, and progress tracking.",
          "Integrate Cloudinary for media handling and Resend for email delivery.",
        ],

        features: [
          {
            title:
              "Role-Based Access",
            detail:
              "Different access and capabilities are provided according to the user's role.",
          },
          {
            title:
              "Interactive Modules",
            detail:
              "Learning materials are structured into modules that support the learning flow.",
          },
          {
            title:
              "Randomized Quizzes",
            detail:
              "Fisher-Yates Shuffle is used to randomize quiz question order.",
          },
          {
            title:
              "Progress Tracking",
            detail:
              "Learning progress can be tracked as users move through the platform.",
          },
        ],

        implementation: [
          {
            title:
              "Full-Stack Application",
            detail:
              "Built with Next.js and TypeScript as the main application foundation.",
          },
          {
            title:
              "Data Layer",
            detail:
              "Prisma ORM and MySQL are used to model and manage relational application data.",
          },
          {
            title:
              "Quiz Randomization",
            detail:
              "Fisher-Yates Shuffle handles randomized question ordering for quiz sessions.",
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
              "Learning Dashboard",
            detail:
              "Primary overview of learning activity and progress.",
            layout: "wide",
          },
          {
            label:
              "Learning Module",
            detail:
              "A representative module or lesson experience.",
            layout:
              "standard",
          },
          {
            label:
              "Quiz Flow",
            detail:
              "The assessment experience with randomized questions.",
            layout:
              "standard",
          },
          {
            label:
              "Progress & Management",
            detail:
              "A supporting view for progress or role-based management.",
            layout: "wide",
          },
        ],
      },

      "disarpus-bekasi": {
        overview:
          "During my internship, I developed responsive frontend pages for the revitalization of the Disarpus Kabupaten Bekasi website based on approved Figma designs. The work included the homepage, navigation, news-related interfaces, and responsive layout improvements using Next.js.",

        focus: [
          "Translate approved Figma designs into responsive web pages.",
          "Keep the implementation visually consistent across screen sizes.",
          "Build maintainable frontend pages within an existing project workflow.",
        ],

        features: [
          {
            title:
              "Homepage",
            detail:
              "Frontend implementation of the main public-facing homepage.",
          },
          {
            title:
              "Navigation",
            detail:
              "Responsive navigation implemented as part of the website experience.",
          },
          {
            title:
              "News Interfaces",
            detail:
              "News-related pages and content presentation were implemented for the site.",
          },
          {
            title:
              "Responsive Layout",
            detail:
              "Layout and responsive issues were diagnosed and corrected across screens.",
          },
        ],

        implementation: [
          {
            title:
              "Design Handoff",
            detail:
              "Approved Figma layouts were used as the visual implementation reference.",
          },
          {
            title:
              "Frontend Development",
            detail:
              "Responsive pages were implemented with Next.js.",
          },
          {
            title:
              "Responsive QA",
            detail:
              "Layout issues were reviewed and adjusted across different viewport sizes.",
          },
        ],

        screens: [
          {
            label:
              "Homepage",
            detail:
              "The primary desktop implementation of the redesigned website.",
            layout: "wide",
          },
          {
            label:
              "News Interface",
            detail:
              "A representative news or content page from the project.",
            layout:
              "standard",
          },
          {
            label:
              "Responsive View",
            detail:
              "A mobile or narrow-screen view showing responsive behavior.",
            layout:
              "portrait",
            frame:
              "phone",
          },
        ],
      },

      "lestari-waste-bank": {
        overview:
          "Lestari Waste Bank is a collaborative digital waste-management project developed during the Kampus Merdeka MSIB program. I worked on the frontend using Laravel, contributing to flows for waste pickup requests, point tracking, educational content, and community rewards.",

        focus: [
          "Make waste pickup requests accessible through a digital interface.",
          "Present point tracking and rewards clearly to users.",
          "Support educational content as part of the waste-management experience.",
          "Work collaboratively as part of a team project.",
        ],

        features: [
          {
            title:
              "Waste Pickup",
            detail:
              "Users can access a flow for requesting waste pickup.",
          },
          {
            title:
              "Point Tracking",
            detail:
              "Collected points are presented as part of the user experience.",
          },
          {
            title:
              "Rewards",
            detail:
              "The platform includes a reward-oriented experience connected to points.",
          },
          {
            title:
              "Educational Content",
            detail:
              "Waste-related educational information is presented within the platform.",
          },
        ],

        implementation: [
          {
            title:
              "Frontend",
            detail:
              "Frontend interfaces were developed using Laravel.",
          },
          {
            title:
              "Team Collaboration",
            detail:
              "The project was developed collaboratively as part of the MSIB program.",
          },
        ],

        screens: [
          {
            label:
              "Waste Pickup Flow",
            detail:
              "A primary screen representing the waste pickup experience.",
            layout: "wide",
          },
          {
            label:
              "Points & Rewards",
            detail:
              "A supporting screen showing points or reward-related functionality.",
            layout:
              "standard",
          },
          {
            label:
              "Educational Content",
            detail:
              "A representative content screen from the learning side of the platform.",
            layout:
              "standard",
          },
        ],
      },

      "gold-price-prediction": {
        overview:
          "Gold Price Prediction System is a prediction project that uses linear regression with gold price and USD/IDR data. It also includes a manual simulation flow for exploring predicted values through different inputs.",

        focus: [
          "Use gold price and USD/IDR data as prediction inputs.",
          "Apply linear regression as the prediction method.",
          "Provide a manual simulation flow for exploring predicted values.",
        ],

        features: [
          {
            title:
              "Gold Price Data",
            detail:
              "Gold Price API data is used as part of the prediction input.",
          },
          {
            title:
              "USD/IDR Data",
            detail:
              "Currency data is incorporated through a USD/IDR API.",
          },
          {
            title:
              "Linear Regression",
            detail:
              "Linear regression is used as the core prediction method.",
          },
          {
            title:
              "Manual Simulation",
            detail:
              "Users can explore predicted values through a manual simulation flow.",
          },
        ],

        implementation: [
          {
            title:
              "Market Input",
            detail:
              "Gold Price API data provides a market-price input.",
          },
          {
            title:
              "Currency Input",
            detail:
              "USD/IDR API data provides the currency component.",
          },
          {
            title:
              "Prediction Method",
            detail:
              "Linear regression processes the available inputs for prediction.",
          },
        ],

        screens: [
          {
            label:
              "Prediction Result",
            detail:
              "The primary screen presenting prediction data or results.",
            layout: "wide",
          },
          {
            label:
              "Manual Simulation",
            detail:
              "The input and result flow used to explore predicted values manually.",
            layout: "wide",
          },
        ],
      },

      healingaja: {
        overview:
          "HealingAja! is a tourism landing page focused on presenting destinations and travel information through a clear web experience.",

        focus: [
          "Present tourism destinations in a clear visual hierarchy.",
          "Organize travel information within a focused landing-page experience.",
        ],

        features: [
          {
            title:
              "Destination Presentation",
            detail:
              "Tourism destinations are presented as the main visual content of the page.",
          },
          {
            title:
              "Travel Information",
            detail:
              "Supporting travel information is organized within the landing-page experience.",
          },
        ],

        screens: [
          {
            label:
              "Landing Page",
            detail:
              "The main visual overview of the tourism website.",
            layout: "wide",
          },
          {
            label:
              "Destination Content",
            detail:
              "A supporting section focused on destinations or travel information.",
            layout: "wide",
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
      selectedScreens:
        "tampilan terpilih",
      primaryScreen:
        "Tampilan utama",

      nextProject:
        "Proyek Berikutnya",

      actions: {
        allProjects:
          "Kembali ke Semua Proyek",
        contact:
          "Get in Touch",
      },
    },

    projects: {
      edubidan: {
        overview:
          "EduBidan dikembangkan sebagai proyek skripsi untuk mendukung pembelajaran kebidanan dalam satu platform digital yang terstruktur. Saya mengerjakan aplikasi secara full-stack, mencakup akses berbasis role, modul pembelajaran, kuis teracak, pelacakan progres, pengelolaan media, dan email transaksional.",

        focus: [
          "Menggabungkan konten pembelajaran dan asesmen dalam satu aplikasi yang terstruktur.",
          "Menyediakan akses dan kemampuan yang berbeda untuk setiap role pengguna.",
          "Mengacak urutan soal kuis menggunakan Fisher-Yates Shuffle.",
          "Melacak progres pembelajaran di dalam platform.",
        ],

        responsibilities: [
          "Mengembangkan aplikasi pada sisi frontend dan backend.",
          "Mengimplementasikan autentikasi dan role-based access control.",
          "Membangun modul pembelajaran, kuis, dan pelacakan progres.",
          "Mengintegrasikan Cloudinary untuk media serta Resend untuk pengiriman email.",
        ],

        features: [
          {
            title:
              "Role-Based Access",
            detail:
              "Akses dan kemampuan pengguna dibedakan berdasarkan role masing-masing.",
          },
          {
            title:
              "Modul Interaktif",
            detail:
              "Materi pembelajaran disusun ke dalam modul yang mendukung alur belajar.",
          },
          {
            title:
              "Kuis Teracak",
            detail:
              "Fisher-Yates Shuffle digunakan untuk mengacak urutan soal kuis.",
          },
          {
            title:
              "Pelacakan Progres",
            detail:
              "Progres pembelajaran dapat dipantau selama pengguna menggunakan platform.",
          },
        ],

        implementation: [
          {
            title:
              "Aplikasi Full-Stack",
            detail:
              "Next.js dan TypeScript digunakan sebagai fondasi utama aplikasi.",
          },
          {
            title:
              "Data Layer",
            detail:
              "Prisma ORM dan MySQL digunakan untuk memodelkan serta mengelola data relasional aplikasi.",
          },
          {
            title:
              "Randomisasi Kuis",
            detail:
              "Fisher-Yates Shuffle menangani pengacakan urutan soal pada sesi kuis.",
          },
          {
            title:
              "Supporting Services",
            detail:
              "Cloudinary menangani media, sedangkan Resend mendukung pengiriman email.",
          },
        ],

        screens: [
          {
            label:
              "Learning Dashboard",
            detail:
              "Tampilan utama untuk aktivitas pembelajaran dan progres.",
            layout: "wide",
          },
          {
            label:
              "Modul Pembelajaran",
            detail:
              "Tampilan representatif dari modul atau materi pembelajaran.",
            layout:
              "standard",
          },
          {
            label:
              "Alur Kuis",
            detail:
              "Pengalaman asesmen dengan soal yang diacak.",
            layout:
              "standard",
          },
          {
            label:
              "Progres & Management",
            detail:
              "Tampilan pendukung untuk progres atau pengelolaan berbasis role.",
            layout: "wide",
          },
        ],
      },

      "disarpus-bekasi": {
        overview:
          "Selama magang, saya mengembangkan halaman frontend responsif untuk revitalisasi website Disarpus Kabupaten Bekasi berdasarkan desain Figma yang telah disiapkan. Pekerjaan mencakup homepage, navigasi, antarmuka berita, serta perbaikan layout responsif menggunakan Next.js.",

        focus: [
          "Menerapkan desain Figma menjadi halaman web responsif.",
          "Menjaga konsistensi tampilan pada berbagai ukuran layar.",
          "Membangun halaman frontend yang mudah dikembangkan dalam workflow proyek yang sudah berjalan.",
        ],

        features: [
          {
            title:
              "Homepage",
            detail:
              "Implementasi frontend untuk halaman utama website.",
          },
          {
            title:
              "Navigasi",
            detail:
              "Navigasi responsif diimplementasikan sebagai bagian dari pengalaman website.",
          },
          {
            title:
              "Antarmuka Berita",
            detail:
              "Halaman terkait berita dan penyajian konten dikembangkan untuk website.",
          },
          {
            title:
              "Responsive Layout",
            detail:
              "Masalah layout responsif dianalisis dan diperbaiki pada berbagai ukuran layar.",
          },
        ],

        implementation: [
          {
            title:
              "Design Handoff",
            detail:
              "Desain Figma yang telah disiapkan digunakan sebagai acuan implementasi visual.",
          },
          {
            title:
              "Frontend Development",
            detail:
              "Halaman responsif diimplementasikan menggunakan Next.js.",
          },
          {
            title:
              "Responsive QA",
            detail:
              "Layout ditinjau dan disesuaikan pada berbagai ukuran viewport.",
          },
        ],

        screens: [
          {
            label:
              "Homepage",
            detail:
              "Implementasi desktop utama dari website yang direvitalisasi.",
            layout: "wide",
          },
          {
            label:
              "Antarmuka Berita",
            detail:
              "Tampilan berita atau halaman konten yang representatif.",
            layout:
              "standard",
          },
          {
            label:
              "Responsive View",
            detail:
              "Tampilan mobile atau layar sempit yang menunjukkan perilaku responsif.",
            layout:
              "portrait",
            frame:
              "phone",
          },
        ],
      },

      "lestari-waste-bank": {
        overview:
          "Lestari Waste Bank adalah proyek digital pengelolaan sampah yang dikembangkan secara kolaboratif dalam program Kampus Merdeka MSIB. Saya mengerjakan bagian frontend menggunakan Laravel, termasuk alur permintaan penjemputan sampah, pencatatan poin, konten edukasi, dan reward komunitas.",

        focus: [
          "Membuat layanan penjemputan sampah dapat diakses melalui antarmuka digital.",
          "Menyajikan pencatatan poin dan reward dengan jelas kepada pengguna.",
          "Mendukung konten edukasi sebagai bagian dari pengalaman pengelolaan sampah.",
          "Bekerja secara kolaboratif dalam proyek tim.",
        ],

        features: [
          {
            title:
              "Penjemputan Sampah",
            detail:
              "Pengguna dapat mengakses alur untuk mengajukan penjemputan sampah.",
          },
          {
            title:
              "Pencatatan Poin",
            detail:
              "Poin yang diperoleh ditampilkan sebagai bagian dari pengalaman pengguna.",
          },
          {
            title:
              "Reward",
            detail:
              "Platform memiliki pengalaman reward yang terhubung dengan poin.",
          },
          {
            title:
              "Konten Edukasi",
            detail:
              "Informasi edukatif terkait sampah disajikan di dalam platform.",
          },
        ],

        implementation: [
          {
            title:
              "Frontend",
            detail:
              "Antarmuka frontend dikembangkan menggunakan Laravel.",
          },
          {
            title:
              "Kolaborasi Tim",
            detail:
              "Proyek dikembangkan secara kolaboratif sebagai bagian dari program MSIB.",
          },
        ],

        screens: [
          {
            label:
              "Alur Penjemputan",
            detail:
              "Tampilan utama yang mewakili pengalaman penjemputan sampah.",
            layout: "wide",
          },
          {
            label:
              "Poin & Reward",
            detail:
              "Tampilan pendukung untuk fungsi poin atau reward.",
            layout:
              "standard",
          },
          {
            label:
              "Konten Edukasi",
            detail:
              "Tampilan representatif dari sisi konten edukasi platform.",
            layout:
              "standard",
          },
        ],
      },

      "gold-price-prediction": {
        overview:
          "Gold Price Prediction System adalah sistem prediksi yang menggunakan linear regression dengan data harga emas dan USD/IDR. Sistem ini juga memiliki alur simulasi manual untuk mengeksplorasi nilai prediksi melalui input yang berbeda.",

        focus: [
          "Menggunakan data harga emas dan USD/IDR sebagai input prediksi.",
          "Menerapkan linear regression sebagai metode prediksi.",
          "Menyediakan alur simulasi manual untuk mengeksplorasi nilai prediksi.",
        ],

        features: [
          {
            title:
              "Data Harga Emas",
            detail:
              "Data dari Gold Price API digunakan sebagai bagian dari input prediksi.",
          },
          {
            title:
              "Data USD/IDR",
            detail:
              "Data mata uang digunakan melalui USD/IDR API.",
          },
          {
            title:
              "Linear Regression",
            detail:
              "Linear regression digunakan sebagai metode utama prediksi.",
          },
          {
            title:
              "Simulasi Manual",
            detail:
              "Pengguna dapat mengeksplorasi nilai prediksi melalui alur simulasi manual.",
          },
        ],

        implementation: [
          {
            title:
              "Market Input",
            detail:
              "Data Gold Price API menyediakan input harga pasar.",
          },
          {
            title:
              "Currency Input",
            detail:
              "Data USD/IDR API menyediakan komponen mata uang.",
          },
          {
            title:
              "Metode Prediksi",
            detail:
              "Linear regression memproses input yang tersedia untuk menghasilkan prediksi.",
          },
        ],

        screens: [
          {
            label:
              "Hasil Prediksi",
            detail:
              "Tampilan utama yang menyajikan data atau hasil prediksi.",
            layout: "wide",
          },
          {
            label:
              "Simulasi Manual",
            detail:
              "Alur input dan hasil untuk mengeksplorasi nilai prediksi secara manual.",
            layout: "wide",
          },
        ],
      },

      healingaja: {
        overview:
          "HealingAja! adalah landing page pariwisata yang berfokus menyajikan destinasi dan informasi perjalanan melalui pengalaman web yang jelas.",

        focus: [
          "Menyajikan destinasi pariwisata melalui hierarki visual yang jelas.",
          "Mengatur informasi perjalanan dalam pengalaman landing page yang terarah.",
        ],

        features: [
          {
            title:
              "Penyajian Destinasi",
            detail:
              "Destinasi pariwisata menjadi konten visual utama pada halaman.",
          },
          {
            title:
              "Informasi Perjalanan",
            detail:
              "Informasi perjalanan pendukung disusun dalam pengalaman landing page.",
          },
        ],

        screens: [
          {
            label:
              "Landing Page",
            detail:
              "Tampilan utama website pariwisata.",
            layout: "wide",
          },
          {
            label:
              "Konten Destinasi",
            detail:
              "Bagian pendukung yang berfokus pada destinasi atau informasi perjalanan.",
            layout: "wide",
          },
        ],
      },
    },
  },
};
