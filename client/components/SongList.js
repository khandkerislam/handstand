import React, { Component, useState, useEffect } from 'react';
import { ProgressPlugin } from 'webpack';
import { findOneAndUpdate } from '../../server/SongModel';
import Song from './Song';
//import { Link } from 'react-router-dom';

const SongList = (props)=> {

    const [songs, setSongs] = useState([]);
    const [currentSong, setCurrentSong] = useState([]); 
    const { getCurrentSong } = props.setSong

    const updateSong = (data)=>{
        setCurrentSong(data);
        return getCurrentSong(currentSong);
    }

    useEffect(()=>{
        const url = "http://localhost:3000/music";

        const fetchData = () => {
            fetch(url)
                .then(res => res.json())
                .then((songs) => {
                    if(!Array.isArray(songs)) songs = [];
                    return setSongs(songs);
                })
                .catch(err=>console.log(err));
        }
        fetchData();
    },[]);

    const songElems = songs.map((song,i)=>{

        return(
          <Song activeSong={updateSong} name={song.name}/>
        )
    })
    return(
        <div>
           <h2>Load Songs</h2>
           {songElems}
        </div>
    )
}


export default SongList;