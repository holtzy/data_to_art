"use client";

// Gallery.tsx
import React from "react";
import { Masonry, RenderComponentProps } from "masonic";

export interface GalleryItem {
  src: string;
  title?: string;
}

interface MasonryGalleryProps {
  items: GalleryItem[];
}

export default function MasonryGallery({ items }: MasonryGalleryProps) {
  const Card: React.FC<RenderComponentProps<GalleryItem>> = ({
    width,
    data,
  }) => {
    return (
      <article
        style={{
          width,
          boxSizing: "border-box",
          padding: 8,
        }}
      >
        <div
          style={{
            width: "100%",
            borderRadius: 8,
            overflow: "hidden",
            background: "#f0f0f0",
          }}
        >
          <img
            src={data.src}
            alt={data.title || `img`}
            style={{
              width: "100%",
              height: "auto",
              display: "block",
              objectFit: "cover",
            }}
            loading="lazy"
          />
        </div>
        {data.title && (
          <h4 style={{ margin: "8px 0 0 0", fontSize: 13 }}>{data.title}</h4>
        )}
      </article>
    );
  };

  return (
    <Masonry<GalleryItem>
      items={items}
      render={Card}
      columnWidth={300}
      columnGutter={0}
      itemHeightEstimate={320}
      overscanBy={2}
    />
  );
}
