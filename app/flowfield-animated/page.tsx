"use client";

import { useEffect, useRef } from "react";
import { createNoise2D } from "simplex-noise";

interface Particle {
  x: number;
  y: number;
  life: number;
  maxLife: number;
}

export default function FlowFieldAnimated() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const width = (canvas.width = window.innerWidth);
    const height = (canvas.height = window.innerHeight);

    const noise2D = createNoise2D();

    // Same parameters as your streamlines
    const NOISE_SCALE = 0.001;
    const STEP_SIZE = 3;

    // Animation parameters
    const PARTICLE_COUNT = 1000;
    const PARTICLE_LIFETIME = 300;
    const SPAWN_RATE = 0.1; // Probability of spawning new particle each frame

    const particles: Particle[] = [];

    // Function to get the direction at any point
    function getFieldAngle(x: number, y: number): number {
      const noiseValue = noise2D(x * NOISE_SCALE, y * NOISE_SCALE);
      const angle = noiseValue * Math.PI * 2;
      return angle;
    }

    // Function to update a single particle
    function updateParticle(particle: Particle) {
      // Get the direction at current position
      const angle = getFieldAngle(particle.x, particle.y);

      // Move in that direction
      particle.x += Math.cos(angle) * STEP_SIZE;
      particle.y += Math.sin(angle) * STEP_SIZE;

      // Decrease life
      particle.life--;

      // Reset particle if it's dead or off screen
      if (
        particle.life <= 0 ||
        particle.x < 0 ||
        particle.x > width ||
        particle.y < 0 ||
        particle.y > height
      ) {
        particle.x = Math.random() * width;
        particle.y = Math.random() * height;
        particle.life = PARTICLE_LIFETIME;
      }
    }

    // Function to draw a single particle
    function drawParticle(particle: Particle) {
      if (!ctx) return;

      const lifeRatio = particle.life / particle.maxLife;
      const alpha = lifeRatio * 0.8 + 0.2;

      ctx.save();
      ctx.globalAlpha = alpha;

      // Draw particle as a small circle
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, 2, 0, Math.PI * 2);
      ctx.fillStyle = "black";
      ctx.fill();

      // Draw a short trail
      if (lifeRatio > 0.3) {
        const angle = getFieldAngle(particle.x, particle.y);
        const trailLength = 10;
        const trailX = particle.x - Math.cos(angle) * trailLength;
        const trailY = particle.y - Math.sin(angle) * trailLength;

        ctx.beginPath();
        ctx.moveTo(particle.x, particle.y);
        ctx.lineTo(trailX, trailY);
        ctx.strokeStyle = "black";
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      ctx.restore();
    }

    // Initialize particles
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        life: Math.random() * PARTICLE_LIFETIME,
        maxLife: PARTICLE_LIFETIME,
      });
    }

    function animate() {
      if (!ctx) return;

      // Clear with fade effect (creates trails)
      ctx.fillStyle = "rgba(255, 255, 255, 0.05)";
      ctx.fillRect(0, 0, width, height);

      // Update and draw all particles
      particles.forEach((particle) => {
        updateParticle(particle);
        drawParticle(particle);
      });

      // Occasionally spawn new particles
      if (Math.random() < SPAWN_RATE) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          life: PARTICLE_LIFETIME,
          maxLife: PARTICLE_LIFETIME,
        });
      }

      // Remove old particles to prevent memory issues
      if (particles.length > PARTICLE_COUNT * 1.5) {
        particles.splice(0, particles.length - PARTICLE_COUNT);
      }

      requestAnimationFrame(animate);
    }

    animate();
  }, []);

  return (
    <div className="w-full h-screen bg-white">
      <canvas
        ref={canvasRef}
        className="w-full h-full block"
        style={{ display: "block" }}
      />
    </div>
  );
}
