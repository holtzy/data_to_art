"use client";

import { useEffect, useRef } from "react";
import { createNoise2D } from "simplex-noise";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  life: number;
  maxLife: number;
}

const PARTICLE_COUNT = 1000;
const FIELD_SCALE = 0.005;
const PARTICLE_SPEED = 2;
const PARTICLE_LIFETIME = 200;

export default function FlowField() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const width = (canvas.width = window.innerWidth);
    const height = (canvas.height = window.innerHeight);

    const noise2D = createNoise2D();
    const particles: Particle[] = [];

    // Initialize particles
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: 0,
        vy: 0,
        life: Math.random() * PARTICLE_LIFETIME,
        maxLife: PARTICLE_LIFETIME,
      });
    }

    let time = 0;

    function getFieldAngle(x: number, y: number): number {
      // Use noise to create a smooth vector field
      const angle =
        noise2D(x * FIELD_SCALE, y * FIELD_SCALE + time) * Math.PI * 2;
      return angle;
    }

    function updateParticle(particle: Particle) {
      // Get the field direction at particle position
      const angle = getFieldAngle(particle.x, particle.y);

      // Update velocity based on field
      particle.vx = Math.cos(angle) * PARTICLE_SPEED;
      particle.vy = Math.sin(angle) * PARTICLE_SPEED;

      // Update position
      particle.x += particle.vx;
      particle.y += particle.vy;

      // Decrease life
      particle.life--;

      // Reset particle if it's off screen or dead
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
        particle.vx = 0;
        particle.vy = 0;
      }
    }

    function drawParticle(particle: Particle) {
      if (!ctx) return;

      const lifeRatio = particle.life / particle.maxLife;
      const alpha = lifeRatio * 0.8 + 0.2;

      ctx.save();
      ctx.globalAlpha = alpha;

      // Color based on life and position
      const hue = (particle.x / width) * 360;
      const saturation = 70;
      const lightness = 50 + lifeRatio * 30;

      ctx.fillStyle = `hsl(${hue}, ${saturation}%, ${lightness}%)`;

      // Draw particle as a small circle
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, 2, 0, Math.PI * 2);
      ctx.fill();

      // Draw a trail
      if (lifeRatio > 0.3) {
        ctx.strokeStyle = `hsla(${hue}, ${saturation}%, ${lightness}%, ${
          alpha * 0.5
        })`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(particle.x, particle.y);
        ctx.lineTo(particle.x - particle.vx * 3, particle.y - particle.vy * 3);
        ctx.stroke();
      }

      ctx.restore();
    }

    function animate() {
      if (!ctx) return;

      // Clear canvas with fade effect
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, width, height);

      // Update and draw all particles
      particles.forEach((particle) => {
        updateParticle(particle);
        drawParticle(particle);
      });

      time += 0.001;
      requestAnimationFrame(animate);
    }

    animate();
  }, []);

  return (
    <div className="w-full h-screen bg-black overflow-hidden">
      <canvas
        ref={canvasRef}
        className="w-full h-full block"
        style={{ display: "block" }}
      />
    </div>
  );
}
