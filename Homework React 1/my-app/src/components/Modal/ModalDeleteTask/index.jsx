import React from 'react';
import PropTypes from 'prop-types';

import { ButtonMain } from '../../ButtonMain';

import './styles.scss';

export const ModalDeleteTask = ({ handlerDeleteTaskfromModal,
    handlerHideModal,
    title }) => {
    return <>
        <div className='modalConfirm'>
            <p>Вы действительно хотите удалить <strong>{title}</strong>? </p>
            <div className='modalConfirm__buttons'>
                <ButtonMain variant="danger" name="Удалить" onClick={handlerDeleteTaskfromModal} />
                <ButtonMain variant="primary" name="Отмена" onClick={handlerHideModal} />
            </div>
        </div>
    </>
};

ModalDeleteTask.propTypes = {
    handlerDeleteTaskfromModal: PropTypes.func,
    handlerHideModal: PropTypes.func,
    title: PropTypes.string
};