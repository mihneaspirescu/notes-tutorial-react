import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Routes from './routes'
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, compose} from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducer'
import registerServiceWorker from './registerServiceWorker';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store            = createStore(reducers, composeEnhancers(
    applyMiddleware(ReduxThunk)
));


ReactDOM.render(<Provider store={store}>
    <Routes />
</Provider>, document.getElementById('root'));
registerServiceWorker();



