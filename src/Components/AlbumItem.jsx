import React from 'react'
import { useNavigate } from 'react-router-dom'

const AlbumItem = ({ image, name, desc, id }) => {

  const navigate = useNavigate()

  return (
    <div 
      onClick={() => navigate(`/album/${id}`)} 
      className="
        w-full 
        max-w-[200px] 
        sm:max-w-[220px] 
        md:max-w-[240px]
        p-2 sm:p-3 
        rounded-lg 
        cursor-pointer 
        hover:bg-[#ffffff1a] 
        transition
      "
    >
      
      {/* Image */}
      <img 
        className="
          w-full 
          h-[140px] 
          sm:h-[160px] 
          md:h-[180px] 
          object-cover 
          rounded
        " 
        src={image} 
        alt={name} 
      />

      {/* Title */}
      <p className="font-bold mt-2 text-sm sm:text-base truncate">
        {name}
      </p>

      {/* Description */}
      <p className="text-slate-300 text-xs sm:text-sm line-clamp-2">
        {desc}
      </p>

    </div>
  )
}

export default AlbumItem