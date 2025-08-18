"use client";

import React from "react";
import { Masonry, RenderComponentProps } from "masonic";
import { ImageWithModal } from "./ImageWithModal";

interface Item {
  imgPath: string;
}

interface MasonryGalleryProps {
  imgPaths: string[];
}

export default function MasonryGallery({ imgPaths }: MasonryGalleryProps) {
  // convert array of strings into array of objects
  const items: Item[] = imgPaths.map((p) => ({ imgPath: p }));

  const Card = ({ width, data }: RenderComponentProps<Item>) => {
    return <ImageWithModal width={width} imgPath={data.imgPath} />;
  };

  return (
    <Masonry<Item>
      items={items} // Note: I cannot use an array of strings here, this is why I had to make this items object
      render={Card}
      columnWidth={300}
      columnGutter={0}
      itemHeightEstimate={320}
      overscanBy={2}
    />
  );
}
