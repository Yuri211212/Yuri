import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useRouteMatch } from 'react-router';

import { actionCreateCategory, actionEditCategory } from '../store/category';
import { actionShowModal } from '../store/modals';

import { Category } from '../components/Category';

export default function CategoryContainer() {
    const { category } = useSelector((state) => state.categoryReducer);

    const [change, setChange] = useState('');

    const dispatch = useDispatch();

    const location = useLocation();

    const match = useRouteMatch('/todo/:id');

    const handlerChangeInput = (event) => {
        setChange(event.target.value)
    };

    const todoID = +match?.params.id;

    const getValueSearch = new URLSearchParams(location.search).get("search");

    const filterCategoryTitle = getValueSearch ? category.filter((item) => item.title.toLocaleLowerCase().includes(getValueSearch.toLocaleLowerCase())) : category;

    const handlerAddToCategory = () => {
        const data = {
            title: change,
            id: Date.now(),
            checked: false,
            todoID,
            description: '',
        };
        if (!change) {
            return console.log("Поле пустое")
        }
        dispatch(actionCreateCategory(data));
        setChange('');
    };

    const showModalCategory = (categoryId) => {
        dispatch(actionShowModal({ name: 'modalEditCategory', categoryId }))
    };

    const handlerCheckedCategory = (event, categoryID) => {
        const data = {
            checked: event.target.checked,
            id: categoryID
        }
        dispatch(actionEditCategory(data));
    };

    const deleteFromCategory = (idFromRemoved, title) => {
        dispatch(actionShowModal({ name: 'modalDeleteCategory', idFromRemoved, title }))
    };

    return <Category
        category={filterCategoryTitle}
        change={change}
        todoID={todoID}
        handlerAddToCategory={handlerAddToCategory}
        handlerChangeInput={handlerChangeInput}
        deleteFromCategory={deleteFromCategory}
        handlerCheckedCategory={handlerCheckedCategory}
        showModalCategory={showModalCategory} />
};