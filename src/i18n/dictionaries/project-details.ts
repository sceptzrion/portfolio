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
        allProjects:
          "Back to All Projects",
        contact:
          "Get in Touch",
      },
    },

    projects: {
      edubidan: {
        overview:
          "EduBidan was developed as my bachelor's thesis to support structured digital learning for midwifery education. I worked across the application stack, covering role-based access, learning modules, randomized quizzes, progress tracking, media handling, and email delivery.",

        focus: [
          "Bring learning content and assessment into one structured application.",
          "Provide distinct access and capabilities for each user role.",
          "Randomize quiz question order with Fisher-Yates Shuffle.",
          "Track learning progress across the platform.",
        ],

        responsibilities: [
          "Developed the application across frontend and backend.",
          "Implemented authentication and role-based access control.",
          "Built learning modules, quizzes, and progress tracking.",
          "Integrated Cloudinary for media handling and Resend for email delivery.",
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
          "During my internship, I developed responsive frontend pages for the Disarpus Kabupaten Bekasi website from Figma designs using Next.js. My work covered the homepage, navigation, news-related interfaces, and responsive layout refinements.",

        focus: [
          "Translate Figma designs into responsive web pages.",
          "Keep the implementation visually consistent across screen sizes.",
          "Develop frontend pages within an existing project workflow.",
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
              "Responsive Experience",
            detail:
              "Layouts were adjusted to support a consistent experience across screen sizes.",
          },
        ],

        implementation: [
          {
            title:
              "Figma-to-Code",
            detail:
              "Figma designs were used as the visual reference for implementation.",
          },
          {
            title:
              "Next.js Frontend",
            detail:
              "Responsive frontend pages were implemented using Next.js.",
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
          "Lestari Waste Bank is a collaborative digital waste-management project developed during the Kampus Merdeka MSIB program. I contributed to the frontend using Laravel, including flows for waste pickup requests, point tracking, educational content, and rewards.",

        focus: [
          "Make waste pickup requests accessible through a digital interface.",
          "Present point tracking and rewards clearly to users.",
          "Support educational content within the waste-management experience.",
        ],

        responsibilities: [
          "Developed frontend interfaces using Laravel.",
          "Contributed to waste pickup, point tracking, educational content, and reward flows.",
          "Collaborated with the team throughout project development.",
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
              "Rewards are presented as part of the platform experience alongside point tracking.",
          },
          {
            title:
              "Educational Content",
            detail:
              "Waste-related educational information is presented within the platform.",
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
          "Gold Price Prediction System uses linear regression with gold price and USD/IDR data to generate predicted values. It also includes a manual simulation flow for exploring predictions through different inputs.",

        focus: [
          "Use gold price and USD/IDR data as prediction inputs.",
          "Apply linear regression as the prediction method.",
          "Provide a manual simulation flow for exploring predicted values.",
        ],

        features: [
          {
            title:
              "Data Inputs",
            detail:
              "Gold price and USD/IDR data are used as inputs within the prediction flow.",
          },
          {
            title:
              "Linear Regression",
            detail:
              "Linear regression is used as the core prediction method.",
          },
          {
            title:
              "Prediction Result",
            detail:
              "Prediction results are presented through the system interface.",
          },
          {
            title:
              "Manual Simulation",
            detail:
              "A manual simulation flow allows predicted values to be explored through different inputs.",
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
          "HealingAja! is a personal tourism landing-page project focused on presenting destinations and travel information through a clear content structure.",

        focus: [
          "Present destination content through a clear visual hierarchy.",
          "Organize travel information within a focused landing-page experience.",
        ],

        features: [
          {
            title:
              "Destination Highlights",
            detail:
              "Destination content is presented as the primary visual focus of the page.",
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
      selectedScreen:
        "tampilan terpilih",
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
          "EduBidan dikembangkan sebagai proyek skripsi untuk mendukung pembelajaran kebidanan dalam satu platform digital yang terstruktur. Saya mengerjakan aplikasi secara full-stack, mencakup akses berbasis role, modul pembelajaran, kuis teracak, pelacakan progres, pengelolaan media, dan pengiriman email.",

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
              "Layanan Pendukung",
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
          "Selama magang, saya mengembangkan halaman frontend responsif untuk website Disarpus Kabupaten Bekasi dari desain Figma menggunakan Next.js. Pekerjaan saya mencakup homepage, navigasi, antarmuka berita, serta penyempurnaan layout responsif.",

        focus: [
          "Menerapkan desain Figma menjadi halaman web responsif.",
          "Menjaga konsistensi tampilan pada berbagai ukuran layar.",
          "Mengembangkan halaman frontend dalam workflow proyek yang sudah berjalan.",
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
              "Tampilan Responsif",
            detail:
              "Layout disesuaikan untuk menjaga pengalaman yang konsisten pada berbagai ukuran layar.",
          },
        ],

        implementation: [
          {
            title:
              "Figma-to-Code",
            detail:
              "Desain Figma digunakan sebagai acuan visual dalam proses implementasi.",
          },
          {
            title:
              "Frontend Next.js",
            detail:
              "Halaman frontend responsif diimplementasikan menggunakan Next.js.",
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
          "Lestari Waste Bank adalah proyek digital pengelolaan sampah yang dikembangkan secara kolaboratif dalam program Kampus Merdeka MSIB. Saya berkontribusi pada pengembangan frontend menggunakan Laravel, termasuk alur penjemputan sampah, pencatatan poin, konten edukasi, dan reward.",

        focus: [
          "Membuat layanan penjemputan sampah dapat diakses melalui antarmuka digital.",
          "Menyajikan pencatatan poin dan reward dengan jelas kepada pengguna.",
          "Mendukung konten edukasi dalam pengalaman pengelolaan sampah.",
        ],

        responsibilities: [
          "Mengembangkan antarmuka frontend menggunakan Laravel.",
          "Berkontribusi pada alur penjemputan sampah, pencatatan poin, konten edukasi, dan reward.",
          "Berkolaborasi dengan tim selama pengembangan proyek.",
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
              "Reward disajikan sebagai bagian dari pengalaman platform bersama dengan pencatatan poin.",
          },
          {
            title:
              "Konten Edukasi",
            detail:
              "Informasi edukatif terkait sampah disajikan di dalam platform.",
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
          "Gold Price Prediction System menggunakan linear regression dengan data harga emas dan USD/IDR untuk menghasilkan nilai prediksi. Sistem ini juga memiliki alur simulasi manual untuk mengeksplorasi prediksi melalui input yang berbeda.",

        focus: [
          "Menggunakan data harga emas dan USD/IDR sebagai input prediksi.",
          "Menerapkan linear regression sebagai metode prediksi.",
          "Menyediakan alur simulasi manual untuk mengeksplorasi nilai prediksi.",
        ],

        features: [
          {
            title:
              "Input Data",
            detail:
              "Data harga emas dan USD/IDR digunakan sebagai input dalam alur prediksi.",
          },
          {
            title:
              "Linear Regression",
            detail:
              "Linear regression digunakan sebagai metode utama prediksi.",
          },
          {
            title:
              "Hasil Prediksi",
            detail:
              "Hasil prediksi disajikan melalui antarmuka sistem.",
          },
          {
            title:
              "Simulasi Manual",
            detail:
              "Alur simulasi manual memungkinkan nilai prediksi dieksplorasi melalui input yang berbeda.",
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
          "HealingAja! adalah proyek personal berupa landing page pariwisata yang berfokus menyajikan destinasi dan informasi perjalanan melalui struktur konten yang jelas.",

        focus: [
          "Menyajikan konten destinasi melalui hierarki visual yang jelas.",
          "Mengatur informasi perjalanan dalam pengalaman landing page yang terarah.",
        ],

        features: [
          {
            title:
              "Sorotan Destinasi",
            detail:
              "Konten destinasi disajikan sebagai fokus visual utama pada halaman.",
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
