// src/components/ParticlesBackground.jsx
import React from "react";
import Particles from "@tsparticles/react";

const ParticlesBackground = () => {
  return (
    <Particles
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
      }}
      options={{
        fpsLimit: 60,
        particles: {
          number: { value: 30, density: { enable: true, area: 800 } },
          color: { value: "#FFA500" },
          shape: { type: "circle" },
          opacity: { value: 0.8, random: true },
          size: { value: 3, random: { enable: true, minimumValue: 1 } },
          move: {
            enable: true,
            speed: 2,
            direction: "top",
            outModes: { default: "out" },
          },
        },
        detectRetina: true,
        background: { color: "transparent" },
      }}
    />
  );
};

export default ParticlesBackground;
