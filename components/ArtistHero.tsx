"use client";

import { useState } from "react";
import { buttonVariants } from "./ui/button";

type ArtistHeroProps = {
  folder: string;
  name: string;
  homepageLink: string;
  linkedinLink: string;
};

export default function ArtistHero({
  folder,
  name,
  homepageLink,
  linkedinLink,
}: ArtistHeroProps) {
  const [spotlight, setSpotlight] = useState({ x: 0, y: 0 });

  const RADIUS = 100; // circle radius in px

  return (
    <section
      className="relative h-[80vh] w-full bg-cover bg-center"
      style={{
        backgroundImage:
          "url('/project/florent-lavergne/naturality/01-full.webp')",
      }}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setSpotlight({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
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

      {/* Grey border for the hole */}
      <div
        className="absolute pointer-events-none rounded-full border border-gray-400"
        style={{
          width: `${RADIUS * 2}px`,
          height: `${RADIUS * 2}px`,
          left: `${spotlight.x - RADIUS}px`,
          top: `${spotlight.y - RADIUS}px`,
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <img
          src={`/artist/${folder}.webp`}
          className="rounded-full w-40 h-40"
        />
        <h1>{name}</h1>
        <p>A french visual practionner with a taste for this and that.</p>

        <div className="flex gap-2">
          {homepageLink && (
            <a className={buttonVariants()} href={homepageLink}>
              Homepage
            </a>
          )}
          {linkedinLink && (
            <a className={buttonVariants()} href={linkedinLink}>
              LinkedIn
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
