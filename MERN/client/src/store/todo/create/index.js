import fetchStoreData from "../../../utils/fetchStoreData";
import request from "../../../utils/request";
import { handlerErrorLoadingTodo, handlerSuccessLoadingTodo, startLoadingTodo } from "../common";

export function createTodo({ payload, token }) {
    return (dispatch) => fetchStoreData({
        dispatch,
        startLoading: startLoadingTodo,
        handlerError: handlerErrorLoadingTodo,
        handlerSuccess: handlerSuccessLoadingTodo,

        fetch: async () => await request('/api/todo/create', 'POST', { ...payload }, {
            Authorisation: `Bearer ${token}`
        })
    })
}