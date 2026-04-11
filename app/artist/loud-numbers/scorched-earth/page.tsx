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

const PROJECT = "scorched-earth";

export default function Page() {
  const projectInfo = projectList.find((p) => p.folder === PROJECT);
  if (!projectInfo) return null;
  const artistInfo = artistList.find((a) => a.folder === projectInfo.artist);
  if (!artistInfo) return null;

  const images = ["01-full.webp", "02-full.webp", "03-full.webp"];

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
          Wildfires around the world are getting more ferocious and harder to
          control, as climate change fuels more extreme heat. In unusually hot,
          dry seasons like the summer of 2018 in Sweden, the number and size of
          fires starts to outstrip humans' ability to respond and cope.
        </p>

        <ImgWithCaption
          img="/project/loud-numbers/scorched-earth/01-full.webp"
          caption={
            <span>
              Scorched Earth visualizes daily fire counts from the Swedish
              county of Skåne during the extreme summer of 2018.
            </span>
          }
        />

        <p className="drop-cap">
          Commissioned for the Nature's Harmony exhibition in Helsingborg,
          Sweden, in 2024, <em>Scorched Earth</em> is an audiovisual artwork
          based on daily fire counts from the Swedish county of Skåne during the
          year 2018.
        </p>
        <p>
          It includes elements of data sonification and audio-reactive visuals.
          The sound palette takes inspiration from horror movie soundtracks,
          folk music and 20th-century string music.
        </p>
        <div className="my-12">
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/Ppw2utyxEbo"
            title="Scorched Earth — Loud Numbers"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        <Spacing />
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
