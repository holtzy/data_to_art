"use client";

import { useEffect, useRef } from "react";
import { createNoise3D } from "simplex-noise";

const OFFSET = 0.01;

export default function Noise3D() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const width = (canvas.width = window.innerWidth);
    const height = (canvas.height = window.innerHeight);

    const noise3D = createNoise3D();

    const imageData = ctx.createImageData(width, height);

    let time = 0;

    function drawFrame() {
      for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
          // Use 3D noise with x, y, and time as the third dimension
          const value = noise3D(x * OFFSET, y * OFFSET, time);

          // Map the noise value to different color schemes
          const normalizedValue = (value + 1) * 0.5; // Normalize to 0-1

          // Create a more complex color mapping
          const r = Math.floor(normalizedValue * 255);
          const g = Math.floor((1 - normalizedValue) * 255);
          const b = Math.floor(Math.sin(normalizedValue * Math.PI) * 255);

          const index = (x + y * width) * 4;
          imageData.data[index] = r; // R
          imageData.data[index + 1] = g; // G
          imageData.data[index + 2] = b; // B
          imageData.data[index + 3] = 255; // A
        }
      }
      ctx.putImageData(imageData, 0, 0);
      time += 0.01; // Slightly faster animation for 3D effect
      requestAnimationFrame(drawFrame);
    }

    drawFrame();

    // Cleanup function
    return () => {
      // Cancel any pending animation frames if component unmounts
    };
  }, []);

  return (
    <div className="w-full h-screen bg-black">
      <canvas
        ref={canvasRef}
        className="w-full h-full block"
        style={{ display: "block" }}
      />
    </div>
  );
}
