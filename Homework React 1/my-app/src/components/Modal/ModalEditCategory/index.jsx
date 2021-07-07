import React from 'react';
import PropTypes from 'prop-types';

import { ImageMain } from '../../ImageMain';
import { Task } from '../../Task';
import { Input } from '../../Input';
import { Textaria } from '../../Textaria';
import { ButtonMain } from '../../ButtonMain';

import { exitIcon } from '../../../static';

import './styles.scss';

export const ModalEditCategory = ({ myList,
    name,
    findCategory,
    value,
    checked,
    description,
    handlerTransferCategory,
    handlerChangeInput,
    handlerMarkCheckbox,
    handlerAddDescription,
    handlerUpdateCategory,
    handlerHideModal }) => {
    return <div className="modalEditCategory">
        <div className='modalEditCategory__header'>
            <p>Вы редактируете категорию <strong>"{findCategory.title}"</strong> </p>
            <ImageMain src={exitIcon} alt="Закрыть окно" onClick={handlerHideModal} />
        </div>
        <div className="modalEditCategory__common">
            <div className="modalEditCategory__left">
                <Task
                    myList={myList}
                    name={name}
                    handlerTransferCategory={handlerTransferCategory} />
            </div>
            <div className="modalEditCategory__right">
                <Input placeholder="Редактировать категорию" value={value} onChange={(event) => handlerChangeInput(event)} />
                <Input type="checkbox" checked={checked} onChange={(event) => handlerMarkCheckbox(event)}></Input>
                <Textaria value={description} placeholder="Добавьте описание" onChange={(event) => handlerAddDescription(event)} />
                <div className="modalEditCategory__buttons">
                    <ButtonMain variant="primary" name="Сохранить" onClick={handlerUpdateCategory} />
                    <ButtonMain variant="danger" name="Отмена" onClick={handlerHideModal} />
                </div>
            </div>
        </div>

    </div>
};

ModalEditCategory.propTypes = {
    myList: PropTypes.object,
    name: PropTypes.string,
    checked: PropTypes.bool,
    value: PropTypes.string,
    description: PropTypes.string,
    findCategory: PropTypes.object,
    handlerTransferCategory: PropTypes.func,
    handlerChangeInput: PropTypes.func,
    handlerMarkCheckbox: PropTypes.func,
    handlerAddDescription: PropTypes.func,
    handlerUpdateCategory: PropTypes.func,
    handlerHideModal: PropTypes.func,
};
