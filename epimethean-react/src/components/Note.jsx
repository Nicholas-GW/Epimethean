import React from "react";

const colorWheel = ["#420403", "#034204", "#040342"];

const NoteStyle = {
    backgroundColor: colorWheel[0],
    width: "200px",
    padding: "1rem",
    borderRadius: "2px",
    alignSelf: "center",
}

function Note(props){
    return(
        <div style={NoteStyle} data-index={props.id}>
            <h1>{props.title}</h1>
            <p>{props.content}</p>
        </div>
    );
}

export default Note;