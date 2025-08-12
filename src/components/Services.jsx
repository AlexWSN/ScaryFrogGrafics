import React, { useState } from "react";

const services = [
  {
    id: 1,
    title: "VISUAL IDENTITY",
    icon: `${process.env.PUBLIC_URL}/images/identitatevizualaicon.png`,
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
    icon: `${process.env.PUBLIC_URL}/images/materialepublicitareicon.png`,
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
    icon: `${process.env.PUBLIC_URL}/images/socialmediaicon.png`,
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
    icon: `${process.env.PUBLIC_URL}/images/brandingicon.png`,
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
      className="relative min-h-screen text-white px-4 pt-12 pb-[calc(80px+1rem)] overflow-hidden bg-[#1a1a1a] max-w-full mx-auto">
      {/* Fundal */}
      <div className="fixed inset-0 -z-10">
        <img
          src={`${process.env.PUBLIC_URL}/images/background.png`}
          alt="Background"
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-zinc-900/70 to-black" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* <img
          src={`${process.env.PUBLIC_URL}/images/FROGlogo.png`}
          alt="Frog Logo"
          className="w-24 mx-auto mb-10"
        />*/}
        <div className="relative inline-block select-none mb-10 mx-auto max-w-max">
          {/* Glow dedesubt */}
          <h2
            aria-hidden="true"
            className="md:text-6xl sm:text-6xl text-4xl font-bold absolute top-0 left-0 w-full z-0 pointer-events-none"
            style={{
              color: "white",
              filter: "blur(0.1px)",
              margin: 0,
              opacity: 1,
              textAlign: "center",
            }}>
            SERVICES
          </h2>

          {/* Text cu background-clip */}
          <h2
            className="md:text-6xl sm:text-6xl text-4xl font-bold relative z-10 text-center mx-auto max-w-max"
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
            }}>
            SERVICES
          </h2>
        </div>

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
          className="fixed inset-0 bg-white/30 backdrop-blur-md flex items-center justify-center z-50 px-4"
          onClick={() => setActivePopup(null)}>
          <div
            className="relative max-w-lg w-full rounded-lg overflow-hidden shadow-2xl max-h-[80vh]"
            style={{
              backgroundImage: `url(${process.env.PUBLIC_URL}/images/anstract-metallic-background-with-grunge-effect.jpg)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              border: "8px solid transparent",
              borderImage: `url(${process.env.PUBLIC_URL}/images/metal-border-texture.png) 40 stretch`,
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
            <div className="p-6 bg-black/70 backdrop-blur-md rounded-lg text-white max-h-[80vh] overflow-y-auto text-justify font-semibold">
              {activePopup === "all" ? (
                <div>
                  <h3 className="text-3xl font-extrabold mb-6 text-orange-500 drop-shadow-[0_0_10px_rgba(255,165,0,0.8)] select-none">
                    All Services
                  </h3>

                  {/* Branding & Design */}
                  <section className="mb-6">
                    <h4 className="text-xl font-bold text-orange-400 mb-3">
                      Branding & Design
                    </h4>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      <li>Business Card (front/back)</li>
                      <li>Standard Flyer 99x210 mm (front/back)</li>
                      <li>Custom-sized Flyer (front/back)</li>
                      <li>Tri-fold Brochure 3x99x210 mm (front/back)</li>
                      <li>Custom-sized Tri-fold Brochure (front/back)</li>
                      <li>Custom-sized Brochure</li>
                      <li>Product Catalog</li>
                      <li>Custom-sized Poster/Flyer</li>
                      <li>CD/DVD</li>
                      <li>T-Shirt/Hoodie</li>
                      <li>
                        Icons (contact, web, mail, social media, other icons)
                      </li>
                      <li>Custom-sized Banner</li>
                      <li>Custom-sized City Light</li>
                      <li>Certificate A4/B5/A3 etc.</li>
                      <li>Badge</li>
                      <li>Invitation/Voucher/Event Ticket</li>
                      <li>Event Wristbands</li>
                      <li>Tattoo</li>
                      <li>Roll-up Banner</li>
                      <li>Presentation Folder</li>
                      <li>Restaurant Menu</li>
                      <li>
                        Logo Creation (2 simple versions: white and black)
                      </li>
                    </ul>
                    <p className="mt-2 italic text-orange-300">
                      Logo Effects & Styling (colors, 3D effect, shadows,
                      background attachment, etc.)
                    </p>
                  </section>

                  {/* Digital & Online */}
                  <section className="mb-6">
                    <h4 className="text-xl font-bold text-orange-400 mb-3">
                      Digital & Online
                    </h4>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      <li>Logo Redesign</li>
                      <li>Facebook/Instagram Profile Image</li>
                      <li>Facebook Cover Banner</li>
                      <li>Facebook/Instagram Flyer Image</li>
                      <li>Online Brochure</li>
                      <li>Online Catalog</li>
                      <li>Online Poster/Flyer</li>
                      <li>Online Tickets</li>
                      <li>Custom Desktop Wallpaper</li>
                      <li>Custom Phone Wallpaper</li>
                      <li>Mock-up</li>
                      <li>Website/App/Software Icons</li>
                      <li>Photo/Image/Video Editing</li>
                      <li>Color Correction, Lighting, Color Effects</li>
                    </ul>
                    <p className="mt-2 italic text-orange-300">
                      Editing/Modification (cropping elements, removing objects
                      and imperfections, background change/removal, etc.)
                    </p>
                  </section>

                  {/* Video & Multimedia */}
                  <section>
                    <h4 className="text-xl font-bold text-orange-400 mb-3">
                      Video & Multimedia
                    </h4>
                    <ul className="list-disc list-inside space-y-1 text-sm">
                      <li>Product Photo Editing</li>
                      <li>Slideshow Video</li>
                      <li>Video Editing & Montage</li>
                      <li>Lyric Video</li>
                      <li>Promo Video</li>
                      <li>Product Video Editing & Montage</li>
                    </ul>
                  </section>
                </div>
              ) : (
                services.find((s) => s.id === activePopup)?.popupContent || null
              )}
            </div>
          </div>
        </div>
      )}
      <section className="absolute bottom-0 left-0 w-full h-[64px] sm:h-[92px] md:h-[80px] overflow-hidden">
        <img
          src={`${process.env.PUBLIC_URL}/images/jason-y-WoV7qcl8rOg-unsplash.jpg`}
          alt="Metal Banner"
          className="w-full h-full object-cover object-center rotate-180 brightness-100"
        />
      </section>
    </div>
  );
}
