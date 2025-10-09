"use client";

import Parallax from "@/components/Parallax";
import { Slider } from "@/components/ui/slider";
import { cn } from "@/lib/utils";
import { useState } from "react";

const SELECTED_IMAGES = [
  "/project/florent-lavergne/cover.webp",
  "/project/soha-elghany/cover.webp",
  "/project/laura-castro/dos-juegos/02-full.webp",
  "/project/nick-whiteley/cover.webp",
  "/project/alisa-singer/cover.webp",
];

export const ArtScienceCursorSection = () => {
  const [level, setLevel] = useState(1); // start in the middle

  return (
    <>
      <div className="flex gap-6 items-center justify-center mt-8">
        <span className="font-light">More Science</span>
        <Slider
          value={[level]}
          min={0}
          max={4}
          step={1}
          onValueChange={(value) => setLevel(value[0])}
          className={cn("w-[200px]")}
        />
        <span>More Art</span>
      </div>

      <Parallax text="" imageUrl={SELECTED_IMAGES[level]} />
    </>
  );
};
