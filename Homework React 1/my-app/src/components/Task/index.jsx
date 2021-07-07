import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import { Input } from '../Input';
import { ButtonMain } from '../ButtonMain';
import { Spiner } from '../Spiner';
import { ImageMain } from '../ImageMain';
import { deleteIcon, editIcon, transferIcon } from '../../static';

import { ListGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import './styles.scss';

export const Task = ({ localState,
    myList,
    name,
    addToMyList,
    changeInput,
    deleteFromMyList,
    saveToLocalStorage,
    showEditTaskModal,
    deleteFromLocalStorage,
    handlerTransferCategory }) => {
    return <div className="todo">
        {!name ?
            <div className="todo__header">
                <Input placeholder="Введите задачу" value={localState} onChange={(event) => changeInput(event)} />
                <ButtonMain onClick={addToMyList} variant="primary" name="Добавить"></ButtonMain>
            </div>
            : null
        }
        <div className="todo__lists">
            <ListGroup>
                {myList.task.length ? myList.task.map((item) => {
                    return <NavLink to={`/todo/${item.id}`} key={item.id}><ListGroup.Item className="todo__item" key={item.id}>
                        {item.title}
                        {!name ?
                            <div className="todo__group-icons">
                                <ImageMain src={editIcon} alt="Редактировать" onClick={() => showEditTaskModal(item.id)} />
                                <ImageMain src={deleteIcon} alt="Удалить" onClick={() => deleteFromMyList(item.id, item.title)} />
                            </div>
                            : <ImageMain src={transferIcon} alt="Перенести" onClick={() => handlerTransferCategory(item.id)} />
                        }
                    </ListGroup.Item>
                    </NavLink>
                }) : <Spiner />}
            </ListGroup>
        </div>
        {!name ?
            <div className="todo__group-buttons">
                <ButtonMain variant="primary" name="Сохранить задачи" onClick={saveToLocalStorage} />
                <ButtonMain variant="secondary" name="Удалить задачи" onClick={deleteFromLocalStorage} />
            </div>
            : null
        }
    </div>
};

Task.propTypes = {
    localState: PropTypes.string,
    name: PropTypes.string,
    myList: PropTypes.object,
    addToMyList: PropTypes.func,
    changeInput: PropTypes.func,
    deleteFromMyList: PropTypes.func,
    saveToLocalStorage: PropTypes.func,
    deleteFromLocalStorage: PropTypes.func,
    showEditTaskModal: PropTypes.func,
    handlerTransferCategory: PropTypes.func
};