const User = require('../../models/auth/index');
const { validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');
const config = require('config');
const bcrypt = require('bcryptjs');

async function registration(req, res) {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array(), message: 'Некорректные данные' })
        };
        const { email, password } = req.body;
        const candidate = await User.findOne({ email });
        if (candidate) {
            return res.status(400).json({ message: 'Такой пользователь уже существует' });
        }
        const hashedPassword = await bcrypt.hash(password, 12);
        const user = new User({ email, password: hashedPassword });
        await user.save();
        res.status(201).json({ message: 'Пользователь создан' })
    } catch (error) {
        res.status(500).json({ message: 'При регистрации что-то пошло не так' })
    }
}

async function login(req, res) {
try {
    const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array(), message: 'Некорректные данные при входе' })
        };
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
        return res.status(400).json({ message: 'Пользователь не найден'})
    };

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        return res.status(400).json({ message: 'Неверный пароль, попробуйте снова'})    
    }
    const token = jwt.sign(
        { userId: user.id },
        config.get('jwtSecret'),
        { expiresIn: '1h'}
    )
    res.json({ token, userId: user.id});
} catch (error) {
    res.status(500).json({ message: 'При авторизации что-то пошло не так' })
}
}

module.exports = { registration, login }