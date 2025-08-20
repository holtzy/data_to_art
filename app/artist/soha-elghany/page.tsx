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

const ARTIST = "soha-elghany";

export default function Page() {
  const infos = artistList.find((a) => a.folder === ARTIST);

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
          <p>
            Soha is a data visualisation designer that focuses on{" "}
            <b>humanising data through data art</b>.
          </p>
          <p>
            There is something about data when it comes to{" "}
            <b>real life events</b> and figuring out a way to visualise it in a
            way that can tell a powerful story and provoke emotion that she is
            passionate about, especially figuring out how to do provoke an
            emotional reaction from the audience.
          </p>
        </div>

        <Parallax
          text=""
          imageUrl={`/project/${ARTIST}/missing-migrants/07-full.webp`}
        />

        <div className="my-12">
          <p>
            We as human being are visual creatures and showing a spreadsheet of
            number does not tell a story that can tug at people's empathy level.
            Instead the <b>visual representation of that story</b> does a better
            job.
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
                    className="h-72 object-cover"
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

        <Contact />
      </div>
    </>
  );
}
