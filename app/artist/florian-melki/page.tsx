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
import { ImgWithCaption } from "@/components/viz/ImgWithCaption";

export default function Page() {
  const infos = artistList.find((a) => a.folder === "florian-melki");

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
            Florian is passionate about observing and studying human behavior.
            His guiding principle is simple: the idea comes first; technical
            constraints come later. After all, walls are meant to be broken.
          </p>
          <p>
            For example, I wrote every single day—when I went to bed, woke up,
            worked, and so on—for an entire year, just to uncover hidden
            patterns. I scraped every post from an online forum on a
            controversial topic (women in video games) to analyze how
            conversations unfold. I even transcribed a two-hour political TV
            debate to study manterrupting. No limits, no walls.
          </p>
        </div>

        <Parallax
          text=""
          imageUrl="/project/florian-melki/missing-time/06-full.webp"
        />

        <p className="first-letter:float-left first-letter:text-6xl first-letter:leading-none first-letter:mr-2 first-letter:font-bold">
          Then comes my favorite part: experimenting with data visualization. As
          a data analyst, I dive into data from a statistical perspective to
          identify trends. Then I code my own visualizations from scratch,
          testing and iterating to discover new, creative ways of telling a
          story.
        </p>
        <p className="mt-4">
          I truly believe that data visualization can make stories more
          powerful—revealing what’s hidden, explaining what’s really happening,
          and shining a light on the unseen. Finally, the aesthetic side of my
          work is a way to move people. Data can be tough and overwhelming, and
          art makes it more human, more engaging, and easier to grasp.
        </p>

        <ImgWithCaption
          img={"/project/florian-melki/missing-time/07-full.webp"}
          caption={
            <span>
              "Le temps qui nous manque" (the time we miss). Read the full{" "}
              <Link href="">project description</Link>.
            </span>
          }
        />

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
                className="w-full sm:w-1/2 cursor-pointer group"
              >
                <div className="flex flex-col gap-2">
                  <img
                    src={`/project/${folder}/${p.folder}/01.webp`}
                    alt={`${p.name} project thumbnail`}
                    className="rounded-md transition-transform group-hover:scale-105"
                  />
                  <span className="font-semibold text-2xl !no-underline no-decoration">
                    {p.name}
                  </span>
                  <div className="text-sm text-slate-500">
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
      </div>
      <Contact />
    </>
  );
}
