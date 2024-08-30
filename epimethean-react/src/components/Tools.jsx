import React, { useState } from "react";
import Notetaker from "./Notetaker";
import Notesearcher from "./Notesearcher";
import Notebrowser from "./Notebrowser";
import "../styles/tools.css";

function Tools(props){
    const tools = ["search", "edit", "category_search"];
    const [firstTool, set1Tool] = useState("search");
    const [secondTool, set2Tool] = useState(<Notetaker addFunc={props.addFunc} />)
    const [thirdTool, set3Tool] = useState("category_search");

    function toolSwap(event){
        //copy of tools
        let notTools = tools;
        //call function to determine which component to render based on click
        set2Tool(selectTool(event.target.innerText));
        //remove selected tool from notTools array
        notTools = notTools.filter((aTool) => aTool != event.target.innerText);
        //set remaining tools to those left in the notTools array
        set1Tool(notTools[0]);
        set3Tool(notTools[1]);
    }

    function selectTool(toolName){
        const toolMap = new Map([
            ['search', <Notesearcher />],
            ['edit', <Notetaker addFunc={props.addFunc} />],
            ['category_search', <Notebrowser />],
        ]);
        return toolMap.get(toolName);
    }

    function addNote(){
        console.log("addNote triggered in tools");
    }

    return(
        <div id="toolbox">
            <span id="search" class="material-symbols-outlined" onClick={toolSwap}>{firstTool}</span>
            <div id="selected">{secondTool}</div>
            <span id="category" class="material-symbols-outlined" onClick={toolSwap}>{thirdTool}</span>
        </div>
    )
}

export default Tools;