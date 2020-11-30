import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import State from './interfaces/state';


const reducer = combineReducers({

});

const middlewares = [thunk];

const initialState : State = {
   commits: {
       commitList: {
           branches: [],
           commitList: [],
           repoName: '',
           repoOwnerNickname: ''
       },
       error: '',
       loading: true
   }
}

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middlewares)));

export default store;