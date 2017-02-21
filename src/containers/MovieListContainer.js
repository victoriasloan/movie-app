/*import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectMovie } from '../actions/actions';
import { bindActionCreators } from 'redux';

class MovieList extends Component {
    renderList() {
        return this.props.movies.map((movie) => {
            return (
                <li
                    key={movie.title}
                    onClick={() => this.props.selectMovie(movie)}
                    className="list-group-item">
                    {movie.title}
                </li>
            );
        });
    }

    render() {
        return (
            <ul className="list-group col-sm-4">
                {this.renderList()}
            </ul>
        );
    }
};


function mapStateToProps(state) {
    //whatever is returned will show up as props inside of MovieListContainer
    return {
        movies: state.movies
    };
}

function mapDispatchToProps(dispatch) {
    // whenever selectMovie is called, the result should be passed to dispatch
    // the dispatch will send the action to all the reducers
    return bindActionCreators({ selectMovie: selectMovie }, dispatch);
}

MovieList.propTypes = {
    movies: React.PropTypes.array,
    selectMovie: React.PropTypes.func
};


export default connect(mapStateToProps, mapDispatchToProps)(MovieList);*/
