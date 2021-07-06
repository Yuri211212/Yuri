import React from 'react';
import { Task } from '../../Task';

import './styles.scss';

export const ModalEditCategory = ({ myList,
    name,
    handlerTransferCategory }) => {
    return <div className="modalEditCategory">
        <Task
            myList={myList}
            name={name}
            handlerTransferCategory={handlerTransferCategory} />
    </div>
};
