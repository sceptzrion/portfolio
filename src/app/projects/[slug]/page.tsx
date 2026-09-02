import type {
  Metadata,
} from "next";
import {
  notFound,
} from "next/navigation";

import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";
import MotionObserver from "@/components/motion/motion-observer";
import ProjectDetailView from "@/components/sections/projects/project-detail-view";
import {
  projects,
} from "@/data/projects";
import {
  siteConfig,
} from "@/data/site";
import {
  metadataDictionary,
} from "@/i18n/dictionaries/metadata";
import {
  projectDetailsDictionary,
} from "@/i18n/dictionaries/project-details";
import {
  projectsIdContent,
} from "@/i18n/dictionaries/projects";
import {
  getLocale,
} from "@/i18n/get-locale";

type ProjectPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

function getProject(
  slug: string,
) {
  return projects.find(
    (project) =>
      project.slug === slug,
  );
}

function getNextProject(
  slug: string,
) {
  const index =
    projects.findIndex(
      (project) =>
        project.slug ===
        slug,
    );

  if (index === -1) {
    return projects[0];
  }

  return projects[
    (index + 1) %
      projects.length
  ];
}

function getLocalizedProject(
  slug: string,
  locale: "en" | "id",
) {
  const project =
    getProject(slug);

  if (!project) {
    return null;
  }

  if (locale === "en") {
    return {
      project,
      tagline:
        project.tagline,
    };
  }

  return {
    project,
    tagline:
      projectsIdContent[
        slug
      ]?.tagline ??
      project.tagline,
  };
}

export function generateStaticParams() {
  return projects.map(
    (project) => ({
      slug: project.slug,
    }),
  );
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } =
    await params;

  const locale =
    await getLocale();

  const resolved =
    getLocalizedProject(
      slug,
      locale,
    );

  if (!resolved) {
    return {};
  }

  const {
    project,
    tagline,
  } = resolved;

  const siteCopy =
    metadataDictionary[locale]
      .site;

  const title =
    locale === "id"
      ? project.title +
        " | Portofolio Muhamad Ikhsan Rizqi Yanuar"
      : project.title +
        " | Muhamad Ikhsan Rizqi Yanuar's Portfolio";

  return {
    title: {
      absolute: title,
    },

    description:
      tagline,

    openGraph: {
      type: "website",
      locale:
        siteCopy.openGraphLocale,
      url:
        siteConfig.url +
        "/projects/" +
        project.slug,
      siteName:
        siteConfig.siteName,
      title,
      description:
        tagline,
    },

    twitter: {
      card: "summary",
      title,
      description:
        tagline,
    },
  };
}

export default async function ProjectPage({
  params,
}: ProjectPageProps) {
  const { slug } =
    await params;

  const locale =
    await getLocale();

  const project =
    getProject(slug);

  if (!project) {
    notFound();
  }

  const detail =
    projectDetailsDictionary[
      locale
    ].projects[
      project.slug
    ];

  if (!detail) {
    notFound();
  }

  const nextProject =
    getNextProject(
      project.slug,
    );

  return (
    <>
      <MotionObserver />

      <Navbar />

      <main id="main-content">
        <ProjectDetailView
          project={project}
          nextProject={
            nextProject
          }
          locale={locale}
        />
      </main>

      <Footer />
    </>
  );
}
