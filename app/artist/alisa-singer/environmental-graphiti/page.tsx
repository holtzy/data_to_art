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

const PROJECT = "environmental-graphiti";

export default function Page() {
  const projectInfo = projectList.find((p) => p.folder === PROJECT);
  if (!projectInfo) return null;
  const artistInfo = artistList.find((a) => a.folder === projectInfo.artist);
  if (!artistInfo) {
    return null;
  }

  const images = ["01.webp", "02.webp", "03.webp", "04.webp", "05.webp"];

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
          Environmental environmental-graphiti transforms ecological and climate
          data into environmental-graphiti-inspired visuals, revealing the
          subtle ways human activity shapes our planet.
        </p>
        <p>
          This project explores forests, carbon storage, and land-use patterns
          across Europe, presenting them through detailed, hand-drawn-like
          textures that invite both reflection and curiosity.
        </p>

        <Parallax
          text=""
          imageUrl="/project/alisa-singer/environmental-graphiti/05.webp"
        />

        <p className="drop-cap">
          Developed with collaboration from environmental researchers, the
          project uses high-resolution data on forest density, carbon emissions,
          and human land impact to build an accurate yet artistic representation
          of ecological pressure.
        </p>

        <p>
          By combining GIS layers with climate and land-use datasets, each
          visualization conveys patterns of resilience and degradation. The
          environmental-graphiti aesthetic emphasizes contrasts, making areas of
          environmental concern visually striking while keeping the overall
          composition elegant and contemplative.
        </p>

        <div className="full-bleed">
          <div className="max-w-[900px] mx-auto">
            <FiveImgsGallery
              images={[
                "/project/alisa-singer/environmental-graphiti/01.webp",
                "/project/alisa-singer/environmental-graphiti/02.webp",
                "/project/alisa-singer/environmental-graphiti/03.webp",
                "/project/alisa-singer/environmental-graphiti/04.webp",
                "/project/alisa-singer/environmental-graphiti/05.webp",
              ]}
              height={400}
            />
          </div>
        </div>

        <p>
          Blender was used to translate raw data into subtle textures, height,
          and shading variations, while Photoshop refined contrast and depth,
          giving the final images their environmental-graphiti-like quality.
        </p>

        <p>
          Environmental environmental-graphiti is not just a visualization
          project; it’s a call to consider our ecological footprint,
          highlighting fragile landscapes and the urgent need for sustainable
          stewardship.
        </p>

        <p>
          Explore the project and see how data, artistry, and environmental
          insight can merge to make invisible planetary dynamics visible.
        </p>

        <div className="mt-4">
          <Link
            href="https://environmentalenvironmental-graphiti.com"
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
