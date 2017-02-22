import { FETCH_MOVIES } from '../actions/actions';


function movieReducer(state = { movies: [] }, action) {
    switch (action.type) {
        case FETCH_MOVIES:
        return {
            movies: action.payload.data,
            ...state
        };
    }
    return state;
};


export default movieReducer;
