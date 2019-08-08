import * as mongoose from 'mongoose';

export const CommentSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    subject: { type: String, required: true },
    description: { type: String, required: true },
    created_at: { type: Date, default: Date.now }
})

export const PostSchema = new mongoose.Schema({
    title: {type: String, required: true},
    description: {type: String, required: true},
    slug: {type: String, required: true, unique: true},
    short_description: {type: String, required: true},
    category_name: {type: String, required: true},
    category_id: {type: String, required: true},
    author_name: {type: String, required: true},
    img_url: {type: String, required: true, default: "sample"},
    is_active: {type: Boolean, default:true},
    author_id: {type: String, required: true},
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now },
    comments: {
        type: [CommentSchema]
    }
})
