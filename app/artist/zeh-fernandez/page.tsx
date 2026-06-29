import { artistList } from "@/lib/artist-list";
import ArtistHero from "@/components/ArtistHero";
import { Spacing } from "@/components/Spacing";
import { Contact } from "@/components/Contact";
import { ArtistGallerySection } from "@/components/ArtistGallerySection";
import { getArtistImages } from "@/lib/get-artist-images";
import { ArtistProjectsSection } from "@/components/ArtistProjectsSection";
import Link from "next/link";
import { ImgWithCaption } from "@/components/viz/ImgWithCaption";
import { QuoteSection } from "@/components/QuoteSection";

const ARTIST = "zeh-fernandez";

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
          <p>
            Zeh Fernandes is a <b>Brazilian designer</b> working at the
            intersection of design, data, and technology. His practice explores
            how data and computation can unlock <b>new ways of understanding</b>,
            transforming complex systems into visual languages that are both
            expressive and precise.
          </p>
          <p>
            His work moves between product design, generative art, and branding.
            He is the creator of{" "}
            <Link href="/artist/zeh-fernandez/gencup">GenCup</Link>, a
            long-running project that turns live football data into visual
            compositions, capturing the emotional and temporal qualities of the
            game through code.
          </p>
        </div>

        <div className="full-bleed">
          <div className="max-w-[1000px] mx-auto">
            <ImgWithCaption
              caption={
                <span>
                  Each{" "}
                  <Link href="/artist/zeh-fernandez/gencup">GenCup</Link> poster
                  encodes a single match — possession, goals, passes and
                  intensity translated into shapes, densities and movement.
                </span>
              }
              img={`/project/${ARTIST}/gencup/2022/01-full.webp`}
            />
          </div>
        </div>

        <div className="my-12">
          <p>
            Across his projects, Zeh is interested in how patterns, abstraction,
            and perception can <b>reveal meaning before conscious analysis</b>.
            Operating hands-on across design and engineering, he builds tools,
            systems, and interfaces that augment human understanding.
          </p>

          <QuoteSection text="Our brain recognizes patterns far faster than it analyzes numbers. When you draw data in different ways, you create new pathways for understanding." />

          <p>
            His approach is influenced by modernist graphic design, computational
            thinking, and the evolving role of software as a creative medium.
          </p>
        </div>

        <ArtistGallerySection imgs={allImages} />

        <Spacing />

        <ArtistProjectsSection artistId={ARTIST} />

        <Spacing />
      </div>

      <Contact />
    </>
  );
}
