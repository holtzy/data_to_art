import { createNoise2D } from "simplex-noise";
import { useMemo } from "react";

export function NoiseDivider({ height = 40, points = 50 }) {
  const pathData = useMemo(() => {
    const noise2D = createNoise2D();
    const amp = height * 0.4;
    let d = `M 0 ${height / 2}`;
    for (let i = 0; i <= points; i++) {
      const x = (i / points) * 100;
      const y = height / 2 + noise2D(i / 10, 0) * amp; // Adjust 1/10 for more/less wobbles
      d += ` L ${x} ${y}`;
    }
    d += ` V ${height} H 0 Z`;
    return d;
  }, [height, points]);

  return (
    <svg
      className="absolute top-0 left-0 w-full -translate-y-full"
      viewBox={`0 0 100 ${height}`}
      preserveAspectRatio="none"
    >
      <path d={pathData} fill="#f8fafc" />
    </svg>
  );
}
