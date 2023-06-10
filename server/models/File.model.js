import { Schema, model, ObjectId } from 'mongoose';

const FileSchema = new Schema(
    {
        path: { type: String, required: true },
        sharedWith: [{ type: ObjectId, ref: 'User', required: false }],
        owner: { type: ObjectId, ref: 'User', required: true },
        md5: { type: String, required: true },
    },
    { timestamps: true }
);

export default model('File', FileSchema);
