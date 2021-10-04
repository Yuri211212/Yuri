import reducerReducers from 'reduce-reducers';
import commonReducer from './common/index';
import loginReducer from './login/index';

export * from './registration/index';
export * from './login/index';

//общие редюсеры для registration и login собираются здесь и далее передаются в главный редюсер

export default reducerReducers({
    user: null,
    error: null,
    success: false
}, 
commonReducer,
loginReducer)