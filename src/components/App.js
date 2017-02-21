import React, { Component } from 'react';
import MovieList from '../containers/MovieListContainer';
//import MovieDetail from '../containers/MovieDetailContainer';
import SearchBar from '../containers/SearchBarContainer';

export default class App extends Component {
    render() {
        return (
            <div className="container">
                <SearchBar />
                <MovieList />

            </div>
        );
    }
}
