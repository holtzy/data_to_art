import { artistList } from "@/lib/artist-list";
import ArtistHero from "@/components/ArtistHero";
import Parallax from "@/components/Parallax";
import { Spacing } from "@/components/Spacing";
import { Contact } from "@/components/Contact";
import { ArtistGallerySection } from "@/components/ArtistGallerySection";
import { getArtistImages } from "@/lib/get-artist-images";
import { ArtistProjectsSection } from "@/components/ArtistProjectsSection";

const ARTIST = "marlene-dorgny";

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
            Marlene Dorgny is a French information designer who discovered data
            visualization after a client once asked her, “how can we make this
            table look nice?” She found a discipline where analysis meets
            design, where meaning comes before beauty, and where form serves
            substance.
          </p>
        </div>

        <Parallax
          text=""
          imageUrl="/project/marlene-dorgny/riot/02-full.webp"
        />

        <div className="my-12">
          <p className="first-letter:float-left first-letter:text-6xl first-letter:leading-none first-letter:mr-2 first-letter:font-bold">
            For Marlene, diving into data, uncovering the story behind it, and
            structuring it into clear and useful insights is always a
            fascinating journey. Her process blends curiosity, analytical rigor,
            and a strong sense of visual clarity.
          </p>
          <p className="mt-4">
            In 2018, she began visualizing a book about the Manchester music
            scene, told through personal testimonies of people crossing paths,
            connecting, and making music together. This project sparked a
            lasting passion for network mapping — a way to show relationships,
            encounters, and collaborations through data.
          </p>
          <p className="mt-4">
            Today, her work continues to explore how thoughtful design can
            transform complexity into understanding, combining narrative and
            structure to make information both accessible and engaging.
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
