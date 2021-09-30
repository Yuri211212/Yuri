import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import authReducer from '../store/auth/index';

//здесь собираются редюсеры в один

export const rootReducers = combineReducers({
    authReducer
});

export const configureStore = (initState) => {
    const store = createStore(rootReducers, initState, composeWithDevTools(applyMiddleware(thunk)));
    return store;
}