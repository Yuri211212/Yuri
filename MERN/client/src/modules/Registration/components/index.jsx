import React, { useEffect } from 'react';
import { Form, Input } from 'antd';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { message, Button } from 'antd';
import HeaderForm from '../../Login/HeaderForm';
import { validate } from '../../../utils/validate/index';
import { auth } from '../../../mock-routes';
import { handlerClearError, handlerClearSuccess } from '../../../store/auth/common';


export default function Registration(props) {
    const { values, touched, errors, handleBlur, handleChange, handleSubmit } = props;
    const { isLoading, success, error } = useSelector((state) => state.authReducer);
    
    const dispatch = useDispatch();

    useEffect(() => {
        success && message.success("Вы успешно зарегистрировались");
        error && message.error(error);
    }, [success, error]);

    const clearStatus = () => {
        dispatch(handlerClearSuccess());
        dispatch(handlerClearError());
    }
    useEffect(() => {
        return () => {
            clearStatus();
        }
    }, [])

    return (
        <div className="form">
            <HeaderForm title="Регистрация аккаунта" description="Пожалуйста, зарегистрируйтесь"/>
            <Form onSubmit={handleSubmit} initialValues={{ remember: true }}>
                <Form.Item
                    name="email"
                    validateStatus={validate('email', touched, errors)}
                    help={!touched.email ? null : errors.email}
                    hasFeedback>
                    <Input
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
                        size="large"
                        type="password"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.password}
                        placeholder="Пароль" />
                </Form.Item>
                <Form.Item
                    name="confirmPassword"
                    validateStatus={validate('confirmPassword', touched, errors)}
                    help={!touched.confirmPassword ? null : errors.confirmPassword}
                    hasFeedback>
                    <Input
                        size="large"
                        type="password"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.confirmPassword}
                        placeholder="Повторите пароль" />
                </Form.Item>
                <Form.Item>
                <Button type="primary" size="large" onClick={handleSubmit} loading={isLoading}>
                    Зарегистрироваться
                    </Button>
                <Link to={auth.login()} onClick={clearStatus}>
                    Войти в аккаунт
                </Link>
                </Form.Item>
            </Form>
        </div>
    )
}
