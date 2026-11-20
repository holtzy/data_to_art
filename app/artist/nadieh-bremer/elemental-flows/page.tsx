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

const PROJECT = "elemental-flows";
const AUTHOR = "nadieh-bremer";

const img = (file: string) => `/project/${AUTHOR}/${PROJECT}/${file}`;

// One section per element: image number + the data used as "obstacles".
const elements = [
  { name: "Earth", file: "02", data: "tree density" },
  { name: "Water", file: "03", data: "rainfall" },
  { name: "Air", file: "04", data: "air quality" },
  { name: "Sun", file: "05", data: "sunshine hours" },
];

export default function Page() {
  const projectInfo = projectList.find((p) => p.folder === PROJECT);
  if (!projectInfo) return null;
  const artistInfo = artistList.find((a) => a.folder === projectInfo.artist);
  if (!artistInfo) return null;

  const imagesTop = [
    "02-medium.webp",
    "05-medium.webp",
    "03-medium.webp",
    "06-medium.webp",
    "04-medium.webp",
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
          &ldquo;Elemental Flows&rdquo; is a data art collection of{" "}
          <b>4 + 1 pieces</b>, revealing data about some of the most important
          elements that we humans (now) need to live: Earth, Water, Air,
          Sun/Fire, and Digital.
        </p>

        <div className="full-bleed">
          <div className="max-w-[1000px] mx-auto">
            <ImgWithCaption
              caption={<span>The five pieces of the collection.</span>}
              img={img("01-full.webp")}
            />
          </div>
        </div>

        <p>
          All pieces stem from the same underlying algorithm, called{" "}
          <b>flow fields</b>. However, each one is fine-tuned differently to
          become a representation of its element.
        </p>
        <p>
          For every piece except Digital, data relevant to the element was added
          as <b>&ldquo;obstacles&rdquo; in the flows</b>, measured in major
          cities around the world:
        </p>
        <ul>
          {elements.map((e) => (
            <li key={e.name}>
              <b>{e.name}</b>: {e.data}
            </li>
          ))}
        </ul>

        <div className="full-bleed">
          <div className="max-w-[1000px] mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6 my-12 px-4">
            {elements.map((e) => (
              <figure key={e.name}>
                <img
                  src={img(`${e.file}-full.webp`)}
                  className="w-full"
                  alt={`Elemental Flows: ${e.name}`}
                />
                <figcaption className="text-slate-500 text-sm text-right mt-2">
                  {e.name}, shaped by {e.data}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>

        <p>
          The fifth piece, <b>Digital</b>, is the &ldquo;+ 1&rdquo;: a new
          element that has become just as essential to our lives.
        </p>

        <div className="full-bleed">
          <div className="max-w-[640px] mx-auto">
            <ImgWithCaption
              caption={<span>Digital, the fifth element.</span>}
              img={img("06-full.webp")}
            />
          </div>
        </div>

        <div className="full-bleed">
          <div className="max-w-[1000px] mx-auto grid grid-cols-2 sm:grid-cols-4 gap-4 my-12 px-4">
            {["07", "08", "09", "10"].map((n) => (
              <img
                key={n}
                src={img(`${n}-full.webp`)}
                className="w-full"
                alt="Elemental Flows detail"
              />
            ))}
          </div>
        </div>

        <p>
          One algorithm, five elements: each flow carries the hidden imprint of
          the world&apos;s cities.
        </p>

        <div className="mt-8 mx-auto">
          <Link
            href={projectInfo.link}
            target="_blank"
            className={cn(buttonVariants())}
          >
            See the collection on Visual Cinnamon
          </Link>
        </div>

        <Spacing />

        <PrevAndNextProjectLinks currentProject={PROJECT} />
      </div>
    </>
  );
}
