import { validationResult } from 'express-validator';

export default (req, res, next) => {
    const result = validationResult(req);
    console.log(result);
    if (result.errors.length > 0) {
        return res.status(400).json({
            message: 'Incorrect request',
            errors: result.errors,
            type: 'error',
        });
    }

    next();
};
