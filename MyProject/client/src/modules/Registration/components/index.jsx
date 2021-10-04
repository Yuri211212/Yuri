import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Form, Input, message } from 'antd';
import { Field } from 'formik';
import { useDispatch, useSelector } from 'react-redux';

import { handlerClearError, handlerClearSuccess } from '../../../store/auth/common';
import { validate } from '../../../utils/validate';
import { auth } from '../../../mock-routes';

import './styles.scss';

export default function Registration(props) {
    const { values, touched, errors, handleBlur, handleChange, handleSubmit } = props;
    const { success, error } = useSelector((state) => state.authReducer);
    const dispatch = useDispatch();
    
    useEffect(() => {
        success && message.success("You succefully created an account");
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
            <div className="backgroundRegistration"> </div>
            <div className="RegistrationBox">
                <Form onSubmit={handleSubmit} initialValues={{ remember: true }}>
                    <div className="UserRegistration">
                        <Form.Item
                            name="name"
                            validateStatus={validate('name', touched, errors)}
                            help={!touched.name ? null : errors.name}
                            hasFeedback>
                            <Input
                                className="registration-control"
                                size="large"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.name}
                                placeholder="Name" />
                        </Form.Item>
                        <Form.Item
                            name="surname"
                            validateStatus={validate('surname', touched, errors)}
                            help={!touched.surname ? null : errors.surname}
                            hasFeedback>
                            <Input
                                className="registration-control"
                                size="large"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.surname}
                                placeholder="Surname" />
                        </Form.Item>
                        <Form.Item
                            name="age"
                            validateStatus={validate('age', touched, errors)}
                            help={!touched.age ? null : errors.age}
                            hasFeedback>
                            <Input
                                className="registration-control"
                                size="large"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.age}
                                placeholder="Age" />
                        </Form.Item>
                        <Form.Item
                            name="sex"
                            validateStatus={validate('sex', touched, errors)}
                            help={!touched.sex ? null : errors.sex}
                            hasFeedback>
                            <Field
                                className="registration-control"
                                component="select"
                                value={values.sex}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            >
                                <option value="">Choose your gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </Field>
                        </Form.Item>
                        <Form.Item
                            name="phone"
                            validateStatus={validate('phone', touched, errors)}
                            help={!touched.phone ? null : errors.phone}
                            hasFeedback>
                            <Input
                                className="registration-control"
                                size="large"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.phone}
                                placeholder="Phone" />
                        </Form.Item>
                        <Form.Item
                            name="email"
                            validateStatus={validate('email', touched, errors)}
                            help={!touched.email ? null : errors.email}
                            hasFeedback>
                            <Input
                                className="registration-control"
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
                                className="registration-control"
                                size="large"
                                type="password"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.password}
                                placeholder="Password" />
                        </Form.Item>
                        <Form.Item
                            name="confirmPassword"
                            validateStatus={validate('confirmPassword', touched, errors)}
                            help={!touched.confirmPassword ? null : errors.confirmPassword}
                            hasFeedback>
                            <Input
                                size="large"
                                type="password"
                                className="registration-control"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.confirmPassword}
                                placeholder="Confirm your password" />
                        </Form.Item>
                    </div>
                </Form>
                <input type="submit" className="submitRegistration" value="Create an account" onClick={handleSubmit}/>
                <div className="Registration-goToLogin">
                    <Link to={auth.login()} className="loginUser" onClick={clearStatus}>Login page</Link>
                </div>
            </div>
        </>
    )
}
