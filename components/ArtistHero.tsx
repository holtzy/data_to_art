"use client";

import { useState } from "react";
import { buttonVariants } from "./ui/button";
import { Artist } from "@/lib/artist-list";

type ArtistHeroProps = {
  artist: Artist;
};

const RADIUS = 30;

export default function ArtistHero({ artist }: ArtistHeroProps) {
  const { folder, name, homepageLink, linkedinLink, descriptionShort } = artist;

  const [spotlight, setSpotlight] = useState({ x: -100, y: -100 }); // start off-screen

  return (
    <section
      className="relative h-[80vh] w-full bg-cover bg-center"
      style={{
        backgroundImage: `url("/project/${folder}/cover.webp")`,
      }}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setSpotlight({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }}
      onMouseLeave={() => {
        setSpotlight({ x: -100, y: -100 });
      }}
    >
      {/* White overlay with a circular hole */}
      <div
        className="absolute inset-0 bg-white/80 pointer-events-none"
        style={{
          WebkitMaskImage: `radial-gradient(circle ${RADIUS}px at ${
            spotlight.x
          }px ${spotlight.y}px, transparent ${RADIUS}px, black ${
            RADIUS + 1
          }px)`,
          WebkitMaskRepeat: "no-repeat",
          maskImage: `radial-gradient(circle ${RADIUS}px at ${spotlight.x}px ${
            spotlight.y
          }px, transparent ${RADIUS}px, black ${RADIUS + 1}px)`,
          maskRepeat: "no-repeat",
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <img
          src={`/artist/${folder}.webp`}
          className="rounded-full w-40 h-40"
        />
        <h1>{name}</h1>

        <p className="text-center max-w-96">{descriptionShort}</p>

        <div className="mt-8 flex gap-2">
          {homepageLink && (
            <a
              className={buttonVariants({ variant: "outline" })}
              href={homepageLink}
            >
              Homepage
            </a>
          )}
          {linkedinLink && (
            <a
              className={buttonVariants({ variant: "outline" })}
              href={linkedinLink}
            >
              LinkedIn
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
