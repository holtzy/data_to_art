"use client";

import { artistList } from "@/lib/artist-list";
import Link from "next/link";
import { ArtistSection } from "@/components/section/ArtistSection";

// TODO
// Here I want several options to visualize the artists:
// - a globe
// - a beeswarm that rates them according to their degree of data/art ratio

export default function Page() {
  return (
    <>
      <div className="relative mt-52 max-w-[900px] mx-auto">
        <div className="w-full flex flex-col items-center bg-gradient-to-t from-transparent to-white">
          <h1 className="text-9xl">Artists</h1>
          <p className="text-center max-w-96">
            <span>
              {`Data to art would not be possible without the  ${artistList.length} stunning artists who agreed to share their work with us. We're deeply grateful to them and hope you'll find the one that matches your taste and style here.`}
            </span>
            <Link href="/about">Suggest an artist</Link>
          </p>
        </div>
      </div>

      <ArtistSection />
    </>
  );
}
