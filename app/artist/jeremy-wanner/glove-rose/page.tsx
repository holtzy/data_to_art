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
          data from the{" "}
          <a
            href="https://labos-recherche.insep.fr/fr/perfanalytics"
            target="_blank"
          >
            PerfAnalytics
          </a>{" "}
          research project. The data is collected through a markerless technique
          using only pre-calibrated cameras around the boxing ring. Computer
          vision algorithms developed by the research team transform the video
          flux into useful insights for athletes and coaches.
        </p>
        <p>
          Together with{" "}
          <a
            href="https://labos-recherche.insep.fr/fr/annuaire-des-personnes/schortgen-alexandre"
            target="_blank"
          >
            Alexandre Schortgen
          </a>
          , PhD candidate at INSEP and INRIA within the PerfAnalytics team, the
          data captured at the French Olympic Qualification Tournament were
          later transformed into a new species of roses: <i>Rosa Pugilatu</i>.
          More commonly known as the Glove Rose, it blossoms following an
          Olympic flowering cycle.
        </p>

        <ImgWithCaption
          caption="Glove Rose, a project by Jeremy Wanner"
          img="/project/jeremy-wanner/glove-rose/01-full.webp"
        />

        <p className="drop-cap">
          Each rose represents different facets of a boxing match: if it is
          growing in the direction of the outcome of a fight, beware of its
          fierce thorns, which are all blows to the opponent wishing to pick it!
        </p>

        <div className="full-bleed">
          <div className="max-w-[800px] mx-auto">
            <ImgWithCaption
              caption="The most left rose serves as a legend to understand how the data is actually transform in a flower."
              img="/project/jeremy-wanner/glove-rose/04-full.webp"
            />
          </div>
        </div>

        <Spacing />

        <div className="wrapper">
          <h2 className="mb-4">Exhibition</h2>
          <p>
            Jeremy's work was exhibited at the{" "}
            <a
              href="https://www.wakeupdataviz.com/trajectoires-sport-data"
              target="_blank"
            >
              Trajectoires
            </a>{" "}
            event in France, and while no future exhibitions are scheduled at
            the moment, his projects continue to live online.
          </p>
        </div>
        <div className="full-bleed mt-8 bg-red-50">
          <div className="px-2 flex gap-2">
            <img
              src="/project/jeremy-wanner/glove-rose/05.JPG"
              className="w-1/3 h-[300px] object-cover"
            />
            <img
              src="/project/jeremy-wanner/glove-rose/06.JPG"
              className="w-1/3 h-[300px] object-cover"
            />
            <img
              src="/project/jeremy-wanner/glove-rose/07.JPG"
              className="w-1/3 h-[300px] object-cover"
            />
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
