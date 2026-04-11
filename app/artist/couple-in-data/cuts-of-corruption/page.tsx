"use client";

import FiveImgsGallery from "@/components/FiveImgsGallery";
import { PrevAndNextProjectLinks } from "@/components/PrevAndNextProjectLinks";
import { ProjectHero } from "@/components/ProjectHero";
import { Spacing } from "@/components/Spacing";
import { buttonVariants } from "@/components/ui/button";
import { ImgWithCaption } from "@/components/viz/ImgWithCaption";
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
        <Spacing />
        <p className="drop-cap">
          Based on data collected between 2000 and 2020, the project takes the
          form of <em>Chorizos</em> — a series of visualizations referencing the
          Spanish slang for "thieves," commonly used to describe corrupt
          politicians.
        </p>

        <div>
          <ImgWithCaption
            img="/project/couple-in-data/cuts-of-corruption/03-full.webp"
            caption={<span>Chorizos is the slang for Thieves in spanish</span>}
          />
        </div>

        <p className="drop-cap">
          Through this play on language and material, corruption is translated
          into forms that can be counted, compared, and confronted.
        </p>
        <p>
          Each piece reveals different dimensions of the phenomenon — from the
          number of cases by political party, to their geographic distribution,
          typology of crimes, and estimated economic cost.
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

        <p>
          By bringing these figures into the physical world, Couple in Data
          transforms abstract data into something visible and graspable,
          inviting viewers to reflect on accountability, power, and the role of
          citizens in shaping political systems.
        </p>

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
