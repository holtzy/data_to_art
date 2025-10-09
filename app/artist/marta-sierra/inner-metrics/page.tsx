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

const PROJECT = "inner-metrics";

export default function Page() {
  const projectInfo = projectList.find((p) => p.folder === PROJECT);
  if (!projectInfo) return null;
  const artistInfo = artistList.find((a) => a.folder === projectInfo.artist);
  if (!artistInfo) {
    return null;
  }

  // You may want to update these image names to match your actual files
  const imagesTop = [
    "03-full.webp",
    "02-full.webp",
    "04-full.webp",
    "01-full.webp",
    "06-full.webp",
  ];

  const images5 = [
    "/project/marta-sierra/inner-metrics/01-full.webp",
    "/project/marta-sierra/inner-metrics/02-full.webp",
    "/project/marta-sierra/inner-metrics/03-full.webp",
    "/project/marta-sierra/inner-metrics/04-full.webp",
    "/project/marta-sierra/inner-metrics/05-full.webp",
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
          Inner Metrics is <Link href="/artist/marta-sierra">Marta Sierra</Link>
          ’s main ongoing project — a creative exploration where data becomes a
          language for self-reflection. What began as a simple journaling habit
          evolved into a practice of collecting personal data about moods,
          habits, and memories, then translating it into visual form.
        </p>
        <p>
          The project stands at the crossroads of design, emotion, and
          mindfulness, using data not as something to analyze but as something
          to feel.
        </p>

        <Parallax
          text=""
          imageUrl="/project/marta-sierra/inner-metrics/01-full.webp"
        />

        <p>
          Each visualization Marta creates is both an artwork and an
          introspective exercise. She experiments with organic shapes, textures,
          and colors to express emotions that words can’t always capture,
          creating pieces that are at once analytical and deeply human. The
          slow, reflective nature of the process allows her to explore how
          creativity and data can coexist harmoniously, revealing patterns of
          life through intuition as much as through measurement.
        </p>

        <div className="full-bleed ">
          <div className="max-w-[900px] mx-auto">
            <FiveImgsGallery images={images5} height={400} />
          </div>
        </div>

        <p className="drop-cap">
          Every piece in #journaldataviz exists in two forms — one handmade and
          one digital. The handmade version captures the warmth and imperfection
          of human touch, while the computer-made version brings precision and
          structure. Together, they mirror the project’s essence: a dialogue
          between emotion and logic, intuition and data, art and design.
        </p>

        <div className="full-bleed mt-8">
          <div className="grid grid-cols-2">
            <img
              src="/project/marta-sierra/inner-metrics/04-medium.webp"
              className="mx-auto"
            ></img>
            <img
              src="/project/marta-sierra/inner-metrics/07-medium.webp"
              className="mx-auto"
            ></img>
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
