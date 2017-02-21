import {combineReducers} from 'redux';

// Reducers
import movieReducer from 'reducers/movieReducer';


export const makeRootReducer = (asyncReducers) => {
    return combineReducers({
        // Add sync reducers here
        // key: movies is equal to the value of the output of the reducer
        movies: movieReducer,
        //activeMovie: activeMovieReducer,
        ...asyncReducers
    });
};

export {movieReducer};

export default makeRootReducer;
