import React, { useContext } from 'react';
import { Button } from 'antd';
import { useDispatch } from 'react-redux';
import { AuthContext } from '../../../context/AuthContext';
import { validate } from '../../../utils/validate/index';

import './styles.scss'
import { actionHideModal } from '../../../store/modals';
import { Form, Input } from 'antd';

export const ModalAddTodo = (props) => {
    const { values, touched, errors, handleBlur, handleChange, handleSubmit } = props;
    const { token } = useContext(AuthContext);
    values.token = token;
    const dispatch = useDispatch();

    const handlerHideModal = () => {
        dispatch(actionHideModal())
    };

    return (
        <div className="modalAddTodo">
            <p>Please type title of the task</p>
            <Form onSubmit={handleSubmit} initialValues={{ remember: true }}>
            <Form.Item 
            name="title"
            validateStatus={validate('title', touched, errors)}
            help={!touched.title ? null : errors.title}
            hasFeedback>
            <Input
                name="title"
                size="large"
                placeholder="title"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.title} />
            </Form.Item>
                <p>Please type description of the task</p>
            <Input
                name="description"
                size="large"
                placeholder="description"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.description} />
            <br/>
            <br/>
            <Button
                type="primary"
                onClick={handleSubmit}>
                Save task
            </Button>
            <Button
                type="danger"
                onClick={handlerHideModal}>
                Cancel
            </Button>
            </Form>
        </div>
    )
}