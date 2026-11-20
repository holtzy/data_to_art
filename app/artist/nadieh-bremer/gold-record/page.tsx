"use client";

import { PrevAndNextProjectLinks } from "@/components/PrevAndNextProjectLinks";
import { ProjectHero } from "@/components/ProjectHero";
import { Spacing } from "@/components/Spacing";
import { buttonVariants } from "@/components/ui/button";
import { ImgWithCaption } from "@/components/viz/ImgWithCaption";
import { artistList } from "@/lib/artist-list";
import { projectList } from "@/lib/project-list";
import { cn } from "@/lib/utils";
import Link from "next/link";

const PROJECT = "gold-record";
const AUTHOR = "nadieh-bremer";

const img = (file: string) => `/project/${AUTHOR}/${PROJECT}/${file}`;

export default function Page() {
  const projectInfo = projectList.find((p) => p.folder === PROJECT);
  if (!projectInfo) return null;
  const artistInfo = artistList.find((a) => a.folder === projectInfo.artist);
  if (!artistInfo) return null;

  const imagesTop = [
    "02-medium.webp",
    "04-medium.webp",
    "06-medium.webp",
    "03-medium.webp",
    "05-medium.webp",
  ];

  return (
    <>
      <ProjectHero
        artist={artistInfo}
        project={projectInfo}
        images={imagesTop}
        marginTopRightColumn={82}
      />

      <div className="wrapper">
        <p className="drop-cap">
          Traditional gold and platinum records commemorate a hit song with a
          framed vinyl or CD. But in an era dominated by digital streaming, this
          project <b>re-imagines that iconic plaque through data art</b>.
        </p>
        <p>
          Commissioned by <b>Sony Music Entertainment</b>, the series transforms
          the anatomy and reception of a track into a unique visual
          &ldquo;fingerprint&rdquo;. Every poster is anchored by a giant
          circular centerpiece, a direct nod to the vinyl records found in
          classic music awards.
        </p>

        <div className="full-bleed">
          <div className="max-w-[1000px] mx-auto">
            <ImgWithCaption
              caption={<span>The circular centerpiece of one poster.</span>}
              img={img("01-full.webp")}
            />
          </div>
        </div>

        <p>
          Each poster brings together two layers of information: data extracted{" "}
          <b>directly from the audio</b>, and metrics capturing how the song{" "}
          <b>performs on platforms</b> such as Spotify and YouTube.
        </p>
        <p>
          On the musical side, the song&apos;s amplitude spectrum is combined
          with beats and section transitions from Spotify&apos;s Audio
          Analysis. Surrounding that core are the performance figures, such as
          global streams and playlist additions.
        </p>

        <div className="full-bleed">
          <div className="max-w-[1000px] mx-auto grid grid-cols-2 sm:grid-cols-3 gap-4 my-12 px-4">
            {["02", "03", "04", "05", "06", "07"].map((n) => (
              <img
                key={n}
                src={img(`${n}-full.webp`)}
                className="w-full"
                alt="A Gold Record data-art poster"
              />
            ))}
          </div>
        </div>

        <p>
          Everything was built with <b>D3.js and HTML5 Canvas</b>, in a
          monochrome palette inspired by Sony Music&apos;s signature red. The
          design system stays abstract enough to fit any artist or genre.
        </p>

        <div className="full-bleed">
          <div className="max-w-[1000px] mx-auto">
            <ImgWithCaption
              caption={
                <span>
                  Detail: the song&apos;s amplitude spectrum, wrapped by its
                  Spotify chart history.
                </span>
              }
              img={img("10-full.webp")}
            />
          </div>
        </div>

        <div className="full-bleed">
          <div className="max-w-[1000px] mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6 my-12 px-4">
            <img src={img("09-full.webp")} className="w-full" alt="Poster detail with song metadata" />
            <img src={img("11-full.webp")} className="w-full" alt="Poster detail with amplitude spectrum" />
          </div>
        </div>

        <p>
          Each song ends up with its own striking, one-of-a-kind signature: a
          gold record made of data.
        </p>

        <div className="mt-8 mx-auto">
          <Link
            href={projectInfo.link}
            target="_blank"
            className={cn(buttonVariants())}
          >
            See the project on Visual Cinnamon
          </Link>
        </div>

        <Spacing />

        <PrevAndNextProjectLinks currentProject={PROJECT} />
      </div>
    </>
  );
}
