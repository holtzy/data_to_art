"use client";

import { createNoise2D } from "simplex-noise";
import { useMemo, useState, useEffect } from "react";

export function NoiseDivider({ height = 40, points = 50 }) {
  const [mouseY, setMouseY] = useState(0);

  // Track mouse Y position
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMouseY(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const noise2D = useMemo(() => {
    return createNoise2D();
  }, []);

  const pathData = useMemo(() => {
    const amp = height * 0.4;

    // Scale mouse Y so noise changes smoothly
    const my = mouseY * 0.002;

    let d = `M 0 ${height / 2}`;
    for (let i = 0; i <= points; i++) {
      const x = (i / points) * 100;
      const y = height / 2 + noise2D(i / 10, my) * amp; // only mouse Y affects the second dimension
      d += ` L ${x} ${y}`;
    }
    d += ` V ${height} H 0 Z`;
    return d;
  }, [height, points, mouseY]);

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
