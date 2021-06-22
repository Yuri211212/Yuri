import React from 'react';
import { Spinner } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export const Spiner = ({ animation, variant}) => {
    return <Spinner animation={animation} variant={variant}/>
};
