"use client";

import FiveImgsGallery from "@/components/FiveImgsGallery";
import { PrevAndNextProjectLinks } from "@/components/PrevAndNextProjectLinks";
import { ProjectHero } from "@/components/ProjectHero";
import { Spacing } from "@/components/Spacing";
import { buttonVariants } from "@/components/ui/button";
import { artistList } from "@/lib/artist-list";
import { projectList } from "@/lib/project-list";
import { cn } from "@/lib/utils";
import Link from "next/link";

const PROJECT = "cuts-of-corruption";

export default function Page() {
  const projectInfo = projectList.find((p) => p.folder === PROJECT);
  if (!projectInfo) return null;
  const artistInfo = artistList.find((a) => a.folder === projectInfo.artist);
  if (!artistInfo) return null;

  const images = [
    "01-full.webp",
    "02-full.webp",
    "03-full.webp",
    "04-full.webp",
    "05-full.webp",
  ];

  return (
    <>
      <ProjectHero
        artist={artistInfo}
        project={projectInfo}
        images={images}
        marginTopRightColumn={82}
      />

      <div className="wrapper">
        <p className="drop-cap">
          <em>Cuts of Corruption</em> is a data visualization project by Couple
          in Data that explores corruption through physical objects and tangible
          data representations.
        </p>

        <div className="full-bleed">
          <div className="max-w-[900px] mx-auto">
            <FiveImgsGallery
              images={[
                "/project/couple-in-data/cuts-of-corruption/01-full.webp",
                "/project/couple-in-data/cuts-of-corruption/02-full.webp",
                "/project/couple-in-data/cuts-of-corruption/03-full.webp",
                "/project/couple-in-data/cuts-of-corruption/04-full.webp",
                "/project/couple-in-data/cuts-of-corruption/05-full.webp",
              ]}
              height={400}
            />
          </div>
        </div>

        <div className="mt-4">
          <Link
            href={projectInfo.link}
            target="_blank"
            className={cn(buttonVariants())}
          >
            Official project page
          </Link>
        </div>

        <Spacing />

        <PrevAndNextProjectLinks currentProject={PROJECT} />
      </div>
    </>
  );
}
