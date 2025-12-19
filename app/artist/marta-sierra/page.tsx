import { artistList } from "@/lib/artist-list";
import ArtistHero from "@/components/ArtistHero";
import Parallax from "@/components/Parallax";
import { Spacing } from "@/components/Spacing";
import { Contact } from "@/components/Contact";
import { ArtistGallerySection } from "@/components/ArtistGallerySection";
import { getArtistImages } from "@/lib/get-artist-images";
import { ArtistProjectsSection } from "@/components/ArtistProjectsSection";

const ARTIST = "marta-sierra";

export default function Page() {
  const infos = artistList.find((a) => a.folder === ARTIST);
  if (!infos) {
    return null;
  }
  const allImages = getArtistImages(ARTIST);

  return (
    <>
      <ArtistHero artist={infos} />

      <Spacing />

      <div className="relative wrapper max-w-6xl mx-auto px-4">
        <div className="mb-12">
          <p className="drop-cap">
            Marta Sierra is an Amsterdam-based information designer who
            transforms complex data into meaningful, <b>human-centered</b>{" "}
            visual stories. With a background in information design, she loves
            distilling complexity and exploring creative, intuitive ways to
            represent information.
          </p>
          <p>
            Her goal is to make data not only understandable and accessible but
            also <b>visually captivating</b> and emotionally resonant.
          </p>
        </div>

        <Parallax
          text=""
          imageUrl="/project/marta-sierra/inner-metrics/01-full.webp"
        />

        <div className="my-12">
          <p className="first-letter:float-left first-letter:text-6xl first-letter:leading-none first-letter:mr-2 first-letter:font-bold">
            Her personal work goes beyond traditional charts, blending data,
            emotion, and self-awareness. Marta collects data about her own
            habits, moods, and memories, then turns them into handmade visual
            pieces.
          </p>
          <p>
            This slow, reflective process helps her listen to herself and
            express what words often can’t capture. The result is a body of work
            that feels both analytical and deeply personal—where data becomes a
            mirror for the inner world.
          </p>
          <p className="mt-4">
            Marta’s creations often connect to broader themes such as
            sustainability, well-being, and social awareness. By revealing the
            human stories within data, she invites viewers to reflect on their
            own experiences and relationships with information.
          </p>
          <p>
            Her participation in the <b>#journaldataviz</b> challenge in 2022,
            where she created both handmade and digital visualizations from
            personal data, perfectly embodies her approach: blending rigor,
            creativity, and emotion to turn data into art.
          </p>
        </div>

        <Spacing />

        <ArtistGallerySection imgs={allImages} />

        <Spacing />

        <ArtistProjectsSection artistId={ARTIST} />

        <h2 className="mb-4">Exhibition</h2>
        <p className="mb-12">
          No exhibitions are planned for this artist at the moment.
        </p>
      </div>

      <Contact />
    </>
  );
}
