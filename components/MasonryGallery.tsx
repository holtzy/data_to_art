"use client";

// Gallery.tsx
import React from "react";
import { Masonry, RenderComponentProps } from "masonic";
import { ImageWithModal, ImageWithModalProps } from "./ImageWithModal";

interface MasonryGalleryProps {
  items: ImageWithModalProps[];
}

export default function MasonryGallery({ items }: MasonryGalleryProps) {
  const Card = ({ width, data }: RenderComponentProps<ImageWithModalProps>) => {
    return (
      <ImageWithModal width={width} project={data.project} src={data.src} />
    );
  };

  return (
    <Masonry<ImageWithModalProps>
      items={items}
      render={Card}
      columnWidth={300}
      columnGutter={0}
      itemHeightEstimate={320}
      overscanBy={2}
    />
  );
}
