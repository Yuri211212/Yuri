import React from 'react';
import PropTypes from 'prop-types';

export function Input({ placeholder, value, onChange, type, checked }) {
    return <input placeholder={placeholder} value={value} checked={checked} onChange={onChange} type={type}></input>
};

Input.propTypes = {
    placeholder: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
};