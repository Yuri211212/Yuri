import fetchStoreData from "../../../utils/fetchStoreData";
import request from "../../../utils/request";
import { handlerErrorLoadingLink, handlerSuccessLoadingLink, startLoadingLink } from "../common";

const actionTypes = {
    SET_LINK: 'SET_LINK',
    CLEAR_LINK:'CLEAR_LINK',
};

export const actionSetLink = (payload) => ({ type: actionTypes.SET_LINK, payload });
export const actionClearLink = () => ({ type: actionTypes.CLEAR_LINK });

export function getLink({ token, linkId }) {
    
    return (dispatch) => fetchStoreData({
        dispatch,
        startLoading: startLoadingLink,
        handlerError: handlerErrorLoadingLink,
        handlerSucces: handlerSuccessLoadingLink,

        fetch: async () => {
            const data = await request(`/api/link/${linkId}`, 'GET', null, {
                Authorisation: `Bearer ${token}`
            });
            dispatch(actionSetLink(data));
        }
    })
};

export default function reducerFindLink(state, { type, payload }) {
    switch (type) {
        case actionTypes.SET_LINK:
            return { ...state, link: {...state.link, ...payload}, isLoading: true}
        case actionTypes.CLEAR_LINK:
            return {...state, link: {}, error: null, success: false, isLoading: false}
        default:
            return state;
    }
}