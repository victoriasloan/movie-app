const initialState = {};

const movieReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_MOVIE':
        return {

        };
        default:
        return state;
    }
};


export default movieReducer;
