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
  const sparks = Array.from({ length: 50 }, (_, i) => ({
    top: randomBetween(0, 100),
    left: randomBetween(0, 100),
    delay: Math.random() * 3,
    direction: i % 2 === 0 ? "left" : "right",
    duration: randomBetween(2, 4),
    size: randomBetween(2, 4),
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
          0% { transform: translate(0,0) scale(1); opacity: 0.8; }
          100% { transform: translate(-30px,-150px) scale(0.5); opacity: 0; }
        }
        @keyframes sparkUpRight {
          0% { transform: translate(0,0) scale(1); opacity: 0.8; }
          100% { transform: translate(30px,-150px) scale(0.5); opacity: 0; }
        }
        @keyframes ashUpLeft {
          0% { transform: translate(0,0) scale(1); opacity: 0.4; }
          100% { transform: translate(-20px,-120px) scale(0.4); opacity: 0; }
        }
        @keyframes ashUpRight {
          0% { transform: translate(0,0) scale(1); opacity: 0.4; }
          100% { transform: translate(20px,-120px) scale(0.4); opacity: 0; }
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
            animationName: pos.direction === "left" ? "sparkUpLeft" : "sparkUpRight",
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
            animationName: pos.direction === "left" ? "ashUpLeft" : "ashUpRight",
            animationDuration: `${pos.duration.toFixed(2)}s`,
            animationDelay: `${pos.delay.toFixed(2)}s`,
          }}
        />
      ))}
    </>
  );
}

function App() {
  return (
    <>
      <Navbar />
      <div style={{ position: "relative", minHeight: "100vh", overflow: "hidden" }}>
        {/* Background fix pentru iPhone */}
        <img
          src={`${process.env.PUBLIC_URL}/images/background.jpg`}
          alt="background"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            objectFit: "cover",
            zIndex: -1,
          }}
        />

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
            }}
          >
            <SparksAndAshes />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
