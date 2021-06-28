import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router';
import { Category } from '../components/Category';
import { actionCreateCategory, actionDeleteCategory, actionEditCategory } from '../store/category';

export default function CategoryContainer() {
    const categories = useSelector((state) => state.category);

    const [change, setChange] = useState('');

    const handlerChangeInput = (event) => {
        setChange(event.target.value)
    };

    const dispatch = useDispatch();

    const match = useRouteMatch('/todo/:id');

    const todoID = +match?.params.id;

    const handlerAddToCategory = () => {
        const data = {
            title: change,
            id: Date.now(),
            checked:false,
            todoID
        }
        dispatch(actionCreateCategory(data));
        setChange('');
    };
    const handlerCheckedCategory = (event, categoryID) => {
        const data = {
            checked: event.target.checked,
            id: categoryID
        }
        dispatch(actionEditCategory(data));
    };
    const deleteFromCategory = (idFromRemoved) => {
        dispatch(actionDeleteCategory(idFromRemoved))
    };

    return <Category
        categories={categories}
        change={change}
        todoID={todoID}
        handlerAddToCategory={handlerAddToCategory}
        handlerChangeInput={handlerChangeInput}
        deleteFromCategory={deleteFromCategory}
        handlerCheckedCategory={handlerCheckedCategory} />
};