import { Schema, model, ObjectId } from 'mongoose';

const RentApplicationSchema = new Schema({
    employmentVerificationLetter: { type: ObjectId, ref: 'File' },
    paystubs: { type: ObjectId, ref: 'File' },
    bankStatements: { type: ObjectId, ref: 'File' },
    federalTaxReturn: { type: ObjectId, ref: 'File' },
    photoId: { type: ObjectId, ref: 'File' },
    referenceLetter: { type: ObjectId, ref: 'File' },
    additionalDocuments: { type: ObjectId, ref: 'File' },
    user: { type: ObjectId, ref: 'User' },
}, { timestamps: true });

export default model('RentApplication', RentApplicationSchema);
