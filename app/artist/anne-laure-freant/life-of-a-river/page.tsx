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

const PROJECT = "life-of-a-river";

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
          <em>The Life of a River</em> is a datasculpture that visualizes the
          monthly water heights of the Loire River in Orléans from 2000 to 2022,
          transforming hydrological data into a tangible, layered wooden form.
        </p>
        <p className="mb-8">
          Each disc in the sculpture represents a year, with stacked shapes
          reflecting seasonal fluctuations, highlighting the river’s extreme
          variations between winter floods and summer lows. Instead of mapping
          geography from above, the work focuses on the rhythm and dynamics of
          the river itself.
        </p>

        <Parallax
          text=""
          imageUrl="/project/anne-laure-freant/life-of-a-river/01-full.webp"
        />

        <p className="drop-cap">
          Developed as a prototype using CNC-milled wood, this datasculpture
          addresses both aesthetic and practical challenges of representing
          continuous environmental data physically. It captures the complexity
          of the Loire’s flow without relying on traditional maps, revealing
          patterns and anomalies across two decades.
        </p>

        <p>
          The project emerged from collaborations and discussions with
          geologists, who highlighted the difficulty of visualizing regular
          river flows beyond exceptional events. Anne-Laure’s approach gives
          form to subtle variations often overlooked in traditional hydrological
          representations.
        </p>

        <div className="full-bleed">
          <div className="max-w-[900px] mx-auto">
            <FiveImgsGallery
              images={[
                "/project/anne-laure-freant/life-of-a-river/01-full.webp",
                "/project/anne-laure-freant/life-of-a-river/02-full.webp",
                "/project/anne-laure-freant/life-of-a-river/03-full.webp",
                "/project/anne-laure-freant/life-of-a-river/04-full.webp",
                "/project/anne-laure-freant/life-of-a-river/05-full.webp",
              ]}
              height={400}
            />
          </div>
        </div>

        <p>
          While the sculpture remains a prototype, it illustrates the potential
          of datasculpture to explore environmental and temporal patterns in
          physical form. Future iterations may experiment with new materials and
          forms to further capture the river’s behavior.
        </p>

        <p>
          Explore the project and see how water data can be transformed into a
          tactile and visual experience that conveys both scale and nuance of
          river flows over time.
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
