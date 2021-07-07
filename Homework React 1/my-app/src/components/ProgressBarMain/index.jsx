import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

import 'bootstrap/dist/css/bootstrap.min.css';
import { ProgressBar } from 'react-bootstrap';

export const ProgressBarMain = ({ completedCategory }) => {
    return <div className="progressbar">
        <ProgressBar animated now={completedCategory} />
    </div>
};

ProgressBarMain.propTypes = {
    completedCategory: PropTypes.number,
};