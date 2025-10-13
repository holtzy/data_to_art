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

const AUTHOR = "cinzia-bongino";

export default function Page() {
  const infos = artistList.find((a) => a.folder === AUTHOR);

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
            Cinzia Bongino is a multidisciplinary designer working across
            information, UX/UI, web, and editorial design. Her practice blends
            rigorous data research with clear visual storytelling, resulting in
            projects that make complex subjects accessible and engaging.
          </p>
        </div>

        <Parallax
          text=""
          imageUrl="/project/cinzia-bongino/names-on-the-moon/04-full.webp"
        />

        <div className="my-12">
          <p className="first-letter:float-left first-letter:text-6xl first-letter:leading-none first-letter:mr-2 first-letter:font-bold">
            Whether translating advanced climate models into intuitive tools,
            illustrating the history of satellites in orbit, or designing
            engaging editorial pieces, Cinzia’s work is defined by clarity,
            accessibility, and care for visual detail.
          </p>
          <p className="mt-4">
            She collaborates with institutions, startups, and cultural
            organizations, bridging technical precision with creative
            expression. From interactive dashboards to printed posters, her
            designs invite audiences to explore, learn, and reflect.
          </p>
          <p className="mt-4">
            In addition to her design practice, Cinzia teaches UX/UI design at
            institutions such as IED Milano and Boolean Careers, fostering the
            next generation of designers through a mix of theory, critical
            thinking, and hands-on practice.
          </p>
        </div>

        <h2 className="mb-6">Gallery</h2>
        <div className="full-bleed flex justify-center mb-12">
          <Carousel opts={{ align: "start" }} className="w-[90%]">
            <CarouselContent>
              {[
                "/names-on-the-moon/01-thumb.webp",
                "/names-on-the-moon/02-thumb.webp",
                "/names-on-the-moon/03-thumb.webp",
                "/names-on-the-moon/04-thumb.webp",
                "/names-on-the-moon/05-thumb.webp",
                "/names-on-the-moon/06-thumb.webp",
                "/names-on-the-moon/07-thumb.webp",
                "/names-on-the-moon/08-thumb.webp",
              ].map((img, i) => (
                <CarouselItem key={i} className="md:basis-1/2 lg:basis-1/4">
                  <img
                    src={`/project/cinzia-bongino/${img}`}
                    alt={`Cinzia Bongino artwork ${i + 1}`}
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

        <Contact />
      </div>
    </>
  );
}
