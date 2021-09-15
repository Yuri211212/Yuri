import fetchStoreData from "../../../utils/fetchStoreData";
import request from "../../../utils/request";
import { handlerErrorLoadingLink, handlerSuccessLoadingLink } from "../common";

export function createLink({ payload, token }) {
    return (dispatch) => fetchStoreData({
        dispatch,
        startLoading: handlerSuccessLoadingLink,
        handlerError: handlerErrorLoadingLink,
        handlerSuccess: handlerSuccessLoadingLink,

        fetch: async () => await request('/api/link/generate', 'POST', { ...payload }, {
            Authorisation: `Bearer ${token}`
        })
    })
}