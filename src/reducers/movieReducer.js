import { FETCH_MOVIES } from '../actions/actions';


function movieReducer(state = { movies: [] }, action) {
    switch (action.type) {
        case FETCH_MOVIES:
        return {
                ...state,
            movies: action.payload.data
        };
    }
    return state;
};


export default movieReducer;
