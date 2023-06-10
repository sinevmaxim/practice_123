import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import config from 'config';
import { v4 as uuidv4 } from 'uuid';

import { UserDto } from '../../dtos/index.js';
import {
    saveToken,
    generateTokens,
    removeToken,
    validateRefreshToken,
    findToken,
} from '../Token/TokenController.js';
import { UserModel } from '../../models/index.js';
import UserRepository from '../../dal/user.dal.js';
// import {mailController} from '../Mail/MailController.js';

export const register = async (req, res) => {
    try {
        console.log(req.body);
        const userObjectEmail = await UserModel.findByEmail(req.body.email);
        const userObjectPhoneNumber = await UserRepository.findByPhone(
            req.body.phoneNumber
        );
        if (userObjectEmail) {
            return res
                .status(400)
                .json({ message: 'User with this email already exists' });
        }

        if (userObjectPhoneNumber) {
            return res.status(400).json({
                message: 'User with this phone number already exists',
            });
        }

        const hashPassword = await bcrypt.hash(req.body.password, 11);
        const user = await UserRepository.createUser(req.body, hashPassword);

        const activationLink = uuidv4();
        // await mailController.sendActivationMail(email, `${config.get('apiUrl')}/api/activate/${activationLink}`);
        const userDto = new UserDto(user);
        const tokens = generateTokens({ ...userDto });
        await saveToken(userDto.id, tokens.refreshToken);

        res.cookie('refreshToken', tokens.refreshToken, {
            maxAge: 30 * 24 * 60 * 60 * 1000,
            httpOnly: true,
        });

        return res.json({
            user: userDto,
            ...tokens,
            message: 'Successfully created user',
            type: 'success',
        });
    } catch (e) {
        console.log(e);
        res.status(500).json({ message: 'Registration Error', type: 'error' });
    }
};

export const login = async (req, res) => {
    try {
        const user = await UserRepository.findByEmail(req.body.email);
        console.log(req.body);
        if (!user) {
            return res.status(404).json({
                message: 'Incorrect login or password',
                type: 'error',
            });
        }

        const isPasswordValid = await bcrypt.compare(
            req.body.password,
            user.password
        );

        if (!isPasswordValid) {
            return res.status(400).json({
                message: 'Incorrect login or password',
                type: 'error',
            });
        }

        const userDto = new UserDto(user);
        const tokens = generateTokens({ ...userDto });
        await saveToken(userDto.id, tokens.refreshToken);

        res.cookie('refreshToken', tokens.refreshToken, {
            maxAge: 30 * 24 * 60 * 60 * 1000,
            httpOnly: true,
        });

        return res.json({
            user: userDto,
            tokens,
            message: 'Successfully logged in',
            type: 'success',
        });
    } catch (e) {
        console.log(e);
        res.status(500).json({ message: 'Authorization Error', type: 'error' });
    }
};

export const getMe = async (req, res) => {
    try {
        const user = await UserRepository.findById(req.user.id);
        console.log(req.body);
        if (!user) {
            return res
                .status(404)
                .json({ message: 'User not found', type: 'error' });
        }
        const { password, ...userData } = user._doc;

        return res.json({
            ...userData,
            message: 'Successfully authenticated',
            type: 'success',
        });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            message: 'Authentication Error',
            type: 'error',
        });
    }
};

export const logout = async (req, res) => {
    try {
        const { refreshToken } = req.cookies;
        const token = await removeToken(refreshToken);
        res.clearCookie('refreshToken');
        return res.json(token);
    } catch (e) {
        console.log(e);
    }
};

export const activate = async (req, res) => {
    const activationLink = req.params.link;
    const user = await UserRepository.findByActivationLink(activationLink);
    if (!user) {
        return res
            .status(404)
            .json({ message: 'User not found', type: 'error' });
    }

    user.isActivated = true;
    await user.save();
    return res.redirect(config.get('clientUrl'));
};

export const refresh = async (req, res) => {
    try {
        const { refreshToken } = req.cookies;
        console.log(refreshToken);

        if (!refreshToken) {
            return res.status(404).json({ message: 'Invalid token' });
        }

        const userData = validateRefreshToken(refreshToken);
        const tokenFromDataBase = await findToken(refreshToken);

        if (!userData || !tokenFromDataBase) {
            return res.status(404).json({ message: 'No token found' });
        }
        const user = await UserRepository.findById(userData.id);
        const userDto = new UserDto(user);
        const tokens = generateTokens({ ...userDto });
        await saveToken(userDto.id, tokens.refreshToken);

        res.cookie('refreshToken', tokens.refreshToken, {
            maxAge: 30 * 24 * 60 * 60 * 1000,
            httpOnly: true,
        });

        return res.json({
            user: userDto,
            ...tokens,
        });
    } catch (e) {
        console.log(e);
    }
};
