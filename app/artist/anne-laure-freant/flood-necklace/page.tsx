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

const PROJECT = "flood-necklace";

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
          <em>Flood Necklace</em> is a ceramic datasculpture representing the
          water heights of the Loire River in Orléans from 1800 to 2003, with
          each sphere corresponding to a recorded flood.
        </p>
        <p className="mb-8">
          The spheres are made from local Loire Valley clay ("Terre du Fuilet")
          and commercial white stoneware, with the largest floods of 1856 and
          1866 highlighted in white. These significant events influenced
          national land management policies, and subsequent flood heights and
          frequencies decreased as containment infrastructure improved.
        </p>

        <ImgWithCaption
          caption={
            <span>
              <Link href="/artist/anne-laure-freant/flood-necklace">
                Flood Necklace
              </Link>{" "}
              is a ceramic datasculpture made from Loire Valley clay, where each
              sphere represents a recorded flood of the Loire River
            </span>
          }
          img="/project/anne-laure-freant/flood-necklace/08-full.webp"
        />

        <p className="drop-cap">
          Arranged chronologically into a necklace form, the sculpture embeds
          historical data into an object that is both tactile and visually
          expressive. The progression of sphere sizes reveals patterns of flood
          frequency and intensity over more than two centuries, making abstract
          data tangible.
        </p>

        <p>
          By focusing on temporal data rather than traditional map-based
          representations, the work transforms environmental history into a
          physical narrative, inviting viewers to explore the dynamics of
          climate, infrastructure, and human adaptation over time.
        </p>

        <div className="full-bleed">
          <div className="max-w-[900px] mx-auto">
            <FiveImgsGallery
              images={[
                "/project/anne-laure-freant/flood-necklace/01-full.webp",
                "/project/anne-laure-freant/flood-necklace/02-full.webp",
                "/project/anne-laure-freant/flood-necklace/03-full.webp",
                "/project/anne-laure-freant/flood-necklace/04-full.webp",
                "/project/anne-laure-freant/flood-necklace/05-full.webp",
              ]}
              height={400}
            />
          </div>
        </div>

        <p>
          This datasculpture exemplifies Anne-Laure’s exploration of embedding
          data into physical objects, turning historical environmental records
          into material forms that convey scale, pattern, and historical
          context.
        </p>

        <div className="mt-8">
          <Link
            href="https://anne-laure-freant.gitbook.io/art-gallery/datasculpture"
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
