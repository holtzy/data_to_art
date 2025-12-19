"use client";

import FiveImgsGallery from "@/components/FiveImgsGallery";
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

const PROJECT = "dos-juegos";

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
          Dos Juegos is an experimental project that explores how the analysis
          and visualization of sports trajectories can change the way team
          sports are understood and played.
        </p>

        <p>
          Created by Laura Castro in 2019, the project originates from her own
          experience as a basketball player. Faced with the challenge of
          explaining game dynamics to her teammates in a clear and engaging way,
          she set out to translate movement on the court into a visual language
          that could be easily shared and discussed.
        </p>

        <Parallax
          text=""
          imageUrl="/project/laura-castro/dos-juegos/01-full.webp"
        />

        <p className="drop-cap">
          At its core, Dos Juegos focuses on the display of sports trajectories.
          By tracking the movements of players during a women’s basketball
          match, the project highlights how individual skills and collective
          patterns emerge over time.
        </p>

        <p>
          The goal is not only to analyze performance after the game, but to
          support better decision-making during play. By making trajectories
          visible, the project invites teams to rethink positioning, movement,
          and strategy, ultimately aiming to improve overall performance.
        </p>

        <div className="full-bleed">
          <div className="max-w-[900px] mx-auto">
            <ImgWithCaption
              img="/project/laura-castro/dos-juegos/02-full.webp"
              caption={
                <span>
                  Dos Juegos, an experimental data visualization project by
                  Laura Castro
                </span>
              }
            />
          </div>
        </div>

        <p>
          The project is grounded in the broader context of recent technological
          advances in sports tracking, which now allow physical movements to be
          recorded with high accuracy in real time. Building on this context,
          Dos Juegos explores how raw tracking data could be transformed into
          intuitive visual tools for players and coaches.
        </p>

        <p>
          After a phase of research and experimentation, the concept
          materialized as a physical mockup made with needles and thread. This
          tactile representation anticipates the visual outcome of digital
          player tracking, emphasizing paths, overlaps, and densities of
          movement in a striking and memorable way.
        </p>

        <div className="mt-4">
          <Link
            target="_blank"
            href={"http://dosjuegos.es/index.html"}
            className={cn(buttonVariants())}
          >
            Official project page
          </Link>
        </div>

        <ImgWithCaption
          caption={
            <span>
              Dos Juegos at the exposition{" "}
              <a href="https://www.wakeupdataviz.com/trajectoires-sport-data">
                Trajectoire
              </a>
            </span>
          }
          img={`/project/laura-castro/dos-juegos/07.png`}
        />

        <Spacing />

        <PrevAndNextProjectLinks currentProject={PROJECT} />
      </div>
    </>
  );
}
