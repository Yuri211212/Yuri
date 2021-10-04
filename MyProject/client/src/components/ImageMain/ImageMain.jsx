import React from 'react';

import './styles.scss';

export const ImageMain = ({ src, alt, onClick }) => {
    return <img src={src} alt={alt} onClick={onClick} className="image" />
};