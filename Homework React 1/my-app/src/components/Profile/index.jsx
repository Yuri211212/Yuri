import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actionCreateTodo } from '../../store/todos';

export const Profile = () => {

const [localState, setLocalSet] = useState ('');    
const changeInput = (event) => {
setLocalSet (event.target.value)   
};

const myList = useSelector((state) => state.taska);
const dispatch = useDispatch();

const addToMyList = () => {
const data = {title: localState,
id: Date.now()
}
dispatch(actionCreateTodo(data))
};

 
return <div>
<input placeholder="Добавьте задачу"value={localState} onChange={(event) => changeInput (event)}></input>
<button onClick={addToMyList}>Внести задачу</button>
{myList.task.map((item) => <li key={item.id}>{item.title}</li>)}
</div>
}
