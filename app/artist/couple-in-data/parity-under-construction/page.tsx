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

const PROJECT = "parity-under-construction";

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
          <em>Parity Under Construction</em> redesigns the iconic trophy for
          the Ibero-American Advertising Festival El Sol, removing 28% of its
          form to reflect the gap that still separates women from equality in
          creative direction, where they represent only 28%.
        </p>
        <p>
          Produced with 3D printing and finished in white to symbolize an
          unfinished process, the piece is both a critique and a call to action:
          highlighting the work still needed to reach gender parity in the
          advertising industry.
        </p>

        <ImgWithCaption
          img="/project/couple-in-data/parity-under-construction/02-full.webp"
          caption={
            <span>
              For the first time, this redesigned symbol was awarded at the
              ceremony instead of the original trophy.
            </span>
          }
        />

        <p>
          By physically carving inequality into the form of an award, the
          project makes the abstract visible. The missing 28% is not just a
          statistic — it is a void you can hold, a gap made tangible in the
          hands of winners who are asked to confront it.
        </p>

        <div className="full-bleed">
          <div className="max-w-[900px] mx-auto">
            <FiveImgsGallery
              images={[
                "/project/couple-in-data/parity-under-construction/01-full.webp",
                "/project/couple-in-data/parity-under-construction/02-full.webp",
                "/project/couple-in-data/parity-under-construction/03-full.webp",
                "/project/couple-in-data/parity-under-construction/04-full.webp",
                "/project/couple-in-data/parity-under-construction/05-full.webp",
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
