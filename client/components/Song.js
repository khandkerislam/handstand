import React, {Component, useState, useEffect} from 'react';

const Song = (props)=>{

    
    const [song, loadSong] = useState([]);
    
    const getSong = () => {
        return props.activeSong(song);
    }
    
    useEffect(()=>{
        const url = `http://localhost:3000/music/getSong/${props.name}`;

        const fetchData = () => {
            fetch(url)
            .then(res => res.json())
            .then((song) => {
                if(!Array.isArray(song)) song = [];
                return loadSong(song);
            })
            .catch(err=>console.log(err));
            
        }
        fetchData();
    },[]);
    return(
        <div>
            <button onClick={getSong}>{props.name}</button>
        </div>
    )
    
}

export default Song;