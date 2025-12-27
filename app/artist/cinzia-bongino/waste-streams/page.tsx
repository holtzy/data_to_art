"use client";

import Parallax from "@/components/Parallax";
import { PrevAndNextProjectLinks } from "@/components/PrevAndNextProjectLinks";
import { ProjectHero } from "@/components/ProjectHero";
import { QuoteSection } from "@/components/QuoteSection";
import { Spacing } from "@/components/Spacing";
import { buttonVariants } from "@/components/ui/button";
import { ImgWithCaption } from "@/components/viz/ImgWithCaption";
import { artistList } from "@/lib/artist-list";
import { projectList } from "@/lib/project-list";
import { cn } from "@/lib/utils";
import Link from "next/link";

const PROJECT = "waste-streams";

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
          Waste Streams – Tracing Romania’s Tangled Trash is a data-driven
          installation that investigates the waste management system in Romania
          within a broader European context.
        </p>

        <p>
          Presented as part of the exhibition{" "}
          <em>Turn Signals – Design is not a Dashboard</em> at the FABER Center
          in Timișoara, the project responds to a long-standing narrative in
          Romanian media that portrays the country as “the dump of Europe”.
          While large quantities of waste enter Romania through both legal and
          illegal channels, the destination and treatment of this waste often
          remain opaque.
        </p>

        <Parallax
          caption={
            <p>
              Interactive installation at the{" "}
              <a
                href="https://www.cinziabongino.com/projects/waste-streams.html"
                target="_blank"
              >
                Turn Signals – Design is not a Dashboard
              </a>{" "}
              exhibition.
            </p>
          }
          imageUrl="/project/cinzia-bongino/waste-streams/01-full.webp"
        />

        <p className="drop-cap">
          The installation takes the form of a waste sorting facility composed
          of two parallel conveyor belts. One belt represents Europe’s waste
          production, export strategies, and regulatory framework. The other
          focuses on Romania’s waste infrastructure and its environmental and
          public health impacts.
        </p>

        <p>
          Together, the conveyors establish a visual comparison between two
          geopolitical scales. Statistics, policies, and legislation flow
          continuously along the belts, covering the period from 2004 to 2020.
          European data is drawn primarily from Eurostat, while the Romanian
          stream combines official datasets with investigative journalism and
          local knowledge.
        </p>

        <div className="full-bleed my-12">
          <div className="max-w-[1000px] mx-auto">
            <ImgWithCaption
              img="/project/cinzia-bongino/waste-streams/02-full.webp"
              caption={
                <span>
                  The twin conveyor belts visualizing European and Romanian
                  waste systems
                </span>
              }
            />
          </div>
        </div>

        <p>
          Each conveyor is structured around three chapters of waste management:
          generation, treatment, and export. The visualization highlights how
          waste quantities evolve over time, which sectors generate the most
          waste, and how different materials are treated or traded across
          borders.
        </p>

        <p>
          Particular attention is given to e-waste, one of the fastest-growing
          waste streams in Europe. Romania’s collection and processing capacity
          remains among the lowest in the EU, largely due to the lack of
          dedicated facilities. Despite new directives and investments,
          landfills and cement kilns continue to play a central role in waste
          disposal.
        </p>

        <QuoteSection text="The endless rotation of the conveyor belts acts as a metaphor for the waste life cycle" />

        <p>
          The endless rotation of the conveyor belts acts as a metaphor for the
          waste life cycle. Far from being an endpoint, waste is presented as a
          commodity circulating in a global market, governed by economic
          interests, regulatory loopholes, and political power.
        </p>

        <div className="full-bleed my-12">
          <div className="max-w-[1000px] mx-auto">
            <ImgWithCaption
              img="/project/cinzia-bongino/waste-streams/03-full.webp"
              caption={
                <span>
                  Detection screens beneath the conveyors contextualize the data
                  with images and footage
                </span>
              }
            />
          </div>
        </div>

        <p>
          Beneath the European conveyor, a screen displays a garbage
          segmentation dataset, offering visitors a technical reference point
          for the research. In contrast, the monitor below the Romanian belt
          shows CCTV footage of illegal dumping activities recorded around
          Timișoara, exposing the social and behavioral dimensions of waste
          management.
        </p>

        <div className="my-12">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/IiFamBzdmWg"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>

        <p>
          A final screen tracks the evolution of Romanian landfills, many of
          which were required to close under EU directives but remain poorly
          documented. These sites are often located near residential areas,
          disproportionately affecting marginalized communities and raising
          serious concerns about air, soil, and water contamination.
        </p>

        <p>
          Developed in collaboration with Versavia Ancușa, Computer Science
          lecturer at the Polytechnic University of Timișoara, Waste Streams
          brings together data, design, and investigative research to reveal how
          waste operates as both an environmental burden and a traded resource.
        </p>

        <div className="mt-4">
          <Link
            target="_blank"
            href="https://www.cinziabongino.com/projects/waste-streams.html"
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
