// State arg is only the state that this reducer is responsible for
export default function(state = null, action) {
    switch (action.type) {
        case 'MOVIE_SELECTED':
        return action.payload;
    }
    
    return state;
}
