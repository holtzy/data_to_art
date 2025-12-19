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

const PROJECT = "manchester";

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
          Manchester Music City is a data visualization project inspired by John
          Robb’s 586-page book <em>Manchester Music City 1976–1996</em>. The
          project translates this dense cultural history into a network-based
          visual narrative.
        </p>

        <p>
          Beyond musical emotion, technique, or performance, the project is
          driven by a desire to recontextualize artists, bands, and movements
          within their broader socio-economic environment. It connects personal
          stories with larger historical forces, showing how scenes emerge from
          relationships, encounters, shared spaces, and collective energy.
        </p>

        <ImgWithCaption
          caption="Full view of the Manchester project"
          img="/project/marlene-dorgny/manchester/05.png"
        />

        <p className="drop-cap">
          Bands do not appear in isolation. They form because people meet.
          Projects are born from friendships, tensions, emotions, and specific
          moments in time. This is precisely what John Robb’s book captures.
        </p>

        <p>
          Robb was both a witness and an active participant in the Manchester
          scene. As a musician, journalist, and TV presenter, he occupied a
          unique position that allowed him to gather testimonies, memories, and
          connections from within the movement itself.
        </p>

        <div className="full-bleed my-12">
          <div className="max-w-[1000px] mx-auto">
            <ImgWithCaption
              img="/project/marlene-dorgny/manchester/02-full.webp"
              caption={
                <span>
                  Network map of artists, venues, labels, and relationships in
                  Manchester’s music scene
                </span>
              }
            />
          </div>
        </div>

        <p>
          The resulting visualization reinforces a simple but powerful idea:
          nothing and no one exists alone. Artists, labels, venues, and
          audiences are deeply interconnected, forming an ecosystem that enables
          certain scenes to flourish.
        </p>

        <p>
          The project ultimately raises a broader question. Why do extraordinary
          cultural movements emerge in specific places at specific moments. Why
          Manchester. Why then.
        </p>

        <p className="italic text-slate-600">
          “Of course the Stone Roses came from Manchester. Where else could they
          have come from. And The Smiths. And Joy Division. Where else could Ian
          Curtis come from. And Factory Records. And The Hacienda. It’s obvious.
          All this incredible music comes from a tiny city in the north of
          England. People around the world ask me why Manchester is like this. I
          tell them I have no idea.”
          <br />— Noel Gallagher
        </p>

        <div className="mt-4">
          <Link
            target="_blank"
            href="https://md-graphiste.com/portfolio_page/manchester-music-city-1976-1996/"
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
