import { artistList } from "@/lib/artist-list";
import ArtistHero from "@/components/ArtistHero";
import Parallax from "@/components/Parallax";
import { Spacing } from "@/components/Spacing";
import { Contact } from "@/components/Contact";
import { ArtistGallerySection } from "@/components/ArtistGallerySection";
import { getArtistImages } from "@/lib/get-artist-images";
import { ArtistProjectsSection } from "@/components/ArtistProjectsSection";

const ARTIST = "laura-castro";

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
            Laura Castro is an independent Information & Product Designer based
            in Zurich, passionate about creating user-centered digital products
            and visually compelling data stories. With a background spanning
            both product and information design, she specializes in transforming
            complex ideas into clear, engaging solutions that inform and
            inspire.
          </p>
        </div>

        <Parallax
          text=""
          imageUrl="/project/laura-castro/fresquita-party/01-full.webp"
        />

        <div className="my-12">
          <p className="first-letter:float-left first-letter:text-6xl first-letter:leading-none first-letter:mr-2 first-letter:font-bold">
            Throughout her career, Laura has designed digital products and
            experiences for a wide range of companies, including Novartis,
            Affective Advisory, Graphext, Accurat, and Interactius. Her journey
            has taken her across Spain, Italy, Australia, and now Switzerland,
            enriching her practice with diverse cultural and professional
            perspectives.
          </p>
          <p className="mt-4">
            She thrives on turning complex concepts into elegant, human-centered
            solutions that balance clarity with creativity. With expertise in
            both product design and information design, Laura’s work bridges the
            gap between functionality and beauty.
          </p>
          <p className="mt-4">
            In 2024, she will serve on the judging panel for the Information is
            Beautiful Awards — an exciting opportunity to collaborate with
            fellow professionals, explore what makes a visualization
            award-worthy, and celebrate innovation and creativity in the field.
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

        <Contact />
      </div>
    </>
  );
}
