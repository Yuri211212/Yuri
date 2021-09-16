import fetchStoreData from "../../../utils/fetchStoreData";
import request from "../../../utils/request";
import { handlerErrorLoadingTodo, handlerSuccessLoadingTodo, startLoadingTodo } from "../common";

export function deleteTodo({ payload, token }) {
    return (dispatch) => fetchStoreData({
        dispatch,
        startLoading: startLoadingTodo,
        handlerError: handlerErrorLoadingTodo,
        handlerSuccess: handlerSuccessLoadingTodo,

        fetch: async () => await request('/api/todo/remove', 'DELETE', { ...payload }, {
            Authorisation: `Bearer ${token}`
        })
    })
}