import { Document } from 'mongoose';

export interface Workshops extends Document {
    readonly name : string;
    readonly planPrice : string
    readonly team_limit: string;
    readonly plan_title : string;
    
}