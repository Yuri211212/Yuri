import { applyMiddleware, combineReducers, createStore} from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import authReducer from './auth/index';
import linkReducer from './link/index';
import todoReducer from './todo/index';

export const rootReducers = combineReducers({
    authReducer,
    linkReducer,
    todoReducer
});

const middleware = [thunk];

export const configureStore = (initState) => {
    const store = createStore(rootReducers, initState, composeWithDevTools(applyMiddleware(...middleware)));
    return store;
}
