import { check } from 'express-validator';

export const propertyValidation = [
    check('bedrooms', 'Bedrooms must be a numeric value').isNumeric(),
    check('bathrooms', 'Bathrooms must be a numeric value').isNumeric(),
    check('price', 'Price must be a numeric value').isNumeric(),
    check('area', 'Area field must be filled').notEmpty(),
    check('city', 'City field must be filled').notEmpty(),
    check('country', 'Country field must be filled').notEmpty(),
    check('zipcode', 'Zipcode field must be filled').notEmpty(),
    check('street', 'Street field must be filled').notEmpty(),
    check('house', 'House field must be filled').notEmpty(),
    check('isAvailable', 'isAvailable field must be type Boolean').isBoolean(),
    check('state', 'State field must be type String').optional().isString(),
    check('county', 'County field must be type String').optional().isString(),
    check('images', 'Images field must be type Array').optional().isArray(),
    check('other', 'Other field must be type Array').optional().isArray(),
];
