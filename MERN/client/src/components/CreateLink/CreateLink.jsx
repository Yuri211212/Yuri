import React, { useContext, useEffect, useState } from 'react';
import { Button, message, Input } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { createLink } from '../../store/link/create';
import { actionClearLinks, getAllLinks } from '../../store/link/getAllLinks';
import { AuthContext } from '../../context/AuthContext';

export default function CreateLink() {
    const { isLoading, success } = useSelector((state) => state.linkReducer);

    useEffect(() => {
        success && message.success("Ccылка успешно сохранена")  
    }, [success]); 
    
    const [value, setValue] = useState('');
    const { token } = useContext(AuthContext);
    const dispatch = useDispatch();

    const handlerOnChange = (event) => {
        setValue(event.target.value);
    };

    const handlerSendLink = async () => {
        dispatch(actionClearLinks());
        await dispatch(createLink({ payload: {from: value }, token }));
        await dispatch(getAllLinks({ token }));
        setValue('');
    };
    return (
        <>
            <Input
                name="from"
                size="large"
                placeholder="Укажите ссылку"
                onChange={handlerOnChange}
                value={value} />
            <Button 
            type="primary" 
            onClick={handlerSendLink}
            loading={isLoading}>
                Отправить ссылку
            </Button>
        </>
    )
}

