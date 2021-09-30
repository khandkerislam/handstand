import React, { Component, useEffect, useState } from 'react';
import * as Tone from "tone";

import SongList from './SongList';
import Note from './Note';
const Grid = (props) => {

    const synth = new Tone.PolySynth().toDestination();
    //const {grid, updateGrid} = props;
    const noteMap = {
      0: 'C4',
      1: 'D4',
      2: 'E4',
      3: 'F4',
      4: 'G4',
      5: 'A4',
      6: 'B4'
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
      for( let matrix = 0; matrix < grid.length; matrix++){
        const column = [];
        for(let i=0; i<grid.length; i++){
          if(grid[i][matrix]){
            column.push(noteMap[i]);
          }
        }
        console.log(column);
        setTimeout(()=>{
            synth.triggerAttackRelease(column, "8n");
        },matrix * 1000)
      }
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
              <div className="B">
                <Note play={() => playNote("B",6,0)} text="B" active={grid[6][0]}/>
                <Note play={() => playNote("B",6,1)} text="B" active={grid[6][1]}/>
                <Note play={() => playNote("B",6,2)} text="B" active={grid[6][2]}/>
                <Note play={() => playNote("B",6,3)} text="B" active={grid[6][3]}/>
                <Note play={() => playNote("B",6,4)} text="B" active={grid[6][4]}/>
                <Note play={() => playNote("B",6,5)} text="B" active={grid[6][5]}/>
                <Note play={() => playNote("B",6,6)} text="B" active={grid[6][6]}/>
              </div>
              <div className="A">
                <Note play={() => playNote("A",5,0)} text="A" active={grid[5][0]}/>
                <Note play={() => playNote("A",5,1)} text="A" active={grid[5][1]}/>
                <Note play={() => playNote("A",5,2)} text="A" active={grid[5][2]}/>
                <Note play={() => playNote("A",5,3)} text="A" active={grid[5][3]}/>
                <Note play={() => playNote("A",5,4)} text="A" active={grid[5][4]}/>
                <Note play={() => playNote("A",5,5)} text="A" active={grid[5][5]}/>
                <Note play={() => playNote("A",5,6)} text="A" active={grid[5][6]}/>
              </div>
              <div className="G">
                <Note play={() => playNote("G",4,0)} text="G" active={grid[4][0]}/>
                <Note play={() => playNote("G",4,1)} text="G" active={grid[4][1]}/>
                <Note play={() => playNote("G",4,2)} text="G" active={grid[4][2]}/>
                <Note play={() => playNote("G",4,3)} text="G" active={grid[4][3]}/>
                <Note play={() => playNote("G",4,4)} text="G" active={grid[4][4]}/>
                <Note play={() => playNote("G",4,5)} text="G" active={grid[4][5]}/>
                <Note play={() => playNote("G",4,6)} text="G" active={grid[4][6]}/>
              </div>
              <div className="F">
                <Note play={() => playNote("F",3,0)} text="F" active={grid[3][0]}/>
                <Note play={() => playNote("F",3,1)} text="F" active={grid[3][1]}/>
                <Note play={() => playNote("F",3,2)} text="F" active={grid[3][2]}/>
                <Note play={() => playNote("F",3,3)} text="F" active={grid[3][3]}/>
                <Note play={() => playNote("F",3,4)} text="F" active={grid[3][4]}/>
                <Note play={() => playNote("F",3,5)} text="F" active={grid[3][5]}/>
                <Note play={() => playNote("F",3,6)} text="F" active={grid[3][6]}/>
              </div>
              <div className="E">
                <Note play={() => playNote("E",2,0)} text="E" active={grid[2][0]}/>
                <Note play={() => playNote("E",2,1)} text="E" active={grid[2][1]}/>
                <Note play={() => playNote("E",2,2)} text="E" active={grid[2][2]}/>
                <Note play={() => playNote("E",2,3)} text="E" active={grid[2][3]}/>
                <Note play={() => playNote("E",2,4)} text="E" active={grid[2][4]}/>
                <Note play={() => playNote("E",2,5)} text="E" active={grid[2][5]}/>
                <Note play={() => playNote("E",2,6)} text="E" active={grid[2][6]}/>
              </div>
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
