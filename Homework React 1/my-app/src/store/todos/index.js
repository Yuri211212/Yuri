const initState = {
    task:[
        {title:'Освоить React', id:1},
        {title:'Освоить Redux', id:2},
    ]
};

const actionType = {
    ADD_TASK :'ADD_TASK',
    DELETE_TASK:'DELETE_TASK',
};

export const actionCreateTodo = (payload) =>{
    return {
        type:actionType.ADD_TASK,
        payload
    }
};

export const actionDeleteTodo = (payload) =>{
    return {
        type:actionType.DELETE_TASK,
        payload
    }
};

export const taskReducer = (state = initState, action) => {
    switch (action.type) {
        case actionType.ADD_TASK:
            return {...state, task: [...state.task, action.payload]}
            case actionType.DELETE_TASK:
                return {...state, task: state.task.filter((item) => item.id !== action.payload) }
            default:
                return state;
    }
}