import fetchStoreData from "../../../utils/fetchStoreData";
import request from "../../../utils/request";
import { handlerErrorTodo, handlerSuccessTodo, startLoadingTodo } from "../common";

export function deleteTodo({ payload, token }) {
    return (dispatch) => fetchStoreData({
        dispatch,
        startLoading: startLoadingTodo,
        handlerError: handlerErrorTodo,
        handlerSuccess: handlerSuccessTodo,

        fetch: async () => await request('/api/todo/delete', 'DELETE', { ...payload }, {
            Authorisation: `Bearer ${token}`
        })
    })
}