import React from 'react'
import { Link } from 'react-scroll';
function HomeLeft() {
  return (
    <div>
        <p className="text-green-400">Hi, my name is</p>
              <br />

         <h1 className="text-white text-7xl font-bold">Abinash Nayak</h1>
         <br />
         <h1 className="text-gray-400 text-6xl font-bold">Building the web,better.</h1>
         <br />
         <p className='text-gray-500 text-2xl'>Innovating the web with purpose and precision. As a full-stack engineer,<br /> I create accessible, user-friendly digital experiences that leave a lasting <br />impact.</p>
         <br /><br /><br />
          <Link
        to="contact"
        smooth={true}
        duration={700}
        offset={-50} // Adjust this if you want space from the top
      >
        <button className='border-2 h-14 w-32 border-green-600 text-white rounded-md hover:bg-green-600 transition duration-300'>
          Get in Touch
        </button>
      </Link>
    </div>
  )
}

export default HomeLeft