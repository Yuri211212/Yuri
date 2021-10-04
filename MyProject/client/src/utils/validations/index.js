export default ({ values, errors }) => {
    const rules = {
        name: value => {
            if (!value) {
                errors.name = "Please type your name"
            } else if (!/^[a-zA-Z\-]+$/i.test(value)) {
                errors.name = "Wrong name format"
            }
        },
        surname: value => {
            if (!value) {
                errors.surname = "Please type your surname"
            } else if (!/^[a-zA-Z\-]+$/i.test(value)) {
                errors.surname = "Wrong surname format"
            }
        },
        age: value => {
            if (!value) {
                errors.age = "Please type your age"
            } else if (!/^[0-9\-]+$/i.test(value)) {
                errors.age = "In this field should be only numbers"
            } else if (value < 0 || value > 99) {
                errors.age = "Please type your real age"
            }
        },
        sex: value => {
            if (!value) { 
                errors.sex = "Please choose your gender"
            }
        },
        phone: value => {
            if (!value) {
                errors.phone = "Please type your phone number"
            } else if (!/^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/i.test(value)) {
                errors.phone = "Wrong format of the number"
            }
        },
        email: value => {
            if (!value) {
                errors.email = "Please type your email"
            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
                errors.email = "Wrong format of email"
            }
        },
        password: (value) => {
            if (!value) {
                errors.password = "Please type your password"
            } else if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/.test(value)) {
                errors.password = "This password is too weak"
            }
        },
        confirmPassword: (value) => {
            if (!value) {
                errors.confirmPassword = "Please comfirm your password"
            }
            if (value !== values.password) {
                errors.confirmPassword = "Password doesn't match"
            }
        },
        title: (value) => {
            if (!value) {
                errors.title = "Please type title of the task"
            } else if (value.length > 30) {
                errors.title = "This title is too long"
            }
        },
    }
    Object.keys(values).forEach(key => rules[key] && rules[key](values[key]));
}