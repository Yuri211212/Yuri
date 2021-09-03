import fetchStoreData from "../../../utils/fetchStoreData"
import request from "../../../utils/request"
import { handlerErrorAuth, handlerSuccessLoadingAuth, startLoadingAuth } from "../common"

export function authRegistration (payload){
    return (dispatch) => fetchStoreData({
        dispatch,
        startLoading: startLoadingAuth,
        handlerError: handlerErrorAuth,
        handlerSuccess: handlerSuccessLoadingAuth,

        fetch: async () => { await request('/api/auth/registration', 'POST', {...payload})}
    })
}