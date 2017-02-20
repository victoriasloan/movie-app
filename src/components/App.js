import React, { Component } from 'react';
import MovieList from '../containers/MovieListContainer';
import MovieDetail from '../containers/MovieDetailContainer';

export default class App extends Component {
    render() {
        return (
            <div>
                <MovieList />
                <MovieDetail />
            </div>
        );
    }
}
