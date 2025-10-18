"use client";

import FiveImgsGallery from "@/components/FiveImgsGallery";
import Parallax from "@/components/Parallax";
import { PrevAndNextProjectLinks } from "@/components/PrevAndNextProjectLinks";
import { ProjectHero } from "@/components/ProjectHero";
import { Spacing } from "@/components/Spacing";
import { buttonVariants } from "@/components/ui/button";
import { artistList } from "@/lib/artist-list";
import { projectList } from "@/lib/project-list";
import { cn } from "@/lib/utils";
import Link from "next/link";

const PROJECT = "missing-migrants";
const AUTHOR = "soha-elghany";

export default function Page() {
  const projectInfo = projectList.find((p) => p.folder === PROJECT);
  if (!projectInfo) return null;
  const artistInfo = artistList.find((a) => a.folder === projectInfo.artist);
  if (!artistInfo) return null;

  const imagesTop = [
    "01-full.webp",
    "02-full.webp",
    "03-full.webp",
    "04-full.webp",
    "05-full.webp",
  ];

  const images5 = [
    `/project/${AUTHOR}/missing-migrants/01-full.webp`,
    `/project/${AUTHOR}/missing-migrants/02-full.webp`,
    `/project/${AUTHOR}/missing-migrants/03-full.webp`,
    `/project/${AUTHOR}/missing-migrants/04-full.webp`,
    `/project/${AUTHOR}/missing-migrants/05-full.webp`,
  ];

  return (
    <>
      <ProjectHero
        artist={artistInfo}
        project={projectInfo}
        images={imagesTop}
        marginTopRightColumn={82}
      />

      <div className="wrapper">
        <p className="drop-cap">
          In 2022, Soha Elghany visualised data from the Missing Migrants
          Project, which tracks lives lost along migration routes. Each death is
          more than a statistic; it represents a human life, a story of hope,
          fear, and displacement.
        </p>

        <p>
          Large numbers in migration data can desensitise audiences. To counter
          this, Soha chose a disaggregated approach: every dot represents a
          person, and hovering reveals age, gender, and location. This design
          ensures empathy remains at the forefront.
        </p>

        <Parallax
          text="Missing Migrants"
          imageUrl={`/project/${AUTHOR}/missing-migrants/01-full.webp`}
        />

        <p className="drop-cap">
          Ethical considerations were central. Data collection processes, gaps,
          and biases were carefully analysed to avoid misrepresentation. The
          goal was to focus on human lives rather than mere numbers.
        </p>

        <p>
          Visual motifs and colour choices were designed to convey the gravity
          of loss while maintaining clarity. Age groups, gender, and geographic
          patterns are all highlighted to give viewers a deeper understanding of
          the global migration crisis.
        </p>

        <div className="full-bleed">
          <div className="max-w-[900px] mx-auto">
            <FiveImgsGallery images={images5} height={400} />
          </div>
        </div>

        <Spacing />

        <div className="mt-4 mx-auto">
          <Link href={projectInfo.link || ""} className={cn(buttonVariants())}>
            Read full article
          </Link>
        </div>

        <Spacing />

        <PrevAndNextProjectLinks currentProject={PROJECT} />
      </div>
    </>
  );
}
