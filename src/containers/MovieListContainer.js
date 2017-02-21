import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMovies } from '../actions/actions';
import { bindActionCreators } from 'redux';

class MovieList extends Component {



    render() {
        console.log(this.props);
        return (
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>Search Movies</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.movies.title}
                    </tbody>
                </table>
        );
    }

};


function mapStateToProps(state) {
    //whatever is returned will show up as props inside of MovieListContainer
    return {
        movies: state.movieData
    };
}

function mapDispatchToProps(dispatch) {
    // whenever selectMovie is called, the result should be passed to dispatch
    // the dispatch will send the action to all the reducers
    return bindActionCreators({ fetchMovies: fetchMovies }, dispatch);
}

MovieList.propTypes = {
    fetchMovies: React.PropTypes.func,
    movies: React.PropTypes.object
};


export default connect(mapStateToProps, mapDispatchToProps)(MovieList);
