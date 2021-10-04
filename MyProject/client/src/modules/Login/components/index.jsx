import React, { useEffect } from 'react';
import { Form, Input, message } from 'antd';
import { auth } from '../../../mock-routes';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { validate } from '../../../utils/validate';

import './styles.scss';
import { handlerClearError, handlerClearSuccess } from '../../../store/auth/common';

export default function Login(props) {
    const { values, touched, errors, handleBlur, handleChange, handleSubmit } = props;
    const { success, error } = useSelector((state) => state.authReducer);
    const dispatch = useDispatch();
    
    useEffect(() => {
        success && message.success("You succefully logged in");
        error && message.error(error);
    }, [success, error]);

    const clearStatus = () => {
        dispatch(handlerClearSuccess());
        dispatch(handlerClearError());
    };

    useEffect(() => {
        return () => {
            clearStatus();
        }
    }, []);

    return (
        <>
            <div className="backgroundLogin"> </div>
            <div className="LoginBox">
                <Form onSubmit={handleSubmit} initialValues={{ remember: true }}>
                    <div className="UserLogin">
                        <Form.Item
                            name="email"
                            validateStatus={validate('email', touched, errors)}
                            help={!touched.email ? null : errors.email}
                            hasFeedback>
                            <Input
                                className="login-control"
                                size="large"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.email}
                                placeholder="E-mail" />
                        </Form.Item>
                        <Form.Item
                            name="password"
                            validateStatus={validate('password', touched, errors)}
                            help={!touched.password ? null : errors.password}
                            hasFeedback>
                            <Input
                                className="login-control"
                                size="large"
                                type="password"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.password}
                                placeholder="Password" />
                        </Form.Item>
                    </div>
                </Form>
                <input type="submit" className="submitLogin" value="Login" onClick={handleSubmit} />
                <div className="Login-goToRegister">
                    <Link to={auth.registration()} className="registerUser" onClick={clearStatus}>Register now</Link>
                </div>
            </div>
        </>
    )
}