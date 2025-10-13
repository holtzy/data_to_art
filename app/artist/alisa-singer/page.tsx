import { artistList } from "@/lib/artist-list";
import ArtistHero from "@/components/ArtistHero";
import Parallax from "@/components/Parallax";
import { Spacing } from "@/components/Spacing";
import { Contact } from "@/components/Contact";
import { ArtistProjectsSection } from "@/components/ArtistProjectsSection";
import { ArtistGallerySection } from "@/components/ArtistGallerySection";
import { getArtistImages } from "@/lib/get-artist-images";
import { ImgWithCaption } from "@/components/viz/ImgWithCaption";

const AUTHOR = "alisa-singer";

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
            Alisa Singer is a digital artist whose work transforms climate
            science, social issues, and personal experiences into vibrant,
            data-driven visual art. Her practice combines analytical research
            with creative storytelling to create compelling, visually engaging
            narratives.
          </p>
        </div>

        <Parallax
          text=""
          imageUrl="/project/alisa-singer/environmental-graphiti/04.webp"
        />

        <p className="first-letter:float-left first-letter:text-6xl first-letter:leading-none first-letter:mr-2 first-letter:font-bold">
          From translating complex climate data into striking visual statements
          to exploring social themes through digital painting, Alisa’s work is
          defined by clarity, vibrancy, and thought-provoking aesthetics.
        </p>
        <p className="mt-4">
          She collaborates with cultural institutions, environmental
          organizations, and tech platforms, turning information into art that
          resonates with diverse audiences. Each project is both an artistic
          expression and a tool for awareness and reflection.
        </p>

        <ImgWithCaption
          img="/project/alisa-singer/environmental-graphiti/06.webp"
          caption={
            <span>
              Walking into the moon by Alisa Singer shows the evolution of the
              number of kangarro. Read more about the environmental graphiti
              project it's part of.
            </span>
          }
        />

        <p className="mt-4">
          Her series, including <em>Environmental Graphiti</em> and{" "}
          <em>What's Your Mission?</em>, have been exhibited internationally and
          continue to push the boundaries of data-driven contemporary art.
        </p>

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
