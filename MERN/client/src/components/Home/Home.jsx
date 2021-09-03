import React from 'react';
import { useDispatch } from 'react-redux';
import { clearUser } from '../../store/auth/login';

export default function Home() {
    const dispatch = useDispatch();

    const logout = () => {
    dispatch(clearUser())    
    }
    
    return (
        <div>
        Home 
        <button onClick={logout}>Выход</button>
        </div>
    )
}
