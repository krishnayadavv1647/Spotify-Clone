import { useContext } from "react"
import Display from "./Components/Display"
import Player from "./Components/Player"
import Sidebar from "./Components/Sidebar"
import { PlayerContext } from "./Context/PlayContext"

const App = () => {

  const {audioRef,track} = useContext(PlayerContext)
  return (
    <div className=' h-screen bg-black'>
    <div className="flex h-[90%]">
      <Sidebar/>
      <Display/>
    </div>
    <Player/>
    <audio ref={audioRef} src={track.file} preload="auto"></audio>
      </div>
  )
}

export default App
