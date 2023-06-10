import path from 'path';

export default (allowedExtArray) => {
    return (req, res, next) => {
        const files = req.files;

        const fileExt = [];
        Object.keys(files).forEach((key) => {
            fileExt.push(path.extname(files[key].name));
        });

        const isAllowed = fileExt.every((ext) => allowedExtArray.includes(ext));

        if (!isAllowed) {
            return res.status(422).json({
                message: `Trying to upload files with extensions that are not allowed. Allowed extensions: ${allowedExtArray.toString()}`,
                type: 'error',
            });
        }

        next();
    };
};
