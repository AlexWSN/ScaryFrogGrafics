import React from "react";
import { ReactTyped } from "react-typed";

const Hero = () => {
  return (
    <div className="text-black">
      <div className="max-w-[800px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <div
          style={{
            position: "relative",
            display: "inline-block",
            cursor: "default",
          }}
          className="md:py-6">
          {/* Glow text dedesubt */}
          <div
            aria-hidden="true"
            className="absolute top-0 left-0 w-full z-0 select-none pointer-events-none"
            style={{ filter: "blur(8px)" }}>
            <h1 className="md:text-6xl sm:text-6xl text-4xl font-bold leading-tight m-0">
              WELCOME TO
            </h1>
            <h2 className="md:text-6xl sm:text-6xl text-4xl font-bold leading-tight m-0">
              SCARY FROG GRAPHICS
            </h2>
          </div>

          {/* Text cu background-clip */}
          <div className="relative z-10">
            <h1
              className="md:text-6xl sm:text-6xl text-4xl font-bold leading-tight m-0"
              style={{
                backgroundImage: `url(${process.env.PUBLIC_URL}/images/rust8.jpg)`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                color: "transparent",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                WebkitTextFillColor: "transparent",
                margin: 0,
              }}>
              WELCOME TO
            </h1>
            <h2
              className="md:text-6xl sm:text-6xl text-4xl font-bold leading-tight m-0"
              style={{
                backgroundImage: `url(${process.env.PUBLIC_URL}/images/rust8.jpg)`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                color: "transparent",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                WebkitTextFillColor: "transparent",
                margin: 0,
              }}>
              SCARY FROG GRAPHICS
            </h2>
          </div>
        </div>

        <div className="flex justify-center my-6">
          <img
            src={`${process.env.PUBLIC_URL}/images/FROG.png`}
            alt="Scary Frog"
            className="w-40 h-auto object-contain"
          />
        </div>

        <ReactTyped
          className="md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2 text-gray-300"
          strings={["Logo", "Visual Identity", "Promotional Material"]}
          typeSpeed={120}
          backSpeed={140}
          loop
        />
      </div>
    </div>
  );
};

export default Hero;
