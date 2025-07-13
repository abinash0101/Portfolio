import React from 'react'
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion'

const techStack = [
  { name: "HTML5", icon: "vscode-icons:file-type-html" },
  { name: "CSS3", icon: "vscode-icons:file-type-css" },
  { name: "JavaScript", icon: "logos:javascript" },
  { name: "Tailwind CSS", icon: "logos:tailwindcss-icon" },
  { name: "Express JS", icon: "simple-icons:express" },
  { name: "Node.js", icon: "logos:nodejs-icon" },
  { name: "MongoDB", icon: "vscode-icons:file-type-mongo" },
  { name: "JWT", icon: "simple-icons:jsonwebtokens" },
  { name: "React", icon: "logos:react" },
  { name: "Java", icon: "logos:java" },
  { name: "MySQL", icon: "logos:mysql-icon" },
   
  
];
function TechStackContent() {
  return (
    <div className=''>
<div className="w-full flex justify-center items-center py-10">
  <div className="flex flex-wrap justify-center gap-8 px-6">
    {techStack.map((tech, idx) => (
      <motion.div
  key={idx}
  whileHover={{ scale: 1.1 }}
  transition={{ type: 'spring', stiffness: 300 }}
  className="bg-[#1a1a1a] rounded-2xl p-6 flex flex-col items-center justify-center w-36 h-36 shadow-md hover:shadow-[0_0_25px_rgba(59,130,246,0.7)] transition-shadow duration-300"
>
        <Icon icon={tech.icon} className="text-7xl mb-3" />
        <span className="text-base md:text-lg text-center text-blue-200">{tech.name}</span>
      </motion.div>
    ))}
  </div>
</div>

    </div>
  )
}

export default TechStackContent