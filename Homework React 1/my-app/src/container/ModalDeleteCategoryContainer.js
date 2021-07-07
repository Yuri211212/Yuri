import React from 'react';
import PropTypes from 'prop-types';

import { useDispatch } from 'react-redux';

import { actionDeleteCategory } from '../store/category';
import { actionHideModal } from '../store/modals';

import { ModalDeleteCategory } from '../components/Modal/ModalDeleteCategory';

export default function ModalDeleteCategoryContainer({ idFromRemoved, title }) {
    const dispatch = useDispatch();

    const handlerDeleteCategoryFromModal = () => {
        dispatch(actionDeleteCategory(idFromRemoved));
        handlerHideModal()
    };

    const handlerHideModal = () => {
        dispatch(actionHideModal())
    };

    return <ModalDeleteCategory
        handlerDeleteCategoryFromModal={handlerDeleteCategoryFromModal}
        handlerHideModal={handlerHideModal}
        title={title} />
};

ModalDeleteCategoryContainer.propTypes = {
    title: PropTypes.string,
    idFromRemoved: PropTypes.number
};
