import BaseRepository from './base.dal';
import { UserModel } from '../models';
export default class UserRepository extends BaseRepository {
    constructor() {
        super();
        this.model = UserModel;
    }

    async findByEmail(email) {
        return this.model.findOne({ email });
    }
    async findByPhone(phoneNumber) {
        return this.model.findOne({ phoneNumber });
    }
    async findByActivationLink(activationLink) {
        return this.model.findOne({ activationLink });
    }

    async createUser(user, hashPassword) {
        const newUser = new UserModel({
            lastName: user.lastName,
            firstName: user.firstName,
            email: user.email,
            phoneNumber: user.phoneNumber,
            password: hashPassword,
            role: 'user',
        });
        await newUser.save();
    }
}

