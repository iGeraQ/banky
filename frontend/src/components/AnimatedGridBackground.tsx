import React, { useEffect, useMemo } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';
import type { ISourceOptions } from '@tsparticles/engine';

export const AnimatedGridBackground: React.FC = () => {
  const [init, setInit] = React.useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  // Particles configuration
  const options: ISourceOptions = useMemo(
    () => ({
      fullScreen: {
        enable: false,
        zIndex: 0,
      },
      background: {
        color: {
          value: 'transparent',
        },
      },
      fpsLimit: 60,
      particles: {
        number: {
          value: 100,
          density: {
            enable: true,
            width: 1920,
            height: 1080,
          },
        },
        color: {
          value: 'hsl(24, 95%, 53%)',
        },
        shape: {
          type: 'square',
        },
        opacity: {
          value: 0.6,
          animation: {
            enable: true,
            speed: .5,
            sync: false,
          },
        },
        size: {
          value: 3,
        },
        links: {
          enable: true,
          distance: 150,
          color: 'hsl(24, 95%, 53%)',
          opacity: 0.4,
          width: 1.5,
          triangles: {
            enable: true,
            color: 'hsl(24, 95%, 53%)',
            opacity: 0.08,
          },
        },
        move: {
          enable: true,
          speed: 1,
          direction: 'none',
          random: false,
          straight: false,
          outModes: {
            default: 'bounce',
          },
        },
      },
      interactivity: {
        events: {
          onHover: {
            enable: false,
          },
          onClick: {
            enable: false,
          },
          resize: {
            enable: true,
          },
        },
      },
      detectRetina: true,
    }),
    []
  );

  if (!init) {
    return null;
  }

  return (
    <Particles
      id="tsparticles-grid"
      options={options}
      style={{ 
        position: 'absolute', 
        top: 0,
        left: 0,
        width: '100%', 
        height: '100%',
        pointerEvents: 'none'
      }}
    />
  );
};

