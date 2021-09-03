import reducerReducers from 'reduce-reducers';
import commonReducer from './common/index';
import loginReducer from './login/index';

export * from './registration/index';

export default reducerReducers({
    user: null,
    isLoading: false,
    error: null,
    success: false
}, 
commonReducer, 
loginReducer )