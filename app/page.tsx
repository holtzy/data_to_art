import MasonryGallery, { GalleryItem } from "@/components/MasonryGallery";
import Link from "next/link";
import LineChart from "./linechart/page";
import fs from "fs";
import path from "path";
import { shuffleArray } from "@/lib/utils";

export default function Home() {
  const publicDir = path.join(process.cwd(), "public", "project");
  const items: GalleryItem[] = [];

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
        items.push({ src: relPath });
      }
    }
  }

  walk(publicDir);

  console.log("items", items);

  return (
    <div>
      <section className="relative h-screen flex flex-col justify-center items-center">
        <div className="absolute inset-0 flex items-center">
          <LineChart />
        </div>

        <div className="relative bg-white/70 p-20 flex flex-col items-center">
          <h1>Data To Art</h1>
          <p className="text-center max-w-96">
            A curated collection of stunning works from the world’s most
            innovative data artists. Each piece transforms raw information into
            visual experiences that inspire, inform, and amaze.
          </p>
        </div>
      </section>

      <section>
        <div className="max-w-[900px] mx-auto -my-40">
          <MasonryGallery items={shuffleArray(items)} />
        </div>
      </section>

      <Link href="/artists">Artists</Link>
      <Link href="/projects">Projects</Link>
    </div>
  );
}
