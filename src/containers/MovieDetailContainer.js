import React, { Component } from 'react';
import { connect } from 'react-redux';

class MovieDetail extends Component {
        render() {
            if (!this.props.movie) {
                return <div>Select a movie to get started. </div>;
            }

            return (
                <div>
                    <h3>Movie Details :)</h3>
                    <h4>Movie Title: {this.props.movie.title}</h4>
                    <p>Year: {this.props.movie.year}</p>
                </div>
            );
        }
};

function mapStateToProps(state) {
    return {
        movie: state.activeMovie
    };
}

MovieDetail.propTypes = {
    movie: React.PropTypes.object
};

export default connect(mapStateToProps)(MovieDetail);
