import React from "react";
import { ReactTyped } from "react-typed";

const Hero = () => {
  return (
    <div className="text-white">
      <div className="max-w-[800px] mt-20 w-full h-screen mx-auto text-center flex flex-col justify-center">
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
          WELCOME TO SCARY FROG GRAPHICS
        </h1>
        <p className="text-orange-500 font-bold p-2">
          Where imagination leaps beyond boundaries{" "}
        </p>
        <div className="flex justify-center items-center"></div>
        <p className="md:text-5xl sm:text-4xl text-xl font-bold py-4">
          graphic design is a core pillar of the business through...
        </p>
        <ReactTyped
          className="md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2"
          strings={["LOGO", "VISUAL IDENTITY", "PROMOTIONAL MATERIAL"]}
          typeSpeed={120}
          backSpeed={140}
          loop
        />
      </div>
    </div>
  );
};

export default Hero;
