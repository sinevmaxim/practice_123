const FILE_SIZE_LIMIT = 5 * 1024 * 1024;

export default (req, res, next) => {
    const files = req.files;
    const filesOverLimit = [];

    Object.keys(files).forEach((key) => {
        if (files[key].size > FILE_SIZE_LIMIT) {
            filesOverLimit.push(files[key].name);
        }
    });

    if (filesOverLimit.length) {
        return res.status(403).json({
            message: `Current files are over 5 MB limit: ${filesOverLimit.toString()}`,
            type: 'error',
        });
    }

    next();
};
