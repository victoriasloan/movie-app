import axios from 'axios';

const API_URL = 'http://www.omdbapi.com/?';



export const FETCH_MOVIES = 'FETCH_MOVIES';


export function fetchMovies(title) {

    const url = `${API_URL}&t=${title}`;
    const request = axios.get(url);

    

    return {
        type: FETCH_MOVIES,
        payload: request
    };
}
