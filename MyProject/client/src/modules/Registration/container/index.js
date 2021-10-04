import { withFormik } from 'formik';
import { connect } from 'react-redux';
import { authRegistration } from '../../../store/auth';
import { handlerClearError, handlerClearSuccess } from '../../../store/auth/common';
import validations from '../../../utils/validations';
import Registration from '../components';

//здесь происходит валидация вводимых данных, описанная в validations

const RegistrationContainer =
withFormik({
enableReinitialize: true,
mapPropsToValues: () => ({
    name:"",
    surname:"",
    age:"",
    sex:"",
    phone:"",
    email: "",
    password: "",
    confirmPassword: "",
}),
validate: (values) => {
    let errors = {}
    validations({ values, errors })
    return errors
},
handleSubmit: (values, { props }) => {
    props.authRegistration(values);
    props.handlerClearError();
    props.handlerClearSuccess();
},
displayName: 'Registration'
})(Registration)

const mapDispatchToProps = (dispatch) => {
    return {
        authRegistration: (payload) => dispatch(authRegistration(payload)),
        handlerClearError: () => dispatch(handlerClearError()),
        handlerClearSuccess: () => dispatch(handlerClearSuccess()), 
    }
}
export default connect(null, mapDispatchToProps)(RegistrationContainer)