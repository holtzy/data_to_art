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

const PROJECT = "human-rights-fans";

export default function Page() {
  const projectInfo = projectList.find((p) => p.folder === PROJECT);
  if (!projectInfo) return null;
  const artistInfo = artistList.find((a) => a.folder === projectInfo.artist);
  if (!artistInfo) return null;

  const images = [
    "06-full.webp",
    "07-full.webp",
    "05-full.webp",
    "08-full.webp",
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
          <em>Human Rights Fans</em> denounces the thousands of migrant workers
          who died building the stadiums for the Qatar World Cup. A scarf was
          created to visualize each death, turning data into a symbol that
          reminds us who we should truly support: human rights.
        </p>
        <p>
          The project tells the story of absent fans, represented as if they
          were seated in the stands of a football stadium. Each mark on the
          scarf stands for a life lost — workers who built the very venues they
          would never attend.
        </p>

        <ImgWithCaption
          img="/project/couple-in-data/human-rights-fans/02-full.webp"
          imgClassName="max-h-[500px] object-cover"
          caption={
            <span>
              The scarf transforms data about migrant worker deaths into a
              wearable symbol of remembrance.
            </span>
          }
        />

        <p>
          By embedding data into an everyday football object, Couple in Data
          shifts the conversation from abstract statistics to something
          tangible, wearable, and impossible to ignore — anchoring the human
          cost of the World Cup in the culture of sport itself.
        </p>

        <ImgWithCaption
          img="/project/couple-in-data/human-rights-fans/01-full.webp"
          caption={
            <span>
              <Link href="/artist/couple-in-data/human-rights-fans">
                Human Rights Fans
              </Link>{" "}
              — a scarf visualizing the thousands of migrant workers who died
              building the stadiums for the Qatar World Cup.
            </span>
          }
        />

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
