import React from 'react';
import { Router, Route, hashHistory } from 'react-router';
import ReactDOM from 'react-dom';
import createStore from './store/createStore';
import AppContainer from './containers/AppContainer';
import App from './components/App';

const mountNode = document.querySelector('#root');


const router = (
    <Router history={hashHistory}>
        <Route path="/" component={App} >
        </Route>
      </Router>
);

ReactDOM.render(
<AppContainer
    store={createStore({})}
    router={router}
/>, mountNode);
