import BaseRepository from './base.dal';
import { PropertyModel } from '../models/index';

export default class PropertyRepository extends BaseRepository {
    constructor() {
        super();
        this.model = PropertyModel;
    }

    async findPropertiesWithUsers() {
        return this.model.find().populate('user').exec();
    }
    async findPropertyById(id) {
        return this.model.findOne({ _id: id });
    }
    async deltePropertyById(id) {
        return this.model.findOneAndDelete({ _id: id }, (e, doc) => {
            if (e) {
                console.log(e);
                return {
                    message: 'Deleting property resulted in error',
                    type: 'error',
                };
            }
        });
    }
    async updateProperty(property, userId) {
        return this.model.updateOne(
            {
                _id: property.id,
            },
            {
                bedrooms: property.bedrooms,
                bathrooms: property.bathrooms,
                area: property.area,
                country: property.country,
                city: property.city,
                zipcode: property.zipcode,
                street: property.street,
                house: property.house,
                price: property.price,
                isAvailable: property.isAvailable,
                county: property.county,
                state: property.state,
                images: property.images,
                other: property.other,
                user: userId,
            }
        );
    }
    async getOne(id) {
        return this.model.findOneAndUpdate(
            {
                _id: id,
            },
            {
                $inc: { views: 1 },
            },
            {
                returnDocument: 'after',
            },
            async (e, propertyObject) => {
                if (e) {
                    console.log(e);
                    return {
                        message: 'Getting property resulted in error',
                        type: 'error',
                    };
                }

                if (!propertyObject) {
                    return {
                        message: 'Property not found',
                        type: 'error',
                    };
                }
                return { propertyObject, type: 'success' };
            }
        );
    }
    async createProperty(property, userId) {
        const newProperty = new PropertyModel({
            bedrooms: property.bedrooms,
            bathrooms: property.bathrooms,
            area: property.area,
            country: property.country,
            city: property.city,
            zipcode: property.zipcode,
            street: property.street,
            house: property.house,
            price: property.price,
            isAvailable: property.isAvailable,
            county: property.county,
            state: property.state,
            images: property.images,
            other: property.other,
            user: userId,
        });
        return newProperty.save();
    }
}
