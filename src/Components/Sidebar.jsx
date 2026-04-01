import React, { useState } from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Sidebar = () => {

  const navigate = useNavigate()
  const [open, setOpen] = useState(false)

  return (
    <>
      {/* Mobile Toggle Button */}
      <div className="lg:hidden p-2">
        <img 
          src={assets.stack_icon} 
          onClick={() => setOpen(true)} 
          className="w-7 cursor-pointer" 
          alt="" 
        />
      </div>

      {/* Overlay (mobile) */}
      {open && (
        <div 
          onClick={() => setOpen(false)} 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
        />
      )}

      {/* Sidebar */}
      <div className={`
        fixed lg:static top-0 left-0 h-full 
        w-[70%] sm:w-[60%] md:w-[40%] lg:w-[25%]
        bg-black z-50 p-2 flex flex-col gap-2 text-white
        transform transition-transform duration-300
        ${open ? "translate-x-0" : "-translate-x-full"} 
        lg:translate-x-0
      `}>

        {/* Top Section */}
        <div className="bg-[#121212] h-[15%] rounded flex flex-col justify-around">

          <div 
            onClick={() => { navigate('/'); setOpen(false) }} 
            className="flex items-center gap-3 pl-6 cursor-pointer"
          >
            <img className='w-6' src={assets.home_icon} alt="" />
            <p className="font-bold">Home</p>
          </div>

          <div className="flex items-center gap-3 pl-6 cursor-pointer">
            <img className='w-6' src={assets.search_icon} alt="" />
            <p className="font-bold">Search</p>
          </div>

        </div>

        {/* Library Section */}
        <div className="bg-[#121212] h-[85%] rounded overflow-auto">

          {/* Header */}
          <div className="p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img className='w-7' src={assets.stack_icon} alt="" />
              <p className="font-semibold">Your Library</p>
            </div>

            <div className="flex items-center gap-3">
              <img src={assets.arrow_icon} alt="" className="w-5 cursor-pointer" />
              <img src={assets.plus_icon} alt="" className="w-5 cursor-pointer" />
            </div>
          </div>

          {/* Playlist Box */}
          <div className="p-4 bg-[#242424] m-2 rounded flex flex-col gap-1">
            <h1 className="font-semibold text-sm">Create your first playlist</h1>
            <p className="text-xs text-gray-300">It's easy, we'll help you</p>
            <button className='px-4 py-1.5 bg-white text-sm text-black rounded-full mt-3 w-fit'>
              Create Playlist
            </button>
          </div>

          {/* Podcast Box */}
          <div className="p-4 bg-[#242424] m-2 rounded flex flex-col gap-1 mt-4">
            <h1 className="font-semibold text-sm">Let's find some podcasts</h1>
            <p className="text-xs text-gray-300">We'll keep you updated</p>
            <button className='px-4 py-1.5 bg-white text-sm text-black rounded-full mt-3 w-fit'>
              Browse Podcasts
            </button>
          </div>

        </div>

      </div>
    </>
  )
}

export default Sidebar