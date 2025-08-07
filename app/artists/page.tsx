"use client";

import { artistList } from "@/lib/artist-list";
import Link from "next/link";
import { ArtistGlobe } from "./ArtistGlobe";

// TODO
// Here I want several options to visualize the artists:
// - a globe
// - a beeswarm that rates them according to their degree of data/art ratio

export default function Page() {
  return (
    <>
      <div className="flex flex-wrap gap-2">
        {artistList.map((a, i) => {
          return (
            <Link
              key={i}
              href={"/artist/" + a.folder}
              className="border border-slate-100 p-8 rounded-md hover:bg-slate-50 flex flex-col justify-center items-center gap-4"
            >
              <img
                src={"/artist/" + a.folder + ".webp"}
                className="rounded-full w-40 h-40"
              />
              <span>{a.name}</span>
            </Link>
          );
        })}
      </div>
      <div className="bg-white">
        <ArtistGlobe />
      </div>
    </>
  );
}
