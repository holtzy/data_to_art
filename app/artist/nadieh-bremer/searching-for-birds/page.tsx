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

const PROJECT = "searching-for-birds";
const AUTHOR = "nadieh-bremer";

const img = (file: string) => `/project/${AUTHOR}/${PROJECT}/${file}`;

export default function Page() {
  const projectInfo = projectList.find((p) => p.folder === PROJECT);
  if (!projectInfo) return null;
  const artistInfo = artistList.find((a) => a.folder === projectInfo.artist);
  if (!artistInfo) return null;

  const imagesTop = [
    "02-medium.webp",
    "03-medium.webp",
    "07-medium.webp",
    "04-medium.webp",
    "01-medium.webp",
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
          &ldquo;Searching for Birds&rdquo; was created for{" "}
          <b>Google Trends</b> with a clear design challenge: how can abstract
          search data be transformed into a visually rich, immersive experience
          that invites exploration?
        </p>
        <p>
          The project analyzes large-scale Google Trends data about how people
          search for birds, enriched with publicly available bird datasets such
          as <b>eBird sightings and population counts</b>. Together, they reveal
          how people connect with birds through technology, curiosity and
          search behavior.
        </p>

        <div className="full-bleed">
          <div className="max-w-[1000px] mx-auto">
            <ImgWithCaption
              caption={<span>The opening of the story.</span>}
              img={img("02-full.webp")}
            />
          </div>
        </div>

        <p>
          Instead of conventional charts, the project uses bespoke, creative
          data visualizations <b>intertwined with illustration</b>: birds&apos;
          nests, eggs, feathers, and the birds themselves.
        </p>

        <div className="full-bleed">
          <div className="max-w-[900px] mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6 my-12 px-4">
            <img src={img("01-full.webp")} className="w-full" alt="A giant nest of eggs, one per bird species" />
            <img src={img("03-full.webp")} className="w-full" alt="A giant egg surrounded by colorful feathers" />
          </div>
        </div>

        <p>
          The color system, typography and interaction details were chosen to
          make the whole experience feel <b>warm, whimsical and fun</b>. The
          story, written by Emily Barone, focuses on the connection between
          humans and birds, and was crafted to be engaging and easy to follow.
        </p>

        <div className="full-bleed">
          <div className="max-w-[1000px] mx-auto">
            <ImgWithCaption
              caption={<span>The most Googled bird in each U.S. state.</span>}
              img={img("04-full.webp")}
            />
          </div>
        </div>

        <p>
          Subtle motion and transitions create a feeling of{" "}
          <b>&ldquo;wandering&rdquo;</b>, encouraging curiosity and the
          discovery of birds at various locations throughout the story.
        </p>

        <div className="full-bleed">
          <div className="max-w-[1000px] mx-auto">
            <ImgWithCaption
              caption={
                <span>
                  Search interest for the Snowy Owl, one of the birds that
                  sparks sudden waves of curiosity.
                </span>
              }
              img={img("07-full.webp")}
            />
          </div>
        </div>

        <div className="full-bleed">
          <div className="max-w-[1000px] mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6 my-12 px-4">
            <img src={img("05-full.webp")} className="w-full" alt="Bar charts comparing sightings, searches and population" />
            <img src={img("06-full.webp")} className="w-full" alt="Seasonal waves of search interest" />
            <img src={img("09-full.webp")} className="w-full" alt="Feathers and a cardinal in its nest" />
            <img src={img("10-full.webp")} className="w-full" alt="Story cards about individual birds" />
          </div>
        </div>

        <p>
          The result is a cohesive visual world where{" "}
          <b>story, data, illustration and interface are inseparable</b>.
        </p>

        <div className="mt-8 mx-auto">
          <Link
            href={projectInfo.link}
            target="_blank"
            className={cn(buttonVariants())}
          >
            Explore Searching for Birds
          </Link>
        </div>

        <Spacing />

        <PrevAndNextProjectLinks currentProject={PROJECT} />
      </div>
    </>
  );
}
