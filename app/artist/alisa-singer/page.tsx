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

export default function Page() {
  const infos = artistList.find((a) => a.folder === "alisa-singer");

  if (!infos) {
    return null;
  }

  const { folder } = infos;

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

        <div className="my-12">
          <p className="first-letter:float-left first-letter:text-6xl first-letter:leading-none first-letter:mr-2 first-letter:font-bold">
            From translating complex climate data into striking visual
            statements to exploring social themes through digital painting,
            Alisa’s work is defined by clarity, vibrancy, and thought-provoking
            aesthetics.
          </p>
          <p className="mt-4">
            She collaborates with cultural institutions, environmental
            organizations, and tech platforms, turning information into art that
            resonates with diverse audiences. Each project is both an artistic
            expression and a tool for awareness and reflection.
          </p>
          <p className="mt-4">
            Her series, including <em>Environmental Graphiti</em> and{" "}
            <em>What's Your Mission?</em>, have been exhibited internationally
            and continue to push the boundaries of data-driven contemporary art.
          </p>
        </div>

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

        <h2 className="mb-6">Projects</h2>
        <div className="flex flex-wrap gap-6 mb-12">
          {projectList
            .filter((p) => p.artist === folder)
            .map((p, i) => (
              <Link
                key={i}
                href={`/artist/${folder}/${p.folder}`}
                className="w-full sm:w-1/2 lg:w-1/4 cursor-pointer group"
              >
                <div className="flex flex-col gap-2">
                  <img
                    src={`/project/${folder}/${p.folder}/01.webp`}
                    alt={`${p.name} project thumbnail`}
                    className="rounded-md transition-transform group-hover:scale-105"
                  />
                  <span className="font-semibold text-lg">{p.name}</span>
                  <div className="text-xs text-slate-500">
                    {p.descriptionShort}
                  </div>
                </div>
              </Link>
            ))}
        </div>

        <h2 className="mb-4">Exhibition</h2>
        <p className="mb-12">
          No exhibitions are planned for this artist at the moment.
        </p>

        <Contact />
      </div>
    </>
  );
}
