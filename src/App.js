import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Certificate from "./components/Services";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

function App() {
  const backgroundStyle = {
    backgroundImage: 'url("/images/background.png")',
    backgroundAttachment: 'fixed',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    minHeight: '100vh',
  };

  return (
    <>
      <Navbar /> {/* E în afara wrapperului cu background */}
      <div style={backgroundStyle}>
        <div className="pt-20"> {/* Compensăm pentru înălțimea navbarului fix */}
          <Hero />
          <About />
          <Projects />
          <Certificate />
          <Experience />
          <Contact />
        </div>
      </div>
    </>
  );
}

export default App;                