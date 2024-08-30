import React from "react";

function Notebrowser(){
    return(
        <div id="browser" class="selected">
            <span id="category_search" class="material-symbols-outlined">category_search</span>
            <select id="textEntry">
                <option>test 1</option>
                <option>test 2</option>
            </select>
        </div>
    );
}

export default Notebrowser;