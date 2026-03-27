"use client";

import { PrevAndNextProjectLinks } from "@/components/PrevAndNextProjectLinks";
import { ProjectHero } from "@/components/ProjectHero";
import { Spacing } from "@/components/Spacing";
import { buttonVariants } from "@/components/ui/button";
import { ImgWithCaption } from "@/components/viz/ImgWithCaption";
import { artistList } from "@/lib/artist-list";
import { projectList } from "@/lib/project-list";
import { cn } from "@/lib/utils";
import Link from "next/link";

const PROJECT = "loving-routine";

export default function Page() {
  const projectInfo = projectList.find((p) => p.folder === PROJECT);
  if (!projectInfo) return null;
  const artistInfo = artistList.find((a) => a.folder === projectInfo.artist);
  if (!artistInfo) return null;

  const images = [
    "04-full.webp",
    "05-full.webp",
    "06-full.webp",
    "07-full.webp",
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
          <em>Loving Routine</em> reimagines everyday couple life during
          Covid-19 through tangible data visualizations. Turning private
          routines into physical charts and objects, the project makes visible
          how data is inseparable from human experience.
        </p>
        <p>
          The work questions the paradox of exposing intimate details in an age
          preoccupied with data privacy. By transforming the mundane rhythms of
          a shared lockdown — sleeping, cooking, talking, working — into
          material forms, Couple in Data reveals the poetry hidden in the
          everyday.
        </p>

        <ImgWithCaption
          img="/project/couple-in-data/loving-routine/02-full.webp"
          imgClassName="max-h-[500px] object-cover"
          caption={
            <span>
              Private routines transformed into physical charts and tangible
              data objects.
            </span>
          }
        />

        <p>
          Each visualization is a small act of intimacy made public — a reminder
          that behind every data point there is a lived moment, a feeling, a
          person. The project blurs the line between personal diary and data
          dashboard, inviting viewers to reflect on their own routines and the
          traces they leave behind.
        </p>

        <ImgWithCaption
          img="/project/couple-in-data/loving-routine/09-full.webp"
          caption={
            <span>
              Each visualization is a small act of intimacy made public.
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
