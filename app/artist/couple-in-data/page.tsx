import { artistList } from "@/lib/artist-list";
import ArtistHero from "@/components/ArtistHero";
import { Spacing } from "@/components/Spacing";
import { Contact } from "@/components/Contact";
import { ArtistProjectsSection } from "@/components/ArtistProjectsSection";
import { ArtistGallerySection } from "@/components/ArtistGallerySection";
import { getArtistImages } from "@/lib/get-artist-images";
import { ImgWithCaption } from "@/components/viz/ImgWithCaption";
import { QuoteSection } from "@/components/QuoteSection";
import Link from "next/link";

const AUTHOR = "couple-in-data";

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

      <div className="relative wrapper mx-auto px-4">
        <div className="mb-12">
          <p className="drop-cap">
            Couple in Data is a studio that moves between art, design, and data,
            always seeking ways to reconnect people, technology, and the world
            we inhabit.
          </p>
          <p>
            Instead of treating information as something abstract, they bring it
            back into space and into the body through installations, objects,
            and experiences that can be felt and shared.
          </p>
        </div>

        <ImgWithCaption
          img="/project/couple-in-data/human-rights-fans/01-full.webp"
          caption={
            <span>
              <Link href="/artist/couple-in-data/human-rights-fans">
                Human Rights Fans
              </Link>{" "}
              — a scarf visualizing the thousands of migrant workers who died
              building the stadiums for the Qatar World Cup.
            </span>
          }
        />

        <div className="my-12">
          <p className="drop-cap">
            The studio was born from the meeting of two people whose bond of
            love naturally expanded into a shared creative journey. Johana
            Dueñas, with her sensitivity for visual storytelling and material
            culture, and Eduardo España, with his passion for data and
            experimental design, discovered in each other not only a life
            companion but also a partner in exploration.
          </p>
          <p className="mt-4">
            Their practice emerges from this dialogue, where affection and
            curiosity intertwine, allowing design to become both a language of
            intimacy and a tool for reimagining the world.
          </p>
        </div>

        <QuoteSection text="Through the staging of everyday objects — medicines, belts, garbage bags, sausages, pizzas, knives, or even dogs — Couple in Data make data related to political, geopolitical, and social issues visible, shifting data visualization beyond the screen and anchoring it in the physical world." />
        <p className="text-right text-sm text-muted-foreground italic -mt-16 mb-20">
          — Marthe Viallet
        </p>

        <div className="my-12">
          <p className="drop-cap">
            They create new ways of seeing and narrating, drawing fluid maps
            that resist boundaries and widen the horizon of what design tied to
            activism can set in motion. Their approach carries information
            outside the digital plane, slowing its pace, giving it form, and
            turning it into a call for collective imagination.
          </p>
          <p className="mt-4">
            Rather than providing fixed answers, each project they make opens
            spaces of encounter — moments where data becomes story, algorithms
            turn into gestures, and technology becomes a shared ground for
            reflection and change.
          </p>
        </div>

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
