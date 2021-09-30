const express = require('express');
const config = require('config');
const mongoose = require('mongoose');
const authRouter = require('./routes/auth/auth.routes');

const app = express();

const PORT = config.get('port') || 5000;
const MONGODBURL = config.get('mongodbUrl');

app.use('/api/auth', authRouter);

async function start() {
    try {
        await mongoose.connect(MONGODBURL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        app.listen(PORT, () => console.log(`Приложение использует порт ${PORT}`));
    } catch (error) {
        console.log('error server', error.message);
        process.exit(1);
    }
}
start()