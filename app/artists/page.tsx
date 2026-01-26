"use client";

import { artistList } from "@/lib/artist-list";
import Link from "next/link";
import { ArtistSection } from "../(home)/ArtistSection";
import { Spacing } from "@/components/Spacing";
import { Contact } from "@/components/Contact";

export default function Page() {
  return (
    <>
      <div className="relative mt-52 max-w-[900px] mx-auto">
        <div className="w-full flex flex-col items-center bg-gradient-to-t from-transparent to-white">
          <h1 className="text-9xl">Meet the Artists</h1>
          <p className="text-center max-w-96">
            <Link href="/">Data to art</Link> would not be possible without the
            <span>{` ${artistList.length} `}</span> stunning artists who agreed
            to share their work with us. We're deeply grateful to them and hope
            you'll find the one that matches your taste and style here.
          </p>
        </div>
      </div>

      <Spacing />

      <ArtistSection />

      <Spacing />

      <div className="wrapper">
        <p>
          Data To Art is a living project. Our goal is to feature one new artist
          every week. If you would like your work to be included, or if you know
          someone whose work deserves to be showcased here, feel free to reach
          out to us.
        </p>
      </div>

      <Spacing />

      <Contact />
    </>
  );
}
