import { UserModel } from '../../models/index.js';
import { PropertyRepository } from '../../dal/index';

export const create = async (req, res) => {
    try {
        const response = await PropertyRepository.createProperty(
            req.body,
            req.userId
        );

        return res.json({
            property: response,
            message: 'Successfully created property',
            type: 'success',
        });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            message: 'Creating property resulted in error',
            type: 'error',
        });
    }
};

export const getAllProperties = async (req, res) => {
    try {
        const properties = await PropertyRepository.findPropertiesWithUsers();
        // console.log(properties);
        res.json({
            properties,
            message: 'Successfully returned all properties',
            type: 'success',
        });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            message: 'Getting properties resulted in error',
            type: 'error',
        });
    }
};

export const getOne = async (req, res) => {
    try {
        const propertyId = req.params.id;

        const response = PropertyRepository.getOne(propertyId);
        if (response.type == 'success') {
            const user = await UserModel.findById(response.propertyObject.user);
            response.propertyObject.user = user;
            res.json({
                property: response.propertyObject,
                message: 'Successfully returned property',
                type: 'success',
            });
        } else {
            return response;
        }
    } catch (e) {
        console.log(e);
        res.status(500).json({
            message: 'Getting property resulted in error',
            type: 'error',
        });
    }
};

export const remove = async (req, res) => {
    try {
        const propertyId = req.params.id;
        const property = await PropertyRepository.findPropertyById(propertyId);
        if (property.user == req.userId) {
            PropertyRepository.deltePropertyById(propertyId);
        } else {
            return res.status(403).json({
                message: 'Insufficent rights to delete property',
                type: 'error',
            });
        }

        res.json({
            message: 'Successfully removed property',
            type: 'success',
        });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            message: 'Getting property resulted in error',
            type: 'error',
        });
    }
};

export const update = async (req, res) => {
    try {
        const propertyId = req.params.id;

        const property = await PropertyRepository.updateProperty(
            { id: propertyId, ...req.body },
            req.userId
        );

        res.json({
            property,
            message: 'Successfully updated property',
            type: 'success',
        });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            message: 'Updating property resulted in error',
            type: 'error',
        });
    }
};
