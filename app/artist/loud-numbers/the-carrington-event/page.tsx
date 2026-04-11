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

const PROJECT = "the-carrington-event";

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
          <em>The Carrington Event</em> is a collaboration between Loud Numbers
          and Ben Dexter Cooley which tells the story of the largest solar storm
          in recorded history.
        </p>
        <p>
          In 1859, the Earth experienced the strongest solar storm in recorded
          history. Telegraph stations caught fire and auroras were sighted as far
          south as the Caribbean. The storm became known as the Carrington Event.
        </p>
        <p>
          In 2012, a Carrington-sized storm narrowly missed the Earth. If it had
          hit, damage to humankind's large-scale electronic infrastructure would
          have run to trillions of dollars, with a recovery time of four to ten
          years.
        </p>

        <ImgWithCaption
          img="/project/loud-numbers/the-carrington-event/01-full.webp"
          caption={
            <span>
              Data painstakingly transcribed from archival material dating back
              to 1859 was transformed into audiovisual experiences.
            </span>
          }
        />

        <p className="drop-cap">
          To better understand severe solar storms, scientists Karen Aplin and
          Giles Harrison digitised the magnetic records of the Carrington Event
          from Flagstaff Observatory in Melbourne. Data painstakingly transcribed
          from this archival material was transformed into audiovisual
          experiences designed to be played live to an audience, and to be
          exhibited in gallery spaces.
        </p>
        <p>
          Recordings were also released on the French label Camembert
          Électrique.
        </p>

        <div className="my-12">
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/319y5Y24iK0"
            title="The Carrington Event — Loud Numbers and Simon David Rydén"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        <div className="my-12">
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/uLOvgdi-hN0"
            title="The Carrington Event — Ben Dexter Cooley and Silence_Castor"
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
