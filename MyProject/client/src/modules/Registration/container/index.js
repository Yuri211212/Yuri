import { withFormik } from 'formik';
import validations from '../../../utils/validations';
import Registration from '../components';

//здесь происходит валидация вводимых данных, описанная в validations

export default withFormik({
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
displayName: 'Registration'
})(Registration)