"use client";

import dynamic from "next/dynamic";

const MasonryGallery = dynamic(() => import("@/components/MasonryGallery"), {
  ssr: false,
});

interface GalleryClientProps {
  imgPaths: string[];
}

export default function GalleryClient({ imgPaths }: GalleryClientProps) {
  return <MasonryGallery imgPaths={imgPaths} />;
}
