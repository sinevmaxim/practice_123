import { Schema, model, ObjectId } from 'mongoose';

const UserSchema = new Schema(
    {
        firstName: { type: String, required: true },
        lastName: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        phoneNumber: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        reviews: [{ type: ObjectId, ref: 'Review' }],
        image: { type: String, required: false },
        roles: [{ type: String, required: true }],
        isActivated: { type: Boolean, default: false },
        activationLink: { type: String },
    },
    { timestamps: true }
);

export default model('User', UserSchema);
