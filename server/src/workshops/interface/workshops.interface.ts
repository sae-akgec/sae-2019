import { Document } from 'mongoose';

export interface Workshops extends Document {
    readonly planId : string;
    readonly planMembers : string
    readonly planPrice: string;
}