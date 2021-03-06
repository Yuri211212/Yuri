import React from 'react';
import PropTypes from 'prop-types';

import { Input } from '../Input';
import { ButtonMain } from '../ButtonMain';
import { ImageMain } from '../ImageMain';
import { deleteIcon, editIcon } from '../../static';

import { ListGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.scss';

export const Category = ({ category,
    todoID,
    change,
    handlerAddToCategory,
    handlerChangeInput,
    deleteFromCategory,
    handlerCheckedCategory,
    showModalCategory }) => {
    return <div className="category">
        <div className="category__header">
            <Input placeholder="Введите категорию" value={change} onChange={(event) => handlerChangeInput(event)} />
            <ButtonMain onClick={handlerAddToCategory} variant="primary" name="Добавить"></ButtonMain>
        </div>
        <div className="category__list">
        <ListGroup>
            {category.map((item) => {
                return item.todoID === todoID ? <ListGroup.Item className="category__list-element" key={item.id}>
                    <div className="category__content">
                        {item.title}
                        <div className="category__group">
                            <Input type="checkbox" checked={item.checked} onChange={(event) => handlerCheckedCategory(event, item.id)} />
                            <ImageMain src={editIcon} alt="Редактировать" onClick={() => showModalCategory(item.id)} />
                            <ImageMain src={deleteIcon} alt="Удалить" onClick={() => deleteFromCategory(item.id, item.title)} />
                        </div>
                    </div>
                </ListGroup.Item> : null
            })}
        </ListGroup>
        </div>
    </div>
};

Category.propTypes = {
    change: PropTypes.string,
    todoID: PropTypes.number,
    category: PropTypes.array,
    handlerChangeInput: PropTypes.func,
    handlerAddToCategory: PropTypes.func,
    deleteFromCategory: PropTypes.func,
    showModalCategory: PropTypes.func
};