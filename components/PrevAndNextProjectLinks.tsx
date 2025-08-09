import { projectList } from "@/lib/project-list";
import Link from "next/link";

type PrevAndNextProjectLinksProps = {
  currentProject: string;
};
export const PrevAndNextProjectLinks = ({
  currentProject,
}: PrevAndNextProjectLinksProps) => {
  const index = projectList.findIndex((p) => p.folder === currentProject);

  // Handle wrap-around
  const prevIndex = (index - 1 + projectList.length) % projectList.length;
  const nextIndex = (index + 1) % projectList.length;

  const prev = projectList[prevIndex];
  const next = projectList[nextIndex];

  return (
    <div className="flex justify-center items-center space-x-6 my-4">
      <Link
        href={`/artist/${prev.artist}/${prev.folder}`}
        className="no-decoration flex flex-col justify-center items-end w-96 h-32 border-r border-black/30 p-8 hover:bg-slate-50"
      >
        <span className="uppercase font-semibold text-transparent bg-gradient-to-l from-blue-200 to-blue-900 bg-clip-text font-bricolage">
          &larr; Previous
        </span>
        <p>{prev.name}</p>
      </Link>

      <Link
        href={`/artist/${next.artist}/${next.folder}`}
        className="no-decoration flex flex-col justify-center w-96 h-32 border-l border-black/30 p-8 hover:bg-slate-50"
      >
        <span className="uppercase font-semibold text-transparent bg-gradient-to-l from-blue-200 to-blue-900 bg-clip-text font-bricolage">
          Next &rarr;
        </span>
        <p>{next.name}</p>
      </Link>
    </div>
  );
};
