import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import './utils/Environment';
import 'bootstrap/dist/js/bootstrap.min.js';
import { ConnectedRouter } from 'connected-react-router';
import * as React from 'react';
import { render } from 'react-dom';
import 'react-fa';
import { Provider } from 'react-redux';
import ReduxToastr from 'react-redux-toastr';
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css';
import App from './containers/App';
import store, { history } from './store';
import './style.css';
import 'react-redux-spinner/dist/react-redux-spinner.css';
import { Spinner } from 'react-redux-spinner';

const target = document.querySelector('#root');

render(
    <Provider store={store}>
        <React.Fragment>
            <Spinner config={{ trickleSpeed: 20 }} />
            <ReduxToastr timeOut={0} newestOnTop={true} preventDuplicates={true} position="bottom-right" transitionIn="fadeIn" transitionOut="fadeOut" progressBar={false} closeOnToastrClick={true} />
            <ConnectedRouter history={history}>
                <App />
            </ConnectedRouter>
        </React.Fragment>
    </Provider>,
    target
);
