import React, { useState } from "react";

export default function About() {
  const [selectedSection, setSelectedSection] = useState("who");
  const [showGallerySection, setShowGallerySection] = useState(null);
  const [lightbox, setLightbox] = useState({
    open: false,
    type: null,
    index: 0,
  });

  const paintings = [
    "charicatures",
    "davyjhones",
    "elvis",
    "friend",
    "grandtheftlove",
    "mexicanspaghetti",
    "ozzyborisvalejo",
    "spot",
  ];

  const models = ["him1", "him2", "him3", "him4", "she1", "she2", "spider"];

  const openLightbox = (type, index) => {
    setLightbox({ open: true, type, index });
  };

  const closeLightbox = () => setLightbox({ ...lightbox, open: false });

  const nextImage = () => {
    const arr = lightbox.type === "paintings" ? paintings : models;
    setLightbox({ ...lightbox, index: (lightbox.index + 1) % arr.length });
  };

  const prevImage = () => {
    const arr = lightbox.type === "paintings" ? paintings : models;
    setLightbox({
      ...lightbox,
      index: (lightbox.index - 1 + arr.length) % arr.length,
    });
  };

  const currentImages = lightbox.type === "paintings" ? paintings : models;

  return (
    <section
      id="about"
      className="max-w-7xl mx-auto px-6 py-12 bg-black/40 backdrop-blur-md rounded-2xl text-white shadow-md relative z-10"
      data-aos="fade-up">
      {/* Mobile SVG Separator */}
      <div className="relative mb-10 block md:hidden">
        <svg
          className="absolute left-0 w-full h-1 text-[#00df9a]"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
          fill="currentColor">
          <path d="M0,96L48,128C96,160,192,224,288,229.3C384,235,480,181,576,160C672,139,768,149,864,170.7C960,192,1056,224,1152,240C1248,256,1344,256,1392,256L1440,256V0H1392C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0H0Z" />
        </svg>
      </div>

      {/* Desktop Quote Separator */}
      <blockquote className="italic text-center text-gray-300 text-lg my-12 hidden md:block">
        “Creativity is intelligence having fun.” – Albert Einstein
      </blockquote>

      {/* Two Column Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Column 1 – About */}
        <div>
          <div className="flex flex-col items-center gap-4 mb-6">
            <img
              src="/images/alexandra.jpeg"
              alt="Alexandra Sasu"
              className="rounded-full w-40 h-40 object-cover shadow-lg"
            />
            <h1 className="font-pressstart text-3xl text-[#00df9a] text-center">
              About Me
            </h1>
          </div>

          <div className="flex gap-4 mb-4 flex-wrap justify-center">
            <button
              onClick={() => setSelectedSection("who")}
              className={`px-5 py-2 rounded-full font-semibold shadow transition-all ${
                selectedSection === "who"
                  ? "bg-[#00df9a] text-black"
                  : "bg-gray-800 text-white hover:bg-gray-700"
              }`}>
              Who am I
            </button>
            <button
              onClick={() => setSelectedSection("what")}
              className={`px-5 py-2 rounded-full font-semibold shadow transition-all ${
                selectedSection === "what"
                  ? "bg-[#00df9a] text-black"
                  : "bg-gray-800 text-white hover:bg-gray-700"
              }`}>
              What I Love
            </button>
          </div>

          {selectedSection && (
            <div className="relative">
              <p className="bg-gray-800 bg-opacity-70 p-6 rounded-xl shadow text-gray-300 leading-relaxed text-justify">
                {selectedSection === "who"
                  ? `I had the pleasure of working for over 5 years as a supervisor in parental education. During this time, I was involved in meaningful and impactful projects, and I like to believe that, together with my team, we made a positive difference on a national level, collaborating with schools and educational institutions all across Romania. Still, I felt I hadn’t quite found my place. After completing an intensive one-year fullstack development course, I decided to transition into a field that felt closer to my heart — partly out of a desire to connect with people who share my mindset and passions.`
                  : `I love painting, it helps me stay grounded and expressive in ways words can't always reach. That’s why I’ve included a small selection of my artwork in this portfolio: it’s a glimpse into the way I see and feel the world. Music is my constant companion, mostly heavy metal (with a funky start to every morning), and visual creativity flows alongside it. I've always been fascinated by 3D modeling, especially character design. Over the past year, I’ve been learning Blender in my spare time, and I’ve added here a few of my early experiments with digital sculpting — raw, but made with joy. I’m the proud owner of a hope: that one day I’ll learn to play the cello beautifully and own a '90 Honda Prelude or/and Mercedes w123 Coupe.🤷‍♀️`}
              </p>
              <button
                onClick={() => setSelectedSection("")}
                className="mt-0 text-[#00df9a] hover:underline absolute right-4 top-2">
                Close
              </button>
            </div>
          )}
        </div>

        {/* Column 2 – Projects */}
        <div>
          <div className="flex flex-col items-center gap-4 mb-6">
            <img
              src="/images/sheldon.jpeg"
              alt="Sheldon"
              className="rounded-full w-40 h-40 object-cover shadow-lg"
            />
            <h1 className="font-pressstart text-3xl text-[#00df9a] text-center">
              My Creative Projects
            </h1>
          </div>

          <div className="flex gap-4 flex-wrap justify-center mb-4">
            <button
              onClick={() =>
                setShowGallerySection(
                  showGallerySection === "paintings" ? null : "paintings"
                )
              }
              className={`px-5 py-2 rounded-full font-semibold shadow transition-all ${
                showGallerySection === "paintings"
                  ? "bg-[#00df9a] text-black"
                  : "bg-gray-800 text-white hover:bg-gray-700"
              }`}>
              Show Paintings
            </button>
            <button
              onClick={() =>
                setShowGallerySection(
                  showGallerySection === "models" ? null : "models"
                )
              }
              className={`px-5 py-2 rounded-full font-semibold shadow transition-all ${
                showGallerySection === "models"
                  ? "bg-[#00df9a] text-black"
                  : "bg-gray-800 text-white hover:bg-gray-700"
              }`}>
              Show 2D - 3D Models
            </button>
          </div>

          {showGallerySection === "paintings" && (
            <section className="bg-gray-900 p-6 rounded-xl mb-6">
              <h3 className="text-xl mb-6 text-[#00df9a] font-semibold">
                Selected Paintings
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {paintings.map((img, index) => (
                  <img
                    key={img}
                    src={`/images/${img}.jpeg`}
                    alt={img}
                    className="w-full h-40 object-cover rounded-xl shadow-lg hover:scale-105 cursor-pointer"
                    onClick={() => openLightbox("paintings", index)}
                  />
                ))}
              </div>
            </section>
          )}

          {showGallerySection === "models" && (
            <section className="bg-gray-900 p-6 rounded-xl mb-6">
              <h3 className="text-xl mb-6 text-[#00df9a] font-semibold">
                3D Character Modeling – Blender
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {models.map((img, index) => (
                  <img
                    key={img}
                    src={`/images/${img}.jpeg`}
                    alt={img}
                    className="w-full h-40 object-cover rounded-xl shadow-lg hover:scale-105 cursor-pointer"
                    onClick={() => openLightbox("models", index)}
                  />
                ))}
              </div>
            </section>
          )}
        </div>
      </div>

      {/* Lightbox */}
      {lightbox.open && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4">
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-white text-3xl font-bold hover:text-[#00df9a] z-50"
            aria-label="Close">
            ✕
          </button>
          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-4xl hover:text-[#00df9a] z-50"
            aria-label="Previous">
            ‹
          </button>
          <img
            src={`/images/${currentImages[lightbox.index]}.jpeg`}
            alt="zoom"
            className="max-w-[90vw] max-h-[80vh] rounded-xl shadow-2xl"
          />
          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-4xl hover:text-[#00df9a] z-50"
            aria-label="Next">
            ›
          </button>
        </div>
      )}
    </section>
  );
}
