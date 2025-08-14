"use client";

import { Artist, artistList } from "@/lib/artist-list";
import AvatarBeeswarm from "../AvatarBeeswarm";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "../ui/button";
import { useState } from "react";
import { BubbleMap } from "../viz/bubbleMap/BubbleMap";

export const ArtistSection = () => {
  const [hovered, setHovered] = useState<null | Artist>(null);

  return (
    <div className="wrapper  relative">
      <div className="absolute right-0 top-1/2 -translate-y-1/2">
        <BubbleMap width={400} height={400} selectedArtist={hovered} />
      </div>

      <h2>{`${artistList.length} artists showcased`}</h2>
      <p>
        Our goal is to showcase as many talented data artists as possible,
        celebrating diverse voices and styles across the globe. Explore their
        unique creations and get inspired by the endless ways data can be
        transformed into art.
      </p>

      <center>
        <AvatarBeeswarm
          artistList={artistList}
          width={500}
          height={200}
          setHovered={setHovered}
        />
      </center>

      <div className="h-[300px]">
        {!hovered && (
          <div className="w-full flex gap-2 justify-center my-10">
            <Link
              href={"/artworks"}
              className={cn(
                buttonVariants({ size: "lg", variant: "outline" }),
                "mb-12"
              )}
            >
              See all artists
            </Link>{" "}
            <Link
              href={"/artists"}
              className={cn(buttonVariants({ size: "lg" }), "mb-12")}
            >
              Suggest an artist
            </Link>
          </div>
        )}

        {hovered && (
          <div>
            <span className="font-brown-sugar text-xl">{hovered.name}</span>
            <p>{hovered.descriptionShort}</p>
          </div>
        )}
      </div>
    </div>
  );
};
