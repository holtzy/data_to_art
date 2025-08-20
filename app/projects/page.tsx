"use client";

import { projectList } from "@/lib/project-list";
import Link from "next/link";

export default function Page() {
  return (
    <div>
      <div className=" my-44 flex flex-col items-center bg-gradient-to-t from-transparent to-white">
        <h1 className="text-9xl">Projects</h1>
        <p className="text-center max-w-62">{`kkk`}</p>
      </div>
      <div className="wrapper">
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
                  className="w-44 h-64 object-cover"
                />
                <span>{p.name}</span>
                <span>{p.artist}</span>
              </Link>
            );
          })}
        </div>
      </div>{" "}
    </div>
  );
}
