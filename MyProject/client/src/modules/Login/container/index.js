import { withFormik } from 'formik';
import validations from '../../../utils/validations';
import Login from '../components';

//здесь происходит валидация вводимого пароля и email, описанная в validations

export default withFormik({
mapPropsToValues: () => ({
    email: "",
    password: ""
}),
validate: (values) => {
    let errors = {}
    validations({ values, errors })
    return errors
},
displayName: 'Login'
})(Login)