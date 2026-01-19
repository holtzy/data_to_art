import { artistList } from "@/lib/artist-list";
import ArtistHero from "@/components/ArtistHero";
import { Spacing } from "@/components/Spacing";
import { Contact } from "@/components/Contact";
import { ArtistProjectsSection } from "@/components/ArtistProjectsSection";
import { ArtistGallerySection } from "@/components/ArtistGallerySection";
import { getArtistImages } from "@/lib/get-artist-images";
import { ImgWithCaption } from "@/components/viz/ImgWithCaption";
import Link from "next/link";

const AUTHOR = "cinzia-bongino";

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
            Cinzia Bongino is a multidisciplinary designer working across
            information, UX/UI, web, and editorial design. Her practice blends
            rigorous data research with clear visual storytelling, resulting in
            projects that make complex subjects accessible and engaging.
          </p>
        </div>

        <ImgWithCaption
          caption={
            <p>
              Interactive installation at the{" "}
              <Link href="/artist/cinzia-bongino/waste-streams">
                Turn Signals – Design is not a Dashboard
              </Link>{" "}
              exhibition.
            </p>
          }
          img="/project/cinzia-bongino/waste-streams/10-full.webp"
        />

        <div className="my-12">
          <p className="drop-cap">
            Whether translating advanced climate models into intuitive tools,
            illustrating the history of satellites in orbit, or designing
            engaging editorial pieces, Cinzia’s work is defined by clarity,
            accessibility, and care for visual detail.
          </p>
          <p className="mt-4">
            She collaborates with institutions, startups, and cultural
            organizations, bridging technical precision with creative
            expression. From interactive dashboards to printed posters, her
            designs invite audiences to explore, learn, and reflect.
          </p>
          <p className="mt-4">
            In addition to her design practice, Cinzia teaches UX/UI design and
            data visualization at institutions such as IED and CFP Bauer Milano,
            fostering the next generation of designers through a mix of theory,
            critical thinking, and hands-on practice.
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
