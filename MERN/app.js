const express = require('express');
const config = require('config');
const mongoose = require('mongoose');
const authRouter = require('./routes/auth/auth.routes');
const linkRouter = require('./routes/link/link.routes');
const redirectRouter = require('./routes/redirect/redirect.routes');

const app = express();

app.use(express.json({ extended: true }));

const PORT = config.get('port') || 5000;
const MONGODBURL = config.get('mongodbUrl');

app.use('/api/auth', authRouter);
app.use('/api/link', linkRouter);
app.use('/t', redirectRouter);

async function start() {
    try {
        await mongoose.connect(MONGODBURL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
        })
        app.listen(PORT, () => console.log(`Приложение использует порт ${PORT}`));
    } catch (error) {
        console.log('error server', error.message);
        process.exit(1);
    }
}
start()