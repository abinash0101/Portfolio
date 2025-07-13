import React from 'react'
import SpotlightCard from './SpotlightCard'
import Deloitte from './assets/deloitte Cyber security_page-0001.jpg'
import DSA from './assets/certificate-sigma-50-672b17223c33c36b830d9022 (1)_page-0001.jpg'
function CertificateContent() {
   
  return (
    <div className="flex flex-wrap justify-center mt-10 mb-6 gap-6 px-4">
  {/* Certificate 1 */}
  <SpotlightCard className="custom-spotlight-card w-full sm:w-[300px] text-blue-200 p-4" spotlightColor="rgba(0, 229, 255, 0.2)">
    <div className="flex flex-col justify-between h-full">
      <div className="group relative rounded-lg overflow-hidden border-2 border-yellow-500 shadow-lg transition-transform duration-500 hover:rotate-1 hover:scale-[1.03] hover:shadow-yellow-400/40">
        {/* Certificate Image */}
        <img
          src={Deloitte}
          alt="Certificate"
          className="w-full h-auto object-cover transition duration-500 group-hover:blur-sm"
        />
        {/* Overlay Text */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-black/60 text-white text-lg font-semibold transition-all duration-500">
          View Certificate
        </div>
      </div>
    </div>
  </SpotlightCard>

  {/* Certificate 2 */}
  <SpotlightCard className="custom-spotlight-card w-full sm:w-[300px] text-blue-200 p-4" spotlightColor="rgba(0, 229, 255, 0.2)">
    <div className="flex flex-col justify-between h-full">
      <div className="group relative rounded-lg overflow-hidden border-2 border-yellow-500 shadow-lg transition-transform duration-500 hover:rotate-1 hover:scale-[1.03] hover:shadow-yellow-400/40">
        {/* Certificate Image */}
        <img
          src={DSA}
          alt="DSA Certificate"
          className="w-full h-auto object-cover transition duration-500 group-hover:blur-sm"
        />
        {/* Overlay Text */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-black/60 text-white text-lg font-semibold transition-all duration-500">
          View DSA Certificate
        </div>
      </div>
    </div>
  </SpotlightCard>
</div>

  )
}

export default CertificateContent