import React from "react";

export default function Experience() {
  return (
    <section
      id="experience"
      className="max-w-4xl mx-auto px-6 py-20 bg-gradient-to-r from-sky-900 to-sky-800 rounded-lg shadow-lg"
      data-aos="fade-left">
      <header className="mb-10 flex items-center gap-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-10 w-10 text-[#00df9a]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
          aria-hidden="true">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 8c-1.657 0-3 .895-3 2v4h6v-4c0-1.105-1.343-2-3-2z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 14v2m0 0a2 2 0 100-4 2 2 0 000 4z"
          />
        </svg>
        <h2 className="text-4xl font-extrabold text-white drop-shadow-md">
          Previous Experience
        </h2>
      </header>

      <article className="space-y-6 text-gray-300 leading-relaxed text-lg text-justify">
        <h3 className="text-3xl font-semibold text-[#00df9a] text">
          Professional Background
        </h3>
        <p>
          Since 2019, I have been working as a supervisor in parental education
          for the HoltIS Association. All the projects I have been involved in
          have been carried out in collaboration with UNICEF. Among these, one
          of the key initiatives I contributed to was the establishment of
          HoltIS youth clubs in 140 schools nationwide, supporting both middle
          and high school students.
        </p>
        <p>
          I strongly value fairplay and believe in both offering and receiving
          respect. For me, mutual respect, integrity, and collaboration are
          essential in creating meaningful connections and a positive
          environment.
        </p>
        <div>
          <a
            href="/certificates/previous-experience.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 inline-block text-center">
            Previous Experience
          </a>
        </div>
      </article>
    </section>
  );
}
