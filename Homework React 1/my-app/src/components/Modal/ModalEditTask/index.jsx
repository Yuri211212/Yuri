import React from 'react';
import PropTypes from 'prop-types';

import { ButtonMain } from '../../ButtonMain';
import { Input } from '../../Input';

import './styles.scss';

export const ModalEditTask = ({ value,
    findTask,
    handlerChangeInput,
    handlerHideModal,
    handlerEditTask }) => {
    return <div className="modalEditTask">
        <div className='modalEditTask__header'>
            <p>Вы редактируете задачу <strong>"{findTask}"</strong> </p>
            <Input value={value} onChange={(event) => handlerChangeInput(event)}></Input>
        </div>
        <div className='modalEditTask__buttons'>
            <ButtonMain variant="primary" name="Сохранить" onClick={handlerEditTask} />
            <ButtonMain variant="danger" name="Отмена" onClick={handlerHideModal} />
        </div>
    </div>
};

ModalEditTask.propTypes = {
    value: PropTypes.string,
    findTask: PropTypes.string,
    handlerChangeInput: PropTypes.func,
    handlerHideModal: PropTypes.func,
    handlerEditTask: PropTypes.func,
};