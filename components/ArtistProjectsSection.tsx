import { projectList } from "@/lib/project-list";
import { ProjectCard } from "./ProjectCard";

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
