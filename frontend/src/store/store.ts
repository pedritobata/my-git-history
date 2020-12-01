import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { listCommitsReducer } from './reducers/commitReducers';


const reducer = combineReducers({
    commits: listCommitsReducer
});

const middlewares = [thunk];


const store = createStore(reducer, composeWithDevTools(applyMiddleware(...middlewares)));

export default store;