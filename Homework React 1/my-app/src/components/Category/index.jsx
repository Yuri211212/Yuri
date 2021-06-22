import React from 'react';
import PropTypes from 'prop-types';
import { ListGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Input } from '../Input';
import { ButtonMain } from '../ButtonMain';

import './styles.scss';

export const Category = ({ categories, change, handlerAddToCategory, handlerChangeInput, deleteFromCategory }) => {
    return <div className="categoryList">
        <Input placeholder="Введите категорию" value={change} onChange={(event) => handlerChangeInput(event)} />
        <ButtonMain onClick={handlerAddToCategory} variant="primary" name="Добавить"></ButtonMain>
        <ListGroup>
            {categories.category.map((item) => <ListGroup.Item className="toDoList__item" key={item.id}>{item.title}<ButtonMain onClick={() => deleteFromCategory(item.id)} variant="danger" name="Удалить"></ButtonMain></ListGroup.Item>)}
        </ListGroup>
    </div>
};

Category.propTypes = {
    change: PropTypes.string,
    categories: PropTypes.object,
    handlerChangeInput: PropTypes.func,
    handlerAddToCategory: PropTypes.func,
    deleteFromCategory: PropTypes.func,
};