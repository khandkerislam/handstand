import React, {Component, useState, useEffect} from 'react';

const Song = (props)=>{

    
    const [song, loadSong] = useState([]);
    //const [name, setName] = useState(props.name);
    
    const getSong = () => {
        //loadSong(updatedSong);
        whyGod();
        console.log('inside button',song);
        return props.activeSong(song);
    }

    const whyGod = () =>{
        return fetchData();
    }
    
    const url = `http://localhost:3000/music/getSong/${props.name}`;

    const fetchData = () => {
        return fetch(url)
        .then(res => res.json())
        .then((data) => {
            if(!Array.isArray(data)) data = [];
            return data;
        })
        .then((data)=>{
            loadSong(data);
            console.log('wtf',song);
        })
        .catch(err=>console.log(err));
    }

    useEffect(()=>{
        return fetchData();
    },[]);
    return(
        <div>
            <button onClick={getSong}>{props.name}</button>
        </div>
    )
    
}

export default Song;