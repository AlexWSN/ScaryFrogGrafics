import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data submitted:", formData);
    setSubmitted(true);

    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });

    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section
      id="contact"
      className="contact min-h-screen flex flex-col justify-center items-center bg-black px-4 py-32 text-white relative"
    >
      {/* Glow text dedesubt */}
      <h1
        aria-hidden="true"
        style={{
          position: "absolute",
          top: 16,
          left: "50%",
          transform: "translateX(-50%)",
          margin: 0,
          color: "black",
          filter: "blur(8px)",
          opacity: 1,
          fontWeight: "bold",
          width: "100%",
          userSelect: "none",
          pointerEvents: "none",
          zIndex: 0,
          whiteSpace: "nowrap",
        }}
        className="md:text-7xl sm:text-6xl text-4xl"
      >
        Contact Form
      </h1>

      {/* Text cu background-clip */}
      <h1
        className="md:text-7xl sm:text-6xl text-4xl font-bold"
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/images/rust8.jpg)`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "transparent",
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          WebkitTextFillColor: "transparent",
          position: "relative",
          zIndex: 1,
          margin: 0,
          whiteSpace: "nowrap",
        }}
      >
        Contact Form
      </h1>

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-xl bg-zinc-900/90 backdrop-blur-md p-8 rounded-lg shadow-2xl space-y-6 border border-orange-500 mt-16"
      >
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-semibold text-orange-300"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            className="w-full mt-1 px-4 py-2 bg-zinc-800 text-white border border-zinc-700 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
            required
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-semibold text-orange-300"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email address"
            className="w-full mt-1 px-4 py-2 bg-zinc-800 text-white border border-zinc-700 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
            required
          />
        </div>

        <div>
          <label
            htmlFor="subject"
            className="block text-sm font-semibold text-orange-300"
          >
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="What’s the topic?"
            className="w-full mt-1 px-4 py-2 bg-zinc-800 text-white border border-zinc-700 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
            required
          />
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-semibold text-orange-300"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Type your thoughts here..."
            rows="6"
            className="w-full mt-1 px-4 py-2 bg-zinc-800 text-white border border-zinc-700 rounded focus:outline-none focus:ring-2 focus:ring-orange-500"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-orange-600 hover:bg-orange-500 text-white font-bold py-3 rounded transition duration-300 uppercase tracking-wider shadow-md hover:shadow-orange-500/50"
        >
          Let it fly!
        </button>

        {submitted && (
          <p className="text-green-400 text-center font-semibold mt-4">
            Message sent successfully!
          </p>
        )}
      </form>
    </section>
  );
};

export default ContactForm;
