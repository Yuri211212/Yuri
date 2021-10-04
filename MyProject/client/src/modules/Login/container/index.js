import { withFormik } from 'formik';
import validations from '../../../utils/validations';
import Login from '../components';
import { connect } from 'react-redux';
import { authLogin } from '../../../store/auth/login';
import { handlerClearError, handlerClearSuccess } from '../../../store/auth/common';

//здесь происходит валидация вводимого пароля и email, описанная в validations

const LoginContainer = 
withFormik({
enableReinitialize: true,
mapPropsToValues: () => ({
    email: "",
    password: ""
}),
validate: (values) => {
    let errors = {}
    validations({ values, errors })
    return errors
},
handleSubmit: (values, { props }) => {
    props.authLogin(values);
    props.handlerClearError();
    props.handlerClearSuccess();
},
displayName: 'Login'
})(Login);

const mapDispatchToProps = (dispatch) => {
    return {
        authLogin: (payload) => dispatch(authLogin(payload)),
        handlerClearError: () => dispatch(handlerClearError()),
        handlerClearSuccess: () => dispatch(handlerClearSuccess()), 
    }
}

export default connect(null, mapDispatchToProps)(LoginContainer)



