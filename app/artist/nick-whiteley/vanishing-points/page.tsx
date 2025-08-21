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

const PROJECT = "vanishing-points";

export default function Page() {
  const projectInfo = projectList.find((p) => p.folder === PROJECT);
  if (!projectInfo) return null;
  const artistInfo = artistList.find((a) => a.folder === projectInfo.artist);
  if (!artistInfo) {
    return null;
  }

  // Update these image names to match your actual files if needed
  const imagesTop = [
    "01-full.webp",
    "02-full.webp",
    "04-full.webp",
    "09-full.webp",
  ];
  const images = [
    "/project/nick-whiteley/vanishing-points/01-full.webp",
    "/project/nick-whiteley/vanishing-points/02-full.webp",
    "/project/nick-whiteley/vanishing-points/03-full.webp",
    "/project/nick-whiteley/vanishing-points/04-full.webp",
    "/project/nick-whiteley/vanishing-points/05-full.webp",
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
          Vanishing Points is a data-driven art project by Nick Whiteley,
          inspired by the intersection of illustration and data, and motivated
          by a desire to raise awareness about endangered species and the
          degradation of natural habitats.
        </p>
        <p>
          Drawing from his background in brand and web design, Nick uses visual
          storytelling to create emotional impact and foster understanding of
          concrete environmental issues. The project was sparked by a
          documentary on mountain gorillas, leading to a unique blend of
          aesthetics, engagement, and advocacy through data visualization.
        </p>

        <Parallax
          text="Vanishing Points"
          imageUrl="/project/nick-whiteley/vanishing-points/01-full.webp"
        />

        <p className="drop-cap">
          Each piece in Vanishing Points combines digital illustration with data
          to highlight the fragility of species and ecosystems, inviting viewers
          to reflect on the social and environmental impact of human activity.
        </p>

        <div className="full-bleed ">
          <div className="max-w-[900px] mx-auto">
            <FiveImgsGallery images={images} height={400} />
          </div>
        </div>

        <Spacing />

        <div className="mt-4">
          <Link href={projectInfo.link || ""} className={cn(buttonVariants())}>
            Official project page
          </Link>
        </div>

        <Spacing />

        <PrevAndNextProjectLinks currentProject={PROJECT} />
      </div>
    </>
  );
}
