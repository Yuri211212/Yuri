import fetchStoreData from "../../../utils/fetchStoreData";
import request from "../../../utils/request";
import { handlerErrorLoadingLink, handlerSuccessLoadingLink, startLoadingLink } from "../common";

const actionTypes = {
    SET_LINKS: 'SET_LINKS',
    CLEAR_LINKS:'CLEAR_LINKS',
};

export const actionSetLinks = (payload) => ({ type: actionTypes.SET_LINKS, payload });
export const actionClearLinks = () => ({ type: actionTypes.CLEAR_LINKS });

export function getAllLinks({ token }) {
    
    return (dispatch) => fetchStoreData({
        dispatch,
        startLoading: startLoadingLink,
        handlerError: handlerErrorLoadingLink,
        handlerSucces: handlerSuccessLoadingLink,

        fetch: async () => {
            const data = await request('/api/link/all', 'GET', null, {
                Authorisation: `Bearer ${token}`
            });
            dispatch(actionClearLinks());
            dispatch(actionSetLinks(data));
        }
    })
};

export default function reducer(state, { type, payload }) {
    switch (type) {
        case actionTypes.SET_LINKS:
            return { ...state, links: [...state.links, ...payload]}
        case actionTypes.CLEAR_LINKS:
            return {...state, links: [], error: null, success: false, isLoading: false}
        default:
            return state;
    }
}