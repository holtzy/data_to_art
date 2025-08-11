"use client";

import MasonryGallery, { GalleryItem } from "@/components/MasonryGallery";
import Link from "next/link";
import { useState } from "react";
import LineChart from "./linechart/page";

export default function Home() {
  const [items, setItems] = useState<GalleryItem[]>(FRONT_PAGE_IMAGES);

  const loadMore = () => {
    // Example: append 20 more items
    const nextItems = Array.from({ length: 20 }, (_, i) => {
      const id = items.length + i;
      return {
        src: `https://picsum.photos/seed/${id}/400/300`,
        title: `Artwork #${id + 1}`,
      };
    });
    setItems((prev) => [...prev, ...nextItems]);
  };

  return (
    <div>
      <section className="relative h-screen flex flex-col justify-center items-center">
        <div className="absolute inset-0 flex items-center">
          <LineChart />
        </div>

        <div className="relative bg-white/70 p-20 flex flex-col items-center">
          <h1>Data To Art</h1>
          <p className="text-center max-w-96">
            A curated collection of stunning works from the world’s most
            innovative data artists. Each piece transforms raw information into
            visual experiences that inspire, inform, and amaze.
          </p>
        </div>
      </section>

      <section>
        <div className="wrapper -my-40">
          <MasonryGallery items={items} loadMore={loadMore} />
        </div>
      </section>

      <Link href="/artists">Artists</Link>
      <Link href="/projects">Projects</Link>
    </div>
  );
}

const FRONT_PAGE_IMAGES = [
  {
    src: "/project/florent-lavergne/other/01-medium.webp",
  },
  {
    src: "/project/florent-lavergne/other/02-medium.webp",
  },
  {
    src: "/project/florent-lavergne/other/03-medium.webp",
  },
  {
    src: "/project/florent-lavergne/other/04-medium.webp",
  },
  {
    src: "/project/florent-lavergne/other/05-medium.webp",
  },
  {
    src: "/project/florent-lavergne/other/06-medium.webp",
  },
  {
    src: "/project/florent-lavergne/wet-feet/01-medium.webp",
  },
  {
    src: "/project/florent-lavergne/wet-feet/02-medium.webp",
  },
  {
    src: "/project/florent-lavergne/wet-feet/03-medium.webp",
  },
  {
    src: "/project/florent-lavergne/wet-feet/04-medium.webp",
  },
  {
    src: "/project/florent-lavergne/wet-feet/05-medium.webp",
  },
  {
    src: "/project/florent-lavergne/wet-feet/06-medium.webp",
  },
];
