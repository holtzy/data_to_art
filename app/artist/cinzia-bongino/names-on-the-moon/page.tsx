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

const PROJECT = "names-on-the-moon";

export default function Page() {
  const projectInfo = projectList.find((p) => p.folder === PROJECT);
  if (!projectInfo) return null;
  const artistInfo = artistList.find((a) => a.folder === projectInfo.artist);
  if (!artistInfo) {
    return null;
  }

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
          How do we visualize the Moon’s surface beyond what we see in photos?
          Despite centuries of observation, many subtle features remain elusive
          to the naked eye.
        </p>
        <p>
          This project offers a new lens: a detailed visualization of the Moon’s
          surface topography.
        </p>

        <Parallax
          text=""
          imageUrl="/project/cinzia-bongino/names-on-the-moon/04-full.webp"
        />

        <p className="drop-cap">
          Developed with lunar scientists and space enthusiasts, this project
          transforms elevation and crater data into an interactive 3D map of the
          Moon. Each feature is represented by color, height, and shading,
          revealing subtle geological structures invisible in traditional
          imagery.
        </p>

        <p>
          The underlying data combines satellite measurements, laser altimetry,
          and high-resolution photographic surveys. Using advanced GIS and 3D
          modeling tools, the Moon’s surface was divided into a grid, each cell
          representing elevation, crater depth, and regolith composition.
        </p>

        <div className="full-bleed ">
          <div className="max-w-[900px] mx-auto">
            <FiveImgsGallery
              images={[
                "/project/cinzia-bongino/names-on-the-moon/01-full.webp",
                "/project/cinzia-bongino/names-on-the-moon/02-full.webp",
                "/project/cinzia-bongino/names-on-the-moon/03-full.webp",
                "/project/cinzia-bongino/names-on-the-moon/04-full.webp",
                "/project/cinzia-bongino/names-on-the-moon/05-full.webp",
              ]}
              height={400}
            />
          </div>
        </div>

        <p>
          Beyond data, 3D modeling in Blender brought the Moon to life.
          Elevation and surface textures were transformed into a visually
          immersive experience, while spheres highlight key craters and
          topographic anomalies.
        </p>

        <p>
          A final layer of artistry refined colors and contrasts, creating a
          dramatic yet scientifically faithful representation suitable for both
          exploration and presentation.
        </p>

        <p>
          This project is more than a map — it’s a journey across lunar
          landscapes, helping us understand the Moon’s terrain and fostering
          appreciation for celestial exploration.
        </p>

        <p>
          Explore the Moon project and witness how data visualization can reveal
          hidden details of our nearest celestial neighbor — crater by crater.
        </p>

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
