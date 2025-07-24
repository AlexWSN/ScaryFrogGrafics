
import React from "react";
import Smooth from "react-smooth";

export default function Contact() {
  return (
    <Smooth duration={800} transition="fade-slide-bottom">
      <section
        id="contact"
        className="max-w-6xl mx-auto px-6 py-20 text-gray-300"
        data-aos="fade-right">
        <header className="mb-8">
          <h2 className="text-4xl font-bold text-[#00df9a] drop-shadow-[0_0_0.3rem_#00df9a]">
            Contact
          </h2>
        </header>

        <article className="space-y-4 text-lg">
          <p>
            <strong>Email:</strong>{" "}
            <a
              href="mailto:sasualexandra97@gmail.com"
              className="text-[#00df9a] hover:underline">
              sasualexandra97@gmail.com
            </a>
          </p>
          <p>
            <strong>Phone:</strong> 0763 268 996
          </p>
          <p>
            <strong>Location:</strong> Iași, România
          </p>
        </article>
      </section>
    </Smooth>
  );
}
