import { RentApplicationModel, FileModel } from '../../models/index.js';
import bcrypt from 'bcrypt';
import { RentApplicationDto } from '../../dtos/rentApplication.dto.js';
import { RentApplicationRepository } from '../../dtos/rentApplication.dto.js';

export const create = async (req, res) => {
    try {
        const files = req.files;
        const objectToRentApplication = {};
        const rentApplicationObject =
            await RentApplicationRepository.findByUserId(req.user.id);
        if (rentApplicationObject) {
            return res.status(500).json({
                type: 'error',
                message: 'User already has an active rent application',
            });
        }

        for (const fileType in files) {
            const file = files[fileType];
            console.log(fileType, file);
            console.log(file);
            const hash = await bcrypt.hash(file.md5, 3);
            const cleanedHash = hash.replaceAll('/', 'slash');
            objectToRentApplication[fileType] = new FileModel({
                path: `uploads/${cleanedHash}.pdf`,
                owner: req.user.id,
                md5: file.md5,
            });

            await objectToRentApplication[fileType].save();

            file.mv(`uploads/${cleanedHash}.pdf`, (e) => {
                if (e) {
                    console.log(e);
                    return res.status(500).json({
                        type: 'error',
                        message: 'Error uploading files',
                    });
                }
            });
        }
        // Object.entries(files).forEach(async ([fileType, file]) => {
        //     const hash = await bcrypt.hash(file.md5, 3);
        //     const cleanedHash = hash.replace('/', 'slash');
        //     objectToRentApplication[fileType] = new FileModel({
        //         path: `uploads/${cleanedHash}`,
        //         owner: req.user.id,
        //         md5: file.md5,
        //     });

        //     await objectToRentApplication[fileType].save();

        //     file.mv(`uploads/${cleanedHash}`, (e) => {
        //         if (e) {
        //             console.log(e);
        //             return res.status(500).json({
        //                 type: 'error',
        //                 message: 'Error uploading files',
        //             });
        //         }
        //     });
        // });

        console.log(objectToRentApplication);
        const rentApplication = RentApplicationRepository.createRentApplication(
            objectToRentApplication,
            req.user.id
        );
        const rentApplicationDto = new RentApplicationDto(rentApplication);
        const { id, ...response } = rentApplicationDto;
        return res.json({
            rentApplication: response,
            message: 'Successfully created Rent Application',
            type: 'success',
        });
    } catch (e) {
        console.log(e);
        res.status(500).json({
            message: 'Creating Rent Application resulted in error',
            type: 'error',
        });
    }
};

// export const getOne = async (req, res) => {
//     try {
//         const rentApplicationId = req.params.id;

//         rentApplication.findOneAndUpdate(
//             {
//                 _id: rentApplicationId,
//             },
//             {
//                 $inc: { views: 1 },
//             },
//             {
//                 returnDocument: 'after',
//             },
//             async (e, rentApplicationObject) => {
//                 if (e) {
//                     console.log(e);
//                     return res.status(500).json({
//                         message: 'Getting Rent Application resulted in error',
//                         type: 'error',
//                     });
//                 }

//                 if (!rentApplicationObject) {
//                     return res.status(404).json({
//                         message: 'Rent Application not found',
//                         type: 'error',
//                     });
//                 }

//                 const user = await User.findById(rentApplicationObject.user);
//                 rentApplicationObject.user = user;
//                 res.json({
//                     rentApplication: rentApplicationObject,
//                     message: 'Successfully returned Rent Application',
//                     type: 'success',
//                 });
//             }
//         );
//     } catch (e) {
//         console.log(e);
//         res.status(500).json({
//             message: 'Getting Rent Application resulted in error',
//             type: 'error',
//         });
//     }
// };

// export const remove = async (req, res) => {
//     try {
//         const rentApplicationId = req.params.id;
//         const rentApplication = await rentApplication.findOne({
//             _id: rentApplicationId,
//         });
//         if (rentApplication.user == req.userId) {
//             rentApplication.findOneAndDelete(
//                 { _id: rentApplicationId },
//                 (e, doc) => {
//                     if (e) {
//                         console.log(e);
//                         return res.status(500).json({
//                             message:
//                                 'Deleting Rent Application resulted in error',
//                             type: 'error',
//                         });
//                     }
//                 }
//             );
//         } else {
//             return res.status(403).json({
//                 message: 'Insufficent rights to delete Rent Application',
//                 type: 'error',
//             });
//         }

//         res.json({
//             message: 'Successfully removed Rent Application',
//             type: 'success',
//         });
//     } catch (e) {
//         console.log(e);
//         res.status(500).json({
//             message: 'Getting Rent Application resulted in error',
//             type: 'error',
//         });
//     }
// };

// export const update = async (req, res) => {
//     try {
//         const rentApplicationId = req.params.id;

//         const rentApplication = await rentApplication.updateOne(
//             {
//                 _id: rentApplicationId,
//             },
//             {
//                 bedrooms: req.body.bedrooms,
//                 bathrooms: req.body.bathrooms,
//                 area: req.body.area,
//                 country: req.body.country,
//                 city: req.body.city,
//                 zipcode: req.body.zipcode,
//                 street: req.body.street,
//                 house: req.body.house,
//                 price: req.body.price,
//                 isAvailable: req.body.isAvailable,
//                 county: req.body.county,
//                 state: req.body.state,
//                 images: req.body.images,
//                 other: req.body.other,
//                 user: req.userId,
//             }
//         );

//         res.json({
//             rentApplication,
//             message: 'Successfully updated Rent Application',
//             type: 'success',
//         });
//     } catch (e) {
//         console.log(e);
//         res.status(500).json({
//             message: 'Updating Rent Application resulted in error',
//             type: 'error',
//         });
//     }
// };
