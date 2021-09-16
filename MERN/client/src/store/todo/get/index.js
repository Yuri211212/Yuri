import fetchStoreData from "../../../utils/fetchStoreData";
import request from "../../../utils/request";
import { handlerErrorLoadingTodo, handlerSuccessLoadingTodo, startLoadingTodo } from "../common";

const actionTypes = {
    SET_TODOS: 'SET_TODOS',
    CLEAR_TODOS:'CLEAR_TODOS',
};

export const actionSetTodos = (payload) => ({ type: actionTypes.SET_TODOS, payload });
export const actionClearTodos = () => ({ type: actionTypes.CLEAR_TODOS });

export function getAllTodos({ token }) {
    
    return (dispatch) => fetchStoreData({
        dispatch,
        startLoading: startLoadingTodo,
        handlerError: handlerErrorLoadingTodo,
        handlerSucces: handlerSuccessLoadingTodo,

        fetch: async () => {
            const data = await request('/api/todo/all', 'GET', null, {
                Authorisation: `Bearer ${token}`
            });
            dispatch(actionClearTodos());
            dispatch(actionSetTodos(data));
        }
    })
};

export default function reducer(state, { type, payload }) {
    switch (type) {
        case actionTypes.SET_TODOS:
            return { ...state, todos: [...state.todos, ...payload]}
        case actionTypes.CLEAR_TODOS:
            return {...state, todos: [], error: null, success: false }
        default:
            return state;
    }
}