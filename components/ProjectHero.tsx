import { Artist } from "@/lib/artist-list";
import { Project } from "@/lib/project-list";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { formatDate } from "@/lib/utils";

type ProjectHeroProps = {
  project: Project;
  artist: Artist;
  images: string[];
};

export const ProjectHero = ({ project, artist, images }: ProjectHeroProps) => {
  const { name, descriptionShort, date, folder } = project;

  return (
    <section className="min-h-screen flex flex-col lg:flex-row gap-8 max-w-[900px] mx-auto">
      {/* Left column */}
      <div className="lg:w-1/2 flex flex-col justify-center items-end">
        <h1 className="text-4xl font-bold mb-4">{name}</h1>
        <p className="text-md text-gray-600 mb-6 text-right">
          {descriptionShort}
        </p>

        <div className="flex gap-2">
          <span>A project by </span>
          <Link href="" className="underline">
            {artist?.name}
          </Link>
          <Avatar>
            <AvatarImage src={`/artist/${artist.folder}.webp`} />
            <AvatarFallback>{artist?.name}</AvatarFallback>
          </Avatar>
        </div>
        <p className="mb-6">
          Published on <span>{formatDate(date)}</span>
        </p>
      </div>

      {/* Right column - Masonry style */}
      <div className="lg:w-1/2 grid grid-cols-2 gap-1">
        <div className=" flex flex-col gap-1 justify-center">
          {images
            .filter((_, i) => i % 2 === 0)
            .map((img, i) => (
              <img
                key={i}
                src={`/project/${artist.folder}/${folder}/${img}`}
                alt=""
                className="w-full object-cover rounded-lg"
              />
            ))}
        </div>
        <div className=" flex flex-col gap-1 justify-center">
          <div className="h-82" />
          {images
            .filter((_, i) => i % 2 !== 0)
            .map((img, i) => (
              <img
                key={i}
                src={`/project/${artist.folder}/${folder}/${img}`}
                alt=""
                className="w-full object-cover rounded-lg"
              />
            ))}
        </div>
      </div>
    </section>
  );
};
