import { Document } from 'mongoose';

export interface Comment extends Document {
    readonly name: String;
    readonly email: String;
    readonly subject: String;
    readonly description: String;
    readonly created_at: Date;
}