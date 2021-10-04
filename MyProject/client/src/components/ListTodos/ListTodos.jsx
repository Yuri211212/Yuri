import React, { useContext, useEffect } from 'react';
import 'antd/dist/antd.css';
import { List, Button } from 'antd';
import { format } from 'date-fns';
import { useDispatch, useSelector } from 'react-redux';

import { AuthContext } from '../../context/AuthContext';

import { actionClearTodos, getAllTodos } from '../../store/todo/getAllTodos';
import { actionShowModal } from '../../store/modals';
import { deleteTodo } from '../../store/todo';

let checkDataTodosTimeout = null;

export default function ListTodos() {
  const dispatch = useDispatch();
  const { todos } = useSelector((state) => state.todoReducer);
  const { token } = useContext(AuthContext);

  const formatDate = (date) => format(Date.parse(date), 'PPpp');

  const newArrayTodos = todos.map((item) => {
    return { ...item, date: formatDate(item.date) }
  });

  const checkDataTodos = async (firstLoad = false) => {
    checkDataTodosTimeout = (firstLoad || checkDataTodosTimeout) && setTimeout(async () => {
      dispatch(getAllTodos({ token }))
      checkDataTodos();
    }, 1000);
  };

  useEffect(() => {
    checkDataTodos(true);
    dispatch(getAllTodos({ token }))
    return () => {
      dispatch(actionClearTodos());
      checkDataTodosTimeout = null;
      clearTimeout(checkDataTodos)
    }
  }, []);

  const showDeleteTodoModal = (id, title) => {
    dispatch(actionShowModal({ name: 'modalDeleteTodo', id, title, token }))};


  const showAddTodoModal = () => {
    dispatch(actionShowModal({ name: 'modalAddTodo' }))
  };

 return <>
        <List
        itemLayout="horizontal"
        dataSource={newArrayTodos}
        renderItem={item => (
          <List.Item
            actions={[
            <a key="list-loadmore-edit">edit</a>, 
            <a on onClick={() => showDeleteTodoModal(item._id, item.title)}> Delete</a>]}>
              <List.Item.Meta
                title={item.title}
                description={item.description}
              />
          </List.Item>
        )}
      />
      <Button onClick={showAddTodoModal}>Add new task</Button>
      </>
}
