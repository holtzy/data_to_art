"use client";

import { ProjectCard } from "@/components/ProjectCard";
import { projectList } from "@/lib/project-list";
import Link from "next/link";

export default function Page() {
  return (
    <div>
      <div className="mt-44 flex flex-col items-center bg-gradient-to-t from-transparent to-white">
        <h1 className="text-9xl">Projects</h1>
        <p className="text-center max-w-62">{}</p>
      </div>
      <div className="wrapper">
        <div className="grid grid-cols-2 gap-2">
          {projectList.map((p, i) => {
            return (
              <div key={i} className="mt-24">
                <ProjectCard project={p} />
              </div>
            );
          })}
        </div>
      </div>{" "}
    </div>
  );
}
