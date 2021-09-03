export default ({ values, errors }) => {
    const rules = {
        email: value => {
            if (!value) {
                errors.email = "Введите email"
            }else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)){
                errors.email = "Неверный email"
            }
        },
        password: (value) => {
            if (!value) {
            errors.password = "Введите пароль"    
            }else if(!/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/.test(value)){
                errors.password = "Слишком простой пароль"
            }
        },
        confirmPassword: (value) => {
            if (!value) {
            errors.confirmPassword = "Пожалуйста введите пароль"    
            }
            if (value !== values.password) {
            errors.confirmPassword = "Пароли не совпадают"    
            }
        },
    }
    Object.keys(values).forEach(key => rules[key]&& rules[key](values[key]));
}