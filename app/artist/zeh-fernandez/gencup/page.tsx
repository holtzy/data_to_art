"use client";

import FiveImgsGallery from "@/components/FiveImgsGallery";
import { PrevAndNextProjectLinks } from "@/components/PrevAndNextProjectLinks";
import { ProjectHero } from "@/components/ProjectHero";
import { Spacing } from "@/components/Spacing";
import { buttonVariants } from "@/components/ui/button";
import { ImgWithCaption } from "@/components/viz/ImgWithCaption";
import { artistList } from "@/lib/artist-list";
import { projectList } from "@/lib/project-list";
import { cn } from "@/lib/utils";
import Link from "next/link";

const PROJECT = "gencup";
const AUTHOR = "zeh-fernandez";

const img = (edition: string, file: string) =>
  `/project/${AUTHOR}/${PROJECT}/${edition}/${file}`;

export default function Page() {
  const projectInfo = projectList.find((p) => p.folder === PROJECT);
  if (!projectInfo) return null;
  const artistInfo = artistList.find((a) => a.folder === projectInfo.artist);
  if (!artistInfo) return null;

  // One striking poster per edition for the hero masonry.
  const imagesTop = [
    "2022/01-full.webp",
    "2018/01-full.webp",
    "2019/01-full.webp",
    "2023/1-full.webp",
    "2022/03-full.webp",
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
          GenCup, a contraction of <i>generative</i> and <i>World Cup</i>, is a
          data-driven art project that transforms football matches into textured
          visual compositions. Based on structured data such as possession,
          goals, passes and match intensity, the project translates the rhythm
          and emotional tension of each game into shapes, densities and
          movements.
        </p>

        <p>
          Rather than offering a conventional or literal infographic reading,
          GenCup creates a <b>visual memory of the match</b>: different
          encounters leave unique imprints within the image. The experience
          invites viewers to first perceive the raw atmosphere and emotion of
          the game, before gradually connecting this language of shapes and
          textures to their own memories of the event and to the real data
          generated on the field.
        </p>

        <p>
          GenCup is a single project that has evolved across several World Cups.
          Each edition has its own visual system — a distinct aesthetic and set
          of graphic rules — turning every tournament into a new series of
          generative posters.
        </p>

        <Spacing />

        {/* ---- 2018 · Russia ---- */}
        <h2 className="mb-4">2018 — World Cup, Russia</h2>
        <p>
          The first edition. Bold condensed type and grainy gradients turn each
          first-stage match into a tense, textured poster.
        </p>
        <div className="full-bleed">
          <div className="max-w-[900px] mx-auto">
            <FiveImgsGallery
              images={[
                img("2018", "01-full.webp"),
                img("2018", "02-full.webp"),
                img("2018", "03-full.webp"),
                img("2018", "04-full.webp"),
                img("2018", "05-full.webp"),
              ]}
              height={400}
            />
          </div>
        </div>

        {/* ---- 2019 · France (Women's World Cup) ---- */}
        <h2 className="mt-12 mb-4">2019 — Women&apos;s World Cup, France</h2>
        <p>
          A sharper, geometric language of overlapping translucent shapes, built
          on the same underlying match data.
        </p>
        <div className="full-bleed">
          <div className="max-w-[1000px] mx-auto">
            <ImgWithCaption
              caption={
                <span>
                  How to read GenCup: the visual encoding behind each poster
                  translates possession, passes and intensity into form.
                </span>
              }
              img={img("2019", "data-full.webp")}
            />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-3 my-8">
          <img src={img("2019", "01-full.webp")} alt="" className="w-full" />
          <img src={img("2019", "02-full.webp")} alt="" className="w-full" />
          <img src={img("2019", "03-full.webp")} alt="" className="w-full" />
        </div>

        {/* ---- 2022 · Qatar ---- */}
        <h2 className="mt-12 mb-4">2022 — World Cup, Qatar</h2>
        <p>
          Warm, rounded forms and saturated gradients give the 2022 series its
          own unmistakable identity.
        </p>
        <div className="full-bleed">
          <div className="max-w-[900px] mx-auto">
            <FiveImgsGallery
              images={[
                img("2022", "01-full.webp"),
                img("2022", "02-full.webp"),
                img("2022", "03-full.webp"),
                img("2022", "04-full.webp"),
                img("2022", "05-full.webp"),
              ]}
              height={400}
            />
          </div>
        </div>

        {/* ---- 2023 · Australia & New Zealand (Women's World Cup) ---- */}
        <h2 className="mt-12 mb-4">
          2023 — Women&apos;s World Cup, Australia &amp; New Zealand
        </h2>
        <p>
          The most recent completed edition leans into stark contrast and
          gradient noise, each poster anchored by match details and location.
        </p>
        <div className="full-bleed">
          <div className="max-w-[900px] mx-auto">
            <FiveImgsGallery
              images={[
                img("2023", "1-full.webp"),
                img("2023", "2-full.webp"),
                img("2023", "3-full.webp"),
                img("2023", "4-full.webp"),
                img("2023", "5-full.webp"),
              ]}
              height={400}
            />
          </div>
        </div>

        <Spacing />

        <div className="mt-4 mx-auto">
          <Link href={projectInfo.link || ""} className={cn(buttonVariants())}>
            Discover the process on gencup.art
          </Link>
        </div>

        <Spacing />

        <PrevAndNextProjectLinks currentProject={PROJECT} />
      </div>
    </>
  );
}
