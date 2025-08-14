"use client";

import { geoOrthographic, geoPath } from "d3-geo";
import { CircleItem } from "./CircleItem";

import styles from "./bubble-map.module.css";
import { useRef } from "react";
import { geoData } from "./GeoData";
import { Artist, artistList } from "@/lib/artist-list";

type BubbleMapProps = {
  width: number;
  height: number;
  selectedArtist: Artist;
};

export const BubbleMap = ({
  width,
  height,
  selectedArtist,
}: BubbleMapProps) => {
  const bubbleContainerRef = useRef(null);

  const projection = geoOrthographic()
    .rotate(selectedArtist?.location || [20, 10])
    .scale(100)
    .translate([width / 2, height / 2]);

  const geoPathGenerator = geoPath().projection(projection);

  const allSvgPaths = geoData.features
    .filter((shape) => shape.id !== "ATA")
    .map((shape) => {
      return (
        <path
          key={shape.id}
          d={geoPathGenerator(shape)}
          stroke="lightGrey"
          strokeWidth={0.5}
          fill="grey"
          fillOpacity={0.7}
        />
      );
    });

  //
  //
  // ALL ARTISTS
  //
  //
  const allBubbles = artistList.map((a) => {
    const [x, y] = projection(a.location);

    const color = "blue";

    const r = 14;
    //   selectedIsland === island.name || !selectedIsland
    //     ? bubbleSize * 2
    //     : bubbleSize;

    return (
      <g className={styles.circleContainer} key={a.folder}>
        <CircleItem
          x={x}
          y={y}
          r={r}
          color={color}
          //   onClick={() => {
          //     setSelectedIsland(island.name);
          //   }}
        />
      </g>
    );
  });

  return (
    <div>
      <svg width={width} height={height}>
        {allSvgPaths}
        <g
          ref={bubbleContainerRef}
          onMouseOver={() => {
            if (bubbleContainerRef.current) {
              bubbleContainerRef.current.classList.add(styles.hasHighlight);
            }
          }}
          onMouseLeave={() => {
            if (bubbleContainerRef.current) {
              bubbleContainerRef.current.classList.remove(styles.hasHighlight);
            }
          }}
        >
          {allBubbles}
        </g>
      </svg>
    </div>
  );
};
