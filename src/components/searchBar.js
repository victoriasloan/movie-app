import React, { Component } from 'react';


class searchBar extends Component {
    render() {
        return (
            <div>
                <p>Search by Film Name:</p>
                <input type="text" name="name" id="filmname"></input>
            </div>
        );
    }
}


export default searchBar;
