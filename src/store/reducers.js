import {combineReducers} from 'redux';

// Reducers
import movieReducer from 'reducers/movieReducer';

export const makeRootReducer = (asyncReducers) => {
    return combineReducers({
        // Add sync reducers here
        movies: movieReducer,
        ...asyncReducers
    });
};

export {movieReducer};

export default makeRootReducer;
