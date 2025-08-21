import { artistList } from "@/lib/artist-list";
import ArtistHero from "@/components/ArtistHero";
import Parallax from "@/components/Parallax";
import { Spacing } from "@/components/Spacing";
import { Contact } from "@/components/Contact";
import { ArtistGallerySection } from "@/components/ArtistGallerySection";
import { getArtistImages } from "@/lib/get-artist-images";
import { ArtistProjectsSection } from "@/components/ArtistProjectsSection";

const ARTIST = "nick-whiteley";

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
            Based in the French Alps, Nick Whiteley is a designer and founder of
            TOTEM Design Company, a studio specializing in visual identity
            creation, web design, and digital strategy development.
          </p>
          <p>
            His approach combines aesthetics and commitment, with particular
            attention to the social and environmental impact of design. Inspired
            by a documentary on mountain gorillas, he turned to data
            visualization to raise awareness about species extinction and the
            degradation of natural habitats.
          </p>
          <p>
            At the intersection of illustration and data, his work demonstrates
            a desire to make design a tool for understanding and emotional
            impact, serving real-world issues.
          </p>
        </div>

        <Parallax
          text=""
          imageUrl="/project/nick-whiteley/vanishing-points/01-full.webp"
        />

        <div className="my-12">
          <p className="first-letter:float-left first-letter:text-6xl first-letter:leading-none first-letter:mr-2 first-letter:font-bold">
            Based in the French Alps, TOTEM is a small independent design
            practice that helps people build clearer brands, stronger websites,
            and lasting brand identities. Led by designer Nick Whiteley, TOTEM
            focuses on thoughtful, honest, and jargon-free design that helps
            businesses build a recognisable and reliable presence.
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
