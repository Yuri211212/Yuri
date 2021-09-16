import React, { useContext, useState } from 'react'
import { Button, Input } from 'antd';

import './styles.scss';
import { useDispatch } from 'react-redux';
import { createTodo } from '../../store/todo';
import { AuthContext } from '../../context/AuthContext';

export default function CreateTodos() {
const [isLoading, setIsLoading] = useState(false);
const [value, setValue] = useState('');
const { token } = useContext(AuthContext);
const dispatch = useDispatch();

const handlerOnChange = (event) => {
    setValue(event.target.value);
};

const handlerCreateTodo = async () => {
setIsLoading(true);
await dispatch(createTodo({ payload: {title: value}, token }));
setIsLoading(false);
setValue('');
};
    return (
        <div className="group__create">
            <Input
                name="title"
                size="large"
                placeholder="Введите название задачи"
                value={value}
                onChange={handlerOnChange}/>
            <Button 
            type="primary"
            onClick={handlerCreateTodo}
            loading={isLoading} >
                Сохранить задачу
            </Button>
        </div>
    )
}