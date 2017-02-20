import React from 'react';
import { Router, Route, hashHistory } from 'react-router';
import ReactDOM from 'react-dom';
import createStore from './store/createStore';
import AppContainer from './containers/AppContainer';
import searchBar from './components/searchBar';


const mountNode = document.querySelector('#root');


const router = (
    <Router history={hashHistory}>
        <Route path="/" component={searchBar} >
        </Route>
      </Router>
);

ReactDOM.render(
<AppContainer
    store={createStore({})}
    router={router}
/>, mountNode);
