import { FileModel } from '../../models/index.js';
import config from 'config';
import path from 'path';

export const getPath = async (req, res) => {
    try {
        const { file } = req.files;
        const url = `/uploads/${file.name}`;
        res.json({
            url,
        });
    } catch (e) {
        return res
            .status(404)
            .json({ message: 'Getting file resulted in error', type: 'error' });
    }
};

// export const getFile = async (req, res) => {
//     try {
//         const file = await FileModel.findOne({ _id: req.params.id });
//         console.log(`${config.get('apiUrl')}/${file.path}`);
//         if (
//             file.sharedWith.includes(req.user.id) ||
//             req.user.id == file.owner
//         ) {
//             return res.sendFile(file.path, {
//                 root: '.',
//             });
//         }
//         return res
//             .status(404)
//             .json({ message: 'File not found', type: 'error' });
//     } catch (e) {
//         return res
//             .status(404)
//             .json({ message: 'Getting file resulted in error', type: 'error' });
//     }
// };
