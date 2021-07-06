import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { taskReducer } from './todos';
import { categoryReducer } from './category';
import { modalsReducer } from './modals';

const middlewares = [];
export const rootReducer = combineReducers({
    taskReducer,
    categoryReducer,
    modalsReducer
}
);

export const configureStore = () => {
    const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk, ...middlewares)));
    return store;
};