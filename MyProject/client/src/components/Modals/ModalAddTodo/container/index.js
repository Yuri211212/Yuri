import { withFormik } from 'formik';
import validations from '../../../../utils/validations/index';
import { ModalAddTodo } from '../ModalAddTodo';
import { connect } from 'react-redux';

import { createTodo } from '../../../../store/todo';
import { handlerClearError, handlerClearSuccess } from '../../../../store/auth/common';
import { actionHideModal } from '../../../../store/modals';

const ModalAddTodoContainer = 
withFormik({
enableReinitialize: true,
mapPropsToValues: () => ({
    title: "",
    description: "",
}),
validate: (values) => {
    let errors = {}
    validations({ values, errors })
    return errors
},
handleSubmit: (values, { props }) => {
    props.createTodo(values);
    props.handlerClearError();
    props.handlerClearSuccess();
    props.actionHideModal()
},
displayName: 'ModalAddTodo'
})(ModalAddTodo);

const mapDispatchToProps = (dispatch) => {
    return {
        createTodo: (payload) => dispatch(createTodo(payload)),
        handlerClearError: () => dispatch(handlerClearError()),
        handlerClearSuccess: () => dispatch(handlerClearSuccess()),
        actionHideModal: () => dispatch(actionHideModal()) 
    }
}

export default connect(null, mapDispatchToProps)(ModalAddTodoContainer)


