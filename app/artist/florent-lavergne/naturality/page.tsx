"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { artistList } from "@/lib/artist-list";
import { projectList } from "@/lib/project-list";
import { formatDate } from "@/lib/utils";
import Link from "next/link";

const PROJECT = "naturality";

export default function Page() {
  const projectInfo = projectList.find((p) => p.folder === PROJECT);

  if (!projectInfo) return null;

  const { name, artist, date, descriptionShort } = projectInfo;

  const artistInfo = artistList.find((a) => a.folder === artist);

  const images = [
    "01-thumb.webp",
    "02-thumb.webp",
    "03-thumb.webp",
    "04-thumb.webp",
    "05-thumb.webp",
  ];

  return (
    <>
      <section className="min-h-screen flex flex-col lg:flex-row gap-8 p-8 max-w-[900px] mx-auto">
        {/* Left column */}
        <div className="lg:w-1/2 flex flex-col justify-center items-end">
          <h1 className="text-4xl font-bold mb-4">{name}</h1>
          <p className="text-md text-gray-600 mb-6 text-right">
            {descriptionShort}
          </p>

          <div className="flex gap-2">
            <span>A project by </span>
            <Link href="" className="underline">
              {artistInfo?.name}
            </Link>
            <Avatar>
              <AvatarImage src={`/artist/${artist}.webp`} />
              <AvatarFallback>{artistInfo?.name}</AvatarFallback>
            </Avatar>
          </div>
          <p className="mb-6">
            Published on <span>{formatDate(date)}</span>
          </p>
        </div>

        {/* Right column - Masonry style */}
        <div className="lg:w-1/2 grid grid-cols-2 gap-4">
          <div className="space-y-4 pt-8">
            {images
              .filter((_, i) => i % 2 === 0)
              .map((img, i) => (
                <img
                  key={i}
                  src={`/project/${artist}/${PROJECT}/${img}`}
                  alt=""
                  className="w-full object-cover rounded-lg"
                />
              ))}
          </div>
          <div className="space-y-4">
            {images
              .filter((_, i) => i % 2 !== 0)
              .map((img, i) => (
                <img
                  key={i}
                  src={`/project/${artist}/${PROJECT}/${img}`}
                  alt=""
                  className="w-full object-cover rounded-lg"
                />
              ))}
          </div>
        </div>
      </section>

      <div className="wrapper">
        <p>
          How does nature survive alongside human civilization? It’s a question
          easier asked than answered. While we can see the visible scars of
          human activity — cities, roads, farms — the subtle ways ecosystems
          respond remain largely hidden. This project unveils a new perspective:
          the Gradient of Naturality across mainland France.
        </p>

        <p>
          Developed in collaboration with IUCN France, this map uses a grid of
          colored hexagons to represent the "naturality" — a measure of how much
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
      </div>
    </>
  );
}
