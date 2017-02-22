import axios from 'axios';

const API_URL = 'http://netflixroulette.net/api/api.php?';



export const FETCH_MOVIES = 'FETCH_MOVIES';


export const fetchMovies = (actor) => (dispatch) => {

    const url = `${API_URL}&actor=${actor}`;

    axios.get(url)
    .then((movies) => dispatch ({
        type: FETCH_MOVIES,
        payload: movies
    }));
};
