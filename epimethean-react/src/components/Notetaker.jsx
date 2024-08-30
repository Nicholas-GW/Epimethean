import React, { useState } from "react";

function Notetaker(props){
    const [note, setNote] = useState({
        title: "",
        content: "",
    });

    function fieldUpdate(event){
        const {name, value} = event.target
        setNote(prevNote => {
            return{
                ...prevNote,
                [name]: value
            };
        });
    }

    function confirmNote(event){
        props.addFunc(note);
        setNote({
            title:"",
            content:""
        });
        event.preventDefault();
    }

    return(
        <div id="editor" class="selected">
            <span id="edit" class="material-symbols-outlined">edit</span>
            <textarea id="titleEntry" name="title" placeholder="title" onChange={fieldUpdate} value={note.title}></textarea>
            <textarea id="textEntry" name="content" placeholder="What's on your mind?" onChange={fieldUpdate} value={note.content}></textarea>
            <button onClick={confirmNote}>Submit</button>
        </div>
    );
}

export default Notetaker;