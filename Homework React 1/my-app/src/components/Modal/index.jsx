import React from 'react';
import { useSelector } from 'react-redux';

import ModalDeleteContainer from '../../container/ModalDeleteContainer.js';
import ModalEditCategoryContainer from '../../container/ModalEditCategoryContainer.js';
import ModalEditTaskContainer from '../../container/ModalEditTaskContainer.js';

export default function Modal() {
    const modals = useSelector(state => state.modalsReducer);

    const modalsCollection = {
        modalDelete: ModalDeleteContainer,
        modalEditTask: ModalEditTaskContainer,
        modalEditCategory: ModalEditCategoryContainer,
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
