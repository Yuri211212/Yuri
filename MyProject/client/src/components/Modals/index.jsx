import React from 'react';
import { useSelector } from 'react-redux';
import ModalAddTodoContainer from '../../components/Modals/ModalAddTodo/container/index';
import { ModalDeleteTodo } from './ModalDeleteTodo/ModalDeleteTodo';

export default function Modal() {
    const modals = useSelector(state => state.modalsReducer);
    
    const modalsCollection = {
        modalAddTodo: ModalAddTodoContainer,
        modalDeleteTodo: ModalDeleteTodo
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
