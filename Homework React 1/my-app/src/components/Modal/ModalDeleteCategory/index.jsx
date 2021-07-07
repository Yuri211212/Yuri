import React from 'react';
import PropTypes from 'prop-types';
import { ButtonMain } from '../../ButtonMain';

import './styles.scss';

export const ModalDeleteCategory = ({ handlerHideModal,
    handlerDeleteCategoryFromModal,
    title }) => {
    return <>
        <div className='modalConfirm'>
            <p>Вы действительно хотите удалить <strong>"{title}"</strong>? </p>
            <div className='modalConfirm__buttons'>
                <ButtonMain variant="danger" name="Удалить" onClick={handlerDeleteCategoryFromModal} />
                <ButtonMain variant="primary" name="Отмена" onClick={handlerHideModal} />
            </div>
        </div>
    </>
};

ModalDeleteCategory.propTypes = {
    title: PropTypes.string,
    handlerDeleteCategoryFromModal: PropTypes.func,
    handlerHideModal: PropTypes.func,
};