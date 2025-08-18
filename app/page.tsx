import MasonryGallery from "@/components/MasonryGallery";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Spacing } from "@/components/Spacing";
import FiveImgsGallery from "@/components/FiveImgsGallery";
import { NoiseDivider } from "@/components/NoiseDivider";
import { ArtistSection } from "@/components/section/ArtistSection";
import Parallax from "@/components/Parallax";
import { Slider } from "@/components/ui/slider";
import LineChart from "@/components/LineChart";
import { Quote } from "lucide-react";

export default function Home() {
  return (
    <div>
      <section className="relative flex flex-col justify-center items-center pt-20">
        <div className="absolute inset-0 flex items-center pt-20">
          <LineChart />
        </div>

        <div className="relative bg-gradient-to-r from-transparent via-white to-transparent px-40 pt-14 pb-4 flex flex-col items-center mt-20">
          <div>
            <div className="w-full flex justify-end">
              <span className="text-slate-600 text-md text-right uppercase font-extralight mb-2 tracking-wider">
                Dive into the
              </span>
            </div>
            <h1 className="font-brown-sugar text-7xl">
              <span className="font-brown-sugar underline [text-decoration-thickness:1px] [text-underline-offset:14px]">
                beauty
              </span>{" "}
              of data
            </h1>
          </div>
          <p className="text-center max-w-[500px]">
            We collect stunning works from the world’s most innovative data
            artists. Each piece transforms raw information into visual
            experiences that inspire, inform, and amaze.
          </p>
        </div>
      </section>
      <section>
        <div className="relative max-w-[900px] mx-auto h-[900px] overflow-hidden">
          <MasonryGallery imgPaths={BEST_IMAGES} />
          <div className="absolute top-0 left-0 w-full h-42 bg-gradient-to-b from-white to-transparent pointer-events-none"></div>
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

          <div className="flex gap-6 items-center justify-center mt-8">
            <span className="uppercase font-light">More Science</span>
            <Slider
              defaultValue={[60]}
              max={100}
              step={20}
              className={cn("w-[200px]")}
            />
            <span>More Art</span>
          </div>

          <Parallax
            text=""
            imageUrl="/project/florent-lavergne/wet-feet/04-full.webp"
          />

          <p>
            While data art and generative art both involve digital creativity,
            they are not the same. Data art specifically uses real-world data as
            its source material, aiming to visualize information, patterns, or
            stories embedded in that data.
          </p>

          <div className="full-bleed my-20">
            <div className="relative flex justify-center max-w-[700px] mx-auto">
              <div className="absolute -top-4 -left-8">
                <Quote />
              </div>
              <div className="absolute -bottom-4 -right-8">
                <Quote />
              </div>
              <span className="font-brown-sugar text-4xl ">
                The intersection between science and art is something magical
              </span>
            </div>
          </div>

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
        <h2>Latest project</h2>
        <p>
          Data to Art is constantly growing, adding new artists and projects to
          the gallery as soon as we discover them. Here is our latest addition,
          but you can see all the available projects here.
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

      <div className="wrapper my-36 ">
        <h2>Made with ❤️ from Frane</h2>
        <p>Who we are, why do we make this?</p>
      </div>
    </div>
  );
}

export const BEST_IMAGES = [
  "/asset/white-bg-tiny.webp",
  "/asset/white-bg-small.webp",
  "/project/florent-lavergne/naturality/01-full.webp",
  "/project/florent-lavergne/naturality/02-full.webp",
  "/project/florent-lavergne/naturality/03-full.webp",
  "/project/florent-lavergne/naturality/06-full.webp",
  "/project/florent-lavergne/other/01-full.webp",
  "/project/florent-lavergne/other/02-full.webp",
  "/project/florent-lavergne/other/03-full.webp",
  "/project/florent-lavergne/other/04-full.webp",
  "/project/florent-lavergne/other/05-full.webp",
  "/project/florent-lavergne/other/06-full.webp",
  "/project/florent-lavergne/other/07-full.webp",
  "/project/florent-lavergne/wet-feet/01-full.webp",
  "/project/florent-lavergne/wet-feet/02-full.webp",
  "/project/florent-lavergne/wet-feet/03-full.webp",
  "/project/florent-lavergne/wet-feet/04-full.webp",
  "/project/florent-lavergne/wet-feet/05-full.webp",
  "/project/florent-lavergne/wet-feet/06-full.webp",
  "/project/jeremy-wanner/glove-rose/01-full.webp",
  "/project/jeremy-wanner/glove-rose/02-full.webp",
  "/project/jeremy-wanner/glove-rose/03-full.webp",
  "/project/jeremy-wanner/glove-rose/04-full.webp",
  "/project/laura-castro/dos-juegos/01-full.webp",
  "/project/laura-castro/dos-juegos/02-full.webp",
  "/project/laura-castro/dos-juegos/03-full.webp",
  "/project/laura-castro/dos-juegos/04-full.webp",
  "/project/laura-castro/dos-juegos/05-full.webp",
  "/project/laura-castro/dos-juegos/06-full.webp",
  "/project/laura-castro/fresquita-party/01-full.webp",
  "/project/laura-castro/fresquita-party/02-full.webp",
  "/project/laura-castro/fresquita-party/03-full.webp",
  "/project/laura-castro/fresquita-party/04-full.webp",
  "/project/florent-lavergne/other/01-full.webp",
  "/project/florent-lavergne/other/02-full.webp",
  "/project/florent-lavergne/other/03-full.webp",
  "/project/florent-lavergne/other/04-full.webp",
  "/project/florent-lavergne/other/05-full.webp",
  "/project/florent-lavergne/other/06-full.webp",
  "/project/florent-lavergne/other/07-full.webp",
  "/project/florent-lavergne/wet-feet/01-full.webp",
  "/project/florent-lavergne/wet-feet/02-full.webp",
  "/project/florent-lavergne/wet-feet/03-full.webp",
  "/project/florent-lavergne/wet-feet/04-full.webp",
  "/project/florent-lavergne/wet-feet/05-full.webp",
  "/project/florent-lavergne/wet-feet/06-full.webp",
  "/project/jeremy-wanner/glove-rose/01-full.webp",
  "/project/jeremy-wanner/glove-rose/02-full.webp",
  "/project/jeremy-wanner/glove-rose/03-full.webp",
  "/project/jeremy-wanner/glove-rose/04-full.webp",
  "/project/laura-castro/dos-juegos/01-full.webp",
  "/project/laura-castro/dos-juegos/02-full.webp",
  "/project/laura-castro/dos-juegos/03-full.webp",
  "/project/laura-castro/dos-juegos/04-full.webp",
  "/project/laura-castro/dos-juegos/05-full.webp",
  "/project/laura-castro/dos-juegos/06-full.webp",
  "/project/laura-castro/fresquita-party/01-full.webp",
  "/project/laura-castro/fresquita-party/02-full.webp",
  "/project/laura-castro/fresquita-party/03-full.webp",
  "/project/laura-castro/fresquita-party/04-full.webp",
  "/project/laura-castro/fresquita-party/05-full.webp",
  "/project/nick-whiteley/vanishing-points/01-full.webp",
  "/project/nick-whiteley/vanishing-points/02-full.webp",
  "/project/soha-elghany/gaza/01-full.webp",
  "/project/soha-elghany/gaza/02-full.webp",
];
