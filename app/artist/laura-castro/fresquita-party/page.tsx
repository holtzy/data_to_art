"use client";

import Parallax from "@/components/Parallax";
import { PrevAndNextProjectLinks } from "@/components/PrevAndNextProjectLinks";
import { ProjectHero } from "@/components/ProjectHero";
import { Spacing } from "@/components/Spacing";
import { buttonVariants } from "@/components/ui/button";
import { ImgWithCaption } from "@/components/viz/ImgWithCaption";
import { artistList } from "@/lib/artist-list";
import { projectList } from "@/lib/project-list";
import { cn } from "@/lib/utils";
import Link from "next/link";

const PROJECT = "fresquita-party";

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
          Who is actually behind the music we listen to every day. Fresquita
          Party starts from a simple Spotify playlist and turns it into a lens
          to examine representation, diversity, and visibility in the music
          industry.
        </p>

        <p>
          Created in 2018 by Laura Castro, the project analyzes a 60-song
          playlist and collects data about the artists who produced the tracks.
          Gender, age, nationality, musical genre, and career stage are all
          taken into account to reveal broader patterns that often remain
          invisible when listening casually.
        </p>

        <Parallax
          text=""
          imageUrl="/project/laura-castro/fresquita-party/01-full.webp"
        />

        <p className="drop-cap">
          Inspired by contemporary feminist movements and personal curiosity,
          the visualization asks direct questions. How many women are producing
          the music we listen to. Are they emerging artists or already at the
          peak of their careers. How diverse is a playlist that might feel
          eclectic on the surface.
        </p>

        <p>
          The answer comes in the form of a colorful and accessible visual
          system, designed to make comparisons intuitive while keeping the focus
          on the people behind the data. Rather than judging, the project
          encourages reflection on listening habits and the structures shaping
          cultural production.
        </p>

        <div className="full-bleed">
          <div className="max-w-[900px] mx-auto">
            <ImgWithCaption
              img="/project/laura-castro/fresquita-party/02-full.webp"
              caption={
                <span>
                  Fresquita Party, a data visualization project by Laura Castro
                </span>
              }
            />
          </div>
        </div>

        <p>
          By transforming a personal playlist into a data-driven narrative,
          Fresquita Party shows how everyday cultural objects can be used to
          question representation and bias. It is both an analytical exercise
          and an invitation to listen more consciously.
        </p>

        <div className="mt-4">
          <Link target="_blank" href={"ll"} className={cn(buttonVariants())}>
            Official project page
          </Link>
        </div>

        <Spacing />

        <PrevAndNextProjectLinks currentProject={PROJECT} />
      </div>
    </>
  );
}
