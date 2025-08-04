import React, { useState } from "react";

const services = [
  {
    id: 1,
    title: "VISUAL IDENTITY",
    icon: "/images/Iconite/IDENTITATE VIZUALA ICON.png",
    popupContent: (
      <div className="p-6 bg-black/70 backdrop-blur-md rounded-lg max-h-[70vh] overflow-y-auto text-white">
        <h3 className="text-3xl font-extrabold mb-4 text-orange-600 drop-shadow-[0_0_10px_rgba(255,140,0,0.8)] select-none">
          Visual Identity
        </h3>
        <p className="mb-4 font-semibold leading-relaxed drop-shadow-[0_0_1px_black] text-justify">
          Visual identity is a powerful tool that can shape customer perception.
          It can help you convey a positive and correct message, but it can also{" "}
          <span className="text-orange-600 font-bold">
            "help" you send the wrong or undesirable message.
          </span>
          <br />
          Scary Frog Graphics intervenes to avoid the latter effect. Visual
          identity represents the totality of images and graphic elements used
          to differentiate you in the market. Its role is to create an emotional
          connection with potential and current clients and to inform them about
          your activity.
          <br />A few of the most important elements for creating your own
          visual identity:
        </p>
        <p className="font-semibold leading-relaxed drop-shadow-[0_0_1px_black] text-justify">
          <span className="text-orange-600 font-bold uppercase">LOGO:</span>{" "}
          Scary Frog builds the logo you need, all you have to do is tell us
          what you'd like it to represent.
          <br />
          <span className="text-orange-600 font-bold uppercase">
            COLORS:
          </span>{" "}
          Are you sure you know what colors suit you best? Okay, we’ll use
          those, but we’ll also come up with a suggestion.
          <br />
          <span className="text-orange-600 font-bold uppercase">FONT:</span> We
          prepare the clearest and most representative font for you to present
          your slogan at the highest standard.
          <br />
          <span className="text-orange-600 font-bold uppercase">
            IMAGES:
          </span>{" "}
          We’ll just tell you this: “You don’t have time to worry about this.”
          The images will be crafted exactly to your needs. Just give us the
          idea, and the rest is as good as done.
        </p>
      </div>
    ),
  },
  {
    id: 2,
    title: "ADVERTISING MATERIALS",
    icon: "/images/Iconite/MATERIALE PUBLICITARE ICON.png",
    popupContent: (
      <div className="p-6 bg-black/70 backdrop-blur-md rounded-lg max-h-[70vh] overflow-y-auto text-white text-justify font-semibold">
        <h3 className="text-xl font-bold mb-4 text-orange-600">
          Advertising Materials
        </h3>
        <p>
          This section focuses on creating effective visual tools for promoting
          your brand. From brochures and posters to flyers, online banners, and
          print materials, Scary Frog designs advertising materials that capture
          attention and convey your message clearly and attractively. Each
          material is crafted to align with your brand's visual identity and
          create a consistent experience for your audience. We ensure that every
          detail is optimized to maximize the impact and effectiveness of your
          advertising campaigns.
        </p>
      </div>
    ),
  },
  {
    id: 3,
    title: "SOCIAL MEDIA",
    icon: "/images/Iconite/Social Media ICON.png",
    popupContent: (
      <div className="p-6 bg-black/70 backdrop-blur-md rounded-lg max-h-[70vh] overflow-y-auto text-white text-justify font-semibold">
        <h3 className="text-xl font-bold mb-4 text-orange-600">Social Media</h3>
        <p>
          Scary Frog focuses on creating and managing captivating visual
          strategies for social media platforms. Custom images, engaging posts,
          infographics, and complete visual campaigns. Here, we ensure that your
          brand stands out in users' feeds.
          <br />
          Each post is designed to grab attention and encourage interaction,
          while maintaining your aesthetic style and values. We collaborate with
          you to build a consistent and memorable presence on social networks,
          thereby enhancing visibility and strengthening the connection with
          your target audience.
        </p>
      </div>
    ),
  },
  {
    id: 4,
    title: "BRANDING & REBRANDING",
    icon: "/images/Iconite/BRANDING ICON.png",
    popupContent: (
      <div className="p-6 bg-black/70 backdrop-blur-md rounded-lg max-h-[70vh] overflow-y-auto text-white text-justify font-semibold">
        <h3 className="text-xl font-bold mb-4 text-orange-600">
          Branding & Rebranding
        </h3>
        <p>
          Create or refresh your brand image with strategy and high-end design.
        </p>
      </div>
    ),
  },
];

export default function Services() {
  const [activePopup, setActivePopup] = useState(null);

  return (
    <div
      id="services"
      className="relative min-h-screen text-white px-4 py-12 overflow-hidden bg-black max-w-full mx-auto">
      {/* Fundal */}
      <div className="fixed inset-0 -z-10">
        <img
          src="/images/background.png"
          alt="Background"
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-900/70 to-black" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <img
          src="/images/FROGlogo.png"
          alt="Frog Logo"
          className="w-24 mx-auto mb-10"
        />
        <h2
          className="text-4xl font-bold mb-10 tracking-wide select-none mx-auto max-w-max"
          style={{
            backgroundImage: "url('/images/rust8.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            color: "transparent",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            WebkitTextFillColor: "transparent",
            textShadow: "0 0 10px rgba(0, 0, 0, 0.4)",
          }}>
          SERVICES
        </h2>
        <p className="mb-8 max-w-xl mx-auto text-gray-300 text-justify">
          With the services provided by Scary Frog Graphics, you can easily
          convey your message. In the end, it will reach your target clearly and
          quickly, just as you intended.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {services.map((service) => (
            <button
              key={service.id}
              onClick={() => setActivePopup(service.id)}
              className="flex flex-col items-center bg-zinc-800 hover:bg-zinc-700 p-4 rounded-xl transition select-none">
              <img
                src={service.icon}
                alt={service.title}
                className="w-12 h-12 mb-2"
              />
              <span className="text-sm font-medium text-white text-center">
                {service.title}
              </span>
            </button>
          ))}
        </div>

        <button
          onClick={() => setActivePopup("all")}
          className="
            px-8 py-3
            bg-gradient-to-r from-orange-500 via-orange-600 to-orange-700
            text-white
            font-bold
            rounded-full
            shadow-lg
            transition
            duration-300
            ease-in-out
            select-none
            hover:scale-110
            hover:shadow-2xl
            hover:animate-pulse
            focus:outline-none
            focus:ring-4
            focus:ring-orange-400
          ">
          VIEW ALL SERVICES
        </button>
      </div>

      {/* POPUP */}
      {activePopup && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 px-4"
          onClick={() => setActivePopup(null)}>
          <div
            className="relative max-w-lg w-full rounded-lg overflow-hidden shadow-2xl max-h-[80vh]"
            style={{
              backgroundImage:
                "url('/images/anstract-metallic-background-with-grunge-effect.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              border: "8px solid transparent",
              borderImage: "url('/images/metal-border-texture.png') 40 stretch",
              backdropFilter: "blur(8px)",
              WebkitBackdropFilter: "blur(8px)",
              boxShadow: "0 0 20px 4px rgba(255, 140, 0, 0.9)",
            }}
            onClick={(e) => e.stopPropagation()}>
            {/* Close Button */}
            <button
              onClick={() => setActivePopup(null)}
              className="absolute top-3 right-3 text-3xl font-bold text-orange-500 hover:text-black transition select-none z-10">
              &times;
            </button>

            {/* Content Wrapper */}
            <div className="p-6 max-h-[80vh] overflow-y-auto">
              {activePopup === "all" ? (
                <div className="bg-white/70 backdrop-blur-md p-6 rounded-lg text-black text-justify font-semibold">
                  <h3 className="text-2xl font-extrabold mb-4 text-orange-600 drop-shadow-[0_0_10px_rgba(255,140,0,0.9)] select-none">
                    All Services
                  </h3>
                  <ul className="list-disc ml-6 space-y-2 text-sm">
                    <li>Business Card (front/back)</li>
                    <li>Standard Flyer 99x210 mm (front/back)</li>
                    <li>Custom-sized Flyer (front/back)</li>
                    <li>Tri-fold Brochure 3x99x210 mm (front/back)</li>
                    <li>Custom-sized Tri-fold Brochure (front/back)</li>
                    <li>Custom-sized Brochure</li>
                    <li>Product Catalog</li>
                    <li>Custom-sized Poster/Flyer/Leaflet (front/back)</li>
                    <li>Social Media Visuals</li>
                    <li>Large Format Printing (banners, posters)</li>
                  </ul>
                </div>
              ) : (
                services.find((s) => s.id === activePopup)?.popupContent || null
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
