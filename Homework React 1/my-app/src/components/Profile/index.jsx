import React from 'react';
import PropTypes from 'prop-types'
import { ListGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Input } from '../Input';
import { ButtonMain } from '../ButtonMain';

import './styles.scss';
import { Spiner } from '../Spiner';

export const Profile = ({ localState, myList, addToMyList, changeInput, deleteFromMyList }) => {
    return <div className="toDoList">
        <Input placeholder="Введите задачу" value={localState} onChange={(event) => changeInput(event)} />
        <ButtonMain onClick={addToMyList} variant="primary" name="Добавить"></ButtonMain>
        <ListGroup>
            {myList.task.length ? myList.task.map((item) => {
                return <ListGroup.Item className="toDoList__item" key={item.id}>
                    {item.title}
                    <ButtonMain onClick={() => deleteFromMyList(item.id)} variant="danger" name="Удалить" />
                </ListGroup.Item>
            }) : <Spiner />}
        </ListGroup>
    </div>
};

Profile.propTypes = {
    localState: PropTypes.string,
    myList: PropTypes.object,
    addToMyList: PropTypes.func,
    changeInput: PropTypes.func,
    deleteFromMyList: PropTypes.func,
};