import * as mongoose from 'mongoose';

export const RegisterSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    // domain: { type: String, required: true },
    branch: { type: String, required: true },
    // skills: { type: String, required: true },
    // usp: { type: String, required: true },
    studentNo: { type: String, required: true },
    created_at: { type: Date, default: Date.now }
})