import { check } from 'express-validator';

export const registrationValidation = [
    check('email', 'Incorrect email').isEmail(),
    check('password', 'Password must be at least 6 chars long').isLength({
        min: 6,
    }),
    check('firstName', 'First name field must be filled').notEmpty(),
    check('lastName', 'Last name field must be filled').notEmpty(),
    check('phoneNumber', 'Phone number must be valid').isMobilePhone(),
];

export const loginValidation = [
    check('email', 'Incorrect email').isEmail(),
    check('password', 'Password must be at least 6 chars long').isLength({
        min: 6,
    }),
];
