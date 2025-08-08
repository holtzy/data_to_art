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

export default function Page() {
  const infos = artistList.find((a) => a.folder === "florent-lavergne");

  if (!infos) {
    return null;
  }

  const { name, folder, homepageLink, linkedinLink } = infos;

  return (
    <>
      <ArtistHero
        name={name}
        folder={folder}
        homepageLink={homepageLink}
        linkedinLink={linkedinLink}
      />

      <div className="relative wrapper py-52">
        <h2>Bio</h2>
        <div className="">
          <p className="first-letter:float-left first-letter:text-6xl first-letter:leading-none first-letter:mr-2 first-letter:font-bold">
            Florent is an information designer focused on geospatial and
            environmental data, working with Microsoft's AI For Good Lab.
          </p>
          <p>
            He loves exploring the intersection of data and art, and turning
            complex and difficult topics into inviting visual experiences. I use
            3D tools and photo editing techniques to achieve the natural
            textures and color palettes that define my graphic identity.
          </p>
        </div>

        <section className="full-bleed my-8">
          <div className="h-[400px] bg-fixed bg-center bg-cover bg-[url('/project/florent-lavergne/wet-feet/04-full.webp')]">
            <div className="h-full flex items-center justify-center bg-black/0">
              <h1 className="text-5xl text-white font-bold">Parallax Effect</h1>
            </div>
          </div>
        </section>

        <div className="">
          <p className="first-letter:float-left first-letter:text-6xl first-letter:leading-none first-letter:mr-2 first-letter:font-bold">
            Florent is an information designer focused on geospatial and
            environmental data, working with Microsoft's AI For Good Lab.
          </p>
          <p>
            He loves exploring the intersection of data and art, and turning
            complex and difficult topics into inviting visual experiences. I use
            3D tools and photo editing techniques to achieve the natural
            textures and color palettes that define my graphic identity.
          </p>
        </div>

        <h2>Gallery</h2>
        <div className="full-bleed flex justify-center">
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-[90%]"
          >
            <CarouselContent>
              <CarouselItem className="md:basis-1/2 lg:basis-1/5">
                <img src={`/project/florent-lavergne/wet-feet/04-full.webp`} />
              </CarouselItem>

              <CarouselItem className="md:basis-1/2 lg:basis-1/5">
                <img src={`/project/florent-lavergne/wet-feet/02-full.webp`} />
              </CarouselItem>

              <CarouselItem className="md:basis-1/2 lg:basis-1/5">
                <img
                  src={`/project/florent-lavergne/naturality/01-full.webp`}
                />
              </CarouselItem>

              <CarouselItem className="md:basis-1/2 lg:basis-1/5">
                <img src={`/project/florent-lavergne/wet-feet/03-full.webp`} />
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>

        <h2>Projects</h2>
        <div className="flex gap-2">
          {projectList
            .filter((p) => p.artist === folder)
            .map((p, i) => {
              return (
                <Link key={i} href={`/project/${p.folder}`}>
                  <div className="flex flex-col gap-2">
                    <img src={`/project/${folder}/${p.folder}/01-thumb.webp`} />
                    <span>{p.name}</span>
                    <div className="text-xs text-slate-500 !no-underline">
                      {p.descriptionShort}
                    </div>
                  </div>
                </Link>
              );
            })}
        </div>

        <h2>Exhibition</h2>
        <p>There is no exhibition planned for this artist yet.</p>

        <section className="full-bleed bg-slate-50 my-20 py-20">
          <div className="wrapper">
            <h2>Know an artist?</h2>
            <p>Contact us!</p>
          </div>
        </section>
      </div>
    </>
  );
}
