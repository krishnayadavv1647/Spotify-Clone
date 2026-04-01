import React from 'react'
import Navbar from './Navbar'
import { albumsData, songsData } from '../assets/assets'
import AlbumItem from './AlbumItem'
import SongItem from './SongItem'

const DisplayHome = () => {
  return (
    <>
      <Navbar/>

      {/* Featured Charts */}
      <div className="mb-6">
        <h1 className="my-5 font-bold text-xl sm:text-2xl">
          Featured Charts
        </h1>

        <div className="
          grid 
          grid-cols-2 
          sm:grid-cols-3 
          md:grid-cols-4 
          lg:grid-cols-5 
          gap-4
        ">
          {albumsData.map((item, index) => (
            <AlbumItem 
              key={index}
              name={item.name} 
              image={item.image} 
              desc={item.desc} 
              id={item.id}
            />
          ))}
        </div>
      </div>

      {/* Today's Hits */}
      <div className="mb-6">
        <h1 className="my-5 font-bold text-xl sm:text-2xl">
          Today's Biggest Hits
        </h1>

        <div className="
          grid 
          grid-cols-2 
          sm:grid-cols-3 
          md:grid-cols-4 
          lg:grid-cols-5 
          gap-4
        ">
          {songsData.map((item, index) => (
            <SongItem 
              key={index}
              name={item.name} 
              image={item.image} 
              desc={item.desc} 
              id={item.id}
            />
          ))}
        </div>
      </div>
    </>
  )
}

export default DisplayHome