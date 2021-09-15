import fetchStoreData from "../../../utils/fetchStoreData";
import request from "../../../utils/request";
import { handlerErrorLoadingLink, handlerSuccessLoadingLink } from "../common";

export function deleteLink({ payload, token }) {
    return (dispatch) => fetchStoreData({
        dispatch,
        startLoading: handlerSuccessLoadingLink,
        handlerError: handlerErrorLoadingLink,
        handlerSuccess: handlerSuccessLoadingLink,

        fetch: async () => await request('/api/link/delete', 'DELETE', { ...payload }, {
            Authorisation: `Bearer ${token}`
        })
    })
}