"use client";

import Parallax from "@/components/Parallax";
import { PrevAndNextProjectLinks } from "@/components/PrevAndNextProjectLinks";
import { ProjectHero } from "@/components/ProjectHero";
import { Spacing } from "@/components/Spacing";
import { buttonVariants } from "@/components/ui/button";
import { ImgWithCaption } from "@/components/viz/ImgWithCaption";
import { artistList } from "@/lib/artist-list";
import { projectList } from "@/lib/project-list";
import { cn } from "@/lib/utils";
import Link from "next/link";

const PROJECT = "riot";

export default function Page() {
  const projectInfo = projectList.find((p) => p.folder === PROJECT);
  if (!projectInfo) return null;
  const artistInfo = artistList.find((a) => a.folder === projectInfo.artist);
  if (!artistInfo) return null;

  const images = [
    "01-thumb.webp",
    "02-thumb.webp",
    "03-thumb.webp",
    "04-thumb.webp",
    "05-thumb.webp",
  ];

  return (
    <>
      <ProjectHero
        artist={artistInfo}
        project={projectInfo}
        images={images}
        marginTopRightColumn={82}
      />

      <div className="wrapper">
        <p className="drop-cap">
          The dataviz Riot Grrrl project explores the feminist punk movement
          that emerged in the early 1990s in the Pacific Northwest of the United
          States.
        </p>

        <p>
          Originating in Olympia, Washington, the movement combined music,
          activism, and self-published media to challenge sexism in both society
          and the punk scene itself. Riot Grrrl gave rise to a new form of
          feminist expression, rooted in lived experience, collective action,
          and a strong DIY ethic.
        </p>

        <Parallax
          text=""
          imageUrl="/project/marlene-dorgny/riot/01-full.webp"
        />

        <p className="drop-cap">
          The project traces the first wave of the movement between 1991 and
          1994, followed by the emergence of the Sista Grrrl Riot movement.
          Multiple geographic hubs played a key role in its development,
          including the Pacific Northwest, Washington DC, and parts of England.
        </p>

        <p>
          Through timelines, maps, and networks, the visualization highlights
          how ideas circulated across locations and communities. Bands,
          individuals, zines, and venues are treated as interconnected nodes,
          revealing both the density and diversity of the movement.
        </p>

        <div className="full-bleed my-12">
          <div className="max-w-[1000px] mx-auto">
            <ImgWithCaption
              img="/project/marlene-dorgny/riot/02-full.webp"
              caption={<span>Mapping of the Riot Grrrl Movement</span>}
            />
          </div>
        </div>

        <p>
          One of the central ambitions of the project is to represent the Riot
          Grrrl movement as a whole. Rather than focusing on isolated events,
          the visualization attempts to capture relationships, influences, and
          shared spaces, making visible the social fabric that sustained the
          movement.
        </p>

        <p>
          The large-scale visualizations, presented at the bottom of the page,
          invite slow exploration. They emphasize connections between people,
          places, and creative families, offering a comprehensive view of a
          movement that was both fragmented and deeply connected.
        </p>

        <p>
          This visualization is part of a larger collection of data
          visualizations by Marlene Dorgny, which you can explore on{" "}
          <a href="https://md-graphiste.com" target="_blank">
            her website
          </a>
          .
        </p>

        <div className="mt-4">
          <Link
            target="_blank"
            href="https://md-graphiste.com/portfolio_page/the-dataviz-riot-grrrl-project/"
            className={cn(buttonVariants())}
          >
            Official project page
          </Link>
        </div>

        <Spacing />

        <PrevAndNextProjectLinks currentProject={PROJECT} />
      </div>
    </>
  );
}
