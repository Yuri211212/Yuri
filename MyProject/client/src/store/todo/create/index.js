import fetchStoreData from "../../../utils/fetchStoreData";
import request from "../../../utils/request";
import { handlerErrorTodo, handlerSuccessTodo, startLoadingTodo } from "../common";

export function createTodo({ title, description, token }) { 
    const payload = {title, description};
    return (dispatch) => fetchStoreData({
        dispatch,
        startLoading: startLoadingTodo,
        handlerError: handlerErrorTodo,
        handlerSuccess: handlerSuccessTodo,

        fetch: async () => await request('/api/todo/create', 'POST', { ...payload }, {
            Authorisation: `Bearer ${token}`
        })
    })
}