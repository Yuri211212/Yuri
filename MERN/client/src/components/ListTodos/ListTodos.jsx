import React, { useContext, useEffect } from 'react';
import CreateTodos from '../CreateTodos/CreateTodos';
import { List, Typography } from 'antd';
import { actionClearTodos, deleteTodo, getAllTodos } from '../../store/todo';
import { useDispatch, useSelector } from 'react-redux';
import { AuthContext } from '../../context/AuthContext';
import { DeleteTwoTone, CheckSquareTwoTone } from '@ant-design/icons';

let checkDataTodosTimeout = null;

export default function ListTodos() {
    const dispatch = useDispatch();

    const { todos } = useSelector((state) => state.todoReducer);

    const { token } = useContext(AuthContext);
        
    const checkDataTodos = async (firstLoad = false) => {
        checkDataTodosTimeout = (firstLoad || checkDataTodosTimeout) && setTimeout(async () => {
        await dispatch(getAllTodos({ token }));
          checkDataTodos();
        }, 1000);
      };

    const handlerRemoveTodo = (id) => {
        dispatch(deleteTodo({ payload: { id }, token }))
    };
    
      useEffect(() => {
        checkDataTodos(true);
        dispatch(getAllTodos({ token }))
        return () => {
          dispatch(actionClearTodos());
          checkDataTodosTimeout = null;
          checkDataTodos(false)
          clearTimeout(checkDataTodos)
        }
      }, []);

    return (
        <div>
            <CreateTodos />
            <br></br>
            <List
                header={<div>Список задач</div>}
                bordered
                dataSource={todos}
                loading={!todos.length}
                renderItem={item => (
                    <List.Item>
                        <Typography.Text mark>{item.title}</Typography.Text>
                        <div>
                        <CheckSquareTwoTone />
                        <DeleteTwoTone onClick={() => handlerRemoveTodo(item._id)}/>
                        </div>
                    </List.Item>
                )}
            />
        </div>
    )
}
