import React from 'react'
import { useState } from 'react';
import CertificateContent from './CertificateContent';
import TechStackContent from './TechStackContent';

function Techstack() {
    const [activeTab, setActiveTab] = useState("techstack");
  return (
    <div>
     <div className="w-full flex justify-center mt-12">
      <div className="relative flex bg-gray-800 rounded-md p-2 shadow-xl w-[420px]">
        {/* Sliding Indicator */}
        <div
          className="absolute top-0 left-0 h-full w-1/2 bg-black/30 rounded-md transition-all duration-500"
          style={{
            transform: activeTab === "techstack" ? "translateX(0%)" : "translateX(100%)",
          }}
        ></div>

        {/* Tab Buttons */}
        <button
          className={`relative z-10 w-1/2 py-5 text-xl font-bold transition-all duration-300 rounded-md ${
            activeTab === "techstack"
              ? "text-white"
              : "text-cyan-300 hover:text-white"
          }`}
          onClick={() => setActiveTab("techstack")}
        >
          Tech Stack
        </button>

        <button
          className={`relative z-10 w-1/2 py-5 text-xl font-bold transition-all duration-300 rounded-md ${
            activeTab === "certificate"
              ? "text-white"
              : "text-cyan-300 hover:text-white"
          }`}
          onClick={() => setActiveTab("certificate")}
        >
          Certificates
        </button>
      </div>
    </div>
    <div className="mt-10 w-full">
        {activeTab === "techstack" && <TechStackContent />}
        {activeTab === "certificate" && <CertificateContent />}
      </div>
    </div>
  )
}

export default Techstack