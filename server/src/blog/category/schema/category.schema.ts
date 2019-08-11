import * as mongoose from 'mongoose';

export const CategorySchema = new mongoose.Schema({
    title: String,
    count: { type: Number, default: 0 },
    created_at: { type: Date, default: Date.now }
})