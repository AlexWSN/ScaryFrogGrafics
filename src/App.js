import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function randomBetween(min, max) {
  return Math.random() * (max - min) + min;
}

function SparksAndAshes() {
  // Mai multe particule, poziționate aleator pe toată înălțimea paginii
  const sparks = Array.from({ length: 50 }, (_, i) => ({
    top: randomBetween(0, 100),
    left: randomBetween(0, 100),
    delay: Math.random() * 3,
    direction: i % 2 === 0 ? "left" : "right",
    duration: randomBetween(2, 4), // viteze mai mari (2-4s)
    size: randomBetween(2, 4), // particule mai mici (2-4px)
  }));

  const ashes = Array.from({ length: 30 }, (_, i) => ({
    top: randomBetween(0, 100),
    left: randomBetween(0, 100),
    delay: Math.random() * 5,
    direction: i % 2 === 0 ? "left" : "right",
    duration: randomBetween(3, 5),
    size: randomBetween(1, 3),
  }));

  return (
    <>
      <style>{`
        .spark, .ash {
          position: absolute;
          border-radius: 50%;
          pointer-events: none;
          opacity: 0.8;
          will-change: transform, opacity;
        }
        .spark {
          background-color: orange;
          box-shadow: 0 0 8px orange;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }
        .ash {
          background-color: gray;
          opacity: 0.4;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }
        @keyframes sparkUpLeft {
          0% {
            transform: translate(0, 0) scale(1);
            opacity: 0.8;
          }
          100% {
            transform: translate(-30px, -150px) scale(0.5);
            opacity: 0;
          }
        }
        @keyframes sparkUpRight {
          0% {
            transform: translate(0, 0) scale(1);
            opacity: 0.8;
          }
          100% {
            transform: translate(30px, -150px) scale(0.5);
            opacity: 0;
          }
        }
        @keyframes ashUpLeft {
          0% {
            transform: translate(0, 0) scale(1);
            opacity: 0.4;
          }
          100% {
            transform: translate(-20px, -120px) scale(0.4);
            opacity: 0;
          }
        }
        @keyframes ashUpRight {
          0% {
            transform: translate(0, 0) scale(1);
            opacity: 0.4;
          }
          100% {
            transform: translate(20px, -120px) scale(0.4);
            opacity: 0;
          }
        }
      `}</style>

      {sparks.map((pos, i) => (
        <div
          key={"spark" + i}
          className="spark"
          style={{
            top: `${pos.top}%`,
            left: `${pos.left}%`,
            width: `${pos.size}px`,
            height: `${pos.size}px`,
            animationName:
              pos.direction === "left" ? "sparkUpLeft" : "sparkUpRight",
            animationDuration: `${pos.duration.toFixed(2)}s`,
            animationDelay: `${pos.delay.toFixed(2)}s`,
          }}
        />
      ))}

      {ashes.map((pos, i) => (
        <div
          key={"ash" + i}
          className="ash"
          style={{
            top: `${pos.top}%`,
            left: `${pos.left}%`,
            width: `${pos.size}px`,
            height: `${pos.size}px`,
            animationName:
              pos.direction === "left" ? "ashUpLeft" : "ashUpRight",
            animationDuration: `${pos.duration.toFixed(2)}s`,
            animationDelay: `${pos.delay.toFixed(2)}s`,
          }}
        />
      ))}
    </>
  );
}

function App() {
  const backgroundStyle = {
    backgroundImage: `url(${process.env.PUBLIC_URL}/images/background.png)`,
    backgroundAttachment: "fixed",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    minHeight: "100vh",
    position: "relative",
    overflow: "hidden",
  };

  return (
    <>
      <Navbar />
      <div style={backgroundStyle}>
        <div className="pt-20 relative">
          <Hero />
          <About />
          <Projects />
          <Services />
          <Contact />
          <Footer />

          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              pointerEvents: "none",
              zIndex: 1000,
              overflow: "visible",
            }}>
            <SparksAndAshes />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
