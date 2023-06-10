import { Schema, model, ObjectId } from 'mongoose';

const ReviewSchema = new Schema(
    {
        rating: { type: Number, required: true },
        text: { type: String, required: true },
        author: { type: ObjectId, ref: 'User' },
    },
    { timestamps: true }
);

export default model('Review', ReviewSchema);
