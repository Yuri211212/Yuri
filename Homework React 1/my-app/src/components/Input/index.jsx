import React from 'react';
import PropTypes from 'prop-types';

export function Input({ placeholder, value, onChange }) {
    return <input type ={type} placeholder={placeholder} value={value} onChange={onChange}></input>
};

Input.propTypes = {
    placeholder: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
};