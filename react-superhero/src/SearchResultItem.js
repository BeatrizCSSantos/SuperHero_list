import React from 'react';

function SearchResultItem (props) {
    return (
        <div className="search-results">
        <div className="left">
            <img src="https://www.superherodb.com/pictures2/portraits/10/100/10441.jpg" alt="super pic"></img>

        </div>
        <div className="right">
            <h1>batman beyond</h1>
            <div className="stats">
                <div>Strength:26</div>
                <div>Strength:26</div>
                <div>Strength:26</div>
             </div>
        </div>
    </div>
    );
}

export default SearchResultItem;