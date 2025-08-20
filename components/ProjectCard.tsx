import { Project } from "@/lib/project-list";
import Link from "next/link";
import { buttonVariants } from "./ui/button";

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
          className="h-58 w-full object-cover"
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
