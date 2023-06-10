import express from 'express';
import {
    loginValidation,
    registrationValidation,
} from '../validators/index.js';
import * as UserController from '../controllers/User/UserController.js';
import { checkAuth, checkValidation } from '../utils/index.js';

const router = express.Router();

// router.get('/me', checkAuth, UserController.getMe);
router.post(
    '/register',
    registrationValidation,
    checkValidation,
    UserController.register
);
router.post('/login', loginValidation, checkValidation, UserController.login);
router.post('/logout', checkAuth, UserController.logout);
router.get('/refresh', UserController.refresh);

export default router;
