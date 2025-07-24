import React, { useState } from "react";

const certificates = [
  "/certificates/certificate1.png",
  "/certificates/certificate2.png",
  "/certificates/certificate3.png",
];

const Certificate = () => {
  const [index, setIndex] = useState(0);

  const prev = () => {
    setIndex((i) => (i === 0 ? certificates.length - 1 : i - 1));
  };

  const next = () => {
    setIndex((i) => (i === certificates.length - 1 ? 0 : i + 1));
  };

  return (
    <div id="certificate" className="w-full bg-white py-16 px-4">
      <div className="w-full bg-white py-16 px-4">
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 items-center gap-8">
          <div className="flex flex-col justify-center">
            <p className="text-[#00df9a] font-bold ">🎖️ Certification</p>
            <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
              💻 FULLSTACK Developer Course – GoIT Global
            </h1>
            <p className="mb-4">📅 Completed: April 7, 2025</p>

            <div className="flex flex-wrap items-center gap-3">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                alt="HTML5"
                title="HTML5"
                className="w-8 h-8"
              />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
                alt="CSS3"
                title="CSS3"
                className="w-8 h-8"
              />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                alt="JavaScript"
                title="JavaScript"
                className="w-8 h-8"
              />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                alt="React"
                title="React"
                className="w-8 h-8"
              />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
                alt="Node.js"
                title="Node.js"
                className="w-8 h-8"
              />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
                alt="Git"
                title="Git"
                className="w-8 h-8"
              />
            </div>
          </div>

          <div className="relative w-full max-w-md mx-auto">
            <img
              src={certificates[index]}
              alt={`Certificate ${index + 1}`}
              className="rounded-xl shadow-lg mx-auto"
            />

            <div className="flex justify-between mt-4">
              <button
                onClick={prev}
                className="bg-[#00df9a] text-black px-4 py-2 rounded-md font-semibold hover:bg-[#00bf7a] transition">
                Prev
              </button>
              <button
                onClick={next}
                className="bg-[#00df9a] text-black px-4 py-2 rounded-md font-semibold hover:bg-[#00bf7a] transition">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certificate;
