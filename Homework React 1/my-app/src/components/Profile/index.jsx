import React from 'react';
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom';

import { Input } from '../Input';
import { ButtonMain } from '../ButtonMain';
import { Spiner } from '../Spiner';

import { ListGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.scss';

export const Profile = ({ localState, myList, addToMyList, changeInput, deleteFromMyList, saveToLocalStorage, deleteFromLocalStorage }) => {
    return <div className="toDoList">
        <Input placeholder="Введите задачу" value={localState} onChange={(event) => changeInput(event)} />
        <ButtonMain onClick={addToMyList} variant="primary" name="Добавить"></ButtonMain>
        <ListGroup>
            {myList.task.length ? myList.task.map((item) => {
                return <NavLink to={`/todo/${item.id}`} key={item.id}><ListGroup.Item className="toDoList__item" key={item.id}>
                    {item.title}
                    <ButtonMain onClick={() => deleteFromMyList(item.id, item.title)} variant="danger" name="Удалить" />
                </ListGroup.Item>
                </NavLink>
            }) : <Spiner animation="grow" variant="primary" />}
            <br></br>
            <ButtonMain variant="primary" name="Сохранить задачи" onClick={saveToLocalStorage} />
            <br></br>
            <ButtonMain variant="secondary" name="Удалить все задачи" onClick={deleteFromLocalStorage} />
        </ListGroup>

    </div>
};

Profile.propTypes = {
    localState: PropTypes.string,
    myList: PropTypes.object,
    addToMyList: PropTypes.func,
    changeInput: PropTypes.func,
    deleteFromMyList: PropTypes.func,
    saveToLocalStorage: PropTypes.func,
    deleteFromLocalStorage: PropTypes.func
};