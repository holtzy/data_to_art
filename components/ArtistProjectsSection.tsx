import { projectList } from "@/lib/project-list";
import Link from "next/link";

type ArtistProjectsSectionProps = { artistId: string };

export const ArtistProjectsSection = ({
  artistId,
}: ArtistProjectsSectionProps) => {
  return (
    <>
      <h2 className="mb-6">Projects</h2>
      <div className="flex flex-wrap gap-6 mb-12">
        {projectList
          .filter((p) => p.artist === artistId)
          .map((p, i) => (
            <Link
              key={i}
              href={`/artist/${artistId}/${p.folder}`}
              className="w-full sm:w-1/2 lg:w-1/4 cursor-pointer group"
            >
              <div className="flex flex-col gap-2">
                <img
                  src={`/project/${artistId}/${p.folder}/01-thumb.webp`}
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
    </>
  );
};
