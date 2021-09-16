import reducerReducer from 'reduce-reducers';
import commonReducer from './common/index';
import reducerTodo from './get';

export * from './create/index';
export * from './get/index';
export * from './delete/index';

export default reducerReducer({
    todos: [],
    error: null,
    success: false
}, 
reducerTodo,
commonReducer)