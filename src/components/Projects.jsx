import React, { useState, useEffect } from "react";

// Scoatem portofoliu12.jpg (index 11)
const images = Array.from({ length: 23 }, (_, i) =>
  i === 11
    ? null
    : `${process.env.PUBLIC_URL}/images/portofoliu${i + 1}.jpg`
).filter(Boolean);

export default function Carousel3D() {
  const [index, setIndex] = useState(0);
  const [modalImage, setModalImage] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const total = images.length;
  const angle = 360 / total;
  const radius = isMobile ? 400 : 600;

  const prev = () => setIndex((prev) => (prev - 1 + total) % total);
  const next = () => setIndex((prev) => (prev + 1) % total);

  return (
    <div
      id="projects"
      className="projects relative w-full max-w-6xl mx-auto mt-36 mb-24 px-4"
      style={{
        perspective: "1500px",
        height: isMobile ? "460px" : "540px",
        position: "relative",
      }}
    >
      {/* Titlu */}
      <h2
        className="text-4xl md:text-6xl font-bold mb-16 select-none text-center mx-auto max-w-max"
        style={{
          backgroundImage: `url('${process.env.PUBLIC_URL}/images/rust8.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "transparent",
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        PROJECTS
      </h2>

      {/* Butoane */}
      <button
        onClick={prev}
        className="absolute top-1/2 left-4 md:left-6 -translate-y-1/2 bg-orange-500 p-3 rounded-full shadow-lg hover:bg-orange-600 transition z-30"
        aria-label="Previous"
      >
        &#8592;
      </button>
      <button
        onClick={next}
        className="absolute top-1/2 right-4 md:right-6 -translate-y-1/2 bg-orange-500 p-3 rounded-full shadow-lg hover:bg-orange-600 transition z-30"
        aria-label="Next"
      >
        &#8594;
      </button>

      {/* Cilindru imagini din spate */}
      <div
        className="absolute left-1/2 top-1/2"
        style={{
          width: isMobile ? "300px" : "400px",
          height: isMobile ? "200px" : "270px",
          transformStyle: "preserve-3d",
          transformOrigin: "50% 50%",
          transform: `translate(-50%, -50%) rotateY(${-index * angle}deg)`,
          transition: "transform 0.3s ease-out",
          willChange: "transform",
          pointerEvents: "none",
          zIndex: 10,
        }}
      >
        {images.map((src, i) => {
          if (i === index) return null;
          const rotateY = i * angle;
          return (
            <img
              key={i}
              src={src}
              alt={`Portfolio ${i + 1}`}
              className="absolute object-contain rounded-lg cursor-pointer"
              style={{
                width: isMobile ? "75px" : "110px",
                height: isMobile ? "55px" : "80px",
                top: "50%",
                left: "50%",
                transform: `
                  rotateY(${rotateY}deg)
                  translateZ(${radius}px)
                  translate(-50%, -50%)
                `,
                filter: "brightness(0.2) grayscale(90%)",
                boxShadow: "none",
                pointerEvents: "none",
                transition: "filter 0.5s",
              }}
            />
          );
        })}
      </div>

      {/* Imaginea activă fixă */}
      <div
        className="absolute top-1/2 left-1/2 cursor-pointer"
        style={{
          width: isMobile ? "270px" : "480px",
          height: isMobile ? "150px" : "270px",
          transform: "translate(-50%, -50%)",
          filter: "brightness(1)",
          boxShadow: "0 5px 10px rgba(255,165,0,0.9)",
          borderRadius: "12px",
          zIndex: 20,
          transition: "all 0.3s ease",
          animation: "pulseShadow 4.5s infinite ease-in-out",
        }}
        onClick={() => setModalImage(images[index])}
      >
        <img
          src={images[index]}
          alt={`Portfolio ${index + 1}`}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
            borderRadius: "12px",
          }}
        />
      </div>

      {/* Modal imagine zoom */}
      {modalImage && (
        <div
          className="fixed inset-0 flex items-center justify-center z-[999]"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            backdropFilter: "blur(1px)",
            borderRadius: "20px",
          }}
          onClick={() => setModalImage(null)}
        >
          <img
            src={modalImage}
            alt="Zoom"
            className="max-w-[90%] max-h-[90%] rounded-lg shadow-2xl"
            style={{
              boxShadow: "0 0 20px 1px #ff7f00, 0 0 1px 1px #ff7f00",
              transition: "box-shadow 0.3s ease",
              borderRadius: "16px",
            }}
            onClick={(e) => e.stopPropagation()}
          />
          <button
            onClick={() => setModalImage(null)}
            className="absolute top-6 right-6 text-white text-5xl hover:text-orange-500 transition"
          >
            &times;
          </button>
        </div>
      )}
    </div>
  );
}
