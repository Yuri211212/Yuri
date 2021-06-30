import React from 'react';
import PropTypes from 'prop-types';

import { Input } from '../Input';
import { ButtonMain } from '../ButtonMain';

import { ListGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.scss';

export const Category = ({ category, todoID, change, handlerAddToCategory, handlerChangeInput, deleteFromCategory, handlerCheckedCategory }) => {
    return <div className="categoryList">
        <Input placeholder="Введите категорию" value={change} onChange={(event) => handlerChangeInput(event)} />
        <ButtonMain onClick={handlerAddToCategory} variant="primary" name="Добавить"></ButtonMain>
        <ListGroup>
            {category.map((item) => {
                return item.todoID === todoID ? <ListGroup.Item className="categoryList__item" key={item.id}>
                    {item.title}
                    <Input type="checkbox" onChange={(event) => handlerCheckedCategory(event, item.id)} />
                    <ButtonMain onClick={() => deleteFromCategory(item.id)} variant="danger" name="Удалить"></ButtonMain>
                </ListGroup.Item> : null
            })}
        </ListGroup>
    </div>
};

Category.propTypes = {
    change: PropTypes.string,
    todoID: PropTypes.number,
    category: PropTypes.array,
    handlerChangeInput: PropTypes.func,
    handlerAddToCategory: PropTypes.func,
    deleteFromCategory: PropTypes.func,
};