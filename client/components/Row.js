import React, { Component, useState } from 'react';


const Row = (props)=>{
    const {row,note,notes} = props
    return(
            <div className="note-wrapper">
                <Note play={() => playNote(note,row,0)} text={note} active={notes[0]}/>
                <Note play={() => playNote(note,row,1)} text={note} active={notes[1]}/>
                <Note play={() => playNote(note,row,2)} text={note} active={notes[2]}/>
                <Note play={() => playNote(note,row,3)} text={note} active={notes[3]}/>
                <Note play={() => playNote(note,row,4)} text={note} active={notes[4]}/>
                <Note play={() => playNote(note,row,5)} text={note} active={notes[5]}/>
                <Note play={() => playNote(note,row,6)} text={note} active={notes[6]}/>
            </div>
    ) 
}

export default Row;