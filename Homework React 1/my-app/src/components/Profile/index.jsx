import React from 'react';
import PropTypes from 'prop-types'
import { ListGroup } from 'react-bootstrap' ;
import 'bootstrap/dist/css/bootstrap.min.css';

import { Input } from '../Input';
import { Mainbutton } from '../Mainbutton';

import './styles.scss';

export const Profile = ({localState, myList, addToMyList, changeInput, deleteFromMyList}) => {


return <div className="toDoList">
<Input placeholder="Введите задачу" value={localState} onChange={(event) => changeInput (event)}/>
<Mainbutton onClick={addToMyList} variant="primary" name="Добавить"></Mainbutton>
<ListGroup>
    {myList.task.map((item) => <ListGroup.Item className="toDoList__item" key={item.id}>{item.title}<Mainbutton onClick={() => deleteFromMyList (item.id)} variant="danger"name="Удалить"></Mainbutton></ListGroup.Item>)}
</ListGroup>
</div>
};

Profile.propTypes = {
    localState:PropTypes.object,
    myList:PropTypes.string,
    addToMyList:PropTypes.func,
    changeInput:PropTypes.func,
    deleteFromMyList:PropTypes.func,
}

