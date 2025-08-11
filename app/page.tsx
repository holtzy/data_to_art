import MasonryGallery, { GalleryItem } from "@/components/MasonryGallery";
import Link from "next/link";
import LineChart from "./linechart/page";
import fs from "fs";
import path from "path";
import { cn, shuffleArray } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

export default function Home() {
  return (
    <div>
      <section className="relative h-screen flex flex-col justify-center items-center">
        <div className="absolute inset-0 flex items-center">
          <LineChart />
        </div>

        <div className="relative bg-white/70 p-20 flex flex-col items-center">
          <h1>Data To Art</h1>
          <p className="text-center max-w-96">
            A curated collection of stunning works from the world’s most
            innovative data artists. Each piece transforms raw information into
            visual experiences that inspire, inform, and amaze.
          </p>
        </div>
      </section>

      <section>
        <div className="relative max-w-[900px] mx-auto  h-[900px] overflow-hidden">
          <MasonryGallery items={BEST_IMAGES} />
          <div className="absolute bottom-0 left-0 w-full h-96 bg-gradient-to-t from-white to-transparent flex justify-center items-end">
            <Link
              href={"/artworks"}
              className={cn(buttonVariants({ size: "lg" }), "mb-12")}
            >
              See all artworks
            </Link>
          </div>
        </div>
      </section>

      <div className="wrapper my-36 ">
        <p>HEllo</p>
        <Link href="/artists">Artists</Link>
        <Link href="/projects">Projects</Link>
      </div>
    </div>
  );
}

export const BEST_IMAGES = [
  {
    src: "/project/florent-lavergne/naturality/01-full.webp",
  },
  {
    src: "/project/florent-lavergne/naturality/02-full.webp",
  },
  {
    src: "/project/florent-lavergne/naturality/03-full.webp",
  },

  {
    src: "/project/florent-lavergne/naturality/06-full.webp",
  },
  {
    src: "/project/florent-lavergne/other/01-full.webp",
  },
  {
    src: "/project/florent-lavergne/other/02-full.webp",
  },
  {
    src: "/project/florent-lavergne/other/03-full.webp",
  },
  {
    src: "/project/florent-lavergne/other/04-full.webp",
  },
  {
    src: "/project/florent-lavergne/other/05-full.webp",
  },
  {
    src: "/project/florent-lavergne/other/06-full.webp",
  },
  {
    src: "/project/florent-lavergne/other/07-full.webp",
  },
  {
    src: "/project/florent-lavergne/wet-feet/01-full.webp",
  },
  {
    src: "/project/florent-lavergne/wet-feet/02-full.webp",
  },
  {
    src: "/project/florent-lavergne/wet-feet/03-full.webp",
  },
  {
    src: "/project/florent-lavergne/wet-feet/04-full.webp",
  },
  {
    src: "/project/florent-lavergne/wet-feet/05-full.webp",
  },
  {
    src: "/project/florent-lavergne/wet-feet/06-full.webp",
  },
  {
    src: "/project/jeremy-wanner/glove-rose/01-full.webp",
  },
  {
    src: "/project/jeremy-wanner/glove-rose/02-full.webp",
  },
  {
    src: "/project/jeremy-wanner/glove-rose/03-full.webp",
  },
  {
    src: "/project/jeremy-wanner/glove-rose/04-full.webp",
  },
  {
    src: "/project/laura-castro/dos-juegos/01-full.webp",
  },
  {
    src: "/project/laura-castro/dos-juegos/02-full.webp",
  },
  {
    src: "/project/laura-castro/dos-juegos/03-full.webp",
  },
  {
    src: "/project/laura-castro/dos-juegos/04-full.webp",
  },
  {
    src: "/project/laura-castro/dos-juegos/05-full.webp",
  },
  {
    src: "/project/laura-castro/dos-juegos/06-full.webp",
  },
  {
    src: "/project/laura-castro/fresquita-party/01-full.webp",
  },
  {
    src: "/project/laura-castro/fresquita-party/02-full.webp",
  },
  {
    src: "/project/laura-castro/fresquita-party/03-full.webp",
  },
  {
    src: "/project/laura-castro/fresquita-party/04-full.webp",
  },
  {
    src: "/project/laura-castro/fresquita-party/05-full.webp",
  },
  {
    src: "/project/nick-whiteley/vanishing-points/01-full.webp",
  },
  {
    src: "/project/nick-whiteley/vanishing-points/02-full.webp",
  },
  {
    src: "/project/soha-elghany/gaza/01-full.webp",
  },
  {
    src: "/project/soha-elghany/gaza/02-full.webp",
  },
];
