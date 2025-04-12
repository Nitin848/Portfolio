"use client"

import { useEffect, useState, useCallback } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from "@tsparticles/slim";
import { Container } from "@tsparticles/engine";

export default function ParticleBackground() {
  const [init, setInit] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const particlesLoaded = useCallback(async (container?: Container) => {
    if (container) {
      console.log(container);
    }
  }, []);

  if (!init) {
    return null;
  }

  return (
    <Particles
      id="tsparticles"
      particlesLoaded={particlesLoaded}
      className="absolute inset-0"
      options={{
        fullScreen: false,
        background: {
          color: {
            value: 'transparent',
          },
        },
        fpsLimit: isMobile ? 30 : 60,
        particles: {
          color: {
            value: '#6366f1',
          },
          links: {
            color: '#6366f1',
            distance: isMobile ? 100 : 150,
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
            speed: isMobile ? 0.5 : 1,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              value_area: 800,
              factor: isMobile ? 1000 : 2000
            },
            value: isMobile ? 50 : 100,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: 'circle',
          },
          size: {
            value: { min: 1, max: isMobile ? 3 : 5 },
          },
        },
        detectRetina: true,
      }}
    />
  );
}