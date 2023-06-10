import express from 'express';
import * as PropertyController from '../controllers/Property/PropertyController.js';
import { propertyValidation } from '../validators/index.js';
import { checkAuth, checkValidation } from '../utils/index.js';

const router = express.Router();

router.get('/', PropertyController.getAllProperties);
router.post(
    '/',
    checkAuth,
    propertyValidation,
    checkValidation,
    PropertyController.create
);
router.get('/:id', PropertyController.getOne);
router.delete('/:id', checkAuth, PropertyController.remove);
router.patch(
    '/:id',
    checkAuth,
    propertyValidation,
    checkValidation,
    PropertyController.update
);

export default router;
