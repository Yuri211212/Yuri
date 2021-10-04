import reducerReducers from 'reduce-reducers';
import todoReducer from './getAllTodos/index';
import commonReducer from './common/index';

export * from './create/index';
export * from './delete/index';

//общие редюсеры для всей сущности todo собираются здесь и далее передаются в главный редюсер

export default reducerReducers({
    todos: [],
    error: null,
    success: false
}, 
commonReducer,
todoReducer)