import React from 'react';
import './styles.css';

export class Header extends React.Component{
    render(){
    return <div className="header__div">{this.props.name}</div>
}
}