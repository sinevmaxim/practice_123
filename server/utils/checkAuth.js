import { validateAccessToken } from '../controllers/Token/TokenController.js';

const UnauthorizedError = (res) =>{
    res.status(401).json({ messasge: 'Not authorized', type: 'error' });}

export default (req, res, next) => {
    // console.log(req)
    if (!req.headers.authorization) {
        return UnauthorizedError(res);
    }

    const token = (req.headers.authorization || '').replace('Bearer ', '');
    if (token) {
        try {
            const userData = validateAccessToken(token);
            if (!userData) {
                return UnauthorizedError(res);
            }
            req.user = userData;
            next();
        } catch (e) {
            return UnauthorizedError(res);
        }
    } else {
        return UnauthorizedError(res);
    }
};
