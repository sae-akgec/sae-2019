import { Document } from 'mongoose';

export interface Contact extends Document {
    readonly name: string;
    readonly email: string;
    readonly phone: string;
    readonly subject: string;
    readonly description: string;
    readonly created_at: Date;
}