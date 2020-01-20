import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
    first_name: { type: String, required: true },
    last_name: String,
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    is_active: { type: Boolean, default: false },
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now }
})