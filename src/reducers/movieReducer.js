import { FETCH_MOVIES } from '../actions/actions';

function movieReducer(state = [], action) {
    switch (action.type) {
        case FETCH_MOVIES:
        return [ action.payload.data, ...state ];
    }
    return state;
};


export default movieReducer;
