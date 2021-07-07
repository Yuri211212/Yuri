import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

export const ImageMain = ({ src, alt, onClick }) => {
    return <img src={src} alt={alt} onClick={onClick} className="image" />
};

ImageMain.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    onClick: PropTypes.func
};