import React, { useMemo } from "react";
import * as d3 from "d3";

type Artist = {
  folder: string;
};

interface AvatarBeeswarmProps {
  artistList: Artist[];
  width?: number;
  height?: number;
}

export default function AvatarBeeswarm({
  artistList,
  width = 800,
  height = 200,
}: AvatarBeeswarmProps) {
  const nodes = useMemo(() => {
    // Assign random radius to each node
    const initialNodes = artistList.map((a) => ({
      ...a,
      r: Math.random() * 25 + 20, // 20-45px radius
    }));

    // Force simulation for beeswarm layout
    const simulation = d3
      .forceSimulation(initialNodes)
      .force(
        "x",
        d3.forceX((_, i) => (i / initialNodes.length) * width).strength(0.5)
      )
      .force("y", d3.forceY(height / 2).strength(0.05))
      .force(
        "collide",
        d3.forceCollide<Artist & { r: number }>((d) => d.r + 2)
      )
      .stop();

    // Run the simulation offline
    for (let i = 0; i < 300; i++) simulation.tick();

    return simulation.nodes();
  }, [artistList, width, height]);

  return (
    <svg width={width} height={height} className="overflow-visible">
      <defs>
        {nodes.map((d, i) => (
          <clipPath key={i} id={`clip-${i}`}>
            <circle cx={d.x!} cy={d.y!} r={d.r} />
          </clipPath>
        ))}
      </defs>

      {nodes.map((d, i) => (
        <g key={i}>
          <image
            href={`/artist/${d.folder}.webp`}
            clipPath={`url(#clip-${i})`}
            x={d.x! - d.r}
            y={d.y! - d.r}
            width={d.r * 2}
            height={d.r * 2}
            preserveAspectRatio="xMidYMid slice"
          />
          <circle
            cx={d.x!}
            cy={d.y!}
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
