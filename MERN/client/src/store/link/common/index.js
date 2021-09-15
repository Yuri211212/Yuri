const actionTypes = {
    LINK_START_LOADING: 'LINK_START_LOADING',
    LINK_HANDLER_ERROR: 'LINK_HANDLER_ERROR',
    LINK_HANDLER_SUCCESS: 'LINK_HANDLER_SUCCESS'
};

export const startLoadingLink = () => ({ type: actionTypes.LINK_START_LOADING });
export const handlerErrorLoadingLink = (payload) => ({ type: actionTypes.LINK_HANDLER_ERROR, payload });
export const handlerSuccessLoadingLink = () => ({ type: actionTypes.LINK_HANDLER_SUCCESS });

export default function reducer(state, { type, payload }) {
    switch (type) {
        case actionTypes.LINK_START_LOADING:
            return { ...state, isLoading: true, success: false }
        case actionTypes.LINK_HANDLER_ERROR:
            return { ...state, isLoading: false, success: false, error: payload.message }
        case actionTypes.LINK_HANDLER_SUCCESS:
            return { ...state, isLoading: false, success: true }
        default:
            return state
    }
};
