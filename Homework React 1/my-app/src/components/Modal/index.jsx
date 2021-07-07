import React from 'react';
import { useSelector } from 'react-redux';

import ModalDeleteTaskContainer from '../../container/ModalDeleteTaskContainer';
import ModalEditCategoryContainer from '../../container/ModalEditCategoryContainer.js';
import ModalEditTaskContainer from '../../container/ModalEditTaskContainer.js';
import ModalDeleteCategoryContainer from '../../container/ModalDeleteCategoryContainer';

export default function Modal() {
    const modals = useSelector(state => state.modalsReducer);

    const modalsCollection = {
        modalEditTask: ModalEditTaskContainer,
        modalEditCategory: ModalEditCategoryContainer,
        modalDeleteTask: ModalDeleteTaskContainer,
        modalDeleteCategory: ModalDeleteCategoryContainer,
    };

    if (!modals.length) {
        return null
    };

    return <>
        {modals.map((item) => {
            const CurrentModal = modalsCollection[item.name];
            return <CurrentModal {...item} key={item.name} />
        })}
    </>
};
