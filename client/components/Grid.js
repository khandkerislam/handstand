import React, { Component, useEffect, useState } from 'react';
import * as Tone from "tone";

import SongList from './SongList';
import Note from './Note';
const Grid = (props) => {
    const synth = new Tone.Synth().toDestination();
    const
    //const {grid, updateGrid} = props;
    const noteMap = {
      0: 'C',
      1: 'D',
      2: 'E',
      3: 'F',
      4: 'G',
      5: 'A',
      6: 'B'
    }

    function playNote(note,row, column) {
      const copy = grid.slice();
      const value = copy[row][column];
      copy[row][column] = !value;
      setGrid(copy);
      synth.triggerAttackRelease(`${note}4`, "8n");
    }
    const arr = Array.from(Array(7), () => new Array(7).fill(false));
    const [grid, setGrid] = useState(arr);
    const [title, setTitle] = useState('');
    const [songCount, setSongCount] = useState(0);

    const updateGrid = (data)=>{
      setGrid(data);
    }

    const playGrid = (grid)=> {
      grid.forEach((note,index) => {
        setTimeout(()=>{
          if(note){
            synth.triggerAttackRelease(`${noteMap[index]}4`, "8n");
          }
        },index * 1000)
      });
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
              <div className="D">
                <Note play={() => playNote("D",1,0)} text="D" active={grid[1][0]}/>
                <Note play={() => playNote("D",1,1)} text="D" active={grid[1][1]}/>
                <Note play={() => playNote("D",1,2)} text="D" active={grid[1][2]}/>
                <Note play={() => playNote("D",1,3)} text="D" active={grid[1][3]}/>
                <Note play={() => playNote("D",1,4)} text="D" active={grid[1][4]}/>
                <Note play={() => playNote("D",1,5)} text="D" active={grid[1][5]}/>
                <Note play={() => playNote("D",1,6)} text="D" active={grid[1][6]}/>
              </div>
              <div className="C">
                <Note play={() => playNote("C",0,0)} text="C" active={grid[0][0]}/>
                <Note play={() => playNote("C",0,1)} text="C" active={grid[0][1]}/>
                <Note play={() => playNote("C",0,2)} text="C" active={grid[0][2]}/>
                <Note play={() => playNote("C",0,3)} text="C" active={grid[0][3]}/>
                <Note play={() => playNote("C",0,4)} text="C" active={grid[0][4]}/>
                <Note play={() => playNote("C",0,5)} text="C" active={grid[0][5]}/>
                <Note play={() => playNote("C",0,6)} text="C" active={grid[0][6]}/>
              </div>
            </div>
            <input type="text" onChange={event => setTitle(event.target.value)} value={title}></input>
            <div>
              <button onClick={saveGrid}>Save</button>
              <button onClick={()=>playGrid(grid)}>Play</button>
            </div>
            <SongList updateGrid = {updateGrid} newSong={songCount}/>
        </>
    ) 
}

export default Grid;
