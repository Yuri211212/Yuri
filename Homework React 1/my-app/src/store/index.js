import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'

import { taskReducer } from './todos'
import { categoryReducer } from './category';

const middlewares = [];
export const rootReducer = combineReducers({
    taska: taskReducer,
    category: categoryReducer,
}
);

export const configureStore = () => {
    const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk, ...middlewares)));
    return store;
};