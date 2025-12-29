import { artistList } from "@/lib/artist-list";
import ArtistHero from "@/components/ArtistHero";
import Parallax from "@/components/Parallax";
import { Spacing } from "@/components/Spacing";
import { Contact } from "@/components/Contact";
import { ArtistProjectsSection } from "@/components/ArtistProjectsSection";
import { ArtistGallerySection } from "@/components/ArtistGallerySection";
import { getArtistImages } from "@/lib/get-artist-images";
import { ImgWithCaption } from "@/components/viz/ImgWithCaption";

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

      <div className="relative wrapper max-w-6xl mx-auto px-4">
        <div className="mb-12">
          <p className="drop-cap">
            Anne-Laure Fréant is a French artist and technical writer whose work
            explores how knowledge, memory, and environmental data can be
            embedded into physical forms. Her practice spans datasculpture,
            photography, and ceramics, transforming historical and scientific
            data into tangible, contemplative artworks.
          </p>
        </div>

        <Parallax
          text=""
          imageUrl="/project/anne-laure-freant/flood-necklace/01-full.webp"
        />

        <p className="drop-cap">
          From embedding Loire River flood data into ceramic spheres to
          visualizing seasonal river flows in wood, Anne-Laure’s work blends
          rigorous research with inventive storytelling, turning numbers into
          sculptural narratives.
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
              "The Life of a River" by Anne-Laure Fréant represents monthly
              water heights of the Loire River using stacked wooden discs,
              capturing seasonal variations from 2000 to 2022.
            </span>
          }
        />

        <p className="mt-4">
          Her datasculpture projects, including <em>The Flood Necklace</em> and{" "}
          <em>The Life of a River</em>, explore historical and hydrological
          phenomena, highlighting the interplay between data, memory, and
          materiality. Anne-Laure also documents her process and insights in
          dedicated blogs, contributing to research and reflection on data
          physicalization.
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
