import { Schema, model, ObjectId } from 'mongoose';

const PropertySchema = new Schema(
    {
        bedrooms: { type: Number, required: true },
        bathrooms: { type: Number, required: true },
        area: { type: Number, required: true },
        country: { type: String, required: true },
        city: { type: String, required: true },
        zipcode: { type: String, required: true },
        street: { type: String, required: true },
        house: { type: String, required: true },
        price: { type: Number, required: true },
        isAvailable: { type: Boolean, required: true },
        county: { type: String, required: false },
        state: { type: String, required: false },
        images: [{ type: String, required: false }],
        views: { type: Number, required: false, default: 0 },
        applicationsSent: { type: Number, required: false, default: 0 },
        other: [{ type: String, required: false }],
        user: { type: ObjectId, ref: 'User', required: true },
    },
    { timestamps: true }
);

export default model('Property', PropertySchema);
