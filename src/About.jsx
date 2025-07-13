import React from 'react'
import ScrambledText from './ScrambledText'

function About() {
  return (
    <div>
        <ScrambledText
  className="scrambled-text-demo"
  radius={70}
  duration={1.2}
  speed={0.5}
   
>
  Hi! I’m Abinash Nayak, a passionate Full Stack Web Developer who loves turning ideas into real-world applications. I specialize in building secure, responsive, and user-friendly websites using technologies like React, Node.js, Express, MongoDB, and Tailwind CSS.
  My development journey started with curiosity, but now it's driven by a purpose — to build meaningful software that’s secure, scalable, and impactful.
</ScrambledText>
    </div>
  )
}

export default About