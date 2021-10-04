import React, { useContext } from 'react';
import { useDispatch } from 'react-redux';
import { clearUser } from '../../store/auth/login';
import { AuthContext } from '../../context/AuthContext';
import { ImageMain } from '../ImageMain/ImageMain';
import { exitIcon } from '../../static/icons';

export const Header = () => {
    const { logout } = useContext(AuthContext);
    const dispatch = useDispatch();
  
    const handlerLogout = () => {
      dispatch(clearUser());
      logout()
    };

    return <div className='header'>
        <ImageMain src={exitIcon} alt="Logout" onClick={handlerLogout} />
    </div>
};