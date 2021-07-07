import React from 'react';

import { Button, Spinner } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import './styles.scss';

export const Spiner = () => {
    return <div className="spiner">
        <Button variant="primary" disabled>
            <Spinner as="span" animation="grow" size="sm" role="status" aria-hidden="true" />
            Ожидание задач
        </Button>
    </div>
};