import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMovies } from '../actions/actions';
import { bindActionCreators } from 'redux';
//import R from 'ramda';

class MovieList extends Component {

    renderMovie(movieInfo) {


        const testKeys = Object.keys(movieInfo);




        console.log(testKeys);
        return (
            <tr>

                <td>Director: {movieInfo.director}</td>
                <td>Show Id: {movieInfo.show_id}</td>
                <td>Movie Title: {movieInfo.show_title}</td>
                <td>Release Year: {movieInfo.release_year}</td>
                <td>Show Cast: {movieInfo.show_cast}</td>
                <td>Movie Category: {movieInfo.category}</td>
            </tr>


        );
    }

    render() {
        return (
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>Searched Actor Movie Info</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.movies.map(this.renderMovie)}
                        </tbody>
                </table>
        );
    }

};


function mapStateToProps(state) {
    //whatever is returned will show up as props inside of MovieListContainer
    return {
        movies: state.movies.movies
    };
}

function mapDispatchToProps(dispatch) {
    // whenever fetchMovie is called, the result should be passed to dispatch
    // the dispatch will send the action to all the reducers
    return bindActionCreators({ fetchMovies: fetchMovies }, dispatch);
}

MovieList.propTypes = {
    fetchMovies: React.PropTypes.func,
    movies: React.PropTypes.array
};


export default connect(mapStateToProps, mapDispatchToProps)(MovieList);
