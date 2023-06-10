export default (req, res, next) => {
    // console.log(req.files);
    if (!req.files)
        return res
            .status(400)
            .json({ message: 'Missing files', type: 'error' });

    next();
};
