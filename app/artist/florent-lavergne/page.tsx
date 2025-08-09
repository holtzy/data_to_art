import { Button, buttonVariants } from "@/components/ui/button";
import { artistList } from "@/lib/artist-list";
import { projectList } from "@/lib/project-list";
import { cn } from "@/lib/utils";
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

export default function Page() {
  const infos = artistList.find((a) => a.folder === "florent-lavergne");

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
            Florent Lavergne is an information designer specializing in
            geospatial and environmental data. At Microsoft’s AI For Good Lab,
            he creates innovative visual narratives that make complex scientific
            and social topics accessible and engaging to diverse audiences.
          </p>
        </div>

        <Parallax
          text=""
          imageUrl="/project/florent-lavergne/wet-feet/04-full.webp"
        />

        <div className="my-12">
          <p className="first-letter:float-left first-letter:text-6xl first-letter:leading-none first-letter:mr-2 first-letter:font-bold">
            Deeply passionate about the intersection of data and art, Florent
            transforms raw information into immersive visual experiences. Using
            advanced 3D tools and photo editing techniques, he crafts natural
            textures and harmonious color palettes that define a unique graphic
            identity.
          </p>
          <p className="mt-4">
            His work reflects a commitment to illuminating environmental
            challenges and human stories, bridging science, policy, and society
            with clarity and beauty. Florent’s designs invite viewers not only
            to understand data but to feel it — inspiring curiosity, empathy,
            and action.
          </p>
          <p className="mt-4">
            With years of experience blending technical precision and creative
            expression, he pushes the boundaries of information design to create
            artworks that are both scientifically rigorous and visually
            captivating.
          </p>
        </div>

        <h2 className="mb-6">Gallery</h2>
        <div className="full-bleed flex justify-center mb-12">
          <Carousel opts={{ align: "start" }} className="w-[90%]">
            <CarouselContent>
              {[
                "wet-feet/04-thumb.webp",
                "wet-feet/02-thumb.webp",
                "naturality/01-thumb.webp",
                "wet-feet/03-thumb.webp",
                "other/02-thumb.webp",
                "other/03-thumb.webp",
                "other/01-thumb.webp",
                "other/04-thumb.webp",
                "other/05-thumb.webp",
                "other/06-thumb.webp",
              ].map((img, i) => (
                <CarouselItem key={i} className="md:basis-1/2 lg:basis-1/4">
                  <img
                    src={`/project/florent-lavergne/${img}`}
                    alt={`Florent Lavergne artwork ${i + 1}`}
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
                    src={`/project/${folder}/${p.folder}/01-thumb.webp`}
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

        <section className="full-bleed bg-slate-50 py-20">
          <div className="wrapper max-w-3xl mx-auto text-center">
            <h2 className="mb-4">Know an artist?</h2>
            <p className="mb-0">Contact us to feature them here!</p>
          </div>
        </section>
      </div>
    </>
  );
}
