import express from 'express';
import mongoose from 'mongoose';
import config from 'config';
import cookieParser from 'cookie-parser';
import {
    authRouter,
    propertyRouter,
    fileRouter,
    rentApplicationRouter,
} from './routes/index.js';
import fileUpload from 'express-fileupload';
import cors from 'cors';
import { checkAuth, checkFileSharing } from './utils/index.js';

const PORT = config.get('serverPort') || 5000;
const app = express();

// Middlewares
app.use(express.json());
app.use(cors({ origin: config.get('clientUrl'), credentials: true }));
app.use(cookieParser());
app.use(fileUpload());
// app.use(express.urlencoded({ extends: true }));

// Routes
app.use(
    '/uploads',
    checkAuth,
    checkFileSharing,
    express.static('uploads')
);
app.use('/api/auth', authRouter);
app.use('/api/property', propertyRouter);
app.use('/api/rentApplication', rentApplicationRouter);
app.use('/files', fileRouter);

const start = async () => {
    try {
        await mongoose.connect(config.get('dbUrl'));
        app.listen(PORT, () => {
            console.log(`CONNECTED TO PORT = ${PORT}`);
        });
    } catch (e) {
        console.log(e);
    }
};

start();
