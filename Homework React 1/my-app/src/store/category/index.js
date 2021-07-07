const initState = {
    category: []
};

const actionType = {
    ADD_CATEGORY: 'ADD_CATEGORY',
    DELETE_CATEGORY: 'DELETE_CATEGORY',
    EDIT_CATEGORY: 'EDIT_CATEGORY',
    TRANSFER_CATEGORY: 'TRANSFER_CATEGORY',
    UPDATE_CATEGORY: 'UPDATE_CATEGORY',
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

export const actionTransferCategory = (payload) => {
    return {
        type: actionType.TRANSFER_CATEGORY,
        payload
    }
};

export const actionUpdateCategory = (payload) => {
    return {
        type: actionType.UPDATE_CATEGORY,
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
            return { ...state, category: state.category.map((item) => item.id === action.payload.id ? { ...item, checked: action.payload.checked } : item) }
        case actionType.TRANSFER_CATEGORY:
            return { ...state, category: state.category.map((item) => item.id === action.payload.categoryId ? { ...item, todoID: action.payload.todoId } : item) }
        case actionType.UPDATE_CATEGORY:
            return { ...state, category: state.category.map((item) => item.id === action.payload.categoryId ? { ...item, ...action.payload } : item) }
        default:
            return state;
    }
};