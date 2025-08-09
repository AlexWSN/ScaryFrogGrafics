import React, { useState } from "react";

const services = [
  {
    id: 1,
    title: "VISUAL IDENTITY",
    icon: process.env.PUBLIC_URL + "/images/Iconite/IDENTITATE VIZUALA ICON.png",
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
    icon: process.env.PUBLIC_URL + "/images/Iconite/MATERIALE PUBLICITARE ICON.png",
    popupContent: (
      <div className="p-6 bg-black/70 backdrop-blur-md rounded-lg max-h-[70vh] overflow-y-auto text-white text-justify font-semibold">
        <h3 className="text-3xl font-extrabold mb-4 text-orange-600 drop-shadow-[0_0_10px_rgba(255,140,0,0.8)] select-none">
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
    icon: process.env.PUBLIC_URL + "/images/Iconite/Social Media ICON.png",
    popupContent: (
      <div className="p-6 bg-black/70 backdrop-blur-md rounded-lg max-h-[70vh] overflow-y-auto text-white text-justify font-semibold">
        <h3 className="text-3xl font-extrabold mb-4 text-orange-600 drop-shadow-[0_0_10px_rgba(255,140,0,0.8)] select-none">
          Social Media
        </h3>
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
    icon: process.env.PUBLIC_URL + "/images/Iconite/BRANDING ICON.png",
    popupContent: (
      <div className="p-6 bg-black/70 backdrop-blur-md rounded-lg max-h-[70vh] overflow-y-auto text-white text-justify font-semibold">
        <h3 className="text-3xl font-extrabold mb-4 text-orange-600 drop-shadow-[0_0_10px_rgba(255,140,0,0.8)] select-none">
          Branding & Rebranding
        </h3>
        <p>
          Focus on creating and transforming visual identities that reflect
          individual values and vision. Whether you are just starting out or
          looking to update your brand's image, Scary Frog develops customized
          solutions to help you stand out in the market. <br />
          In this section, you will find comprehensive branding services, from
          complete visual identity design to rebranding, aimed at revitalizing
          and addressing new visual communication directions. Each project is
          approached with attention to detail and a design that captures the
          essence of your brand.{" "}
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
      className="relative min-h-[600px] text-white px-4 pt-12 pb-[calc(80px+1rem)] overflow-hidden bg-[#1a1a1a] max-w-full mx-auto">
      {/* Fundal */}
      <div className="fixed inset-0 -z-10">
        <img
          src={process.env.PUBLIC_URL + "/images/background.png"}
          alt="Background"
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-900/70 to-black" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* <img
          src={process.env.PUBLIC_URL + "/images/FROGlogo.png"}
          alt="Frog Logo"
          className="w-24 mx-auto mb-10"
        />*/}
        <h2
          className="text-4xl font-bold mb-10 tracking-wide select-none mx-auto max-w-max"
          style={{
            backgroundImage: `url(${process.env.PUBLIC_URL + "/images/rust8.jpg"})`,
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
            hover:brightness-110
            focus:outline-none
            focus:ring-2
            focus:ring-orange-400
            focus:ring-offset-2
          ">
          View All Services
        </button>
      </div>

      {activePopup && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50"
          onClick={() => setActivePopup(null)}>
          <div
            className="relative max-w-3xl max-h-full overflow-y-auto rounded-lg shadow-lg"
            onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setActivePopup(null)}
              className="absolute top-2 right-2 text-white text-3xl font-bold hover:text-orange-600 transition select-none"
              aria-label="Close popup">
              &times;
            </button>
            {activePopup === "all"
              ? services.map((service) => (
                  <div key={service.id} className="mb-6">
                    {service.popupContent}
                  </div>
                ))
              : services
                  .filter((service) => service.id === activePopup)
                  .map((service) => (
                    <div key={service.id}>{service.popupContent}</div>
                  ))}
          </div>
        </div>
      )}
    </div>
  );
}
