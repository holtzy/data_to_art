"use client";

import { PrevAndNextProjectLinks } from "@/components/PrevAndNextProjectLinks";
import { ProjectHero } from "@/components/ProjectHero";
import { Spacing } from "@/components/Spacing";
import { buttonVariants } from "@/components/ui/button";
import { ImgWithCaption } from "@/components/viz/ImgWithCaption";
import { QuoteSection } from "@/components/QuoteSection";
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
          encounters leave unique imprints within the image.
        </p>{" "}
        <div className="full-bleed">
          <div className="max-w-[640px] mx-auto">
            <ImgWithCaption
              caption={<span>France 3 — 1 Poland. GenCup 2022.</span>}
              img={img("2022", "04-full.webp")}
            />
          </div>
        </div>
        <p>
          The experience invites viewers to first perceive the raw atmosphere
          and emotion of the game, before gradually connecting this language of
          shapes and textures to the real data generated on the field.
        </p>
        <p>
          For Zeh, this is the whole point —{" "}
          <b>perception comes before analysis</b>. Our brain recognizes patterns
          far faster than it reads numbers.
        </p>
        <QuoteSection text="Chess grandmasters know they're in danger before calculating a single move — just by reading the board's patterns." />
        <p>
          When you draw data in different ways, you create new pathways for
          understanding. You activate the brain beyond the analytics: people
          start to <b>perceive</b> the data instead of only rationalizing it.
        </p>
        <p>
          GenCup is a single project that has evolved across several World Cups.
          Crucially, <b>each edition reinvents its own visual grammar</b> — not
          just a new palette, but a brand-new logic for encoding the match data.
          Below, each tournament is shown with its own posters and its own
          reading key.
        </p>
        <Spacing />
        {/* ---- 2018 · Russia ---- */}
        <h2 className="mb-4">2018 — World Cup, Russia</h2>
        <p>
          The founding edition that established the idea. Bold condensed type
          and grainy gradients turn each first-stage match into a tense,
          textured poster.
        </p>
        <div className="full-bleed">
          <div className="max-w-[640px] mx-auto">
            <ImgWithCaption
              caption={<span>Nigeria 2 — 0 Iceland, Volgograd.</span>}
              img={img("2018", "01-full.webp")}
            />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-3 my-8">
          <img src={img("2018", "02-full.webp")} alt="" className="w-full" />
          <img src={img("2018", "03-full.webp")} alt="" className="w-full" />
          <img src={img("2018", "04-full.webp")} alt="" className="w-full" />
        </div>
        <Spacing />
        {/* ---- 2019 · France (Women's World Cup) ---- */}
        <h2 className="mb-4">2019 — Women&apos;s World Cup, France</h2>
        <p>
          A sharper, geometric language of intersecting lines and hatched
          circles, orbiting a central gravity point.
        </p>
        <div className="full-bleed">
          <div className="max-w-[640px] mx-auto">
            <ImgWithCaption
              caption={<span>Italy — Brazil, Stade du Hainaut.</span>}
              img={img("2019", "01-full.webp")}
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3 my-8">
          <img src={img("2019", "02-full.webp")} alt="" className="w-full" />
          <img src={img("2019", "03-full.webp")} alt="" className="w-full" />
        </div>
        <h3 className="mt-8 mb-3">Reading the 2019 system</h3>
        <ul className="list-disc pl-6 my-4 space-y-1">
          <li>
            <b>Ball possession &amp; result</b> — the central gravity point
            where the lines converge.
          </li>
          <li>
            <b>Distance covered</b> (km per team) — the size of the hatched
            circles.
          </li>
          <li>
            <b>Number &amp; completion of passes</b> — the reach of one
            triangle.
          </li>
          <li>
            <b>Attempts on target</b> — the reach of the other.
          </li>
          <li>
            <b>Goals &amp; attempts</b> — the dot grid.
          </li>
        </ul>
        <div className="full-bleed">
          <div className="max-w-[900px] mx-auto">
            <ImgWithCaption
              caption={<span>The 2019 encoding blueprint.</span>}
              img={img("2019", "data-full.webp")}
            />
          </div>
        </div>
        <Spacing />
        {/* ---- 2022 · Qatar ---- */}
        <h2 className="mb-4">2022 — World Cup, Qatar</h2>
        <p>
          Warm, rounded forms and saturated gradients give the 2022 series its
          own unmistakable identity, built on a system of two stacked capsules.
        </p>
        <div className="full-bleed">
          <div className="max-w-[640px] mx-auto">
            <ImgWithCaption
              caption={<span>Senegal 0 — 2 Netherlands, first stage.</span>}
              img={img("2022", "01-full.webp")}
            />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-3 my-8">
          <img src={img("2022", "02-full.webp")} alt="" className="w-full" />
          <img src={img("2022", "03-full.webp")} alt="" className="w-full" />
          <img src={img("2022", "05-full.webp")} alt="" className="w-full" />
        </div>
        <h3 className="mt-8 mb-3">Reading the 2022 system</h3>
        <p>
          Each match is drawn as two stacked capsules — the home team on top,
          the away team below:
        </p>
        <ul className="list-disc pl-6 my-4 space-y-1">
          <li>
            <b>Ball possession</b> — how far each shape stretches.
          </li>
          <li>
            <b>Pass accuracy</b> — the width of the form.
          </li>
          <li>
            <b>Number of passes</b> — the length of the capsule.
          </li>
          <li>
            <b>Number of goals</b> — the rounded caps on the right; each goal
            leaves its own circle.
          </li>
          <li>
            <b>Attempts on goal &amp; on target</b> — the spread along the base.
          </li>
          <li>
            <b>Game intensity</b> — the turbulence where the two teams meet.
          </li>
        </ul>
        <div className="full-bleed">
          <div className="max-w-[900px] mx-auto">
            <ImgWithCaption
              caption={<span>The 2022 encoding blueprint.</span>}
              img={img("2022", "blueprint-full.webp")}
            />
          </div>
        </div>
        <Spacing />
        {/* ---- 2023 · Australia & New Zealand (Women's World Cup) ---- */}
        <h2 className="mb-4">
          2023 — Women&apos;s World Cup, Australia &amp; New Zealand
        </h2>
        <p>
          The most recent completed edition switches to a quadrant grid, where
          the match literally unfolds across the canvas over time.
        </p>
        <div className="full-bleed">
          <div className="max-w-[640px] mx-auto">
            <ImgWithCaption
              caption={<span>New Zealand — Philippines, Wellington.</span>}
              img={img("2023", "1-full.webp")}
            />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-3 my-8">
          <img src={img("2023", "2-full.webp")} alt="" className="w-full" />
          <img src={img("2023", "3-full.webp")} alt="" className="w-full" />
          <img src={img("2023", "4-full.webp")} alt="" className="w-full" />
        </div>
        <h3 className="mt-8 mb-3">Reading the 2023 system</h3>
        <ul className="list-disc pl-6 my-4 space-y-1">
          <li>
            <b>Each quadrant</b> represents 1/16 of the game time — the match
            reads across the grid.
          </li>
          <li>
            <b>Ball possession</b> — the width of the top band.
          </li>
          <li>
            <b>Number of passes</b> — the right-hand extent.
          </li>
          <li>
            <b>Attempts on target &amp; distance covered</b> — the left bands.
          </li>
          <li>
            <b>Goal from inside</b> — a filled circle; <b>goal from outside</b>{" "}
            — a diamond.
          </li>
          <li>
            <b>Score</b> — the marker in the top corner.
          </li>
        </ul>
        <div className="full-bleed">
          <div className="max-w-[900px] mx-auto">
            <ImgWithCaption
              caption={<span>The 2023 encoding blueprint.</span>}
              img={img("2023", "blueprint-full.webp")}
            />
          </div>
        </div>
        <Spacing />
        <p>
          Seen together, the editions form a growing visual archive of football
          — proof that behind every scoreline lies a texture, a rhythm, and a
          story waiting to be felt before it is read. A new 2026 edition is
          already on its way.
        </p>
        <div className="mt-8 mx-auto">
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
