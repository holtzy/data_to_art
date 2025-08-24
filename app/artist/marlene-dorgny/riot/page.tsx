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

const PROJECT = "riot";

export default function Page() {
  const projectInfo = projectList.find((p) => p.folder === PROJECT);
  if (!projectInfo) return null;
  const artistInfo = artistList.find((a) => a.folder === projectInfo.artist);
  if (!artistInfo) {
    return null;
  }

  const images = [
    "01-medium.webp",
    "02-medium.webp",
    "03-medium.webp",
    "04-medium.webp",
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
        <iframe
          src="https://etudes.scan-datamining.com/embed/dataviz/157?display[header]=0&id=F015"
          width="100%"
          height="800"
          frameBorder="0"
        ></iframe>

        <p>Visuals at the end of the project:</p>

        <div className="full-bleed ">
          <div className="max-w-[900px] mx-auto">
            <FiveImgsGallery
              images={[
                "/project/marlene-dorgny/riot/01-full.webp",
                "/project/marlene-dorgny/riot/02-full.webp",
                "/project/marlene-dorgny/riot/03-full.webp",
                "/project/marlene-dorgny/riot/04-full.webp",
                "/project/marlene-dorgny/riot/05-full.webp",
              ]}
              height={400}
            />
          </div>
        </div>

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
