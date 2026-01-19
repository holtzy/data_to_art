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

      <div className="relative wrapper mx-auto px-4">
        <div className="mb-12">
          <p className="drop-cap">
            Originally from the Pays Horloger in the Jura mountain range, Jeremy
            spent his childhood between forest trails and sports fields. After
            completing a sport-study program in handball, he moved to
            Switzerland to study biomechanics at the École Polytechnique
            Fédérale de Lausanne (EPFL).
          </p>
          <p>
            During his studies, he developed a strong interest in the many
            facets of science communication and public engagement.
          </p>
        </div>

        <Parallax
          imageUrl="/project/jeremy-wanner/glove-rose/02-full.webp"
          caption={
            <span>
              <Link href="/artist/jeremy-wanner/glove-rose">Glove rose</Link>{" "}
              transforms Olympic boxing analytics into a blooming digital rose
            </span>
          }
        />

        <p className="drop-cap">
          In 2020, he joined the French National Institute of Sport, Expertise
          and Performance (INSEP), where he became part of the Médaillabilité
          project, analyzing international competition in preparation for the
          Paris 2024 Games. Alongside his professional work, he dedicates his
          free time to repurposing the tools of his daily data-science practice
          as means of artistic expression.
        </p>
        <p className="mt-4">
          In 2024, he founded the data visualization studio{" "}
          <a href="https://oiiwa.fr" target="_blank">
            Oiiwa
          </a>
          , drawing both its name and inspiration from the heart of the
          Haut-Doubs region. It is there that he now brings together his
          passions for data science, performance, and artistic practices.
        </p>

        <div className="full-bleed my-12">
          <div className="">
            <img
              src="/project/jeremy-wanner/glove-rose/01-full.webp"
              className="w-full"
            />
            <div className="flex justify-end">
              <p className="text-slate-500 text-sm text-right max-w-[250px] mt-4 !leading-snug">
                <span>
                  <Link href="/artist/jeremy-wanner/glove-rose">
                    Glove rose
                  </Link>{" "}
                </span>
              </p>
            </div>
          </div>
        </div>

        <p className="mt-4">
          Designed for a wide range of audiences and adaptable to printed,
          digital, or plastic media, his creations provide new ways to interact
          with data by making it tangible and interactive.
        </p>

        <Spacing />

        <ArtistProjectsSection artistId={ARTIST} />
      </div>

      <Spacing />

      <div className="wrapper">
        <h2 className="mb-4">Exhibition</h2>
        <p>
          Jeremy's work was exhibited at the{" "}
          <a
            href="https://www.wakeupdataviz.com/trajectoires-sport-data"
            target="_blank"
          >
            Trajectoires
          </a>{" "}
          event in France, and while no future exhibitions are scheduled at the
          moment, his projects continue to live online.
        </p>
      </div>
      <div className="full-bleed mt-8 bg-red-50">
        <div className="px-2 flex gap-2">
          <img
            src="/project/jeremy-wanner/glove-rose/05.JPG"
            className="w-1/3 h-[300px] object-cover"
          />
          <img
            src="/project/jeremy-wanner/glove-rose/06.JPG"
            className="w-1/3 h-[300px] object-cover"
          />
          <img
            src="/project/jeremy-wanner/glove-rose/07.JPG"
            className="w-1/3 h-[300px] object-cover"
          />
        </div>
      </div>

      <Spacing />
      <Spacing />
      <Spacing />

      <div className="full-bleed">
        <Contact />
      </div>
    </>
  );
}
