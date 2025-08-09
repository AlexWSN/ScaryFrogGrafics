import React from "react";

export default function About() {
  return (
    <section
      id="about"
      className="w-full px-6 pt-16 pb-10 bg-black/10 backdrop-blur-sm text-white shadow-2xl border-y-2 border-orange-500 relative overflow-hidden"
      data-aos="fade-up"
    >
      <div className="flex flex-col items-center">
        {/* Titlu cu background-clip + glow sincronizat */}
        <div className="relative inline-block select-none mb-10">
          {/* Glow dedesubt */}
          <h2
            aria-hidden="true"
            className="text-4xl md:text-6xl font-bold absolute top-0 left-0 w-full z-0 pointer-events-none"
            style={{
              color: "white",
              filter: "blur(0.1px)",
              margin: 0,
              opacity: 1,
            }}
          >
            ABOUT
          </h2>

          {/* Text cu background-clip */}
          <h2
            className="text-4xl md:text-6xl font-bold relative z-10 text-center mx-auto max-w-max"
            style={{
              backgroundImage: `url(${process.env.PUBLIC_URL}/images/rust8.jpg)`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
              WebkitTextFillColor: "transparent",
              margin: 0,
            }}
          >
            ABOUT
          </h2>
        </div>

        {/* Container text */}
        <div className="p-8 rounded-2xl shadow-lg text-gray-300 leading-relaxed text-justify space-y-5 w-full max-w-4xl mx-auto">
          <p>
            At Scary Frog Graphics, we believe that every idea deserves a
            striking visual identity. Our mission is to transform your concepts
            into designs that captivate, communicate, and create lasting
            impressions.
          </p>
          <p>
            Whether you're launching a brand, refreshing your image, or telling
            your story, our team blends creativity with strategy to deliver
            designs that resonate with your audience and elevate your vision.
          </p>
          <p>
            From bold logos that define your brand to promotional materials that
            leave a mark, Scary Frog Graphics is your partner in crafting
            visuals that stand out in a crowded world.
          </p>
          <p>
            Let us help you tell your story, not just in pictures, but in
            unforgettable experiences. Together, we bring your vision to life
            with precision, passion, and a touch of artistry.
          </p>

          <p className="font-semibold text-white">
            <span className="italic text-orange-500">
              *Where imagination leaps beyond boundaries.*
            </span>
          </p>
        </div>

        {/* Icon Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 mt-14 px-0 w-full max-w-4xl mx-auto">
          {[
            {
              img: "arrows.png",
              text: "Communication is maintained throughout the collaboration for details and feedback.",
            },
            {
              img: "atom.png",
              text: "Every project receives the utmost attention to detail.",
            },
            {
              img: "foreigner.png",
              text: "For maximized results, you will receive consulting.",
            },
            {
              img: "message.png",
              text: "We're just a click away if you have any questions or would like to schedule an appointment.",
            },
          ].map(({ img, text }, idx) => (
            <div
              key={idx}
              className="group relative bg-gray-900/80 p-6 rounded-xl shadow-lg text-center transition duration-300 transform hover:scale-105 hover:rotate-1 hover:shadow-orange-500/40"
            >
              <img
                src={`${process.env.PUBLIC_URL}/images/${img}`}
                alt={`Icon ${idx + 1}`}
                className="w-12 h-12 mb-4 mx-auto drop-shadow-md group-hover:scale-110 transition"
              />
              <p className="text-gray-300 text-sm">{text}</p>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-orange-500 rounded-full transition-all duration-300 group-hover:w-3/4"></div>
            </div>
          ))}
        </div>

        {/* Text final cu background-clip */}
        <div className="mt-16 text-center">
          <div
            className="inline-flex flex-col text-3xl md:text-4xl font-bold tracking-wide font-teko leading-tight rounded-full px-16 py-12
            shadow-[0_0_80px_1px_rgba(255,165,0,0.7)] transition-shadow duration-500"
            style={{
              backgroundImage: `url(${process.env.PUBLIC_URL}/images/rust8.jpg)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
              WebkitTextFillColor: "transparent",
            }}
          >
            <span>Let’s</span>
            <span>build</span>
            <span>bridges,</span>
            <span>together</span>
          </div>
        </div>

        {/* SVG Animated Text */}
        <div className="mt-14 w-full">
          <svg width="100%" height="150" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <mask id="text-mask">
                <rect width="100%" height="100%" fill="black" />
                <text
                  x="50%"
                  y="50%"
                  fill="white"
                  fontSize="60"
                  fontFamily="Arial, sans-serif"
                  fontWeight="bold"
                  textAnchor="middle"
                  dominantBaseline="middle"
                >
                  MAKE IT BOLD
                </text>
              </mask>
            </defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgb(186, 107, 4)" />
              <stop offset="50%" stopColor="#999" />
              <stop offset="100%" stopColor="black" />
            </linearGradient>
            <rect
              width="100%"
              height="100%"
              fill="url(#gradient)"
              mask="url(#text-mask)"
            >
              <animate
                attributeName="x"
                from="-100%"
                to="100%"
                dur="2s"
                repeatCount="indefinite"
              />
            </rect>
          </svg>
        </div>
      </div>
    </section>
  );
}
