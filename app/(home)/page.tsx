"use client";

import dynamic from "next/dynamic";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Spacing } from "@/components/Spacing";
import { NoiseDivider } from "@/components/NoiseDivider";
import { ArtistSection } from "./ArtistSection";
import { Contact } from "@/components/Contact";
import { QuoteSection } from "@/components/QuoteSection";
import { ArtScienceCursorSection } from "./ArtScienceCursorSection";
import { EmailButton } from "@/components/EmailButton";
import { SectionTitle } from "./SectionTitle";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { artistNumber } from "@/lib/artist-list";
import { DataArtEventTable } from "../exhibition/DataArtEventTable";
import { ImgWithCaption } from "@/components/viz/ImgWithCaption";

const MasonryGallery = dynamic(() => import("@/components/MasonryGallery"), {
  ssr: false,
});

export default function Home() {
  return (
    <div>
      <section className="relative flex flex-col justify-center items-center pt-20 z-40 pointer-events-none">
        <div className="relative px-4 md:px-40 pb-4 flex flex-col items-center mt-20">
          <div>
            <div className="w-full flex justify-center md:justify-end">
              <span className="font-opensauce text-slate-400 text-xs md:text-sm uppercase font-extralight mb-2 tracking-wider">
                Dive into the beauty of data
              </span>
            </div>
            <h1 className="!font-normal !uppercase !tracking-wider text-[64px]! md:text-[150px]!">
              Data T<span className="!lowercase">o</span> Art
            </h1>
          </div>
          <p className="text-center max-w-[340px] text-2xl">
            Data To Art is a curated online gallery showcasing the work of
            international data experts. It explores the beauty of data and the
            power of visual storytelling.
          </p>
        </div>
      </section>

      <section className="md:-mt-30 z-10">
        <div className="relative max-w-[1700px] mx-auto h-[1000px] md:h-[2000px] overflow-hidden px-4 md:px-24">
          <MasonryGallery imgPaths={BEST_IMAGES} />
          <div className="absolute top-0 left-0 w-full h-42 bg-gradient-to-b from-background to-transparent pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-full h-96 bg-gradient-to-t from-background to-transparent flex justify-center items-end">
            <Link
              href={"/artworks"}
              className={cn(buttonVariants({ size: "lg" }), "mb-12")}
            >
              See all artworks
            </Link>
          </div>
        </div>
      </section>

      <Spacing />
      <Spacing />

      <div className="wrapper">
        <SectionTitle
          title={"Latest"}
          subtitle={<span className="font-opensauce">What's up</span>}
        />
        <p>
          Data To Art is constantly growing, with new artists and projects added
          to the gallery as soon as we discover them.
        </p>
        <p>
          Most recently, we were pleased to add the work of{" "}
          <Link href="/artist/alisa-singer">Alisa Singer</Link>, whose art
          transforms climate science, social issues, and personal experiences
          into vibrant, data-driven visual pieces.
        </p>

        <div className="full-bleed">
          <div className="max-w-[900px] mx-auto">
            <ImgWithCaption
              img="/project/alisa-singer/environmental-graphiti/02-full.webp"
              caption={
                <span>
                  Alisa’s work is organized into a project titled{" "}
                  <Link href="/artist/alisa-singer/environmental-graphiti">
                    Environmental Graphiti
                  </Link>
                  .
                </span>
              }
            />
          </div>
        </div>
        <div className="w-full flex gap-2 justify-center my-10">
          <Link
            href={"#contact"}
            className={cn(
              buttonVariants({ size: "lg", variant: "outline" }),
              "mb-12",
            )}
          >
            Suggest an artist
          </Link>{" "}
          <Link
            href={"/artist/alisa-singer"}
            className={cn(buttonVariants({ size: "lg" }), "mb-12")}
          >
            Read more
          </Link>
        </div>
      </div>

      <div className="wrapper relative mt-20">
        <SectionTitle
          title={"Meet the artists"}
          subtitle={
            <p className="font-opensauce">
              Currently featuring{" "}
              <div className="w-3 inline-block">
                <AnimatedCounter value={artistNumber} />
              </div>{" "}
              artists
            </p>
          }
        />
        <p>
          This gallery showcases a growing selection of talented data artists,
          celebrating diverse voices and styles from around the world.
        </p>
        <p>
          Explore their unique creations and get inspired by the many ways data
          can be transformed into art.
        </p>
      </div>

      <div className="w-full overflow-x-scroll">
        <ArtistSection />
      </div>

      <div className="w-full flex gap-2 justify-center my-4">
        <EmailButton
          name={"Suggest an Artist"}
          variant="outline"
          link="wakeupdataviz@gmail.com"
        />
        <Link
          href={"/artists"}
          className={cn(
            buttonVariants({ size: "lg", variant: "default" }),
            "mb-12",
          )}
        >
          See all artists
        </Link>
      </div>

      <Spacing />

      <section className="relative bg-slate-100">
        <NoiseDivider height={10} />

        <div className="wrapper py-20">
          <SectionTitle
            title={"What's that?"}
            subtitle={<p className="font-opensauce">Data Art</p>}
          />

          <p className="drop-cap">
            Data art is a creative practice that transforms raw data into
            visually compelling artworks. By blending aesthetics with
            information, data artists use charts, patterns, and interactive
            visuals to reveal stories, emotions, and insights hidden within
            datasets.{" "}
          </p>

          <p className="mb-12">
            Data art acts as a cursor between science and abstraction. Some
            works feel like scientific figures, with annotations and numbers
            that speak for themselves. Others drift into pure abstraction, only
            revealing their meaning with extra context.
          </p>

          <ArtScienceCursorSection />

          <p>
            While data art and generative art both involve digital creativity,
            they are not the same. Data art specifically uses real-world data as
            its source material, aiming to visualize information, patterns, or
            stories embedded in that data.
          </p>

          <QuoteSection
            text="Data art reveals meaning from datasets, while generative art
                emphasizes process, randomness, and system-driven creativity."
          />

          <p>
            In contrast, generative art is created through algorithms and
            autonomous systems that generate visuals often without a direct
            connection to external data. Data art focuses on revealing meaning
            and insights from existing datasets, whereas generative art
            emphasizes process, randomness, and system-driven creativity.
          </p>
        </div>
      </section>

      <Spacing />

      <section className="my-24 wrapper">
        <SectionTitle
          title={"Exhibition"}
          subtitle={<span className="font-opensauce">Data, In Real Life</span>}
        />

        <div className="full-bleed my-12 grid gap-2">
          {/* <img
            src="/asset/gallery.jpg"
            className="h-72 w-full object-cover"
            alt="Gallery"
          /> */}
          <div className="grid grid-cols-2 gap-2">
            <img
              src="/asset/mockup1.webp"
              className="h-[400px] w-full object-cover"
              alt="Mockup 1"
            />
            <img
              src="/asset/mockup2.webp"
              className="h-[400px] w-full object-cover"
              alt="Mockup 2"
            />
          </div>
        </div>
        <p>
          Data art is captivating on a screen, but its true magic comes alive in
          the real world — on a canvas you can see, touch, and feel.
        </p>
        <p>
          We celebrate this intersection of data, design, and emotion by
          gathering exhibitions, installations, and events from around the
          world.
        </p>
        <p>
          Our goal is to build the most comprehensive archive of data art —
          past, present, and future. If you’ve come across an exhibition we
          should know about, we’d love for you to{" "}
          <Link href="#contact">share it with us</Link>.
        </p>

        <div className="full-bleed">
          <div className="relative max-w-[1100px] mx-auto">
            <div className="relative">
              <div className="scale-[0.65]">
                <DataArtEventTable />
              </div>
              {/* top fade */}
              <div className="pointer-events-none absolute top-0 left-0 right-0 h-96 bg-gradient-to-b from-white to-transparent" />
              {/* bottom fade */}
              <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-t from-white to-transparent" />
            </div>

            {/* top centered button */}
            <div className="absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
              <Link
                href="/exhibition"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "h-30 w-30 rounded-full text-center",
                )}
              >
                See all
                <br />
                exhibitions
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="my-24 wrapper">
        <SectionTitle
          title="Create an Expo"
          subtitle={<span className="font-opensauce">Work with us</span>}
        />

        {/* Image */}
        <img
          src="/asset/marthe-expo.jpeg"
          alt="Data exhibition by Marthe Viallet"
          className="w-full"
        />

        <p>
          Designing a data exhibition requires more than displaying charts on
          walls. It involves curatorial thinking, narrative structure, spatial
          design, and a deep understanding of data as a cultural medium.
        </p>
        <p>
          Data To Art develops data exhibitions for institutions and
          organizations, transforming existing data into meaningful, accessible,
          and engaging physical experiences. Curated and led by{" "}
          <a href="https://www.wakeupdataviz.com/" target="_blank">
            Marthe Viallet
          </a>
          , with over ten years of experience in data exhibitions and cultural
          data projects.
        </p>

        <div className="flex justify-start gap-2 mt-12 flex-wrap">
          <a
            href="https://www.wakeupdataviz.com/"
            className={cn(buttonVariants({ size: "lg", variant: "outline" }))}
          >
            Marthe's work
          </a>
          <EmailButton
            name="Contact Her"
            variant="default"
            link="wakeupdataviz@gmail.com"
          />
        </div>
      </section>
      <Contact />
    </div>
  );
}

export const BEST_IMAGES = [
  "/asset/white-bg-tiny.webp",
  "/asset/white-bg-small.webp",
  "/project/florent-lavergne/wet-feet/07-full.webp",
  "/project/alisa-singer/environmental-graphiti/08-full.webp",
  "/project/florent-lavergne/other/02-full.webp",
  "/project/florent-lavergne/naturality/06-full.webp",
  "/project/jeremy-wanner/other/02-full.webp",
  "/project/jeremy-wanner/glove-rose/01-full.webp",
  "/project/alisa-singer/environmental-graphiti/01-full.webp",
  "/project/laura-castro/fresquita-party/04-full.webp",
  "/project/alisa-singer/environmental-graphiti/06-medium.webp",
  "/project/nick-whiteley/vanishing-points/04-full.webp",
  "/project/anne-laure-freant/flood-necklace/08-full.webp",
  "/project/soha-elghany/gaza/01-full.webp",
  "/project/alisa-singer/environmental-graphiti/04-full.webp",
  "/project/florent-lavergne/other/05-full.webp",
  "/project/florian-melki/missing-time/07-full.webp",
];
