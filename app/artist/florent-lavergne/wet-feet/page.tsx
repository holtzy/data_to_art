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

const PROJECT = "wet-feet";

export default function Page() {
  const projectInfo = projectList.find((p) => p.folder === PROJECT);
  if (!projectInfo) return null;
  const artistInfo = artistList.find((a) => a.folder === projectInfo.artist);
  if (!artistInfo) return null;

  const images = [
    "01-thumb.webp",
    "02-thumb.webp",
    "03-thumb.webp",
    "04-thumb.webp",
    "05-thumb.webp",
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
          More greenhouse gases in the atmosphere mean higher global
          temperatures. As a consequence, frozen surfaces melt and bodies of
          water expand, threatening the lives of coastal inhabitants.
        </p>
        <p>
          Based on a study from Kulp & Strauss (2019), this visualization shows
          the number of people at coastal flood risk per country today (plain
          color), in 2100 under a moderate greenhouse gas emissions scenario
          (dots), and in 2100 under a high emissions scenario with Antarctic ice
          melt (white).
        </p>

        <Parallax
          text=""
          imageUrl="/project/florent-lavergne/wet-feet/04-full.webp"
        />

        <p className="drop-cap">
          The data, covering both present-day and future scenarios, highlights
          how climate change could drastically alter the lives of millions
          living near the sea. Countries with large coastal populations face the
          most severe risks, making the challenge both environmental and
          humanitarian.
        </p>

        <p>
          The project began with raw datasets, which I processed using R to
          generate the initial graphs. These were then refined in Illustrator to
          ensure clarity, hierarchy, and visual appeal.
        </p>

        <div className="full-bleed">
          <div className="max-w-[900px] mx-auto">
            <FiveImgsGallery
              images={[
                "/project/florent-lavergne/wet-feet/01-full.webp",
                "/project/florent-lavergne/wet-feet/02-full.webp",
                "/project/florent-lavergne/wet-feet/03-full.webp",
                "/project/florent-lavergne/wet-feet/04-full.webp",
                "/project/florent-lavergne/wet-feet/05-full.webp",
              ]}
              height={400}
            />
          </div>
        </div>

        <p>
          Each visual element is designed to be easily interpretable while
          retaining the scientific accuracy of the source material. The
          combination of data analysis, thoughtful layout, and clear
          storytelling makes this project a tool for raising awareness about the
          tangible impacts of climate change.
        </p>

        <div className="mt-4">
          <Link href={""} className={cn(buttonVariants())}>
            Official project page
          </Link>
        </div>

        <Spacing />

        <PrevAndNextProjectLinks currentProject={PROJECT} />
      </div>
    </>
  );
}
