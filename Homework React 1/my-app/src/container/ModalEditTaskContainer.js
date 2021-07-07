import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import { actionHideModal } from '../store/modals';
import { actionEditTodo } from '../store/todos';
import { getTasks } from '../store/todos/selectors';

import { ModalEditTask } from '../components/Modal/ModalEditTask';

export default function ModalEditTaskContainer({ taskId }) {
    const { task } = useSelector((state) => getTasks(state));

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
