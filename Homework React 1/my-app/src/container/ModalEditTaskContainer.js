import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { ModalEditTask } from '../components/Modal/ModalEditTask';
import { actionHideModal } from '../store/modals';
import { actionEditTodo } from '../store/todos';

export default function ModalEditTaskContainer({ taskId }) {
    const { task } = useSelector((state) => state.taskReducer);

    const dispatch = useDispatch();

    const findTask = task.find((item) => item.id === taskId);

    const [value, setValue] = useState(findTask);

    const handlerHideModal = () => {
        dispatch(actionHideModal())
    };

    const handlerChangeInput = (event) => {
        setValue(event.target.value)
    };

    const handlerEditTask = () => {
        const data = {
            title: value,
            taskId
        }
        dispatch(actionEditTodo(data));
        handlerHideModal()
    };

    return <ModalEditTask
        findTask={findTask.title}
        value={value.title}
        handlerChangeInput={handlerChangeInput}
        handlerHideModal={handlerHideModal}
        handlerEditTask={handlerEditTask}
    />
};

ModalEditTaskContainer.propTypes = {
    taskId: PropTypes.number

};
