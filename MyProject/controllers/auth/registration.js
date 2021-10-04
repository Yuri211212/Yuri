const User = require('../../models/auth/index');
const { validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');
const config = require('config');
const bcrypt = require('bcryptjs');


//функция регистрации, которая получает введенные при регистрации данные, осуществляется проверка, нет ли уже пользователя с указанным email, хешируется пароль и все полученные данные сохраняются

async function registration(req, res) {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array(), message: 'Invalid data' })
        };
        const { email, password, name, surname, age, phone, sex } = req.body;
        const candidateCheckEmail = await User.findOne({ email });
        if (candidateCheckEmail) {
            return res.status(400).json({ message: 'This email was used already' });
        }
        const candidateCheckPhone = await User.findOne({ phone });
        if (candidateCheckPhone) {
            return res.status(400).json({ message: 'This number was used already' });
        }
        const hashedPassword = await bcrypt.hash(password, 12);
        const user = new User({ email, password: hashedPassword, name, surname, age, phone, sex });
        await user.save();
        res.status(201).json({ message: 'User created' })
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Smth went wrong, please try again' })
    }
}

//функция авторизации, полученный на вход email сопоставляется с имеющимися в базе, далее осуществляется сверка паролей

async function login(req, res) {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array(), message: 'Некорректные данные при входе' })
        };
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: 'Пользователь не найден' })
        };

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Неверный пароль, попробуйте снова' })
        }

    //после сверки пароль ответ приходит в виде токена. В нем указывается id, секретное слово и время жизни токена

        const token = jwt.sign(
            { userId: user.id },
            config.get('jwtSecret'),
            { expiresIn: '1h' }
        )
        res.json({ token, userId: user.id });
    } catch (error) {
        res.status(500).json({ message: 'При авторизации что-то пошло не так' })
    }
}

module.exports = { registration, login }