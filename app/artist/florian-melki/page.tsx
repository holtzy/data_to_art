import { artistList } from "@/lib/artist-list";
import Link from "next/link";
import ArtistHero from "@/components/ArtistHero";
import Parallax from "@/components/Parallax";
import { Spacing } from "@/components/Spacing";
import { Contact } from "@/components/Contact";
import { ImgWithCaption } from "@/components/viz/ImgWithCaption";
import { ArtistProjectsSection } from "@/components/ArtistProjectsSection";
import { ArtistGallerySection } from "@/components/ArtistGallerySection";
import { getArtistImages } from "@/lib/get-artist-images";

const AUTHOR = "florian-melki";

export default function Page() {
  const infos = artistList.find((a) => a.folder === AUTHOR);

  if (!infos) {
    return null;
  }

  const allImages = getArtistImages(AUTHOR);

  return (
    <>
      <ArtistHero artist={infos} />

      <Spacing />

      <div className="relative wrapper max-w-6xl mx-auto px-4">
        <div className="mb-12">
          <p className="drop-cap">
            Florian is passionate about observing and studying human behavior.
            His guiding principle is simple: the idea comes first; technical
            constraints come later. After all, walls are meant to be broken.
          </p>
          <p>
            For example, he wrote every single day—when he went to bed, woke up,
            worked, and so on—for an entire year, just to uncover hidden
            patterns. He scraped every post from an online forum on a
            controversial topic (women in video games) to analyze how
            conversations unfold. He even transcribed a two-hour political TV
            debate to study manterrupting. No limits, no walls.
          </p>
        </div>

        <Parallax
          text=""
          imageUrl={`/project/${AUTHOR}/missing-time/06-full.webp`}
        />

        <p className="first-letter:float-left first-letter:text-6xl first-letter:leading-none first-letter:mr-2 first-letter:font-bold">
          Then comes his favorite part: experimenting with data visualization.
          As a data analyst, I dive into data from a statistical perspective to
          identify trends. Then I code my own visualizations from scratch,
          testing and iterating to discover new, creative ways of telling a
          story.
        </p>
        <p className="mt-4">
          I truly believe that data visualization can make stories more
          powerful—revealing what’s hidden, explaining what’s really happening,
          and shining a light on the unseen. Finally, the aesthetic side of my
          work is a way to move people. Data can be tough and overwhelming, and
          art makes it more human, more engaging, and easier to grasp.
        </p>

        <ImgWithCaption
          img={"/project/florian-melki/missing-time/07-full.webp"}
          caption={
            <span>
              "Le temps qui nous manque" (the time we miss). Read the full{" "}
              <Link href="">project description</Link>.
            </span>
          }
        />

        <ArtistGallerySection imgs={allImages} />

        <ArtistProjectsSection artistId={AUTHOR} />

        <h2 className="mb-4">Exhibition</h2>
        <p className="mb-12">
          No exhibitions are planned for this artist at the moment.
        </p>
      </div>
      <Contact />
    </>
  );
}
