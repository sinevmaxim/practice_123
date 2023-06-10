import jwt from 'jsonwebtoken';
import config from 'config';
import { TokenModel } from '../../models/index.js';

export const generateTokens = (payload) => {
    const accessToken = jwt.sign(payload, config.get('jwtAccessToken'), {
        expiresIn: '30m',
    });
    const refreshToken = jwt.sign(payload, config.get('jwtRefreshToken'), {
        expiresIn: '30d',
    });

    return {
        accessToken,
        refreshToken,
    };
};

export const saveToken = async (userId, refreshToken) => {
    const tokenData = await TokenRepository.findByUserId(userId);
    console.log({ refreshToken: refreshToken, user: userId });
    if (tokenData) {
        tokenData.refreshToken = refreshToken;
        return tokenData.save();
    }
    const token = createToken(refreshToken, userId);
    return token;
};

export const validateAccessToken = (token) => {
    try {
        const userData = jwt.verify(token, config.get('jwtAccessToken'));
        return userData;
    } catch (e) {
        console.log(e);
    }
};

export const validateRefreshToken = (token) => {
    try {
        const userData = jwt.verify(token, config.get('jwtRefreshToken'));
        return userData;
    } catch (e) {
        console.log(e);
    }
};

export const removeToken = async (refreshToken) => {
    const tokenData = await TokenRepository.deleteToken(refreshToken);
    return tokenData;
};

export const findToken = async (refreshToken) => {
    const tokenData = await TokenRepository.findByRefershToken(refreshToken);
    return tokenData;
};
