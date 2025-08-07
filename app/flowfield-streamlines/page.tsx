"use client";

import { useEffect, useRef } from "react";
import { createNoise2D } from "simplex-noise";

export default function FlowFieldStreamlines() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const width = (canvas.width = window.innerWidth);
    const height = (canvas.height = window.innerHeight);

    const noise2D = createNoise2D();

    // Same noise scale as your modified version
    const NOISE_SCALE = 0.001;

    // How many streamlines to draw
    const STREAMLINE_COUNT = 1250;

    // How many steps each streamline should take
    const STEPS_PER_LINE = 2000;

    // How far to move in each step (smaller = smoother lines)
    const STEP_SIZE = 3;

    // Function to get the direction at any point (same as before)
    function getFieldAngle(x: number, y: number): number {
      const noiseValue = noise2D(x * NOISE_SCALE, y * NOISE_SCALE);
      const angle = noiseValue * Math.PI * 2;
      return angle;
    }

    // Function to draw a single streamline
    function drawStreamline(startX: number, startY: number) {
      if (!ctx) return;

      // Start the path
      ctx.beginPath();
      ctx.moveTo(startX, startY);

      let currentX = startX;
      let currentY = startY;

      // Follow the flow field step by step
      for (let step = 0; step < STEPS_PER_LINE; step++) {
        // Get the direction at current position
        const angle = getFieldAngle(currentX, currentY);

        // Move in that direction
        const nextX = currentX + Math.cos(angle) * STEP_SIZE;
        const nextY = currentY + Math.sin(angle) * STEP_SIZE;

        // Draw a line to the new position
        ctx.lineTo(nextX, nextY);

        // Update current position
        currentX = nextX;
        currentY = nextY;

        // Stop if we go off screen
        if (
          currentX < 0 ||
          currentX > width ||
          currentY < 0 ||
          currentY > height
        ) {
          break;
        }
      }

      // Set line style and stroke
      ctx.strokeStyle = "grey";
      ctx.lineWidth = 1;
      ctx.stroke();
    }

    // Clear canvas
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, width, height);

    // Draw multiple streamlines starting from different points
    for (let i = 0; i < STREAMLINE_COUNT; i++) {
      // Start each line from a random position
      const startX = Math.random() * width;
      const startY = Math.random() * height;

      drawStreamline(startX, startY);
    }
  }, []);

  return (
    <div className="w-full h-screen ">
      <canvas
        ref={canvasRef}
        className="w-full h-full block"
        style={{ display: "block" }}
      />
    </div>
  );
}
