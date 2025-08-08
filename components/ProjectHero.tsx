import { Artist } from "@/lib/artist-list";
import { Project } from "@/lib/project-list";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { formatDate } from "@/lib/utils";

type ProjectHeroProps = {
  project: Project;
  artist: Artist;
  images: string[];
  marginTopRightColumn?: number;
};

export const ProjectHero = ({
  project,
  artist,
  images,
  marginTopRightColumn,
}: ProjectHeroProps) => {
  const { name, descriptionShort, date, folder } = project;

  return (
    <section className="h-screen flex flex-col lg:flex-row gap-8 max-w-[900px] mx-auto overflow-hidden">
      {/* Left column */}
      <div className="lg:w-1/2 flex flex-col justify-center items-end">
        <h1 className="text-4xl font-bold mb-4">{name}</h1>
        <p className="text-md mb-6 text-right text-black">{descriptionShort}</p>

        <div className="flex gap-2 items-center text-sm">
          <span>A project by </span>
          <Link href="">{artist?.name}</Link>
          <Avatar>
            <AvatarImage src={`/artist/${artist.folder}.webp`} />
            <AvatarFallback>{artist?.name}</AvatarFallback>
          </Avatar>
        </div>
        <p className="mb-6 text-sm opacity-40">
          Published on <span>{formatDate(date)}</span>
        </p>
      </div>

      {/* Right column - Masonry style */}
      <div className="relative lg:w-1/2 grid grid-cols-2 gap-1">
        {/* White gradients*/}
        <div className="pointer-events-none absolute top-0 left-0 w-full h-54 bg-gradient-to-b from-white to-transparent z-10" />
        <div className="pointer-events-none absolute bottom-0 left-0 w-full h-54 bg-gradient-to-t from-white to-transparent z-10" />

        <div className=" flex flex-col gap-1 justify-center">
          {images
            .filter((_, i) => i % 2 === 0)
            .map((img, i) => (
              <img
                key={i}
                src={`/project/${artist.folder}/${folder}/${img}`}
                alt=""
                className="w-full object-cover rounded-lg opacity-90 hover:opacity-100"
              />
            ))}
        </div>
        <div className=" flex flex-col gap-1 justify-center">
          <div style={{ height: marginTopRightColumn }} />
          {images
            .filter((_, i) => i % 2 !== 0)
            .map((img, i) => (
              <img
                key={i}
                src={`/project/${artist.folder}/${folder}/${img}`}
                alt=""
                className="w-full object-cover rounded-lg opacity-90 hover:opacity-100"
              />
            ))}
        </div>
      </div>

      {/* Overflow gradient effect */}
    </section>
  );
};
