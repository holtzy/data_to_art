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

const AUTHOR = "loud-numbers";

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
            Loud Numbers explores what happens to data when we stop looking at
            it and begin to listen. At the crossroads of sound, music and
            analysis, the studio approaches data sonification as an artistic
            language in its own right, a way of making invisible phenomena
            audible and revealing rhythms where there once were only numbers.
          </p>
          <p>
            Founded by Miriam Quick and Duncan Geere, Loud Numbers treats sound
            as a space for the sensitive interpretation of data. Where data
            visualisation often encourages a direct, frontal reading,
            sonification opens up a more diffuse, immersive and intimate
            experience that unfolds over time. Data is no longer static. It
            vibrates, repeats, intensifies or falls silent.
          </p>
        </div>

        <ImgWithCaption
          img="/project/loud-numbers/scorched-earth/01-full.webp"
          caption={
            <span>
              <Link href="/artist/loud-numbers/scorched-earth">
                Scorched Earth
              </Link>{" "}
              — an audiovisual artwork based on daily fire counts from the
              Swedish county of Skåne during the extreme summer of 2018.
            </span>
          }
        />

        <div className="my-12">
          <p className="drop-cap">
            Since the launch of the Loud Numbers podcast in 2019, the studio has
            been developing sonic works in which scientific rigour sits alongside
            musical composition. Each project is built on a precise translation
            of data into sound parameters such as pitch, tempo, texture and
            intensity, without reducing sound to a simple illustration. The
            resulting compositions are conceived as genuine listening pieces,
            capable of conveying information while also creating an emotional
            experience.
          </p>
        </div>

        <QuoteSection text="Loud Numbers does not simply aim to make data audible, but to turn listening into an act of sensitive understanding." />
        <p className="text-right text-sm text-muted-foreground italic -mt-16 mb-20">
          — Marthe Viallet
        </p>

        <div className="my-12">
          <p className="drop-cap">
            Through installations, radio broadcasts and experimental audio
            formats, Loud Numbers questions our relationship to data in a world
            saturated with screens. By inviting audiences to listen to what is
            usually shown, the studio encourages a shift in perception, allowing
            systems, flows and dynamics that shape our environment to be
            experienced differently.
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
