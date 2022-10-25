import React from 'react'
import { useContext } from 'react'
import { Songs } from '../Context'
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';


function Playing() {
    const {song, handleSetSong} = useContext(Songs)
    const handleClickNext = () => {
        handleSetSong(song.id+1)
    }
    const handleClickPrev = () => {
        handleSetSong(song.id-1)
    }
  return (
    <div>
        <AudioPlayer
        className='player_music'
        header={`Now is playing: ${song.name}`}
        src={song.url}
        layout="stacked-reverse"
        showSkipControls={true}
        showJumpControls={true}
        onClickNext={handleClickNext}
        onClickPrevious={handleClickPrev}
        />
    </div>
  )
}

export default Playing