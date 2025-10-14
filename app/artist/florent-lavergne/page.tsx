import { artistList } from "@/lib/artist-list";
import ArtistHero from "@/components/ArtistHero";
import Parallax from "@/components/Parallax";
import { Spacing } from "@/components/Spacing";
import { Contact } from "@/components/Contact";
import { ArtistGallerySection } from "@/components/ArtistGallerySection";
import { getArtistImages } from "@/lib/get-artist-images";
import { ArtistProjectsSection } from "@/components/ArtistProjectsSection";
import Link from "next/link";
import { ImgWithCaption } from "@/components/viz/ImgWithCaption";

const ARTIST = "florent-lavergne";

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

      <div className="wrapper">
        <p className="drop-cap">
          Florent Lavergne is an information designer specializing in geospatial
          and environmental data. At Microsoft’s AI For Good Lab, he creates
          innovative visual narratives that make complex scientific and social
          topics accessible and engaging to diverse audiences.
        </p>
        <p className="!mb-12">
          Deeply passionate about the intersection of data and art, Florent
          transforms raw information into immersive visual experiences.
        </p>

        <Parallax
          text=""
          imageUrl="/project/florent-lavergne/wet-feet/04-full.webp"
          caption={
            <span>
              Overview of the{" "}
              <Link href="/artist/florent-lavergne/wet-feet">Wet Feet</Link>{" "}
              project, where Florent studied coastal flood risk.
            </span>
          }
        />

        <p className="drop-cap">
          Using advanced 3D tools and photo editing techniques, he crafts
          natural textures and harmonious color palettes that define a unique
          graphic identity.
        </p>
        <p className="mt-4">
          His work reflects a commitment to illuminating environmental
          challenges and human stories, bridging science, policy, and society
          with clarity and beauty. Florent’s designs invite viewers not only to
          understand data but to feel it — inspiring curiosity, empathy, and
          action.
        </p>

        <div className="full-bleed">
          <ImgWithCaption
            img="/project/florent-lavergne/naturality/01-full.webp"
            caption={
              <span>
                In his project{" "}
                <Link href="/artist/florent-lavergne/wet-feet">Naturality</Link>
                , Florent measures the extent of human impact on ecosystems.
              </span>
            }
          />
        </div>

        <p className="mt-4">
          With years of experience blending technical precision and creative
          expression, he pushes the boundaries of information design to create
          artworks that are both scientifically rigorous and visually
          captivating.
        </p>

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
