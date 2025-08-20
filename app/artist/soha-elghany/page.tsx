import { artistList } from "@/lib/artist-list";
import { projectList } from "@/lib/project-list";
import Link from "next/link";
import ArtistHero from "@/components/ArtistHero";
import Parallax from "@/components/Parallax";
import { Spacing } from "@/components/Spacing";
import { Contact } from "@/components/Contact";
import { ArtistGallerySection } from "@/components/ArtistGallerySection";
import { getArtistImages } from "@/lib/get-artist-images";
import { ArtistProjectsSection } from "@/components/ArtistProjectsSection";

const ARTIST = "soha-elghany";

export default function Page() {
  const infos = artistList.find((a) => a.folder === ARTIST);
  if (!infos) {
    return null;
  }
  const allImages = getArtistImages(ARTIST);
  const { folder } = infos;

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

        <Parallax
          text=""
          imageUrl={`/project/${ARTIST}/missing-migrants/07-full.webp`}
        />

        <div className="my-12">
          <p>
            We as human being are visual creatures and showing a spreadsheet of
            number does not tell a story that can tug at people's empathy level.
            Instead the <b>visual representation of that story</b> does a better
            job.
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
