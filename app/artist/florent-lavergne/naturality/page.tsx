"use client";

import FiveImgsGallery from "@/components/FiveImgsGallery";
import Parallax from "@/components/Parallax";
import { PrevAndNextProjectLinks } from "@/components/PrevAndNextProjectLinks";
import { ProjectHero } from "@/components/ProjectHero";
import { Spacing } from "@/components/Spacing";
import { buttonVariants } from "@/components/ui/button";
import { artistList } from "@/lib/artist-list";
import { projectList } from "@/lib/project-list";
import { cn, formatDate } from "@/lib/utils";
import Link from "next/link";

const PROJECT = "naturality";

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
    "01-thumb.webp",
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
          How does nature survive alongside human civilization? It’s a question
          easier asked than answered. While we can see the visible scars of
          human activity — cities, roads, farms — the subtle ways ecosystems
          respond remain largely hidden.
        </p>
        <p>
          This project unveils a new perspective: the Gradient of Naturality
          across mainland France.
        </p>

        <Parallax
          text=""
          imageUrl="/project/florent-lavergne/naturality/04-full.webp"
        />

        <p className="drop-cap">
          Developed in collaboration with IUCN France, this map uses a grid of
          colored hexagons to represent the "naturality": a measure of how much
          ecosystems are exposed to human presence. From densely populated urban
          centers to remote mountainous forests, each hexagon tells a story of
          balance, tension, and survival.
        </p>

        <p>
          The data behind the map comes from a careful combination of sources:
          ecological statistics, population density, and terrain elevation.
          Using GIS software, these layers were combined into a grid of 8 km²
          hexagons, each analyzed to reflect average naturality and other
          environmental factors.
        </p>

        <div className="full-bleed ">
          <div className="max-w-[900px] mx-auto">
            <FiveImgsGallery
              images={[
                "/project/florent-lavergne/naturality/01-full.webp",
                "/project/florent-lavergne/naturality/02-full.webp",
                "/project/florent-lavergne/naturality/03-full.webp",
                "/project/florent-lavergne/naturality/04-full.webp",
                "/project/florent-lavergne/naturality/05-full.webp",
              ]}
              height={400}
            />
          </div>
        </div>

        <p>
          But the story doesn’t stop with numbers. Using Blender’s powerful 3D
          modeling tools, these data points were transformed into a vibrant
          visual narrative. Hexagons rise and fall in three-dimensional space,
          their heights and colors encoding elevation and naturality, while
          spheres represent population density. The result is a striking,
          dynamic cartographic visualization — a map that is not just seen but
          experienced.
        </p>

        <p>
          Finally, a touch of artistry in Photoshop enhanced the visual appeal,
          balancing color and texture to create a compelling, shareable image
          that brings data to life.
        </p>

        <p>
          This project isn’t just about maps; it’s about raising awareness. It
          challenges us to consider: what does it mean for nature to thrive in a
          human-dominated world? And how can we use data to protect these
          fragile ecosystems for future generations?
        </p>

        <p>
          Explore the Gradient of Naturality and discover how data visualization
          can reveal hidden truths about our planet — one hexagon at a time.
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
