import React from 'react'
import SpotlightCard from './SpotlightCard'
function Project() {
  return (
    <div className='flex flex-col md:flex-row justify-center items-center gap-8 flex-wrap'> 
        <SpotlightCard className="custom-spotlight-card h-60 w-80  text-blue-200 p-4" spotlightColor="rgba(0, 229, 255, 0.2)">
  <div className="flex flex-col justify-between h-full">
      <div>
        <h2 className="text-2xl font-semibold mb-2">🌤️ Weather App</h2>
        <p className="text-sm mb-2">
          A modern weather forecast app built with React, Tailwind CSS, and OpenWeatherMap API. Users can search any city and get live temperature, humidity, and wind speed updates.
        </p>
      </div>
      <div className="mt-2">
 <button onClick={() => window.open("https://github.com/abinash0101/Weather-Project", "_blank")} className="relative px-4 py-1 border-2 border-cyan-400 text-cyan-300 font-semibold rounded-md bg-black hover:bg-cyan-500 hover:text-black transition duration-300">
  <span className="absolute -inset-1 rounded-md bg-cyan-400 blur-md opacity-30 group-hover:opacity-60 transition-all duration-300 animate-pulse"></span>
  <span className="relative z-10">View Project</span>
</button>



      </div>
    </div>
</SpotlightCard>
<SpotlightCard className="custom-spotlight-card  h-60 w-80 text-blue-200 p-4" spotlightColor="rgba(0, 229, 255, 0.2)">
    <div className="flex flex-col justify-between h-full">
      <div>
        <h2 className="text-2xl font-semibold mb-2">🔐 Secure File Sharing</h2>
        <p className="text-sm mb-2">
          A decentralized file sharing platform using IPFS, Ethereum Smart Contracts, and RSA encryption. It ensures only the intended recipient can decrypt and access the file.
        </p>
      </div>
      <div className="mt-2">
         <button className="relative px-4 py-1 border-2 border-cyan-400 text-cyan-300 font-semibold rounded-md bg-black hover:bg-cyan-500 hover:text-black transition duration-300">
  <span className="absolute -inset-1 rounded-md bg-cyan-400 blur-md opacity-30 group-hover:opacity-60 transition-all duration-300 animate-pulse"></span>
  <span className="relative z-10">Try it out</span>
</button>
      </div>
    </div>
</SpotlightCard>
<SpotlightCard className="custom-spotlight-card  h-60 w-80 text-blue-200 p-4" spotlightColor="rgba(0, 229, 255, 0.2)">
  <div className="flex flex-col justify-between h-full">
      <div>
        <h2 className="text-2xl font-semibold mb-2">📝 Notes App</h2>
        <p className="text-sm mb-2">
          A full-stack MERN application to create, edit, and delete notes with beautiful UI. Built using MongoDB, Express, EJS, and Node.js with server-side rendering.
        </p>
      </div>
      <div className="mt-7">
         <button onClick={() => window.open("https://github.com/abinash0101/Note-App", "_blank")} className="relative px-4 py-1 border-2 border-cyan-400 text-cyan-300 font-semibold rounded-md bg-black hover:bg-cyan-500 hover:text-black transition duration-300">
  <span className="absolute -inset-1 rounded-md bg-cyan-400 blur-md opacity-30 group-hover:opacity-60 transition-all duration-300 animate-pulse"></span>
  <span className="relative z-10">View Project</span>
</button>
      </div>
    </div>
</SpotlightCard>
<SpotlightCard className="custom-spotlight-card h-60 w-80 text-blue-200 p-4" spotlightColor="rgba(0, 229, 255, 0.2)">
  <div className="flex flex-col justify-between h-full">
    <div>
      <h2 className="text-2xl font-semibold mb-2">🏕️ WanderLust</h2>
      <p className="text-sm mb-2">
        A full-stack travel stay booking platform inspired by Airbnb. Built with Node.js, Express, MongoDB, and EJS. Users can add listings, upload images, leave reviews, and explore stays using Mapbox maps.
      </p>
    </div>
    <div className="">
    <button className="flex items-center gap-2 px-4 py-1.5 text-sm text-yellow-300 border border-yellow-400 rounded-md relative animate-pulse hover:bg-yellow-400 hover:text-black transition duration-300">
  <span className="h-2 w-2 bg-yellow-300 rounded-full animate-ping absolute left-2"></span>
  <span className="relative z-10 ml-4">In Progress</span>
</button>



    </div>
  </div>
</SpotlightCard>
<SpotlightCard className="custom-spotlight-card h-60 w-80 text-blue-200 p-4" spotlightColor="rgba(0, 229, 255, 0.2)">
  <div className="flex flex-col justify-between h-full">
    <div>
      <h2 className="text-2xl font-semibold mb-2">💼 Personal Portfolio</h2>
      <p className="text-sm mb-2 mt-5">
         The one you're exploring now :)
      </p>
    </div>
    
  </div>
</SpotlightCard>

    </div>
  )
}

export default Project