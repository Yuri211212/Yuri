import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import authReducer from '../store/auth/index';
import todoReducer from '../store/todo/index';
import { modalsReducer } from './modals/index';

//здесь собираются редюсеры всех сущностей в один

export const rootReducers = combineReducers({
    authReducer,
    todoReducer,
    modalsReducer
});

const middleware = [thunk];

export const configureStore = (initState) => {
    const store = createStore(rootReducers, initState, composeWithDevTools(applyMiddleware(...middleware)));
    return store;
}