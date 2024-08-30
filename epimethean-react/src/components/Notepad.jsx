import React from "react";
import Note from "./Note";
import Column from "./Column";

function setColCount(){
    let padWidth = 0;
    try{
        padWidth = document.getElementById("notepad").offsetWidth;
    } catch {
        padWidth = 0.8 * document.body.offsetWidth;
    }
    console.log(padWidth);
    return Math.floor(padWidth/296);
    //width of 200px note (for now)
}

window.addEventListener('resize', ()=>{
    //adjColumns();
});

function Notepad(){
    let columns = [];

    let colCount = setColCount();
    console.log(colCount);
    for (let i = colCount; i > 0; i--){
        columns.push(<Column id={i} />);
    }

    return(
        <div id="notepad" style={padStyle}>
            {columns}
        </div>
    );
}

const padStyle = {
    padding: "0px 2rem",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    gap:"1rem",
}

export default Notepad;

