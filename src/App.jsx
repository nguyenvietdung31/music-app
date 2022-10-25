import './App.css';
import { Songs } from './Context';
import DetailSong from './Component/DetailSong';
import Navbar from './Component/Navbar';
//import Playing from './Component/Playing'
import ListSongs from './Component/ListSongs'
import { useState } from 'react';
import DataSongs from './data/songs.json'

function App() {
  const [song, setSong] = useState(DataSongs[0])

  const handleSetSong = (idSong) => {
    const song = DataSongs.find(song => song.id === idSong)
    if (!song) {
      setSong(DataSongs[0])
    }
    else {
      setSong(song)
    }
  }

  return (
    <div className="App">
      <Songs.Provider value={{ DataSongs, song, handleSetSong}}>
        <Navbar />
        <div className="grid grid-cols-3 bg-emerald-700	 h-screen-navbar-player overflow-hidden">
          <DetailSong />
          <ListSongs />
        </div>
        {/* <Playing/> */}
      </Songs.Provider>
    </div>
  );
}

export default App;
