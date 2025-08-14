import React, { useMemo } from "react";
import * as d3 from "d3";

type Artist = {
  folder: string;
  // You can add other fields like name, followers, etc.
};

interface AvatarCirclePackingProps {
  artistList: Artist[];
  width?: number;
  height?: number;
}

export default function AvatarCirclePacking({
  artistList,
  width = 500,
  height = 500,
}: AvatarCirclePackingProps) {
  const packedData = useMemo(() => {
    // Create a hierarchy with random values for size
    const root = d3
      .hierarchy<{ folder: string }>({
        children: artistList.map((a) => ({
          ...a,
          value: Math.random() * 100 + 20, // random size
        })),
      })
      .sum((d) => (d as any).value); // TS doesn't know about .value

    return d3
      .pack<typeof root.data>()
      .size([width, height])
      .padding(2)(root)
      .leaves();
  }, [artistList, width, height]);

  return (
    <svg width={width} height={height}>
      <defs>
        {packedData.map((d, i) => (
          <clipPath key={i} id={`clip-${i}`}>
            <circle cx={d.x} cy={d.y} r={d.r} />
          </clipPath>
        ))}
      </defs>

      {packedData.map((d, i) => (
        <g key={i}>
          <image
            href={`/artist/${d.data.folder}.webp`}
            clipPath={`url(#clip-${i})`}
            x={d.x - d.r}
            y={d.y - d.r}
            width={d.r * 2}
            height={d.r * 2}
            preserveAspectRatio="xMidYMid slice"
          />
          {/* Optional border stroke */}
          <circle
            cx={d.x}
            cy={d.y}
            r={d.r}
            fill="none"
            stroke="white"
            strokeWidth={2}
          />
        </g>
      ))}
    </svg>
  );
}
