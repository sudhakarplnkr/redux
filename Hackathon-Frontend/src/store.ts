import { createStore, applyMiddleware, compose } from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import thunk from 'redux-thunk';
import { createBrowserHistory } from 'history';
import rootReducer from './reducers/Index';
import message from './middleware/message';
import apiMiddleware from './middleware/api';

export const history = createBrowserHistory();

const enhancers = [];
const middleware = [thunk, routerMiddleware(history), apiMiddleware, message];

if (process.env.NODE_ENV === 'development') {
    const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;

    if (typeof devToolsExtension === 'function') {
        enhancers.push(devToolsExtension());
    }
}

const composedEnhancers = compose(
    applyMiddleware(...middleware),
    ...enhancers
);

export default createStore(connectRouter(history)(rootReducer), {}, composedEnhancers);
