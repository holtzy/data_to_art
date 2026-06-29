import { buttonVariants } from "./ui/button";
import { Artist } from "@/lib/artist-list";

type ArtistHeroProps = {
  artist: Artist;
};

export default function ArtistHero({ artist }: ArtistHeroProps) {
  const { folder, name, homepageLink, linkedinLink, descriptionShort } = artist;

  return (
    <section className="w-full flex items-center justify-center mt-40 mb-20">
      <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        {/* Column 1 — cover image (hidden on small screens) */}
        <div
          className="hidden lg:block w-80 aspect-[4/5] bg-cover bg-center shrink-0"
          style={{
            backgroundImage: `url("/project/${folder}/cover.webp")`,
          }}
        />

        {/* Column 2 — avatar, text and buttons */}
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left max-w-md">
          <img
            src={`/artist/${folder}.webp`}
            alt={name}
            className="w-40 h-40 rounded-full object-cover"
          />

          {/* Name + description kept tight together */}
          <div className="flex flex-col gap-0">
            <h1 className="!text-6xl lg:!text-7xl !font-normal !tracking-wide !leading-tight">
              {name}
            </h1>

            <p
              className="text-2xl tracking-wide !mt-0"
              style={{ lineHeight: 1.3 }}
            >
              {descriptionShort}
            </p>
          </div>

          <div className="flex gap-2 mt-8">
            {linkedinLink && (
              <a
                className={buttonVariants({ variant: "outline" })}
                href={linkedinLink}
                target="_blank"
              >
                LinkedIn
              </a>
            )}
            {homepageLink && (
              <a
                className={buttonVariants({ variant: "default" })}
                href={homepageLink}
                target="_blank"
              >
                Homepage
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
