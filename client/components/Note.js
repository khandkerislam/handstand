import React, { Component, useState } from 'react';


const Note = (props)=>{
    const [active, setActive] = useState(props.active);
    
    const toggle=()=>{
        setActive(!props.active)
        props.play()
    }

    return(
        <button 
            onClick={toggle}
            className={active ? 'note note-active' : 'note'} 
        >
            {props.text}
        </button>
    )
}


export default Note;