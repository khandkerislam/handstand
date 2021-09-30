import React, { Component, useEffect, useState } from 'react';
import * as Tone from "tone";
import Note from './Note';
import SongList from './SongList';
const Grid = (props) => {
    const synth = new Tone.Synth().toDestination();
    //const {grid, updateGrid} = props;

    function playNote(note,index) {
      const copy = grid.slice();
      const value = copy[index];
      copy[index] = !value;
      setGrid(copy);
      synth.triggerAttackRelease(`${note}4`, "8n");
    }

    const [grid, setGrid] = useState([false,false,false,false,false,false,false]);
    const [title, setTitle] = useState('');
    const [songCount, setSongCount] = useState(0);

    const updateGrid = (data)=>{
      setGrid(data);
    }
    const saveGrid = () => {
        // check if name is empty
          fetch('http://localhost:3000/music/song', {
            method: 'POST',
            headers: {
              'Content-Type': 'Application/JSON'
            },
            body: JSON.stringify({song:grid,name:title})
          })
            .then(resp => resp.json())
            .then((data) => {
              console.log(data);
              setTitle('');
              setSongCount(songCount + 1);
            })
            .catch(err => console.log('CreateSong fetch /music/song: ERROR: ', err));
    };

    return(
        <>
            <div className="note-wrapper">
                <Note play={() => playNote("C",0)} text="C" active={grid[0]}/>
                <Note play={() => playNote("D",1)} text="D" active={grid[1]}/>
                <Note play={() => playNote("E",2)} text="E" active={grid[2]}/>
                <Note play={() => playNote("F",3)} text="F" active={grid[3]}/>
                <Note play={() => playNote("G",4)} text="G" active={grid[4]}/>
                <Note play={() => playNote("A",5)} text="A" active={grid[5]}/>
                <Note play={() => playNote("B",6)} text="B" active={grid[6]}/>
            </div>
            <input type="text" onChange={event => setTitle(event.target.value)}></input>
            <button onClick={saveGrid}>Save</button>
            <SongList updateGrid = {updateGrid} newSong={songCount}/>
        </>
    ) 
}

export default Grid;
