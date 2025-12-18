"use client";

import Parallax from "@/components/Parallax";
import { Slider } from "@/components/ui/slider";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useState } from "react";

const SELECTED_IMAGES = [
  "/project/florent-lavergne/cover.webp",
  "/project/soha-elghany/cover.webp",
  "/project/laura-castro/dos-juegos/02-full.webp",
  "/project/nick-whiteley/cover.webp",
  "/project/alisa-singer/cover.webp",
];

const p1 = (
  <span className="font-opensans">
    In his project{" "}
    <Link href="/artist/florent-lavergne/naturality">Naturality</Link>, Florent
    measures the extent of human impact on ecosystems.
  </span>
);

const p2 = (
  <span>
    The{" "}
    <Link href="/artist/soha-elghany/missing-migrants">Missing Migrants</Link>{" "}
    Project tracks people who died or went missing during migration toward
    international destinations. Each spiral represents a migration route, and
    each mark along it corresponds to an individual incident.
  </span>
);

const p3 = (
  <span>
    <Link href="/artist/laura-castro/dos-juegos">Dos Juegos</Link> is an
    experimental project that visualizes the trajectories of basketball players
    to explore team performance and decision-making in sports.
  </span>
);

const p4 = (
  <span>
    <Link href="/artist/nick-whiteley/vanishing-points">Vanishing point</Link>{" "}
    is a generative design project that visualizes endangered species
    populations, where each dot represents a living animal and the image
    gradually disappears as numbers decline.
  </span>
);

const p5 = (
  <span>
    <Link href="/artist/alisa-singer/environmental-graphiti">
      Environmental Graphiti
    </Link>{" "}
    transforms ecological data into striking visual narratives, merging art and
    sustainability to spark reflection on our natural world.
  </span>
);

const CAPTIONS = [p1, p2, p3, p4, p5];

export const ArtScienceCursorSection = () => {
  const [level, setLevel] = useState(1); // start in the middle

  return (
    <>
      <div className="flex gap-6 items-center justify-center mt-8">
        <span className="font-light font-opensauce">More Science</span>
        <Slider
          value={[level]}
          min={0}
          max={4}
          step={1}
          onValueChange={(value) => setLevel(value[0])}
          className={cn("w-[200px]")}
        />
        <span className="font-light  font-opensauce">More Art</span>
      </div>

      <Parallax caption={CAPTIONS[level]} imageUrl={SELECTED_IMAGES[level]} />
    </>
  );
};
