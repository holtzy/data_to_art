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
          This project transforms lunar surface features into a detailed
          visualization, categorizing them by the names assigned to craters,
          mountains, and other formations. Each feature is mapped and
          represented visually, revealing patterns in how we have named and
          documented our closest celestial neighbor.
        </p>

        <p>
          The underlying data comes from publicly available sources provided by
          the International Astronomical Union (IAU) and the United States
          Geological Survey (USGS), including satellite imagery, elevation data,
          and feature catalogs that are freely accessible to everyone.
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
          Using QGIS, Cinzia mapped the lunar features onto raster images of the
          Moon, creating detailed visualizations that highlight the distribution
          and categorization of named sites across the lunar surface.
        </p>

        <p>
          This project is more than a map — it's a journey across lunar
          landscapes, helping us understand the Moon's terrain and fostering
          appreciation for celestial exploration.
        </p>

        <div className="mt-4">
          <Link
            href={
              "https://www.canva.com/design/DAFXReSYkC8/QvtBAh393nWt2aZ0Drg7Rg/edit"
            }
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
