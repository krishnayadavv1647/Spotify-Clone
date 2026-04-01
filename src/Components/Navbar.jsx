import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate()

  return (
    <>
      {/* Top Bar */}
      <div className="w-full flex justify-between items-center">

        {/* Left */}
        <div className="flex items-center gap-2">
          <img 
            onClick={() => navigate(-1)} 
            className="w-7 sm:w-8 bg-black p-2 rounded-full cursor-pointer" 
            src={assets.arrow_left} 
            alt="" 
          />
          <img 
            onClick={() => navigate(1)} 
            className="w-7 sm:w-8 bg-black p-2 rounded-full cursor-pointer" 
            src={assets.arrow_right} 
            alt="" 
          />
        </div>

        {/* Right */}
        <div className="flex items-center gap-2 sm:gap-4">

          {/* Hidden on small screens */}
          <p className="bg-white text-black text-xs sm:text-sm px-3 py-1 rounded-2xl hidden md:block cursor-pointer">
            Explore Premium
          </p>

          <p className="bg-black text-xs sm:text-sm px-3 py-1 rounded-2xl cursor-pointer">
            Install App
          </p>

          <p className="bg-purple-500 text-black w-6 h-6 sm:w-7 sm:h-7 text-xs sm:text-sm rounded-full flex items-center justify-center">
            K
          </p>

        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center gap-2 mt-4 overflow-x-auto">

        <p className="bg-white text-black px-3 sm:px-4 py-1 rounded-2xl text-xs sm:text-sm whitespace-nowrap cursor-pointer">
          All
        </p>

        <p className="bg-black px-3 sm:px-4 py-1 rounded-2xl text-xs sm:text-sm whitespace-nowrap cursor-pointer">
          Music
        </p>

        <p className="bg-black px-3 sm:px-4 py-1 rounded-2xl text-xs sm:text-sm whitespace-nowrap cursor-pointer">
          Podcasts
        </p>

      </div>
    </>
  )
}

export default Navbar