import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouteMatch } from 'react-router';
import { Category } from '../components/Category';
import { actionCreateCategory, actionDeleteCategory } from '../store/category';

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
            todoID
        }
        dispatch(actionCreateCategory(data));
        setChange('');
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
        deleteFromCategory={deleteFromCategory} />
};