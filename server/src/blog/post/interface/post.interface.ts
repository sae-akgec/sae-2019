import { Document } from 'mongoose';
import { Comment } from './comment.interface'

export interface Post extends Document {
    readonly title: String;
    readonly slug: String;
    readonly short_description: String;
    readonly description: String;
    readonly category_id: String;
    readonly category_name: String;
    readonly author_name: String;
    readonly author_id: String;
    readonly img_url: String;
    readonly created_at: Date;
    readonly updated_at: Date;
    readonly is_true: Boolean;
    readonly comments: Comment[];
}