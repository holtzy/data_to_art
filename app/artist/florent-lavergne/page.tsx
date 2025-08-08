import { Button, buttonVariants } from "@/components/ui/button";
import { artistList } from "@/lib/artist-list";
import { projectList } from "@/lib/project-list";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function Page() {
  const infos = artistList.find((a) => a.folder === "florent-lavergne");

  if (!infos) {
    return null;
  }

  const { name, folder, homepageLink, linkedinLink } = infos;

  return (
    <div className="wrapper py-52">
      <img
        src={"/artist/" + folder + ".webp"}
        className="rounded-full w-40 h-40"
      />

      <h1>{name}</h1>

      <p>A french visual practionner with a taste for this and that.</p>

      <div className="flex gap-2">
        {homepageLink && (
          <Link
            className={cn(buttonVariants({ size: "sm" }))}
            href={homepageLink}
          >
            Homepage
          </Link>
        )}
        {linkedinLink && (
          <Link
            className={cn(buttonVariants({ size: "sm" }))}
            href={linkedinLink}
          >
            LinkedIn
          </Link>
        )}
      </div>

      <h2>Bio</h2>
      <div className="">
        <p className="first-letter:float-left first-letter:text-6xl first-letter:leading-none first-letter:mr-2 first-letter:font-bold">
          Florent is an information designer focused on geospatial and
          environmental data, working with Microsoft's AI For Good Lab.
        </p>
        <p>
          He loves exploring the intersection of data and art, and turning
          complex and difficult topics into inviting visual experiences. I use
          3D tools and photo editing techniques to achieve the natural textures
          and color palettes that define my graphic identity.
        </p>
      </div>

      <section className="full-bleed my-8">
        <div className="h-[400px] bg-fixed bg-center bg-cover bg-[url('/project/florent-lavergne/wet-feet/04-full.webp')]">
          <div className="h-full flex items-center justify-center bg-black/0">
            <h1 className="text-5xl text-white font-bold">Parallax Effect</h1>
          </div>
        </div>
      </section>

      <div className="">
        <p className="first-letter:float-left first-letter:text-6xl first-letter:leading-none first-letter:mr-2 first-letter:font-bold">
          Florent is an information designer focused on geospatial and
          environmental data, working with Microsoft's AI For Good Lab.
        </p>
        <p>
          He loves exploring the intersection of data and art, and turning
          complex and difficult topics into inviting visual experiences. I use
          3D tools and photo editing techniques to achieve the natural textures
          and color palettes that define my graphic identity.
        </p>
      </div>

      <h2>Gallery</h2>

      <h2>Projects</h2>
      <div className="flex gap-2">
        {projectList
          .filter((p) => p.artist === folder)
          .map((p, i) => {
            return (
              <Link key={i} href={`/project/${p.folder}`}>
                <div className="flex flex-col gap-2">
                  <img src={`/project/${folder}/${p.folder}/01-thumb.webp`} />
                  <span>{p.name}</span>
                  <div className="text-xs text-slate-500 !no-underline">
                    {p.descriptionShort}
                  </div>
                </div>
              </Link>
            );
          })}
      </div>

      <h2>Exhibition</h2>
      <p>There is no exhibition planned for this artist yet.</p>

      <section className="full-bleed bg-slate-50 my-20 py-20">
        <div className="wrapper">
          <h2>Know an artist?</h2>
          <p>Contact us!</p>
        </div>
      </section>
    </div>
  );
}
