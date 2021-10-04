const actionTypes = {
    TODO_START_LOADING: 'TODO_START_LOADING',
    TODO_HANDLER_ERROR: 'TODO_HANDLER_ERROR',
    TODO_HANDLER_SUCCESS: 'TODO_HANDLER_SUCCESS'
};

export const startLoadingTodo = () => ({ type: actionTypes.TODO_START_LOADING });
export const handlerErrorTodo = (payload) => ({ type: actionTypes.TODO_HANDLER_ERROR, payload });
export const handlerSuccessTodo = () => ({ type: actionTypes.TODO_HANDLER_SUCCESS });

export default function reducer(state, { type, payload }) {
    switch (type) {
        case actionTypes.TODO_START_LOADING:
            return { ...state, success: false }
        case actionTypes.TODO_HANDLER_ERROR:
            return { ...state, success: false, error: payload.message }
        case actionTypes.TODO_HANDLER_SUCCESS:
            return { ...state, success: true }
        default:
            return state
    }
};
