import { useState, useRef } from "react";
import { Toaster } from 'react-hot-toast';
import SplashCursor from "./SplashCursor.jsx";
import Navbar from "./Navbar.jsx";
import DecayCard from "./DecayCard.jsx";
import picture from "./assets/IMG_20250508_004349.jpg";
import HomeLeft from "./HomeLeft.jsx";
import GradientText from "./GradientText.jsx";
import About from "./About.jsx";
import Stack from "./Stack.jsx";
import FadeContent from "./FadeContent.jsx";
import Project from "./Project.jsx";
import Techstack from "./Techstack.jsx";
import Contact from "./Contact.jsx";

function App() {
  const images = [
    {
      id: 1,
      img: "https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?q=80&w=500&auto=format",
    },
    {
      id: 2,
      img: "https://images.unsplash.com/photo-1449844908441-8829872d2607?q=80&w=500&auto=format",
    },
    {
      id: 3,
      img: "https://images.unsplash.com/photo-1452626212852-811d58933cae?q=80&w=500&auto=format",
    },
    {
      id: 4,
      img: "https://images.unsplash.com/photo-1572120360610-d971b9d7767c?q=80&w=500&auto=format",
    },
  ];
  return (
    <div>
       <Toaster position="top-right"  toastOptions={{
          duration: 3000,
          style: {
            background: '#0f172a',
            color: '#67e8f9',
            borderRadius: '8px',
          },
        }}  />
      {/* <SplashCursor /> */}
      <Navbar />
      <section id="/">
        <div className="min-h-screen flex flex-col md:flex-row justify-center items-center  gap-8 px-4">
          <div>
            <HomeLeft />
          </div>
          <div className="opacity-70 ">
            <DecayCard width={300} height={300} image={picture}></DecayCard>
          </div>
        </div>
      </section>
      <div className="min-h-screen flex  justify-center">
        <div className="">
          <section
            id="about"
            className="w-full md:w-1/1 text-center md:text-left"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <GradientText
                colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
                animationSpeed={3}
                showBorder={false}
                className="custom-class"
              >
                About Me!
              </GradientText>
            </h1>
            <About />
          </section>
        </div>
        <div className="mt-28 md:mr-28">
          <Stack
            randomRotation={true}
            sensitivity={180}
            sendToBackOnClick={false}
            cardDimensions={{ width: 280, height: 300 }}
            cardsData={images}
          />
        </div>
      </div>

      <section id="projects" className="min-h-screen flex  justify-center">
        <FadeContent
          blur={true}
          duration={1000}
          easing="ease-out"
          initialOpacity={0}
        >
          <div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <GradientText
                colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
                animationSpeed={3}
                showBorder={false}
                className="custom-class"
              >
                Project!
              </GradientText>
            </h1>
            <Project />
          </div>
        </FadeContent>
      </section>
      <section id="Techstack">
        <Techstack />
      </section>

      <section id="contact">
           <Contact />
      </section>
      
    </div>
  );
}

export default App;
