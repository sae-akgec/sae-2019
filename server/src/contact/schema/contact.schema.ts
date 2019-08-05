import * as mongoose from 'mongoose';

export const ContactSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    subject: { type: String, required: true },
    description: { type: String, required: true },
    created_at: { type: Date, default: Date.now }
})