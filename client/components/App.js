import React, { Component, useState, useEffect, useRef } from 'react';
import Grid from './Grid';
import SongList from './SongList';
const App = () => {
/* 
  const [grid, setGrid] = useState([false,false,false,false,false,false,false]);
  const [title, setTitle] = useState('');

  const songRef = useRef();

  const getCurrentSong=(song)=>{
    songRef.current = song;
    setGrid(songRef.current);
  }

  const setSong = {
    getCurrentSong
  }

  const updateGrid = (data) => {
    setGrid(data);
  } */

  return (
    <div className="App">
      <h1>I don't know why, you have to click on a song twice to get the updated version</h1>
      <Grid/>
    </div>
  );
}
export default App;
