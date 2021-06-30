import React from 'react'
import { useSelector } from 'react-redux'

import ModalDelete from './ModalDelete';

export default function Modal() {
    const modals = useSelector(state => state.modalsReducer);

    const modalsCollection = {
        modalDelete: ModalDelete
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
}
