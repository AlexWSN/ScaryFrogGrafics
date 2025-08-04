import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="fixed top-0 left-0 w-full flex justify-between items-center h-20 px-4 text-white bg-black bg-opacity-60 z-50">
      {/* Logo Image */}
      <img
        src="/images/FROGlogo.png"
        alt="Scary Frog Logo"
        className="h-12 w-auto object-contain cursor-pointer"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      />

      <ul className="hidden md:flex">
        <li className="p-4">
          <a href="#about">About</a>
        </li>
        <li className="p-4">
          <a href="#projects">Projects</a>
        </li>
        <li className="p-4">
          <a href="#services">Services</a>
        </li>
        <li className="p-4">
          <a href="#experience">Experience</a>
        </li>
        <li className="p-4">
          <a href="#contact">Contact</a>
        </li>
      </ul>

      {/* Iconiță mobilă */}
      <div onClick={handleNav} className="block md:hidden z-20">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      {/* Meniul mobil */}
      <div
        className={
          nav
            ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500 z-10"
            : "fixed left-[-100%]"
        }>
        <div className="m-4">
          <img
            src="/images/FROGlogo.png"
            alt="Scary Frog Logo"
            className="h-12 w-auto object-contain"
          />
        </div>
        <ul className="uppercase p-4">
          <li className="p-4 border-b border-gray-600">
            <a href="#about">About</a>
          </li>
          <li className="p-4 border-b border-gray-600">
            <a href="#projects">Projects</a>
          </li>
          <li className="p-4 border-b border-gray-600">
            <a href="#services">Services</a>
          </li>
          <li className="p-4 border-b border-gray-600">
            <a href="#experience">Experience</a>
          </li>
          <li className="p-4">
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
