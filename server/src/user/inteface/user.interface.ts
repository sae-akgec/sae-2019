import { Document } from 'mongoose';

export interface User extends Document {
    readonly email: string;
    readonly password: string;
    readonly first_name: string;
    readonly last_name: string;
    readonly is_active: string;
    readonly created_at: Date;
    readonly updated_at: Date;
}