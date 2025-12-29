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
import FiveImgsGallery from "@/components/FiveImgsGallery";

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

      <div className="relative wrapper mx-auto px-4">
        <div className="mb-12">
          <p className="drop-cap">
            Alisa Singer is a Chicago-based digital artist whose work transforms
            scientific data, social issues, and personal narratives into vibrant
            visual compositions.
          </p>
          <p>
            Her practice bridges analysis and emotion, using data as raw
            material for contemporary art that invites reflection and dialogue.
          </p>
        </div>

        <Parallax
          caption={
            <span>
              Alisa’s work is organized into a project titled{" "}
              <Link href="/artist/alisa-singer/environmental-graphiti">
                Environmental Graphiti
              </Link>
              .
            </span>
          }
          imageUrl="/project/alisa-singer/environmental-graphiti/01.webp"
        />

        <p className="drop-cap">
          From climate science and environmental systems to questions of
          identity, justice, and resilience, Singer’s work translates complex
          information into bold, accessible visual statements.
        </p>

        <p className="mt-4">
          Color, structure, and repetition play a central role in making
          abstract data tangible and emotionally resonant. Her projects often
          emerge from close collaboration with scientists, cultural
          institutions, and advocacy organizations.
        </p>

        <ImgWithCaption
          img="/project/alisa-singer/environmental-graphiti/06.webp"
          caption={
            <span>
              <em>Walking into the Moon</em> explores the evolution of kangaroo
              populations through layered data-driven imagery, part of the
              <em> Environmental Graphiti</em> series.
            </span>
          }
        />

        <p className="mt-4">
          By recontextualizing charts, maps, and numbers, Singer turns data into
          visual stories that reach beyond traditional scientific audiences. Her
          series, including{" "}
          <Link href="/artist/alisa-singer/environmental-graphiti">
            Environmental Graphiti
          </Link>{" "}
          and <em>What’s Your Mission?</em>, have been exhibited
          internationally.
        </p>

        <ArtistGallerySection imgs={allImages} />

        <ArtistProjectsSection artistId={AUTHOR} />

        <h2 className="mb-4">Exhibitions</h2>
        <p>
          Alisa’s work has been exhibited in numerous renowned exhibitions. You
          can{" "}
          <a
            href="https://www.alisasingerart.com/exhibit-or-acquire"
            target="_blank"
          >
            contact her here
          </a>{" "}
          to organize an exhibition or to acquire an artwork.
        </p>
      </div>

      <div className="full-bleed">
        <div className="max-w-[900px] mx-auto">
          <FiveImgsGallery
            images={[
              "/project/alisa-singer/environmental-graphiti/09.webp",
              "/project/alisa-singer/environmental-graphiti/10.webp",
              "/project/alisa-singer/environmental-graphiti/11.webp",
              "/project/alisa-singer/environmental-graphiti/12.webp",
              "/project/alisa-singer/environmental-graphiti/07-full.webp",
            ]}
            height={400}
          />
        </div>
      </div>

      <Spacing />

      <Contact />
    </>
  );
}
