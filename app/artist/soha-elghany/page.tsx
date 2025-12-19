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
import { QuoteSection } from "@/components/QuoteSection";

const ARTIST = "soha-elghany";

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
            Soha is a data visualisation designer that focuses on{" "}
            <b>humanising data through data art</b>.
          </p>
          <p>
            There is something about data when it comes to{" "}
            <b>real life events</b> and figuring out a way to visualise it in a
            way that can tell a powerful story and provoke emotion that she is
            passionate about, especially figuring out how to do provoke an
            emotional reaction from the audience.
          </p>
        </div>

        <div className="full-bleed">
          <div className="max-w-[1000px] mx-auto">
            <ImgWithCaption
              caption={
                <span>
                  The{" "}
                  <Link href="/artist/soha-elghany/missing-migrants">
                    Missing Migrants
                  </Link>{" "}
                  Project tracks people who died or went missing during
                  migration toward international destinations. Each spiral
                  represents a migration route, and each mark along it
                  corresponds to an individual incident.
                </span>
              }
              img={`/project/${ARTIST}/missing-migrants/01-full.webp`}
            />
          </div>
        </div>

        <div className="my-12">
          <p>
            We as human being are visual creatures and showing a spreadsheet of
            number does not tell a story that can tug at people's empathy level.
            Instead the <b>visual representation of that story</b> does a better
            job.
          </p>

          <QuoteSection text="We as human being are visual creatures and showing a spreadsheet of number does not tell a story" />

          <p>
            A recurring thread in Soha’s work is her commitment to topics that
            deeply matter. She chooses subjects rooted in human loss,
            displacement, and injustice, using data not to abstract these
            realities but to confront them directly.{" "}
          </p>
          <p>
            Her projects do not shy away from difficult narratives; instead,
            they give visibility to lives that are often reduced to statistics.
          </p>
        </div>

        <ArtistGallerySection imgs={allImages} />

        <Spacing />

        <ArtistProjectsSection artistId={ARTIST} />

        <h2 className="mb-4">Exhibition</h2>
        <p>
          Soha’s work was exhibited at the{" "}
          <a
            href="https://www.wakeupdataviz.com/exposition-urgence-climatique-sociale-dataviz"
            target="_blank"
          >
            Vizions d’urgence
          </a>{" "}
          event in France, and while no future exhibitions are scheduled at the
          moment, her projects continue to live online.
        </p>
        <div className="full-bleed">
          <div className="max-w-[1000px] mx-auto">
            <ImgWithCaption
              caption={
                <span>
                  Soha and her work{" "}
                  <Link href="/artist/soha-elghany/missing-migrants">
                    Missing Migrants
                  </Link>{" "}
                  exposed during the Vizions d'Urgence event.
                </span>
              }
              img={`/project/${ARTIST}/missing-migrants/06-full.webp`}
            />
          </div>
        </div>
      </div>

      <Contact />
    </>
  );
}
