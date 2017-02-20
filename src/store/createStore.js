import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import makeRootReducer from './reducers';

export default (initialState = {}) => {

    // ======================================================
    // Middleware Configuration
    // ======================================================
    const middleware = [thunk];

    // ======================================================
    // Store Enhancers
    // ======================================================
    const enhancers = [];

    const devToolsExtension = window.devToolsExtension;

    if (typeof devToolsExtension === 'function') {
        enhancers.push(devToolsExtension());
    };

    // ======================================================
    // Store Instantiation
    // ======================================================
    const store = createStore(
        makeRootReducer(),
        initialState,
        compose(applyMiddleware(...middleware),
        ...enhancers
        )
    );

    store.asyncReducers = {};

    return store;
};
