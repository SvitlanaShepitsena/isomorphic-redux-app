import { createStore, applyMiddleware, compose } from 'redux';
import { devTools } from 'redux-devtools';
import { reduxReactRouter } from 'redux-router';
import createHistory from 'history/lib/createBrowserHistory';

import rootReducer from '../reducers/index';

import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import promiseMiddleware from '../api/promiseMiddleware';

/*MIDDLEWARE WILL ALWAYS HANDLE ACTION FIRST*/
/*handle async actions*/
/*manage logging functionality*/
const middlewareBuilder = () => {
    let middleware = {};
    /*thunk convert action creator function to the action object to pass it further*/
    let universalMiddleware = [thunk, promiseMiddleware];
    let allComposeElements = [];

    if (process.browser) {
        /* Client Side*/
        if (process.env.NODE_ENV === 'production' || process.env.NODE_ENV === 'test') {
            /*Production*/
            middleware = applyMiddleware(...universalMiddleware);
            allComposeElements = [
                middleware,
                reduxReactRouter({
                    createHistory
                })
            ]
        } else {
            /*Development*/
            middleware = applyMiddleware(...universalMiddleware, createLogger());
            allComposeElements = [
                middleware,
                reduxReactRouter({
                    createHistory
                }),
                devTools(),
                window.devToolsExtension()
            ]
        }
    } else {
        /* Server Side*/
        middleware = applyMiddleware(...universalMiddleware);
        allComposeElements = [
            middleware
        ]
    }

    return allComposeElements;

}
/* Destructuring of returned Array from middleware builder = list of middlewares*/
const finalCreateStore = compose(...middlewareBuilder())(createStore);

export default function configureStore(initialState) {
    const store = finalCreateStore(rootReducer, initialState);
    //let svReducer = store.getReducer();
    //debugger;

    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('../reducers', () => {
            const nextRootReducer = require('../reducers');
            store.replaceReducer(nextRootReducer);
        });
    }

    return store;
}