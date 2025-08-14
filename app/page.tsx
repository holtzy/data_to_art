import MasonryGallery, { GalleryItem } from "@/components/MasonryGallery";
import Link from "next/link";
import LineChart from "./linechart/page";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Spacing } from "@/components/Spacing";
import FiveImgsGallery from "@/components/FiveImgsGallery";
import { NoiseDivider } from "@/components/NoiseDivider";
import { ArtistSection } from "@/components/section/ArtistSection";

export default function Home() {
  return (
    <div>
      <section className="relative flex flex-col justify-center items-center pt-20">
        <div className="absolute inset-0 flex items-center pt-20">
          <LineChart />
        </div>

        <div className="relative bg-gradient-to-r from-transparent via-white to-transparent px-40 pt-20 pb-4 flex flex-col items-center mt-20">
          <h1 className="font-brown-sugar text-7xl">
            Data is{" "}
            <span className="font-brown-sugar underline [text-decoration-thickness:1px] [text-underline-offset:14px]">
              beautiful
            </span>
          </h1>
          <p className="text-center max-w-96">
            We collect stunning works from the world’s most innovative data
            artists. Each piece transforms raw information into visual
            experiences that inspire, inform, and amaze.
          </p>
        </div>
      </section>
      <section>
        <div className="relative max-w-[900px] mx-auto h-[900px] overflow-hidden">
          <MasonryGallery items={BEST_IMAGES} />
          <div className="absolute top-0 left-0 w-full h-42 bg-gradient-to-b from-white to-transparent "></div>
          <div className="absolute bottom-0 left-0 w-full h-96 bg-gradient-to-t from-white to-transparent flex justify-center items-end">
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

      <ArtistSection />

      <Spacing />

      <section className="relative bg-slate-50">
        <NoiseDivider height={10} />

        <div className="wrapper py-20">
          <h2>What is Data Art?</h2>
          <p>
            Data art is a creative practice that transforms raw data into
            visually compelling artworks. By blending aesthetics with
            information, data artists use charts, patterns, and interactive
            visuals to reveal stories, emotions, and insights hidden within
            datasets.{" "}
          </p>

          <p>
            While data art and generative art both involve digital creativity,
            they are not the same. Data art specifically uses real-world data as
            its source material, aiming to visualize information, patterns, or
            stories embedded in that data. In contrast, generative art is
            created through algorithms and autonomous systems that generate
            visuals often without a direct connection to external data. Data art
            focuses on revealing meaning and insights from existing datasets,
            whereas generative art emphasizes process, randomness, and
            system-driven creativity.
          </p>
        </div>
      </section>
      <Spacing />
      <div className="wrapper">
        <h2>Feature project</h2>
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
      </div>
      <div className="wrapper my-36 ">
        <h2>Made with ❤️ from Frane</h2>
        <p>Who we are, why do we make this?</p>
      </div>
    </div>
  );
}

export const BEST_IMAGES = [
  {
    src: "/asset/white-bg-tiny.webp",
  },
  {
    src: "/asset/white-bg-small.webp",
  },
  {
    src: "/project/florent-lavergne/naturality/01-full.webp",
  },

  {
    src: "/project/florent-lavergne/naturality/02-full.webp",
  },
  {
    src: "/project/florent-lavergne/naturality/03-full.webp",
  },

  {
    src: "/project/florent-lavergne/naturality/06-full.webp",
  },
  {
    src: "/project/florent-lavergne/other/01-full.webp",
  },
  {
    src: "/project/florent-lavergne/other/02-full.webp",
  },
  {
    src: "/project/florent-lavergne/other/03-full.webp",
  },
  {
    src: "/project/florent-lavergne/other/04-full.webp",
  },
  {
    src: "/project/florent-lavergne/other/05-full.webp",
  },
  {
    src: "/project/florent-lavergne/other/06-full.webp",
  },
  {
    src: "/project/florent-lavergne/other/07-full.webp",
  },
  {
    src: "/project/florent-lavergne/wet-feet/01-full.webp",
  },
  {
    src: "/project/florent-lavergne/wet-feet/02-full.webp",
  },
  {
    src: "/project/florent-lavergne/wet-feet/03-full.webp",
  },
  {
    src: "/project/florent-lavergne/wet-feet/04-full.webp",
  },
  {
    src: "/project/florent-lavergne/wet-feet/05-full.webp",
  },
  {
    src: "/project/florent-lavergne/wet-feet/06-full.webp",
  },
  {
    src: "/project/jeremy-wanner/glove-rose/01-full.webp",
  },
  {
    src: "/project/jeremy-wanner/glove-rose/02-full.webp",
  },
  {
    src: "/project/jeremy-wanner/glove-rose/03-full.webp",
  },
  {
    src: "/project/jeremy-wanner/glove-rose/04-full.webp",
  },
  {
    src: "/project/laura-castro/dos-juegos/01-full.webp",
  },
  {
    src: "/project/laura-castro/dos-juegos/02-full.webp",
  },
  {
    src: "/project/laura-castro/dos-juegos/03-full.webp",
  },
  {
    src: "/project/laura-castro/dos-juegos/04-full.webp",
  },
  {
    src: "/project/laura-castro/dos-juegos/05-full.webp",
  },
  {
    src: "/project/laura-castro/dos-juegos/06-full.webp",
  },
  {
    src: "/project/laura-castro/fresquita-party/01-full.webp",
  },
  {
    src: "/project/laura-castro/fresquita-party/02-full.webp",
  },
  {
    src: "/project/laura-castro/fresquita-party/03-full.webp",
  },
  {
    src: "/project/laura-castro/fresquita-party/04-full.webp",
  },
  {
    src: "/project/laura-castro/fresquita-party/05-full.webp",
  },
  {
    src: "/project/nick-whiteley/vanishing-points/01-full.webp",
  },
  {
    src: "/project/nick-whiteley/vanishing-points/02-full.webp",
  },
  {
    src: "/project/soha-elghany/gaza/01-full.webp",
  },
  {
    src: "/project/soha-elghany/gaza/02-full.webp",
  },
];
