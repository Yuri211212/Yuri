import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';

import { actionTransferCategory, actionUpdateCategory } from '../store/category';
import { actionHideModal } from '../store/modals';
import { getCategory } from '../store/category/selectors';

import { ModalEditCategory } from '../components/Modal/ModalEditCategory';

import { home } from '../mockData';

export default function ModalEditCategoryContainer({ name, categoryId }) {
    const myList = useSelector((state) => state.taskReducer);

    const { category } = useSelector((state) => getCategory(state));

    const findCategory = category.find((item) => item.id === categoryId);

    const [value, setValue] = useState(findCategory.title);

    const [checked, setChecked] = useState(findCategory.checked);

    const [description, setDescription] = useState(findCategory.description)

    const dispatch = useDispatch();

    const history = useHistory();

    const handlerTransferCategory = (todoId) => {
        const data = {
            todoId,
            categoryId
        }
        dispatch(actionTransferCategory(data));
        history.push(home.todoId(todoId));
        handlerHideModal()
    };

    const handlerChangeInput = (event) => {
        setValue(event.target.value)
    };

    const handlerMarkCheckbox = (event) => {
        setChecked(event.target.checked)
    };

    const handlerAddDescription = (event) => {
        setDescription(event.target.value)
    };

    const handlerUpdateCategory = () => {
        const data = {
            title: value,
            checked: checked,
            description,
            categoryId: categoryId
        }
        dispatch(actionUpdateCategory(data));
        handlerHideModal()
    };

    const handlerHideModal = () => {
        dispatch(actionHideModal())
    };

    return <ModalEditCategory
        myList={myList}
        name={name}
        value={value}
        findCategory={findCategory}
        checked={checked}
        description={description}
        handlerTransferCategory={handlerTransferCategory}
        handlerHideModal={handlerHideModal}
        handlerChangeInput={handlerChangeInput}
        handlerAddDescription={handlerAddDescription}
        handlerUpdateCategory={handlerUpdateCategory}
        handlerMarkCheckbox={handlerMarkCheckbox} />
};

ModalEditCategoryContainer.propTypes = {
    name: PropTypes.string,
    categoryId: PropTypes.number
};
