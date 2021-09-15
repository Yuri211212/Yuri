import reducerReducer from 'reduce-reducers';
import linkReducer  from './getAllLinks/index';
import commonReducer from './common/index';
import reducerFindLink from './getLink/index';

export * from './create/index';
export * from './delete/index';
export * from './getLink/index';

export default reducerReducer({
    isLoading: false,
    links: [],
    link: {},
    error: null,
    success: false
}, 
linkReducer,
reducerFindLink,
commonReducer)