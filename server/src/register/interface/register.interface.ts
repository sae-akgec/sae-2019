import { Document } from 'mongoose';

export interface Register extends Document {
    readonly name: string;
    readonly email: string;
    readonly phone: string;
    // readonly domain: string;
    readonly branch: string;
    readonly studentNo: string;
    // readonly skills: string;
    // readonly usp: string;
    readonly created_at: Date;
}