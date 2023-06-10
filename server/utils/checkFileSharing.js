import FileModel from '../models/File.model.js';

const UnauthorizedError = (res) => {
    res.status(401).json({ messasge: 'Not authorized', type: 'error' });
};

export default async (req, res, next) => {
    const filePath = req.originalUrl.substring(1);
    const file = await FileModel.findOne({ path: filePath });
    console.log(file);
    if (!file.sharedWith.includes(req.user.id) && req.user.id != file.owner) {
        return UnauthorizedError(res);
    }
    next();
};
