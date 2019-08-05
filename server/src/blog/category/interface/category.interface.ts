import { Document } from 'mongoose';

export interface Category extends Document {
    readonly title: string;
    readonly count: number;
    readonly created_at: Date;
}