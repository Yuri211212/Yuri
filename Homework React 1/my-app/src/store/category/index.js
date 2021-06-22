const initState = {
    category: [
        {title: 'Важные дела', id: 1},
        {title: 'Менее важные дела', id: 2}
    ]
};

const actionType = {
    ADD_CATEGORY: 'ADD_CATEGORY',
    DELETE_CATEGORY: 'DELETE_CATEGORY',
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

export const categoryReducer = (state = initState, action) => {
    switch (action.type) {
        case actionType.ADD_CATEGORY:
            return { ...state, category: [...state.category, action.payload] }
        case actionType.DELETE_CATEGORY:
            return { ...state, category: state.category.filter((item) => item.id !== action.payload) }
        default:
            return state;
    }
};