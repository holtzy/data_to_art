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

const PROJECT = "on-standby";

export default function Page() {
  const projectInfo = projectList.find((p) => p.folder === PROJECT);
  if (!projectInfo) return null;
  const artistInfo = artistList.find((a) => a.folder === projectInfo.artist);
  if (!artistInfo) return null;

  const images = ["02-full.webp"];

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
          What if you could hear the energy consumed by your electronic devices
          when you're asleep? <em>On Standby</em> is a 10-hour sound art piece
          based on energy data collected overnight from volunteers in Malmö,
          Sweden.
        </p>
        <p>
          As each device consumes power, even just a trickle, you'll hear a
          sound. The result? A unique, meditative symphony of the unseen energy
          that hums in our homes every night.
        </p>

        <ImgWithCaption
          img="/project/loud-numbers/on-standby/01-full.webp"
          caption={
            <span>
              On Standby transforms overnight energy consumption data into an
              immersive listening experience.
            </span>
          }
        />

        <p className="drop-cap">
          Featuring the voices of volunteers, plus energy saving expert Nick
          Trapp from the Centre for Sustainable Energy Bristol, poetry from Anna
          Arvidsdotter, and reflections on the themes of sleep and rest, On
          Standby brings an entirely new perspective to the energy our
          appliances quietly consume.
        </p>
        <p>
          The music plays out over the same timescale — one minute of data takes
          one minute to play back. You'll hear a unique sound every time a
          different device consumes half a watt hour of energy. If an appliance
          consumes more energy, you'll hear it more often. Some appliances
          consume more or less energy at different times of night, so the tempo
          changes too.
        </p>

        <div className="my-12">
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/ptEzmVWnzKI"
            title="On Standby: Europe Timezone — Loud Numbers"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        <div className="mt-4">
          <Link
            href={projectInfo.link}
            target="_blank"
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
