import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { PlayerContext } from '../Context/PlayContext'

const Player = () => {

  const {
    track,
    seekBar,
    seekBg,
    playStatus,
    play,
    pause,
    time,
    previous,
    next,
    seekSong
  } = useContext(PlayerContext)

  return (
    <div className='h-[12%] sm:h-[10%] bg-black flex flex-col sm:flex-row justify-between items-center text-white px-3 sm:px-4 py-2'>

      {/* LEFT (Hidden on small screens) */}
      <div className="hidden md:flex items-center gap-3 w-1/4">
        <img className='w-10 sm:w-12 rounded' src={track.image} alt="" />
        <div className="truncate">
          <p className="text-sm truncate">{track.name}</p>
          <p className="text-xs text-gray-400 truncate">
            {track.desc.slice(0, 15)}
          </p>
        </div>
      </div>

      {/* CENTER */}
      <div className="flex flex-col items-center gap-1 w-full sm:w-2/4">

        {/* Controls */}
        <div className="flex items-center gap-3 sm:gap-4">
          <img src={assets.shuffle_icon} className="w-3 sm:w-4 cursor-pointer" />
          <img onClick={previous} src={assets.prev_icon} className="w-3 sm:w-4 cursor-pointer" />

          {
            playStatus
              ? <img onClick={pause} src={assets.pause_icon} className="w-4 sm:w-5 cursor-pointer" />
              : <img onClick={play} src={assets.play_icon} className="w-4 sm:w-5 cursor-pointer" />
          }

          <img onClick={next} src={assets.next_icon} className="w-3 sm:w-4 cursor-pointer" />
          <img src={assets.loop_icon} className="w-3 sm:w-4 cursor-pointer" />
        </div>

        {/* Seek Bar */}
        <div className="flex items-center gap-2 sm:gap-4 w-full">

          <p className="text-[10px] sm:text-xs">
            {time.currentTime.minute}:{time.currentTime.second}
          </p>

          <div
            ref={seekBg}
            onClick={seekSong}
            className="flex-1 bg-gray-400 rounded-full cursor-pointer h-1"
          >
            <hr
              ref={seekBar}
              className='h-1 border-none w-0 bg-green-500 rounded-full'
            />
          </div>

          <p className="text-[10px] sm:text-xs">
            {time.totalTime.minute}:{time.totalTime.second}
          </p>

        </div>
      </div>

      {/* RIGHT (Hidden on small screens) */}
      <div className="hidden lg:flex items-center gap-2 opacity-75 w-1/4 justify-end">
        <img src={assets.plays_icon} className="w-4" />
        <img src={assets.mic_icon} className="w-4" />
        <img src={assets.queue_icon} className="w-4" />
        <img src={assets.speaker_icon} className="w-4" />
        <img src={assets.volume_icon} className="w-4" />

        <div className="w-20 bg-slate-50 h-1 rounded"></div>

        <img src={assets.mini_player_icon} className="w-4" />
        <img src={assets.zoom_icon} className="w-4" />
      </div>

    </div>
  )
}

export default Player