const initState = {
    task:[
        {title:'Освоить React', id:1},
        {title:'Освоить Redux', id:2},
    ]
};

const actionType = {
    ADD_TASK :'ADD_TASK'
};

export const actionCreateTodo = (payload) =>{
    return {
        type:actionType.ADD_TASK,
        payload
    }
};
export const taskReducer = (state = initState, action) => {
    switch (action.type) {
        case actionType.ADD_TASK:
            return {...state, task: [...state.task, action.payload]}
            default:
                return state;
    }
}