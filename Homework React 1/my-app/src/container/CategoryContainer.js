import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Category } from '../components/Category';
import { actionCreateCategory, actionDeleteCategory } from '../store/category';


export default function CategoryContainer() {
    const categories = useSelector((state) => state.category);

    const [change, setChange] = useState('');

    const handlerChangeInput = (event) => {
        setChange(event.target.value)
    };

    const dispatch = useDispatch();

    const handlerAddToCategory = () => {
        const data = {
            title: change,
            id: Date.now()
        }
        dispatch(actionCreateCategory(data));
    };

    const deleteFromCategory = (idFromRemoved) => {
        dispatch(actionDeleteCategory(idFromRemoved))
    };

    return <Category
        categories={categories}
        change={change}
        handlerAddToCategory={handlerAddToCategory}
        handlerChangeInput={handlerChangeInput}
        deleteFromCategory={deleteFromCategory} />
};