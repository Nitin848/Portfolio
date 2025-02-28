"use client"

import { useCallback } from 'react';
import Particles from '@tsparticles/react';
import { Engine } from '@tsparticles/engine';
import { loadFull } from 'tsparticles';

export default function ParticleBackground() {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      className="absolute inset-0"
      options={{
        fullScreen: false,
        background: {
          color: {
            value: 'transparent',
          },
        },
        fpsLimit: 120,
        particles: {
          color: {
            value: '#6366f1',
          },
          links: {
            color: '#6366f1',
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          move: {
            enable: true,
            outModes: {
              default: 'bounce',
            },
            random: false,
            speed: 1,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 80,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: 'circle',
          },
          size: {
            value: { min: 1, max: 5 },
          },
        },
        detectRetina: true,
      }}
    />
  );
}