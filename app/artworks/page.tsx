import MasonryGallery from "@/components/MasonryGallery";
import Link from "next/link";
import fs from "fs";
import path from "path";
import { shuffleArray } from "@/lib/utils";
import { ImageWithModalProps } from "@/components/ImageWithModal";

export default function Home() {
  const publicDir = path.join(process.cwd(), "public", "project");
  const items: ImageWithModalProps[] = [];

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
        items.push({
          src: relPath,
          width: 200,
          project: {
            name: "Naturality",
            folder: "naturality",
            link: "https://www.behance.net/gallery/223921953/The-Gradient-of-Naturality-France",
            artist: "florent-lavergne",
            date: new Date("2021-08-02"),
            descriptionShort: (
              <>
                <p>
                  What if nature could tell us where it thrives — and where it’s
                  fading away? This map reveals the hidden gradient of
                  naturality across France, inviting you to explore the unseen
                  impact of humans on ecosystems.
                </p>
              </>
            ),
          },
        });
      }
    }
  }

  walk(publicDir);

  return (
    <div>
      <section className="relative h-screen flex flex-col justify-center items-center">
        <div className="relative bg-white/70 p-20 flex flex-col items-center">
          <h1>87 artworks available.</h1>
          <p className="text-center max-w-96">kk</p>
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
