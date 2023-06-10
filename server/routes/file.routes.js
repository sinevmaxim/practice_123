import express from 'express';
import {
    checkAuth,
    fileExists,
    fileExtensionLimiter,
    fileSizeLimiter,
} from '../utils/index.js';
import * as FileController from '../controllers/File/FileController.js';

const router = express.Router();

// router.post(
//     '/getFile/:id',
//     checkAuth,
//     FileController.getFile
// )

router.post(
    '/getPath',
    checkAuth,
    fileExists,
    fileSizeLimiter,
    fileExtensionLimiter(['.png', '.jpeg', '.jpg', '.pdf', '.doc', '.docx']),
    FileController.getPath
);

export default router;
