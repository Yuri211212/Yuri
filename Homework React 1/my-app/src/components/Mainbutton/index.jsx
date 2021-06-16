import React from 'react';
import PropTypes from 'prop-types'
import { Button } from 'react-bootstrap' ;
import 'bootstrap/dist/css/bootstrap.min.css';

export function Mainbutton ({onClick, variant, name}){
    return <Button onClick={onClick} variant={variant}>{name}</Button>
}

Mainbutton.propTypes = {
    onClick:PropTypes.func,
    variant:PropTypes.string,
    name:PropTypes.string
}