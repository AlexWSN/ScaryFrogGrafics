import React from "react";

export default function Projects() {
  const projects = [
    {
      title: "IceCream",
      desc: "Responsive website using Parcel, SCSS, and JavaScript.",
      links: [{ label: "Repo", href: "https://github.com/AlexWSN/IceCream" }],
    },
    {
      title: "Scary Frog Graphics",
      desc: "HTML, CSS, JS – Game-style interface with interactive UI.",
      links: [
        { label: "Repo", href: "https://github.com/AlexWSN/webfrog01" },
        { label: "Live", href: "https://alexwsn.github.io/webfrog01/" },
      ],
    },
  ];

  return (
    <section
      id="projects"
      className="w-full bg-[#151515] py-16 px-4 text-gray-300"
      data-aos="fade-up">
      <div className="w-full px-10 lg:px-32 xl:px-48 mx-auto">
        <header className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#00df9a] mb-2">Projects</h2>
          <p className="text-gray-400">
            A selection of my work during the GoIT course and personal practice
          </p>
        </header>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <div
              key={i}
              className="bg-gray-900 rounded-xl shadow-xl hover:shadow-[#00df9a]/50 transition-shadow duration-300 p-6">
              <h3 className="text-2xl font-semibold text-white mb-2">
                {project.title}
              </h3>
              <p className="text-gray-400 mb-4">{project.desc}</p>
              <div className="flex gap-4">
                {project.links.map((link, j) => (
                  <a
                    key={j}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#00df9a] hover:underline font-medium">
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
