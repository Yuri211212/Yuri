import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { actionHideModal } from '../store/modals';
import { actionDeleteTodo } from '../store/todos';

import { ModalDelete } from '../components/Modal/ModalDelete';

export default function ModalDeleteContainer({ title, id }) {
    const dispatch = useDispatch();

    const handlerDeleteTaskfromModal = () => {
        dispatch(actionDeleteTodo(id));
        handlerHideModal()
    };

    const handlerHideModal = () => {
        dispatch(actionHideModal())
    };

    return <ModalDelete
        handlerDeleteTaskfromModal={handlerDeleteTaskfromModal}
        handlerHideModal={handlerHideModal}
        title={title} />
};

ModalDeleteContainer.propTypes = {
    title: PropTypes.string,
    id: PropTypes.number
};