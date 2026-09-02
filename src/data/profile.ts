type CertificateLink = {
  label: string;
  href: string;
};

type LearningStage = {
  label: string;
  title: string;
  period: string;
};

export const profile = {
  focusAreas: [
    {
      title: "Frontend Engineering",
      description:
        "Translating interface designs into responsive, clear, and maintainable web experiences.",
    },
    {
      title: "Full-Stack Development",
      description:
        "Connecting interfaces, application logic, authentication, services, and data into functional web applications.",
    },
    {
      title: "Database Integration",
      description:
        "Working with structured application data and building reliable connections between products and their data layer.",
    },
  ],

  education: {
    university:
      "Universitas Singaperbangsa Karawang",
    period: "2022 — 2026",
    graduationYear: "2026",
    gpa: "3.93 / 4.00",
    honour: "Cum Laude",
  },

  learning: [
    {
      title:
        "IT Full Stack Developer: Mastering Web Development Blending with Data Science",
      provider: "Rakamin Academy",
      period: "Sep — Dec 2024",
      type:
        "Certified Independent Study · MSIB Batch 7",
      description:
        "Completed a certified independent study program focused on full-stack web development and data science.",
      stages: [] as LearningStage[],
      certificates: [] as CertificateLink[],
    },
    {
      title: "Samsung Innovation Campus",
      provider:
        "Samsung Electronics Indonesia",
      period: "Aug — Nov 2025",
      type:
        "Technology Learning Program · Batch 7",
      description:
        "Participated in Samsung Innovation Campus Batch 7 as part of a team and progressed through Stage 1 and Stage 2 of the program.",
      stages: [
        {
          label: "Stage 1",
          title: "Coding & Programming",
          period:
            "15 Aug — 13 Sep 2025",
        },
        {
          label: "Stage 2",
          title: "IoT",
          period:
            "26 Sep — 1 Nov 2025",
        },
      ],
      certificates: [] as CertificateLink[],
    },
  ],

  achievements: [
    {
      title:
        "2nd Place — Idea Project Competition",
      event: "SEMANTIK 8.0",
      organizer:
        "Himpunan Mahasiswa Informatika UNSIKA",
      period: "Apr 2024",
      description:
        "Awarded 2nd place for an innovative information technology project concept.",
      certificates: [] as CertificateLink[],
    },
  ],

  quickFacts: [
    {
      label: "Based in",
      value: "Karawang, Indonesia",
    },
    {
      label: "Current focus",
      value: "Web Application Development",
    },
    {
      label: "Career stage",
      value: "Fresh Graduate",
    },
  ],
} as const;