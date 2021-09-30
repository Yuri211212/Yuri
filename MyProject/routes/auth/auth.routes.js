const { Router } = require('express');
const { check } = require('express-validator');
const { registration, login } = require('../../controllers/auth/registration');

const router = Router();

router.post('/registration', [
    check('email', 'Некорректный адрес').isEmail(),
    check('password', 'Минимальная длина пароля 6 символов').isLength({ min: 6 }),
    check('phone', 'Некорректный формат номера').isMobilePhone(),
    check('name', 'Некорректный формат поля').isAlphanumeric(),
    check('surname', 'Некорректный формат поля').isAlphanumeric(),
    check('age', 'Некорректный формат возраста').isNumeric(),
], async (req, res) => registration(req, res));

router.post('/login', [
    check('email', 'Введите корректный email').normalizeEmail().isEmail(),
    check('password', 'Введите пароль').exists(),
], async (req, res) => login(req, res));

module.exports = router;