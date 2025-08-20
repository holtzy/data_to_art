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

const PROJECT = "glove-rose";

export default function Page() {
  const projectInfo = projectList.find((p) => p.folder === PROJECT);
  if (!projectInfo) return null;
  const artistInfo = artistList.find((a) => a.folder === projectInfo.artist);
  if (!artistInfo) {
    return null;
  }

  // You may want to update these image names to match your actual files
  const imagesTop = ["03-full.webp", "02-full.webp", "04-full.webp"];

  const images5 = [
    "/project/jeremy-wanner/glove-rose/01-full.webp",
    "/project/jeremy-wanner/glove-rose/02-full.webp",
    "/project/jeremy-wanner/glove-rose/03-full.webp",
    "/project/jeremy-wanner/glove-rose/04-full.webp",
    "/project/jeremy-wanner/glove-rose/02-full.webp",
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
          The Glove Rose is a new species of Rose, created using Olympic boxing
          data from the PerfAnalytics research project. The data first is
          collected through a markerless technique using only pre-calibrated
          cameras around the boxing ring. Computer vision algorithms developed
          by the research team transform the video flux into useful insights for
          athletes and coaches.
        </p>
        <p>
          Together with Alexandre Schortgen, PhD candidate at INSEP and INRIA
          within the PerfAnalytics team, we later turned the data captured at
          the French Olympic Qualification Tournament into a new species of
          roses: <i>Rosa Pugilatu</i>. More commonly known as the Glove Rose, it
          blossoms following an Olympic flowering cycle.
        </p>

        <Parallax
          text="Glove Rose"
          imageUrl="/project/jeremy-wanner/glove-rose/01-full.webp"
        />

        <p className="drop-cap">
          Each rose represents different facets of a boxing match: if it is
          growing in the direction of the outcome of a fight, beware of its
          fierce thorns, which are all blows to the opponent wishing to pick it!
        </p>

        <div className="full-bleed ">
          <div className="max-w-[900px] mx-auto">
            <FiveImgsGallery images={images5} height={400} />
          </div>
        </div>

        <Spacing />

        <div className="mt-4 mx-auto">
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
