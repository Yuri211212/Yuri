import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import { actionTransferCategory } from '../store/category';
import { actionHideModal } from '../store/modals';

import { ModalEditCategory } from '../components/Modal/ModalEditCategory';

export default function ModalEditCategoryContainer({ name, categoryId }) {
    const myList = useSelector((state) => state.taskReducer);

    const dispatch = useDispatch();

    const handlerTransferCategory = (todoId) => {
        const data = {
            todoId,
            categoryId
        }
        dispatch(actionTransferCategory(data));
        handlerHideModal()
    };

    const handlerHideModal = () => {
        dispatch(actionHideModal())
    };

    return <ModalEditCategory
        myList={myList}
        name={name}
        handlerTransferCategory={handlerTransferCategory} />
};

ModalEditCategoryContainer.propTypes = {
    name: PropTypes.string,
    categoryId: PropTypes.number
};
