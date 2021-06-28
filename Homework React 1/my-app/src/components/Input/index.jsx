import React from 'react';
import PropTypes from 'prop-types';

export function Input({ placeholder, value, onChange, type }) {
    return <input placeholder={placeholder} value={value} onChange={onChange} type={type}></input>
};

Input.propTypes = {
    placeholder: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
};