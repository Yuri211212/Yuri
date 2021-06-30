import React from 'react';
import { useDispatch } from 'react-redux';

import { actionDeleteTodo } from '../../../store/todos';
import { actionHideModal } from '../../../store/modals';

import { ButtonMain } from '../../ButtonMain';

import './styles.scss';

export default function ModalDelete({ title, id }) {
    const dispatch = useDispatch();

    const handlerDeleteTaskfromModal = () => {
        dispatch(actionDeleteTodo(id));
        handlerHideModal()
    };

    const handlerHideModal = () => {
        dispatch(actionHideModal())
    };

    return (
        <div className='modal'>
            <div className='modal__wrapper'>
                <p>Вы действительно хотите удалить <strong>{title}</strong>? </p>
                <div className='modal__buttons'>
                <ButtonMain variant="danger" name="Удалить" onClick={handlerDeleteTaskfromModal} />
                <ButtonMain variant="primary" name="Отмена" onClick={handlerHideModal} />
                </div>
            </div>
        </div>
    )
};
