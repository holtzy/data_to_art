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

  // Seeded random so the server and the browser draw the same wave
  // (an unseeded noise caused a hydration mismatch).
  const noise2D = useMemo(() => {
    let seed = 42;
    const random = () => {
      seed = (seed + 0x6d2b79f5) | 0;
      let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
      t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
    return createNoise2D(random);
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
      <path d={pathData} fill="#f1f5f9" />
    </svg>
  );
}
