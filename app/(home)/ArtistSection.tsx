"use client";

import { Artist, artistList } from "@/lib/artist-list";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Activity, Home, Linkedin } from "lucide-react";
import { BubbleMap } from "@/components/viz/bubbleMap/BubbleMap";
import AvatarBeeswarm from "@/components/AvatarBeeswarm";
import { buttonVariants } from "@/components/ui/button";
import { EmailButton } from "@/components/EmailButton";

export const ArtistSection = () => {
  const [hovered, setHovered] = useState<null | Artist>(null);

  return (
    <>
      <div className="full-bleed ">
        <center className="my-12">
          <AvatarBeeswarm
            artistList={artistList}
            width={800}
            height={200}
            setHovered={setHovered}
            hovered={hovered}
          />
        </center>
      </div>

      <div className="wrapper relative">
        {/* <div className="absolute right-0 top-1/2 -translate-y-1/2">
        <BubbleMap width={400} height={400} selectedArtist={hovered} />
      </div> */}

        <div
          className="overflow-hidden transition-all duration-900 max-h-0"
          style={{ maxHeight: hovered ? 200 : 0 }}
        >
          <div className="p-2">
            <div className="flex gap-4 items-center">
              <span className="text-2xl font-bold">{hovered?.name}</span>

              <div className="flex gap-1 mb-1">
                {hovered?.linkedinLink && (
                  <Link
                    href={hovered.linkedinLink}
                    target="_blank"
                    className={buttonVariants({
                      variant: "outline",
                      size: "sm",
                    })}
                  >
                    <Linkedin stroke="none" fill="black" size={14} />
                  </Link>
                )}

                {hovered?.homepageLink && (
                  <Link
                    href={hovered.homepageLink}
                    target="_blank"
                    className={buttonVariants({
                      variant: "outline",
                      size: "sm",
                    })}
                  >
                    <Home stroke="black" fill="none" size={14} />
                  </Link>
                )}
              </div>
            </div>
            <span className="block text-sm text-slate-500">
              {hovered?.city}
            </span>
            <p className="text-sm">{hovered?.descriptionShort}</p>
            <div className="mt-4">
              <Link
                href={`artist/${hovered?.folder}`}
                className={buttonVariants()}
              >
                Visit artist's page
              </Link>
            </div>
          </div>
        </div>

        <div className="mx-auto my-12 opacity-85">
          <Activity />
        </div>
      </div>
    </>
  );
};
