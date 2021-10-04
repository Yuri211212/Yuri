const { Router } = require('express');
const { check } = require('express-validator');
const { registration, login } = require('../../controllers/auth/registration');

const router = Router();

router.post('/registration', [
    check('email', 'Invalid email format').isEmail(),
    check('password', 'Password is too short').isLength({ min: 6 }),
    check('phone', 'Invalid number format').isMobilePhone(),
    check('name', 'Wrong name format').isAlphanumeric(),
    check('surname', 'Wrong surname format').isAlphanumeric(),
    check('age', 'Wrong number format').isNumeric(),
], async (req, res) => registration(req, res));

router.post('/login', [
    check('email', 'Please type correct email').normalizeEmail().isEmail(),
    check('password', 'Type your password').exists(),
], async (req, res) => login(req, res));

module.exports = router;