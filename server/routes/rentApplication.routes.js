import express from 'express';
import * as RentApplicationController from '../controllers/RentApplication/RentApplicationController.js';
import { checkAuth } from '../utils/index.js';

const router = express.Router();

// router.get('/', PropertyController.getAllProperties);
router.post('/', checkAuth, RentApplicationController.create);
// router.get('/:id', PropertyController.getOne);
// router.delete('/:id', checkAuth, PropertyController.remove);
// router.patch(
//     '/:id',
//     checkAuth,
//     propertyValidation,
//     checkValidation,
//     PropertyController.update
// );

export default router;
