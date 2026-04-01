import React from 'react'
import { Route, Routes, useLocation, useParams } from 'react-router-dom'
import DisplayHome from './DisplayHome'
import DisplayAlbum from './DisplayAlbum'
import { albumsData } from '../assets/assets'

const Display = () => {

  const location = useLocation()

  const isAlbum = location.pathname.includes("album")

  // Extract ID safely
  const albumId = isAlbum ? location.pathname.split("/")[2] : null

  const bgColor = isAlbum 
    ? albumsData[Number(albumId)]?.bgColor 
    : null

  return (
    <div 
      className="
        w-full 
        h-full
        m-1 sm:m-2 
        px-3 sm:px-6 
        pt-4 
        rounded 
        text-white 
        overflow-auto 
        lg:w-[75%] 
        lg:ml-0
      "
      style={{
        background: isAlbum
          ? `linear-gradient(${bgColor}, #121212)`
          : "#121212"
      }}
    >

      <Routes>
        <Route path='/' element={<DisplayHome/>}/>
        <Route path='/album/:id' element={<DisplayAlbum/>}/>
      </Routes>

    </div>
  )
}

export default Display