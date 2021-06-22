const initState = {
    task: []
};

const actionType = {
    ADD_TASK: 'ADD_TASK',
    DELETE_TASK: 'DELETE_TASK',
    SET_TODOS: 'SET_TODOS',
    GET_TODOS_LOCAL_STORAGE: 'GET_TODOS_LOCAL_STORAGE',
    REMOVE_ALL_TODOS: 'REMOVE_ALL_TODOS'
};

export const actionCreateTodo = (payload) => {
    return {
        type: actionType.ADD_TASK,
        payload
    }
};

export const actionDeleteTodo = (payload) => {
    return {
        type: actionType.DELETE_TASK,
        payload
    }
};

export const actionSetTodo = (payload) => {
    return {
        type: actionType.SET_TODOS,
        payload
    }
};

export const actionGetTodosLocalStorage = (payload) => {
    return {
        type: actionType.GET_TODOS_LOCAL_STORAGE,
        payload
    }
};

export const actionRemoveAllTodos = () => {
    return {
        type: actionType.REMOVE_ALL_TODOS,
    }
};

export const taskReducer = (state = initState, action) => {
    switch (action.type) {
        case actionType.ADD_TASK:
            return { ...state, task: [...state.task, action.payload] }
        case actionType.DELETE_TASK:
            return { ...state, task: state.task.filter((item) => item.id !== action.payload) }
        case actionType.SET_TODOS:
            return { ...state, task: [...state.task, ...action.payload] }
        case actionType.GET_TODOS_LOCAL_STORAGE:
            return { ...state, task: [...state.task, ...action.payload] }
        case actionType.REMOVE_ALL_TODOS:
            return { ...state, task: [] }
        default:
            return state;
    }
};

export const getTodosThunk = () => (dispatch) => {
    try {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(json => dispatch(actionSetTodo(json)))
    } catch (error) {
        console.log(error)
    }
};