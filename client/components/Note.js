import React, { Component, useState,useEffect } from 'react';


const Note = (props)=>{
    const [active, setActive] = useState(props.active);
    
    const toggle=()=>{
        setActive(!props.active)
        props.play()
    }
    useEffect(() => {
        setActive(props.active);
    }, [props.active]);

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