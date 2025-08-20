import { Project, projectList } from "@/lib/project-list";
import Link from "next/link";
import { buttonVariants } from "./ui/button";

type ArtistProjectsSectionProps = { artistId: string };

export const ArtistProjectsSection = ({
  artistId,
}: ArtistProjectsSectionProps) => {
  return (
    <>
      <h2 className="mb-6">Projects</h2>
      <div className="grid grid-cols-2 gap-4">
        {projectList
          .filter((p) => p.artist === artistId)
          .map((p, i) => (
            <div key={i} className="">
              <ProjectCard project={p} />
            </div>
          ))}
      </div>
    </>
  );
};

type ProjectCardProps = {
  project: Project;
};

export const ProjectCard = ({ project }: ProjectCardProps) => {
  const { folder, name, descriptionShort, artist } = project;

  return (
    <div className="flex flex-col gap-2">
      <span className="font-semibold text-lg no-underline">{name}</span>
      <Link href={`/artist/${artist}/${folder}`} className="w-full">
        <img
          src={`/project/${artist}/${folder}/01-thumb.webp`}
          alt={`${name} project thumbnail`}
          className="h-58 object-cover"
        />
      </Link>
      <div className="text-xs text-slate-500">{descriptionShort}</div>
      <div>
        <Link
          className={buttonVariants({ variant: "outline", size: "sm" })}
          href={`/artist/${artist}/${folder}`}
        >
          Read
        </Link>
      </div>
    </div>
  );
};
