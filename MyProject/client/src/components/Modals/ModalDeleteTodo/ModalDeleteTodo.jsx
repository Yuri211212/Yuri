import React from 'react';
import { Button } from 'antd';

import './styles.scss';
import { useDispatch } from 'react-redux';
import { deleteTodo } from '../../../store/todo';
import { actionHideModal } from '../../../store/modals';

export const ModalDeleteTodo = (props) => {
    const { id, title, token } = props;

const dispatch = useDispatch();

const handlerDeleteTodo = () => {
        dispatch(deleteTodo({ payload: { id }, token }));
        dispatch(actionHideModal());
    };

const handlerHideModal = () => {
    dispatch(actionHideModal())
    };

    return <>
        <div className='modalConfirm'>
            <p>Вы действительно хотите удалить <strong>{title}</strong>? </p>
            <div className='modalConfirm__buttons'>
                <Button onClick={handlerDeleteTodo}>Удалить</Button>
                <Button onClick={handlerHideModal}>Отмена</Button>
            </div>
        </div>
    </>
};
