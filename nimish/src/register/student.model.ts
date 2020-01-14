import * as mongoose from 'mongoose';

export const StudentSchema = new mongoose.Schema({
    name: { type: String, required: true },
    studentNumber: { type: String, required: true },
    year: { type: String, required: true },
    branch: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    email: { type: String, required: true }
})

export interface Student extends mongoose.Document {
    id: string,
    name: string,
    studentNumber: string,
    year: string,
    branch: string,
    phoneNumber: string,
    email: string
}