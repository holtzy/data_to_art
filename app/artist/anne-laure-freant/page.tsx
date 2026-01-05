import { artistList } from "@/lib/artist-list";
import ArtistHero from "@/components/ArtistHero";
import Parallax from "@/components/Parallax";
import { Spacing } from "@/components/Spacing";
import { Contact } from "@/components/Contact";
import { ArtistProjectsSection } from "@/components/ArtistProjectsSection";
import { ArtistGallerySection } from "@/components/ArtistGallerySection";
import { getArtistImages } from "@/lib/get-artist-images";
import { ImgWithCaption } from "@/components/viz/ImgWithCaption";
import Link from "next/link";

const AUTHOR = "anne-laure-freant";

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
            Anne-Laure Fréant is a French artist and technical writer whose work
            explores how knowledge, memory, and environmental data can be
            embedded into physical forms.
          </p>
          <p>
            Her practice spans datasculpture, photography, and ceramics,
            transforming historical and scientific data into tangible,
            contemplative artworks.
          </p>
        </div>

        <ImgWithCaption
          caption={
            <span>
              <Link href="/artist/anne-laure-freant/flood-necklace">
                Flood Necklace
              </Link>{" "}
              is a ceramic datasculpture made from Loire Valley clay, where each
              sphere represents a recorded flood of the Loire River
            </span>
          }
          img="/project/anne-laure-freant/flood-necklace/08-full.webp"
        />

        <p className="drop-cap">
          From embedding Loire River flood data into{" "}
          <Link href="/artist/anne-laure-freant/flood-necklace">
            ceramic spheres
          </Link>{" "}
          to visualizing seasonal{" "}
          <Link href="/artist/anne-laure-freant/life-of-a-river">
            river flows
          </Link>{" "}
          in wood, Anne-Laure’s work blends rigorous research with inventive
          storytelling, turning numbers into sculptural narratives.
        </p>
        <p className="mt-4">
          She investigates how technical and environmental knowledge can be
          represented and archived across time, drawing from geography,
          environmental history, and the history of technology. Each project
          combines scientific data with aesthetic experimentation, creating
          works that are both informative and visually striking.
        </p>

        <ImgWithCaption
          img="/project/anne-laure-freant/life-of-a-river/01-full.webp"
          caption={
            <span>
              The{" "}
              <Link href="/artist/anne-laure-freant/life-of-a-river">
                Life of a River
              </Link>{" "}
              by represents monthly water heights of the Loire River using
              stacked wooden discs, capturing seasonal variations from 2000 to
              2022.
            </span>
          }
        />

        <p className="mt-4">
          Her datasculpture projects, including{" "}
          <Link href="/artist/anne-laure-freant/flood-necklace">
            The Flood Necklace
          </Link>{" "}
          and{" "}
          <Link href="/artist/anne-laure-freant/life-of-a-river">
            The Life of a River
          </Link>
          , explore historical and hydrological phenomena, highlighting the
          interplay between data, memory, and materiality.
        </p>
        <p>
          Anne-Laure also documents her process and insights in dedicated{" "}
          <a
            href="https://anne-laure-freant.gitbook.io/art-gallery"
            target="_blank"
          >
            blogs
          </a>
          , contributing to research and reflection on data physicalization.
        </p>

        <ArtistGallerySection imgs={allImages} />

        <ArtistProjectsSection artistId={AUTHOR} />

        <h2 className="mb-4">Exhibition</h2>
        <p className="mb-12">
          Anne-Laure’s work has been exhibited in virtual galleries and academic
          contexts, and continues to explore the intersection of data,
          geography, and sculptural practice.
        </p>
      </div>
      <Contact />
    </>
  );
}
