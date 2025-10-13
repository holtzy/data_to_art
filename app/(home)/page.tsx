"use client";

import dynamic from "next/dynamic";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Spacing } from "@/components/Spacing";
import FiveImgsGallery from "@/components/FiveImgsGallery";
import { NoiseDivider } from "@/components/NoiseDivider";
import { ArtistSection } from "./ArtistSection";
import { Contact } from "@/components/Contact";
import { QuoteSection } from "@/components/QuoteSection";
import { ArtScienceCursorSection } from "./ArtScienceCursorSection";

const MasonryGallery = dynamic(() => import("@/components/MasonryGallery"), {
  ssr: false,
});

export default function Home() {
  return (
    <div>
      <section className="relative flex flex-col justify-center items-center pt-20">
        <div className="relative bg-gradient-to-r from-transparent via-[#F8FAFC] to-transparent px-40 pb-4 flex flex-col items-center mt-20">
          <div>
            <div className="w-full flex justify-end">
              <span className="font-opensauce text-slate-400 text-md text-right uppercase font-extralight mb-2 tracking-wider">
                Dive into the beauty of data
              </span>
            </div>
            <h1
              className="!font-normal !uppercase !tracking-wider"
              style={{ fontSize: 170 }}
            >
              Data T<span className="!lowercase">o</span> Art
            </h1>
          </div>
          <p className="text-center max-w-[500px] text-2xl">
            We're a curated online gallery showcasing the work
            <br />
            of international data experts. We believe in the beauty of data, and
            in the power of visuals to tell stories.
          </p>
        </div>
      </section>

      <section>
        <div className="relative max-w-[1700px] mx-auto h-[2000px] overflow-hidden px-24">
          <MasonryGallery imgPaths={BEST_IMAGES} />
          <div className="absolute top-0 left-0 w-full h-42 bg-gradient-to-b from-[#F8FAFC] to-transparent pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-full h-96 bg-gradient-to-t from-[#F8FAFC] to-transparent flex justify-center items-end">
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

      {/* <div
        className="full-bleed bg-repeat bg-[length:auto] py-20"
        style={{ backgroundImage: "url('/asset/texture.png')" }}
      >
        <div className="wrapper relative mt-20 text-white">
          <p className="text-center max-w-md text-3xl">
            We collect stunning works from the world’s most innovative data
            artists. Each piece transforms raw information into visual
            experiences that inspire, inform, and amaze.
          </p>
          <div className="full-bleed flex justify-center mt-8">
            <img src="project/jeremy-wanner/other/03.png" />
          </div>
        </div>
      </div>

      <Spacing /> */}

      <div className="wrapper relative mt-20">
        <h2 className="border-none !text-6xl ">
          <span className="block !text-4xl text-slate-400">
            From all over the world
          </span>
          Meet the artists
        </h2>
        <p>
          Our goal is to showcase as many talented data artists as possible,
          celebrating diverse voices and styles across the globe.
        </p>
        <p>
          Explore their unique creations and get inspired by the endless ways
          data can be transformed into art.
        </p>
      </div>

      <ArtistSection />

      <Spacing />

      <section className="relative bg-slate-50">
        <NoiseDivider height={10} />

        <div className="wrapper py-20">
          <h2 className="border-none !text-6xl ">
            <span className="block !text-4xl text-slate-400">Data Art</span>
            What's that?
          </h2>
          <p className="drop-cap">
            Data art is a creative practice that transforms raw data into
            visually compelling artworks. By blending aesthetics with
            information, data artists use charts, patterns, and interactive
            visuals to reveal stories, emotions, and insights hidden within
            datasets.{" "}
          </p>

          <p>
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
      <div className="wrapper">
        <h2 className="border-none !text-6xl ">
          <span className="block !text-4xl text-slate-400">What's up?</span>
          Latest
        </h2>
        <p>
          Data to Art is constantly growing, adding new artists and projects to
          the gallery as soon as we discover them. Here is our latest addition,
          but you can see all the available projects{" "}
          <Link href="/projects">here</Link>.
        </p>
        <div className="full-bleed">
          <div className="max-w-[900px] mx-auto">
            <FiveImgsGallery
              images={[
                "/project/florent-lavergne/wet-feet/01-full.webp",
                "/project/florent-lavergne/wet-feet/02-full.webp",
                "/project/florent-lavergne/wet-feet/03-full.webp",
                "/project/florent-lavergne/wet-feet/04-full.webp",
                "/project/florent-lavergne/wet-feet/05-full.webp",
              ]}
              height={400}
            />
          </div>
        </div>
        <div className="w-full flex gap-2 justify-center my-10">
          <Link
            href={"/ar"}
            className={cn(
              buttonVariants({ size: "lg", variant: "outline" }),
              "mb-12"
            )}
          >
            See all artists
          </Link>{" "}
          <Link
            href={"/projects"}
            className={cn(buttonVariants({ size: "lg" }), "mb-12")}
          >
            See all projects
          </Link>
        </div>
      </div>

      <section className="my-24 wrapper">
        <h2 className="border-none !text-6xl ">
          <span className="block !text-4xl text-slate-400">In real life</span>
          Exhibition
        </h2>
        <p>
          Data art is captivating on a screen, but its true magic comes alive in
          the real world—on a canvas you can see, touch, and feel.
        </p>
        <p>
          We highlight data art exhibitions happening worldwide, and even curate
          some ourselves. For inquiries, feel free to get in touch.
        </p>

        <div className="full-bleed my-12">
          <img src="/asset/gallery.jpg" className="h-72 w-full object-cover" />
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
  "/project/jeremy-wanner/glove-rose/02-full.webp",
  "/project/alisa-singer/environmental-graphiti/01-full.webp",
  "/project/laura-castro/fresquita-party/04-full.webp",
  "/project/alisa-singer/environmental-graphiti/06-medium.webp",
  "/project/nick-whiteley/vanishing-points/04-full.webp",
  "/project/soha-elghany/gaza/01-full.webp",
  "/project/alisa-singer/environmental-graphiti/04-full.webp",
  "/project/florent-lavergne/other/05-full.webp",
];
