import { artistList } from "@/lib/artist-list";
import ArtistHero from "@/components/ArtistHero";
import Parallax from "@/components/Parallax";
import { Spacing } from "@/components/Spacing";
import { Contact } from "@/components/Contact";
import { ArtistGallerySection } from "@/components/ArtistGallerySection";
import { getArtistImages } from "@/lib/get-artist-images";
import { ArtistProjectsSection } from "@/components/ArtistProjectsSection";
import { ImgWithCaption } from "@/components/viz/ImgWithCaption";
import Link from "next/link";

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
            Based in the French Alps, Nick Whiteley is a designer and founder of{" "}
            <a href="https://totem-digital.com/en/" target="_blank">
              Totem Design
            </a>
            , a studio specializing in visual identity creation, web design, and
            digital strategy development.
          </p>
          <p>
            His approach combines aesthetics and commitment, with particular
            attention to the social and environmental impact of design.
          </p>
          <p>
            Inspired by a documentary on mountain gorillas, he turned to data
            visualization to raise awareness about species extinction and the
            degradation of natural habitats.
          </p>
        </div>

        <ImgWithCaption
          caption={
            <span>
              <Link href="/artist/nick-whiteley/vanishing-points">
                Vanishing Points
              </Link>{" "}
              visualizes endangered species populations, where each dot
              represents a living animal.
            </span>
          }
          img="/project/nick-whiteley/vanishing-points/01-full.webp"
        />

        <div className="my-12">
          <p>
            At the intersection of illustration and data, his work demonstrates
            a desire to make design a tool for understanding and emotional
            impact, serving real-world issues.
          </p>

          <p>
            Based in the French Alps, TOTEM is his small independent design
            practice that helps people build clearer brands, stronger websites,
            and lasting brand identities. It focuses on thoughtful, honest, and
            jargon-free design that helps businesses build a recognisable and
            reliable presence.
          </p>
        </div>

        <Spacing />

        <ArtistGallerySection imgs={allImages} />

        <Spacing />

        <ArtistProjectsSection artistId={ARTIST} />

        <h2 className="mb-4">Exhibition</h2>
        <p>
          Nick's work was exhibited at the{" "}
          <a
            href="https://www.wakeupdataviz.com/exposition-urgence-climatique-sociale-dataviz"
            target="_blank"
          >
            Vizions d’urgence
          </a>{" "}
          event in France, and while no future exhibitions are scheduled at the
          moment, his projects continue to live online.
        </p>
        <div className="full-bleed">
          <div className="max-w-[1000px] mx-auto">
            <ImgWithCaption
              caption={
                <span>
                  Nick's work{" "}
                  <Link href="/artist/nick-whiteley/vanishing-points">
                    Vanishing Points
                  </Link>{" "}
                  exposed during the Vizions d'Urgence event.
                </span>
              }
              img={`/project/nick-whiteley/vanishing-points/03-full.webp`}
            />
          </div>
        </div>

        <Spacing />
        <Spacing />

        <Contact />
      </div>
    </>
  );
}
