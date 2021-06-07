import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

export class Header extends React.Component{
    render(){
    return <ul className='header__ul'>
        <Link to="/user"><li>User</li></Link>
        <Link to="/profile"><li>Profile</li></Link>
        <Link to="/settings"><li>Settings</li></Link>
    </ul>
}
}