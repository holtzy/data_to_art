"use client";

import { useEffect, useRef } from "react";
import { createNoise2D } from "simplex-noise";

export default function FlowFieldSimple() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    // Get the canvas element and its 2D drawing context
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size to window size
    const width = (canvas.width = window.innerWidth);
    const height = (canvas.height = window.innerHeight);

    // Create a noise function - this generates smooth random values
    // Think of it like a mathematical function that takes x,y coordinates
    // and returns a smooth random number between -1 and 1
    const noise2D = createNoise2D();

    // This controls how "zoomed in" or "zoomed out" the noise pattern is
    // Smaller values = more zoomed out (larger features)
    // Larger values = more zoomed in (smaller features)
    const NOISE_SCALE = 0.0005;

    // How far apart each arrow should be drawn
    const ARROW_SPACING = 20;

    // How long each arrow should be
    const ARROW_LENGTH = 20;

    // Function to get the angle (direction) at any point in the field
    function getFieldAngle(x: number, y: number): number {
      // Sample the noise at this position
      // The noise function returns a value between -1 and 1
      const noiseValue = noise2D(x * NOISE_SCALE, y * NOISE_SCALE);

      // Convert the noise value to an angle
      // We multiply by Math.PI * 2 to get a full circle (0 to 2π radians)
      const angle = noiseValue * Math.PI * 2;

      return angle;
    }

    // Function to draw a single arrow at a given position
    function drawArrow(x: number, y: number, angle: number) {
      if (!ctx) return;

      // Calculate the end point of the arrow
      const endX = x + Math.cos(angle) * ARROW_LENGTH;
      const endY = y + Math.sin(angle) * ARROW_LENGTH;

      // Draw the main line of the arrow
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(endX, endY);
      ctx.strokeStyle = "white";
      ctx.lineWidth = 1;
      ctx.stroke();
    }

    // Clear the canvas with black background
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, width, height);

    // Draw arrows across the entire canvas
    // We step by ARROW_SPACING to avoid drawing too many arrows
    for (let y = ARROW_SPACING; y < height; y += ARROW_SPACING) {
      for (let x = ARROW_SPACING; x < width; x += ARROW_SPACING) {
        // Get the direction (angle) at this position
        const angle = getFieldAngle(x, y);

        // Draw an arrow pointing in that direction
        drawArrow(x, y, angle);
      }
    }
  }, []); // Empty dependency array means this runs once when component mounts

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
