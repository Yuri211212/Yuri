import reducerReducers from 'reduce-reducers';
import commonReducer from './common/index';

//общие редюсеры для registration и login собираются здесь и далее передаются в главный редюсер

export default reducerReducers({
    user: null,
    error: null,
    success: false
}, commonReducer)