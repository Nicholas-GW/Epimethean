import React from "react";

function Notesearcher(){
    return(
        <div id="searcher" class="selected">
            <span id="search" class="material-symbols-outlined">search</span>
            <input type="search" placeholder="Search for a note..."></input>
        </div>
    );
}

export default Notesearcher;