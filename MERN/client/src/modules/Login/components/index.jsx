import React, { useEffect, useContext } from 'react';
import { Button, message, Input, Form } from 'antd';
import { validate } from '../../../utils/validate';
import HeaderForm from '../HeaderForm';
import { auth } from '../../../mock-routes/index';
import './styles.scss';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { handlerClearError, handlerClearSuccess } from '../../../store/auth/common';

export default function Login(props) {
    const { values, touched, errors, handleBlur, handleChange, handleSubmit } = props;
    const { user } = useSelector((state) => state.authReducer);
    const { isLoading, error, success } = useSelector((state) => state.authReducer);

    console.log('sdsfsf', user);

    // const authUser = useContext(AuthContext)
    // useEffect(() => {
    //    if (user) {
    //        authUser.login(user.token, user.userId)
    //    }
    // });

    const dispatch = useDispatch();

    useEffect(() => {
        success && message.success("Вы успешно авторизовались");
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
        <div className="form">
            <HeaderForm title="Войти в аккаунт" description="Пожалуйста, войдите в свой аккаунт" />
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
                <Form.Item>
                    <Button type="primary" size="large" onClick={handleSubmit} loading={isLoading}>
                        Войти
                    </Button>
                    <Link to={auth.registration()} onClick={clearStatus}>
                        Создать аккаунт
                    </Link>
                </Form.Item>
            </Form>
        </div>
    )
}
