"use client";

import FiveImgsGallery from "@/components/FiveImgsGallery";
import Parallax from "@/components/Parallax";
import { PrevAndNextProjectLinks } from "@/components/PrevAndNextProjectLinks";
import { ProjectHero } from "@/components/ProjectHero";
import { Spacing } from "@/components/Spacing";
import { buttonVariants } from "@/components/ui/button";
import { artistList } from "@/lib/artist-list";
import { projectList } from "@/lib/project-list";
import { cn } from "@/lib/utils";
import Link from "next/link";

const PROJECT = "missing-time";

export default function Page() {
  const projectInfo = projectList.find((p) => p.folder === PROJECT);
  if (!projectInfo) return null;
  const artistInfo = artistList.find((a) => a.folder === projectInfo.artist);
  if (!artistInfo) {
    return null;
  }

  const imagesTop = [
    "01-full.webp",
    "02-full.webp",
    "03-full.webp",
    "04-full.webp",
    "05-full.webp",
  ];

  const images5 = [
    "/project/florian-melki/missing-time/01-full.webp",
    "/project/florian-melki/missing-time/02-full.webp",
    "/project/florian-melki/missing-time/03-full.webp",
    "/project/florian-melki/missing-time/04-full.webp",
    "/project/florian-melki/missing-time/05-full.webp",
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
          <i>Missing Time</i> is one of the most personal pieces in Florian
          Melki’s collection <i>50 nuances de dataviz</i>, a long-term artistic
          experiment exploring how a single dataset can reveal countless
          perspectives. It began in 2016, when Florian started recording every
          moment of his daily life — hours of sleep, work, and the many
          nighttime awakenings spent soothing his one-year-old daughter. What
          began as a quantified-self exercise soon became a meditation on time,
          balance, and the intimate rhythms of everyday life.
        </p>

        <p>
          Over the course of a year, these self-observations turned into a rich
          dataset — nearly 100,000 data points representing the invisible
          structure of his days. Florian transformed these numbers into dozens
          of visualizations, from traditional circular timelines to bold
          experimental forms that blur the line between data art and emotional
          storytelling. Each visualization seeks to answer a simple but
          universal question: how do we spend our time, and what remains unseen
          in the spaces between?
        </p>

        <Parallax
          text="Missing Time"
          imageUrl="/project/florian-melki/missing-time/01-full.webp"
        />

        <p className="drop-cap">
          While refining his visualizations, a coding error unexpectedly caused
          the hours of work to disappear from view. Instead of discarding it,
          Florian saw meaning in the absence. The resulting piece,{" "}
          <i>Le temps qui nous manque</i> (“The Missing Time”), highlights not
          what is done, but what is lost — the unrecorded, unseen hours that
          vanish into the background of a busy life. The visualization became a
          poignant reflection on the time he couldn’t spend with his daughter,
          transforming a technical glitch into a moment of truth.
        </p>

        <p>
          The project then evolved into an ongoing series of experiments,
          testing different rendering techniques, densities, and textures. From
          delicate “fur charts” that evoke movement and softness to spiraling
          compositions that unfold like a clockwork of human behavior, each
          visualization becomes both a self-portrait and a study of perception.
          Through these transformations, <i>Missing Time</i> asks us to
          reconsider data not as cold information but as a medium for emotion,
          introspection, and art.
        </p>

        <p>
          At its core, the work defends two core values: that one can do much
          with very little — local data, time, and curiosity — and that studying
          human traces within digital systems remains an untapped field for both
          research and creativity. By visualizing his own rhythms, Florian
          illustrates how data visualization can reconnect us to our humanity,
          helping us see the beauty, fragility, and meaning hidden inside the
          numbers of our everyday lives.
        </p>

        <div className="full-bleed">
          <div className="max-w-[900px] mx-auto">
            <FiveImgsGallery images={images5} height={400} />
          </div>
        </div>

        <Spacing />

        <div className="mt-4 mx-auto">
          <Link href={projectInfo.link || ""} className={cn(buttonVariants())}>
            Official project page
          </Link>
        </div>

        <Spacing />

        <PrevAndNextProjectLinks currentProject={PROJECT} />
      </div>
    </>
  );
}
