import React from 'react';
import { createStore } from 'redux';

const movies = (state = 0, action) => {
        switch (action.type) {
        case 'INCREMENT':
         return state + 1;
         case 'DECREMENT':
         return state -1;
         default:
         return state;
    }
};

const store = createStore(movies);

const render = () => {
    document.body.innerText = store.getState();
};

store.subscribe(render);
render();

document.addEventListener('click', () => {
    store.dispatch({ type: "DECREMENT"});
});
