import Link from "next/link";
import fs from "fs";
import path from "path";
import { shuffleArray } from "@/lib/utils";
import { projectList } from "@/lib/project-list";
import { artistList } from "@/lib/artist-list";
import GalleryClient from "./GalleryClient";

export default function ArtworksPage() {
  const publicDir = path.join(process.cwd(), "public", "project");
  const items: string[] = [];

  function walk(dir: string) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
      const fullPath = path.join(dir, file);
      const stat = fs.statSync(fullPath);
      if (stat.isDirectory()) {
        walk(fullPath);
      } else if (file.endsWith("-full.webp")) {
        const relPath = fullPath
          .replace(publicDir, "/project")
          .replace(/\\/g, "/");
        items.push(relPath);
      }
    }
  }

  walk(publicDir);

  const imgPaths = [
    "/asset/white-bg-tiny.webp",
    "/asset/white-bg-medium.webp",
    ...shuffleArray(items),
  ];

  return (
    <div className="relative mt-52 max-w-[900px] mx-auto">
      <div className="mt-8">
        <GalleryClient imgPaths={imgPaths} />
      </div>

      <div className="absolute top-0 w-full h-[400px] flex flex-col items-center bg-gradient-to-t from-transparent to-white">
        <h1 className="text-9xl">The Wall</h1>
        <p className="text-center max-w-62">
          {`Data to Art features ${projectList.length} projects from ${artistList.length} artists. That’s ${items.length} unique images waiting to be explored below. Any other suggestion? `}
          <Link href="/about">Contact us</Link>
        </p>
      </div>
    </div>
  );
}
