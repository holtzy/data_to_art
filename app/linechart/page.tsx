"use client";

import { useEffect, useRef } from "react";
import { createNoise2D } from "simplex-noise";

type LineState = {
  startTime: number;
  noiseSeed: number;
  phase: "appearing" | "disappearing";
};

export default function LineChart() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const width = (canvas.width = window.innerWidth);
    const height = (canvas.height = 400); // Fixed height for chart

    const noise2D = createNoise2D();
    const NOISE_SCALE = 0.008;
    const AMPLITUDE = height * 0.8;
    const OFFSET_Y = height / 2;

    const LINE_COUNT = 12;
    const ANIMATION_DURATION = 8800; // ms for a line to fully draw
    const STAGGER_MAX = 1200; // max ms delay for a line to start
    const FADE_DURATION = 1200; // ms for a line to fade out

    // Each line has its own animation state
    const lines: LineState[] = Array.from({ length: LINE_COUNT }, () => ({
      startTime: performance.now() + Math.random() * STAGGER_MAX,
      noiseSeed: Math.random() * 10000,
      phase: "appearing",
    }));

    function resetLine(line: LineState, now: number) {
      line.startTime = now + Math.random() * STAGGER_MAX;
      line.noiseSeed = Math.random() * 10000;
      line.phase = "appearing";
    }

    function drawFrame() {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);
      const now = performance.now();
      for (let l = 0; l < LINE_COUNT; l++) {
        const line = lines[l];
        ctx.beginPath();
        let progress = (now - line.startTime) / ANIMATION_DURATION;
        if (line.phase === "appearing") {
          if (progress >= 1) {
            // Switch to disappearing phase
            line.phase = "disappearing";
            line.startTime = now;
            progress = 1;
          }
        } else if (line.phase === "disappearing") {
          const fadeProgress = (now - line.startTime) / FADE_DURATION;
          if (fadeProgress >= 1) {
            // Reset line
            resetLine(line, now);
            continue;
          }
          // For disappearing, draw only the rightmost (1-fadeProgress) part
          progress = 1;
          // We'll use fadeProgress to determine the left cutoff
        }
        const noiseSeed = line.noiseSeed;
        let minX = 0;
        const maxX = Math.floor(progress * (width - 1));
        if (line.phase === "disappearing") {
          const fadeProgress = (now - line.startTime) / FADE_DURATION;
          minX = Math.floor(fadeProgress * (width - 1));
        }
        for (let x = minX; x <= maxX; x++) {
          const prog = x / (width - 1);
          const progressiveAmplitude =
            AMPLITUDE * 0.7 * prog * (0.5 + (l / (LINE_COUNT - 1)) * 0.8);
          const noiseValue = noise2D(x * NOISE_SCALE, noiseSeed);
          const y = OFFSET_Y + noiseValue * progressiveAmplitude;
          if (x === minX) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }
        ctx.strokeStyle = "black"; //`hsl(${210 + l * 8}, 70%, 55%)`;
        ctx.lineWidth = 1;
        ctx.globalAlpha = 0.4;
        ctx.stroke();
      }
      ctx.globalAlpha = 1;
      requestAnimationFrame(drawFrame);
    }
    drawFrame();
    // Cleanup on unmount
    return () => {
      if (ctx) ctx.clearRect(0, 0, width, height);
    };
  }, []);

  return (
    <div className="w-full flex justify-center items-center py-8">
      <canvas
        ref={canvasRef}
        className="block"
        style={{ width: "100%", height: "400px" }}
      />
    </div>
  );
}
