"use client";

import { EmailButton } from "@/components/EmailButton";
import { DataArtEventTable } from "./DataArtEventTable";
import { Contact } from "@/components/Contact";
import { Spacing } from "@/components/Spacing";
import { Button, buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export default function ExibPage() {
  return (
    <div>
      <div className="mt-44 flex flex-col items-center bg-gradient-to-t from-transparent to-white">
        <h1 className="text-9xl">Data Art Exhibitions</h1>

        <p className="text-center max-w-96">
          Across museums, festivals, galleries, and public spaces, data is
          increasingly becoming a material for artistic, narrative, and spatial
          exploration.
        </p>
        <div className="mt-10 flex gap-2">
          <Link
            href="#table"
            className={buttonVariants({ variant: "outline" })}
          >
            See events
          </Link>
          <Button>Add an event</Button>
        </div>
      </div>

      <Spacing />

      <div className="wrapper">
        <p>
          {" "}
          This page brings together a curated selection of past, ongoing, and
          upcoming exhibitions where data visualization plays a central role —
          whether as the core of the exhibition or as a key component within a
          broader curatorial project.
        </p>
      </div>

      <div className="full-bleed my-12 grid gap-2">
        <div className="grid grid-cols-2 gap-2">
          <img
            src="/asset/mockup1.webp"
            className="h-[400px] w-full object-cover"
            alt="Mockup 1"
          />
          <img
            src="/asset/mockup2.webp"
            className="h-[400px] w-full object-cover"
            alt="Mockup 2"
          />
        </div>
      </div>

      <div className="wrapper">
        <p>
          From fully data-driven installations to exhibitions that integrate
          maps, infographics, and visual narratives, this listing reflects the
          growing presence of data as a cultural and expressive medium.
        </p>
      </div>

      <Spacing />

      <div id="table" className="max-w-[1100px] mx-auto scroll-mt-48">
        <DataArtEventTable />
      </div>

      <Spacing />

      <div className="wrapper">
        <p>
          If you know of an event that is not listed here, feel free to reach
          out so we can help make this list as complete as possible. And if you
          would like support organizing an exhibition, send us a message too. We
          would be happy to help.
        </p>
        <div className="mt-4">
          <EmailButton
            name="Contact us"
            variant="default"
            link="wakeupdataviz@gmail.com"
          />
        </div>
      </div>

      <Spacing />

      <Contact />
    </div>
  );
}
