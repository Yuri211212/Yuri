import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { actionHideModal } from '../store/modals';
import { actionDeleteTodo } from '../store/todos';

import { ModalDeleteTask } from '../components/Modal/ModalDeleteTask';

export default function ModalDeleteTaskContainer({ title, id }) {
    const dispatch = useDispatch();

    const handlerDeleteTaskfromModal = () => {
        dispatch(actionDeleteTodo(id));
        handlerHideModal()
    };

    const handlerHideModal = () => {
        dispatch(actionHideModal())
    };

    return <ModalDeleteTask
        handlerDeleteTaskfromModal={handlerDeleteTaskfromModal}
        handlerHideModal={handlerHideModal}
        title={title} />
};

ModalDeleteTaskContainer.propTypes = {
    title: PropTypes.string,
    id: PropTypes.number
};