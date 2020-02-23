import React from 'react';
import ReactDOM from 'react-dom';
import App from './app'
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import reducer from './reducers/reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//Create a store with middleware.
const store = createStore(reducer,composeEnhancers(applyMiddleware(thunk)));
//Wrap up app using provider and pass store as a props for full application
ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('app'));