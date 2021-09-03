import { withFormik } from 'formik';
import validations from '../../../utils/validations/index';
import Registration from '../components';
import { connect } from 'react-redux';
import { authRegistration } from '../../../store/auth';
import { handlerClearError, handlerClearSuccess } from '../../../store/auth/common';

const RegistrationContainer = 
withFormik({
    enableReinitialize: true,
    mapPropsToValues: () => ({
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
    displayName: 'registration'
})(Registration);

const mapDispatchToProps = (dispatch) => {
    return {
        authRegistration: (payload) => dispatch(authRegistration(payload)),
        handlerClearError: () => dispatch(handlerClearError()),
        handlerClearSuccess: () => dispatch(handlerClearSuccess()), 
    }
}
export default connect(null, mapDispatchToProps)(RegistrationContainer)