const initState = {
    category: []
};

const actionType = {
    ADD_CATEGORY: 'ADD_CATEGORY',
    DELETE_CATEGORY: 'DELETE_CATEGORY',
    EDIT_CATEGORY: 'EDIT_CATEGORY',
};

export const actionCreateCategory = (payload) => {
    return {
        type: actionType.ADD_CATEGORY,
        payload
    }
};

export const actionDeleteCategory = (payload) => {
    return {
        type: actionType.DELETE_CATEGORY,
        payload
    }
};

export const actionEditCategory = (payload) => {
    return {
        type: actionType.EDIT_CATEGORY,
        payload
    }
};

export const categoryReducer = (state = initState, action) => {
    switch (action.type) {
        case actionType.ADD_CATEGORY:
            return { ...state, category: [...state.category, action.payload] }
        case actionType.DELETE_CATEGORY:
            return { ...state, category: state.category.filter((item) => item.id !== action.payload) }
        case actionType.EDIT_CATEGORY:
            return { ...state, category: state.category.map((item) => item.id === action.payload.id ? { ...item, ...action.payload } : item) }
        default:
            return state;
    }
};