import React from "react";
import { ReactTyped } from "react-typed";

const Hero = () => {
  return (
    <div className="text-white">
      <div className="max-w-[800px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <div
          style={{
            position: "relative",
            display: "inline-block",
            cursor: "default",
          }}
          className="md:py-6"
        >
          {/* Glow text dedesubt */}
          <h1
            aria-hidden="true"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              margin: 0,
              color: "black",
              filter: "blur(8px)",
              opacity: 1,
              fontWeight: "bold",
              width: "100%",
              userSelect: "none",
              pointerEvents: "none",
              zIndex: 0,
            }}
            className="md:text-6xl sm:text-6xl text-4xl"
          >
            WELCOME TO <p>SCARY FROG GRAPHICS</p>
          </h1>

          {/* Text cu background-clip */}
          <h1
            className="md:text-6xl sm:text-6xl text-4xl font-bold"
            style={{
              backgroundImage: `url(${process.env.PUBLIC_URL}/images/rust8.jpg)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              color: "transparent",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
              position: "relative",
              zIndex: 1,
              margin: 0,
            }}
          >
            WELCOME TO
            <p>SCARY FROG GRAPHICS</p>
          </h1>
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
