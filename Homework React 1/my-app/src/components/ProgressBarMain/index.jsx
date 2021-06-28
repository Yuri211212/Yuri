import React from 'react';
import PropTypes from 'prop-types';

import 'bootstrap/dist/css/bootstrap.min.css';
import { ProgressBar } from 'react-bootstrap';

export const ProgressBarMain = ({ completedCategory }) => {
    return <ProgressBar animated now={completedCategory} />
}

ProgressBarMain.propTypes = {
    completedCategory: PropTypes.number,
};