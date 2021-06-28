import React, { useCallback, useContext, useEffect, useRef, useState } from 'react';
import { Test } from '../../contextContext';
import { ButtonMain } from '../ButtonMain';
import './styles.css';

export const Header = () => {
const context = useContext(Test);

const [count, setCount] = useState(0);

const ref = useRef(100);

useEffect(() => {
    ref.current++
});

const handlerCount = useCallback(() => {
    setCount(prev => prev +1)
}, []);

return <ul className='header__ul'>
            <li>{context.value}</li>
            <li>{ref.current}</li>
            <p>{count}</p>
            <ButtonMain variant="primary" onClick={handlerCount}/>
        </ul>
    };