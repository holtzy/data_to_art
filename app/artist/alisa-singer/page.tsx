import { artistList } from "@/lib/artist-list";
import { projectList } from "@/lib/project-list";
import Link from "next/link";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ArtistHero from "@/components/ArtistHero";
import Parallax from "@/components/Parallax";
import { Spacing } from "@/components/Spacing";
import { Contact } from "@/components/Contact";
import { ArtistProjectsSection } from "@/components/ArtistProjectsSection";

const AUTHOR = "alisa-singer";

export default function Page() {
  const infos = artistList.find((a) => a.folder === AUTHOR);

  if (!infos) {
    return null;
  }

  return (
    <>
      <ArtistHero artist={infos} />

      <Spacing />

      <div className="relative wrapper max-w-6xl mx-auto px-4">
        <div className="mb-12">
          <p className="drop-cap">
            Alisa Singer is a digital artist whose work transforms climate
            science, social issues, and personal experiences into vibrant,
            data-driven visual art. Her practice combines analytical research
            with creative storytelling to create compelling, visually engaging
            narratives.
          </p>
        </div>

        <Parallax
          text=""
          imageUrl="/project/alisa-singer/environmental-graphiti/04.webp"
        />

        <p className="first-letter:float-left first-letter:text-6xl first-letter:leading-none first-letter:mr-2 first-letter:font-bold">
          From translating complex climate data into striking visual statements
          to exploring social themes through digital painting, Alisa’s work is
          defined by clarity, vibrancy, and thought-provoking aesthetics.
        </p>
        <p className="mt-4">
          She collaborates with cultural institutions, environmental
          organizations, and tech platforms, turning information into art that
          resonates with diverse audiences. Each project is both an artistic
          expression and a tool for awareness and reflection.
        </p>

        <div className="full-bleed my-12">
          <div className="">
            <img
              src="/project/alisa-singer/environmental-graphiti/06.webp"
              className="w-full"
            />
            <div className="flex justify-end">
              <p className="text-slate-500 text-sm text-right max-w-[250px] mt-4 !leading-snug">
                Walking into the moon by Alisa Singer shows the evolution of the
                number of kangarro. Read more about the environmental graphiti
                project it's part of.
              </p>
            </div>
          </div>
        </div>

        <p className="mt-4">
          Her series, including <em>Environmental Graphiti</em> and{" "}
          <em>What's Your Mission?</em>, have been exhibited internationally and
          continue to push the boundaries of data-driven contemporary art.
        </p>

        <h2 className="mb-6">Gallery</h2>
        <div className="full-bleed flex justify-center mb-12">
          <Carousel opts={{ align: "start" }} className="w-[90%]">
            <CarouselContent>
              {[
                "/environmental-graphiti/01.webp",
                "/environmental-graphiti/02.webp",
                "/environmental-graphiti/03.webp",
                "/environmental-graphiti/04.webp",
              ].map((img, i) => (
                <CarouselItem key={i} className="md:basis-1/2 lg:basis-1/4">
                  <img
                    src={`/project/alisa-singer/${img}`}
                    alt={`Alisa Singer artwork ${i + 1}`}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>

        <ArtistProjectsSection artistId={AUTHOR} />

        <h2 className="mb-4">Exhibition</h2>
        <p className="mb-12">
          No exhibitions are planned for this artist at the moment.
        </p>
      </div>
      <Contact />
    </>
  );
}
