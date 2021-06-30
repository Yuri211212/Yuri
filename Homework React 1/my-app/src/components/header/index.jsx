import React, { useContext } from 'react';
import { Test } from '../../contextContext';

import './styles.css';

export const Header = () => {
    const context = useContext(Test);

    return <ul className='header__ul'>
        <li>{context.value}</li>
    </ul>
};