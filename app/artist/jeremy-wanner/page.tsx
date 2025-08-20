import { artistList } from "@/lib/artist-list";
import ArtistHero from "@/components/ArtistHero";
import Parallax from "@/components/Parallax";
import { Spacing } from "@/components/Spacing";
import { Contact } from "@/components/Contact";
import { ArtistGallerySection } from "@/components/ArtistGallerySection";
import { getArtistImages } from "@/lib/get-artist-images";
import { ArtistProjectsSection } from "@/components/ArtistProjectsSection";

const ARTIST = "jeremy-wanner";

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
            I come from the Jura mountains where I spent my childhood between
            forest trails and sports fields. After following a sports-study
            training in handball until the baccalaureate, I moved to Switzerland
            to study biomechanics at the Swiss Federal Institute of Technology
            (EPFL) in Lausanne. During my studies, I passionately discovered the
            multiple facets of scientific outreach for the general public.
          </p>
        </div>

        <Parallax
          text=""
          imageUrl="/project/jeremy-wanner/glove-rose/01-full.webp"
        />

        <div className="my-12">
          <p className="first-letter:float-left first-letter:text-6xl first-letter:leading-none first-letter:mr-2 first-letter:font-bold">
            In 2020, I joined the French National Institute of Sport, Expertise,
            and Performance (INSEP) and its Medalability project as a
            data-scientist, analyzing international competition in preparation
            for the Paris 2024 Games. At the same time, I devoted my free time
            to turning everyday tools into means of artistic expression.
          </p>
          <p className="mt-4">
            Passionate about detours and creation, I founded Oiiwa in 2024. From
            my digital adventure playground, I transform a digital raw material
            into a fun and intelligible form.
          </p>
          <p className="mt-4">
            Aimed at a wide range of audiences and whether intended for printed,
            digital or plastic media, my creations are new ways of interacting
            with data by making them tangible and interactive!
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
