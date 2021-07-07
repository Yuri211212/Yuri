import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

export const Textaria = ({ value, placeholder, onChange }) => {
    return <textarea value={value} placeholder={placeholder} onChange={onChange} />
};

Textaria.propTypes = {
    value: PropTypes.string,
    placeholder: PropTypes.string,
    onChange: PropTypes.func
};