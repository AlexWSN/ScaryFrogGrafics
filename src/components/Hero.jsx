import React from "react";
import { ReactTyped } from "react-typed";

const Hero = () => {
  return (
    <div className="text-white">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className="text-[#00df9a] font-bold p-2">
          JUNIOR FULL-STACK DEVELOPER
        </p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
          ALEXANDRA SASU
        </h1>
        <div className="flex justify-center items-center"></div>
        <p className="md:text-5xl sm:text-4xl text-xl font-bold py-4">
          A young, aspiring junior with both talent and experience in
        </p>
        <ReactTyped
          className="md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2"
          strings={["HTML", "CSS", "JS", "REACT", "NODE.JS"]}
          typeSpeed={120}
          backSpeed={140}
          loop
        />
      </div>
    </div>
  );
};

export default Hero;
