/*IMPORT ACTION*/

const initialState = {};

const movieReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SEARCH_MOVIE':
        return {

        };
        default:
        return state;
    }
};


export default movieReducer;
