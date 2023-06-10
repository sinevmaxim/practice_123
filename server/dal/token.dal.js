import BaseRepository from './base.dal';
import { TokenModel } from '../models';
export default class TokenRepository extends BaseRepository {
    constructor() {
        super();
        this.model = TokenModel;
    }

    async findByUserId(userId) {
        return this.model.findOne({ user: userId });
    }
    async findByRefreshToken(refreshToken) {
        return this.model.findOne({ refreshToken });
    }
    async deleteToken(refreshToken) {
        return this.model.deleteOne({ refreshToken });
    }

    async createToken(refreshToken,userId) {
        const token = await this.model.create({
            refreshToken: refreshToken,
            user: userId,
        });
        console.log(token);
        return token;
    }
}
