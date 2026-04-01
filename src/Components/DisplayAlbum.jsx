import React, { useContext } from 'react'
import Navbar from './Navbar'
import { useParams } from 'react-router-dom'
import { albumsData, assets, songsData } from '../assets/assets'
import { PlayerContext } from '../Context/PlayContext'

const DisplayAlbum = () => {
  const { id } = useParams()
  const Data = albumsData[id]

  const { playWithId } = useContext(PlayerContext)

  if (!Data) return null

  return (
    <>
      <Navbar />

      {/* Album Info */}
      <div className="mt-6 sm:mt-10 flex flex-col md:flex-row gap-6 md:gap-8 md:items-end">
        
        <img 
          className="w-36 sm:w-44 md:w-48 rounded" 
          src={Data.image} 
          alt={Data.name} 
        />

        <div className="flex flex-col text-center md:text-left">
          <p className="text-sm text-gray-400">Playlist</p>

          <h2 className="text-2xl sm:text-4xl md:text-6xl font-bold mb-2 md:mb-4">
            {Data.name}
          </h2>

          <h4 className="text-sm sm:text-base text-gray-300">
            {Data.desc}
          </h4>

          <p className="mt-2 text-xs sm:text-sm text-gray-400 flex flex-wrap items-center justify-center md:justify-start gap-1">
            <img src={assets.spotify_logo} alt="" className="w-4 sm:w-5" />
            <b className="text-white">Spotify</b>
            • 1,323,154 likes
            • <b>50 songs,</b> about 2 hr 30 min
          </p>
        </div>
      </div>

      {/* Table Header */}
      <div className="grid grid-cols-2 sm:grid-cols-4 mt-8 mb-2 px-2 text-[#a7a7a7] text-xs sm:text-sm">
        <p><b className='mr-3'>#</b>Title</p>
        <p className="hidden sm:block">Album</p>
        <p className="hidden md:block">Date Added</p>
        <img src={assets.clock_icon} alt="" className="ml-auto w-4" />
      </div>

      <hr className="border-[#2a2a2a]" />

      {/* Songs List */}
      {songsData.map((item, index) => (
        <div
          onClick={() => playWithId(item.id)}
          key={index}
          className="
            grid grid-cols-2 sm:grid-cols-4 
            gap-2 
            p-2 
            items-center 
            text-[#a7a7a7] 
            hover:bg-[#ffffff1a] 
            cursor-pointer 
            rounded
          "
        >

          {/* Title */}
          <p className="text-white flex items-center gap-2 truncate">
            <span className="text-[#a7a7a7] w-4">{index + 1}</span>
            <img className="w-8 sm:w-10 rounded" src={item.image} alt="" />
            <span className="truncate">{item.name}</span>
          </p>

          {/* Album */}
          <p className="text-sm hidden sm:block truncate">
            {Data.name}
          </p>

          {/* Date */}
          <p className="text-sm hidden md:block">
            5 days ago
          </p>

          {/* Duration */}
          <p className="text-sm text-right">
            {item.duration}
          </p>

        </div>
      ))}
    </>
  )
}

export default DisplayAlbum