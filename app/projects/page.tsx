"use client";

import { projectList } from "@/lib/project-list";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <div className="flex flex-wrap gap-2">
        {projectList.map((p, i) => {
          return (
            <Link
              key={i}
              href={"/project/" + p.artist + "/" + p.folder}
              className="rounded-md hover:bg-slate-50 flex flex-col justify-center items-start gap-4"
            >
              <img
                src={
                  "/project/" + p.artist + "/" + p.folder + "/01-medium.webp"
                }
                className="w-40 h-40"
              />
              <span>{p.name}</span>
              <span>{p.artist}</span>
            </Link>
          );
        })}
      </div>
    </>
  );
}
