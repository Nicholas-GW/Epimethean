import React from "react";
import Note from "./Note";

const flexCol = {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
}

let noteArr = [
    <Note title="A note" content="remember to do stuff 1" id={1}/>,
    <Note title="A note" content="remember to do stuff 2" id={2}/>,
    <Note title="A note" content="remember to do stuff 3" id={3}/>,
    <Note title="A note" content="remember to do stuff 4" id={4}/>,
    <Note title="A note" content="remember to do stuff 5" id={5}/>,
    <Note title="A note" content="remember to do stuff 6" id={6}/>,
    <Note title="A note" content="remember to do stuff 7" id={7}/>,
    <Note title="A note" content="remember to do stuff 8" id={8}/>,
    <Note title="A note" content="remember to do stuff 9" id={9}/>,
]

function Column(props){
    //add notes to div that id % i = 0
    /* let note = noteArr[3];
    console.log(note.props.id);
    console.log(`notes id: ${note.id}, column id: ${props.id}`);
    console.log(`notes mod col: ${note.id % props.id}`); */
    let noteFiltered = noteArr.filter((notes) => props.id % notes.props.id == 0);
    console.log(noteFiltered);
    let noteFilteredOut = noteArr.filter((notes) => props.id % notes.props.id != 0);
    //noteArr = noteFilteredOut;
    console.log(noteFilteredOut);
    //noteArr = noteFilteredOut;
    return(
        <div style={flexCol} id={"column" + props.id}>
            {noteFiltered}
        </div>
    );
}

export default Column;