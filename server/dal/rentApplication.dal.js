import BaseRepository from './base.dal';
import { RentApplicationModel } from '../models';
export default class RentApplicationRepository extends BaseRepository {
    constructor() {
        super();
        this.model = RentApplicationModel;
    }

    async findByUserId(userId) {
        return this.model.findOne({ user: userId });
    }

    async createRentApplication(rentApplication, user) {
        const newRentApplication = new RentApplicationModel({
            ...objectToRentApplication,
            user: req.user.id,
        });

        await newRentApplication.save();
        return newRentApplication;
    }
}
