import { artistList } from "@/lib/artist-list";
import ArtistHero from "@/components/ArtistHero";
import { Spacing } from "@/components/Spacing";
import { Contact } from "@/components/Contact";
import { ArtistGallerySection } from "@/components/ArtistGallerySection";
import { getArtistImages } from "@/lib/get-artist-images";
import { ArtistProjectsSection } from "@/components/ArtistProjectsSection";
import Link from "next/link";
import { ImgWithCaption } from "@/components/viz/ImgWithCaption";

const ARTIST = "nadieh-bremer";

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
        <div className="mb-12">
          <p className="drop-cap">
            Nadieh Bremer is an <b>award-winning data visualization designer</b>{" "}
            and data artist. With a background as an <b>astronomer</b> and
            former data scientist, she ultimately found her true passion in the
            art of visualizing data.
          </p>
          <p>
            A recipient of the &ldquo;Best Individual&rdquo; award at the
            Information is Beautiful Awards, and (co-)writer of{" "}
            <i>Data Sketches</i> and her new book <i>CHART</i>, Nadieh works with
            clients such as Google News Lab, Sony Music, UNICEF, The New York
            Times, Scientific American and UNESCO. She particularly loves
            exploring the intersection of <b>science and pop culture</b>.
          </p>
        </div>

        <div className="full-bleed">
          <div className="max-w-[1000px] mx-auto">
            <ImgWithCaption
              caption={
                <span>
                  The giant nest from{" "}
                  <Link href="/artist/nadieh-bremer/searching-for-birds">
                    Searching for Birds
                  </Link>
                  , Nadieh&apos;s favorite piece.
                </span>
              }
              img={`/project/${ARTIST}/searching-for-birds/01-full.webp`}
            />
          </div>
        </div>

        <div className="my-12">
          <p>
            At the heart of her practice is the creation of{" "}
            <b>bespoke visuals, uniquely crafted for each dataset</b>. She tells
            stories from data in ways that are both unique and effective,
            favoring designs that first capture the eye before guiding the
            viewer into a deeper understanding of the underlying information.
          </p>
          <p>
            Her work often transforms large, complex datasets into engaging
            visuals, frequently through <b>vibrant color palettes</b>.
          </p>
        </div>

        <div className="full-bleed">
          <div className="max-w-[1000px] mx-auto">
            <ImgWithCaption
              caption={
                <span>
                  The five pieces of{" "}
                  <Link href="/artist/nadieh-bremer/elemental-flows">
                    Elemental Flows
                  </Link>
                  : Earth, Sun, Water, Digital and Air.
                </span>
              }
              img={`/project/${ARTIST}/elemental-flows/01-full.webp`}
            />
          </div>
        </div>

        <p>
          Nadieh programs all her visualizations with <b>JavaScript and D3.js</b>
          , using them to create both data-driven experiences and data art. For
          static pieces, she occasionally uses Affinity Designer for the final
          textual touches.
        </p>

        <p className="text-xs text-slate-500 mb-12">
          Portrait photo: <a href="https://piek.cc" target="_blank">Piek.cc</a>
        </p>

        <ArtistGallerySection imgs={allImages} />

        <Spacing />

        <ArtistProjectsSection artistId={ARTIST} />

        <Spacing />
      </div>

      <Contact />
    </>
  );
}
