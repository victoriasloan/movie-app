import React, { Component } from 'react';
import { connect } from 'react-redux';

class MovieList extends Component {
    renderList() {
        return this.props.movies.map((movie) => {
            return (
                <li key={movie.title} className="list-group-item">{movie.title}</li>
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

MovieList.propTypes = {
    movies: React.PropTypes.array
};

export default connect(mapStateToProps)(MovieList);
