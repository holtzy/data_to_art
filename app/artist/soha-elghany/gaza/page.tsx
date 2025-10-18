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

const PROJECT = "gaza";
const AUTHOR = "soha-elghany";

export default function Page() {
  const projectInfo = projectList.find((p) => p.folder === PROJECT);
  if (!projectInfo) return null;
  const artistInfo = artistList.find((a) => a.folder === projectInfo.artist);
  if (!artistInfo) return null;

  const imagesTop = ["01-full.webp", "02-full.webp", "03-full.webp"];

  const images5 = [
    `/project/${AUTHOR}/gaza/01-full.webp`,
    `/project/${AUTHOR}/gaza/02-full.webp`,
    `/project/${AUTHOR}/gaza/03-full.webp`,
    `/project/${AUTHOR}/gaza/04-full.webp`,
    `/project/${AUTHOR}/gaza/05-full.webp`,
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
          Covid. Climate. Cost of living. Ukraine. Gaza. The words “polycrisis”
          and “permacrisis” have entered the English language to describe
          multiple, ongoing crises. When numbers become unfathomable, how can
          data be used effectively yet ethically? Psychologist and data
          visualisation artist{" "}
          <Link href="/artist/soha-elghany">Soha Elghany</Link> shares her
          insights.
        </p>

        <p>
          In November 2023, Soha visualised the Palestinian death toll over a
          20-day period. Large numbers like 580,000 lack meaning, causing
          “compassion fade” or “psychic numbing” — our brains cannot empathise
          with statistics alone. Each number represents a life, and ethical
          visualisation must humanise the data.
        </p>

        <Parallax
          caption="Humanising numbers: each dot represents a life lost, giving meaning to data from Gaza."
          imageUrl={`/project/${AUTHOR}/gaza/02-full.webp`}
        />

        <p className="drop-cap">
          Soha’s solution was disaggregation: each dot represents an individual,
          with hover revealing name, age, and gender. The poppy motif, a
          national symbol, marks the data visually, emphasising children’s
          deaths and highlighting age brackets.
        </p>

        <p>
          Ethical considerations guided her design. Data collection, missing
          data, and biases were all examined to prevent misrepresentation. The
          aim was to focus on people, not just numbers, ensuring visualisations
          create empathy rather than desensitisation.
        </p>

        <div className="mt-12 mx-auto">
          <Link href={projectInfo.link || ""} className={cn(buttonVariants())}>
            Read full article
          </Link>
        </div>

        <ImgWithCaption
          caption="Humanising numbers: each dot represents a life lost, giving meaning to data from Gaza."
          img={`/project/${AUTHOR}/gaza/02-full.webp`}
        />

        <Spacing />

        <PrevAndNextProjectLinks currentProject={PROJECT} />
      </div>
    </>
  );
}
